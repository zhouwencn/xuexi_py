from functools import lru_cache
from pathlib import Path
import secrets
from typing import Literal

from pydantic import Field, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_ROOT = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):
    app_env: Literal["development", "test", "production"] = "development"
    app_name: str = "Python 学习平台 API"
    api_v1_prefix: str = "/api/v1"
    database_url: str
    frontend_origins: list[str] = ["http://localhost:5173"]
    # 开发环境未配置时使用进程级随机密钥，避免仓库内置一个人人都知道的固定密钥。
    auth_secret_key: str = Field(default_factory=lambda: secrets.token_urlsafe(48), min_length=32)
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

    @model_validator(mode="after")
    def validate_production_security(self) -> "Settings":
        unsafe_examples = {
            "local-development-secret-change-before-deploying",
            "replace-with-at-least-32-random-characters",
        }
        if self.auth_secret_key in unsafe_examples:
            raise ValueError("AUTH_SECRET_KEY 不能使用示例值")
        if self.app_env == "production" and "auth_secret_key" not in self.model_fields_set:
            raise ValueError("生产环境必须显式配置 AUTH_SECRET_KEY")
        return self


@lru_cache
def get_settings() -> Settings:
    return Settings()
