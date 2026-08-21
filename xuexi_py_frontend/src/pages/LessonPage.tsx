import { ArrowLeft, ArrowRight, Bookmark, Check, CheckCircle2, Code2, GitBranch, Lightbulb, TriangleAlert } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { ExerciseCard } from '../components/lesson/ExerciseCard'
import { SimulatedRunner } from '../components/lesson/SimulatedRunner'
import { CodeBlock } from '../components/ui/CodeBlock'
import { Button } from '../components/ui/Button'
import { LessonMeta } from '../components/ui/LessonMeta'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'
import { getAdjacentLessons } from '../utils/course'

export function LessonPage() {
  const { lessonId } = useParams()
  const { getLessonById, lessons, stages } = useCourseData()
  const lesson = getLessonById(lessonId)
  const { toggleComplete, toggleBookmark, isComplete, isBookmarked } = useLearningProgress()
  if (!lesson) return <Navigate to="/learn/what-is-python" replace />
  const { previous, next } = getAdjacentLessons(lessons, lesson.id)
  const stage = stages.find((item) => item.id === lesson.stageId)
  const done = isComplete(lesson.id)
  const bookmarked = isBookmarked(lesson.id)

  return (
    <AppShell showSidebar>
      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="mb-8 flex items-center gap-2 text-xs text-slate-400"><Link to="/roadmap" className="hover:text-emerald-500">{stage?.shortTitle ?? 'Python 学习'}</Link><span>/</span><span>{lesson.title}</span></div>
        <header className="mb-10 border-b border-slate-200 pb-8 dark:border-white/10">
          <div className="flex items-start justify-between gap-6"><div><div className="mb-3 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">LESSON {String(lesson.order).padStart(2, '0')}</div><h1 className="text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">{lesson.title}</h1><p className="mt-3 text-base text-slate-500 dark:text-slate-400">{lesson.subtitle}</p></div><button onClick={() => toggleBookmark(lesson.id)} className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition ${bookmarked ? 'border-amber-300 bg-amber-50 text-amber-500 dark:bg-amber-400/10' : 'border-slate-200 text-slate-400 hover:text-slate-700 dark:border-white/10 dark:hover:text-white'}`} aria-label="收藏本节"><Bookmark size={18} fill={bookmarked ? 'currentColor' : 'none'} /></button></div>
          <div className="mt-6"><LessonMeta difficulty={lesson.difficulty} importance={lesson.importance} duration={lesson.duration} /></div>
        </header>

        <div className="lesson-content space-y-12">
          <section><SectionHeading number="01" title="一句话理解" /><div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-6 text-lg font-semibold leading-8 text-slate-800 dark:border-emerald-400/20 dark:bg-emerald-400/[0.06] dark:text-slate-100"><span className="mr-3 text-2xl text-emerald-500">“</span>{lesson.oneLiner}</div></section>

          <section><SectionHeading number="02" title="JavaScript 对比" subtitle="先从你熟悉的语法建立映射" /><div className="grid gap-4 md:grid-cols-2"><CodeBlock code={lesson.comparison.javascript} language="javascript" label="JavaScript" /><CodeBlock code={lesson.comparison.python} language="python" label="Python" /></div><div className="mt-4 flex gap-3 rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-600 dark:bg-white/[0.04] dark:text-slate-400"><Lightbulb size={17} className="mt-1 shrink-0 text-amber-500" /><p>{lesson.comparison.note}</p></div></section>

          <section><SectionHeading number="03" title="逐行拆解" /><div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.025]">{lesson.explanation.map((line, index) => <div key={line.code} className={`grid gap-2 p-4 sm:grid-cols-[200px_1fr] sm:gap-6 ${index ? 'border-t border-slate-100 dark:border-white/[0.06]' : ''}`}><code className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">{line.code}</code><p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{line.description}</p></div>)}</div></section>

          <section><SectionHeading number="04" title="常见错误" subtitle="重点检查 AI 生成代码里的这些位置" /><div className="grid gap-3">{lesson.commonErrors.map((error) => <div key={error.title} className="rounded-2xl border border-rose-200/70 bg-rose-50/50 p-5 dark:border-rose-400/15 dark:bg-rose-400/[0.035]"><div className="flex gap-3"><TriangleAlert size={18} className="mt-0.5 shrink-0 text-rose-500" /><div><h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{error.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{error.description}</p>{error.code && <pre className="mt-3 overflow-x-auto rounded-xl bg-[#0b1311] p-3 font-mono text-xs leading-5 text-rose-200">{error.code}</pre>}</div></div></div>)}</div></section>

          <section><SectionHeading number="05" title="AI 项目中会怎么出现" /><div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-white/10 dark:bg-white/[0.025]"><div className="mb-4 flex items-start gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300"><GitBranch size={17} /></span><div><h3 className="font-bold text-slate-900 dark:text-white">{lesson.realWorld.title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{lesson.realWorld.description}</p></div></div><CodeBlock code={lesson.realWorld.code} /></div></section>

          <section><SectionHeading number="06" title="小练习" /><ExerciseCard key={lesson.id} exercise={lesson.exercise} lessonId={lesson.id} /></section>

          <section><SectionHeading number="07" title="运行代码" subtitle="代码在浏览器内通过 Pyodide 真实执行，不会上传到服务器" /><SimulatedRunner key={lesson.id} code={lesson.comparison.python} /></section>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><span className={`grid h-10 w-10 place-items-center rounded-xl ${done ? 'bg-emerald-500 text-emerald-950' : 'bg-slate-100 text-slate-400 dark:bg-white/10'}`}>{done ? <Check size={19} /> : <Code2 size={19} />}</span><div><div className="font-bold text-slate-900 dark:text-white">{done ? '这一节已掌握' : '理解这一节了吗？'}</div><div className="mt-0.5 text-xs text-slate-400">进度只保存在当前浏览器</div></div></div><Button variant={done ? 'secondary' : 'default'} onClick={() => toggleComplete(lesson.id)}>{done ? '取消完成' : <><CheckCircle2 size={16} /> 我已掌握</>}</Button></div></div>

        <nav className="mt-6 grid gap-3 sm:grid-cols-2">{previous ? <Link to={`/learn/${previous.id}`} className="lesson-nav"><ArrowLeft size={16} /><span><small>上一节</small>{previous.title}</span></Link> : <div />}{next ? <Link to={`/learn/${next.id}`} className="lesson-nav justify-end text-right"><span><small>下一节</small>{next.title}</span><ArrowRight size={16} /></Link> : <Link to="/roadmap" className="lesson-nav justify-end text-right"><span><small>完成阶段</small>查看学习路线</span><ArrowRight size={16} /></Link>}</nav>
      </article>
    </AppShell>
  )
}

function SectionHeading({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return <div className="mb-5 flex items-start gap-4"><span className="mt-1 font-mono text-[10px] font-bold tracking-wider text-emerald-500">{number}</span><div><h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">{title}</h2>{subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}</div></div>
}
