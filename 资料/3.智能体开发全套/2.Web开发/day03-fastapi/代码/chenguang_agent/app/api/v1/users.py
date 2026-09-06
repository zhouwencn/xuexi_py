# 用户接口； 所有用户的请求定义

# 导入路由器
from fastapi import APIRouter

router = APIRouter(tags=["用户接口"])

@router.get("/user/{user_id}")
async def get_user(user_id: int):
    return {"user_id": user_id}


@router.post("/user/{user_id}")
async def create_user(user_id: int):
    return {"user_id": user_id}

@router.put("/user/{user_id}")
async def update_user(user_id: int):
    return {"user_id": user_id}

@router.delete("/user/{user_id}")
async def delete_user(user_id: int):
    return {"user_id": user_id}