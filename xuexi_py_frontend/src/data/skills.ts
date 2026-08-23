import type { Skill } from '../types/course'
import { advancedSkills } from './advancedCatalog'
import { lessons } from './course'

const definitions: Omit<Skill, 'lessonIds'>[] = [
  { id: 'python-foundation', stageId: 'foundation', order: 1, title: 'Python 语法基础', description: '能独立使用变量、类型、条件和循环完成小型脚本。', level: 'foundation', masteryThreshold: 80, prerequisiteIds: [] },
  { id: 'data-structures', stageId: 'structures', order: 2, title: '数据结构与表达式', description: '熟练选择和操作 list、tuple、dict、set，并使用切片和推导式。', level: 'foundation', masteryThreshold: 80, prerequisiteIds: ['python-foundation'] },
  { id: 'function-design', stageId: 'functions', order: 3, title: '函数设计', description: '能设计清晰的函数边界，理解参数、返回值、作用域和参数转发。', level: 'foundation', masteryThreshold: 80, prerequisiteIds: ['data-structures'] },
  { id: 'module-architecture', stageId: 'modules', order: 4, title: '模块与项目结构', description: '理解 import、package 和项目入口，能够阅读真实 Python 仓库。', level: 'intermediate', masteryThreshold: 80, prerequisiteIds: ['function-design'] },
  { id: 'error-reliability', stageId: 'errors', order: 5, title: '异常与可靠性', description: '能设计失败路径、捕获恰当异常并定义稳定的业务错误。', level: 'intermediate', masteryThreshold: 80, prerequisiteIds: ['function-design'] },
  { id: 'file-data-processing', stageId: 'files', order: 6, title: '文件与数据处理', description: '使用 pathlib、JSON、CSV 和环境变量构建可维护的数据脚本。', level: 'intermediate', masteryThreshold: 80, prerequisiteIds: ['error-reliability'] },
  { id: 'object-modeling', stageId: 'oop', order: 7, title: '对象建模', description: '用类、组合和协议表达业务模型，并读懂框架中的对象关系。', level: 'intermediate', masteryThreshold: 80, prerequisiteIds: ['function-design'] },
  { id: 'advanced-language', stageId: 'advanced', order: 8, title: 'Python 进阶语言能力', description: '理解装饰器、生成器、迭代器、类型系统和上下文管理器。', level: 'advanced', masteryThreshold: 80, prerequisiteIds: ['object-modeling', 'module-architecture'] },
  { id: 'async-concurrency', stageId: 'async', order: 9, title: '异步与并发基础', description: '理解协程、事件循环和异步任务，能识别阻塞与并发边界。', level: 'advanced', masteryThreshold: 80, prerequisiteIds: ['advanced-language'] },
  { id: 'python-engineering', stageId: 'engineering', order: 10, title: 'Python 工程化', description: '掌握环境、依赖、代码质量、测试和可复现项目配置。', level: 'advanced', masteryThreshold: 80, prerequisiteIds: ['module-architecture', 'error-reliability'] },
  { id: 'fastapi-backend', stageId: 'web', order: 11, title: 'FastAPI 后端开发', description: '能设计、实现和测试具有验证、依赖和错误处理的 HTTP API。', level: 'advanced', masteryThreshold: 80, prerequisiteIds: ['python-engineering', 'async-concurrency'] },
  { id: 'database-persistence', stageId: 'database', order: 12, title: '数据库持久化', description: '理解 SQL、ORM、Session 和 CRUD，并能维护数据模型。', level: 'advanced', masteryThreshold: 80, prerequisiteIds: ['fastapi-backend'] },
  { id: 'ai-application', stageId: 'ai', order: 13, title: 'AI 应用工程', description: '能构建具备流式输出、工具调用、RAG 和安全边界的 AI 应用。', level: 'expert', masteryThreshold: 80, prerequisiteIds: ['fastapi-backend', 'database-persistence'] },
]

export const skills: Skill[] = definitions.map((skill) => ({
  ...skill,
  lessonIds: lessons.filter((lesson) => lesson.stageId === skill.stageId).map((lesson) => lesson.id),
})).concat(advancedSkills)
