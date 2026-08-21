import { BookOpen, CheckCircle2, Flame, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { ExerciseCard } from '../components/lesson/ExerciseCard'
import { Button } from '../components/ui/Button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/ui/Tooltip'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'

export function MistakesPage() {
  const { lessons, stages } = useCourseData()
  const { wrongLessonIds, removeWrong } = useLearningProgress()
  const wrongLessons = wrongLessonIds.map((id) => lessons.find((lesson) => lesson.id === id)).filter((lesson) => lesson !== undefined)
  return <AppShell><div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"><div className="mb-8"><p className="eyebrow">Review loop</p><h1 className="mt-2 flex items-center gap-3 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white"><Flame className="text-rose-500" />错题本</h1><p className="mt-3 text-sm leading-6 text-slate-500">练习答错会自动加入；重新答对后会自动移除，也可以手动清理。</p></div>
    {wrongLessons.length ? <div className="space-y-6">{wrongLessons.map((lesson) => <section key={lesson.id} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/[0.025]"><div className="mb-5 flex items-start justify-between gap-4"><div><div className="text-[10px] font-bold uppercase tracking-[0.16em] text-rose-500">{stages.find((stage) => stage.id === lesson.stageId)?.shortTitle}</div><h2 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">{lesson.title}</h2></div><div className="flex gap-2"><Button asChild variant="secondary"><Link to={`/learn/${lesson.id}`}><BookOpen size={14} />复习</Link></Button><Tooltip><TooltipTrigger asChild><Button variant="secondary" size="icon" onClick={() => removeWrong(lesson.id)} aria-label="移出错题本"><Trash2 size={14} /></Button></TooltipTrigger><TooltipContent>移出错题本</TooltipContent></Tooltip></div></div><ExerciseCard exercise={lesson.exercise} lessonId={lesson.id} /></section>)}</div> : <div className="rounded-3xl border border-dashed border-slate-300 bg-white/50 p-12 text-center dark:border-white/15 dark:bg-white/[0.02]"><CheckCircle2 size={42} className="mx-auto text-emerald-500" /><h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">当前没有错题</h2><p className="mt-2 text-sm text-slate-400">去练习场完成一轮代码阅读训练吧。</p><Button asChild className="mt-6"><Link to="/practice">开始练习</Link></Button></div>}
  </div></AppShell>
}
