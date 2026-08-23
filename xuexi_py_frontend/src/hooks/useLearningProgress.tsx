/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { LabStepSubmission, LearningState, ProjectTaskSubmission, ReviewItem, ReviewRating } from '../types/course'
import { useCourseData } from './useCourseData'
import { useAuth } from './useAuth'
import { fetchCloudProgress, saveCloudProgress } from '../services/accountApi'

const LEGACY_STORAGE_KEY = 'pypath-learning-state-v1'
const STORAGE_PREFIX = 'pypath-learning-state-v2'
const initialState: LearningState = {
  schemaVersion: 2,
  completed: [],
  bookmarked: [],
  history: [],
  wrongExerciseIds: [],
  exerciseAttempts: 0,
  exerciseCorrect: 0,
  exerciseResults: {},
  projectSubmissions: {},
  labSubmissions: {},
  reviewItems: {},
}

function scheduleReview(previous: ReviewItem | undefined, rating: ReviewRating): ReviewItem {
  const now = new Date()
  const ease = Math.max(1.3, (previous?.ease ?? 2.5) + (rating === 'easy' ? .15 : rating === 'hard' ? -.15 : rating === 'again' ? -.2 : 0))
  const repetitions = rating === 'again' ? 0 : (previous?.repetitions ?? 0) + 1
  let intervalDays = 0
  if (rating === 'hard') intervalDays = Math.max(1, Math.round((previous?.intervalDays || 1) * 1.2))
  if (rating === 'good') intervalDays = repetitions === 1 ? 1 : repetitions === 2 ? 3 : Math.max(1, Math.round((previous?.intervalDays || 1) * ease))
  if (rating === 'easy') intervalDays = repetitions === 1 ? 4 : Math.max(4, Math.round((previous?.intervalDays || 1) * ease * 1.3))
  const due = rating === 'again' ? new Date(now.getTime() + 10 * 60_000) : new Date(now.getTime() + intervalDays * 86_400_000)
  return { lessonId: previous?.lessonId ?? '', dueAt: due.toISOString(), intervalDays, ease, repetitions, lastReviewedAt: now.toISOString() }
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
  removeWrong: (exerciseId: string) => void
  skillMastery: SkillMastery[]
  saveProjectTaskSubmission: (taskId: string, submission: Omit<ProjectTaskSubmission, 'submittedAt'>) => void
  getProjectProgress: (projectId: string) => number
  saveLabStepSubmission: (stepId: string, submission: Omit<LabStepSubmission, 'completedAt'>) => void
  getLabProgress: (labId: string) => number
  gradeReview: (lessonId: string, rating: ReviewRating) => void
  cloudSyncStatus: 'idle' | 'syncing' | 'synced' | 'error'
  uploadCloudProgress: () => Promise<void>
  downloadCloudProgress: () => Promise<void>
}

const LearningProgressContext = createContext<LearningProgressContextValue | null>(null)

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function normalizeState(value: unknown): LearningState {
  if (!isRecord(value)) return initialState
  const legacyWrongLessonIds = Array.isArray(value.wrongLessonIds) ? value.wrongLessonIds.filter((id): id is string => typeof id === 'string') : []
  const currentWrongExerciseIds = Array.isArray(value.wrongExerciseIds)
    ? value.wrongExerciseIds.filter((id): id is string => typeof id === 'string')
    : []
  const wrongExerciseIds = currentWrongExerciseIds.length
    ? currentWrongExerciseIds
    : legacyWrongLessonIds.map((lessonId) => `lesson:${lessonId}`)
  return {
    ...initialState,
    schemaVersion: 2,
    completed: Array.isArray(value.completed) ? value.completed.filter((id): id is string => typeof id === 'string') : [],
    bookmarked: Array.isArray(value.bookmarked) ? value.bookmarked.filter((id): id is string => typeof id === 'string') : [],
    history: Array.isArray(value.history) ? value.history.filter(isRecord) as LearningState['history'] : [],
    wrongExerciseIds,
    exerciseAttempts: typeof value.exerciseAttempts === 'number' && value.exerciseAttempts >= 0 ? value.exerciseAttempts : 0,
    exerciseCorrect: typeof value.exerciseCorrect === 'number' && value.exerciseCorrect >= 0 ? value.exerciseCorrect : 0,
    exerciseResults: isRecord(value.exerciseResults) ? value.exerciseResults as LearningState['exerciseResults'] : {},
    projectSubmissions: isRecord(value.projectSubmissions) ? value.projectSubmissions as LearningState['projectSubmissions'] : {},
    labSubmissions: isRecord(value.labSubmissions) ? value.labSubmissions as LearningState['labSubmissions'] : {},
    reviewItems: isRecord(value.reviewItems) ? value.reviewItems as LearningState['reviewItems'] : {},
  }
}

