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

开发环境没有配置 `AUTH_SECRET_KEY` 时会生成本次进程使用的随机密钥，服务重启后旧 token 会失效。生产环境必须设置 `APP_ENV=production`，并显式提供至少 32 字节的随机 `AUTH_SECRET_KEY`。

课程目录接口：`GET /api/v1/courses/python-from-js/catalog`

## 用户与学习闭环

- `POST /api/v1/auth/register`：注册
- `POST /api/v1/auth/login`：登录
- `GET/PUT /api/v1/me/progress/{course_id}`：带版本号的云端进度
- `GET /api/v1/diagnostics/{course_id}`：获取不含答案的诊断题
- `POST /api/v1/diagnostics/{course_id}/submit`：提交诊断
- `POST /api/v1/exercises/{exercise_id}/submissions`：隐藏测试与代码评审

## 隔离代码执行

默认关闭：

```text
CODE_EXECUTION_ENABLED=false
```

启用后，提交代码只会在一次性 Docker 容器中运行，并使用无网络、只读根文件系统、CPU、内存、进程数和超时限制。未启用时接口返回 503，不会退回到本机 `exec`。

启用前需要由管理员预先拉取固定镜像；runner 使用 `--pull never`，API 请求不会隐式下载或更换镜像：

```bash
docker pull python:3.12-alpine
```

隐藏测试的名称和异常信息不会返回客户端。当前 runner 定位仍是本地学习反馈，不应作为对抗性考试沙箱；如果需要防止主动探测测试内容，应把判题控制层与用户代码进程进一步隔离。

## FastAPI/PostgreSQL 临时实验环境

先构建固定运行镜像：

```bash
docker build -t xuexi-py-lab:latest lab_runtime
```

然后在 `.env` 中显式启用：

```text
LAB_ENVIRONMENTS_ENABLED=true
LAB_RUNTIME_IMAGE=xuexi-py-lab:latest
```

每个登录用户最多一个环境；PostgreSQL 只在独立 Docker network 内可见，FastAPI 映射到随机本地端口，并在 TTL 到期后清理。

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
- `40001-49999`：用户与认证错误
- `50001-59999`：进度、执行和实验环境错误
- `90001-99999`：服务内部错误

当前已使用的具体错误码定义在 `app/core/error_codes.py`。
