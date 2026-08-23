import type { Project } from '../types/course'

export const projects: Project[] = [
  {
    id: 'cli-learning-tracker', order: 1, title: 'Python 命令行学习记录器', summary: '从零实现一个可以记录、统计和导出学习进度的 CLI 工具。', description: '使用标准库完成需求拆解、数据建模、文件持久化、异常处理和 pytest 测试，建立第一个完整 Python 工程闭环。', difficulty: 2, estimatedHours: 8, status: 'available', skillIds: ['python-foundation', 'data-structures', 'function-design', 'file-data-processing', 'python-engineering'],
    tasks: [
      { id: 'cli-model', order: 1, title: '设计学习记录模型', description: '定义一条学习记录的数据结构和输入校验函数。', starterCode: 'def create_record(topic: str, minutes: int) -> dict:\n    # TODO: 校验参数并返回记录\n    pass', acceptanceCriteria: ['topic 去除首尾空白且不能为空', 'minutes 必须是正整数', '返回值至少包含 topic、minutes 和 completed_at'] },
      { id: 'cli-storage', order: 2, title: '实现 JSON 持久化', description: '使用 pathlib 和 json 读取、追加并保存学习记录。', acceptanceCriteria: ['文件不存在时返回空列表', '写入使用 UTF-8', 'JSON 损坏时提供清晰错误', '保存后可以重新读取'] },
      { id: 'cli-report', order: 3, title: '生成学习统计', description: '按主题汇总学习时间，并输出总时长和最常学习主题。', acceptanceCriteria: ['能处理空记录', '按主题正确汇总分钟数', '结果排序稳定', '函数不依赖 print 才能测试'] },
      { id: 'cli-tests', order: 4, title: '补齐测试与命令入口', description: '添加 pytest 测试并实现 main 命令入口。', acceptanceCriteria: ['核心函数具备正常和异常测试', '临时文件测试不会污染项目目录', '可以通过 python -m 方式启动', 'README 包含运行方法'] },
    ],
  },
  {
    id: 'fastapi-course-service', order: 2, title: 'FastAPI 课程目录服务', summary: '实现一个带 PostgreSQL、迁移、验证和测试的课程 API。', description: '以当前学习平台后端为参考，独立设计课程、章节和课时接口，覆盖数据库关系、统一响应、异常处理和 API 测试。', difficulty: 4, estimatedHours: 18, status: 'available', skillIds: ['module-architecture', 'error-reliability', 'object-modeling', 'python-engineering', 'fastapi-backend', 'database-persistence'],
    tasks: [
      { id: 'api-contract', order: 1, title: '设计 API 契约', description: '定义课程列表、课程详情和课时详情的 URL、Schema 与错误响应。', acceptanceCriteria: ['URL 和 HTTP Method 清晰', '请求响应均有 Pydantic Schema', '404 和参数错误格式稳定', '字段命名策略统一'] },
      { id: 'api-models', order: 2, title: '设计数据库模型与迁移', description: '建立课程、阶段、课时关系并生成 Alembic migration。', acceptanceCriteria: ['主键和外键关系正确', '排序字段具备唯一约束', 'migration 可升级和降级', '连接信息不写死在源码'] },
      { id: 'api-routes', order: 3, title: '实现查询接口', description: '使用 SQLAlchemy 2.x 和 FastAPI 实现目录查询。', acceptanceCriteria: ['Session 生命周期清晰', '避免明显 N+1 查询', '结果按业务顺序返回', '不存在的数据返回 404'] },
      { id: 'api-tests', order: 4, title: '完成 API 与数据测试', description: '覆盖成功、缺失数据、无效参数和 seed 幂等性。', acceptanceCriteria: ['测试不依赖生产数据库', '覆盖主要成功路径', '覆盖主要错误路径', 'seed 重复执行不重复插入'] },
    ],
  },
  {
    id: 'ai-knowledge-assistant', order: 3, title: 'AI 知识助手', summary: '构建一个带结构化输出、检索、工具安全和质量评估的 AI 应用。', description: '从文档导入到检索问答，完成异步 API、引用返回、工具调用边界、日志和基础评估。', difficulty: 5, estimatedHours: 24, status: 'available', skillIds: ['async-concurrency', 'python-engineering', 'fastapi-backend', 'database-persistence', 'ai-application'],
    tasks: [
      { id: 'ai-ingestion', order: 1, title: '文档导入与切分', description: '设计可重复执行的文档导入流程和切分策略。', acceptanceCriteria: ['重复导入不会无限产生副本', '保留文档来源和片段位置', '失败文档有明确日志', '切分策略可以配置'] },
      { id: 'ai-retrieval', order: 2, title: '实现检索与引用', description: '根据问题检索相关片段，并在答案中返回来源引用。', acceptanceCriteria: ['检索与生成逻辑分离', '答案包含引用 ID', '无相关资料时明确说明', '输入长度受到限制'] },
      { id: 'ai-tools', order: 3, title: '建立工具调用安全边界', description: '实现参数验证、允许列表和需要确认的危险操作。', acceptanceCriteria: ['模型参数使用 Schema 验证', '工具采用允许列表', '危险操作不会自动执行', '错误不会泄露敏感配置'] },
      { id: 'ai-evaluation', order: 4, title: '增加评估与可观测性', description: '建立最小评估集，并记录延迟、错误和引用命中情况。', acceptanceCriteria: ['至少准备 10 条评估问题', '记录请求耗时和失败原因', '可以比较两次版本结果', '日志不包含 API Key'] },
    ],
  },
]
