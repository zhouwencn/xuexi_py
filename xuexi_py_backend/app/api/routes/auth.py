from fastapi import APIRouter, Depends, status
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.core.security import create_access_token, get_current_user, hash_password, verify_password
from app.db.session import get_session
from app.models import User
from app.schemas.account import LoginRequest, RegisterRequest, TokenRead, UserRead
from app.schemas.response import ApiResponse, success_response

router = APIRouter(prefix="/auth", tags=["auth"])


def user_schema(user: User) -> UserRead:
    return UserRead(id=user.id, email=user.email, display_name=user.display_name, created_at=user.created_at)


@router.post("/register", response_model=ApiResponse[TokenRead], status_code=status.HTTP_201_CREATED)
def register(payload: RegisterRequest, session: Session = Depends(get_session)) -> ApiResponse[TokenRead]:
    if session.scalar(select(User).where(User.email == payload.email)):
        raise BusinessException(ErrorCode.USER_EMAIL_EXISTS, status_code=status.HTTP_409_CONFLICT)
    user = User(email=payload.email, display_name=payload.display_name.strip(), password_hash=hash_password(payload.password))
    session.add(user)
    try:
        session.commit()
    except IntegrityError as exc:
        session.rollback()
        raise BusinessException(ErrorCode.USER_EMAIL_EXISTS, status_code=status.HTTP_409_CONFLICT) from exc
    session.refresh(user)
    token, expires_at = create_access_token(user.id)
    return success_response(TokenRead(access_token=token, expires_at=expires_at, user=user_schema(user)))


@router.post("/login", response_model=ApiResponse[TokenRead])
def login(payload: LoginRequest, session: Session = Depends(get_session)) -> ApiResponse[TokenRead]:
    user = session.scalar(select(User).where(User.email == payload.email.strip().lower()))
    if user is None or not verify_password(payload.password, user.password_hash):
        raise BusinessException(ErrorCode.USER_CREDENTIALS_INVALID, status_code=status.HTTP_401_UNAUTHORIZED)
    if not user.is_active:
        raise BusinessException(ErrorCode.USER_INACTIVE, status_code=status.HTTP_403_FORBIDDEN)
    token, expires_at = create_access_token(user.id)
    return success_response(TokenRead(access_token=token, expires_at=expires_at, user=user_schema(user)))


@router.get("/me", response_model=ApiResponse[UserRead])
def me(user: User = Depends(get_current_user)) -> ApiResponse[UserRead]:
    return success_response(user_schema(user))
