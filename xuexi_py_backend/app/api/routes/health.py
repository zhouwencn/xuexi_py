from fastapi import APIRouter

from app.schemas.response import ApiResponse, success_response

router = APIRouter(tags=["health"])


@router.get("/health", response_model=ApiResponse[dict[str, str]])
def health_check() -> ApiResponse[dict[str, str]]:
    return success_response({"status": "ok"})
