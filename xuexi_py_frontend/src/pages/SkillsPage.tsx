import { ArrowRight, BrainCircuit, CheckCircle2, CircleDashed, TriangleAlert } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'

const levelLabels = { foundation: '基础', intermediate: '熟练', advanced: '高级', expert: '专家方向' }

export function SkillsPage() {
  const { lessons, skills, stages } = useCourseData()
  const { skillMastery } = useLearningProgress()
  return <AppShell><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="mb-9"><p className="eyebrow">Capability map</p><h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">Python 能力地图</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">掌握度由课程完成度和关联练习正确率共同计算，不再只看“是否学过”。</p></div>
    <div className="grid gap-4 lg:grid-cols-2">{skills.map((skill) => {
      const mastery = skillMastery.find((item) => item.skillId === skill.id)
      const stage = stages.find((item) => item.id === skill.stageId)
      const prerequisites = skill.prerequisiteIds.map((id) => skills.find((item) => item.id === id)?.title).filter(Boolean)
      const nextLesson = skill.lessonIds.map((id) => lessons.find((lesson) => lesson.id === id)).find(Boolean)
      const status = mastery?.status ?? 'weak'
      const StatusIcon = status === 'mastered' ? CheckCircle2 : status === 'practicing' ? CircleDashed : TriangleAlert
      return <section key={skill.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-400/10 dark:text-violet-200"><BrainCircuit size={20} /></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-bold text-slate-950 dark:text-white">{skill.title}</h2><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500 dark:bg-white/10">{levelLabels[skill.level]}</span></div><p className="mt-2 text-sm leading-6 text-slate-500">{skill.description}</p></div><span className="text-xs font-bold text-slate-400">{String(skill.order).padStart(2, '0')}</span></div>
        <div className="mt-5"><div className="mb-2 flex items-center justify-between text-xs"><span className={`flex items-center gap-1.5 font-semibold ${status === 'mastered' ? 'text-emerald-600' : status === 'practicing' ? 'text-amber-600' : 'text-rose-500'}`}><StatusIcon size={14} />{status === 'mastered' ? '已掌握' : status === 'practicing' ? '练习中' : '待加强'}</span><span className="text-slate-400">{mastery?.score ?? 0}%</span></div><ProgressBar value={mastery?.score ?? 0} /></div>
        <div className="mt-4 grid gap-2 text-xs text-slate-500 sm:grid-cols-2"><span>{stage?.shortTitle} · {skill.lessonIds.length} 节课程</span><span className="sm:text-right">练习 {mastery?.correctAttempts ?? 0}/{mastery?.attempts ?? 0} 次答对</span></div>
        {prerequisites.length > 0 && <p className="mt-3 text-xs text-slate-400">前置能力：{prerequisites.join('、')}</p>}
        {nextLesson && <Link to={`/learn/${nextLesson.id}`} className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-emerald-600">进入相关课程 <ArrowRight size={13} /></Link>}
      </section>
    })}</div>
  </div></AppShell>
}
