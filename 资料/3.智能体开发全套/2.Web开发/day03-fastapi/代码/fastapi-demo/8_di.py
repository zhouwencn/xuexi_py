from typing import Annotated
from fastapi import Depends, FastAPI

app = FastAPI()

# 依赖注入：效果：注入的公共逻辑先运行
## 1. 抽取公共逻辑
## 2. 使用 Depends 注入公共逻辑。

# 分页逻辑是公共的。
def pagination(page: Annotated[int, Query(description="页码", gt=0)],
               limit: Annotated[int, Query(description="每页数量", gt=0, le=100)] = 10,
               q: Annotated[str, Query(description="查询字符串")] = None):
    return {"page": page,
            "limit": limit,
            "q": q}


@app.get("/books")
async def get_books(pageParam: dict = Depends(pagination)):
    return {"books": ["book1", "book2", "book3"],**pageParam}


@app.get("/users")
async def get_users(param: dict = Depends(pagination)):
    return {"users": ["user1", "user2", "user3"],
            **param}