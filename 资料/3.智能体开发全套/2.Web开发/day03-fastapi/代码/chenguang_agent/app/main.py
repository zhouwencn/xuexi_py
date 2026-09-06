# 程序入口
from fastapi import FastAPI

# 导入路由
from app.api.v1 import users, items, orders
from app.core.config import settings


def create_app() -> FastAPI:
    app = FastAPI(title=settings.PROJECT_NAME, version=settings.VERSION)

    # 注册路由
    app.include_router(users.router)
    app.include_router(items.router)
    app.include_router(orders.router)

    # 注册中间件
    # app.add_middleware(
    #     CORSMiddleware,
    #     allow_origins=settings.ALLOWED_ORIGINS,
    #     allow_credentials=True,
    #     allow_methods=["*"],
    #     allow_headers=["*"],
    # )

    # 注册异常处理程序
    # app.add_exception_handler(HTTPException, http_exception_handler)

    return app

app = create_app()

@app.get("/")
async def root():
    return {"project_name": settings.PROJECT_NAME, "version": settings.VERSION}


