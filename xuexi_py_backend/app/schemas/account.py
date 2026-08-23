from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field, field_validator

from app.schemas.course import ApiModel


class RegisterRequest(ApiModel):
    email: str = Field(min_length=5, max_length=320)
    display_name: str = Field(min_length=2, max_length=80)
    password: str = Field(min_length=10, max_length=128)

    @field_validator("email")
    @classmethod
    def normalize_email(cls, value: str) -> str:
        normalized = value.strip().lower()
        if "@" not in normalized or normalized.startswith("@") or normalized.endswith("@"):
            raise ValueError("invalid email")
        return normalized


class LoginRequest(BaseModel):
    email: str = Field(min_length=5, max_length=320)
    password: str = Field(min_length=1, max_length=128)


class UserRead(ApiModel):
    id: str
    email: str
    display_name: str
    created_at: datetime


class TokenRead(ApiModel):
    access_token: str
    token_type: Literal["bearer"] = "bearer"
    expires_at: datetime
    user: UserRead


class HistoryItem(ApiModel):
    lesson_id: str = Field(min_length=1, max_length=96)
    completed_at: datetime


class ExerciseResultState(ApiModel):
    lesson_id: str = Field(min_length=1, max_length=96)
    attempts: int = Field(ge=0)
    correct_attempts: int = Field(ge=0)
    last_attempt_at: datetime


class ProjectTaskSubmissionState(ApiModel):
    notes: str = Field(max_length=50_000)
    checked_criteria: list[int] = Field(default_factory=list, max_length=200)
    submitted_at: datetime


class LabStepSubmissionState(ApiModel):
    notes: str = Field(max_length=50_000)
    checked_verification: list[int] = Field(default_factory=list, max_length=200)
    completed_at: datetime


class ReviewItemState(ApiModel):
    lesson_id: str = Field(min_length=1, max_length=96)
    due_at: datetime
    interval_days: int = Field(ge=0, le=36_500)
    ease: float = Field(ge=1.3, le=10)
    repetitions: int = Field(ge=0, le=100_000)
    last_reviewed_at: datetime


class LearningStateData(ApiModel):
    schema_version: int = Field(default=2, ge=1)
    completed: list[str] = Field(default_factory=list, max_length=10_000)
    bookmarked: list[str] = Field(default_factory=list, max_length=10_000)
    history: list[HistoryItem] = Field(default_factory=list, max_length=10_000)
    # 兼容 v1 云端数据；前端读取后会迁移为 wrongExerciseIds。
    wrong_lesson_ids: list[str] = Field(default_factory=list, max_length=10_000)
    wrong_exercise_ids: list[str] = Field(default_factory=list, max_length=10_000)
    exercise_attempts: int = Field(default=0, ge=0)
    exercise_correct: int = Field(default=0, ge=0)
    exercise_results: dict[str, ExerciseResultState] = Field(default_factory=dict, max_length=10_000)
    project_submissions: dict[str, ProjectTaskSubmissionState] = Field(default_factory=dict, max_length=2_000)
    lab_submissions: dict[str, LabStepSubmissionState] = Field(default_factory=dict, max_length=5_000)
    review_items: dict[str, ReviewItemState] = Field(default_factory=dict, max_length=10_000)


class ProgressRead(ApiModel):
    course_id: str
    state: LearningStateData
    version: int
    updated_at: datetime | None = None


class ProgressWrite(BaseModel):
    state: LearningStateData
    version: int = Field(ge=0)


class DiagnosticQuestionRead(ApiModel):
    id: str
    title: str
    prompt: str
    options: list[str]
    type: str
    difficulty: int
    skill_ids: list[str]


class DiagnosticRead(ApiModel):
    course_id: str
    questions: list[DiagnosticQuestionRead]


class DiagnosticSubmit(BaseModel):
    answers: dict[str, str]


class DiagnosticResult(ApiModel):
    attempt_id: str
    score: int
    correct: int
    total: int
    skill_scores: dict[str, int]
    recommended_skill_ids: list[str]


class CodeSubmissionCreate(BaseModel):
    code: str = Field(min_length=1, max_length=20_000)


class ExerciseAttemptCreate(BaseModel):
    response: str = Field(min_length=1, max_length=20_000)


class ExerciseAttemptRead(ApiModel):
    attempt_id: str | None = None
    exercise_id: str
    correct: bool
    answer: str
    explanation: str
    created_at: datetime | None = None


class TestResultRead(ApiModel):
    name: str
    passed: bool
    error: str = ""


class CodeSubmissionRead(ApiModel):
    id: str
    exercise_id: str
    passed: int
    total: int
    score: int
    results: list[TestResultRead]
    diff: str
    review: list[str]
    created_at: datetime


class LabEnvironmentRead(ApiModel):
    id: str
    status: str
    url: str | None = None
    expires_at: datetime
