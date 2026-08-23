import json

from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.core.security import get_current_user
from app.db.session import get_session
from app.models import Course, User, UserProgress
from app.schemas.account import LearningStateData, ProgressRead, ProgressWrite
from app.schemas.response import ApiResponse, success_response

router = APIRouter(prefix="/me/progress", tags=["progress"])


@router.get("/{course_id}", response_model=ApiResponse[ProgressRead])
def get_progress(
    course_id: str,
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[ProgressRead]:
    if session.get(Course, course_id) is None:
        raise BusinessException(ErrorCode.COURSE_NOT_FOUND, status_code=status.HTTP_404_NOT_FOUND)
    progress = session.get(UserProgress, (user.id, course_id))
    if progress is None:
        return success_response(ProgressRead(course_id=course_id, state=LearningStateData(), version=0))
    return success_response(
        ProgressRead(course_id=course_id, state=progress.state, version=progress.version, updated_at=progress.updated_at)
    )


@router.put("/{course_id}", response_model=ApiResponse[ProgressRead])
def save_progress(
    course_id: str,
    payload: ProgressWrite,
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[ProgressRead]:
    if session.get(Course, course_id) is None:
        raise BusinessException(ErrorCode.COURSE_NOT_FOUND, status_code=status.HTTP_404_NOT_FOUND)
    state = payload.state.model_dump(mode="json", by_alias=True)
    if len(json.dumps(state, ensure_ascii=False)) > 256_000:
        raise BusinessException(ErrorCode.REQUEST_VALIDATION_ERROR, status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE)
    progress = session.get(UserProgress, (user.id, course_id))
    current_version = progress.version if progress else 0
    if payload.version != current_version:
        raise BusinessException(ErrorCode.PROGRESS_VERSION_CONFLICT, status_code=status.HTTP_409_CONFLICT)
    if progress is None:
        progress = UserProgress(user_id=user.id, course_id=course_id, state=state, version=1)
        session.add(progress)
    else:
        progress.state = state
        progress.version += 1
    session.commit()
    session.refresh(progress)
    return success_response(
        ProgressRead(course_id=course_id, state=progress.state, version=progress.version, updated_at=progress.updated_at)
    )
