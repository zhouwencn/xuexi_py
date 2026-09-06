from fastapi import FastAPI, HTTPException, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

app = FastAPI()

# @app.get("/items/{item_id}")
# async def read_item(item_id: int):
#     if item_id == 3:
#         raise HTTPException(status_code=404, detail={"msg": "没有找到这个数据"}, 
#                headers={"X-Error": "leifengyang error"})
#     return {"item_id": item_id}

# 处理所有 HTTPException 异常； 必须导入 starlette 里面的
@app.exception_handler(StarletteHTTPException)
async def star_exception_handler(request: Request, exc: StarletteHTTPException):
    print("star： 统一异常处理:", exc)
    return JSONResponse(
        status_code=exc.status_code,
        content={"code": exc.status_code, "msg": f"{request.url} 炸了! {exc.detail}","data": []},
    )

# 统一异常处理: HTTPException 仅能匹配 HTTPException
@app.exception_handler(HTTPException)
async def biz_exception_handler(request: Request, exc: HTTPException):
    print("http 异常处理:", exc)
    return JSONResponse(
        status_code=exc.status_code,
        content={"code": exc.status_code, "msg": f"{request.url} 炸了! {exc.detail}","data": []},
        headers={**exc.headers,"xx":"cc"},
    )




@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id == 3:
        raise HTTPException(status_code=404, detail={"msg": "没有找到这个数据"}, 
               headers={"X-Error": "leifengyang error"})
    return {"item_id": item_id}

# 处理 pydantic 等数据校验的错误
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    print("数据校验错误:", exc)
    return error_response(400, f"{request.url} 数据校验错误! {exc.errors()}")


class BizException(Exception):
    def __init__(self, name):
        self.name = name

@app.exception_handler(BizException)
async def biz_exception_handler(request: Request, exc: BizException):
    print("业务错误:", exc)
    return error_response(503, f"{request.url} 业务错误! {exc.name}")

@app.get("/biz/{name}")
async def read_biz(name: str):
    if name == "vip":
        raise BizException(name=name)
    return {"biz_name": name}

# @app.exception_handler(BizException)  指定要处理的异常。并用 JSONResponse 统一返回
# 如果出现了异常，能匹配多个异常处理函数； 则精确优先

# 所有异常的兜底处理； 只要前面没有精确声明的异常处理函数。出现异常，就会调用这个函数
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return error_response(500, f"Internal server error: {str(exc)}")

def error_response(code: int, message: str, status_code: int = 400):
    return JSONResponse(
        status_code=status_code,
        content={"success": False, "code": code, "message": message}
    )