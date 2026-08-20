# 项目说明

这是一个用于学习 Python 的前后端分离项目。

当前项目结构：

```text
xuexi_py_project/
├── AGENTS.md
├── docker-compose.yml
├── xuexi_py_frontend/     # 前端项目
└── xuexi_py_backend/      # Python + FastAPI 后端项目
```

其中：

* `xuexi_py_frontend` 是前端项目。
* `xuexi_py_backend` 是后端项目。
* 前端目前已经基本完成。
* 当前部分课程、章节、知识点、题目、答案、解析等数据仍然直接写死在前端代码中。
* 当前主要目标是逐步把适合持久化的数据迁移到 PostgreSQL。
* 前端后续通过 HTTP API 从 FastAPI 后端获取数据。
* 不要为了接入后端而重新设计或大规模重写现有前端。

---

# 一、整体架构

项目目标架构：

```text
xuexi_py_frontend
        ↓
      HTTP API
        ↓
xuexi_py_backend
        ↓
    SQLAlchemy
        ↓
    PostgreSQL
        ↓
  Docker Compose
```

技术栈：

## 前端

以前端项目当前已有技术栈为准。

在修改前端之前，必须先阅读：

* `package.json`
* 路由配置
* 请求封装
* 状态管理
* 相关页面和组件

不要擅自替换现有前端框架、UI 框架或请求方案。

## 后端

后端使用：

* Python 3.12
* FastAPI
* SQLAlchemy 2.x
* Pydantic
* Alembic
* PostgreSQL

## 环境管理

后端 Python 环境使用：

* Conda：管理 Python 版本和虚拟环境
* pip：安装 Python 项目依赖
* Docker Compose：管理 PostgreSQL 等基础设施

不要混用多个 Python 虚拟环境方案。

---

# 二、Python 环境管理规则

本项目后端统一使用 Conda 管理 Python 环境。

推荐 Conda 环境名称：

```text
xuexi_py_backend
```

推荐 Python 版本：

```text
Python 3.12
```

创建环境：

```bash
conda create -n xuexi_py_backend python=3.12
```

激活环境：

```bash
conda activate xuexi_py_backend
```

后端 Python 相关命令原则上都应该在该 Conda 环境中执行。

包括：

```text
python
pip
fastapi
uvicorn
alembic
pytest
其他 Python 工具
```

---

# 三、禁止创建额外 Python 虚拟环境

本项目已经使用 Conda 管理 Python 环境。

因此除非明确要求，否则不要创建：

```text
.venv/
venv/
env/
```

不要自动使用：

* `python -m venv`
* Poetry 创建的虚拟环境
* Pipenv 虚拟环境
* uv 自动创建的虚拟环境
* 其他额外虚拟环境方案

不要因为某个工具默认推荐 `.venv` 就自动创建。

原则：

> 一个后端项目只使用一个 Python 环境体系，本项目统一使用 Conda。

---

# 四、Python 依赖管理

Conda 主要负责：

* Python 版本
* Python 环境隔离

Python 项目依赖主要通过 pip 安装。

例如：

```bash
pip install fastapi
pip install sqlalchemy
pip install alembic
pip install "psycopg[binary]"
pip install pydantic-settings
```

不要要求所有 Python 包都必须通过 `conda install` 安装。

对于 FastAPI 等 Web 项目依赖，优先使用 pip。

项目必须保留明确的依赖声明。

优先使用现有项目已经采用的方案，例如：

```text
pyproject.toml
```

或者：

```text
requirements.txt
```

如果项目已经有其中一种，不要无必要再创建第二套依赖管理方式。

---

# 五、Conda 环境与项目依赖的关系

不要把 Conda 环境本身当成项目依赖清单。

正确关系是：

```text
Conda
  ↓
提供 Python 3.12 运行环境

requirements.txt / pyproject.toml
  ↓
声明 FastAPI、SQLAlchemy 等项目依赖

xuexi_py_backend
  ↓
运行后端项目
```

换电脑或者重新搭建环境时，应能够通过依赖文件恢复项目依赖。

不要依赖某台机器上已有的 Conda 环境状态。

---

# 六、Codex 执行 Python 命令的规则

如果 Codex 需要运行后端相关命令，应优先使用项目指定的 Conda 环境。

如果当前 Shell 已经激活：

```text
xuexi_py_backend
```

则直接运行对应命令。

