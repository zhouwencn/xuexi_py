import { ArrowRight, Check, LockKeyhole, Route } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'

export function RoadmapPage() {
  const { lessons, stages } = useCourseData()
  const { completed } = useLearningProgress()
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-12 text-center"><span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-mint"><Route size={23} /></span><p className="eyebrow mt-5">{stages.length} stages · Project first</p><h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">Python 从入门到工程实战</h1><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">路线的终点不是会背语法，而是能阅读、判断和修改 FastAPI、AI Agent、自动化与数据项目。</p></div>
        <div className="space-y-4">
          {stages.map((stage) => {
            const active = stage.status === 'active'
            const stageLessons = lessons.filter((item) => item.stageId === stage.id)
            const stageCompleted = stageLessons.filter((item) => completed.includes(item.id)).length
            const stageProgress = stageLessons.length ? Math.round(stageCompleted / stageLessons.length * 100) : 0
            const stageCurrent = stageLessons.find((item) => !completed.includes(item.id)) ?? stageLessons.at(-1)
            return <section key={stage.id} className={`rounded-3xl border p-5 sm:p-6 ${active ? 'border-emerald-200 bg-white shadow-sm dark:border-emerald-400/20 dark:bg-white/[0.035]' : 'border-slate-200 bg-white/50 dark:border-white/[0.07] dark:bg-white/[0.02]'}`}><div className="flex items-start gap-4"><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-mono text-xs font-bold ${active ? 'bg-emerald-500 text-emerald-950' : 'bg-slate-100 text-slate-400 dark:bg-white/10'}`}>{String(stage.order).padStart(2, '0')}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-bold text-slate-900 dark:text-white">{stage.title}</h2>{active ? <Badge variant="success" className="rounded-full px-2 py-0.5 text-[10px] font-bold">已开放 {stageLessons.length} 节</Badge> : <Badge variant="outline" className="rounded-full py-0.5 text-[10px]"><LockKeyhole size={10} /> 后续阶段</Badge>}</div><p className="mt-2 text-sm leading-6 text-slate-500">{stage.description}</p>{active && <div className="mt-5"><div className="mb-2 flex justify-between text-xs text-slate-400"><span>{stageCompleted} / {stageLessons.length} 节已掌握</span><span>{stageProgress}%</span></div><ProgressBar value={stageProgress} label={`${stage.shortTitle}进度`} /></div>}</div><span className="shrink-0 text-xs text-slate-400">{stage.lessonCount} 个主题</span></div>{active && <div className="mt-6 grid gap-2 border-t border-slate-100 pt-5 sm:grid-cols-2 dark:border-white/[0.06]">{stageLessons.map((item) => <Link key={item.id} to={`/learn/${item.id}`} className="flex items-center gap-3 rounded-xl p-3 text-sm text-slate-600 transition hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/[0.04]"><span className={`grid h-6 w-6 place-items-center rounded-full border ${completed.includes(item.id) ? 'border-emerald-400 bg-emerald-400 text-emerald-950' : 'border-slate-200 text-[10px] text-slate-400 dark:border-white/15'}`}>{completed.includes(item.id) ? <Check size={13} /> : item.order}</span><span className="flex-1">{item.title}</span><span className="text-[10px] text-slate-400">{item.duration}m</span></Link>)}</div>}{active && stageCurrent && <div className="mt-5 flex justify-end"><Button asChild><Link to={`/learn/${stageCurrent.id}`}>{stageProgress === 100 ? '复习当前阶段' : '继续当前阶段'} <ArrowRight size={15} /></Link></Button></div>}</section>
          })}
        </div>
      </div>
    </AppShell>
  )
}
