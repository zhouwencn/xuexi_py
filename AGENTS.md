# 项目说明

这是一个用于系统学习 Python 的前后端分离项目。

项目结构：

```text
xuexi_py_project/
├── AGENTS.md
├── docker-compose.yml
├── xuexi_py_frontend/
└── xuexi_py_backend/
```

其中：

* `xuexi_py_frontend`：前端项目。
* `xuexi_py_backend`：Python + FastAPI 后端项目。
* 前端已经基本完成。
* 部分课程、章节、知识点、题目、答案、解析等数据仍然写死在前端。
* 适合持久化的学习数据后续逐步迁移到 PostgreSQL。
* 前端通过 HTTP API 从 FastAPI 后端获取数据。
* 不要为了接入后端而大规模重写现有前端。

---

# 一、项目核心目标

这个项目最重要的目标是：

> 系统学习和掌握 Python。

最终希望学习者可以：

* 看懂 Python 代码。
* 理解代码执行过程。
* 判断代码输出。
* 找出代码问题。
* 理解 Python 语言机制。
* 修改已有代码。
* 独立完成常见 Python 功能。
* 从基础逐步达到较高的 Python 开发水平。

FastAPI、SQLAlchemy、PostgreSQL、Docker 等主要是这个学习网站自身使用的工程技术。

它们不是课程和题库的核心。

因此：

> 课程和题库优先围绕 Python 本身展开。

除非任务明确要求，否则不要把题库升级理解成：

* SQL 题库
* PostgreSQL 题库
* SQLAlchemy 题库
* FastAPI 题库

---

# 二、Python 学习路线

Python 内容整体按照以下顺序递进：

```text
Python 基础
    ↓
数据类型与数据结构
    ↓
流程控制
    ↓
函数
    ↓
作用域与函数进阶
    ↓
模块与包
    ↓
异常与文件
    ↓
面向对象
    ↓
迭代器与生成器
    ↓
装饰器
    ↓
上下文管理器
    ↓
类型系统与标准库
    ↓
Python 对象模型
    ↓
内存与引用机制
    ↓
并发与多进程
    ↓
asyncio
    ↓
Python 高级运行机制
```

难度应该来自知识深度，而不是单纯让代码越来越长。

---

# 三、Python 基础知识范围

基础阶段包括但不限于：

* Python 基本语法
* 变量
* 命名
* int
* float
* str
* bool
* None
* 类型转换
* 运算符
* if / elif / else
* for
* while
* range
* break
* continue
* pass
* list
* tuple
* dict
* set
* 字符串
* 索引
* 切片
* input
* print
* f-string
* enumerate
* zip
* len
* sum
* min
* max
* sorted
* any
* all
* 函数基础
* 参数
* return

基础阶段可以有概念题，但不能全部是死记硬背题。

---

# 四、Python 中级知识范围

中级阶段包括但不限于：

* 列表推导式
* 字典推导式
* 集合推导式
* generator expression
* lambda
* map
* filter
* sorted key
* 默认参数
* 位置参数
* 关键字参数
* `*args`
* `**kwargs`
* 参数解包
* 序列解包
* LEGB
* global
* nonlocal
* closure
* module
* package
* import
* `__name__`
* try
* except
* else
* finally
* raise
* 自定义异常
* 文件操作
* with
* pathlib
* json
* csv
* datetime
* collections
* itertools
* functools
* os
* sys

中级题应明显增加：

* 代码输出
* 找 Bug
* 代码改写
* 多种写法比较
* 常见陷阱
* 原理解释

---

# 五、Python 高级知识范围

高级阶段包括但不限于：

## 面向对象

* class
* instance
* self
* `__init__`
* 实例属性
* 类属性
* 实例方法
* classmethod
* staticmethod
* inheritance
* multiple inheritance
* super
* override
* MRO
* property
* ABC
* duck typing

## Magic Methods

包括：

* `__str__`
* `__repr__`
* `__len__`
* `__eq__`
* `__hash__`
* `__bool__`
* `__call__`
* `__iter__`
* `__next__`
* `__getitem__`
* `__contains__`
* `__enter__`
* `__exit__`

