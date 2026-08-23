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
  id?: string
  type: 'fill' | 'choice' | 'predict' | 'debug' | 'code' | 'review' | 'incident' | 'design'
  prompt: string
  code?: string
  options: string[]
  answer: string
  explanation: string
  difficulty?: Difficulty
  starterCode?: string
  testCases?: { name: string; code: string }[]
  hints?: string[]
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
  exercises?: Exercise[]
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
  skills: Skill[]
  projects: Project[]
  labs: LearningLab[]
}

export type SkillLevel = 'foundation' | 'intermediate' | 'advanced' | 'expert'

export interface Skill {
  id: string
  stageId: string
  order: number
  title: string
  description: string
  level: SkillLevel
  masteryThreshold: number
  lessonIds: string[]
  prerequisiteIds: string[]
}

export interface ProjectTask {
  id: string
  order: number
  title: string
  description: string
  starterCode?: string
  acceptanceCriteria: string[]
  solutionNotes?: string
}

export interface Project {
  id: string
  order: number
  title: string
  summary: string
  description: string
  difficulty: Difficulty
  estimatedHours: number
  status: LessonStatus
  skillIds: string[]
  tasks: ProjectTask[]
}

export type LabLevel = 'advanced' | 'expert'
export type LabKind = 'engineering' | 'source' | 'performance' | 'incident' | 'architecture' | 'ai'

export interface LabStep {
  id: string
  order: number
  title: string
  instructions: string
  commands: string[]
  verification: string[]
  hints: string[]
}

export interface LearningLab {
  id: string
  order: number
  title: string
  summary: string
  description: string
  level: LabLevel
  kind: LabKind
  estimatedHours: number
  status: LessonStatus
  objectives: string[]
  skillIds: string[]
  steps: LabStep[]
}

export interface ExerciseResult {
  lessonId: string
  attempts: number
  correctAttempts: number
  lastAttemptAt: string
}

export interface ProjectTaskSubmission {
  notes: string
  checkedCriteria: number[]
  submittedAt: string
}

export interface LabStepSubmission {
  notes: string
  checkedVerification: number[]
  completedAt: string
}

export interface LearningState {
  completed: string[]
  bookmarked: string[]
  history: { lessonId: string; completedAt: string }[]
  wrongLessonIds: string[]
  exerciseAttempts: number
  exerciseCorrect: number
  exerciseResults: Record<string, ExerciseResult>
  projectSubmissions: Record<string, ProjectTaskSubmission>
  labSubmissions: Record<string, LabStepSubmission>
}
