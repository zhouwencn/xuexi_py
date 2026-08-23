import json
import subprocess
import tempfile
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from app.core.config import get_settings

MAX_OUTPUT = 20_000


@dataclass
class ExecutionResult:
    passed: int
    total: int
    results: list[dict[str, Any]]
    output: str


class ExecutionUnavailableError(RuntimeError):
    pass


class ExecutionFailedError(RuntimeError):
    pass


def run_python_tests(code: str, tests: list[dict[str, str]]) -> ExecutionResult:
    settings = get_settings()
    if not settings.code_execution_enabled:
        raise ExecutionUnavailableError("code execution disabled")
    runner_source = f'''import contextlib
import io
import json
import traceback

source = {code!r}
tests = {tests!r}
scope = {{}}
buffer = io.StringIO()
results = []
load_error = None
try:
    with contextlib.redirect_stdout(buffer), contextlib.redirect_stderr(buffer):
        exec(compile(source, "<submission>", "exec"), scope)
except BaseException:
    load_error = traceback.format_exc(limit=5)

for test in tests:
    if load_error:
        results.append({{"name": test["name"], "passed": False, "error": load_error}})
        continue
    try:
        with contextlib.redirect_stdout(buffer), contextlib.redirect_stderr(buffer):
            exec(compile(test["code"], "<hidden-test>", "exec"), scope)
        results.append({{"name": test["name"], "passed": True, "error": ""}})
    except BaseException:
        results.append({{"name": test["name"], "passed": False, "error": traceback.format_exc(limit=3)}})

print(json.dumps({{
    "passed": sum(item["passed"] for item in results),
    "total": len(results),
    "results": results,
    "output": buffer.getvalue()[-{MAX_OUTPUT}:],
}}, ensure_ascii=False))
'''
    with tempfile.TemporaryDirectory(prefix="xuexi-py-run-") as temp_dir:
        runner_path = Path(temp_dir) / "runner.py"
        runner_path.write_text(runner_source, encoding="utf-8")
        command = [
            "docker", "run", "--rm", "--pull", "never", "--network", "none", "--read-only",
            "--tmpfs", "/tmp:rw,noexec,nosuid,size=16m", "--memory", "128m",
            "--cpus", "0.5", "--pids-limit", "64", "--cap-drop", "ALL",
            "--security-opt", "no-new-privileges", "-v", f"{temp_dir}:/workspace:ro",
            "-w", "/workspace", settings.code_runner_image, "python", "-I", "runner.py",
        ]
        try:
            completed = subprocess.run(
                command,
                capture_output=True,
                text=True,
                timeout=settings.code_execution_timeout_seconds,
                check=False,
            )
        except (FileNotFoundError, subprocess.TimeoutExpired) as exc:
            raise ExecutionFailedError(str(exc)) from exc
    if completed.returncode != 0:
        raise ExecutionFailedError((completed.stderr or completed.stdout)[-MAX_OUTPUT:])
    try:
        payload = json.loads(completed.stdout.strip().splitlines()[-1])
    except (json.JSONDecodeError, IndexError) as exc:
        raise ExecutionFailedError("runner returned invalid output") from exc
    return ExecutionResult(**payload)
