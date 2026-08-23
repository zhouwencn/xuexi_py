from datetime import UTC, datetime
from types import SimpleNamespace

from app.api.routes.attempts import submit_exercise_attempt
from app.models import Exercise, ExerciseAttempt
from app.schemas.account import ExerciseAttemptCreate


class AttemptSession:
    def __init__(self, exercise: Exercise) -> None:
        self.exercise = exercise
        self.added: ExerciseAttempt | None = None

    def get(self, _model: object, _identity: object) -> Exercise:
        return self.exercise

    def add(self, attempt: ExerciseAttempt) -> None:
        self.added = attempt

    def commit(self) -> None:
        pass

    def refresh(self, attempt: ExerciseAttempt) -> None:
        attempt.id = "attempt-1"
        attempt.created_at = datetime.now(UTC)


def make_exercise() -> Exercise:
    return Exercise(
        id="mastery-aliasing",
        lesson_id="lists",
        source="challenge",
        title="引用关系",
        sort_order=1,
        type="predict",
        prompt="判断输出",
        code="a = []; b = a; b.append(1); print(a)",
        options=["[1]", "[]"],
        answer="[1]",
        explanation="a 和 b 指向同一个列表对象。",
        difficulty=3,
    )


def test_authenticated_attempt_is_graded_and_linked_to_user() -> None:
    session = AttemptSession(make_exercise())

    response = submit_exercise_attempt(
        "mastery-aliasing",
        ExerciseAttemptCreate(response="[1]"),
        user=SimpleNamespace(id="user-42"),
        session=session,
    )

    assert session.added is not None
    assert session.added.user_id == "user-42"
    assert session.added.exercise_id == "mastery-aliasing"
    assert session.added.correct is True
    assert response.data is not None
    assert response.data.answer == "[1]"
    assert response.data.explanation == "a 和 b 指向同一个列表对象。"


def test_anonymous_attempt_is_graded_without_creating_history() -> None:
    session = AttemptSession(make_exercise())

    response = submit_exercise_attempt(
        "mastery-aliasing",
        ExerciseAttemptCreate(response="[]"),
        user=None,
        session=session,
    )

    assert session.added is None
    assert response.data is not None
    assert response.data.correct is False
    assert response.data.attempt_id is None
