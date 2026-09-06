from typing import Annotated
from fastapi import FastAPI, Query

app = FastAPI()

## 处理路径变量上的数据已经映射了，剩下都在 查询字符串中找
@app.get("/goods/{item_id}")
async def read_goods(item_id: str, 
                     q: str | None = None, 
                     short: bool = False):
    item = {"item_id": item_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item

# 2. 必选与可选； 没有默认值的所有参数都必须传递
## 只要有默认值就可以不传
## 小细节：所有指定默认值的参数都必须放在参数表后面
@app.get("/books/{book_id}")
async def read_books(book_id: int,
                    pageSize: int,
                     page: int = 1
                     ):
    return {"book_id": book_id,
            "page": page,
            "pageSize": pageSize}
    
## 2. 使用 Query() 函数指定复杂规则
@app.get("/books2/{book_id}")
async def read_books(book_id: int,
                    pageSize: Annotated[int,
                      Query(...,
                        description="每页数量",gt=10,lt=1000)
                    ],
                     page: int = Query(1, 
                        description="页码",gt=0,lt=100)
                     ):
    return {"book_id": book_id,
            "page": page,
            "pageSize": pageSize}