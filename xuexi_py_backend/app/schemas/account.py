from datetime import datetime
from typing import Any, Literal

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


class ProgressRead(ApiModel):
    course_id: str
    state: dict[str, Any]
    version: int
    updated_at: datetime | None = None


class ProgressWrite(BaseModel):
    state: dict[str, Any]
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
