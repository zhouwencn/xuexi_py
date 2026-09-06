from fastapi import FastAPI, Header

app = FastAPI()

# 获取 user-agent 请求头数据： 用户代理（浏览器）
# q,k,v：参数上; user-agent: 不区分大小写

@app.get("/items/{item_id}")
async def read_items(item_id,q,k,v,
        user_agent: str | None = Header(None,
            description="用户代理")):
    return {"item_id": item_id,
            "q": q,
            "k": k,
            "v": v,
            "user_agent": user_agent}

## accept-language 请求头数据： 浏览器语言
@app.get("/items2/{item_id}")
async def read_items2(item_id,q,k,v,
        accept_language: list[str] | None = Header(None,
            description="浏览器语言")):
        
    # 处理业务
    return {"item_id": item_id,
            "q": q,
            "k": k,
            "v": v,
            "accept_language": accept_language}