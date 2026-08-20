from enum import IntEnum


class ErrorCode(IntEnum):
    """项目业务错误码。

    0             成功
    10001-19999   通用请求与参数错误
    20001-29999   课程与章节错误
    30001-39999   题目与练习错误
    40001-49999   用户错误（预留）
    50001-59999   学习记录与进度错误（预留）
    90001-99999   服务内部错误
    """

    SUCCESS = 0

    REQUEST_VALIDATION_ERROR = 10001
    ROUTE_NOT_FOUND = 10002
    METHOD_NOT_ALLOWED = 10003
    REQUEST_ERROR = 10004

    COURSE_NOT_FOUND = 20001

    LESSON_EXERCISE_MISSING = 30001

    INTERNAL_SERVER_ERROR = 90001


ERROR_MESSAGES: dict[ErrorCode, str] = {
    ErrorCode.SUCCESS: "success",
    ErrorCode.REQUEST_VALIDATION_ERROR: "请求参数校验失败",
    ErrorCode.ROUTE_NOT_FOUND: "请求的接口不存在",
    ErrorCode.METHOD_NOT_ALLOWED: "请求方法不被允许",
    ErrorCode.REQUEST_ERROR: "请求处理失败",
    ErrorCode.COURSE_NOT_FOUND: "课程不存在",
    ErrorCode.LESSON_EXERCISE_MISSING: "课时练习配置不完整",
    ErrorCode.INTERNAL_SERVER_ERROR: "服务器内部错误",
}


def get_error_message(code: ErrorCode) -> str:
    return ERROR_MESSAGES[code]
