export type Difficulty = 1 | 2 | 3 | 4 | 5
export type Importance = 'must' | 'frequent' | 'read' | 'skip'
export type LessonStatus = 'available' | 'coming-soon'

export interface ApiResponse<T> {
  code: number
  message: string
  data: T | null
}

export interface CodeComparison {
  javascript: string
  python: string
  note: string
}

export interface ExplanationLine {
  code: string
  description: string
}

export interface Exercise {
  type: 'fill' | 'choice' | 'predict' | 'debug'
  prompt: string
  code?: string
  options: string[]
  answer: string
  explanation: string
}

export interface Lesson {
  id: string
  stageId: string
  order: number
  title: string
  subtitle: string
  duration: number
  difficulty: Difficulty
  importance: Importance
  status: LessonStatus
  oneLiner: string
  comparison: CodeComparison
  explanation: ExplanationLine[]
  commonErrors: { title: string; description: string; code?: string }[]
  realWorld: { title: string; description: string; code: string }
  exercise: Exercise
  simulatedOutput?: string
}

export interface Stage {
  id: string
  order: number
  title: string
  shortTitle: string
  description: string
  lessonCount: number
  status: 'active' | 'coming-soon'
  lessonIds: string[]
}

export interface PracticeItem {
  id: string
  lessonId: string
  title: string
  stageId: string
  exercise: Exercise
}

export interface CourseSummary {
  id: string
  title: string
  description: string
}

export interface CourseCatalog {
  course: CourseSummary
  stages: Stage[]
  lessons: Lesson[]
  practiceChallenges: PracticeItem[]
}

export interface LearningState {
  completed: string[]
  bookmarked: string[]
  history: { lessonId: string; completedAt: string }[]
  wrongLessonIds: string[]
  exerciseAttempts: number
  exerciseCorrect: number
}
