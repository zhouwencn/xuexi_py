import logging
import secrets
import subprocess
from datetime import UTC, datetime, timedelta

from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.models import LabEnvironment, User

logger = logging.getLogger(__name__)


class LabEnvironmentError(RuntimeError):
    pass


def _run(command: list[str], *, timeout: int = 30) -> str:
    completed = subprocess.run(command, capture_output=True, text=True, timeout=timeout, check=False)
    if completed.returncode != 0:
        raise LabEnvironmentError((completed.stderr or completed.stdout)[-4000:])
    return completed.stdout.strip()


def _remove(name: str | None, kind: str) -> None:
    if not name:
        return
    command = ["docker", kind, "rm", "-f", name] if kind == "container" else ["docker", "network", "rm", name]
    try:
        subprocess.run(command, capture_output=True, text=True, timeout=20, check=False)
    except (FileNotFoundError, subprocess.TimeoutExpired):
        logger.warning("清理 Docker 资源失败：%s", name)


def stop_environment(environment: LabEnvironment) -> None:
    _remove(environment.fastapi_container, "container")
    _remove(environment.postgres_container, "container")
    _remove(environment.network_name, "network")
    environment.status = "stopped"


def create_environment(session: Session, user: User) -> LabEnvironment:
    settings = get_settings()
    if not settings.lab_environments_enabled:
        raise LabEnvironmentError("lab environments disabled")
    existing = session.scalar(select(LabEnvironment).where(LabEnvironment.user_id == user.id))
    now = datetime.now(UTC)
    if existing and existing.status == "running" and existing.expires_at > now:
        raise LabEnvironmentError("environment already running")
    if existing:
        stop_environment(existing)
        session.delete(existing)
        session.flush()

    suffix = secrets.token_hex(6)
    network = f"xuexi-lab-net-{suffix}"
    postgres = f"xuexi-lab-db-{suffix}"
    fastapi = f"xuexi-lab-api-{suffix}"
    password = secrets.token_urlsafe(18)
    environment = LabEnvironment(
        user_id=user.id,
        status="starting",
        network_name=network,
        postgres_container=postgres,
        fastapi_container=fastapi,
        expires_at=now + timedelta(minutes=settings.lab_environment_ttl_minutes),
    )
    session.add(environment)
    session.flush()
    try:
        _run(["docker", "network", "create", "--label", "xuexi_py_lab=true", network])
        _run([
            "docker", "run", "-d", "--pull", "never", "--name", postgres, "--network", network,
            "--user", "postgres",
            "--memory", "256m", "--cpus", "0.5", "--pids-limit", "128",
            "--cap-drop", "ALL", "--security-opt", "no-new-privileges",
            "-e", "POSTGRES_DB=lab", "-e", "POSTGRES_USER=lab", "-e", f"POSTGRES_PASSWORD={password}",
            "postgres:16-alpine",
        ])
        _run([
            "docker", "run", "-d", "--pull", "never", "--name", fastapi, "--network", network,
            "--read-only", "--tmpfs", "/tmp:rw,noexec,nosuid,size=32m", "--memory", "256m",
            "--cpus", "0.5", "--pids-limit", "128", "--cap-drop", "ALL",
            "--security-opt", "no-new-privileges", "-p", "127.0.0.1::8000",
            "-e", f"DATABASE_URL=postgresql+psycopg://lab:{password}@{postgres}:5432/lab",
            settings.lab_runtime_image,
        ])
        port_output = _run(["docker", "port", fastapi, "8000/tcp"])
        environment.host_port = int(port_output.rsplit(":", 1)[-1])
        environment.status = "running"
        session.commit()
        session.refresh(environment)
        return environment
    except Exception:
        stop_environment(environment)
        session.rollback()
        raise


def cleanup_expired_environments(session: Session) -> int:
    expired = session.scalars(
        select(LabEnvironment).where(
            LabEnvironment.status == "running",
            LabEnvironment.expires_at <= datetime.now(UTC),
        )
    ).all()
    for environment in expired:
        stop_environment(environment)
    if expired:
        session.commit()
    return len(expired)