## 迭代器和生成器

* iterable
* iterator
* iter
* next
* iterator protocol
* generator
* yield
* yield from
* generator expression

## 装饰器

* 函数是一等对象
* 函数作为参数
* 函数作为返回值
* closure
* decorator
* `functools.wraps`
* 带参数装饰器
* 多个装饰器
* class decorator

## 上下文管理器

* with
* context manager
* `__enter__`
* `__exit__`
* contextlib
* `contextmanager`

## 类型与数据模型

* dataclass
* enum
* typing
* Optional
* Union
* Literal
* Callable
* TypeVar
* Generic
* Protocol

---

# 六、Python 深入知识范围

深入阶段重点学习：

> Python 为什么这样运行。

包括但不限于：

* Python 对象模型
* 一切皆对象
* object
* type
* 对象身份
* 对象引用
* mutable / immutable
* `is`
* `==`
* hash
* shallow copy
* deep copy
* 参数传递机制
* mutable default argument
* late binding
* closure 原理
* `__new__`
* `__slots__`
* attribute lookup
* `__getattr__`
* `__getattribute__`
* descriptor
* metaclass
* monkey patch
* EAFP
* LBYL
* import 机制
* `sys.modules`
* module cache
* circular import

这些内容不能只做概念记忆题，应尽量通过代码理解运行机制。

---

# 七、并发与异步

高级学习内容应逐步覆盖：

* thread
* threading
* race condition
* Lock
* RLock
* GIL
* CPU-bound
* IO-bound
* multiprocessing
* Process
* Queue
* Pool
* concurrent.futures
* ThreadPoolExecutor
* ProcessPoolExecutor
* coroutine
* async
* await
* asyncio
* event loop
* task
* Future
* gather
* create_task
* async iterator
* async context manager

重点理解：

```text
什么时候使用线程
什么时候使用进程
什么时候使用 asyncio
```

不要只考 API 名字。

---

# 八、Python 题库核心原则

题库目标不是背 API，而是真正理解 Python。

核心学习路径：

```text
读代码
    ↓
判断结果
    ↓
理解执行过程
    ↓
解释为什么
    ↓
发现问题
    ↓
修改代码
    ↓
独立实现
```

低价值题目可以少量存在，例如：

```text
Python 使用什么关键字定义函数？
```

但不能成为题库主体。

---

# 九、题目类型

题库应包含：

* 单选题
* 多选题
* 判断题
* 代码输出题
* 代码阅读题
* 找 Bug
* 填空题
* 代码补全题
* 代码改写题
* 原理分析题
* 场景选择题
* 编程题
* 综合题

重点增加：

* 代码输出
* 代码阅读
* 找 Bug
* Python 陷阱
* 原理分析
* 实际代码实现

---

# 十、代码输出题规则

例如：

```python
a = [1, 2, 3]
b = a

b.append(4)

print(a)
```

不要只问最终输出。

还可以继续考察：

1. `a` 最终是什么？
2. 为什么修改 `b` 会影响 `a`？
3. `a is b` 是什么？
4. `a == b` 是什么？
5. 如何创建独立列表？
6. 这里涉及什么 Python 原理？

尽量让一道题串联多个相关知识点。

---

# 十一、Python 常见陷阱

题库应系统覆盖：

* `is` 和 `==`
* mutable default argument
* shallow copy / deep copy
* list 引用
* dict 引用
* list multiplication
* closure late binding
* lambda late binding
* LEGB
* global
* nonlocal
* iterator 被消费
* generator 使用方式
* bool 判断
* None
* NaN
* hash
* dict key
* class attribute
* instance attribute
* `+=`
* finally 中 return
* import cache
* circular import

例如：

```python
matrix = [[0] * 3] * 3
matrix[0][0] = 1
```

题目应要求：

* 判断结果。
* 解释引用关系。
* 说明为什么。
* 给出正确写法。

---

# 十二、找 Bug 题规则

找 Bug 题应该尽量包含：

