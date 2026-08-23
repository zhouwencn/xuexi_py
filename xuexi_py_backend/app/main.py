import asyncio
import logging
from contextlib import asynccontextmanager, suppress

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import api_router
from app.core.config import get_settings
from app.core.exception_handlers import register_exception_handlers
from app.db.session import SessionLocal
from app.services.lab_environment import cleanup_expired_environments

settings = get_settings()
logger = logging.getLogger(__name__)


async def cleanup_loop() -> None:
    while True:
        await asyncio.sleep(60)
        try:
            with SessionLocal() as session:
                await asyncio.to_thread(cleanup_expired_environments, session)
        except Exception:
            logger.exception("清理到期实验环境失败")


@asynccontextmanager
async def lifespan(_app: FastAPI):
    task = asyncio.create_task(cleanup_loop()) if settings.lab_environments_enabled else None
    yield
    if task:
        task.cancel()
        with suppress(asyncio.CancelledError):
            await task

app = FastAPI(title=settings.app_name, lifespan=lifespan)
register_exception_handlers(app)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.frontend_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(api_router, prefix=settings.api_v1_prefix)
