from typing import Literal

from pydantic import BaseModel, ConfigDict


def to_camel(value: str) -> str:
    first, *rest = value.split("_")
    return first + "".join(part.capitalize() for part in rest)


class ApiModel(BaseModel):
    model_config = ConfigDict(alias_generator=to_camel, populate_by_name=True)


class CourseRead(ApiModel):
    id: str
    title: str
    description: str


class CodeComparison(ApiModel):
    javascript: str
    python: str
    note: str


class ExplanationLine(ApiModel):
    code: str
    description: str


class CommonError(ApiModel):
    title: str
    description: str
    code: str | None = None


class RealWorldExample(ApiModel):
    title: str
    description: str
    code: str


class ExerciseRead(ApiModel):
    type: Literal["fill", "choice", "predict", "debug"]
    prompt: str
    code: str | None = None
    options: list[str]
    answer: str
    explanation: str


class LessonRead(ApiModel):
    id: str
    stage_id: str
    order: int
    title: str
    subtitle: str
    duration: int
    difficulty: Literal[1, 2, 3, 4, 5]
    importance: Literal["must", "frequent", "read", "skip"]
    status: Literal["available", "coming-soon"]
    one_liner: str
    comparison: CodeComparison
    explanation: list[ExplanationLine]
    common_errors: list[CommonError]
    real_world: RealWorldExample
    exercise: ExerciseRead
    simulated_output: str | None = None


class StageRead(ApiModel):
    id: str
    order: int
    title: str
    short_title: str
    description: str
    lesson_count: int
    status: Literal["active", "coming-soon"]
    lesson_ids: list[str]


class PracticeItemRead(ApiModel):
    id: str
    lesson_id: str
    title: str
    stage_id: str
    exercise: ExerciseRead


class CourseCatalogRead(ApiModel):
    course: CourseRead
    stages: list[StageRead]
    lessons: list[LessonRead]
    practice_challenges: list[PracticeItemRead]