如果未激活，可以根据实际环境使用类似：

```bash
conda run -n xuexi_py_backend python ...
```

或者明确提醒需要：

```bash
conda activate xuexi_py_backend
```

不要擅自创建 `.venv` 来绕过 Conda 环境问题。

如果发现 Conda 环境不存在，应先说明问题，不要默默创建其他环境体系。

---

# 七、Codex 的基本工作原则

收到任务后，不要立即开始大量修改代码。

首先阅读和分析与当前任务相关的已有代码。

遵循以下原则：

1. 先理解现有实现，再修改。
2. 优先复用已有代码，不要重复实现同一种功能。
3. 修改范围尽量聚焦当前任务。
4. 不要顺便进行无关重构。
5. 优先简单、清晰、容易理解的方案。
6. 不要过度设计。
7. 不要为了所谓“企业级架构”增加没有实际价值的抽象层。
8. 如果现有代码已经可以正常工作，不要仅仅因为个人风格不同就重写。
9. 如果任务涉及前后端，必须同时检查两边的数据结构和接口调用关系。
10. 完成修改后必须检查前后端接口是否一致。

---

# 八、前端规则

前端目录：

```text
xuexi_py_frontend/
```

前端已经基本完成，因此默认原则是：

> 保留现有 UI、页面结构和交互，只改变必要的数据来源。

除非任务明确要求，否则不要：

* 重新设计页面
* 修改现有视觉风格
* 大规模重写组件
* 更换 UI 框架
* 更换状态管理方案
* 更换 HTTP 请求库
* 随意调整已经正常工作的路由结构

修改前端时：

1. 优先复用已有组件。
2. 遵循已有目录结构和命名方式。
3. 如果已有 `axios`、`request`、`api`、`services` 等请求封装，必须优先复用。
4. 不要重新创建第二套 HTTP 请求封装。
5. 接入后端后，应合理处理：

   * loading
   * 空数据
   * API 请求失败
   * 异常状态
6. 尽量保持原来的页面数据结构，减少无意义的大范围组件修改。

---

# 九、静态数据迁移规则

当前项目的重要任务之一，是把适合持久化的前端静态数据迁移到 PostgreSQL。

可能包括：

* 课程
* 章节
* 知识点
* 学习内容
* Python 语法内容
* 练习题
* 题型
* 题目选项
* 正确答案
* 题目解析
* 示例代码
* 难度
* 分类
* 其他学习数据

但不要认为所有前端常量都应该进入数据库。

以下内容通常可以继续保留在前端：

* UI 配置
* 页面展示文案
* 路由配置
* 菜单配置
* 颜色
* 图标
* 纯展示性质的常量

具体是否进入数据库，必须结合现有业务判断。

---

# 十、迁移静态数据时的工作流程

发现前端存在静态数据时，不要直接删除。

应按照以下顺序处理：

1. 找到静态数据所在文件。
2. 查找哪些页面、组件或方法正在使用这些数据。
3. 理解数据之间的关系。
4. 判断是否应该迁移数据库。
5. 根据现有业务设计数据库模型。
6. 实现对应 FastAPI API。
7. 编写数据初始化或 seed 脚本。
8. 将原来的前端数据导入 PostgreSQL。
9. 验证后端 API 可以正确返回数据。
10. 修改前端，将静态数据替换成 API。
11. 验证页面功能正常。
12. 最后再考虑删除不再需要的静态数据。

不要先删除原始数据再开发后端。

---

# 十一、后端规则

后端目录：

```text
xuexi_py_backend/
```

FastAPI 项目应保持清晰、简单、方便长期维护。

可以根据实际业务采用类似结构：

```text
xuexi_py_backend/
├── app/
│   ├── main.py
│   ├── api/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── crud/
│   ├── db/
│   └── core/
├── alembic/
├── tests/
├── alembic.ini
├── pyproject.toml
└── .env.example
```

这只是推荐结构。

如果当前项目已经存在合理结构，应优先遵循现有结构，不要为了匹配此示例而强行重构。

---

# 十二、FastAPI 开发规范

后端开发时：

* 使用 Python 类型注解。
* 使用 FastAPI 推荐方式组织路由。
* 使用 Pydantic 定义请求和响应 Schema。
* 使用 SQLAlchemy 2.x 风格。
* 数据库 Session 生命周期要清晰。
* 不要把所有代码都写进 `main.py`。
* API 路由、数据库模型、Pydantic Schema 和业务逻辑应合理分离。
* 不要为了分层而过度分层。

