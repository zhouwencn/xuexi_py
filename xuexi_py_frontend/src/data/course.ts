import type { Importance, Lesson, Stage } from '../types/course'
import { functionLessons } from './functionLessons'
import { moduleLessons } from './moduleLessons'
import { remainingLessons } from './remainingLessons'
import { structureLessons } from './structureLessons'

export const importanceMap: Record<Importance, { label: string; icon: string }> = {
  must: { label: '必须掌握', icon: '🔥' },
  frequent: { label: '经常使用', icon: '✅' },
  read: { label: '看懂即可', icon: '👀' },
  skip: { label: '可以暂时跳过', icon: '⏭' },
}

const foundationLessons: Lesson[] = [
  {
    id: 'what-is-python', stageId: 'foundation', order: 1, title: 'Python 是什么', subtitle: '先建立正确的语言地图', duration: 6, difficulty: 1, importance: 'must', status: 'available',
    oneLiner: 'Python 是一门强调可读性的通用编程语言，特别擅长把想法快速变成可运行的工具。',
    comparison: {
      javascript: `// 浏览器或 Node.js\nconsole.log("Hello, world!")`,
      python: `# Python 解释器\nprint("Hello, world!")`,
      note: '两者都可以直接执行脚本。Python 不用分号，缩进本身就是语法的一部分。',
    },
    explanation: [
      { code: '# Python 解释器', description: '# 开头是单行注释，和 JavaScript 的 // 类似。' },
      { code: 'print(...)', description: '调用内置 print 函数，把内容输出到终端。' },
      { code: '"Hello, world!"', description: '一个字符串值；单双引号都可以。' },
    ],
    commonErrors: [
      { title: '把浏览器 API 当成 Python API', description: 'Python 脚本里没有 document、window，也不使用 console.log。', code: `console.log("hi")  # NameError` },
      { title: '忽略运行环境', description: '同一段 Python 代码可能依赖解释器版本、已安装的包和环境变量。' },
    ],
    realWorld: { title: 'AI 生成的自动化入口', description: '真实脚本通常从 main 函数进入，再把具体步骤拆开。', code: `def main():\n    print("开始整理日报...")\n\nif __name__ == "__main__":\n    main()` },
    exercise: { type: 'choice', prompt: '在 Python 中，向终端输出内容通常使用哪个写法？', options: ['console.log("hi")', 'print("hi")', 'echo("hi")'], answer: 'print("hi")', explanation: 'print 是 Python 内置输出函数；console.log 属于 JavaScript。' },
    simulatedOutput: 'Hello, world!',
  },
  {
    id: 'variables', stageId: 'foundation', order: 2, title: '变量', subtitle: '给数据起一个能读懂的名字', duration: 8, difficulty: 1, importance: 'must', status: 'available',
    oneLiner: '变量就是指向某个值的名字；Python 直接赋值，不需要 let、const 或类型声明。',
    comparison: {
      javascript: `const userName = "Tom"\nlet score = 80\nscore = 95`,
      python: `user_name = "Tom"\nscore = 80\nscore = 95`,
      note: 'Python 社区通常用 snake_case 命名。变量可以重新赋值，但好代码会避免随意改变它的含义。',
    },
    explanation: [
      { code: 'user_name', description: '变量名。Python 推荐小写单词加下划线。' },
      { code: '=', description: '赋值：把右边的值绑定给左边的名字，不是“相等判断”。' },
      { code: 'score = 95', description: '重新赋值后，score 指向新的整数 95。' },
    ],
    commonErrors: [
      { title: '使用未定义变量', description: '变量必须先赋值再读取，名字的大小写也敏感。', code: `user_name = "Tom"\nprint(username)  # NameError` },
      { title: '覆盖内置函数', description: '不要把 list、str、input 等内置名字拿来当普通变量。', code: `list = [1, 2, 3]  # 后面无法正常调用 list()` },
    ],
    realWorld: { title: '配置和请求参数', description: 'AI 常会先把模型名、地址等配置放进语义明确的变量。', code: `model_name = "gpt-4.1-mini"\ntimeout_seconds = 30\napi_url = "https://api.example.com/v1/chat"` },
    exercise: { type: 'fill', prompt: '补全代码，把订单状态保存到变量 order_status。', code: `___ = "paid"\nprint(order_status)`, options: ['order_status', 'const order_status', '"order_status"'], answer: 'order_status', explanation: 'Python 赋值直接写变量名，不加 const，也不能把变量名写成字符串。' },
    simulatedOutput: 'paid',
  },
  {
    id: 'basic-types', stageId: 'foundation', order: 3, title: '基础数据类型', subtitle: '读代码时先认出值的形状', duration: 9, difficulty: 1, importance: 'must', status: 'available',
    oneLiner: '类型描述一个值是什么，以及它支持哪些操作；最常见的是数字、字符串、布尔值和 None。',
    comparison: {
      javascript: `typeof 42          // "number"\ntypeof "Tom"       // "string"\ntypeof true        // "boolean"`,
      python: `type(42)          # <class 'int'>\ntype("Tom")       # <class 'str'>\ntype(True)        # <class 'bool'>`,
      note: 'JavaScript 的 number 同时覆盖整数和小数；Python 明确区分 int 与 float。',
    },
    explanation: [
      { code: 'type(value)', description: '查看运行时类型，调试 AI 生成代码时很实用。' },
      { code: 'int / float', description: '整数与浮点数（小数）。' },
      { code: 'str / bool / None', description: '字符串、布尔值与“没有值”。' },
    ],
    commonErrors: [
      { title: '把字符串数字当数字', description: '"18" 是文本，不能直接和数字 18 做算术。', code: `age = "18"\nprint(age + 1)  # TypeError` },
      { title: '误以为类型提示会自动转换', description: 'age: int 只是提示；传入字符串时不会自动变成整数。' },
    ],
    realWorld: { title: 'Pydantic 数据模型', description: 'FastAPI 项目会用类型提示声明接口数据的形状。', code: `class UserCreate(BaseModel):\n    name: str\n    age: int\n    is_active: bool = True` },
    exercise: { type: 'predict', prompt: '下面代码会输出哪个类型名？', code: `price = 19.9\nprint(type(price).__name__)`, options: ['int', 'float', 'number'], answer: 'float', explanation: '带小数点的数值在 Python 中通常是 float。' },
    simulatedOutput: 'float',
  },
  {
    id: 'numbers', stageId: 'foundation', order: 4, title: 'int / float', subtitle: '数字计算与转换', duration: 10, difficulty: 2, importance: 'must', status: 'available',
    oneLiner: 'int 表示整数，float 表示小数；读项目时要特别留意除法、精度和类型转换。',
    comparison: {
      javascript: `const total = 5 / 2     // 2.5\nconst count = parseInt("12", 10)`,
      python: `total = 5 / 2       # 2.5\npage = 5 // 2        # 2\ncount = int("12")`,
      note: 'Python 的 / 总是返回 float，// 是向下取整除法；这在分页计算中经常出现。',
    },
    explanation: [
      { code: '5 / 2', description: '普通除法，结果是 2.5。' },
      { code: '5 // 2', description: '整除，结果是 2。' },
      { code: 'int("12")', description: '把可转换的字符串变成整数。' },
    ],
    commonErrors: [
      { title: '直接转换非法文本', description: 'int("12px") 会抛出 ValueError，需要先验证或捕获异常。' },
      { title: '用 float 处理金额', description: '金额计算可能出现精度误差，严谨场景通常使用 Decimal。', code: `0.1 + 0.2  # 0.30000000000000004` },
    ],
    realWorld: { title: 'API 分页页数', description: '用整除配合偏移量，计算总页数。', code: `total_items = 47\npage_size = 10\ntotal_pages = (total_items + page_size - 1) // page_size` },
    exercise: { type: 'predict', prompt: '下面代码的输出是什么？', code: `print(7 // 3)`, options: ['2', '2.333', '3'], answer: '2', explanation: '// 是整除，舍去余数部分。' },
    simulatedOutput: '2',
  },
  {
    id: 'strings', stageId: 'foundation', order: 5, title: 'str 字符串', subtitle: '文本与 f-string', duration: 12, difficulty: 2, importance: 'must', status: 'available',
    oneLiner: 'str 用来表示文本；真实项目中最值得掌握的是 f-string、常用方法和不可变性。',
    comparison: {
      javascript: `const name = "Tom"\nconst message = \`Hi, \${name}!\``,
      python: `name = "Tom"\nmessage = f"Hi, {name}!"`,
      note: 'Python 的 f-string 类似 JavaScript 模板字符串，在引号前加 f，并用 { } 插入表达式。',
    },
    explanation: [
      { code: 'f"Hi, {name}!"', description: 'f-string：直接把变量或表达式嵌入字符串。' },
      { code: 'text.strip()', description: '去掉首尾空白，处理输入和文件内容时很常见。' },
      { code: 'text.lower()', description: '返回小写的新字符串，不会修改原字符串。' },
    ],
    commonErrors: [
      { title: '忘记 f 前缀', description: '没有 f 时，{name} 只会被当成普通文本。', code: `name = "Tom"\nprint("Hi, {name}")  # Hi, {name}` },
      { title: '拼接不同类型', description: 'Python 不会自动把 int 拼接成 str。', code: `"age: " + 18  # TypeError` },
    ],
    realWorld: { title: '构造日志消息', description: '项目日志里经常用 f-string 注入请求 ID 和状态。', code: `request_id = "req_42"\nstatus = 200\nlogger.info(f"request={request_id} status={status}")` },
    exercise: { type: 'fill', prompt: '选择能输出“Hello, Ada”的写法。', code: `name = "Ada"\nprint(___)`, options: ['f"Hello, {name}"', '"Hello, ${name}"', '"Hello, " + name + 1'], answer: 'f"Hello, {name}"', explanation: 'f-string 是 Python 最常见的字符串插值写法。' },
    simulatedOutput: 'Hello, Ada',
  },
  {
    id: 'booleans', stageId: 'foundation', order: 6, title: 'bool 布尔值', subtitle: '让条件表达式可读', duration: 8, difficulty: 1, importance: 'must', status: 'available',
    oneLiner: 'bool 只有 True 和 False 两个值，通常来自比较结果，并决定代码走哪条分支。',
    comparison: {
      javascript: `const isReady = true\nif (!isReady) {\n  console.log("wait")\n}`,
      python: `is_ready = True\nif not is_ready:\n    print("wait")`,
      note: 'Python 的 True / False 首字母必须大写；逻辑非使用 not，而不是 !。',
    },
    explanation: [
      { code: 'True / False', description: 'Python 布尔字面量，首字母大写。' },
      { code: 'not is_ready', description: '对布尔值取反。' },
      { code: 'bool(value)', description: '查看一个值在条件判断中是真还是假。' },
    ],
    commonErrors: [
      { title: '写成小写', description: 'true 和 false 不是 Python 关键字，会被当成未定义变量。' },
      { title: '与 True 重复比较', description: 'if is_ready: 比 if is_ready == True: 更符合 Python 风格。' },
    ],
    realWorld: { title: '功能开关', description: '服务常用布尔配置控制调试、缓存或实验功能。', code: `debug_mode = settings.DEBUG\n\nif debug_mode:\n    logger.setLevel("DEBUG")` },
    exercise: { type: 'debug', prompt: '哪一项能修复下面的 Python 代码？', code: `is_admin = true`, options: ['is_admin = True', 'is_admin = "true"', 'const is_admin = true'], answer: 'is_admin = True', explanation: 'Python 的布尔值使用首字母大写的 True / False。' },
    simulatedOutput: 'True',
  },
  {
    id: 'none', stageId: 'foundation', order: 7, title: 'None', subtitle: '理解“暂时没有值”', duration: 9, difficulty: 2, importance: 'must', status: 'available',
    oneLiner: 'None 表示“没有值”或“尚未得到结果”，类似 JavaScript 的 null，但 Python 没有 undefined。',
    comparison: {
      javascript: `let user = null\nif (user === null) {\n  console.log("not found")\n}`,
      python: `user = None\nif user is None:\n    print("not found")`,
      note: '判断 None 推荐用 is / is not，而不是 ==；这是阅读 Python 项目时的高频模式。',
    },
    explanation: [
      { code: 'result = None', description: '显式表示当前没有结果。' },
      { code: 'result is None', description: '判断对象是否就是唯一的 None。' },
      { code: 'return None', description: '函数没有有效结果时可以明确返回 None；不写 return 也会隐式返回 None。' },
    ],
    commonErrors: [
      { title: '写成 null', description: 'null 属于 JavaScript / JSON，Python 代码中使用 None。' },
      { title: '忘记处理 None', description: 'AI 生成的代码常假定查询一定成功，随后访问 None 的属性导致错误。', code: `user = find_user(42)\nprint(user.name)  # user 可能是 None` },
    ],
    realWorld: { title: '数据库查询结果', description: '查询不到用户时先处理 None，再继续访问属性。', code: `user = await repository.get(user_id)\nif user is None:\n    raise HTTPException(status_code=404)\nreturn user` },
    exercise: { type: 'fill', prompt: '补全最符合 Python 风格的空值判断。', code: `user = find_user(42)\nif user ___ None:\n    print("not found")`, options: ['is', '===', 'equals'], answer: 'is', explanation: 'None 是单例，Python 社区约定使用 is None 判断。' },
    simulatedOutput: 'not found',
  },
  {
    id: 'print', stageId: 'foundation', order: 8, title: 'print 输出', subtitle: '最快的调试工具', duration: 7, difficulty: 1, importance: 'frequent', status: 'available',
    oneLiner: 'print 把值输出到终端，是学习和临时排查问题最直接的工具。',
    comparison: {
      javascript: `console.log("user", user)\nconsole.error("failed")`,
      python: `print("user", user)\nprint("failed")`,
      note: 'print 可接收多个参数并自动用空格分隔；正式项目通常会使用 logging 记录级别和上下文。',
    },
    explanation: [
      { code: 'print("user", user)', description: '输出多个值，中间默认加一个空格。' },
      { code: 'print(value, end="")', description: '用 end 改变结尾，默认是换行符。' },
      { code: 'print(a, b, sep=" | ")', description: '用 sep 自定义多个值之间的分隔符。' },
    ],
    commonErrors: [
      { title: '在正式服务里到处 print', description: 'print 没有日志级别、时间和请求上下文；生产项目应使用 logging。' },
      { title: '打印敏感信息', description: '不要输出 API Key、密码、完整 token 或用户隐私数据。' },
    ],
    realWorld: { title: '调试数据形状', description: '接手 AI 代码时，可以先打印类型和部分内容确认假设。', code: `print("response type:", type(response))\nprint("items count:", len(items))\nprint("first item:", items[0] if items else None)` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `name = "Ada"\nscore = 98\nprint(name, score, sep=" · ")`, options: ['Ada · 98', 'Ada 98', 'name · score'], answer: 'Ada · 98', explanation: 'print 会输出变量的值，sep 指定为“ · ”。' },
    simulatedOutput: 'Ada · 98',
  },
  {
    id: 'input', stageId: 'foundation', order: 9, title: 'input 输入', subtitle: '从终端接收用户文本', duration: 9, difficulty: 2, importance: 'frequent', status: 'available',
    oneLiner: 'input 会暂停程序等待终端输入，并且永远返回字符串。',
    comparison: {
      javascript: `// 浏览器\nconst name = prompt("Your name?")`,
      python: `name = input("Your name? ")\nprint(f"Hi, {name}")`,
      note: 'input 主要用于命令行小工具。Web API 的输入来自请求参数或请求体，不会调用 input。',
    },
    explanation: [
      { code: 'input("Your name? ")', description: '显示提示并等待用户按回车。' },
      { code: 'age = int(input(...))', description: '需要数字时，要显式把返回的字符串转换为 int。' },
      { code: 'name.strip()', description: '清理用户无意输入的首尾空白。' },
    ],
    commonErrors: [
      { title: '直接拿输入做数学运算', description: 'input 的结果是 str，需要 int 或 float 转换。', code: `age = input("Age: ")\nprint(age + 1)  # TypeError` },
      { title: '在服务器请求里使用 input', description: '它会阻塞服务进程，FastAPI 应从函数参数读取输入。' },
    ],
    realWorld: { title: '自动化脚本确认操作', description: '命令行维护脚本可能在危险操作前要求确认。', code: `answer = input("确认清理缓存？[y/N] ").strip().lower()\nif answer == "y":\n    clear_cache()` },
    exercise: { type: 'fill', prompt: '补全代码，让 age 成为整数。', code: `age = ___(input("Age: "))`, options: ['int', 'str', 'number'], answer: 'int', explanation: 'input 返回 str，int(...) 将合法数字文本转换为整数。' },
    simulatedOutput: 'Age: 20\n明年 21 岁',
  },
  {
    id: 'operators', stageId: 'foundation', order: 10, title: '运算符', subtitle: '计算、赋值与成员判断', duration: 12, difficulty: 2, importance: 'must', status: 'available',
    oneLiner: '运算符用来计算和组合值；除四则运算外，Python 的 **、//、in 特别常见。',
    comparison: {
      javascript: `const squared = 3 ** 2\nconst hasAdmin = roles.includes("admin")\ncount += 1`,
      python: `squared = 3 ** 2\nhas_admin = "admin" in roles\ncount += 1`,
      note: 'Python 用 in 做成员判断，读起来更接近自然语言；没有 ++ 自增运算符。',
    },
    explanation: [
      { code: '+ - * /', description: '加、减、乘、除；/ 的结果通常是 float。' },
      { code: '** / // %', description: '幂、除法、整除、取余。' },
      { code: 'item in collection', description: '判断元素是否存在于字符串、列表、集合或字典键中。' },
    ],
    commonErrors: [
      { title: '写 count++', description: 'Python 不支持 ++，应写 count += 1。' },
      { title: '混淆 = 和 ==', description: '= 用于赋值，== 用于比较值是否相等。' },
    ],
    realWorld: { title: '权限判断', description: '接口依赖项里经常判断用户角色是否包含某个权限。', code: `required_role = "admin"\nif required_role not in current_user.roles:\n    raise PermissionError("权限不足")` },
    exercise: { type: 'fill', prompt: '补全 Python 成员判断。', code: `roles = ["editor", "admin"]\nif "admin" ___ roles:\n    print("allowed")`, options: ['in', 'includes', 'of'], answer: 'in', explanation: 'Python 用 in 判断元素是否属于某个集合。' },
    simulatedOutput: 'allowed',
  },
]

