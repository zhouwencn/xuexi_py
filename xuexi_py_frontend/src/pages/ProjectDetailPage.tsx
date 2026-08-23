import { ArrowLeft, CheckCircle2, ClipboardCheck, Clock3, Save } from 'lucide-react'
import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { CodeBlock } from '../components/ui/CodeBlock'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'
import type { ProjectTask } from '../types/course'

export function ProjectDetailPage() {
  const { projectId } = useParams()
  const { projects, skills } = useCourseData()
  const { getProjectProgress } = useLearningProgress()
  const project = projects.find((item) => item.id === projectId)
  if (!project) return <Navigate to="/projects" replace />
  const progress = getProjectProgress(project.id)
  return <AppShell><div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-emerald-600"><ArrowLeft size={14} />返回项目列表</Link>
    <header className="mt-6 rounded-3xl bg-[#0c1d18] p-7 text-white sm:p-9"><div className="flex flex-wrap items-center gap-3 text-xs text-emerald-200"><span>PROJECT {String(project.order).padStart(2, '0')}</span><span>难度 {project.difficulty}</span><span className="flex items-center gap-1"><Clock3 size={13} />约 {project.estimatedHours} 小时</span></div><h1 className="mt-3 text-3xl font-black tracking-tight">{project.title}</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.skillIds.map((id) => <span key={id} className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-emerald-100">{skills.find((skill) => skill.id === id)?.title}</span>)}</div><div className="mt-7"><div className="mb-2 flex justify-between text-xs text-slate-300"><span>项目进度</span><span>{progress}%</span></div><ProgressBar value={progress} /></div></header>
    <div className="mt-8 space-y-5">{project.tasks.map((task) => <ProjectTaskCard key={task.id} task={task} />)}</div>
  </div></AppShell>
}

function ProjectTaskCard({ task }: { task: ProjectTask }) {
  const { projectSubmissions, saveProjectTaskSubmission } = useLearningProgress()
  const saved = projectSubmissions[task.id]
  const [notes, setNotes] = useState(saved?.notes ?? task.starterCode ?? '')
  const [checked, setChecked] = useState<number[]>(saved?.checkedCriteria ?? [])
  const ready = task.acceptanceCriteria.every((_, index) => checked.includes(index)) && notes.trim().length > 0

  function toggle(index: number) {
    setChecked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])
  }

  return <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
    <div className="flex items-start gap-4"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${saved ? 'bg-emerald-500 text-emerald-950' : 'bg-slate-100 text-slate-500 dark:bg-white/10'}`}>{saved ? <CheckCircle2 size={18} /> : String(task.order).padStart(2, '0')}</span><div><h2 className="font-bold text-slate-950 dark:text-white">{task.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{task.description}</p></div></div>
    {task.starterCode && <div className="mt-5"><CodeBlock code={task.starterCode} /></div>}
    <div className="mt-5"><h3 className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200"><ClipboardCheck size={15} className="text-emerald-500" />验收标准</h3><div className="mt-3 grid gap-2">{task.acceptanceCriteria.map((criterion, index) => <label key={criterion} className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:bg-white/[0.04] dark:text-slate-300"><input type="checkbox" className="mt-1 accent-emerald-500" checked={checked.includes(index)} onChange={() => toggle(index)} /><span>{criterion}</span></label>)}</div></div>
    <label className="mt-5 block"><span className="text-xs font-bold text-slate-800 dark:text-slate-200">实现记录或关键代码</span><textarea value={notes} onChange={(event) => setNotes(event.target.value)} className="mt-2 min-h-40 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs leading-6 outline-none focus:border-emerald-400 dark:border-white/10 dark:bg-black/20" placeholder="记录你的设计、命令、关键代码和遇到的问题……" /></label>
    <div className="mt-5 flex items-center justify-between gap-4"><span className="text-xs text-slate-400">{saved ? `上次提交：${new Date(saved.submittedAt).toLocaleString()}` : '提交记录只保存在当前浏览器'}</span><Button disabled={!ready} onClick={() => saveProjectTaskSubmission(task.id, { notes, checkedCriteria: checked })}><Save size={14} />{saved ? '更新提交' : '提交任务'}</Button></div>
  </section>
}
