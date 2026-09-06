from fastapi import FastAPI, Request, Response
from starlette.middleware.base import BaseHTTPMiddleware, RequestResponseEndpoint

app = FastAPI()

# 2. 继承类写法
class My1Middleware(BaseHTTPMiddleware):
    
    async def dispatch(self, request: Request, call_next) -> Response:
        print("my1_middleware_类:  开始...")
        resp = await call_next(request)
        print("my1_middleware_类:  结束...")
        return resp

class My2Middleware(BaseHTTPMiddleware):
    
    async def dispatch(self, request: Request, call_next) -> Response:
        print("my2_middleware_类:  开始...")
        # 对请求做各种修改
        # 中间件要放行。调用目标方法。得到响应
        resp = await call_next(request)
        # 对响应做各种修改
        print("my2_middleware_类:  结束...")
        # 返回给客户端
        return resp
# 注册中间件
app.add_middleware(My1Middleware)
app.add_middleware(My2Middleware)


# 1. 装饰器写法：日志中间件
@app.middleware("http") # 固定写法
async def log1_middleware(request: Request, call_next):
    print("log1_middleware_装饰器:  开始...")
    # 对请求做各种修改
    # 中间件要放行。调用目标方法。得到响应
    resp = await call_next(request)
    # 对响应做各种修改
    print("log1_middleware_装饰器:  结束...")
    # 返回给客户端
    return resp

@app.middleware("http") # 固定写法
async def log2_middleware(request: Request, call_next):
    print("log2_middleware_装饰器:  开始...")
    resp = await call_next(request)
    print("log2_middleware_装饰器:  结束...")
    return resp

from fastapi.middleware.cors import CORSMiddleware

# app.add_middleware(中间件类, 中间件参数)

app.add_middleware(CORSMiddleware,
    allow_origins=["localhost","127.0.0.1"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 生命周期： 指从应用创建启动、到结束销毁的完整过程。

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    print("目标方法执行...")
    return {"item_id": item_id}

