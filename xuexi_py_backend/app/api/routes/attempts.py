from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.core.security import get_optional_current_user
from app.db.session import get_session
from app.models import Exercise, ExerciseAttempt, User
from app.schemas.account import ExerciseAttemptCreate, ExerciseAttemptRead
from app.schemas.response import ApiResponse, success_response

router = APIRouter(prefix="/exercises", tags=["exercise-attempts"])


@router.post("/{exercise_id}/attempts", response_model=ApiResponse[ExerciseAttemptRead])
def submit_exercise_attempt(
    exercise_id: str,
    payload: ExerciseAttemptCreate,
    user: User | None = Depends(get_optional_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[ExerciseAttemptRead]:
    exercise = session.get(Exercise, exercise_id)
    if exercise is None or exercise.source == "diagnostic":
        raise BusinessException(ErrorCode.EXERCISE_NOT_FOUND, status_code=status.HTTP_404_NOT_FOUND)
    if exercise.type == "code":
        raise BusinessException(
            ErrorCode.EXERCISE_REQUIRES_CODE_SUBMISSION,
            status_code=status.HTTP_400_BAD_REQUEST,
        )

    response = payload.response.strip()
    if exercise.options and response not in exercise.options:
        raise BusinessException(ErrorCode.REQUEST_VALIDATION_ERROR, status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)

    correct = response == exercise.answer.strip()
    attempt: ExerciseAttempt | None = None
    if user is not None:
        attempt = ExerciseAttempt(
            user_id=user.id,
            exercise_id=exercise.id,
            response=response,
            correct=correct,
        )
        session.add(attempt)
        session.commit()
        session.refresh(attempt)

    return success_response(
        ExerciseAttemptRead(
            attempt_id=attempt.id if attempt else None,
            exercise_id=exercise.id,
            correct=correct,
            answer=exercise.answer,
            explanation=exercise.explanation,
            created_at=attempt.created_at if attempt else None,
        )
    )
