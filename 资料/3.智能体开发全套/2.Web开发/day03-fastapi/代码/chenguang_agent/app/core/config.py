from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # 以下的属性都从配置文件中读
    PROJECT_NAME: str = "My FastAPI App"
    VERSION: str = "0.1.0"

    # 从 .env 文件加载配置
    class Config:
        env_file = ".env"

settings = Settings()