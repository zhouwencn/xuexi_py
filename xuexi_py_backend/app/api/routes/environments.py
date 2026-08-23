from datetime import UTC, datetime

from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.core.security import get_current_user
from app.db.session import get_session
from app.models import LabEnvironment, User
from app.schemas.account import LabEnvironmentRead
from app.schemas.response import ApiResponse, success_response
from app.services.lab_environment import LabEnvironmentError, create_environment, stop_environment

router = APIRouter(prefix="/environments", tags=["environments"])


def environment_schema(item: LabEnvironment) -> LabEnvironmentRead:
    url = f"http://127.0.0.1:{item.host_port}" if item.status == "running" and item.host_port else None
    return LabEnvironmentRead(id=item.id, status=item.status, url=url, expires_at=item.expires_at)


@router.post("", response_model=ApiResponse[LabEnvironmentRead], status_code=status.HTTP_201_CREATED)
def start_environment(
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[LabEnvironmentRead]:
    if not get_settings().lab_environments_enabled:
        raise BusinessException(ErrorCode.LAB_ENVIRONMENT_DISABLED, status_code=status.HTTP_503_SERVICE_UNAVAILABLE)
    try:
        return success_response(environment_schema(create_environment(session, user)))
    except LabEnvironmentError as exc:
        code = ErrorCode.LAB_ENVIRONMENT_LIMIT if "already running" in str(exc) else ErrorCode.REQUEST_ERROR
        raise BusinessException(code, status_code=status.HTTP_409_CONFLICT) from exc


@router.get("/current", response_model=ApiResponse[LabEnvironmentRead | None])
def current_environment(
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[LabEnvironmentRead | None]:
    item = session.scalar(select(LabEnvironment).where(LabEnvironment.user_id == user.id))
    if item and item.status == "running" and item.expires_at <= datetime.now(UTC):
        stop_environment(item)
        session.commit()
    return success_response(environment_schema(item) if item else None)


@router.delete("/current", response_model=ApiResponse[LabEnvironmentRead])
def delete_environment(
    user: User = Depends(get_current_user),
    session: Session = Depends(get_session),
) -> ApiResponse[LabEnvironmentRead]:
    item = session.scalar(select(LabEnvironment).where(LabEnvironment.user_id == user.id))
    if item is None:
        raise BusinessException(ErrorCode.LAB_ENVIRONMENT_NOT_FOUND, status_code=status.HTTP_404_NOT_FOUND)
    stop_environment(item)
    session.commit()
    session.refresh(item)
    return success_response(environment_schema(item))
