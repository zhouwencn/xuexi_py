import { ArrowRight, BookOpenCheck, CheckCircle2, Clock3, Code2, Flame, Gauge, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'

export function HomePage() {
  const { getLessonById, lessons, stages } = useCourseData()
  const { completed, progress, currentLessonId, history } = useLearningProgress()
  const currentLesson = getLessonById(currentLessonId) ?? lessons[0]
  const currentStage = stages.find((stage) => stage.id === currentLesson.stageId)
  const totalHours = Math.round(lessons.reduce((sum, lesson) => sum + lesson.duration, 0) / 60)
  const recent = history.slice(0, 3).map((item) => ({ ...item, lesson: getLessonById(item.lessonId) })).filter((item) => item.lesson)

  return (
    <AppShell>
      <div className="relative overflow-hidden border-b border-slate-200 dark:border-white/[0.07]">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-emerald-300/15 blur-3xl dark:bg-emerald-400/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-emerald-300"><Sparkles size={13} /> 为 JavaScript 开发者设计的 Python 路线</div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">不背语法，<br /><span className="text-emerald-500">学会读懂真实代码。</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">从 JS 直觉出发，逐步获得阅读、判断和修改 AI 生成 Python 项目的能力。最终看懂 FastAPI、Agent、自动化和数据处理代码。</p>
              <div className="mt-8 flex flex-wrap items-center gap-3"><Link to={`/learn/${currentLesson.id}`} className="btn-primary px-5 py-3 text-sm">继续学习 <ArrowRight size={16} /></Link><Link to="/roadmap" className="btn-secondary px-5 py-3 text-sm">查看完整路线</Link></div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/75 p-5 shadow-glow backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-start justify-between"><div><p className="text-xs font-semibold text-slate-500">已开放课程总进度</p><div className="mt-2 text-4xl font-black tracking-tight text-slate-950 dark:text-white">{progress}<span className="text-xl text-slate-400">%</span></div></div><div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-mint"><Gauge size={23} /></div></div>
              <ProgressBar value={progress} className="mt-5 h-2" />
              <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 pt-5 text-center dark:divide-white/10 dark:border-white/10"><div><strong className="block text-lg text-slate-900 dark:text-white">{completed.length}</strong><span className="text-[11px] text-slate-400">已完成</span></div><div><strong className="block text-lg text-slate-900 dark:text-white">{lessons.length - completed.length}</strong><span className="text-[11px] text-slate-400">待学习</span></div><div><strong className="block text-lg text-slate-900 dark:text-white">~{totalHours}h</strong><span className="text-[11px] text-slate-400">全部课程</span></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 dark:border-emerald-400/20 dark:from-emerald-400/[0.07] dark:to-white/[0.02]">
            <div className="flex h-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400"><Target size={14} /> 今日建议 · {currentStage?.shortTitle}</div><h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{currentLesson.title}</h2><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{currentLesson.subtitle} · 预计 {currentLesson.duration} 分钟完成</p></div><Link to={`/learn/${currentLesson.id}`} className="btn-primary shrink-0">开始这一节 <ArrowRight size={15} /></Link></div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035]"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-400/10 dark:text-amber-300"><Flame size={20} /></span><span className="text-xs text-slate-400">保持节奏</span></div><div className="mt-5 text-2xl font-black text-slate-950 dark:text-white">1 节 / 天</div><p className="mt-1 text-xs leading-5 text-slate-500">每天 10 分钟，比周末突击更有效。</p></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <section>
            <div className="mb-5 flex items-end justify-between"><div><p className="eyebrow">Your roadmap</p><h2 className="section-title">从语法到真实项目</h2></div><Link to="/roadmap" className="hidden items-center gap-1 text-sm font-semibold text-emerald-600 sm:flex dark:text-emerald-400">全部 13 阶段 <ArrowRight size={14} /></Link></div>
            <div className="space-y-3">
              {stages.slice(0, 4).map((stage) => {
                const stageLessons = lessons.filter((item) => item.stageId === stage.id)
                const stageDone = stageLessons.filter((item) => completed.includes(item.id)).length
                const stageProgress = stageLessons.length ? Math.round(stageDone / stageLessons.length * 100) : 0
                const active = stage.status === 'active'
                return <div key={stage.id} className={`group rounded-2xl border p-5 transition ${active ? 'border-emerald-200 bg-white shadow-sm dark:border-emerald-400/20 dark:bg-white/[0.04]' : 'border-slate-200 bg-white/60 dark:border-white/[0.07] dark:bg-white/[0.02]'}`}>
                  <div className="flex items-start gap-4"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold ${active ? 'bg-emerald-500 text-emerald-950' : 'bg-slate-100 text-slate-400 dark:bg-white/10'}`}>{String(stage.order).padStart(2, '0')}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h3 className="font-bold text-slate-900 dark:text-white">{stage.shortTitle}</h3>{active && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">已开放</span>}</div><p className="mt-1.5 text-sm leading-6 text-slate-500">{stage.description}</p>{active && <div className="mt-4 flex items-center gap-3"><ProgressBar value={stageProgress} className="max-w-48 flex-1" /><span className="text-xs font-semibold text-slate-500">{stageProgress}%</span></div>}</div><span className="text-xs text-slate-400">{stage.lessonCount} 节</span></div>
                </div>
              })}
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.035]"><div className="mb-5 flex items-center justify-between"><div><p className="eyebrow">Recent</p><h3 className="mt-1 font-bold text-slate-900 dark:text-white">最近完成</h3></div><CheckCircle2 size={18} className="text-emerald-500" /></div>{recent.length ? <div className="space-y-4">{recent.map((item) => <Link key={item.lessonId} to={`/learn/${item.lessonId}`} className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10"><CheckCircle2 size={15} /></span><div className="min-w-0"><div className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">{item.lesson?.title}</div><div className="mt-0.5 text-[10px] text-slate-400">{stages.find((stage) => stage.id === item.lesson?.stageId)?.shortTitle} · 已掌握</div></div></Link>)}</div> : <div className="rounded-2xl bg-slate-50 p-5 text-center dark:bg-white/[0.03]"><BookOpenCheck size={22} className="mx-auto text-slate-300" /><p className="mt-2 text-xs leading-5 text-slate-400">完成第一节后，你的学习记录会出现在这里。</p></div>}</div>
            <div className="rounded-3xl bg-[#0c1d18] p-6 text-white ring-1 ring-white/10"><div className="flex items-center gap-2 text-xs font-semibold text-emerald-300"><Code2 size={15} /> 学习方法</div><p className="mt-4 text-lg font-bold leading-7">先判断代码意图，<br />再研究每行语法。</p><p className="mt-3 text-xs leading-5 text-slate-400">遇到 AI 代码，先找输入、输出、失败路径和外部依赖。</p><div className="mt-5 flex items-center gap-2 text-[11px] text-slate-500"><Clock3 size={13} /> 每节约 6–12 分钟</div></div>
          </aside>
        </div>
      </div>
    </AppShell>
  )
}
