import type { Difficulty, Importance, Lesson } from '../types/course'

interface TopicBlueprint {
  id: string
  title: string
  summary: string
  python: string
  javascript?: string
  pitfall: string
  output?: string
  importance?: Importance
  difficulty?: Difficulty
}

interface StageBlueprint {
  id: string
  name: string
  topics: TopicBlueprint[]
}

const t = (
  id: string,
  title: string,
  summary: string,
  python: string,
  pitfall: string,
  javascript?: string,
  importance: Importance = 'must',
  difficulty: Difficulty = 3,
  output = '运行完成',
): TopicBlueprint => ({ id, title, summary, python, pitfall, javascript, importance, difficulty, output })

const stages: StageBlueprint[] = [
  {
    id: 'foundation', name: 'Python 基础', topics: [
      t('comparisons', '比较运算', '比较运算会产生 True 或 False，是条件判断的入口。', 'age >= 18\nstatus != "deleted"\n1 < score <= 100', '不要把赋值 = 写成比较 ==；Python 还支持连续比较。', 'const allowed = age >= 18\nconst valid = score > 1 && score <= 100', 'must', 2, 'True'),
      t('logical-operators', '逻辑运算', 'and、or、not 用来组合或反转多个条件。', 'can_edit = is_admin or is_owner\nif logged_in and not blocked:\n    print("allowed")', 'Python 使用单词 and/or/not，不使用 &&、||、!。', 'const canEdit = isAdmin || isOwner\nif (loggedIn && !blocked) {}', 'must', 2, 'allowed'),
      t('if-conditions', 'if / elif / else', '条件分支让程序根据数据选择不同执行路径。', 'if score >= 90:\n    level = "A"\nelif score >= 60:\n    level = "B"\nelse:\n    level = "C"', '冒号和缩进都是语法；elif 不是 else if。', 'if (score >= 90) {\n  level = "A"\n} else if (score >= 60) {\n  level = "B"\n}', 'must', 2, 'A'),
      t('for-loops', 'for 循环', 'Python for 直接遍历可迭代对象，不依赖传统三段式计数器。', 'for user in users:\n    print(user["name"])', '不要照搬 for (let i=0;...)；需要索引时使用 enumerate。', 'for (const user of users) {\n  console.log(user.name)\n}', 'must', 2, 'Ada'),
      t('while-loops', 'while 循环', 'while 会在条件保持为 True 时重复执行，适合重试和轮询。', 'attempt = 0\nwhile attempt < 3:\n    attempt += 1\n    retry_request()', '循环体必须改变终止条件，否则会成为无限循环。', 'let attempt = 0\nwhile (attempt < 3) {\n  attempt += 1\n}', 'frequent', 2, '3 attempts'),
      t('range-function', 'range', 'range 生成整数序列，常与 for 配合执行固定次数。', 'for index in range(1, 4):\n    print(index)', 'range 的 stop 不包含在结果中；range(1, 4) 是 1、2、3。', 'for (let i = 1; i < 4; i++) {\n  console.log(i)\n}', 'must', 2, '1\n2\n3'),
      t('break-statement', 'break', 'break 立即结束最近一层循环，常在找到结果后停止搜索。', 'for user in users:\n    if user.id == target_id:\n        found = user\n        break', 'break 只退出最近一层循环，不会自动退出外层函数。', 'for (const user of users) {\n  if (user.id === targetId) break\n}', 'frequent', 2, 'found'),
      t('continue-statement', 'continue', 'continue 跳过当前轮剩余代码，直接进入下一轮循环。', 'for item in items:\n    if item is None:\n        continue\n    process(item)', '过多 continue 会让流程难追踪；先过滤数据有时更清楚。', 'for (const item of items) {\n  if (item == null) continue\n  process(item)\n}', 'frequent', 2, 'valid items processed'),
    ],
  },
  {
    id: 'errors', name: '异常处理', topics: [
      t('try-block', 'try', 'try 包住可能失败的操作，把失败路径从正常流程中分离。', 'try:\n    response = httpx.get(url)\n    data = response.json()\nexcept httpx.HTTPError:\n    data = None', 'try 范围不要过大，否则很难判断究竟哪一行失败。', 'try {\n  const data = await fetch(url)\n} catch (error) {}'),
      t('except-block', 'except', 'except 捕获指定异常并决定恢复、转换还是继续抛出。', 'try:\n    age = int(raw_age)\nexcept ValueError as error:\n    logger.warning("invalid age: %s", error)', '不要默认 except Exception 后静默 pass，这会掩盖真实故障。', 'try {\n  age = Number(rawAge)\n} catch (error) {}'),
      t('try-else', '异常处理中的 else', 'try 的 else 只在没有异常时执行，适合放置成功后的后续逻辑。', 'try:\n    config = load_config()\nexcept OSError:\n    use_defaults()\nelse:\n    validate(config)', 'else 不是 except 的替代品；它不会在发生异常时执行。', undefined, 'frequent'),
      t('finally-block', 'finally', 'finally 无论成功失败都会执行，适合释放资源和恢复状态。', 'lock.acquire()\ntry:\n    update_cache()\nfinally:\n    lock.release()', 'finally 中的 return 会覆盖原返回值或异常，应避免。', 'try {\n  updateCache()\n} finally {\n  lock.release()\n}'),
      t('raise-exceptions', 'raise', 'raise 主动报告无法继续的错误，也能保留原异常上下文。', 'if not api_key:\n    raise ValueError("API_KEY is required")\n\ntry:\n    call_api()\nexcept HTTPError as exc:\n    raise ServiceError("模型服务失败") from exc', '错误信息要包含可行动上下文，但不要泄露密钥或隐私。', 'if (!apiKey) {\n  throw new Error("API_KEY is required")\n}'),
      t('custom-exceptions', '自定义异常', '自定义异常把技术失败转换为业务语义，让上层能精确处理。', 'class InsufficientBalanceError(Exception):\n    pass\n\nif balance < amount:\n    raise InsufficientBalanceError(account_id)', '异常类应继承 Exception，并保持层次简单。', 'class InsufficientBalanceError extends Error {}', 'frequent', 3),
    ],
  },
  {
    id: 'files', name: '文件与数据', topics: [
      t('file-reading', '文件读取', '读取文件时要明确编码、文件大小和不存在时的处理方式。', 'with open("report.txt", "r", encoding="utf-8") as file:\n    content = file.read()', '文本文件应显式指定 encoding="utf-8"；大文件不要一次 read 全部。', 'const content = await fs.readFile("report.txt", "utf8")'),
      t('file-writing', '文件写入', '写入模式会覆盖原内容，追加模式则把内容加到末尾。', 'with open("report.txt", "w", encoding="utf-8") as file:\n    file.write(report)', '使用 "w" 会截断原文件；重要数据先写临时文件再原子替换。', 'await fs.writeFile("report.txt", report, "utf8")'),
      t('with-statement', 'with', 'with 保证资源在退出代码块时被正确关闭，是 Python 的资源管理惯用法。', 'with open(path, encoding="utf-8") as file:\n    for line in file:\n        process(line)', '不要在 with 块外继续使用已经关闭的文件对象。', 'using resource = await openResource()'),
      t('pathlib-paths', 'pathlib', 'pathlib 用对象表达路径，比手工拼接字符串更跨平台、更可读。', 'from pathlib import Path\n\ndata_dir = Path("data")\nfor file in data_dir.glob("*.json"):\n    print(file.name)', '不要用 "/" 字符串硬拼路径；Path / "child" 更可靠。', 'const file = path.join("data", "users.json")'),
      t('json-data', 'JSON', 'json 模块在 Python 对象和 JSON 文本之间转换。', 'import json\n\ndata = json.loads(raw_text)\ntext = json.dumps(data, ensure_ascii=False, indent=2)', 'loads 处理字符串、load 处理文件；JSON 中没有 Python 的 tuple 和 set。', 'const data = JSON.parse(rawText)\nconst text = JSON.stringify(data, null, 2)'),
      t('csv-data', 'CSV', 'csv 模块按行处理表格文本，DictReader 能用列名访问字段。', 'import csv\n\nwith open("users.csv", encoding="utf-8", newline="") as file:\n    for row in csv.DictReader(file):\n        print(row["email"])', '打开 CSV 时使用 newline=""；所有字段初始都是字符串。', undefined, 'frequent'),
      t('environment-variables', '环境变量', '环境变量把密钥和部署差异移出源代码。', 'import os\n\napi_key = os.getenv("OPENAI_API_KEY")\nif not api_key:\n    raise RuntimeError("missing OPENAI_API_KEY")', '不要提交真实密钥，也不要在日志中打印完整值。', 'const apiKey = process.env.OPENAI_API_KEY'),
      t('dotenv-files', '.env', '.env 为本地开发提供环境变量，但生产环境通常由部署平台注入。', 'from dotenv import load_dotenv\nimport os\n\nload_dotenv()\napi_key = os.environ["OPENAI_API_KEY"]', '.env 必须加入 .gitignore；仓库只提交不含秘密的 .env.example。', 'import "dotenv/config"\nconst apiKey = process.env.OPENAI_API_KEY', 'frequent'),
    ],
  },
  {
    id: 'oop', name: '面向对象', topics: [
      t('classes-objects', 'class 与 object', 'class 是对象的蓝图，对象是运行时创建的具体实例。', 'class User:\n    pass\n\nuser = User()', '类名使用 PascalCase；不要为只有一个简单函数的逻辑强行建类。', 'class User {}\nconst user = new User()'),
      t('init-method', '__init__', '__init__ 在实例创建后初始化状态，角色接近 JavaScript constructor。', 'class User:\n    def __init__(self, name: str):\n        self.name = name', '__init__ 必须返回 None；不要显式 return 其他值。', 'class User {\n  constructor(name) { this.name = name }\n}'),
      t('self-parameter', 'self', 'self 指向当前实例，实例方法通过它读写状态。', 'class Counter:\n    def increment(self):\n        self.value += 1', '定义实例方法时不能漏掉 self；调用时 Python 会自动传入。', 'class Counter {\n  increment() { this.value += 1 }\n}'),
      t('instance-attributes', '实例属性', '实例属性属于单个对象，每个实例可以保存不同值。', 'class Agent:\n    def __init__(self, model):\n        self.model = model\n        self.messages = []', '不要把每个实例独有的可变列表写成类属性。', 'class Agent {\n  constructor(model) { this.model = model }\n}'),
      t('class-attributes', '类属性', '类属性由所有实例共享，适合常量或全局计数等类级状态。', 'class ApiClient:\n    default_timeout = 30\n\nprint(ApiClient.default_timeout)', '共享可变类属性会让实例相互影响，使用时要非常谨慎。', 'class ApiClient {\n  static defaultTimeout = 30\n}', 'frequent'),
      t('instance-methods', '方法', '方法是定义在类中的函数，通常操作实例状态或表达对象行为。', 'class Order:\n    def total(self) -> float:\n        return sum(item.price for item in self.items)', '方法职责应聚焦；大量外部依赖通常应通过构造函数注入。', 'class Order {\n  total() { return this.items.reduce(...) }\n}'),
      t('inheritance', '继承', '继承表达 is-a 关系，让子类复用并扩展父类行为。', 'class BaseTool:\n    def run(self, input_text):\n        raise NotImplementedError\n\nclass SearchTool(BaseTool):\n    def run(self, input_text):\n        return search(input_text)', '优先组合而非深层继承；过深层次会让行为来源难追踪。', 'class SearchTool extends BaseTool {}', 'frequent'),
      t('super-function', 'super', 'super 调用父类实现，最常见于扩展初始化流程。', 'class AdminUser(User):\n    def __init__(self, name, permissions):\n        super().__init__(name)\n        self.permissions = permissions', '覆盖 __init__ 时忘记 super 可能导致父类属性缺失。', 'class AdminUser extends User {\n  constructor(name) { super(name) }\n}'),
      t('static-methods', '静态方法', '@staticmethod 定义不依赖实例或类状态、但语义上属于该类的工具函数。', 'class Token:\n    @staticmethod\n    def mask(value: str) -> str:\n        return value[:4] + "***"', '如果函数与类没有明显语义关系，放在普通模块中通常更清楚。', 'class Token {\n  static mask(value) { return value.slice(0, 4) + "***" }\n}', 'read'),
      t('class-methods', '类方法', '@classmethod 接收 cls，常用于备用构造器和类级配置。', 'class User:\n    @classmethod\n    def from_dict(cls, data):\n        return cls(name=data["name"])', '类方法第一个参数是 cls，不是 self；应返回 cls(...) 以支持子类。', 'class User {\n  static fromObject(data) { return new this(data.name) }\n}', 'frequent'),
      t('magic-methods', '魔术方法', '双下划线方法让对象参与字符串显示、比较、迭代和上下文管理等语言协议。', 'class User:\n    def __repr__(self):\n        return f"User(id={self.id!r})"\n\n    def __len__(self):\n        return len(self.roles)', '不要随意发明 __custom__ 名称；只实现 Python 已定义的协议方法。', 'class User {\n  toString() { return `User(${this.id})` }\n}', 'frequent'),
      t('composition', '组合优于继承', '组合通过持有协作对象构建功能，通常比深继承更容易测试和替换。', 'class ReportService:\n    def __init__(self, repository, llm_client):\n        self.repository = repository\n        self.llm_client = llm_client', '不要在类内部到处直接创建依赖，否则测试时很难替换。', 'class ReportService {\n  constructor(repository, llmClient) {}\n}', 'must'),
    ],
  },
  {
    id: 'advanced', name: '进阶语法', topics: [
      t('decorators', '装饰器', '装饰器包装函数或类，在不修改主体代码的情况下添加行为。', '@require_auth\n@cache(ttl=60)\ndef get_profile(user_id: int):\n    return repository.get(user_id)', '装饰器从下往上应用；包装函数应使用 functools.wraps。', undefined, 'must', 4),
      t('generators', '生成器', '生成器按需产生值，不必一次把全部结果放进内存。', 'def read_records(path):\n    with open(path) as file:\n        for line in file:\n            yield json.loads(line)', '生成器只能遍历一次；调试时不要无意把它提前耗尽。', undefined, 'frequent', 4),
      t('yield-keyword', 'yield', 'yield 暂停函数并交出一个值，下次迭代会从暂停位置继续。', 'def batches(items, size):\n    for start in range(0, len(items), size):\n        yield items[start:start + size]', '包含 yield 的函数调用后返回生成器，不会立即执行函数体。', undefined, 'frequent', 4),
      t('iterators', '迭代器', '迭代器实现逐个取值协议，for 循环会自动调用 iter 和 next。', 'iterator = iter(["a", "b"])\nprint(next(iterator))\nprint(next(iterator))', '耗尽后 next 会抛出 StopIteration，通常让 for 负责处理。', undefined, 'read', 4),
      t('context-managers', 'context manager', '上下文管理器在进入和退出代码块时执行配套逻辑。', 'from contextlib import contextmanager\n\n@contextmanager\ndef timer():\n    start = time.perf_counter()\n    try:\n        yield\n    finally:\n        print(time.perf_counter() - start)', '清理逻辑必须放在 finally，确保异常时也执行。', undefined, 'frequent', 4),
      t('typing-basics', 'typing', '类型提示记录数据形状并支持编辑器、静态检查和框架运行时解析。', 'def summarize(texts: list[str], limit: int = 5) -> list[str]:\n    return [shorten(text) for text in texts[:limit]]', '类型提示默认不做运行时校验；仍需测试或 Pydantic 等工具。', 'function summarize(texts: string[], limit = 5): string[] {}'),
      t('optional-type', 'Optional', 'Optional[T] 表示值可能是 T，也可能是 None。', 'from typing import Optional\n\ndef find_user(user_id: int) -> Optional[User]:\n    return repository.get(user_id)', '拿到 Optional 后必须先处理 None 再访问属性。', 'function findUser(id: number): User | null {}', 'must'),
      t('union-type', 'Union', 'Union 表示值允许是多个候选类型之一，现代 Python 可用 | 简写。', 'def normalize(value: str | int) -> str:\n    return str(value)', '类型过宽会迫使每个调用点都做判断；优先设计单一清晰类型。', 'function normalize(value: string | number): string {}', 'frequent'),
      t('literal-type', 'Literal', 'Literal 把值限制在少量明确字面量中，适合模式和状态。', 'from typing import Literal\n\ndef set_level(level: Literal["debug", "info", "error"]):\n    ...', 'Literal 是静态约束；外部输入仍需要运行时验证。', 'type Level = "debug" | "info" | "error"', 'frequent'),
      t('generic-type', 'Generic', '泛型在保留具体类型信息的同时复用容器或接口。', 'from typing import Generic, TypeVar\n\nT = TypeVar("T")\nclass Page(Generic[T]):\n    items: list[T]\n    total: int', '业务代码不要为抽象而抽象；只有确实复用多种类型时才使用泛型。', 'interface Page<T> { items: T[]; total: number }', 'read', 5),
      t('dataclasses', 'dataclass', '@dataclass 自动生成初始化、比较和显示方法，适合轻量数据对象。', 'from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Point:\n    x: float\n    y: float', '可变默认字段使用 field(default_factory=list)，不要直接写 []。', 'type Point = { x: number; y: number }', 'frequent'),
      t('functools-module', 'functools', 'functools 提供缓存、偏函数和装饰器辅助等高阶函数工具。', 'from functools import lru_cache\n\n@lru_cache\ndef load_settings():\n    return Settings()', '缓存函数的参数必须可哈希；缓存可变或过期数据要谨慎。', undefined, 'frequent', 4),
      t('itertools-module', 'itertools', 'itertools 提供高效的组合、分组和惰性迭代工具。', 'from itertools import islice\n\npreview = list(islice(stream, 10))', 'groupby 只分组相邻元素，通常需要先按相同 key 排序。', undefined, 'read', 4),
      t('structural-matching', 'match / case', '结构化模式匹配按数据形状和字面量选择分支。', 'match event:\n    case {"type": "message", "text": text}:\n        handle_message(text)\n    case {"type": "error", "code": code}:\n        handle_error(code)\n    case _:\n        ignore(event)', 'case _ 是兜底分支；模式中的裸名字通常是捕获而不是常量比较。', 'switch (event.type) { case "message": break }', 'read', 4),
    ],
  },
  {
    id: 'async', name: '异步编程', topics: [
      t('async-def', 'async def', 'async def 定义协程函数，调用后得到协程对象而不是立即得到结果。', 'async def get_user(user_id: int):\n    return await repository.get(user_id)', '协程必须被 await 或交给事件循环调度，否则不会真正执行。', 'async function getUser(userId) {\n  return await repository.get(userId)\n}', 'must', 4),
      t('await-keyword', 'await', 'await 暂停当前协程等待异步结果，同时让事件循环处理其他任务。', 'async with httpx.AsyncClient() as client:\n    response = await client.get(url)\n    return response.json()', '只能在 async def 中使用 await；不要 await 普通同步值。', 'const response = await fetch(url)', 'must', 4),
      t('asyncio-module', 'asyncio', 'asyncio 是 Python 标准异步运行时，负责调度协程、任务和异步原语。', 'async def main():\n    results = await asyncio.gather(\n        fetch("/users"),\n        fetch("/orders"),\n    )\n\nasyncio.run(main())', 'gather 并发适合独立 I/O；不要把有先后依赖的操作盲目并发。', 'await Promise.all([fetch("/users"), fetch("/orders")])', 'must', 4),
      t('coroutines', 'coroutine', '协程是可以暂停和恢复的异步工作单元。', 'coroutine = fetch_data()\nresult = await coroutine', '打印 coroutine 对象不是结果；忘记 await 会出现 never awaited 警告。', 'const promise = fetchData()\nconst result = await promise', 'must', 4),
      t('event-loop', 'event loop', '事件循环在单线程中协调大量等待 I/O 的协程，这正是 FastAPI 高并发的基础。', 'async def endpoint():\n    user, orders = await asyncio.gather(\n        get_user(),\n        get_orders(),\n    )\n    return {"user": user, "orders": orders}', '在 async 路由中调用 time.sleep 或 requests 会阻塞事件循环。', 'async function endpoint() {\n  return await Promise.all([getUser(), getOrders()])\n}', 'must', 4),
    ],
  },
  {
    id: 'engineering', name: '工程开发', topics: [
      t('pip-tool', 'pip', 'pip 是 Python 自带的基础包安装工具。', 'python -m pip install httpx\npython -m pip list\npython -m pip show httpx', '优先使用 python -m pip，确保 pip 属于当前解释器环境。', 'npm install axios', 'must', 2),
      t('uv-tool', 'uv', 'uv 是快速的现代 Python 项目与依赖管理工具，可管理环境、锁文件和命令运行。', 'uv init\nuv add fastapi httpx\nuv run pytest', '不要同时让多个工具管理同一项目锁文件；团队先统一工作流。', 'npm init\nnpm install fastapi', 'frequent', 3),
      t('conda-tool', 'conda', 'conda 同时管理 Python 与系统级二进制依赖，在数据科学环境常见。', 'conda create -n data python=3.12\nconda activate data\nconda install pandas', '普通 Web 项目未必需要 conda；不要与 venv 的激活状态混淆。', undefined, 'read', 2),
      t('venv-tool', 'venv', '虚拟环境为每个项目隔离解释器包，避免全局依赖互相冲突。', 'python -m venv .venv\nsource .venv/bin/activate\npython -m pip install -r requirements.txt', '不要把 .venv 提交到 Git；IDE 也要选择同一个解释器。', 'nvm use 22', 'must', 2),
      t('requirements-file', 'requirements.txt', 'requirements.txt 记录 pip 安装列表，常见于传统项目与部署环境。', 'fastapi==0.116.0\nhttpx>=0.28,<0.29\npydantic==2.11.0', '直接 pip freeze 可能包含大量偶然依赖；应用项目需要可复现版本策略。', 'package-lock.json', 'frequent', 2),
      t('pyproject-file', 'pyproject.toml', 'pyproject.toml 集中描述项目元数据、依赖、构建和工具配置。', '[project]\nname = "agent-service"\nrequires-python = ">=3.12"\ndependencies = ["fastapi", "httpx"]\n\n[tool.ruff]\nline-length = 100', '修改依赖后要同步锁文件；不同管理工具的字段位置可能不同。', 'package.json', 'must', 3),
      t('package-management', '依赖与版本管理', '依赖管理的目标是让开发、CI 和生产安装出同一组可验证版本。', 'uv lock\nuv sync --frozen\nuv run python -m app', '不要只说“在我电脑上能跑”；锁文件和 Python 版本都要纳入复现。', 'npm ci\nnpm run start', 'must', 3),
      t('ruff-tool', 'Ruff', 'Ruff 快速检查并自动修复 Python 风格和常见错误。', 'ruff check .\nruff check . --fix\nruff format .', '自动修复后仍需查看差异；规则应在 pyproject.toml 中团队共享。', 'eslint .\nprettier --write .', 'must', 2),
      t('black-tool', 'Black', 'Black 是稳定的自动格式化工具，许多旧项目使用它统一风格。', 'black .\nblack --check .', '新项目可能只用 ruff format；不要同时配置互相冲突的格式器。', 'prettier --write .', 'read', 2),
      t('pytest-tool', 'pytest', 'pytest 用简洁断言、fixture 和参数化测试验证行为。', 'def test_normalize_email():\n    assert normalize_email(" ADA@EXAMPLE.COM ") == "ada@example.com"', '测试应验证可观察行为，不要过度绑定内部实现细节。', 'test("normalize email", () => { expect(...).toBe(...) })', 'must', 3),
    ],
  },
  {
    id: 'web', name: 'Web 开发', topics: [
      t('fastapi-intro', 'FastAPI', 'FastAPI 根据函数签名和类型提示构建 API、校验数据并生成文档。', 'from fastapi import FastAPI\n\napp = FastAPI(title="Agent API")\n\n@app.get("/health")\ndef health():\n    return {"status": "ok"}', '装饰器下的函数就是路由处理器；返回字典会序列化为 JSON。', 'const app = express()\napp.get("/health", (req, res) => res.json(...))', 'must', 3),
      t('fastapi-routes', '路由', '路由把 HTTP 方法和 URL 路径映射到处理函数。', 'router = APIRouter(prefix="/users", tags=["users"])\n\n@router.get("/{user_id}")\nasync def get_user(user_id: int):\n    return await service.get(user_id)', '静态路径应避免被动态 /{id} 路由意外匹配。', 'router.get("/:userId", getUser)', 'must', 3),
      t('http-get', 'GET', 'GET 用于读取资源，应尽量无副作用且可安全重复。', '@app.get("/articles")\nasync def list_articles(limit: int = 20, offset: int = 0):\n    return await repository.list(limit=limit, offset=offset)', '不要用 GET 执行删除或状态更新；敏感参数不要放 URL。', 'app.get("/articles", handler)', 'must', 2),
      t('http-post', 'POST', 'POST 通常创建资源或触发不能简单重复的操作。', '@app.post("/summaries", status_code=201)\nasync def create_summary(payload: SummaryCreate):\n    return await service.create(payload)', '创建成功通常返回 201；要考虑重复请求和幂等性。', 'app.post("/summaries", handler)', 'must', 2),
      t('fastapi-parameters', 'API 参数', 'FastAPI 根据参数位置和类型区分路径、查询、请求头与请求体。', '@app.get("/users/{user_id}")\nasync def get_user(\n    user_id: int,\n    include_orders: bool = False,\n):\n    ...', '外部输入永远不可信；边界条件要用类型和约束明确表达。', 'const { userId } = req.params\nconst { includeOrders } = req.query', 'must', 3),
      t('pydantic-models', 'Pydantic', 'Pydantic 模型校验、转换并序列化结构化数据。', 'class UserCreate(BaseModel):\n    name: str = Field(min_length=1, max_length=80)\n    email: EmailStr\n    age: int = Field(ge=0)', '模型不是 ORM 对象；输入模型与输出模型通常应分离。', 'const UserSchema = z.object({ name: z.string() })', 'must', 3),
      t('api-responses', 'API 返回值', 'response_model 明确接口输出形状，并过滤未声明字段。', '@app.get("/users/{id}", response_model=UserRead)\nasync def get_user(id: int) -> UserRead:\n    user = await service.get(id)\n    return UserRead.model_validate(user)', '不要把密码哈希、内部 token 或 ORM 私有字段直接返回。', 'res.json(publicUser)', 'must', 3),
      t('http-status-codes', 'HTTP 状态码', '状态码让客户端快速判断请求结果类别与下一步动作。', 'if user is None:\n    raise HTTPException(\n        status_code=404,\n        detail="User not found",\n    )', '不要所有失败都返回 200；4xx 是客户端问题，5xx 是服务端问题。', 'res.status(404).json({ detail: "User not found" })', 'must', 2),
      t('middleware', 'Middleware', '中间件包裹每个请求，适合统一日志、追踪、CORS 和耗时统计。', '@app.middleware("http")\nasync def add_request_id(request, call_next):\n    request.state.request_id = uuid4().hex\n    response = await call_next(request)\n    response.headers["X-Request-ID"] = request.state.request_id\n    return response', '中间件位于热路径，避免阻塞 I/O 和昂贵计算。', 'app.use(async (req, res, next) => {})', 'frequent', 4),
      t('dependency-injection', 'Dependency Injection', 'Depends 声明路由需要的资源，让鉴权、数据库和服务构建可复用、可测试。', 'def get_service(\n    session: Session = Depends(get_session),\n) -> UserService:\n    return UserService(UserRepository(session))\n\n@app.get("/users/{id}")\nasync def get_user(id: int, service=Depends(get_service)):\n    return await service.get(id)', '依赖应轻量并正确清理资源；不要在每个路由重复手工创建。', 'app.get("/users/:id", auth, handler)', 'must', 4),
    ],
  },
  {
    id: 'database', name: '数据库', topics: [
      t('sql-basics', 'SQL 基础', 'SQL 通过 SELECT、INSERT、UPDATE、DELETE 查询和修改关系数据。', 'SELECT id, name, email\nFROM users\nWHERE is_active = TRUE\nORDER BY created_at DESC\nLIMIT 20;', '始终使用参数化查询，绝不能拼接用户输入到 SQL。', undefined, 'must', 3),
      t('sqlalchemy-intro', 'SQLAlchemy', 'SQLAlchemy 提供 SQL 表达式和 ORM，把 Python 代码连接到关系数据库。', 'stmt = select(User).where(User.email == email)\nuser = session.scalar(stmt)', '现代 SQLAlchemy 2.x 推荐 select() 风格；阅读项目时先确认版本。', undefined, 'must', 4),
      t('orm-concept', 'ORM', 'ORM 把表映射为类、行映射为对象，但数据库约束和查询成本仍然存在。', 'user = User(name="Ada", email="ada@example.com")\nsession.add(user)\nsession.commit()', 'ORM 不是“无需懂 SQL”；N+1 查询和事务边界仍需重点检查。', undefined, 'must', 3),
      t('database-models', 'Model', '数据库 Model 声明表名、列、索引和关系。', 'class User(Base):\n    __tablename__ = "users"\n\n    id: Mapped[int] = mapped_column(primary_key=True)\n    email: Mapped[str] = mapped_column(unique=True, index=True)', '数据库 Model 与 Pydantic API schema 职责不同，不要混为一个类。', undefined, 'must', 4),
      t('database-session', 'Session', 'Session 追踪对象变化并管理事务，是数据库操作的工作单元。', 'with Session(engine) as session:\n    try:\n        session.add(order)\n        session.commit()\n    except Exception:\n        session.rollback()\n        raise', '发生写入异常后必须 rollback；请求之间不要共享同一个 Session。', undefined, 'must', 4),
      t('crud-operations', 'CRUD', 'CRUD 是创建、读取、更新、删除资源的基本数据访问模式。', 'class UserRepository:\n    def get(self, user_id: int):\n        return self.session.get(User, user_id)\n\n    def delete(self, user: User):\n        self.session.delete(user)\n        self.session.commit()', '更新和删除前处理不存在；列表查询要分页并避免返回无限数据。', undefined, 'must', 3),
    ],
  },
  {
    id: 'ai', name: 'AI 应用开发', topics: [
      t('openai-api', '调用 OpenAI API', '通过官方客户端发送结构化输入，并读取模型的文本或工具调用结果。', 'from openai import OpenAI\n\nclient = OpenAI()\nresponse = client.responses.create(\n    model="gpt-5-mini",\n    input="用三点总结这篇文章",\n)\nprint(response.output_text)', '密钥从环境变量读取；生产代码要处理超时、限流和内容为空。', 'const response = await client.responses.create({ model, input })'),
      t('http-api', 'HTTP API', 'AI 服务本质上也是 HTTP API，需要理解请求头、状态码、超时和重试。', 'async with httpx.AsyncClient(timeout=30) as client:\n    response = await client.post(url, headers=headers, json=payload)\n    response.raise_for_status()\n    data = response.json()', '重试只用于安全场景，并使用指数退避；不要无限重试。', 'const response = await fetch(url, { method: "POST", body: JSON.stringify(payload) })'),
      t('ai-json', 'AI 与 JSON', '结构化输出让模型结果能被程序可靠解析、验证和存储。', 'class Extraction(BaseModel):\n    title: str\n    tags: list[str]\n    confidence: float\n\nresult = Extraction.model_validate_json(raw_output)', '永远验证模型生成的 JSON；语法正确不代表业务值合理。', 'const result = Schema.parse(JSON.parse(rawOutput))'),
      t('prompt-design', 'Prompt', 'Prompt 应明确任务、上下文、约束和输出格式，而不是只堆砌模糊要求。', 'prompt = f"""\n任务：总结新闻\n要求：只依据给定内容，输出 3 条要点\n内容：\n{article}\n"""', '不要把不可信网页内容当系统指令；注意 prompt injection 和上下文长度。', 'const prompt = `Task: summarize\nContent: ${article}`'),
      t('streaming-output', 'Streaming', '流式响应让客户端边生成边展示内容，降低首字等待时间。', 'with client.responses.stream(model=model, input=prompt) as stream:\n    for event in stream:\n        if event.type == "response.output_text.delta":\n            print(event.delta, end="", flush=True)', '流结束前内容可能不完整；错误、取消和最终状态都要处理。', 'for await (const event of stream) { console.log(event.delta) }', 'must', 4),
      t('tool-calling', 'Tool Calling', 'Tool Calling 让模型提出结构化函数调用，由应用执行并把结果返回模型。', 'tools = [{\n    "type": "function",\n    "name": "get_weather",\n    "parameters": {"type": "object", "properties": {"city": {"type": "string"}}},\n}]', '模型只能请求工具；应用必须校验参数、控制权限并真正执行。', 'const tools = [{ type: "function", name: "get_weather" }]', 'must', 4),
      t('agent-concepts', 'Agent 基础', 'Agent 是模型、工具、状态和控制循环的组合，不是单独一个 API 调用。', 'while steps < max_steps:\n    response = model.run(messages, tools=tools)\n    if response.is_final:\n        return response.text\n    result = execute_tool(response.tool_call)\n    messages.append(result)', '必须设置步数、时间、成本和工具权限上限，避免无限循环。', undefined, 'must', 4),
      t('rag-concepts', 'RAG 基础', 'RAG 先检索相关资料，再把证据放进上下文让模型回答。', 'query_vector = embed(question)\ndocuments = vector_store.search(query_vector, top_k=5)\nanswer = generate(question, context=documents)', '检索到内容不等于正确；需要来源、重排和无答案处理。', undefined, 'must', 4),
      t('ai-summary-project', '实战：AI 新闻总结', '抓取新闻、清洗正文、调用模型并保存带来源的摘要。', 'articles = fetch_news(feeds)\nfor article in articles:\n    text = extract_content(article.url)\n    summary = summarize(text)\n    save({"url": article.url, "summary": summary})', '尊重站点条款和抓取频率；摘要必须保留原文链接。', undefined, 'must', 4),
      t('stock-analysis-project', '实战：股票分析脚本', '用可靠行情数据计算指标，再让模型解释而不是编造价格。', 'prices = market_client.history(symbol, days=90)\nmetrics = calculate_metrics(prices)\nreport = explain_metrics(symbol, metrics)\nprint(report)', '这不是投资建议；数据时间、币种、复权方式和缺失值必须明确。', undefined, 'frequent', 4),
      t('web-summary-project', '实战：网页内容总结', '从 URL 获取正文、抵抗页面指令污染并生成可追溯摘要。', 'html = await fetch_page(url)\ntext = extract_main_text(html)\nsafe_text = limit_and_sanitize(text)\nsummary = await llm_summarize(safe_text)', '网页是不可信输入；不要让页面文本改变系统权限或泄露秘密。', undefined, 'must', 4),
      t('production-ai', 'AI 应用生产检查', '生产 AI 应用需要可观测性、评估、缓存、成本控制和安全边界。', 'result = await run_with_timeout(agent, seconds=30)\nmetrics.record(\n    model=result.model,\n    tokens=result.usage.total_tokens,\n    latency=result.latency,\n)\nvalidate_output(result)', '能跑通 demo 不代表可上线；先建立固定测试集和失败降级策略。', undefined, 'must', 5),
    ],
  },
]

