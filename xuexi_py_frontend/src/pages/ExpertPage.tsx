import { ArrowRight, BrainCircuit, Gauge, ShieldCheck, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'

export function ExpertPage() {
  const { labs, projects, skills } = useCourseData()
  const { getLabProgress, getProjectProgress, skillMastery } = useLearningProgress()
  const targetSkills = skills.filter((skill) => skill.level === 'advanced' || skill.level === 'expert')
  const targetMastery = skillMastery.filter((item) => targetSkills.some((skill) => skill.id === item.skillId))
  const skillScore = targetMastery.length ? Math.round(targetMastery.reduce((sum, item) => sum + item.score, 0) / targetMastery.length) : 0
  const expertLabs = labs.filter((lab) => lab.level === 'expert')
  const labScore = expertLabs.length ? Math.round(expertLabs.reduce((sum, lab) => sum + getLabProgress(lab.id), 0) / expertLabs.length) : 0
  const projectScore = projects.length ? Math.round(projects.reduce((sum, project) => sum + getProjectProgress(project.id), 0) / projects.length) : 0
  const readiness = Math.round(skillScore * .5 + labScore * .3 + projectScore * .2)
  const nextLab = expertLabs.find((lab) => getLabProgress(lab.id) < 100) ?? expertLabs[0]
  return <AppShell><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <header className="rounded-3xl bg-[#0c1d18] p-7 text-white sm:p-9"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-emerald-300">Advanced to expert</p><h1 className="mt-3 text-3xl font-black sm:text-4xl">Python 高级与专家训练</h1><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">专家不是课程标签，而是能用证据解释原理、评审代码、权衡架构、定位生产故障并交付可靠系统。</p><div className="mt-7 grid gap-4 sm:grid-cols-4">{[{label:'专家准备度',value:readiness,icon:Gauge},{label:'高级技能',value:skillScore,icon:BrainCircuit},{label:'专家实验',value:labScore,icon:ShieldCheck},{label:'项目实战',value:projectScore,icon:Target}].map(({label,value,icon:Icon}) => <div key={label} className="rounded-2xl bg-white/[0.06] p-4"><Icon size={18} className="text-emerald-300" /><div className="mt-4 text-2xl font-black">{value}%</div><div className="mt-1 text-[11px] text-slate-400">{label}</div></div>)}</div></header>
    <div className="mt-6 flex flex-wrap gap-3"><Link to="/diagnostic" className="rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-emerald-950">参加能力诊断</Link><Link to="/review" className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 dark:border-white/10 dark:text-slate-200">进入间隔复习</Link></div>
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]"><section><div className="mb-4 flex items-center justify-between"><h2 className="section-title">高级与专家能力</h2><Link to="/skills" className="text-xs font-bold text-emerald-600">完整能力地图 →</Link></div><div className="space-y-3">{targetSkills.map((skill) => { const mastery = skillMastery.find((item) => item.skillId === skill.id); return <div key={skill.id} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex justify-between gap-4"><div><div className="flex items-center gap-2"><h3 className="text-sm font-bold text-slate-900 dark:text-white">{skill.title}</h3><span className="rounded-full bg-violet-50 px-2 py-0.5 text-[9px] font-bold text-violet-700 dark:bg-violet-400/10 dark:text-violet-200">{skill.level}</span></div><p className="mt-1 text-xs leading-5 text-slate-400">{skill.description}</p></div><span className="text-sm font-bold text-slate-500">{mastery?.score ?? 0}%</span></div><ProgressBar value={mastery?.score ?? 0} className="mt-4" /></div> })}</div></section><aside className="space-y-5"><div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"><h2 className="font-bold text-slate-900 dark:text-white">专家能力标准</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-500">{['能解释 Python 行为背后的数据模型','能审查并发、事务和安全边界','能用剖析与执行计划定位瓶颈','能比较架构方案及其失败模式','能从告警和证据定位生产根因','能评估 AI 系统质量、成本和风险'].map((item) => <li key={item} className="flex gap-2"><span className="text-emerald-500">•</span>{item}</li>)}</ul></div>{nextLab && <div className="rounded-3xl bg-violet-600 p-6 text-white"><p className="text-[10px] font-bold uppercase tracking-wider text-violet-200">Recommended next</p><h3 className="mt-2 font-black">{nextLab.title}</h3><p className="mt-2 text-sm leading-6 text-violet-100">{nextLab.summary}</p><Link to={`/labs/${nextLab.id}`} className="mt-5 inline-flex items-center gap-1 text-xs font-bold">开始训练 <ArrowRight size={13} /></Link></div>}</aside></div>
  </div></AppShell>
}
