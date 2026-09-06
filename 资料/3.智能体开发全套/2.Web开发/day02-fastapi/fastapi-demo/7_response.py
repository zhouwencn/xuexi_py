from fastapi import FastAPI, Response, status
from fastapi.responses import HTMLResponse, JSONResponse, PlainTextResponse
from pydantic import BaseModel

app = FastAPI()

#  response_model：代表响应的数据类型；   @GetMapping("/",produces="text/html")
@app.get("/") # 接收get请求。
async def read_items():
    # return {"message": "Hello World"}
    # return "你好，fastapi"
    return HTMLResponse(content="<h1>你好，fastapi</h1>")

class Item(BaseModel):
    name: str
    price: float
    description: str | None = None

# 如果响应的数据也 需要 pydantic 模型校验， 就指定 response_model 参数
@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: int):
    return {"name": "Pen", "price": 1.5, "description": "A red pen", "id": item_id}

# 给浏览器一个响应，重点需要定制和关注哪些？
## HTTP 请求/响应
### HTTP数据报文（首行 + 头 + 空行 + 体）
### 响应（响应首行[响应状态码] + 响应头 + 空行 + 响应体）
## 成功：200  找不到：404

## 定制响应：自定义响应状态码，响应头，响应体

@app.get("/xx1",status_code=status.HTTP_201_CREATED)
async def read_item():
    # 业务复杂
    ## if  201
    ## else if 400
    ## else if 403
    return {"name": "Pen", "price": 1.5, "description": "A red pen"}


# 完全定制此次响应的内容： 自定义响应状态码，响应头，响应体
@app.get("/xx3")
async def read_item():
    return JSONResponse(content={"name": "Pen", "price": 1.5, "description": "A red pen"},
                        status_code=status.HTTP_202_ACCEPTED,
                        headers={"X-Custom-Header": "lfy", "X-Token": "123456"},
                        media_type="application/json")

@app.get("/text")
async def get_text():
    return PlainTextResponse("<h1>Hello HTML</h1>")

@app.get("/html")
async def get_text():
    return HTMLResponse(content="<h1>Hello HTML</h1>",
                        status_code=status.HTTP_200_OK,
                        headers={"X-Custom-Header": "lfy"})

@app.get("/html2", response_class=HTMLResponse)
async def html():
    return "<h1>Hello HTML</h1>"

from fastapi.responses import FileResponse

@app.get("/download")
async def download():
    return FileResponse("upload/15.jpg")

# 自己写一个 xxxResponse 类， 定制响应体的格式
class MyXMLResponse(Response):
    media_type = "application/xml"

@app.get("/xml")
async def get_xml():
    data = "<note><to>Tove</to><from>Jani</from></note>"
    return MyXMLResponse(content=data)

