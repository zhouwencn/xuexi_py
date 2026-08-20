from fastapi import APIRouter

from app.api.routes import courses, health

api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(courses.router)