如果简单 CRUD 不需要复杂 Service 层，可以保持简单。

---

# 十三、数据库规则

数据库使用 PostgreSQL。

PostgreSQL 由 Docker Compose 管理。

数据库连接信息必须通过环境变量管理。

禁止在 Python 源代码中直接写真实：

* 数据库用户名
* 数据库密码
* 数据库地址
* 数据库连接字符串

应提供：

```text
.env.example
```

例如：

```text
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
DATABASE_URL=
```

真实 `.env` 不应该提交到 Git。

---

# 十四、Alembic 规则

数据库结构变化使用 Alembic 管理。

新增表或修改字段时，原则上应该提供对应数据库 migration。

常见流程：

```bash
alembic revision --autogenerate -m "描述本次数据库修改"
alembic upgrade head
```

执行 Alembic 命令时必须使用 `xuexi_py_backend` Conda 环境。

不要依赖无法复现的手工数据库修改。

---

# 十五、Docker 规则

Docker 当前主要用于管理 PostgreSQL 等基础设施。

优先保证可以通过：

```bash
docker compose up -d
```

启动数据库。

当前开发阶段默认：

```text
前端：本地运行
FastAPI：Conda 环境本地运行
PostgreSQL：Docker 运行
```

即：

```text
Mac
│
├── Node.js
│   └── xuexi_py_frontend
│
├── Conda
│   └── xuexi_py_backend
│       ├── Python
│       ├── FastAPI
│       ├── SQLAlchemy
│       └── Alembic
│
└── Docker
    └── PostgreSQL
```

目前没有明确需求时，不要为了 Docker 而强行把前端和 FastAPI 后端全部容器化。

以后有明确部署需求时再考虑。

---

# 十六、数据库初始化数据

前端现有的课程、章节、题目等内容，不应该因为迁移数据库而丢失。

应优先考虑编写 seed/import 脚本。

例如：

```bash
python -m app.scripts.seed
```

执行 seed 时必须使用：

```text
xuexi_py_backend
```

Conda 环境。

Seed 脚本要求：

* 尽量可以重复执行。
* 重复执行时不要无限创建重复数据。
* 出现错误时提供明确提示。
* 尽量保留原来前端的数据内容和数据关系。

---

# 十七、前后端 API 一致性

这是本项目非常重要的规则。

任何涉及 API 的修改，都必须同时检查：

```text
xuexi_py_frontend
```

和：

```text
xuexi_py_backend
```

重点检查：

* URL
* HTTP Method
* Query 参数
* Path 参数
* 请求体
* 返回字段
* ID 类型
* null 值
* 数组结构
* 分页结构
* 错误响应
* HTTP 状态码

不要出现后端修改了字段但前端没有同步修改的情况。

例如：

```text
后端返回：
question_text

前端读取：
questionText
```

如果确实需要两种命名方式，应在统一的位置完成转换，不要在多个组件里重复处理。

---

# 十八、开发新功能的推荐流程

如果一个需求涉及前端 + 后端 + 数据库，按照以下顺序处理：

```text
1. 阅读 xuexi_py_frontend 中现有功能

2. 找到当前数据来源

3. 分析当前前端使用的数据结构

4. 确定需要的 API

5. 阅读 xuexi_py_backend 当前架构

6. 判断数据库是否需要新增或修改表结构

7. 创建或修改 SQLAlchemy Model

8. 创建 Alembic migration

9. 创建或修改 Pydantic Schema

10. 实现 FastAPI API

11. 在 xuexi_py_backend Conda 环境中验证后端 API

12. 修改 xuexi_py_frontend 接口调用

13. 完成前后端联调

14. 检查是否还有不应该继续写死的数据

15. 删除确认已经不需要的旧静态数据
```

不要一开始就进行全项目大规模重写。

---

# 十九、学习导向规则

这个项目除了完成产品功能，也用于学习 Python、FastAPI 和后端开发。

因此生成后端代码时：

* 优先可读性。
* 优先容易理解的 Python 写法。
* 不要为了少写几行代码使用晦涩技巧。
* 重要的 Python / FastAPI / SQLAlchemy / PostgreSQL 概念可以增加简短中文注释。
* 尽量使用主流、常见、规范的写法。
* 不要引入没有明显收益的设计模式。
* 不要为了展示高级技巧而增加代码复杂度。

