import { ArrowRight, Clock3, FlaskConical, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'
import type { LabLevel } from '../types/course'

export function LabsPage() {
  const { labs, skills } = useCourseData()
  const { getLabProgress } = useLearningProgress()
  const [level, setLevel] = useState<'all' | LabLevel>('all')
  const visible = labs.filter((lab) => level === 'all' || lab.level === level)
  return <AppShell><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="mb-8"><p className="eyebrow">Local engineering labs</p><h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">Python 工程实验室</h1><p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">按照步骤在本地 Conda、FastAPI、PostgreSQL 和 Docker 环境中完成实验。平台只展示命令和验收标准，不会自动执行系统命令。</p></div>
    <div className="mb-6 flex gap-2"><Button size="sm" variant={level === 'all' ? 'default' : 'secondary'} onClick={() => setLevel('all')}>全部 {labs.length}</Button><Button size="sm" variant={level === 'advanced' ? 'default' : 'secondary'} onClick={() => setLevel('advanced')}>高级实验</Button><Button size="sm" variant={level === 'expert' ? 'default' : 'secondary'} onClick={() => setLevel('expert')}>专家实验</Button></div>
    <div className="grid gap-5 lg:grid-cols-2">{visible.map((lab) => { const progress = getLabProgress(lab.id); return <section key={lab.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]"><div className="flex items-start gap-4"><span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${lab.level === 'expert' ? 'bg-violet-100 text-violet-600 dark:bg-violet-400/10 dark:text-violet-200' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-mint'}`}>{lab.level === 'expert' ? <ShieldCheck size={20} /> : <FlaskConical size={20} />}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{lab.level === 'expert' ? 'Expert' : 'Advanced'} · {lab.kind}</span><span className="flex items-center gap-1 text-[10px] text-slate-400"><Clock3 size={11} />{lab.estimatedHours}h</span></div><h2 className="mt-2 text-lg font-black text-slate-950 dark:text-white">{lab.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{lab.summary}</p></div></div><div className="mt-4 flex flex-wrap gap-2">{lab.skillIds.slice(0, 4).map((id) => <span key={id} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] text-slate-500 dark:bg-white/10">{skills.find((skill) => skill.id === id)?.title}</span>)}</div><div className="mt-5"><div className="mb-2 flex justify-between text-xs text-slate-400"><span>{lab.steps.length} 个实验步骤</span><span>{progress}%</span></div><ProgressBar value={progress} /></div><Link to={`/labs/${lab.id}`} className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-emerald-600">进入实验 <ArrowRight size={13} /></Link></section> })}</div>
  </div></AppShell>
}
