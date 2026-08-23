/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
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

let fallbackCatalogPromise: Promise<CourseCatalog> | null = null

function loadFallbackCatalog(): Promise<CourseCatalog> {
  fallbackCatalogPromise ??= Promise.all([
    import('../data/course'),
    import('../data/practice'),
    import('../data/projects'),
    import('../data/skills'),
    import('../data/advancedCatalog'),
    import('../data/expertCatalog'),
  ]).then(([course, practice, projects, skills, advanced, expert]) => normalizeCatalog({
    course: {
      id: 'python-from-js',
      title: 'PyPath · Python 学习路径',
      description: '面向有 JavaScript 基础的开发者，通过真实代码阅读和练习系统学习 Python。',
    },
    stages: [...course.stages, expert.expertStage],
    lessons: [...course.lessons, ...expert.expertLessons],
    practiceChallenges: practice.practiceChallenges,
    skills: skills.skills,
    projects: projects.projects,
    labs: advanced.labs,
  }))
  return fallbackCatalogPromise
}

const CourseDataContext = createContext<CourseDataContextValue | null>(null)

export function CourseDataProvider({ children }: { children: ReactNode }) {
  const [catalog, setCatalog] = useState<CourseCatalog | null>(null)
  const [status, setStatus] = useState<CourseDataStatus>('loading')
  const [error, setError] = useState<string | null>(null)
  const [requestVersion, setRequestVersion] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadCatalog() {
      try {
        if (courseApiEnabled) {
          setCatalog(normalizeCatalog(await fetchCourseCatalog(controller.signal)))
          setStatus('ready')
          return
        }
        setCatalog(await loadFallbackCatalog())
        setStatus('fallback')
      } catch (reason: unknown) {
        if (controller.signal.aborted) return
        const message = reason instanceof Error ? reason.message : String(reason)
        if (!courseApiEnabled) {
          setError(message)
          return
        }
        console.warn(`课程 API 暂不可用，继续使用内置数据：${message}`)
        setError(message)
        setCatalog(await loadFallbackCatalog())
        setStatus('fallback')
      }
    }

    void loadCatalog()

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
  const value = useMemo<CourseDataContextValue | null>(() => catalog ? ({
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
  }) : null, [catalog, error, reload, status])

  if (!value) return <div className="grid min-h-screen place-items-center bg-[#f5f8f7] px-6 text-center text-sm text-slate-500 dark:bg-[#07110f]">{error ? `课程数据加载失败：${error}` : '正在加载课程数据…'}</div>
  return <CourseDataContext.Provider value={value}>{children}</CourseDataContext.Provider>
}

export function useCourseData() {
  const context = useContext(CourseDataContext)
  if (!context) throw new Error('useCourseData must be used within CourseDataProvider')
  return context
}
