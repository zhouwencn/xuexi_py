import type { Lesson } from '../types/course'

type StructureLesson = Omit<Lesson, 'stageId' | 'status'>

const lesson = (data: StructureLesson): Lesson => ({
  ...data,
  stageId: 'structures',
  status: 'available',
})

export const structureLessons: Lesson[] = [
  lesson({
    id: 'lists', order: 1, title: 'list 列表', subtitle: 'Python 中最常用的有序容器', duration: 12, difficulty: 2, importance: 'must',
    oneLiner: 'list 是可修改的有序集合，角色接近 JavaScript Array，用来保存一组同类或相关数据。',
    comparison: {
      javascript: `const users = ["Ada", "Tom"]\nusers.push("Lin")\nconsole.log(users[0])`,
      python: `users = ["Ada", "Tom"]\nusers.append("Lin")\nprint(users[0])`,
      note: '两者都从索引 0 开始。Python 使用 append 添加单个元素，负数索引可以直接从末尾读取。',
    },
    explanation: [
      { code: '["Ada", "Tom"]', description: '方括号创建列表，元素之间用逗号分隔。' },
      { code: 'users[0]', description: '读取第一个元素；users[-1] 可以读取最后一个。' },
      { code: 'users.append("Lin")', description: '原地修改列表，在末尾添加一个元素。' },
    ],
    commonErrors: [
      { title: '索引越界', description: '访问不存在的位置会抛出 IndexError，AI 代码应先确认列表非空。', code: `items = []\nprint(items[0])  # IndexError` },
      { title: '把 append 当成返回新列表', description: 'append 原地修改并返回 None。', code: `users = users.append("Lin")  # users 变成 None` },
    ],
    realWorld: { title: '整理 API 返回结果', description: '项目常把符合条件的记录逐个加入结果列表。', code: `active_users = []\nfor user in users:\n    if user.is_active:\n        active_users.append(user)` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `tasks = ["build", "test"]\ntasks.append("deploy")\nprint(tasks[-1])`, options: ['build', 'test', 'deploy'], answer: 'deploy', explanation: 'append 把 deploy 放到末尾，-1 读取最后一个元素。' },
    simulatedOutput: 'deploy',
  }),
  lesson({
    id: 'tuples', order: 2, title: 'tuple 元组', subtitle: '不会被意外修改的有序数据', duration: 10, difficulty: 2, importance: 'frequent',
    oneLiner: 'tuple 是不可修改的有序集合，适合表示结构固定的一组值。',
    comparison: {
      javascript: `const point = Object.freeze([120, 30])\nconst [lng, lat] = point`,
      python: `point = (120, 30)\nlng, lat = point`,
      note: 'JavaScript 没有原生 tuple 运行时类型；Python 元组可直接解包，常用于函数返回多个值。',
    },
    explanation: [
      { code: '(120, 30)', description: '圆括号表达元组，真正关键的是逗号。' },
      { code: 'single = (42,)', description: '单元素元组必须保留尾部逗号。' },
      { code: 'lng, lat = point', description: '按位置解包到多个变量。' },
    ],
    commonErrors: [
      { title: '尝试修改元素', description: 'tuple 不支持按索引赋值。', code: `point[0] = 121  # TypeError` },
      { title: '漏掉单元素逗号', description: '(42) 只是整数 42，不是元组。' },
    ],
    realWorld: { title: '数据库查询结果与坐标', description: '固定结构的返回值经常通过元组解包获得语义明确的名字。', code: `status_code, payload = call_api()\nif status_code != 200:\n    raise ApiError(payload)` },
    exercise: { type: 'fill', prompt: '创建一个只包含字符串 "admin" 的元组。', code: `roles = ___`, options: ['("admin",)', '("admin")', '["admin"]'], answer: '("admin",)', explanation: '单元素元组需要逗号；否则括号只改变运算优先级。' },
    simulatedOutput: "('admin',)",
  }),
  lesson({
    id: 'dictionaries', order: 3, title: 'dict 字典', subtitle: '用键快速找到对应的值', duration: 14, difficulty: 2, importance: 'must',
    oneLiner: 'dict 保存键值对，最像 JavaScript 普通对象，也是 JSON、配置和 API 数据的核心形状。',
    comparison: {
      javascript: `const user = {\n  name: "Tom",\n  age: 18\n}\nconsole.log(user.name)`,
      python: `user = {\n    "name": "Tom",\n    "age": 18,\n}\nprint(user["name"])`,
      note: 'Python 字典的键需要明确写出字符串引号，常用 [] 或 get 读取；不能写 user.name。',
    },
    explanation: [
      { code: '{"name": "Tom"}', description: '冒号左侧是键，右侧是值。' },
      { code: 'user["name"]', description: '严格读取；键不存在时抛出 KeyError。' },
      { code: 'user.get("email")', description: '安全读取；键不存在时返回 None，也可提供默认值。' },
    ],
    commonErrors: [
      { title: '沿用 JavaScript 点语法', description: '普通 dict 没有 name 属性，应按键读取。', code: `user.name  # AttributeError` },
      { title: '混淆缺失与空值', description: 'get 返回 None 时，可能是键不存在，也可能键明确对应 None。' },
    ],
    realWorld: { title: '解析接口 JSON', description: 'HTTP 客户端把 JSON 对象解析为 dict，再逐层读取。', code: `data = response.json()\nrequest_id = data.get("request_id")\nitems = data.get("items", [])` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `config = {"debug": True}\nprint(config.get("port", 8000))`, options: ['None', '8000', 'KeyError'], answer: '8000', explanation: 'port 不存在时，get 返回第二个参数指定的默认值。' },
    simulatedOutput: '8000',
  }),
  lesson({
    id: 'sets', order: 4, title: 'set 集合', subtitle: '去重与快速成员判断', duration: 10, difficulty: 2, importance: 'frequent',
    oneLiner: 'set 是无序且不重复的集合，最适合去重、权限交集和快速成员判断。',
    comparison: {
      javascript: `const tags = new Set(["ai", "api", "ai"])\ntags.add("python")\ntags.has("api")`,
      python: `tags = {"ai", "api", "ai"}\ntags.add("python")\n"api" in tags`,
      note: '两者概念接近。Python 空集合必须写 set()，因为 {} 表示空字典。',
    },
    explanation: [
      { code: 'set(values)', description: '从其他可迭代对象创建集合并自动去重。' },
      { code: 'a & b', description: '集合交集：同时出现在 a 和 b 中的元素。' },
      { code: 'a | b', description: '集合并集：合并双方所有不重复元素。' },
    ],
    commonErrors: [
      { title: '用 {} 创建空集合', description: '{} 的类型是 dict；空集合应写 set()。' },
      { title: '依赖集合顺序', description: '不要用 set 作为需要稳定展示顺序的数据结构。' },
    ],
    realWorld: { title: '权限交集', description: '判断用户权限是否包含接口允许的任一角色。', code: `user_roles = set(user.roles)\nallowed_roles = {"admin", "editor"}\nif not user_roles & allowed_roles:\n    raise PermissionError()` },
    exercise: { type: 'predict', prompt: '下面集合的长度是多少？', code: `ids = {1, 2, 2, 3, 3}\nprint(len(ids))`, options: ['3', '5', '2'], answer: '3', explanation: 'set 会去掉重复值，最终只有 1、2、3。' },
    simulatedOutput: '3',
  }),
  lesson({
    id: 'string-methods', order: 5, title: '字符串常用方法', subtitle: '清洗、拆分和判断文本', duration: 13, difficulty: 2, importance: 'must',
    oneLiner: '字符串方法返回处理后的新字符串，真实数据处理中最常见的是 strip、split、join、replace。',
    comparison: {
      javascript: `const tags = " ai, api ".trim().split(",")\nconst path = ["users", "42"].join("/")`,
      python: `tags = " ai, api ".strip().split(",")\npath = "/".join(["users", "42"])`,
      note: 'Python 的 join 写在分隔符上：separator.join(items)，方向和 JavaScript Array.join 相反。',
    },
    explanation: [
      { code: 'text.strip()', description: '移除首尾空白；不会改变中间内容。' },
      { code: 'text.split(",")', description: '按分隔符切成 list。' },
      { code: '",".join(items)', description: '把多个字符串连接成一个字符串。' },
    ],
    commonErrors: [
      { title: '忘记接收返回值', description: '字符串不可变，strip 不会原地修改。', code: `name.strip()\nprint(name)  # 仍保留原空白` },
      { title: 'join 的元素不是字符串', description: '数字列表需先转换成 str。', code: `",".join([1, 2])  # TypeError` },
    ],
    realWorld: { title: '清理模型输出', description: '自动化流程常先清理 Markdown 包裹，再解析 JSON。', code: 'content = response_text.strip()\ncontent = content.removeprefix("```json")\ncontent = content.removesuffix("```").strip()' },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `raw = " python,fastapi "\nprint(raw.strip().split(","))`, options: ["['python', 'fastapi']", "[' python', 'fastapi ']", 'pythonfastapi'], answer: "['python', 'fastapi']", explanation: 'strip 先去掉整体首尾空格，split 再按逗号拆分。' },
    simulatedOutput: "['python', 'fastapi']",
  }),
  lesson({
    id: 'list-methods', order: 6, title: 'list 常用方法', subtitle: '增删、排序与复制', duration: 14, difficulty: 2, importance: 'must',
    oneLiner: 'list 方法大多直接修改原列表；阅读代码时要分清原地修改和返回新值。',
    comparison: {
      javascript: `items.push(value)\nitems.splice(0, 1)\nitems.sort((a, b) => a.score - b.score)`,
      python: `items.append(value)\nitems.pop(0)\nitems.sort(key=lambda x: x["score"])`,
      note: 'append、extend、remove、pop、sort 都会修改原列表；sorted(items) 则返回新列表。',
    },
    explanation: [
      { code: 'items.extend(more)', description: '把另一个可迭代对象的元素逐个加入。' },
      { code: 'items.pop()', description: '删除并返回最后一个元素，也可指定索引。' },
      { code: 'sorted(items)', description: '返回排序后的新列表，不改原列表。' },
    ],
    commonErrors: [
      { title: 'append 与 extend 混淆', description: 'append(list) 会嵌套一个列表，extend(list) 才会逐个加入。' },
      { title: '接收 sort 的返回值', description: 'sort 返回 None，应先排序再使用原变量。', code: `items = items.sort()  # items 变成 None` },
    ],
    realWorld: { title: '按时间排序接口结果', description: '返回数据前常按创建时间倒序排列。', code: `records.sort(\n    key=lambda item: item["created_at"],\n    reverse=True,\n)` },
    exercise: { type: 'choice', prompt: '哪个写法会返回新列表且保留原列表不变？', options: ['sorted(items)', 'items.sort()', 'items.append(1)'], answer: 'sorted(items)', explanation: 'sorted 是内置函数，返回新列表；sort 和 append 都原地修改。' },
    simulatedOutput: '[1, 2, 3]',
  }),
  lesson({
    id: 'dict-methods', order: 7, title: 'dict 常用方法', subtitle: '安全读取与遍历键值', duration: 13, difficulty: 2, importance: 'must',
    oneLiner: 'dict 的 get、items、update、pop 覆盖了项目中大多数配置与 JSON 处理场景。',
    comparison: {
      javascript: `const role = user.role ?? "guest"\nObject.entries(user).forEach(([key, value]) => {})`,
      python: `role = user.get("role", "guest")\nfor key, value in user.items():\n    pass`,
      note: 'items() 同时给出键和值；keys() 和 values() 提供各自的动态视图。',
    },
    explanation: [
      { code: 'data.get(key, default)', description: '读取键，缺失时返回默认值。' },
      { code: 'data.items()', description: '遍历所有 (key, value) 键值对。' },
      { code: 'data.update(other)', description: '用另一组键值更新字典，重复键会被覆盖。' },
    ],
    commonErrors: [
      { title: '遍历时修改字典大小', description: '循环 data.items() 时新增或删除键可能触发 RuntimeError。' },
      { title: '用 get 掩盖必需字段', description: '业务必需的键若缺失，默认 None 可能让错误延迟到更深处。' },
    ],
    realWorld: { title: '合并默认配置', description: '先复制默认配置，再用用户配置覆盖相同键。', code: `config = DEFAULT_CONFIG.copy()\nconfig.update(user_config)\ntimeout = config.get("timeout", 30)` },
    exercise: { type: 'fill', prompt: '补全遍历，让 key 和 value 同时可用。', code: `for key, value in config.___():\n    print(key, value)`, options: ['items', 'keys', 'entries'], answer: 'items', explanation: 'dict.items() 产生键值对；entries 是 JavaScript Object API 的说法。' },
    simulatedOutput: 'debug True',
  }),
  lesson({
    id: 'slicing', order: 8, title: '切片', subtitle: '优雅地截取序列', duration: 12, difficulty: 3, importance: 'must',
    oneLiner: '切片使用 [start:stop:step] 截取列表或字符串，stop 位置本身不包含在结果中。',
    comparison: {
      javascript: `const firstThree = items.slice(0, 3)\nconst copy = items.slice()\nconst reversed = [...items].reverse()`,
      python: `first_three = items[:3]\ncopy = items[:]\nreversed_items = items[::-1]`,
      note: 'Python 切片支持省略起点、终点和负步长；它通常创建浅拷贝。',
    },
    explanation: [
      { code: 'items[1:4]', description: '获取索引 1、2、3，不包含索引 4。' },
      { code: 'items[:3]', description: '从开头取到索引 3 之前。' },
      { code: 'items[::2]', description: '每隔一个元素取一个。' },
    ],
    commonErrors: [
      { title: '误以为包含 stop', description: '与 range 一样，切片右边界不包含在结果内。' },
      { title: '把浅拷贝当深拷贝', description: '外层列表虽是新的，内部嵌套对象仍可能共享引用。' },
    ],
    realWorld: { title: '限制预览数据', description: '日志和提示词通常只取前几条，避免内容过长。', code: `preview = records[:5]\ncontext = text[:2000]\nrecent_messages = messages[-10:]` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `numbers = [0, 1, 2, 3, 4]\nprint(numbers[1:4])`, options: ['[1, 2, 3]', '[1, 2, 3, 4]', '[0, 1, 2, 3]'], answer: '[1, 2, 3]', explanation: '起点 1 包含，终点 4 不包含。' },
    simulatedOutput: '[1, 2, 3]',
  }),
  lesson({
    id: 'enumerate', order: 9, title: 'enumerate', subtitle: '遍历时同时得到序号', duration: 9, difficulty: 2, importance: 'frequent',
    oneLiner: 'enumerate 在遍历元素时同时提供索引，避免手动维护计数器。',
    comparison: {
      javascript: `items.forEach((item, index) => {\n  console.log(index, item)\n})`,
      python: `for index, item in enumerate(items):\n    print(index, item)`,
      note: 'enumerate 返回索引和值的组合，还可以用 start=1 让显示序号从 1 开始。',
    },
    explanation: [
      { code: 'enumerate(items)', description: '生成 (index, item)，默认索引从 0 开始。' },
      { code: 'for index, item in ...', description: '循环中直接解包索引和值。' },
      { code: 'enumerate(items, start=1)', description: '让序号从 1 开始，适合展示排名。' },
    ],
    commonErrors: [
      { title: '手动维护 index', description: 'index += 1 容易遗漏，enumerate 更可靠。' },
      { title: '误以为直接返回列表', description: 'enumerate 是惰性对象；调试时可用 list(enumerate(items)) 查看。' },
    ],
    realWorld: { title: '构建带编号的 Prompt', description: '把检索文档编号后交给模型，方便引用来源。', code: `lines = []\nfor index, doc in enumerate(documents, start=1):\n    lines.append(f"[{index}] {doc.content}")` },
    exercise: { type: 'predict', prompt: '第一次循环打印什么？', code: `for index, name in enumerate(["Ada", "Lin"], start=1):\n    print(index, name)`, options: ['1 Ada', '0 Ada', 'Ada 1'], answer: '1 Ada', explanation: 'start=1 让第一个索引为 1，随后解包为 index 和 name。' },
    simulatedOutput: '1 Ada\n2 Lin',
  }),
  lesson({
    id: 'zip', order: 10, title: 'zip', subtitle: '并行组合多组数据', duration: 10, difficulty: 3, importance: 'frequent',
    oneLiner: 'zip 把多个序列按相同位置配对，常用于组合字段、批量映射或并行遍历。',
    comparison: {
      javascript: `const pairs = names.map((name, i) => [name, scores[i]])`,
      python: `pairs = zip(names, scores)\nfor name, score in pairs:\n    print(name, score)`,
      note: 'zip 会在最短序列结束时停止，并返回惰性迭代器；需要列表时显式调用 list。',
    },
    explanation: [
      { code: 'zip(names, scores)', description: '按位置生成 (name, score) 元组。' },
      { code: 'dict(zip(keys, values))', description: '快速把键列表和值列表组合成字典。' },
      { code: 'zip(*rows)', description: '把行列结构转置；先看懂即可。' },
    ],
    commonErrors: [
      { title: '忽略长度不同', description: '默认 zip 会静默截断到最短序列；Python 3.10+ 可用 strict=True 检查。' },
      { title: '重复消费 zip', description: 'zip 是迭代器，遍历一次后就耗尽。' },
    ],
    realWorld: { title: '组装模型输出字段', description: '把字段名与模型抽取的值组合成结构化结果。', code: `fields = ["title", "summary", "sentiment"]\nvalues = parse_model_output(text)\nresult = dict(zip(fields, values, strict=True))` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `keys = ["name", "age"]\nvalues = ["Tom", 18]\nprint(dict(zip(keys, values)))`, options: ["{'name': 'Tom', 'age': 18}", "[('name', 'Tom')]", "{'Tom': 'name'}"], answer: "{'name': 'Tom', 'age': 18}", explanation: 'zip 先配对，dict 再把键值对转为字典。' },
    simulatedOutput: "{'name': 'Tom', 'age': 18}",
  }),
  lesson({
    id: 'list-comprehensions', order: 11, title: '列表推导式', subtitle: '读懂 Python 项目的高频简写', duration: 15, difficulty: 3, importance: 'must',
    oneLiner: '列表推导式用一行表达“遍历、转换、可选过滤”，相当于常见的 map + filter。',
    comparison: {
      javascript: `const names = users\n  .filter(user => user.active)\n  .map(user => user.name)`,
      python: `names = [\n    user.name\n    for user in users\n    if user.active\n]`,
      note: '阅读顺序是：生成什么 → 遍历什么 → 满足什么条件。复杂逻辑应改回普通循环。',
    },
    explanation: [
      { code: '[x * 2 for x in numbers]', description: '遍历 numbers，把每个 x 乘 2 后放入新列表。' },
      { code: '[x for x in items if x]', description: '只保留条件为真的元素。' },
      { code: '[f(x) for x in items]', description: '对每个元素调用函数，角色类似 map。' },
    ],
    commonErrors: [
      { title: '塞入太多逻辑', description: '多层循环和复杂条件会显著降低可读性，应拆成普通 for。' },
      { title: '只为了副作用', description: '不要用推导式调用 print 或写数据库，这会创建无用列表。' },
    ],
    realWorld: { title: '序列化 API 数据', description: '把 ORM 对象转换为接口所需的字典列表。', code: `results = [\n    {"id": user.id, "name": user.name}\n    for user in users\n    if user.is_active\n]` },
    exercise: { type: 'choice', prompt: '哪一项会得到 [4, 8]？', options: ['[x * 2 for x in [1, 2, 3, 4] if x % 2 == 0]', '[x for x in [1, 2, 3, 4] if x * 2]', '[x * 2 if x % 2 == 0]'], answer: '[x * 2 for x in [1, 2, 3, 4] if x % 2 == 0]', explanation: '先保留偶数 2、4，再分别乘 2。' },
    simulatedOutput: '[4, 8]',
  }),
  lesson({
    id: 'dict-comprehensions', order: 12, title: '字典推导式', subtitle: '批量构建键值映射', duration: 13, difficulty: 3, importance: 'frequent',
    oneLiner: '字典推导式从可迭代数据快速生成 key: value 映射，常见于索引、配置和字段转换。',
    comparison: {
      javascript: `const usersById = Object.fromEntries(\n  users.map(user => [user.id, user])\n)`,
      python: `users_by_id = {\n    user.id: user\n    for user in users\n}`,
      note: '核心结构是 {key_expression: value_expression for item in source}，重复键会保留最后一个值。',
    },
    explanation: [
      { code: '{x: x ** 2 for x in range(3)}', description: '生成数字到其平方值的映射。' },
      { code: '{k: v for k, v in data.items() if v}', description: '遍历原字典并过滤假值。' },
      { code: '{user.id: user for user in users}', description: '把列表重建为按 ID 快速查找的字典。' },
    ],
    commonErrors: [
      { title: '键不可哈希', description: 'list 和 dict 不能作为字典键，通常使用字符串、数字或元组。' },
      { title: '重复键静默覆盖', description: '若多个元素生成相同 key，前面的值会被后面的覆盖。' },
    ],
    realWorld: { title: '为批量数据建立索引', description: '把查询结果按 ID 索引，避免在循环里反复线性查找。', code: `products_by_id = {\n    product.id: product\n    for product in products\n}\nproduct = products_by_id.get(order.product_id)` },
    exercise: { type: 'predict', prompt: '下面代码输出什么？', code: `words = ["ai", "agent"]\nlengths = {word: len(word) for word in words}\nprint(lengths["agent"])`, options: ['5', '2', 'agent'], answer: '5', explanation: '推导式把每个单词映射到其长度，agent 长度为 5。' },
    simulatedOutput: '5',
  }),
]