function createLesson(stage: StageBlueprint, topic: TopicBlueprint, order: number): Lesson {
  const firstLine = topic.python.split('\n').find((line) => line.trim()) ?? topic.title
  return {
    id: topic.id,
    stageId: stage.id,
    order,
    title: topic.title,
    subtitle: topic.summary,
    duration: topic.difficulty && topic.difficulty >= 4 ? 16 : 12,
    difficulty: topic.difficulty ?? 3,
    importance: topic.importance ?? 'must',
    status: 'available',
    oneLiner: topic.summary,
    comparison: {
      javascript: topic.javascript ?? `// JavaScript 没有完全对应的核心语法\n// 阅读时关注 Python 的项目惯例`,
      python: topic.python,
      note: `${topic.summary} 重点不是背写法，而是看到它时能判断输入、输出和失败路径。`,
    },
    explanation: [
      { code: firstLine.trim(), description: `这是 ${topic.title} 代码的入口或关键声明。` },
      { code: '先看数据 → 再看行为', description: '阅读时先确认代码接收什么数据，再判断它改变状态还是返回新值。' },
      { code: '检查失败路径', description: `真实项目中还要检查异常、空值、资源释放和边界条件。` },
    ],
    commonErrors: [
      { title: `${topic.title} 的高频误区`, description: topic.pitfall },
      { title: '只看语法，不看上下文', description: 'AI 生成的代码语法正确也可能依赖不存在的包、错误的数据形状或不合适的运行环境。' },
    ],
    realWorld: {
      title: `${stage.name}中的真实写法`,
      description: '这是项目中常见的紧凑写法。阅读时尝试指出它的输入、输出、外部依赖和可能失败的位置。',
      code: topic.python,
    },
    exercise: {
      type: 'choice',
      prompt: `哪项最准确地描述“${topic.title}”？`,
      options: [topic.summary, '它只影响代码格式，不改变程序行为。', '它会自动修复所有运行时错误。'],
      answer: topic.summary,
      explanation: `${topic.summary} 在真实代码中还要结合类型、依赖和错误处理一起判断。`,
    },
    simulatedOutput: topic.output ?? '运行完成',
  }
}

export const remainingLessons: Lesson[] = stages.flatMap((stage) => {
  const orderOffset = stage.id === 'foundation' ? 10 : 0
  return stage.topics.map((topic, index) => createLesson(stage, topic, orderOffset + index + 1))
})
