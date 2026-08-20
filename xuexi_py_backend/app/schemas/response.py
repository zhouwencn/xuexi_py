from typing import Generic, TypeVar

from pydantic import BaseModel

from app.core.error_codes import ErrorCode, get_error_message

DataT = TypeVar("DataT")


class ApiResponse(BaseModel, Generic[DataT]):
    code: int = ErrorCode.SUCCESS
    message: str = get_error_message(ErrorCode.SUCCESS)
    data: DataT | None = None


def success_response(data: DataT) -> ApiResponse[DataT]:
    return ApiResponse[DataT](data=data)
