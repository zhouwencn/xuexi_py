import source from '../../../content/expert_lessons.json'
import type { Lesson, Stage } from '../types/course'

interface ExpertLessonSource {
  id: string
  order: number
  title: string
  subtitle: string
  duration: number
  skillIds: string[]
  oneLiner: string
  code: string
  concepts: string[]
  error: string
  question: string
  options: string[]
  answer: string
  explanation: string
}

export const expertStage: Stage = {
  ...source.stage as Omit<Stage, 'lessonCount' | 'lessonIds'>,
  lessonCount: source.lessons.length,
  lessonIds: source.lessons.map((lesson) => lesson.id),
}

export const expertLessonSources = source.lessons as ExpertLessonSource[]

export const expertLessons: Lesson[] = expertLessonSources.map((lesson) => ({
  id: lesson.id,
  stageId: expertStage.id,
  order: lesson.order,
  title: lesson.title,
  subtitle: lesson.subtitle,
  duration: lesson.duration,
  difficulty: 5,
  importance: 'must',
  status: 'available',
  oneLiner: lesson.oneLiner,
  comparison: { javascript: '// 专家阶段不再依赖 JavaScript 语法映射', python: lesson.code, note: '从可观察行为、运行机制和工程权衡三个层次理解代码。' },
  explanation: lesson.concepts.map((description, index) => ({ code: `关键点 ${index + 1}`, description })),
  commonErrors: [{ title: '专家阶段高频误区', description: lesson.error }],
  realWorld: { title: '最小验证实验', description: '运行、修改并记录证据，不要只记结论。', code: lesson.code },
  exercise: { type: 'choice', prompt: lesson.question, options: lesson.options, answer: lesson.answer, explanation: lesson.explanation, difficulty: 5 },
  simulatedOutput: '请运行并记录你的观察',
}))
