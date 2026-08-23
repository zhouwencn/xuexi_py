/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { LabStepSubmission, LearningState, ProjectTaskSubmission } from '../types/course'
import { useCourseData } from './useCourseData'

const STORAGE_KEY = 'pypath-learning-state-v1'
const initialState: LearningState = {
  completed: [],
  bookmarked: [],
  history: [],
  wrongLessonIds: [],
  exerciseAttempts: 0,
  exerciseCorrect: 0,
  exerciseResults: {},
  projectSubmissions: {},
  labSubmissions: {},
}

export interface SkillMastery {
  skillId: string
  score: number
  status: 'mastered' | 'practicing' | 'weak'
  completedLessons: number
  totalLessons: number
  correctAttempts: number
  attempts: number
}

interface LearningProgressContextValue extends LearningState {
  progress: number
  currentLessonId: string
  toggleComplete: (lessonId: string) => void
  toggleBookmark: (lessonId: string) => void
  isComplete: (lessonId: string) => boolean
  isBookmarked: (lessonId: string) => boolean
  recordExercise: (lessonId: string, correct: boolean, exerciseId?: string) => void
  removeWrong: (lessonId: string) => void
  skillMastery: SkillMastery[]
  saveProjectTaskSubmission: (taskId: string, submission: Omit<ProjectTaskSubmission, 'submittedAt'>) => void
  getProjectProgress: (projectId: string) => number
  saveLabStepSubmission: (stepId: string, submission: Omit<LabStepSubmission, 'completedAt'>) => void
  getLabProgress: (labId: string) => number
}

const LearningProgressContext = createContext<LearningProgressContextValue | null>(null)

function readState(): LearningState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...initialState, ...JSON.parse(saved) } : initialState
  } catch {
    return initialState
  }
}

export function LearningProgressProvider({ children }: { children: ReactNode }) {
  const { labs, lessons, projects, skills } = useCourseData()
  const [state, setState] = useState<LearningState>(readState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo<LearningProgressContextValue>(() => {
    const availableLessons = lessons.filter((lesson) => lesson.status === 'available')
    const currentLesson = availableLessons.find((lesson) => !state.completed.includes(lesson.id)) ?? availableLessons.at(-1)
    const exerciseResults = state.exerciseResults ?? {}
    const projectSubmissions = state.projectSubmissions ?? {}
    const labSubmissions = state.labSubmissions ?? {}
    const skillMastery: SkillMastery[] = skills.map((skill) => {
      const completedLessons = skill.lessonIds.filter((id) => state.completed.includes(id)).length
      const lessonScore = skill.lessonIds.length ? completedLessons / skill.lessonIds.length * 50 : 0
      const results = Object.values(exerciseResults).filter((result) => skill.lessonIds.includes(result.lessonId))
      const attempts = results.reduce((total, result) => total + result.attempts, 0)
      const correctAttempts = results.reduce((total, result) => total + result.correctAttempts, 0)
      const exerciseScore = attempts ? correctAttempts / attempts * 50 : 0
      const score = Math.round(lessonScore + exerciseScore)
      return {
        skillId: skill.id,
        score,
        status: score >= skill.masteryThreshold ? 'mastered' : score >= 50 ? 'practicing' : 'weak',
        completedLessons,
        totalLessons: skill.lessonIds.length,
        correctAttempts,
        attempts,
      }
    })

    return {
      ...state,
      progress: availableLessons.length ? Math.round((state.completed.length / availableLessons.length) * 100) : 0,
      currentLessonId: currentLesson?.id ?? lessons[0].id,
      toggleComplete: (lessonId) => setState((current) => {
        const completed = current.completed.includes(lessonId)
        return completed
          ? { ...current, completed: current.completed.filter((id) => id !== lessonId), history: current.history.filter((item) => item.lessonId !== lessonId) }
          : { ...current, completed: [...current.completed, lessonId], history: [{ lessonId, completedAt: new Date().toISOString() }, ...current.history.filter((item) => item.lessonId !== lessonId)] }
      }),
      toggleBookmark: (lessonId) => setState((current) => ({
        ...current,
        bookmarked: current.bookmarked.includes(lessonId)
          ? current.bookmarked.filter((id) => id !== lessonId)
          : [...current.bookmarked, lessonId],
      })),
      isComplete: (lessonId) => state.completed.includes(lessonId),
      isBookmarked: (lessonId) => state.bookmarked.includes(lessonId),
      recordExercise: (lessonId, correct, exerciseId = lessonId) => setState((current) => {
        const previous = current.exerciseResults?.[exerciseId]
        return {
          ...current,
          exerciseAttempts: current.exerciseAttempts + 1,
          exerciseCorrect: current.exerciseCorrect + (correct ? 1 : 0),
          exerciseResults: {
            ...(current.exerciseResults ?? {}),
            [exerciseId]: {
              lessonId,
              attempts: (previous?.attempts ?? 0) + 1,
              correctAttempts: (previous?.correctAttempts ?? 0) + (correct ? 1 : 0),
              lastAttemptAt: new Date().toISOString(),
            },
          },
          wrongLessonIds: correct
            ? current.wrongLessonIds.filter((id) => id !== lessonId)
            : current.wrongLessonIds.includes(lessonId)
              ? current.wrongLessonIds
              : [...current.wrongLessonIds, lessonId],
        }
      }),
      removeWrong: (lessonId) => setState((current) => ({
        ...current,
        wrongLessonIds: current.wrongLessonIds.filter((id) => id !== lessonId),
      })),
      skillMastery,
      saveProjectTaskSubmission: (taskId, submission) => setState((current) => ({
        ...current,
        projectSubmissions: {
          ...(current.projectSubmissions ?? {}),
          [taskId]: { ...submission, submittedAt: new Date().toISOString() },
        },
      })),
      getProjectProgress: (projectId) => {
        const project = projects.find((item) => item.id === projectId)
        if (!project?.tasks.length) return 0
        const completed = project.tasks.filter((task) => projectSubmissions[task.id]).length
        return Math.round(completed / project.tasks.length * 100)
      },
      saveLabStepSubmission: (stepId, submission) => setState((current) => ({
        ...current,
        labSubmissions: {
          ...(current.labSubmissions ?? {}),
          [stepId]: { ...submission, completedAt: new Date().toISOString() },
        },
      })),
      getLabProgress: (labId) => {
        const lab = labs.find((item) => item.id === labId)
        if (!lab?.steps.length) return 0
        const completed = lab.steps.filter((step) => labSubmissions[step.id]).length
        return Math.round(completed / lab.steps.length * 100)
      },
    }
  }, [labs, lessons, projects, skills, state])

  return <LearningProgressContext.Provider value={value}>{children}</LearningProgressContext.Provider>
}

export function useLearningProgress() {
  const context = useContext(LearningProgressContext)
  if (!context) throw new Error('useLearningProgress must be used within LearningProgressProvider')
  return context
}
