from typing import Annotated
from fastapi import FastAPI, File, Form, UploadFile
from pydantic import BaseModel

app = FastAPI()

@app.post("/form")
async def read_form(username: Annotated[str,Form(...,description="用户名")],
                    password: Annotated[str,Form(...,description="密码")]
   ):
    return {"username": username,
            "password": password}


class Book(BaseModel):
    title: str
    author: str
    price: float
    publish_t: int

@app.post("/form2")
async def read_form2(book: Annotated[Book,Form(...,description="图书信息")]):
    return book


# 获取上传的文件
## 1. 文件是一个二进制流； file: bytes = File(...)
@app.post("/upload")
async def upload_file(file: bytes = File(...)):
    return {"file_size": len(file)}

## 2. UploadFile: 指代从表单中获取文件
@app.post("/upload2")
async def upload_file2(file: UploadFile):
    # UploadFile 对文件的 读写操作，都是 异步函数。
    # 所以，需要 await 关键字。才能获取到结果


    # 保存文件
    contents = await file.read()
    # 自动关流
    with open(f"./upload/{file.filename}", "wb") as f:
        f.write(contents)

    return {"filename": file.filename,
            "content_type": file.content_type,
            "headers": dict(file.headers),
            "file_size": len(await file.read())}

# 处理复杂表单，既有普通项，也有文件项
# headerImg 可以上传多个文件； 
@app.post("/form3")
async def read_form3(username: Annotated[str,Form(...,description="用户名")],
                    password: Annotated[str,Form(...,description="密码")],
                    file: UploadFile,
                    headerImg: list[UploadFile] = File(...,description="头像")
   ):
    return {"username": username,
            "password": password,
            "filename": file.filename,
            "headerImg": len(headerImg),
            "headers": dict(file.headers),
            "file_size": len(await file.read())}
