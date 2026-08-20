import { Bookmark, CheckCircle2, Flame, Gauge, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'

export function ProgressPage() {
  const { lessons, stages } = useCourseData()
  const { completed, bookmarked, wrongLessonIds, exerciseAttempts, exerciseCorrect, progress } = useLearningProgress()
  const accuracy = exerciseAttempts ? Math.round(exerciseCorrect / exerciseAttempts * 100) : 0
  return <AppShell><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"><div className="mb-9"><p className="eyebrow">Learning analytics</p><h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">学习进度</h1><p className="mt-3 text-sm text-slate-500">数据只保存在当前浏览器中。</p></div>
    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
      { icon: Gauge, label: '课程总进度', value: `${progress}%`, color: 'text-emerald-500' },
      { icon: CheckCircle2, label: '已掌握课程', value: `${completed.length} / ${lessons.length}`, color: 'text-sky-500' },
      { icon: Target, label: '练习正确率', value: `${accuracy}%`, color: 'text-violet-500' },
      { icon: Flame, label: '待复习错题', value: String(wrongLessonIds.length), color: 'text-rose-500' },
    ].map(({ icon: Icon, label, value, color }) => <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]"><Icon size={20} className={color} /><div className="mt-5 text-2xl font-black text-slate-950 dark:text-white">{value}</div><div className="mt-1 text-xs text-slate-400">{label}</div></div>)}</div>
    <div className="grid gap-7 lg:grid-cols-[1fr_340px]"><section><div className="mb-4 flex items-center justify-between"><h2 className="section-title">阶段完成度</h2><span className="text-xs text-slate-400">{stages.length} 个阶段</span></div><div className="space-y-3">{stages.map((stage) => { const stageLessons = lessons.filter((lesson) => lesson.stageId === stage.id); const done = stageLessons.filter((lesson) => completed.includes(lesson.id)).length; const value = Math.round(done / stageLessons.length * 100); const next = stageLessons.find((lesson) => !completed.includes(lesson.id)) ?? stageLessons[0]; return <div key={stage.id} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.025]"><div className="flex items-center gap-4"><span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 font-mono text-xs font-bold text-slate-500 dark:bg-white/10">{String(stage.order).padStart(2, '0')}</span><div className="min-w-0 flex-1"><div className="flex justify-between gap-4"><Link to={`/learn/${next.id}`} className="text-sm font-bold text-slate-900 hover:text-emerald-600 dark:text-white">{stage.shortTitle}</Link><span className="text-xs text-slate-400">{done}/{stageLessons.length}</span></div><ProgressBar value={value} className="mt-3" /></div><span className="w-10 text-right text-xs font-bold text-slate-500">{value}%</span></div></div>})}</div></section>
      <aside className="space-y-5"><div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex items-center gap-2"><Bookmark size={17} className="text-amber-500" /><h2 className="font-bold text-slate-900 dark:text-white">我的收藏</h2></div><div className="mt-5 space-y-3">{bookmarked.length ? bookmarked.slice(0, 8).map((id) => { const lesson = lessons.find((item) => item.id === id); return lesson ? <Link key={id} to={`/learn/${id}`} className="block rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600 hover:text-emerald-600 dark:bg-white/[0.04] dark:text-slate-300">{lesson.title}</Link> : null }) : <p className="text-sm leading-6 text-slate-400">在课程详情页点击书签，就能在这里快速返回。</p>}</div></div><div className="rounded-3xl bg-[#0c1d18] p-6 text-white"><h3 className="font-bold">练习统计</h3><div className="mt-5 grid grid-cols-2 gap-4"><div><div className="text-2xl font-black text-mint">{exerciseAttempts}</div><div className="text-[11px] text-slate-400">累计作答</div></div><div><div className="text-2xl font-black text-mint">{exerciseCorrect}</div><div className="text-[11px] text-slate-400">累计答对</div></div></div><Link to="/practice" className="mt-6 inline-flex items-center text-xs font-bold text-emerald-300">继续练习 →</Link></div></aside>
    </div>
  </div></AppShell>
}
