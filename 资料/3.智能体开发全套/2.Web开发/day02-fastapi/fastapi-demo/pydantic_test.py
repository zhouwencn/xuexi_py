from datetime import datetime
from typing import Annotated

from pydantic import BaseModel


# User 继承 BaseModel, 才算开启 pydantic 对这个类对象的校验功能，
class User(BaseModel):
    id: int | None = None
    name: str = "John Doe"
    signup_ts: datetime | None = None
    friends: list[int] = []


# kv 结构
external_data = {
    # "id": "123",
    "signup_ts": "2017-06-01 12:22",
    "friends": [1, "2", b"3"],
}

# 展开  external_data 中的 kv 结构
user = User(**external_data)

print(user)
# > User id=123 name='John Doe' signup_ts=datetime.datetime(2017, 6, 1, 12, 22) friends=[1, 2, 3]
print(user.id)
# > 123


# name: str； 仅说明，name是一个字符串
# 一个场景： 说明name的诸多特性
##  1. name 类型是字符串
##  2. name 最小长度是3
##  3. name 最大长度是50
##  4. name 是指人名
## 以上信息统一使用 Annotated 包装就可以 
## Annotated[类型,扩展信息]
def say_hello(name: Annotated[str,min_length(3),max_length(50)]):
    print(f"Hello, {name}!")


# async 标记一个异步函数
# @app.get('/')
# async def read_results():
#     results = await some_library()
#     return results

async def aaa():
    return "xxx"

async def bbb():
    print("bbb")
    result = await aaa();
    print("bbb end")