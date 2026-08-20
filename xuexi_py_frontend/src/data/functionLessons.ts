import type { Lesson } from '../types/course'

type FunctionLesson = Omit<Lesson, 'stageId' | 'status'>

const lesson = (data: FunctionLesson): Lesson => ({
  ...data,
  stageId: 'functions',
  status: 'available',
})

export const functionLessons: Lesson[] = [
  lesson({
    id: 'def-functions', order: 1, title: 'def 定义函数', subtitle: '把一段逻辑命名并重复使用', duration: 13, difficulty: 2, importance: 'must',
    oneLiner: 'def 用来定义函数：给一段可复用的逻辑起名字，并明确它接收什么输入。',
    comparison: {
      javascript: `function greet(name) {\n  console.log(\`Hello, \${name}\`)\n}\n\ngreet("Ada")`,
      python: `def greet(name):\n    print(f"Hello, {name}")\n\ngreet("Ada")`,
      note: 'Python 用 def、冒号和缩进定义函数体，不使用花括号；通常采用 snake_case 函数名。',
    },
    explanation: [
      { code: 'def greet(name):', description: 'def 开始函数定义，括号内是参数，末尾冒号不可缺少。' },
      { code: '    print(...)', description: '缩进部分属于函数体；只有调用时才会执行。' },
      { code: 'greet("Ada")', description: '调用函数，并把字符串作为 name 参数传入。' },
    ],
    commonErrors: [
      { title: '漏掉冒号或缩进', description: '函数头末尾需要冒号，函数体必须统一缩进。', code: `def greet(name)\nprint(name)  # SyntaxError` },
      { title: '定义后忘记调用', description: 'def 只创建函数对象，不会自动执行函数体。' },
    ],
    realWorld: { title: '拆分自动化步骤', description: 'AI 生成的脚本通常把读取、处理和保存拆成小函数。', code: `def load_articles(path: str):\n    return json.loads(path.read_text())\n\ndef summarize_articles(articles):\n    return [summarize(item) for item in articles]` },
    exercise: { type: 'fill', prompt: '补全一个合法的 Python 函数定义。', code: `___ build_prompt(topic):\n    return f"Explain {topic}"`, options: ['def', 'function', 'fn'], answer: 'def', explanation: 'Python 使用 def 关键字定义普通函数。' },
    simulatedOutput: 'Hello, Ada',
  }),
  lesson({
    id: 'return-values', order: 2, title: 'return 返回值', subtitle: '让函数把结果交给调用方', duration: 12, difficulty: 2, importance: 'must',
    oneLiner: 'return 结束当前函数并把结果交回调用位置；没有写 return 的函数会返回 None。',
    comparison: {
      javascript: `function double(value) {\n  return value * 2\n}\nconst result = double(4)`,
      python: `def double(value):\n    return value * 2\n\nresult = double(4)`,
      note: '两种语言的 return 语义接近；Python 可以用元组解包自然接收多个返回值。',
    },
    explanation: [
      { code: 'return value * 2', description: '计算结果、结束函数，并把结果返回。' },
      { code: 'result = double(4)', description: '调用表达式的值就是函数返回值。' },
      { code: 'return', description: '单独使用会提前结束函数，并返回 None。' },
    ],
    commonErrors: [
      { title: '只 print 没有 return', description: '打印结果不等于返回结果，调用方接到的仍是 None。', code: `def add(a, b):\n    print(a + b)\n\nresult = add(1, 2)  # None` },
      { title: 'return 后还有关键代码', description: 'return 之后的同级语句不会执行，AI 代码中要检查提前返回路径。' },
    ],
    realWorld: { title: 'Guard Clause 提前返回', description: '真实项目常先处理空数据，减少后续代码缩进。', code: `def normalize_email(email: str | None):\n    if not email:\n        return None\n\n    return email.strip().lower()` },
    exercise: { type: 'predict', prompt: '下面代码最终输出什么？', code: `def get_status(ok):\n    if not ok:\n        return "failed"\n    return "ready"\n\nprint(get_status(False))`, options: ['failed', 'ready', 'None'], answer: 'failed', explanation: 'ok 为 False，函数在第一个 return 处提前结束。' },
    simulatedOutput: 'failed',
  }),
  lesson({
    id: 'function-parameters', order: 3, title: '参数', subtitle: '区分形参与实参', duration: 14, difficulty: 2, importance: 'must',
    oneLiner: '参数定义函数需要的数据；调用时传入的具体值叫实参。',
    comparison: {
      javascript: `function createUser(name, age) {\n  return { name, age }\n}\ncreateUser("Tom", 18)`,
      python: `def create_user(name, age):\n    return {"name": name, "age": age}\n\ncreate_user("Tom", 18)`,
      note: '位置参数按顺序匹配。Python 项目常加类型提示，让编辑器和 AI 更容易理解输入形状。',
    },
    explanation: [
      { code: 'def create_user(name, age):', description: 'name 和 age 是函数定义中的形参。' },
      { code: 'create_user("Tom", 18)', description: '字符串和整数是调用时传入的实参。' },
      { code: 'name: str', description: '类型提示用于表达预期，不会在运行时自动转换值。' },
    ],
    commonErrors: [
      { title: '参数数量不匹配', description: '少传或多传位置参数通常会抛出 TypeError。' },
      { title: '误以为类型提示会校验', description: '普通 Python 函数不会因为 name: str 就自动拒绝整数。' },
    ],
    realWorld: { title: '服务层函数边界', description: '项目用参数显式声明业务逻辑所需依赖和数据。', code: `def create_order(\n    user_id: int,\n    items: list[dict],\n    repository: OrderRepository,\n) -> Order:\n    return repository.create(user_id, items)` },
    exercise: { type: 'choice', prompt: '调用 calculate_total(price, quantity) 时，哪个写法传入两个位置实参？', options: ['calculate_total(20, 3)', 'calculate_total([20, 3])', 'calculate_total()'], answer: 'calculate_total(20, 3)', explanation: '两个值按位置分别匹配 price 和 quantity。' },
    simulatedOutput: '60',
  }),
  lesson({
    id: 'default-parameters', order: 4, title: '默认参数', subtitle: '为可选配置提供合理默认值', duration: 14, difficulty: 3, importance: 'must',
    oneLiner: '默认参数让调用方可以省略不常变化的配置，但可变对象不能随意作为默认值。',
    comparison: {
      javascript: `function fetchData(url, timeout = 30) {\n  // ...\n}\nfetchData("/users")`,
      python: `def fetch_data(url, timeout=30):\n    # ...\n    pass\n\nfetch_data("/users")`,
      note: '默认参数必须放在无默认值参数之后。Python 的默认值在函数定义时创建，不是每次调用都重新创建。',
    },
    explanation: [
      { code: 'timeout=30', description: '调用方不传 timeout 时使用 30。' },
      { code: 'fetch_data("/users", 10)', description: '显式传值会覆盖默认值。' },
      { code: 'items=None', description: '需要 list 等可变默认值时，通常先用 None。' },
    ],
    commonErrors: [
      { title: '使用可变默认值', description: '同一个默认列表会在多次调用之间共享。', code: `def add_item(item, items=[]):\n    items.append(item)\n    return items` },
      { title: '默认参数位置错误', description: 'def f(optional=1, required): 是非法语法。' },
    ],
    realWorld: { title: '安全的可选列表', description: '使用 None，再在函数内部创建本次调用专属的列表。', code: `def build_messages(prompt, history=None):\n    if history is None:\n        history = []\n\n    return [*history, {"role": "user", "content": prompt}]` },
    exercise: { type: 'fill', prompt: '哪个默认参数写法不会在调用之间共享列表？', code: `def collect(value, items=___):\n    if items is None:\n        items = []`, options: ['None', '[]', 'list'], answer: 'None', explanation: 'None 是不可变单例，函数内部再创建新列表最安全。' },
    simulatedOutput: "['first']\n['second']",
  }),
  lesson({
    id: 'keyword-arguments', order: 5, title: '关键字参数', subtitle: '用参数名提高调用可读性', duration: 11, difficulty: 2, importance: 'must',
    oneLiner: '关键字参数在调用时写出参数名，让顺序不再重要，并显著提升配置型调用的可读性。',
    comparison: {
      javascript: `createRequest({\n  method: "POST",\n  timeout: 10,\n  retries: 2,\n})`,
      python: `create_request(\n    method="POST",\n    timeout=10,\n    retries=2,\n)`,
      note: 'JavaScript 常用对象模拟命名参数；Python 原生支持 name=value 形式，调用长函数时很常见。',
    },
    explanation: [
      { code: 'timeout=10', description: '按参数名传值，不依赖它在定义中的位置。' },
      { code: 'create_request(url, timeout=10)', description: '位置参数应出现在关键字参数之前。' },
      { code: 'def f(*, limit=10)', description: '* 之后的参数只能通过关键字传入。' },
    ],
    commonErrors: [
      { title: '重复传同一个参数', description: '既按位置又按名称传入同一参数会抛出 TypeError。', code: `connect("localhost", host="api.test")` },
      { title: '关键字名称拼错', description: '普通函数不会忽略未知参数，拼写错误会直接失败。' },
    ],
    realWorld: { title: 'AI 客户端配置', description: '模型调用参数很多，关键字能直接表达每个数字的含义。', code: `response = client.responses.create(\n    model="gpt-4.1-mini",\n    input=prompt,\n    temperature=0.2,\n    max_output_tokens=800,\n)` },
    exercise: { type: 'choice', prompt: '哪个调用最清楚地表达 30 是超时时间？', options: ['request(url, timeout=30)', 'request(url, 30)', 'request(timeout=30, url)'], answer: 'request(url, timeout=30)', explanation: '保留必需的位置参数，并用关键字说明可选配置的含义。' },
    simulatedOutput: 'request sent',
  }),
  lesson({
    id: 'args', order: 6, title: '*args', subtitle: '接收任意数量的位置参数', duration: 13, difficulty: 3, importance: 'frequent',
    oneLiner: '*args 把额外的位置参数收集成 tuple，适合包装函数或数量天然不固定的输入。',
    comparison: {
      javascript: `function logAll(...values) {\n  values.forEach(console.log)\n}\nlogAll("a", "b", "c")`,
      python: `def log_all(*values):\n    for value in values:\n        print(value)\n\nlog_all("a", "b", "c")`,
      note: 'args 只是社区惯用名，真正起作用的是 *；函数内部拿到的是 tuple。',
    },
    explanation: [
      { code: 'def total(*numbers):', description: '把所有额外位置实参收集到 numbers 元组。' },
      { code: 'func(*items)', description: '调用时用 * 把序列拆成多个位置参数。' },
      { code: '*args', description: '适合转发参数，但业务函数参数明确时不要滥用。' },
    ],
    commonErrors: [
      { title: '误以为 args 是 list', description: '它实际是 tuple；如果需要修改，应先转换为 list。' },
      { title: '隐藏函数接口', description: '所有函数都写 *args 会让调用方和类型检查器不知道需要什么。' },
    ],
    realWorld: { title: '装饰器转发调用', description: '包装函数不知道原函数有多少位置参数，因此原样转发。', code: `def timed(func):\n    def wrapper(*args):\n        started_at = time.time()\n        result = func(*args)\n        print(time.time() - started_at)\n        return result\n    return wrapper` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `def count(*items):\n    print(len(items))\n\ncount("a", "b", "c")`, options: ['3', '1', 'TypeError'], answer: '3', explanation: '三个位置参数被收集成长度为 3 的 tuple。' },
    simulatedOutput: '3',
  }),
  lesson({
    id: 'kwargs', order: 7, title: '**kwargs', subtitle: '接收任意数量的关键字参数', duration: 14, difficulty: 3, importance: 'must',
    oneLiner: '**kwargs 把额外的关键字参数收集成 dict，常见于配置合并、框架封装和参数转发。',
    comparison: {
      javascript: `function buildConfig(options) {\n  return { timeout: 30, ...options }\n}\nbuildConfig({ debug: true })`,
      python: `def build_config(**options):\n    return {"timeout": 30, **options}\n\nbuild_config(debug=True)`,
      note: 'kwargs 是字典。调用时 **config 可以把字典拆成关键字参数，类似 JavaScript 对象展开。',
    },
    explanation: [
      { code: 'def configure(**options):', description: '额外的 name=value 参数会进入 options 字典。' },
      { code: 'configure(**config)', description: '把字典的键值拆成关键字参数。' },
      { code: '{**defaults, **overrides}', description: '合并字典，后面的同名键覆盖前面。' },
    ],
    commonErrors: [
      { title: '传入非法关键字键', description: '**data 的键必须是字符串，并且最终要匹配函数可接收的名称。' },
      { title: '吞掉拼写错误', description: '过度宽泛的 **kwargs 可能让错误配置悄悄进入函数，应主动验证允许的键。' },
    ],
    realWorld: { title: '封装 HTTP 客户端', description: '包装层添加公共请求头，再把其他选项转发给底层库。', code: `def api_get(url: str, **kwargs):\n    headers = {"Authorization": f"Bearer {API_KEY}"}\n    headers.update(kwargs.pop("headers", {}))\n    return httpx.get(url, headers=headers, **kwargs)` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `def show(**data):\n    print(data["model"])\n\nshow(model="gpt", stream=True)`, options: ['gpt', 'model', 'TypeError'], answer: 'gpt', explanation: '关键字参数被收集为 {"model": "gpt", "stream": True}。' },
    simulatedOutput: 'gpt',
  }),
  lesson({
    id: 'variable-scope', order: 8, title: '变量作用域', subtitle: '理解名字在哪里可见', duration: 15, difficulty: 3, importance: 'must',
    oneLiner: '作用域决定变量能在哪里被读取；函数内部变量默认是局部的，读取名字时遵循 LEGB 顺序。',
    comparison: {
      javascript: `const appName = "Agent"\n\nfunction run() {\n  const status = "ready"\n  console.log(appName, status)\n}`,
      python: `app_name = "Agent"\n\ndef run():\n    status = "ready"\n    print(app_name, status)`,
      note: 'Python 没有 let/const 块级声明。函数会创建局部作用域，if 和 for 本身通常不会。',
    },
    explanation: [
      { code: 'local → enclosing → global → built-in', description: 'LEGB：Python 查找名字时的基本顺序。' },
      { code: 'global count', description: '声明要在函数内重新绑定模块级变量；应谨慎使用。' },
      { code: 'nonlocal count', description: '声明要修改外层函数中的变量。' },
    ],
    commonErrors: [
      { title: '赋值导致局部变量遮蔽', description: '函数内只要给名字赋值，它通常就被视为局部变量。', code: `count = 0\ndef increment():\n    count += 1  # UnboundLocalError` },
      { title: '依赖全局可变状态', description: '测试和并发环境中容易相互影响，优先通过参数传入依赖。' },
    ],
    realWorld: { title: '闭包保存配置', description: '外层函数的变量可以被内部函数读取，装饰器常采用这种结构。', code: `def make_logger(prefix: str):\n    def log(message: str):\n        print(f"[{prefix}] {message}")\n    return log\n\napi_log = make_logger("API")` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `name = "global"\n\ndef show():\n    name = "local"\n    print(name)\n\nshow()`, options: ['local', 'global', 'NameError'], answer: 'local', explanation: '函数内部定义了局部 name，它会遮蔽全局同名变量。' },
    simulatedOutput: 'local',
  }),
  lesson({
    id: 'lambda-functions', order: 9, title: 'lambda', subtitle: '短小的一次性函数表达式', duration: 12, difficulty: 3, importance: 'frequent',
    oneLiner: 'lambda 创建只有一个表达式的匿名函数，最常见用途是作为排序或转换函数传给其他 API。',
    comparison: {
      javascript: `const users = [{ age: 30 }, { age: 18 }]\nusers.sort((a, b) => a.age - b.age)`,
      python: `users = [{"age": 30}, {"age": 18}]\nusers.sort(key=lambda user: user["age"])`,
      note: 'Python 排序的 key 函数返回“用于比较的值”，不写两个元素比较逻辑。复杂函数应使用 def。',
    },
    explanation: [
      { code: 'lambda x: x * 2', description: '接收 x，并自动返回表达式 x * 2 的结果。' },
      { code: 'key=lambda item: item["score"]', description: '告诉 sorted 或 sort 按 score 字段排序。' },
      { code: 'lambda x, y: x + y', description: '可以有多个参数，但函数体只能是一个表达式。' },
    ],
    commonErrors: [
      { title: '把复杂业务塞进 lambda', description: 'lambda 不适合多行处理、异常处理或复杂分支，使用 def 更清楚。' },
      { title: '照搬 JavaScript sort 比较器', description: 'Python key 通常接收一个元素，而不是 a、b 两个元素。' },
    ],
    realWorld: { title: '按嵌套字段排序', description: 'AI 代码常用 lambda 指定排序、最大值或分组依据。', code: `ranked = sorted(\n    candidates,\n    key=lambda item: item["relevance_score"],\n    reverse=True,\n)` },
    exercise: { type: 'choice', prompt: '哪一项会按用户的 age 从小到大排序？', options: ['sorted(users, key=lambda user: user["age"])', 'sorted(users, lambda a, b: a.age - b.age)', 'users.map(user => user.age)'], answer: 'sorted(users, key=lambda user: user["age"])', explanation: 'Python sorted 的 key 函数接收一个元素并返回排序依据。' },
    simulatedOutput: "[{'age': 18}, {'age': 30}]",
  }),
]
