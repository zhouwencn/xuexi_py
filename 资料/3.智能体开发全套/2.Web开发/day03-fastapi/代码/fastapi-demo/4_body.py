from typing import Annotated
from fastapi import Body, FastAPI
from pydantic import BaseModel

app = FastAPI()


# 封装模型； VO/DTO：Data Transfer Object 数据传输对象
# 前端来的请求json数据，封装为一个对象。 pydantic； 自动校验、自动加接口文件
class Book(BaseModel):
    title: str
    author: str
    price: float



# 请求体是json。json本质是 kv 结构数据； dict 字典就是kv 结构
@app.post("/body")
async def read_body(item: Annotated[dict,Body(...,description="请求体是json")]):
    # item 里面到底有几个kv
    return item

@app.post("/books") # 自动从请求体中获取这个json数据
async def read_books(book: Book):
    # item 里面到底有几个kv
    return book