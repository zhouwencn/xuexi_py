import { ArrowRight, Clock3, FolderKanban } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'

export function ProjectsPage() {
  const { projects, skills } = useCourseData()
  const { getProjectProgress } = useLearningProgress()
  return <AppShell><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="mb-10"><p className="eyebrow">Build to learn</p><h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">项目实战</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">跨章节完成需求、设计、实现、测试和复盘。登录用户的提交记录会自动保存到数据库。</p></div>
    <div className="space-y-5">{projects.map((project) => {
      const progress = getProjectProgress(project.id)
      return <section key={project.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex flex-col gap-5 md:flex-row md:items-start"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-mint"><FolderKanban size={22} /></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="font-mono text-xs font-bold text-emerald-600">PROJECT {String(project.order).padStart(2, '0')}</span><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] text-slate-500 dark:bg-white/10">难度 {project.difficulty}</span><span className="flex items-center gap-1 text-[10px] text-slate-400"><Clock3 size={11} />约 {project.estimatedHours} 小时</span></div><h2 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{project.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{project.summary}</p><div className="mt-4 flex flex-wrap gap-2">{project.skillIds.map((id) => <span key={id} className="rounded-full bg-violet-50 px-2.5 py-1 text-[10px] font-semibold text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">{skills.find((skill) => skill.id === id)?.title}</span>)}</div></div><Link to={`/projects/${project.id}`} className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-emerald-950">开始项目 <ArrowRight size={14} /></Link></div>
        <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/[0.06]"><div className="mb-2 flex justify-between text-xs text-slate-400"><span>{project.tasks.length} 个项目任务</span><span>{progress}%</span></div><ProgressBar value={progress} /></div>
      </section>
    })}</div>
  </div></AppShell>
}
