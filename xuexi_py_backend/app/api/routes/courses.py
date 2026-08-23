from typing import Annotated

from fastapi import APIRouter, Depends, Path, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.db.session import get_session
from app.models import Course, Exercise, Lab, Lesson, Project, Skill, Stage
from app.schemas.course import (
    CommonError,
    CourseCatalogRead,
    CourseRead,
    ExerciseRead,
    ExplanationLine,
    LessonRead,
    LabRead,
    LabStepRead,
    PracticeItemRead,
    ProjectRead,
    ProjectTaskRead,
    RealWorldExample,
    SkillRead,
    StageRead,
)
from app.schemas.response import ApiResponse, success_response

router = APIRouter(prefix="/courses", tags=["courses"])


def exercise_to_schema(exercise: Exercise) -> ExerciseRead:
    return ExerciseRead(
        id=exercise.id,
        type=exercise.type,
        prompt=exercise.prompt,
        code=exercise.code,
        options=exercise.options,
        answer=exercise.answer,
        explanation=exercise.explanation,
        difficulty=exercise.difficulty or 1,
        starter_code=exercise.starter_code,
        test_cases=exercise.test_cases or [],
        hints=exercise.hints or [],
    )


def lesson_to_schema(lesson: Lesson) -> LessonRead:
    ordered_exercises = sorted(lesson.exercises, key=lambda item: (item.source != "lesson", item.sort_order, item.id))
    lesson_exercise = next((item for item in ordered_exercises if item.source == "lesson"), None)
    if lesson_exercise is None:
        raise BusinessException(
            ErrorCode.LESSON_EXERCISE_MISSING,
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )

    return LessonRead(
        id=lesson.id,
        stage_id=lesson.stage_id,
        order=lesson.order,
        title=lesson.title,
        subtitle=lesson.subtitle,
        duration=lesson.duration,
        difficulty=lesson.difficulty,
        importance=lesson.importance,
        status=lesson.status,
        one_liner=lesson.one_liner,
        comparison=lesson.comparison,
        explanation=[ExplanationLine(**item) for item in lesson.explanation],
        common_errors=[CommonError(**item) for item in lesson.common_errors],
        real_world=RealWorldExample(**lesson.real_world),
        exercise=exercise_to_schema(lesson_exercise),
        exercises=[exercise_to_schema(item) for item in ordered_exercises],
        simulated_output=lesson.simulated_output,
    )


@router.get("/{course_id}/catalog", response_model=ApiResponse[CourseCatalogRead])
def get_course_catalog(
    course_id: Annotated[
        str,
        Path(min_length=1, max_length=64, pattern=r"^[a-z0-9]+(?:-[a-z0-9]+)*$"),
    ],
    session: Session = Depends(get_session),
) -> ApiResponse[CourseCatalogRead]:
    statement = (
        select(Course)
        .where(Course.id == course_id, Course.is_published.is_(True))
        .options(
            selectinload(Course.stages).selectinload(Stage.lessons).selectinload(Lesson.exercises),
            selectinload(Course.skills).selectinload(Skill.lessons),
            selectinload(Course.skills).selectinload(Skill.prerequisites),
            selectinload(Course.projects).selectinload(Project.skills),
            selectinload(Course.projects).selectinload(Project.tasks),
            selectinload(Course.labs).selectinload(Lab.skills),
            selectinload(Course.labs).selectinload(Lab.steps),
        )
    )
    course = session.scalar(statement)
    if course is None:
        raise BusinessException(ErrorCode.COURSE_NOT_FOUND, status_code=status.HTTP_404_NOT_FOUND)

    stages = sorted(course.stages, key=lambda item: item.order)
    lessons = [lesson for stage in stages for lesson in sorted(stage.lessons, key=lambda item: item.order)]
    lessons_by_id = {lesson.id: lesson for lesson in lessons}

    stage_schemas = [
        StageRead(
            id=stage.id,
            order=stage.order,
            title=stage.title,
            short_title=stage.short_title,
            description=stage.description,
            lesson_count=len(stage.lessons),
            status=stage.status,
            lesson_ids=[lesson.id for lesson in sorted(stage.lessons, key=lambda item: item.order)],
        )
        for stage in stages
    ]

    challenges = sorted(
        (exercise for lesson in lessons for exercise in lesson.exercises if exercise.source == "challenge"),
        key=lambda item: (item.sort_order, item.id),
    )
    challenge_schemas = [
        PracticeItemRead(
            id=exercise.id,
            lesson_id=exercise.lesson_id,
            title=exercise.title or exercise.id,
            stage_id=lessons_by_id[exercise.lesson_id].stage_id,
            exercise=exercise_to_schema(exercise),
        )
        for exercise in challenges
    ]

    skills = sorted(course.skills, key=lambda item: item.order)
    skill_schemas = [
        SkillRead(
            id=skill.id,
            stage_id=skill.stage_id,
            order=skill.order,
            title=skill.title,
            description=skill.description,
            level=skill.level,
            mastery_threshold=skill.mastery_threshold,
            lesson_ids=[lesson.id for lesson in sorted(skill.lessons, key=lambda item: item.order)],
            prerequisite_ids=[item.id for item in sorted(skill.prerequisites, key=lambda item: item.order)],
        )
        for skill in skills
    ]

    projects = sorted(course.projects, key=lambda item: item.order)
    project_schemas = [
        ProjectRead(
            id=project.id,
            order=project.order,
            title=project.title,
            summary=project.summary,
            description=project.description,
            difficulty=project.difficulty,
            estimated_hours=project.estimated_hours,
            status=project.status,
            skill_ids=[skill.id for skill in sorted(project.skills, key=lambda item: item.order)],
            tasks=[
                ProjectTaskRead(
                    id=task.id,
                    order=task.order,
                    title=task.title,
                    description=task.description,
                    starter_code=task.starter_code,
                    acceptance_criteria=task.acceptance_criteria,
                    solution_notes=task.solution_notes,
                )
                for task in sorted(project.tasks, key=lambda item: item.order)
            ],
        )
        for project in projects
    ]

    labs = sorted(course.labs, key=lambda item: item.order)
    lab_schemas = [
        LabRead(
            id=lab.id,
            order=lab.order,
            title=lab.title,
            summary=lab.summary,
            description=lab.description,
            level=lab.level,
            kind=lab.kind,
            estimated_hours=lab.estimated_hours,
            status=lab.status,
            objectives=lab.objectives,
            skill_ids=[skill.id for skill in sorted(lab.skills, key=lambda item: item.order)],
            steps=[
                LabStepRead(
                    id=step.id,
                    order=step.order,
                    title=step.title,
                    instructions=step.instructions,
                    commands=step.commands,
                    verification=step.verification,
                    hints=step.hints,
                )
                for step in sorted(lab.steps, key=lambda item: item.order)
            ],
        )
        for lab in labs
    ]

    catalog = CourseCatalogRead(
        course=CourseRead(id=course.id, title=course.title, description=course.description),
        stages=stage_schemas,
        lessons=[lesson_to_schema(lesson) for lesson in lessons],
        practice_challenges=challenge_schemas,
        skills=skill_schemas,
        projects=project_schemas,
        labs=lab_schemas,
    )
    return success_response(catalog)
