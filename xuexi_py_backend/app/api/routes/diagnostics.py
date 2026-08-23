from collections import defaultdict

from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.core.security import get_current_user
from app.db.session import get_session
from app.models import DiagnosticAttempt, Exercise, Lesson, User
from app.schemas.account import DiagnosticQuestionRead, DiagnosticRead, DiagnosticResult, DiagnosticSubmit
from app.schemas.response import ApiResponse, success_response

router = APIRouter(prefix="/diagnostics", tags=["diagnostics"])


def diagnostic_exercises(session: Session, course_id: str) -> list[Exercise]:
    exercises = session.scalars(
        select(Exercise)
        .join(Exercise.lesson)
        .join(Lesson.stage)
        .where(Exercise.source == "challenge", Exercise.type != "code", Lesson.stage.has(course_id=course_id))
        .options(selectinload(Exercise.lesson).selectinload(Lesson.skills))
        .order_by(Exercise.difficulty.desc(), Exercise.id)
    ).all()
    selected: list[Exercise] = []
    seen_lessons: set[str] = set()
    for exercise in exercises:
        if exercise.lesson_id in seen_lessons or not exercise.options:
            continue
        selected.append(exercise)
        seen_lessons.add(exercise.lesson_id)
        if len(selected) == 20:
            break
    return selected


@router.get("/{course_id}", response_model=ApiResponse[DiagnosticRead])
def get_diagnostic(
    course_id: str,
    _user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[DiagnosticRead]:
    exercises = diagnostic_exercises(session, course_id)
    if not exercises:
        raise BusinessException(ErrorCode.DIAGNOSTIC_NOT_AVAILABLE, status_code=status.HTTP_404_NOT_FOUND)
    return success_response(DiagnosticRead(
        course_id=course_id,
        questions=[
            DiagnosticQuestionRead(
                id=item.id,
                title=item.title or item.id,
                prompt=item.prompt,
                options=item.options,
                type=item.type,
                difficulty=item.difficulty,
                skill_ids=[skill.id for skill in item.lesson.skills],
            )
            for item in exercises
        ],
    ))


@router.post("/{course_id}/submit", response_model=ApiResponse[DiagnosticResult])
def submit_diagnostic(
    course_id: str,
    payload: DiagnosticSubmit,
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[DiagnosticResult]:
    exercises = diagnostic_exercises(session, course_id)
    if not exercises:
        raise BusinessException(ErrorCode.DIAGNOSTIC_NOT_AVAILABLE, status_code=status.HTTP_404_NOT_FOUND)
    correct = sum(payload.answers.get(item.id) == item.answer for item in exercises)
    skill_totals: dict[str, int] = defaultdict(int)
    skill_correct: dict[str, int] = defaultdict(int)
    for item in exercises:
        is_correct = payload.answers.get(item.id) == item.answer
        for skill in item.lesson.skills:
            skill_totals[skill.id] += 1
            skill_correct[skill.id] += int(is_correct)
    skill_scores = {key: round(skill_correct[key] / total * 100) for key, total in skill_totals.items()}
    recommended = [key for key, value in sorted(skill_scores.items(), key=lambda pair: pair[1]) if value < 70][:6]
    attempt = DiagnosticAttempt(
        user_id=user.id,
        course_id=course_id,
        answers=payload.answers,
        skill_scores=skill_scores,
        score=round(correct / len(exercises) * 100),
        recommended_skill_ids=recommended,
    )
    session.add(attempt)
    session.commit()
    session.refresh(attempt)
    return success_response(DiagnosticResult(
        attempt_id=attempt.id,
        score=attempt.score,
        correct=correct,
        total=len(exercises),
        skill_scores=skill_scores,
        recommended_skill_ids=recommended,
    ))
