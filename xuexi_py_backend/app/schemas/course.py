from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


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
    id: str
    type: Literal["fill", "choice", "predict", "debug", "code", "review", "rewrite", "incident", "design"]
    prompt: str
    code: str | None = None
    options: list[str]
    difficulty: Literal[1, 2, 3, 4, 5] = 1
    starter_code: str | None = None
    test_cases: list["ExerciseTestCase"] = Field(default_factory=list)
    hints: list[str] = Field(default_factory=list)


class ExerciseTestCase(ApiModel):
    name: str
    code: str


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
    exercises: list[ExerciseRead]
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


class SkillRead(ApiModel):
    id: str
    stage_id: str
    order: int
    title: str
    description: str
    level: Literal["foundation", "intermediate", "advanced", "expert"]
    mastery_threshold: int
    lesson_ids: list[str]
    prerequisite_ids: list[str]


class ProjectTaskRead(ApiModel):
    id: str
    order: int
    title: str
    description: str
    starter_code: str | None = None
    acceptance_criteria: list[str]
    solution_notes: str | None = None


class ProjectRead(ApiModel):
    id: str
    order: int
    title: str
    summary: str
    description: str
    difficulty: Literal[1, 2, 3, 4, 5]
    estimated_hours: int
    status: Literal["available", "coming-soon"]
    skill_ids: list[str]
    tasks: list[ProjectTaskRead]


class LabStepRead(ApiModel):
    id: str
    order: int
    title: str
    instructions: str
    commands: list[str]
    verification: list[str]
    hints: list[str]


class LabRead(ApiModel):
    id: str
    order: int
    title: str
    summary: str
    description: str
    level: Literal["advanced", "expert"]
    kind: Literal["engineering", "source", "performance", "incident", "architecture", "ai"]
    estimated_hours: int
    status: Literal["available", "coming-soon"]
    objectives: list[str]
    skill_ids: list[str]
    steps: list[LabStepRead]


class CourseCatalogRead(ApiModel):
    course: CourseRead
    stages: list[StageRead]
    lessons: list[LessonRead]
    practice_challenges: list[PracticeItemRead]
    skills: list[SkillRead]
    projects: list[ProjectRead]
    labs: list[LabRead]
