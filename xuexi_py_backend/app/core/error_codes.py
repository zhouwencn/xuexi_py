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
    EXERCISE_REQUIRES_CODE_SUBMISSION = 30002

    USER_EMAIL_EXISTS = 40001
    USER_CREDENTIALS_INVALID = 40002
    USER_TOKEN_INVALID = 40003
    USER_INACTIVE = 40004

    PROGRESS_VERSION_CONFLICT = 50001
    DIAGNOSTIC_NOT_AVAILABLE = 50002
    EXERCISE_NOT_FOUND = 50003
    CODE_EXECUTION_DISABLED = 50004
    CODE_EXECUTION_FAILED = 50005
    LAB_ENVIRONMENT_DISABLED = 50006
    LAB_ENVIRONMENT_LIMIT = 50007
    LAB_ENVIRONMENT_NOT_FOUND = 50008

    INTERNAL_SERVER_ERROR = 90001


ERROR_MESSAGES: dict[ErrorCode, str] = {
    ErrorCode.SUCCESS: "success",
    ErrorCode.REQUEST_VALIDATION_ERROR: "请求参数校验失败",
    ErrorCode.ROUTE_NOT_FOUND: "请求的接口不存在",
    ErrorCode.METHOD_NOT_ALLOWED: "请求方法不被允许",
    ErrorCode.REQUEST_ERROR: "请求处理失败",
    ErrorCode.COURSE_NOT_FOUND: "课程不存在",
    ErrorCode.LESSON_EXERCISE_MISSING: "课时练习配置不完整",
    ErrorCode.EXERCISE_REQUIRES_CODE_SUBMISSION: "代码题必须使用代码提交接口",
    ErrorCode.USER_EMAIL_EXISTS: "该邮箱已注册",
    ErrorCode.USER_CREDENTIALS_INVALID: "邮箱或密码错误",
    ErrorCode.USER_TOKEN_INVALID: "登录状态无效或已过期",
    ErrorCode.USER_INACTIVE: "用户账号不可用",
    ErrorCode.PROGRESS_VERSION_CONFLICT: "云端进度已更新，请先重新获取",
    ErrorCode.DIAGNOSTIC_NOT_AVAILABLE: "诊断测验暂不可用",
    ErrorCode.EXERCISE_NOT_FOUND: "练习不存在",
    ErrorCode.CODE_EXECUTION_DISABLED: "服务端代码执行未启用",
    ErrorCode.CODE_EXECUTION_FAILED: "代码执行失败",
    ErrorCode.LAB_ENVIRONMENT_DISABLED: "临时实验环境未启用",
    ErrorCode.LAB_ENVIRONMENT_LIMIT: "当前已有运行中的实验环境",
    ErrorCode.LAB_ENVIRONMENT_NOT_FOUND: "实验环境不存在",
    ErrorCode.INTERNAL_SERVER_ERROR: "服务器内部错误",
}


def get_error_message(code: ErrorCode) -> str:
    return ERROR_MESSAGES[code]
