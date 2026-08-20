from fastapi.testclient import TestClient

from app.core.error_codes import ErrorCode
from app.main import app

client = TestClient(app)


def test_unknown_route_uses_unified_response() -> None:
    response = client.get("/api/v1/not-found")

    assert response.status_code == 404
    assert response.json() == {
        "code": ErrorCode.ROUTE_NOT_FOUND,
        "message": "请求的接口不存在",
        "data": None,
    }


def test_method_not_allowed_uses_unified_response() -> None:
    response = client.post("/api/v1/health")

    assert response.status_code == 405
    assert response.json() == {
        "code": ErrorCode.METHOD_NOT_ALLOWED,
        "message": "请求方法不被允许",
        "data": None,
    }


def test_request_validation_uses_unified_response() -> None:
    response = client.get("/api/v1/courses/INVALID_COURSE/catalog")

    assert response.status_code == 422
    assert response.json() == {
        "code": ErrorCode.REQUEST_VALIDATION_ERROR,
        "message": "请求参数校验失败",
        "data": None,
    }