1. 找出问题。
2. 判断实际运行结果。
3. 解释原因。
4. 修改代码。
5. 说明背后的 Python 原理。

例如：

```python
functions = []

for i in range(3):
    functions.append(lambda: i)

for fn in functions:
    print(fn())
```

解析不能只给正确代码。

还应解释 closure 和 late binding。

---

# 十三、代码阅读题规则

代码阅读题可以逐渐包含：

* 多函数调用
* 多层作用域
* 类
* 继承
* decorator
* generator
* context manager
* exception
* async

但不要为了制造难度而故意写极端晦涩代码。

题目应该具备真实学习价值。

---

# 十四、Pythonic 写法

可以设计：

> 哪种写法更合理？

例如比较普通循环与列表推导式。

但不要简单认为：

```text
代码越短越 Pythonic。
```

应该结合：

* 可读性
* 复杂度
* 副作用
* 实际场景
* 是否值得使用推导式

核心原则：

> Pythonic 首先是清晰，其次才是简洁。

---

# 十五、知识点递进

同一个重要知识点不能只有一道题。

例如装饰器：

```text
函数是对象
→ 函数作为参数
→ 函数作为返回值
→ 闭包
→ 基础装饰器
→ functools.wraps
→ 带参数装饰器
→ 多装饰器
→ class decorator
→ 实际应用
```

生成器：

```text
iterable
→ iterator
→ iter
→ next
→ 自定义 iterator
→ generator
→ yield
→ yield from
→ 实际应用
```

面向对象：

```text
class
→ instance
→ self
→ attribute
→ method
→ class attribute
→ inheritance
→ super
→ MRO
→ property
→ magic methods
→ descriptor
→ metaclass
```

---

# 十六、题目解析要求

解析不能只写：

```text
正确答案：A
```

应尽量包含：

* 正确答案
* 为什么正确
* 错误选项为什么错误
* 执行顺序
* 变量变化
* 引用关系
* 涉及的 Python 知识点
* 常见错误理解
* 必要的扩展说明

---

# 十七、题库质量优先

原则：

```text
质量 > 数量
```

新增题目之前应检查：

1. 当前是否已有类似题。
2. 是否重复。
3. 是否存在知识空缺。
4. 难度是否合理。
5. 是否真正增加学习价值。

不要通过换变量名批量制造重复题。

---

# 十八、题库难度

优先沿用当前项目已有难度字段。

如果需要设计，可参考：

```text
初级
中级
高级
深入
```

## 初级

* 基础语法
* 基本数据结构
* 流程控制
* 简单函数
* 简单输出判断

## 中级

* 函数进阶
* 推导式
* 作用域
* 异常
* 模块
* 文件
* 标准库
* 基础 OOP

## 高级

* OOP 深入
* iterator
* generator
* decorator
* context manager
* typing
* magic methods
* 并发
* asyncio

## 深入

* 对象模型
* descriptor
* metaclass
* attribute lookup
* 内存与引用
* GIL
* import 机制
* Python 运行机制

---

# 十九、题库修改流程

收到：

```text
升级题库
增加高级题
现在的题太简单
完善 Python 题目
完善 Python 知识体系
```

这类任务时：

1. 找到当前题库数据。
2. 阅读题目数据结构。
3. 阅读章节和知识点结构。
4. 检查知识覆盖。
5. 找出重复题。
6. 找出低价值题。
7. 找出缺失知识。
8. 检查难度分布。
9. 再补充和优化。

不要一上来随机生成大量新题。

---

# 二十、题库数据结构

如果项目已有数据结构，应优先复用。

例如可能已有：

```text
title
question
type
difficulty
category
code
options
answer
explanation
knowledge_points
hint
```

不要为了个人偏好随意修改字段。

如果需要增加字段，应同时检查：

* 数据库
* SQLAlchemy Model
* Pydantic Schema
* API
* 前端类型
* 页面组件

---

