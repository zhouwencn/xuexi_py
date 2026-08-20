/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { LearningState } from '../types/course'
import { useCourseData } from './useCourseData'

const STORAGE_KEY = 'pypath-learning-state-v1'
const initialState: LearningState = {
  completed: [],
  bookmarked: [],
  history: [],
  wrongLessonIds: [],
  exerciseAttempts: 0,
  exerciseCorrect: 0,
}

interface LearningProgressContextValue extends LearningState {
  progress: number
  currentLessonId: string
  toggleComplete: (lessonId: string) => void
  toggleBookmark: (lessonId: string) => void
  isComplete: (lessonId: string) => boolean
  isBookmarked: (lessonId: string) => boolean
  recordExercise: (lessonId: string, correct: boolean) => void
  removeWrong: (lessonId: string) => void
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
  const { lessons } = useCourseData()
  const [state, setState] = useState<LearningState>(readState)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo<LearningProgressContextValue>(() => {
    const availableLessons = lessons.filter((lesson) => lesson.status === 'available')
    const currentLesson = availableLessons.find((lesson) => !state.completed.includes(lesson.id)) ?? availableLessons.at(-1)

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
      recordExercise: (lessonId, correct) => setState((current) => ({
        ...current,
        exerciseAttempts: current.exerciseAttempts + 1,
        exerciseCorrect: current.exerciseCorrect + (correct ? 1 : 0),
        wrongLessonIds: correct
          ? current.wrongLessonIds.filter((id) => id !== lessonId)
          : current.wrongLessonIds.includes(lessonId)
            ? current.wrongLessonIds
            : [...current.wrongLessonIds, lessonId],
      })),
      removeWrong: (lessonId) => setState((current) => ({
        ...current,
        wrongLessonIds: current.wrongLessonIds.filter((id) => id !== lessonId),
      })),
    }
  }, [lessons, state])

  return <LearningProgressContext.Provider value={value}>{children}</LearningProgressContext.Provider>
}

export function useLearningProgress() {
  const context = useContext(LearningProgressContext)
  if (!context) throw new Error('useLearningProgress must be used within LearningProgressProvider')
  return context
}
