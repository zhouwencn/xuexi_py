# 路径参数测试

from typing import Annotated
from fastapi import FastAPI, Path

# 创建 FastAPI 应用实例
app = FastAPI()


# 精确路径和模糊匹配并存的时候，一定先声明精确路径
@app.get("/items/cur")
async def read_current_item():
    return {"item_id": "当前商品"}


# {item_id}： 路径变量；路径位置这里是动态； 用item_id 封装。
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}

## 1. 路径顺序； 先声明优先；
## 浏览器发送 /items/cur 的时候。
## 服务器两个位置都能；匹配上； 按照方法声明先后顺序，由第一个人进行处理
### 1. @app.get("/items/cur")
### 2. @app.get("/items/{item_id}")


## 2. 复杂数据校验
### 用户id必须在 100 - 1000 之间
### Path()函数
# user_id: int = Path(...,其他属性限制规则)
@app.get("/users/{user_id}")
async def read_user(user_id: int = Path(...,
                description="用户id必须在 100 - 1000 之间",
                gt = 100, lt= 1000)):

    return {"user_id": user_id}

### 元注解写法
@app.get("/users2/{user_id}")
async def read_user2(user_id: Annotated[int,
                    Path(...,description="用户id必须在 100 - 1000 之间",
                        gt = 100, lt= 1000)
                ]):
    return {"user_id": 10001}