# 二十一、项目技术架构

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
```

PostgreSQL 通过 Docker Compose 管理。

---

# 二十二、前端规则

修改前端之前优先阅读：

* `package.json`
* 路由
* 请求封装
* 状态管理
* 相关组件
* 相关页面

前端已经基本完成。

默认：

> 保留现有 UI 和交互，只修改任务真正需要的部分。

不要擅自：

* 更换前端框架
* 更换 UI 框架
* 更换请求库
* 大规模重写组件
* 大规模修改路由
* 重做视觉设计

优先复用已有：

* axios
* request
* api
* services
* components

---

# 二十三、后端技术栈

后端使用：

* Python 3.12
* FastAPI
* SQLAlchemy 2.x
* Pydantic
* Alembic
* PostgreSQL

后端代码应：

* 使用类型注解。
* 使用主流 FastAPI 写法。
* 使用 SQLAlchemy 2.x 风格。
* 合理管理 Session。
* 不把全部逻辑写进 `main.py`。
* 保持清晰、简单、可维护。
* 不为了分层而过度分层。

---

# 二十四、Python 环境

后端统一使用 Conda。

环境名称：

```text
xuexi_py_backend
```

Python 版本：

```text
Python 3.12
```

创建：

```bash
conda create -n xuexi_py_backend python=3.12
```

激活：

```bash
conda activate xuexi_py_backend
```

不要擅自创建：

```text
.venv/
venv/
env/
```

不要因为工具默认推荐 `.venv` 就创建第二套环境。

---

# 二十五、依赖管理

Conda 负责：

* Python 版本
* 环境隔离

pip 负责主要 Python 项目依赖。

项目依赖必须声明在已有：

```text
requirements.txt
```

或者：

```text
pyproject.toml
```

中。

如果已有其中一种，不要无必要创建另一种。

Conda 环境不能替代项目依赖文件。

---

# 二十六、执行 Python 命令

如果 Conda 环境已激活，直接执行。

如果没有，可以使用：

```bash
conda run -n xuexi_py_backend python ...
```

不要通过创建 `.venv` 解决环境问题。

---

# 二十七、数据库与数据迁移

适合迁移 PostgreSQL 的学习数据包括：

* 课程
* 章节
* 知识点
* Python 学习内容
* 练习题
* 选项
* 答案
* 解析
* 示例代码
* 难度
* 分类

UI 配置、路由、颜色、图标等纯前端内容通常无需进入数据库。

迁移时：

1. 先找到原始数据。
2. 找到使用位置。
3. 理解关系。
4. 设计数据库模型。
5. 实现 API。
6. 编写 seed / import。
7. 导入数据库。
8. 验证 API。
9. 修改前端数据来源。
10. 最后删除无用静态数据。

不要先删除原始数据。

---

# 二十八、Alembic 与 PostgreSQL

数据库使用 PostgreSQL。

数据库结构变化原则上使用 Alembic。

常见命令：

```bash
alembic revision --autogenerate -m "migration message"
alembic upgrade head
```

数据库配置通过环境变量管理。

不要在源码中写死真实：

* 用户名
* 密码
* 数据库地址
* DATABASE_URL

真实 `.env` 不应提交 Git。

---

# 二十九、Docker

Docker 当前主要用于 PostgreSQL。

启动：

```bash
docker compose up -d
```

查看：

```bash
docker compose ps
```

停止：

```bash
docker compose down
```

当前开发阶段默认：

```text
前端：本地运行
FastAPI：Conda 环境运行
PostgreSQL：Docker 运行
```

不要没有明确需求就把所有服务容器化。

---

# 三十、前后端一致性

涉及 API 修改时同时检查：

* URL
* Method
* Query 参数
* Path 参数
* 请求体
* 返回字段
* ID 类型
* null
* 数组
* 分页
* 错误响应

不要出现后端改字段而前端未同步的情况。

---

# 三十一、开发原则

Codex 收到任务后：

1. 先阅读相关代码。
2. 搜索已有实现。
3. 理解数据流。
4. 再修改。
5. 优先复用。
6. 修改范围聚焦。
7. 不进行无关重构。
8. 不为了所谓企业级架构过度设计。
9. 修改后验证。
10. 总结结果。

核心原则：

> 先理解，再修改。

> 优先复用，避免重写。

> 保持简单。

> 只修改当前任务需要的代码。

---

# 三十二、不要过度设计

除非确有需要，否则不要擅自引入：

* Repository Pattern
* DAO
* Domain Layer
* CQRS
* Event Bus
* 微服务
* 消息队列
* Kubernetes
* 复杂缓存系统
* 大型企业级架构

如果现有简单方案足够，就使用简单方案。

---

# 三十三、学习导向代码

项目自身后端代码也用于辅助学习 Python。

因此：

* 优先可读性。
* 优先主流写法。
* 避免炫技。
* 避免晦涩写法。
* 重要概念可以加简短中文注释。

但需要区分：

```text
题库内容
```

和：

```text
项目自身生产代码
```

题库可以研究复杂 Python 机制。

项目代码本身仍然优先清晰和稳定。

---

# 三十四、测试与验证

修改后尽量验证：

## 后端

* Conda 环境正确。
* import 正常。
* FastAPI 可以启动。
* PostgreSQL 可以连接。
* migration 可以执行。
* API 返回正确。

## 前端

* 可以启动或构建。
* 无明显运行时错误。
* 请求参数正确。
* API 数据结构匹配。
* 页面功能正常。

已有测试时优先使用已有测试。

---

# 三十五、题库任务完成后的总结

如果任务主要是 Python 题库，完成后总结：

1. 当前总题数。
2. 新增题数。
3. 修改题数。
4. 删除或合并多少重复题。
5. 各难度题目数量。
6. 覆盖了哪些 Python 知识。
7. 新增哪些题型。
8. 还有哪些知识未覆盖。
9. 推荐学习顺序。
10. 是否修改数据库。
11. 是否需要重新 seed。

题库任务的总结重点应放在：

> Python 学习内容本身。

---

# 三十六、普通任务完成后的总结

普通开发任务完成后说明：

1. 实现了什么。
2. 修改了哪些文件。
3. 新增了哪些文件。
4. 是否修改数据库。
5. 是否生成 migration。
6. 修改了哪些 API。
7. 前端是否修改。
8. 如何验证。
9. 是否有遗留问题。
10. 是否新增依赖。
11. 测试结果。

---

# 三十七、常用命令

## PostgreSQL

```bash
docker compose up -d
```

## Conda

```bash
conda activate xuexi_py_backend
```

## 后端

```bash
cd xuexi_py_backend
fastapi dev app/main.py
```

实际入口以当前项目为准。

## Alembic

```bash
alembic upgrade head
```

## 前端

```bash
cd xuexi_py_frontend
npm run dev
```

实际命令以 `package.json` 为准。

---

# 三十八、Codex 对题库任务的默认理解

如果收到：

```text
升级题库
题目太简单了
增加高级题
完善 Python 题库
补充 Python 知识
优化课程内容
```

默认理解为：

> 提升 Python 语言本身的知识覆盖和题目深度。

优先考虑：

* Python 语法
* 数据结构
* 函数
* 作用域
* 闭包
* 面向对象
* 迭代器
* 生成器
* 装饰器
* 上下文管理器
* typing
* Python 对象模型
* 引用
* 内存
* 并发
* asyncio
* Python 常见陷阱
* Python 运行机制

只有用户明确说：

```text
增加 SQL 题
增加数据库题
增加 PostgreSQL 题
增加 SQLAlchemy 题
```

才扩展对应数据库知识。

---

# 三十九、最终核心原则

整个项目遵循以下原则：

> Python 学习是核心目标。

> FastAPI、SQLAlchemy、PostgreSQL、Docker 是项目实现技术。

> 题库重视理解，不重视死记硬背。

> 优先训练：读代码、判断结果、解释原因、找 Bug、修改代码、独立实现。

> Python 知识按照基础 → 中级 → 高级 → 深入逐步递进。

> 题库质量优先于数量。

> 修改代码之前先理解现有实现。

> 优先复用，避免无关重写。

> 保持简单，不要过度设计。

> Python 环境统一使用 Conda。

> 前后端接口始终保持一致。
