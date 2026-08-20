from app.core.error_codes import ErrorCode, get_error_message


class BusinessException(Exception):
    def __init__(
        self,
        code: ErrorCode,
        *,
        status_code: int,
        message: str | None = None,
    ) -> None:
        self.code = code
        self.status_code = status_code
        self.message = message or get_error_message(code)
        super().__init__(self.message)
