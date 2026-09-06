# Item接口； 所有Item的请求定义
# 用户接口； 所有用户的请求定义

# 导入路由器
from fastapi import APIRouter, Depends

from app.dependencies import get_token_header


# 路由级别的公共依赖。以后每个路由运行之前都会先运行他
router = APIRouter(tags=["Item接口"],
dependencies=[Depends(get_token_header)])

@router.get("/item/{item_id}",summary="获取Item",description="根据Item ID获取Item的信息")
async def get_item(item_id: int):
    return {"item_id": item_id}


@router.post("/item/{item_id}",summary="创建Item",description="创建一个新的Item")
async def create_item(item_id: int):
    return {"item_id": item_id}

@router.put("/item/{item_id}",summary="更新Item",description="更新Item的信息")
async def update_item(item_id: int):
    return {"item_id": item_id}

@router.delete("/item/{item_id}",summary="删除Item",description="删除指定的Item")
async def delete_item(item_id: int):
    return {"item_id": item_id}