export const lessons: Lesson[] = [
  ...foundationLessons,
  ...remainingLessons.filter((item) => item.stageId === 'foundation'),
  ...structureLessons,
  ...functionLessons,
  ...moduleLessons,
  ...remainingLessons.filter((item) => item.stageId !== 'foundation'),
]

export const stages: Stage[] = [
  { id: 'foundation', order: 1, title: '第一阶段：Python 基础', shortTitle: 'Python 基础', description: '建立语法直觉，能读懂脚本的控制流与常见值。', lessonCount: 18, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'foundation').map((item) => item.id) },
  { id: 'structures', order: 2, title: '第二阶段：常用数据结构', shortTitle: '数据结构', description: 'list、dict、切片、推导式，以及与 JavaScript 的核心差异。', lessonCount: 12, status: 'active', lessonIds: structureLessons.map((lesson) => lesson.id) },
  { id: 'functions', order: 3, title: '第三阶段：函数', shortTitle: '函数', description: '从 def 到 *args / **kwargs，读懂项目中的函数边界。', lessonCount: 9, status: 'active', lessonIds: functionLessons.map((item) => item.id) },
  { id: 'modules', order: 4, title: '第四阶段：模块与项目结构', shortTitle: '模块与结构', description: '看懂 import、package 与真实 GitHub 项目目录。', lessonCount: 10, status: 'active', lessonIds: moduleLessons.map((item) => item.id) },
  { id: 'errors', order: 5, title: '第五阶段：异常处理', shortTitle: '异常处理', description: '理解失败路径、异常捕获与业务错误。', lessonCount: 6, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'errors').map((item) => item.id) },
  { id: 'files', order: 6, title: '第六阶段：文件与数据', shortTitle: '文件与数据', description: '用 pathlib、JSON、CSV 和环境变量完成真实任务。', lessonCount: 8, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'files').map((item) => item.id) },
  { id: 'oop', order: 7, title: '第七阶段：面向对象', shortTitle: '面向对象', description: '以读懂 FastAPI、Pydantic 和 SQLAlchemy 为目标理解类。', lessonCount: 12, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'oop').map((item) => item.id) },
  { id: 'advanced', order: 8, title: '第八阶段：进阶语法', shortTitle: '进阶语法', description: '装饰器、生成器、类型系统与常用标准库。', lessonCount: 14, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'advanced').map((item) => item.id) },
  { id: 'async', order: 9, title: '第九阶段：异步编程', shortTitle: '异步编程', description: '从 JavaScript async/await 迁移到 Python 协程心智模型。', lessonCount: 5, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'async').map((item) => item.id) },
  { id: 'engineering', order: 10, title: '第十阶段：工程开发', shortTitle: '工程开发', description: '虚拟环境、依赖管理、代码质量和测试。', lessonCount: 10, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'engineering').map((item) => item.id) },
  { id: 'web', order: 11, title: '第十一阶段：Web 开发', shortTitle: 'FastAPI 阅读', description: '具备阅读 FastAPI 路由、模型、依赖与中间件的能力。', lessonCount: 10, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'web').map((item) => item.id) },
  { id: 'database', order: 12, title: '第十二阶段：数据库', shortTitle: '数据库', description: '读懂 SQLAlchemy Model、Session 与 CRUD。', lessonCount: 6, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'database').map((item) => item.id) },
  { id: 'ai', order: 13, title: '第十三阶段：AI 应用开发', shortTitle: 'AI 应用', description: 'API、Streaming、Tool Calling、Agent 与 RAG 实战。', lessonCount: 12, status: 'active', lessonIds: lessons.filter((item) => item.stageId === 'ai').map((item) => item.id) },
]

export const getLessonById = (id?: string) => lessons.find((lesson) => lesson.id === id)
