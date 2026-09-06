from contextlib import asynccontextmanager
from fastapi import FastAPI











# 上下文管理器
@asynccontextmanager
async def hahaha(app: FastAPI):
    print("ctm 应用启动了...",app.docs_url)
    yield #暂停。返回
    print("ctm 应用关闭了...",app.docs_url)


# 把上下文管理器注册到应用
app = FastAPI(lifespan=hahaha)

# `startup` or `shutdown`
@app.on_event("startup")  # 感知应用启动
async def startup_event():
    print("应用启动了...")

@app.on_event("shutdown")  # 感知应用关闭
async def shutdown_event():
    print("应用关闭了...")

@app.get("/")
async def root():
    return {"message": "Hello World"}