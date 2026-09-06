from typing import Annotated
from fastapi import Body, FastAPI, Header, Path, Query
from pydantic import BaseModel

# 创建 FastAPI 应用实例
app = FastAPI()

# 处理请求： /； sprinbmvc 的 @getmapping
@app.get("/") # 装饰器
async def read_root():

    # 返回json数据
    return {"Hello": "World2222"}

# /items/{item_id}?q=abc
# 路由
@app.get("/items/{item_id}")
async def read_item(item_id: int,q):
    return {"item_id": item_id,"q":q}



## 复杂请求
@app.get("/items2/{item_id}")
async def read_item2(item_id: Annotated[int,Path(...,description="用户id必须在 100 - 1000 之间",
                      gt = 100, lt= 1000)],
                     q: Annotated[str,Query(...,min_length=3,max_length=50)],
                     user_agent: Annotated[str,Header(...,description="用户代理")]):
    
    return {"item_id": item_id,
            "q": q,
            "user_agent": user_agent}
