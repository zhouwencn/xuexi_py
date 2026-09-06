from fastapi import FastAPI

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


## 1. 路径参数处理


