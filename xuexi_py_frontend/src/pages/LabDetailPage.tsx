import { ArrowLeft, CheckCircle2, ClipboardCheck, Lightbulb, Save, TerminalSquare } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { CodeBlock } from '../components/ui/CodeBlock'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'
import type { LabStep } from '../types/course'

export function LabDetailPage() {
  const { labId } = useParams()
  const { labs, skills } = useCourseData()
  const { getLabProgress } = useLearningProgress()
  const lab = labs.find((item) => item.id === labId)
  if (!lab) return <Navigate to="/labs" replace />
  const progress = getLabProgress(lab.id)
  return <AppShell><div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <Link to="/labs" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600"><ArrowLeft size={14} />返回实验室</Link>
    <header className="mt-6 rounded-3xl bg-[#0c1d18] p-7 text-white sm:p-9"><div className="text-xs font-bold uppercase tracking-[.16em] text-emerald-300">{lab.level} · {lab.kind} · {lab.estimatedHours}h</div><h1 className="mt-3 text-3xl font-black tracking-tight">{lab.title}</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{lab.description}</p><div className="mt-5 flex flex-wrap gap-2">{lab.skillIds.map((id) => <span key={id} className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-emerald-100">{skills.find((skill) => skill.id === id)?.title}</span>)}</div><div className="mt-6 grid gap-2 sm:grid-cols-3">{lab.objectives.map((objective) => <div key={objective} className="rounded-xl bg-white/[0.06] px-3 py-2 text-xs text-slate-200">{objective}</div>)}</div><div className="mt-7"><div className="mb-2 flex justify-between text-xs text-slate-300"><span>实验进度</span><span>{progress}%</span></div><ProgressBar value={progress} /></div></header>
    <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100">命令需要你理解后在本地终端手动执行。先确认当前目录和环境，不要在生产数据库或重要数据上做实验。</div>
    <div className="mt-6 space-y-5">{lab.steps.map((step) => <LabStepCard key={step.id} step={step} />)}</div>
  </div></AppShell>
}

function LabStepCard({ step }: { step: LabStep }) {
  const { labSubmissions, saveLabStepSubmission } = useLearningProgress()
  const saved = labSubmissions[step.id]
  const [notes, setNotes] = useState(saved?.notes ?? '')
  const [checked, setChecked] = useState<number[]>(saved?.checkedVerification ?? [])
  const [showHints, setShowHints] = useState(false)
  const ready = notes.trim().length > 0 && step.verification.every((_, index) => checked.includes(index))
  return <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
    <div className="flex items-start gap-4"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${saved ? 'bg-emerald-500 text-emerald-950' : 'bg-slate-100 text-slate-500 dark:bg-white/10'}`}>{saved ? <CheckCircle2 size={18} /> : String(step.order).padStart(2, '0')}</span><div><h2 className="font-bold text-slate-950 dark:text-white">{step.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{step.instructions}</p></div></div>
    {step.commands.length > 0 && <div className="mt-5"><h3 className="mb-3 flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"><TerminalSquare size={14} className="text-emerald-500" />参考命令</h3><div className="space-y-2">{step.commands.map((command) => <CodeBlock key={command} code={command} language="text" />)}</div></div>}
    <div className="mt-5"><h3 className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"><ClipboardCheck size={14} className="text-emerald-500" />验证清单</h3><div className="mt-3 grid gap-2">{step.verification.map((item, index) => <label key={item} className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:bg-white/[0.04] dark:text-slate-300"><input type="checkbox" className="mt-1 accent-emerald-500" checked={checked.includes(index)} onChange={() => setChecked((current) => current.includes(index) ? current.filter((value) => value !== index) : [...current, index])} /><span>{item}</span></label>)}</div></div>
    {step.hints.length > 0 && <div className="mt-4"><Button variant="ghost" size="sm" onClick={() => setShowHints((value) => !value)}><Lightbulb size={14} />{showHints ? '隐藏提示' : '查看提示'}</Button>{showHints && <div className="mt-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-400/10 dark:text-amber-100">{step.hints.join('；')}</div>}</div>}
    <label className="mt-5 block"><span className="text-xs font-bold text-slate-700 dark:text-slate-200">实验输出与复盘</span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} className="mt-2 min-h-36 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-6 outline-none focus:border-emerald-400 dark:border-white/10 dark:bg-black/20" placeholder="记录命令结果、错误、证据、结论和后续改进……" /></label>
    <div className="mt-5 flex items-center justify-between gap-4"><span className="text-xs text-slate-400">{saved ? `完成于 ${new Date(saved.completedAt).toLocaleString()}` : '全部验证通过并写下复盘后才能完成'}</span><Button disabled={!ready} onClick={() => saveLabStepSubmission(step.id, { notes, checkedVerification: checked })}><Save size={14} />{saved ? '更新记录' : '完成步骤'}</Button></div>
  </section>
}
