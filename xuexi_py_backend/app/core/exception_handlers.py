import logging

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.error_codes import ErrorCode, get_error_message
from app.core.exceptions import BusinessException
from app.schemas.response import ApiResponse

logger = logging.getLogger(__name__)


def error_response(code: ErrorCode, status_code: int, message: str | None = None) -> JSONResponse:
    payload = ApiResponse[None](
        code=code,
        message=message or get_error_message(code),
        data=None,
    )
    return JSONResponse(status_code=status_code, content=payload.model_dump(mode="json"))


async def business_exception_handler(_request: Request, exception: BusinessException) -> JSONResponse:
    return error_response(exception.code, exception.status_code, exception.message)


async def validation_exception_handler(_request: Request, _exception: RequestValidationError) -> JSONResponse:
    return error_response(ErrorCode.REQUEST_VALIDATION_ERROR, 422)


async def http_exception_handler(_request: Request, exception: StarletteHTTPException) -> JSONResponse:
    if exception.status_code == 404:
        code = ErrorCode.ROUTE_NOT_FOUND
    elif exception.status_code == 405:
        code = ErrorCode.METHOD_NOT_ALLOWED
    else:
        code = ErrorCode.REQUEST_ERROR
    return error_response(code, exception.status_code)


async def unexpected_exception_handler(request: Request, exception: Exception) -> JSONResponse:
    logger.error(
        "未处理的接口异常：%s %s",
        request.method,
        request.url.path,
        exc_info=(type(exception), exception, exception.__traceback__),
    )
    return error_response(ErrorCode.INTERNAL_SERVER_ERROR, 500)


def register_exception_handlers(app: FastAPI) -> None:
    app.add_exception_handler(BusinessException, business_exception_handler)
    app.add_exception_handler(RequestValidationError, validation_exception_handler)
    app.add_exception_handler(StarletteHTTPException, http_exception_handler)
    app.add_exception_handler(Exception, unexpected_exception_handler)
