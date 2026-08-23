from datetime import UTC, datetime, timedelta

import jwt
from fastapi import Depends, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt import InvalidTokenError
from pwdlib import PasswordHash
from sqlalchemy.orm import Session

from app.core.config import get_settings
from app.core.error_codes import ErrorCode
from app.core.exceptions import BusinessException
from app.db.session import get_session
from app.models import User

password_hash = PasswordHash.recommended()
bearer = HTTPBearer(auto_error=False)


def hash_password(password: str) -> str:
    return password_hash.hash(password)


def verify_password(password: str, encoded: str) -> bool:
    return password_hash.verify(password, encoded)


def create_access_token(user_id: str) -> tuple[str, datetime]:
    settings = get_settings()
    expires_at = datetime.now(UTC) + timedelta(minutes=settings.access_token_minutes)
    token = jwt.encode(
        {"sub": user_id, "exp": expires_at, "iat": datetime.now(UTC)},
        settings.auth_secret_key,
        algorithm="HS256",
    )
    return token, expires_at


def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer),
    session: Session = Depends(get_session),
) -> User:
    if credentials is None:
        raise BusinessException(ErrorCode.USER_TOKEN_INVALID, status_code=status.HTTP_401_UNAUTHORIZED)
    try:
        payload = jwt.decode(credentials.credentials, get_settings().auth_secret_key, algorithms=["HS256"])
        user_id = payload.get("sub")
        if not isinstance(user_id, str):
            raise InvalidTokenError
    except InvalidTokenError as exc:
        raise BusinessException(ErrorCode.USER_TOKEN_INVALID, status_code=status.HTTP_401_UNAUTHORIZED) from exc
    user = session.get(User, user_id)
    if user is None:
        raise BusinessException(ErrorCode.USER_TOKEN_INVALID, status_code=status.HTTP_401_UNAUTHORIZED)
    if not user.is_active:
        raise BusinessException(ErrorCode.USER_INACTIVE, status_code=status.HTTP_403_FORBIDDEN)
    return user
