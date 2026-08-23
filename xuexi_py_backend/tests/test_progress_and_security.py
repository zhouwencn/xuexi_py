from types import SimpleNamespace

import pytest
from pydantic import ValidationError

from app.api.routes.progress import get_progress, save_progress
from app.api.routes.submissions import result_schemas
from app.core.config import Settings
from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.models import Course, UserProgress
from app.schemas.account import LearningStateData, ProgressWrite
from app.services.code_execution import ExecutionResult


def test_development_uses_a_random_secret_when_not_configured() -> None:
    first = Settings(_env_file=None, database_url="postgresql+psycopg://test:test@localhost/test")
    second = Settings(_env_file=None, database_url="postgresql+psycopg://test:test@localhost/test")

    assert len(first.auth_secret_key) >= 32
    assert first.auth_secret_key != second.auth_secret_key


def test_production_requires_an_explicit_secret() -> None:
    with pytest.raises(ValidationError, match="生产环境必须显式配置"):
        Settings(
            _env_file=None,
            app_env="production",
            database_url="postgresql+psycopg://test:test@localhost/test",
        )


def test_learning_state_validates_shape_and_preserves_v1_wrong_lessons() -> None:
    state = LearningStateData.model_validate({"wrongLessonIds": ["variables"], "exerciseAttempts": 2})

    assert state.wrong_lesson_ids == ["variables"]
    assert state.wrong_exercise_ids == []
    assert state.schema_version == 2
    with pytest.raises(ValidationError):
        LearningStateData.model_validate({"exerciseAttempts": -1})


def test_missing_course_progress_returns_course_not_found() -> None:
    class MissingCourseSession:
        def get(self, _model: object, _identity: object) -> None:
            return None

    with pytest.raises(BusinessException) as captured:
        get_progress("missing-course", user=SimpleNamespace(id="user-1"), session=MissingCourseSession())

    assert captured.value.code == ErrorCode.COURSE_NOT_FOUND
    assert captured.value.status_code == 404


def test_saving_progress_uses_authenticated_user_id() -> None:
    class ProgressSession:
        added: UserProgress | None = None

        def get(self, model: object, _identity: object) -> object | None:
            if model is Course:
                return SimpleNamespace(id="python-from-js")
            return None

        def add(self, progress: UserProgress) -> None:
            self.added = progress

        def commit(self) -> None:
            pass

        def refresh(self, _progress: UserProgress) -> None:
            pass

    session = ProgressSession()
    payload = ProgressWrite(state=LearningStateData(completed=["variables"]), version=0)

    response = save_progress(
        "python-from-js",
        payload,
        user=SimpleNamespace(id="user-42"),
        session=session,
    )

    assert session.added is not None
    assert session.added.user_id == "user-42"
    assert session.added.course_id == "python-from-js"
    assert response.data is not None
    assert response.data.state.completed == ["variables"]


def test_hidden_test_results_do_not_return_names_or_tracebacks() -> None:
    result = ExecutionResult(
        passed=0,
        total=1,
        results=[{"name": "assert secret_case", "passed": False, "error": "sensitive traceback"}],
        output="",
    )

    hidden = result_schemas(result, hidden=True)
    public = result_schemas(result, hidden=False)

    assert hidden[0].name == "隐藏测试 1"
    assert hidden[0].error == ""
    assert public[0].name == "assert secret_case"
    assert public[0].error == "sensitive traceback"
