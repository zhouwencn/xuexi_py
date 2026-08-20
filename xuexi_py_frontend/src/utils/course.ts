import type { Lesson } from '../types/course'

export function getAdjacentLessons(lessons: Lesson[], id: string) {
  const index = lessons.findIndex((lesson) => lesson.id === id)
  return {
    previous: index > 0 ? lessons[index - 1] : undefined,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : undefined,
  }
}

export function formatStudyMinutes(minutes: number) {
  return `${minutes} 分钟`
}
