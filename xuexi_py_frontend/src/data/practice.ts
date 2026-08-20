import type { PracticeItem } from '../types/course'

export const practiceChallenges: PracticeItem[] = [
  {
    id: 'challenge-predict-dict', lessonId: 'dictionaries', title: '看代码猜结果：字典', stageId: 'structures',
    exercise: { type: 'predict', prompt: '下面代码最终输出什么？', code: `user = {"name": "Tom", "age": 18}\nuser["age"] += 1\nprint(user.get("name"), user["age"])`, options: ['Tom 19', 'Tom 18', 'KeyError'], answer: 'Tom 19', explanation: '字典中的 age 先读取 18，再加 1 写回；get("name") 返回 Tom。' },
  },
  {
    id: 'challenge-debug-if', lessonId: 'if-conditions', title: '找错误：条件判断', stageId: 'foundation',
    exercise: { type: 'debug', prompt: '哪项修改能修复代码？', code: `age = 20\nif age >= 18\n    print("成年人")`, options: ['在条件末尾添加冒号', '把 if 改为 when', '删除缩进'], answer: '在条件末尾添加冒号', explanation: 'Python if 条件行必须以冒号结束，下一行保持缩进。' },
  },
  {
    id: 'challenge-js-map', lessonId: 'list-comprehensions', title: 'JavaScript 转 Python', stageId: 'structures',
    exercise: { type: 'choice', prompt: '哪个 Python 写法等价于 JavaScript：numbers.map(item => item * 2)？', options: ['[item * 2 for item in numbers]', '[for item in numbers: item * 2]', 'numbers.map(lambda item: item * 2)'], answer: '[item * 2 for item in numbers]', explanation: '列表推导式最直接表达遍历并转换每个元素。' },
  },
  {
    id: 'challenge-complete-async', lessonId: 'async-def', title: '补全代码：异步函数', stageId: 'async',
    exercise: { type: 'fill', prompt: '补全 FastAPI 项目中的异步调用。', code: `___ def get_user(user_id: int):\n    user = ___ repository.get(user_id)\n    return user`, options: ['async / await', 'await / async', 'promise / then'], answer: 'async / await', explanation: '协程函数用 async def 定义，等待异步数据库调用使用 await。' },
  },
  {
    id: 'challenge-read-fastapi', lessonId: 'http-status-codes', title: '阅读真实代码：FastAPI', stageId: 'web',
    exercise: { type: 'choice', prompt: '这段代码的完整行为是什么？', code: `async def get_user(user_id: int):\n    user = await db.get(user_id)\n    if not user:\n        raise HTTPException(status_code=404)\n    return user`, options: ['异步查询用户；不存在返回 404，否则返回用户', '创建用户并始终返回 200', '删除用户并关闭数据库'], answer: '异步查询用户；不存在返回 404，否则返回用户', explanation: '先 await 数据库查询，再走空值失败路径，最后返回成功结果。' },
  },
  {
    id: 'challenge-exception-flow', lessonId: 'finally-block', title: '看代码猜结果：异常流程', stageId: 'errors',
    exercise: { type: 'predict', prompt: '打印顺序是什么？', code: `try:\n    print("try")\n    raise ValueError()\nexcept ValueError:\n    print("except")\nfinally:\n    print("finally")`, options: ['try → except → finally', 'try → finally', 'except → try → finally'], answer: 'try → except → finally', explanation: 'try 中抛出 ValueError，被对应 except 捕获，finally 最后必定执行。' },
  },
  {
    id: 'challenge-kwargs', lessonId: 'kwargs', title: '阅读参数转发', stageId: 'functions',
    exercise: { type: 'predict', prompt: 'options 的类型和值是什么？', code: `def request(url, **options):\n    print(type(options).__name__, options["timeout"])\n\nrequest("/users", timeout=30)`, options: ['dict 30', 'tuple 30', 'list timeout'], answer: 'dict 30', explanation: '**options 把额外关键字参数收集成字典。' },
  },
  {
    id: 'challenge-import-path', lessonId: 'absolute-imports', title: '定位 GitHub 项目文件', stageId: 'modules',
    exercise: { type: 'choice', prompt: '看到 from app.services.email import send_email，应优先查看哪个文件？', options: ['app/services/email.py', 'app.email/services.py', 'services/app/email.js'], answer: 'app/services/email.py', explanation: '绝对导入中的点通常映射目录层级，最后一个模块名对应 .py 文件。' },
  },
  {
    id: 'challenge-ai-review', lessonId: 'tool-calling', title: '判断 AI 代码是否安全', stageId: 'ai',
    exercise: { type: 'choice', prompt: '模型请求调用 delete_file(path) 时，应用最应该先做什么？', options: ['校验路径、权限和用户确认，再决定是否执行', '无条件执行模型给出的所有参数', '把系统全部文件列表发给模型'], answer: '校验路径、权限和用户确认，再决定是否执行', explanation: '模型提出的工具调用是不可信建议，执行层必须保留权限边界和参数校验。' },
  },
  {
    id: 'challenge-sql-review', lessonId: 'sql-basics', title: '找错误：SQL 安全', stageId: 'database',
    exercise: { type: 'debug', prompt: '下面 AI 生成的查询最大的问题是什么？', code: `query = f"SELECT * FROM users WHERE email = '{email}'"\nresult = session.execute(query)`, options: ['把用户输入拼进 SQL，存在注入风险', 'SELECT 不能查询 users', 'Python 不能使用字符串'], answer: '把用户输入拼进 SQL，存在注入风险', explanation: '外部输入必须通过参数化查询绑定，不能直接格式化进 SQL。' },
  },
]
