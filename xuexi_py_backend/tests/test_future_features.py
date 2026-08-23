import json
from types import SimpleNamespace

import pytest

from app.core.security import hash_password, verify_password
from app.services import code_execution
from app.services.code_execution import ExecutionUnavailableError
from app.services.review import build_code_diff, review_python_code
from app.services import lab_environment


def test_password_is_hashed_and_verifiable() -> None:
    encoded = hash_password("correct horse battery staple")

    assert "correct horse" not in encoded
    assert verify_password("correct horse battery staple", encoded)
    assert not verify_password("wrong password", encoded)


def test_code_execution_is_closed_by_default(monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.setattr(code_execution, "get_settings", lambda: SimpleNamespace(code_execution_enabled=False))

    with pytest.raises(ExecutionUnavailableError):
        code_execution.run_python_tests("print('unsafe')", [])


def test_enabled_runner_uses_docker_security_limits(monkeypatch: pytest.MonkeyPatch) -> None:
    settings = SimpleNamespace(
        code_execution_enabled=True,
        code_runner_image="python:3.12-alpine",
        code_execution_timeout_seconds=5,
    )
    captured: dict[str, object] = {}

    def fake_run(command: list[str], **kwargs: object) -> SimpleNamespace:
        captured["command"] = command
        captured["kwargs"] = kwargs
        payload = {"passed": 1, "total": 1, "results": [{"name": "hidden", "passed": True, "error": ""}], "output": ""}
        return SimpleNamespace(returncode=0, stdout=json.dumps(payload), stderr="")

    monkeypatch.setattr(code_execution, "get_settings", lambda: settings)
    monkeypatch.setattr(code_execution.subprocess, "run", fake_run)

    result = code_execution.run_python_tests("def add(a, b): return a + b", [{"name": "hidden", "code": "assert add(1, 2) == 3"}])

    command = captured["command"]
    assert isinstance(command, list)
    assert ["--network", "none"] == command[command.index("--network"):command.index("--network") + 2]
    assert "--read-only" in command
    assert ["--pull", "never"] == command[command.index("--pull"):command.index("--pull") + 2]
    assert ["--cap-drop", "ALL"] == command[command.index("--cap-drop"):command.index("--cap-drop") + 2]
    assert "no-new-privileges" in command
    assert captured["kwargs"]["timeout"] == 5
    assert result.passed == 1


def test_review_returns_diff_and_actionable_rules() -> None:
    reference = "def add(item, bucket=None):\n    return item\n"
    submitted = "def add(item, bucket=[]):\n    print(item)\n    return item\n"

    diff = build_code_diff(reference, submitted)
    review = review_python_code(submitted)

    assert "reference.py" in diff and "submission.py" in diff
    assert any("可变默认参数" in item for item in review)
    assert any("print" in item for item in review)


def test_lab_environment_is_closed_by_default(monkeypatch: pytest.MonkeyPatch) -> None:
    monkeypatch.setattr(lab_environment, "get_settings", lambda: SimpleNamespace(lab_environments_enabled=False))

    with pytest.raises(lab_environment.LabEnvironmentError, match="disabled"):
        lab_environment.create_environment(SimpleNamespace(), SimpleNamespace(id="user-1"))


def test_lab_environment_uses_scoped_docker_resources(monkeypatch: pytest.MonkeyPatch) -> None:
    settings = SimpleNamespace(
        lab_environments_enabled=True,
        lab_environment_ttl_minutes=60,
        lab_runtime_image="xuexi-py-lab:latest",
    )
    commands: list[list[str]] = []

    class FakeSession:
        def scalar(self, _statement: object) -> None: return None
        def add(self, _item: object) -> None: pass
        def flush(self) -> None: pass
        def commit(self) -> None: pass
        def refresh(self, _item: object) -> None: pass

    def fake_run(command: list[str], **_kwargs: object) -> str:
        commands.append(command)
        return "127.0.0.1:49152" if command[:2] == ["docker", "port"] else "ok"

    monkeypatch.setattr(lab_environment, "get_settings", lambda: settings)
    monkeypatch.setattr(lab_environment, "_run", fake_run)

    environment = lab_environment.create_environment(FakeSession(), SimpleNamespace(id="user-1"))

    assert environment.status == "running"
    assert environment.host_port == 49152
    postgres_command = next(command for command in commands if "postgres:16-alpine" in command)
    api_command = next(command for command in commands if "xuexi-py-lab:latest" in command)
    assert ["--pull", "never"] == postgres_command[postgres_command.index("--pull"):postgres_command.index("--pull") + 2]
    assert "--network" in postgres_command
    assert "--read-only" in api_command
    assert "no-new-privileges" in api_command
