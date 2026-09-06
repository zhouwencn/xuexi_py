from typing import Annotated, Literal

from fastapi import FastAPI, Header, Query, Request
from pydantic import BaseModel, Field

app = FastAPI()


# 使用 pydantic 模型后， 每个字段如果需要校验，使用 Field 指定规则
class FilterParams(BaseModel):
    # 忽略额外的字段; 更多的设置，参考 ConfigDict
    model_config = {"extra": "ignore"}
    limit: int = Field(...,description="每页数量",gt=0,lt=100)
    offset: int = Field(0,description="偏移量")
    order_by: Literal["created_at", "updated_at"] = "created_at"
    tags: list[str] = []

class MyCoreHeader(BaseModel):
    x_token: str
    x_user_id: int = Field(...,description="用户ID")
    x_device_id: str = Field(...,description="设备ID")

@app.get("/items/")
async def read_items(filter_query: Annotated[FilterParams, Query()],
                     core_header: Annotated[MyCoreHeader, Header()]):
    return {
        "filter_query": filter_query,
        "core_header": core_header,
    }


# 直接使用request
@app.get("/items2/")
async def read_items2(req: Request):
    
    return {
        "url": req.url,
        "method": req.method,
        "cookies": req.cookies,
        "headers": req.headers,
    }

# 最佳实践
## 1. 少量参数，直接使用 Path()/Query() 等函数定义获取值
## 2. 复杂参数，使用 pydantic 模型统一封装，模型内，使用Field定义校验规则