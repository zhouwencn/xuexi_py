# xuexi_py_backend

FastAPI + SQLAlchemy + PostgreSQL 后端。

## 本地启动

所有 Python 命令均在项目规定的 Conda 环境中执行：

```bash
conda create -n xuexi_py_backend python=3.12
conda activate xuexi_py_backend
pip install -e ".[dev]"
cp .env.example .env
cd ..
docker compose up -d
cd xuexi_py_backend
alembic upgrade head
python -m app.scripts.seed
uvicorn app.main:app --reload --port 8011
```

课程目录接口：`GET /api/v1/courses/python-from-js/catalog`

## API 响应规范

所有接口统一返回：

```json
{
  "code": 0,
  "message": "success",
  "data": null
}
```

`code` 是稳定的业务错误码，HTTP 状态码仍按 REST 语义返回：

- `0`：成功
- `10001-19999`：通用请求与参数错误
- `20001-29999`：课程与章节错误
- `30001-39999`：题目与练习错误
- `40001-49999`：用户错误（预留）
- `50001-59999`：学习记录与进度错误（预留）
- `90001-99999`：服务内部错误

当前已使用的具体错误码定义在 `app/core/error_codes.py`。
