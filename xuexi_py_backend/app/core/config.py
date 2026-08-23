from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_ROOT = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    app_name: str = "Python 学习平台 API"
    api_v1_prefix: str = "/api/v1"
    database_url: str
    frontend_origins: list[str] = ["http://localhost:5173"]
    auth_secret_key: str = "local-development-secret-change-before-deploying"
    access_token_minutes: int = 60
    code_execution_enabled: bool = False
    code_runner_image: str = "python:3.12-alpine"
    code_execution_timeout_seconds: int = 5
    lab_environments_enabled: bool = False
    lab_runtime_image: str = "xuexi-py-lab:latest"
    lab_environment_ttl_minutes: int = 60

    model_config = SettingsConfigDict(
        env_file=BACKEND_ROOT / ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()
