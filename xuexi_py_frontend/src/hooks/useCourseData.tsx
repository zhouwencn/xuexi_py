/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { lessons as fallbackLessons, stages as fallbackStages } from '../data/course'
import { practiceChallenges as fallbackPracticeChallenges } from '../data/practice'
import { projects as fallbackProjects } from '../data/projects'
import { skills as fallbackSkills } from '../data/skills'
import { labs as fallbackLabs } from '../data/advancedCatalog'
import { expertLessons, expertStage } from '../data/expertCatalog'
import { courseApiEnabled, fetchCourseCatalog } from '../services/courseApi'
import type { CourseCatalog, LearningLab, Lesson, PracticeItem, Project, Skill, Stage } from '../types/course'

type CourseDataStatus = 'loading' | 'ready' | 'fallback'

interface CourseDataContextValue {
  lessons: Lesson[]
  stages: Stage[]
  practiceChallenges: PracticeItem[]
  skills: Skill[]
  projects: Project[]
  labs: LearningLab[]
  status: CourseDataStatus
  error: string | null
  getLessonById: (id?: string) => Lesson | undefined
  reload: () => void
}

function normalizeCatalog(catalog: CourseCatalog): CourseCatalog {
  const normalizedChallenges = catalog.practiceChallenges.map((item) => ({
    ...item,
    exercise: {
      ...item.exercise,
      id: item.exercise.id ?? item.id,
      difficulty: item.exercise.difficulty ?? catalog.lessons.find((lesson) => lesson.id === item.lessonId)?.difficulty ?? 2,
    },
  }))
  const lessons = catalog.lessons.map((lesson) => {
    const primary = { ...lesson.exercise, id: lesson.exercise.id ?? `lesson:${lesson.id}`, difficulty: lesson.exercise.difficulty ?? lesson.difficulty }
    const candidates = lesson.exercises?.length
      ? lesson.exercises.map((exercise, index) => ({ ...exercise, id: exercise.id ?? `${lesson.id}:${index + 1}` }))
      : [primary, ...normalizedChallenges.filter((item) => item.lessonId === lesson.id).map((item) => item.exercise)]
    const unique = [...new Map(candidates.map((exercise) => [exercise.id, exercise])).values()]
    return { ...lesson, exercise: primary, exercises: unique }
  })
  return { ...catalog, lessons, practiceChallenges: normalizedChallenges }
}

const fallbackCatalog: CourseCatalog = normalizeCatalog({
  course: {
    id: 'python-from-js',
    title: 'PyPath · Python 学习路径',
    description: '面向有 JavaScript 基础的开发者，通过真实代码阅读和练习系统学习 Python。',
  },
  stages: [...fallbackStages, expertStage],
  lessons: [...fallbackLessons, ...expertLessons],
  practiceChallenges: fallbackPracticeChallenges,
  skills: fallbackSkills,
  projects: fallbackProjects,
  labs: fallbackLabs,
})

const CourseDataContext = createContext<CourseDataContextValue | null>(null)

export function CourseDataProvider({ children }: { children: ReactNode }) {
  const [catalog, setCatalog] = useState<CourseCatalog>(fallbackCatalog)
  const [status, setStatus] = useState<CourseDataStatus>(courseApiEnabled ? 'loading' : 'fallback')
  const [error, setError] = useState<string | null>(null)
  const [requestVersion, setRequestVersion] = useState(0)

  useEffect(() => {
    if (!courseApiEnabled) return

    const controller = new AbortController()

    fetchCourseCatalog(controller.signal)
      .then((result) => {
        setCatalog(normalizeCatalog(result))
        setStatus('ready')
      })
      .catch((reason: unknown) => {
        if (controller.signal.aborted) return
        const message = reason instanceof Error ? reason.message : String(reason)
        console.warn(`课程 API 暂不可用，继续使用内置数据：${message}`)
        setCatalog(fallbackCatalog)
        setError(message)
        setStatus('fallback')
      })

    return () => controller.abort()
  }, [requestVersion])

  const reload = useCallback(() => {
    if (!courseApiEnabled) {
      setStatus('fallback')
      return
    }
    setStatus('loading')
    setError(null)
    setRequestVersion((current) => current + 1)
  }, [])
  const value = useMemo<CourseDataContextValue>(() => ({
    lessons: catalog.lessons,
    stages: catalog.stages,
    practiceChallenges: catalog.practiceChallenges,
    skills: catalog.skills,
    projects: catalog.projects,
    labs: catalog.labs,
    status,
    error,
    getLessonById: (id) => catalog.lessons.find((lesson) => lesson.id === id),
    reload,
  }), [catalog, error, reload, status])

  return <CourseDataContext.Provider value={value}>{children}</CourseDataContext.Provider>
}

export function useCourseData() {
  const context = useContext(CourseDataContext)
  if (!context) throw new Error('useCourseData must be used within CourseDataProvider')
  return context
}
