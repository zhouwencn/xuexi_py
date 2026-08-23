from fastapi import APIRouter

from app.api.routes import auth, courses, diagnostics, environments, health, progress, submissions

api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(courses.router)
api_router.include_router(auth.router)
api_router.include_router(progress.router)
api_router.include_router(diagnostics.router)
api_router.include_router(submissions.router)
api_router.include_router(environments.router)