如果简单方案已经足够，应优先使用简单方案。

---

# 二十、不要过度设计

除非项目已经有明确需要，否则不要擅自引入：

* Repository Pattern
* DAO 层
* Domain 层
* Mapper 层
* CQRS
* Event Bus
* 微服务
* 消息队列
* Kubernetes
* 复杂缓存架构
* 复杂权限系统
* 大型企业级目录结构

如果确实需要引入新的架构或中间件，先说明：

1. 为什么当前项目需要它。
2. 它解决什么问题。
3. 有没有更简单的方案。

---

# 二十一、修改范围控制

进行任务时，只修改和当前需求有关的代码。

不要：

* 顺手格式化整个项目。
* 修改大量无关文件。
* 重命名大量与需求无关的变量。
* 擅自升级大量依赖。
* 删除暂时看不懂的代码。
* 因个人偏好重写正常工作的代码。
* 擅自更换 Conda 环境管理方案。
* 擅自创建 `.venv`。

如果发现其他问题，可以在任务完成后指出，但不要默认一起修改。

---

# 二十二、测试和验证

修改后端后，尽可能验证：

* 当前使用的是正确 Conda 环境。
* Python import 是否正常。
* FastAPI 是否能够启动。
* PostgreSQL 是否能够正常连接。
* Alembic migration 是否可以执行。
* API 是否返回预期数据。
* 新增数据关系是否正确。

修改前端后，尽可能验证：

* 前端是否能够正常启动或构建。
* 修改页面有没有明显运行时错误。
* API 地址是否正确。
* 请求参数是否正确。
* 返回数据结构是否匹配。
* 页面功能是否和修改前一致。

如果项目已有测试，应优先使用已有测试。

不要因为一个简单功能而擅自引入大型测试框架。

---

# 二十三、完成任务后的输出要求

每次完成一个比较完整的开发任务后，请总结：

1. 本次实现了什么。
2. 修改了哪些文件。
3. 新增了哪些文件。
4. 是否修改数据库结构。
5. 是否生成 Alembic migration。
6. 新增或修改了哪些 API。
7. 前端修改了哪些数据来源。
8. 如何启动和验证功能。
9. 是否还有遗留问题。
10. 是否仍存在应该迁移但尚未迁移的静态数据。
11. 是否新增 Python 依赖。
12. 如果新增依赖，依赖文件是否已同步更新。

如果执行过测试或命令，也说明执行结果。

---

# 二十四、常用开发命令

实际命令应优先根据项目现有配置确认，不要盲目假设。

## 启动 PostgreSQL

在项目根目录：

```bash
docker compose up -d
```

查看容器：

```bash
docker compose ps
```

停止数据库：

```bash
docker compose down
```

---

## 激活后端 Conda 环境

```bash
conda activate xuexi_py_backend
```

如果环境不存在：

```bash
conda create -n xuexi_py_backend python=3.12
```

---

## 启动后端

```bash
cd xuexi_py_backend
conda activate xuexi_py_backend
fastapi dev app/main.py
```

实际入口文件以项目代码为准。

如果当前 Shell 不方便执行 `conda activate`，可以使用：

```bash
conda run -n xuexi_py_backend fastapi dev app/main.py
```

---

## Alembic

```bash
cd xuexi_py_backend
conda activate xuexi_py_backend
alembic upgrade head
```

生成 migration：

```bash
alembic revision --autogenerate -m "migration message"
```

---

## 启动前端

```bash
cd xuexi_py_frontend
npm run dev
```

实际命令以 `package.json` 为准。

---

# 二十五、Codex 收到任务后的默认行为

收到新的开发任务时：

1. 先判断任务涉及：

   * 前端
   * 后端
   * 数据库
   * Python 环境
   * 或多个部分

2. 阅读相关代码。

3. 搜索现有实现。

4. 理解数据流。

5. 确认后端使用 Conda 环境 `xuexi_py_backend`。

6. 再制定修改方案。

7. 进行最小必要修改。

8. 验证功能。

9. 检查前后端一致性。

10. 总结本次修改。

如果仓库中已经存在解决某个问题的方式，应优先沿用已有实现，而不是重新创建另一套方案。

核心原则：

> 先理解，再修改；优先复用，避免重写；保持简单，避免过度设计；前后端接口始终保持一致；Python 环境统一使用 Conda。
