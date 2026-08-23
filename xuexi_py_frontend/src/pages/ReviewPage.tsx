import { BrainCircuit, CalendarClock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'
import type { ReviewRating } from '../types/course'

const ratings: { value: ReviewRating; label: string }[] = [{value:'again',label:'忘记了'},{value:'hard',label:'困难'},{value:'good',label:'掌握'},{value:'easy',label:'简单'}]

export function ReviewPage() {
  const { lessons } = useCourseData()
  const { gradeReview, reviewItems } = useLearningProgress()
  const items = Object.values(reviewItems ?? {}).sort((a, b) => a.dueAt.localeCompare(b.dueAt))
  const todayEnd = new Date(); todayEnd.setHours(23, 59, 59, 999)
  const due = items.filter((item) => new Date(item.dueAt) <= todayEnd)
  return <AppShell><div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"><div className="mb-8"><p className="eyebrow">Spaced repetition</p><h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">间隔复习</h1><p className="mt-3 text-sm text-slate-500">答题后自动安排复习；根据你的反馈调整间隔和难度系数。</p></div><div className="mb-6 rounded-2xl bg-emerald-50 p-5 text-sm text-emerald-900 dark:bg-emerald-400/10 dark:text-emerald-100"><CalendarClock size={19} className="mb-2" />今天到期 {due.length} 项，队列共 {items.length} 项。</div><div className="space-y-4">{due.length ? due.map((item) => { const lesson = lessons.find((entry) => entry.id === item.lessonId); if (!lesson) return null; return <section key={item.lessonId} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex items-start gap-4"><BrainCircuit className="text-violet-500" /><div className="flex-1"><Link to={`/learn/${lesson.id}`} className="font-bold text-slate-950 hover:text-emerald-600 dark:text-white">{lesson.title}</Link><p className="mt-1 text-xs text-slate-400">上次间隔 {item.intervalDays} 天 · 已复习 {item.repetitions} 次</p></div></div><div className="mt-5 flex flex-wrap gap-2">{ratings.map((rating) => <Button key={rating.value} size="sm" variant={rating.value === 'good' ? 'default' : 'secondary'} onClick={() => gradeReview(item.lessonId, rating.value)}>{rating.label}</Button>)}</div></section> }) : <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-400 dark:border-white/10 dark:bg-white/[0.03]">今天没有到期复习。完成练习后系统会自动安排。</div>}</div></div></AppShell>
}
