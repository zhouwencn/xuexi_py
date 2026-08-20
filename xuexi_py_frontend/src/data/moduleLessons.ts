import type { Lesson } from '../types/course'

type ModuleLesson = Omit<Lesson, 'stageId' | 'status'>

const lesson = (data: ModuleLesson): Lesson => ({
  ...data,
  stageId: 'modules',
  status: 'available',
})

export const moduleLessons: Lesson[] = [
  lesson({
    id: 'import-modules', order: 1, title: 'import', subtitle: '把其他模块的能力带进当前文件', duration: 13, difficulty: 2, importance: 'must',
    oneLiner: 'import 加载一个模块，并通过模块名访问它暴露的函数、类和常量。',
    comparison: {
      javascript: `import path from "node:path"\n\nconst file = path.join("data", "users.json")`,
      python: `import pathlib\n\nfile = pathlib.Path("data") / "users.json"`,
      note: 'Python 常保留模块命名空间，例如 pathlib.Path；看到名字前缀时就能判断能力来自哪里。',
    },
    explanation: [
      { code: 'import pathlib', description: '加载标准库 pathlib，并在当前文件创建 pathlib 名字。' },
      { code: 'pathlib.Path(...)', description: '通过模块命名空间访问 Path 类。' },
      { code: 'import numpy as np', description: 'as 为模块指定别名，np 是社区约定的常见别名。' },
    ],
    commonErrors: [
      { title: '模块没有安装', description: '第三方包缺失时会出现 ModuleNotFoundError，需要检查虚拟环境和依赖文件。' },
      { title: '文件名遮蔽第三方模块', description: '把自己的文件命名为 requests.py，可能导致 import requests 加载错文件。' },
    ],
    realWorld: { title: '先读 import 判断文件职责', description: '阅读陌生文件时，顶部导入能快速暴露它依赖 HTTP、JSON 和日志。', code: `import json\nimport logging\n\nimport httpx\n\nlogger = logging.getLogger(__name__)` },
    exercise: { type: 'fill', prompt: '补全通过模块命名空间访问 Path 的代码。', code: `___ pathlib\nfile = pathlib.Path("config.json")`, options: ['import', 'require', 'include'], answer: 'import', explanation: 'Python 使用 import module_name 加载模块。' },
    simulatedOutput: 'data/users.json',
  }),
  lesson({
    id: 'from-import', order: 2, title: 'from ... import ...', subtitle: '直接导入需要的名字', duration: 12, difficulty: 2, importance: 'must',
    oneLiner: 'from module import name 只把指定名字引入当前文件，调用时无需再写模块前缀。',
    comparison: {
      javascript: `import { readFile } from "node:fs/promises"\n\nconst data = await readFile(path)`,
      python: `from pathlib import Path\n\ntext = Path("config.json").read_text()`,
      note: '它类似 JavaScript named import，但 Python 导入的是运行时对象；名字冲突时要使用 as 别名。',
    },
    explanation: [
      { code: 'from pathlib import Path', description: '从 pathlib 模块中取出 Path 类。' },
      { code: 'from app.models import User, Order', description: '可以一次导入多个明确名字。' },
      { code: 'from x import y as z', description: '导入时重命名，避免冲突或缩短长名字。' },
    ],
    commonErrors: [
      { title: '使用星号导入', description: 'from module import * 会污染命名空间，让名字来源难以追踪。' },
      { title: '导入了不存在的名字', description: '模块存在但目标名字不存在时会抛出 ImportError。' },
    ],
    realWorld: { title: 'FastAPI 路由文件', description: '项目通常直接导入框架类和本地依赖，让声明保持简洁。', code: `from fastapi import APIRouter, Depends\nfrom sqlalchemy.orm import Session\n\nfrom app.database import get_db\n\nrouter = APIRouter()` },
    exercise: { type: 'choice', prompt: '哪个写法允许直接调用 Path(...)？', options: ['from pathlib import Path', 'import pathlib.Path', 'from Path import pathlib'], answer: 'from pathlib import Path', explanation: '该写法把 Path 直接绑定到当前模块。' },
    simulatedOutput: 'config.json',
  }),
  lesson({
    id: 'custom-modules', order: 3, title: '自定义模块', subtitle: '一个 .py 文件就是一个模块', duration: 14, difficulty: 2, importance: 'must',
    oneLiner: '通常每个 .py 文件就是一个模块；把相关函数拆进独立文件，再从其他文件导入。',
    comparison: {
      javascript: `// utils.js\nexport function slugify(text) { /* ... */ }\n\n// main.js\nimport { slugify } from "./utils.js"`,
      python: `# utils.py\ndef slugify(text):\n    return text.lower().replace(" ", "-")\n\n# main.py\nfrom utils import slugify`,
      note: 'Python 不需要 export 关键字：模块顶层定义默认都可被导入，下划线开头表示内部使用的约定。',
    },
    explanation: [
      { code: 'utils.py', description: '文件名会成为模块名，推荐小写和下划线。' },
      { code: 'from utils import slugify', description: '从同一导入搜索路径中的 utils.py 获取函数。' },
      { code: 'def _helper():', description: '前导下划线表示内部实现，不建议模块外依赖。' },
    ],
    commonErrors: [
      { title: '直接运行位置不对', description: '从不同目录启动脚本可能改变导入搜索路径，导致本地模块找不到。' },
      { title: '模块之间循环导入', description: 'a 导入 b、b 又导入 a，可能在初始化未完成时访问不存在的名字。' },
    ],
    realWorld: { title: '按职责拆分 AI 脚本', description: '读取、模型调用和保存逻辑分别放入模块，main 只负责编排。', code: `# main.py\nfrom loaders import load_articles\nfrom llm import summarize\nfrom writers import save_report\n\narticles = load_articles()\nreport = summarize(articles)\nsave_report(report)` },
    exercise: { type: 'fill', prompt: '从 helpers.py 导入函数 clean_text。', code: `from ___ import clean_text`, options: ['helpers', 'helpers.py', './helpers'], answer: 'helpers', explanation: '导入模块时写模块名，不包含 .py 扩展名。' },
    simulatedOutput: 'python-modules',
  }),
  lesson({
    id: 'packages', order: 4, title: 'package 包', subtitle: '用目录组织一组相关模块', duration: 14, difficulty: 3, importance: 'must',
    oneLiner: 'package 是可被导入的模块目录，用于把大型项目按业务或技术职责分组。',
    comparison: {
      javascript: `src/\n  api/\n    users.js\n    orders.js\n\nimport { getUser } from "./api/users.js"`,
      python: `app/\n    api/\n        users.py\n        orders.py\n\nfrom app.api.users import get_user`,
      note: '点号对应目录层级。看到 app.services.billing 时，可以直接沿目录寻找 app/services/billing.py。',
    },
    explanation: [
      { code: 'app.api.users', description: 'app 和 api 是包层级，users 是模块。' },
      { code: 'from app.api import users', description: '导入子模块并保留 users 命名空间。' },
      { code: 'python -m app.main', description: '按模块方式从项目根目录运行包内入口。' },
    ],
    commonErrors: [
      { title: '从包内部直接运行深层文件', description: 'python app/api/users.py 可能破坏包上下文，优先从根目录使用 -m。' },
      { title: '目录名包含非法字符', description: '包名应是有效 Python 标识符，通常使用小写下划线。' },
    ],
    realWorld: { title: '常见 FastAPI 分层', description: 'API、模型、服务和数据库分别成为包，导入路径直接暴露架构关系。', code: `app/\n├── api/          # HTTP 路由\n├── models/       # 数据库模型\n├── schemas/      # Pydantic 模型\n├── services/     # 业务逻辑\n└── repositories/ # 数据访问` },
    exercise: { type: 'predict', prompt: '模块路径 app.services.email 通常对应哪个文件？', options: ['app/services/email.py', 'app.services/email.js', 'services/app/email.py'], answer: 'app/services/email.py', explanation: '导入路径中的点号通常映射为目录分隔。' },
    simulatedOutput: 'app/services/email.py',
  }),
  lesson({
    id: 'init-py', order: 5, title: '__init__.py', subtitle: '定义 package 的入口表面', duration: 13, difficulty: 3, importance: 'frequent',
    oneLiner: '__init__.py 在包首次导入时执行，并可决定外部使用者从这个包能方便地导入哪些名字。',
    comparison: {
      javascript: `// components/index.js\nexport { Button } from "./Button.js"\nexport { Modal } from "./Modal.js"`,
      python: `# app/models/__init__.py\nfrom .user import User\nfrom .order import Order\n\n__all__ = ["User", "Order"]`,
      note: '它常扮演 barrel file 的角色，但不应塞入重量级初始化或产生不可控副作用。',
    },
    explanation: [
      { code: '__init__.py', description: '传统上标记目录为普通包；现代 Python 也支持无该文件的命名空间包。' },
      { code: 'from .user import User', description: '把子模块中的 User 重新暴露到当前包。' },
      { code: '__all__', description: '声明包的公共导出名单，主要影响星号导入和工具提示。' },
    ],
    commonErrors: [
      { title: '放入耗时或网络操作', description: '任何导入包的代码都会触发它，导致启动慢且难测试。' },
      { title: '重新导出造成循环导入', description: '大量交叉导入放在 __init__.py 中容易形成依赖环。' },
    ],
    realWorld: { title: '统一模型导入入口', description: 'SQLAlchemy 项目有时统一导入所有模型，确保元数据注册完整。', code: `# app/models/__init__.py\nfrom app.models.order import Order\nfrom app.models.user import User\n\n__all__ = ["Order", "User"]` },
    exercise: { type: 'choice', prompt: '__init__.py 最适合承担哪项职责？', options: ['定义清晰的包级导入入口', '每次导入时请求远程 API', '保存用户运行数据'], answer: '定义清晰的包级导入入口', explanation: '包入口应轻量、明确，避免昂贵副作用。' },
    simulatedOutput: "['Order', 'User']",
  }),
  lesson({
    id: 'dunder-name', order: 6, title: '__name__', subtitle: '判断模块是被运行还是被导入', duration: 12, difficulty: 3, importance: 'must',
    oneLiner: '__name__ 是每个模块都有的特殊变量：直接运行时为 "__main__"，被导入时通常是完整模块名。',
    comparison: {
      javascript: `// ESM 常见入口判断\nif (import.meta.url === process.argv[1]) {\n  main()\n}`,
      python: `if __name__ == "__main__":\n    main()`,
      note: '这段判断把“可复用定义”和“脚本启动行为”分开，是 GitHub Python 项目的高频入口模式。',
    },
    explanation: [
      { code: '__name__', description: 'Python 加载模块时自动设置的模块身份名称。' },
      { code: '"__main__"', description: '当前模块作为程序入口执行时的特殊名称。' },
      { code: 'if __name__ == ...', description: '只有直接运行该模块时才执行缩进内的启动逻辑。' },
    ],
    commonErrors: [
      { title: '下划线数量写错', description: '前后都必须是两个下划线：__name__ 和 __main__。' },
      { title: '把业务定义都放进判断块', description: '这样导入模块时函数和类不会被定义，无法复用。' },
    ],
    realWorld: { title: '可导入、可运行的脚本', description: '函数能被测试导入，同时保留命令行执行入口。', code: `def main() -> None:\n    settings = load_settings()\n    run_pipeline(settings)\n\nif __name__ == "__main__":\n    main()` },
    exercise: { type: 'fill', prompt: '补全标准入口判断。', code: `if __name__ == "___":\n    main()`, options: ['__main__', '__name__', 'main'], answer: '__main__', explanation: '直接执行模块时，__name__ 的值是字符串 "__main__"。' },
    simulatedOutput: 'pipeline started',
  }),
  lesson({
    id: 'dunder-main', order: 7, title: '__main__.py', subtitle: '让整个 package 可以直接运行', duration: 12, difficulty: 3, importance: 'read',
    oneLiner: '__main__.py 是包的命令行入口，让用户可以通过 python -m package_name 启动整个包。',
    comparison: {
      javascript: `// package.json\n{\n  "bin": { "mytool": "./dist/cli.js" }\n}`,
      python: `# mytool/__main__.py\nfrom .cli import main\n\nmain()\n\n# 运行：python -m mytool`,
      note: '不要把 __main__.py 与 __name__ 混淆：一个是特殊文件，一个是模块变量。',
    },
    explanation: [
      { code: 'package/__main__.py', description: '当 package 通过 -m 运行时，Python 会寻找并执行该文件。' },
      { code: 'python -m package', description: '从当前解释器环境按包方式启动。' },
      { code: 'from .cli import main', description: '入口文件保持很薄，只调用真正的 CLI 实现。' },
    ],
    commonErrors: [
      { title: '在文件名中漏掉下划线', description: '必须准确命名为 __main__.py。' },
      { title: '入口文件包含全部业务逻辑', description: '这会降低可测试性；应把逻辑留在普通模块中。' },
    ],
    realWorld: { title: 'CLI 工具入口', description: '自动化工具可同时作为库导入，也能通过模块命令启动。', code: `# reporter/__main__.py\nfrom reporter.cli import main\n\nif __name__ == "__main__":\n    raise SystemExit(main())` },
    exercise: { type: 'choice', prompt: '存在 agent/__main__.py 时，如何按包启动？', options: ['python -m agent', 'python import agent', 'python agent.__main__'], answer: 'python -m agent', explanation: '-m 会按模块或包名称查找并执行入口。' },
    simulatedOutput: 'agent CLI ready',
  }),
  lesson({
    id: 'project-structure', order: 8, title: '项目目录结构', subtitle: '从文件树推断项目架构', duration: 16, difficulty: 3, importance: 'must',
    oneLiner: '项目结构的目标是让入口、业务逻辑、数据访问、配置和测试各有清晰位置。',
    comparison: {
      javascript: `project/\n├── src/\n│   ├── routes/\n│   ├── services/\n│   └── index.ts\n├── tests/\n└── package.json`,
      python: `project/\n├── pyproject.toml\n├── src/app/\n│   ├── api/\n│   ├── services/\n│   └── main.py\n└── tests/`,
      note: 'Python 项目常使用 src 布局，pyproject.toml 类似 package.json，tests 目录通常镜像业务模块。',
    },
    explanation: [
      { code: 'pyproject.toml', description: '项目元数据、依赖和工具配置的现代统一入口。' },
      { code: 'src/app/', description: '实际可导入的应用包，src 布局可避免误导入项目根目录文件。' },
      { code: 'tests/', description: '测试代码，文件名常以 test_ 开头。' },
    ],
    commonErrors: [
      { title: '按文件类型过度分层', description: '大型项目更适合按业务领域组织，再在领域内部区分层次。' },
      { title: '根目录堆满业务文件', description: '入口、配置、模型和工具混在一起，会让导入关系快速失控。' },
    ],
    realWorld: { title: '阅读陌生仓库的顺序', description: '先找依赖和入口，再顺着入口的导入追踪路由、服务与模型。', code: `1. 阅读 README.md 和 pyproject.toml\n2. 找 app/main.py 或 __main__.py\n3. 查看入口注册了哪些 router\n4. 沿 router → service → repository 阅读\n5. 用 tests 验证代码预期行为` },
    exercise: { type: 'choice', prompt: '现代 Python 项目通常从哪个文件了解依赖和工具配置？', options: ['pyproject.toml', 'index.html', 'package-lock.json'], answer: 'pyproject.toml', explanation: 'pyproject.toml 是现代 Python 项目的核心项目配置文件。' },
    simulatedOutput: 'entry: src/app/main.py',
  }),
  lesson({
    id: 'relative-imports', order: 9, title: '相对导入', subtitle: '从当前 package 的位置出发', duration: 14, difficulty: 3, importance: 'frequent',
    oneLiner: '相对导入用前导点号表达“当前包”或“上一级包”，适合包内部关系明确的短路径。',
    comparison: {
      javascript: `import { User } from "../models/User.js"\nimport { settings } from "./config.js"`,
      python: `from ..models import User\nfrom .config import settings`,
      note: '一个点表示当前包，两个点表示上一级包；它依赖 package 上下文，不能随意直接运行深层文件。',
    },
    explanation: [
      { code: 'from .config import settings', description: '从当前包的 config 模块导入。' },
      { code: 'from ..models import User', description: '回到上一级包，再进入 models。' },
      { code: 'from ...core import logger', description: '更多点继续向上，但过深会降低可读性。' },
    ],
    commonErrors: [
      { title: '直接运行含相对导入的文件', description: '模块没有已知父包时会出现 attempted relative import 错误。' },
      { title: '点号层级数错', description: '每多一个点就多向上一层，修改目录后尤其容易失效。' },
    ],
    realWorld: { title: '包内路由导入 schema', description: '同一功能包内部常用相对导入保持路径简短。', code: `# app/users/router.py\nfrom .schemas import UserCreate, UserRead\nfrom .service import UserService\nfrom ..database import get_session` },
    exercise: { type: 'fill', prompt: '从当前包的 config.py 导入 settings。', code: `from ___config import settings`, options: ['.', '..', './'], answer: '.', explanation: 'Python 相对导入使用点号，不使用斜杠。' },
    simulatedOutput: 'settings loaded',
  }),
  lesson({
    id: 'absolute-imports', order: 10, title: '绝对导入', subtitle: '从项目顶层 package 开始定位', duration: 14, difficulty: 3, importance: 'must',
    oneLiner: '绝对导入从顶层 package 名开始，路径完整、来源明确，是多数应用项目的默认选择。',
    comparison: {
      javascript: `import { getUser } from "@/services/users"\n// @ 通常由构建工具配置别名`,
      python: `from app.services.users import get_user\n# app 是真实的顶层 package`,
      note: 'Python 绝对导入不是前端路径别名；解释器会沿 sys.path 和已安装包查找顶层名称。',
    },
    explanation: [
      { code: 'from app.services import billing', description: '从顶层 app 包开始，路径不依赖当前文件位置。' },
      { code: 'sys.path', description: '解释器查找顶层模块和包的目录列表。' },
      { code: 'pip install -e .', description: '开发模式安装项目后，可从不同位置稳定导入应用包。' },
    ],
    commonErrors: [
      { title: '手动修改 sys.path', description: '在代码里 append 路径通常是在掩盖项目安装或启动方式问题。' },
      { title: '从错误目录启动', description: '项目未安装时，工作目录可能决定顶层 app 是否能被找到。' },
    ],
    realWorld: { title: '沿绝对导入阅读 FastAPI', description: '路径直接告诉你代码所在目录和层次，可以从路由追到服务与 schema。', code: `from app.core.config import settings\nfrom app.models.user import User\nfrom app.repositories.user import UserRepository\nfrom app.schemas.user import UserRead` },
    exercise: { type: 'choice', prompt: '哪个是从顶层 app 包开始的绝对导入？', options: ['from app.services.email import send', 'from .services.email import send', 'from ..email import send'], answer: 'from app.services.email import send', explanation: '绝对导入以顶层包名 app 开始，不带前导点。' },
    simulatedOutput: 'import resolved',
  }),
]