function storageKey(userId?: string) {
  return `${STORAGE_PREFIX}:${userId ?? 'anonymous'}`
}

function readState(key: string): LearningState {
  try {
    const saved = localStorage.getItem(key) ?? (key.endsWith(':anonymous') ? localStorage.getItem(LEGACY_STORAGE_KEY) : null)
    return saved ? normalizeState(JSON.parse(saved)) : initialState
  } catch {
    return initialState
  }
}

export function LearningProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const ownerKey = storageKey(user?.id)
  return <LearningProgressStateProvider key={ownerKey} ownerKey={ownerKey} userId={user?.id}>{children}</LearningProgressStateProvider>
}

function LearningProgressStateProvider({ children, ownerKey, userId }: { children: ReactNode; ownerKey: string; userId?: string }) {
  const { labs, lessons, projects, skills } = useCourseData()
  const { token } = useAuth()
  const [state, setState] = useState<LearningState>(() => {
    const hasOwnerState = localStorage.getItem(ownerKey) !== null
    return hasOwnerState || !userId ? readState(ownerKey) : readState(storageKey())
  })
  const [cloudSyncStatus, setCloudSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'error'>('idle')

  useEffect(() => {
    localStorage.setItem(ownerKey, JSON.stringify(state))
  }, [ownerKey, state])

  const value = useMemo<LearningProgressContextValue>(() => {
    const availableLessons = lessons.filter((lesson) => lesson.status === 'available')
    const availableLessonIds = new Set(availableLessons.map((lesson) => lesson.id))
    const completed = state.completed.filter((lessonId) => availableLessonIds.has(lessonId))
    const currentLesson = availableLessons.find((lesson) => !completed.includes(lesson.id)) ?? availableLessons.at(-1)
    const exerciseResults = state.exerciseResults ?? {}
    const projectSubmissions = state.projectSubmissions ?? {}
    const labSubmissions = state.labSubmissions ?? {}
    const skillMastery: SkillMastery[] = skills.map((skill) => {
      const completedLessons = skill.lessonIds.filter((id) => completed.includes(id)).length
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
      completed,
      bookmarked: state.bookmarked.filter((lessonId) => lessons.some((lesson) => lesson.id === lessonId)),
      progress: availableLessons.length ? Math.round((completed.length / availableLessons.length) * 100) : 0,
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
          reviewItems: {
            ...(current.reviewItems ?? {}),
            [lessonId]: {
              ...scheduleReview(current.reviewItems?.[lessonId], correct ? 'good' : 'again'),
              lessonId,
            },
          },
          wrongExerciseIds: correct
            ? current.wrongExerciseIds.filter((id) => id !== exerciseId)
            : current.wrongExerciseIds.includes(exerciseId)
              ? current.wrongExerciseIds
              : [...current.wrongExerciseIds, exerciseId],
        }
      }),
      removeWrong: (exerciseId) => setState((current) => ({
        ...current,
        wrongExerciseIds: current.wrongExerciseIds.filter((id) => id !== exerciseId),
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
      gradeReview: (lessonId, rating) => setState((current) => ({
        ...current,
        reviewItems: {
          ...(current.reviewItems ?? {}),
          [lessonId]: { ...scheduleReview(current.reviewItems?.[lessonId], rating), lessonId },
        },
      })),
      cloudSyncStatus,
      uploadCloudProgress: async () => {
        if (!token) return
        setCloudSyncStatus('syncing')
        try {
          const remote = await fetchCloudProgress(token)
          await saveCloudProgress(token, state, remote.version)
          setCloudSyncStatus('synced')
        } catch {
          setCloudSyncStatus('error')
          throw new Error('云端上传失败')
        }
      },
      downloadCloudProgress: async () => {
        if (!token) return
        setCloudSyncStatus('syncing')
        try {
          const remote = await fetchCloudProgress(token)
          if (remote.version > 0) setState(normalizeState(remote.state))
          setCloudSyncStatus('synced')
        } catch {
          setCloudSyncStatus('error')
          throw new Error('云端下载失败')
        }
      },
    }
  }, [cloudSyncStatus, labs, lessons, projects, skills, state, token])

  return <LearningProgressContext.Provider value={value}>{children}</LearningProgressContext.Provider>
}

export function useLearningProgress() {
  const context = useContext(LearningProgressContext)
  if (!context) throw new Error('useLearningProgress must be used within LearningProgressProvider')
  return context
}
