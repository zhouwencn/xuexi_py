import { ArrowRight, CheckCircle2, Dumbbell, Flame, RotateCcw, Shuffle, XCircle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { CodeBlock } from '../components/ui/CodeBlock'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'
import type { PracticeItem } from '../types/course'

export function PracticePage() {
  const { lessons, practiceChallenges, stages } = useCourseData()
  const [stageId, setStageId] = useState('all')
  const pool = useMemo(() => {
    const lessonQuestions: PracticeItem[] = lessons.map((lesson) => ({ id: `lesson-${lesson.id}`, lessonId: lesson.id, title: lesson.title, stageId: lesson.stageId, exercise: lesson.exercise }))
    return [...practiceChallenges, ...lessonQuestions].filter((item) => stageId === 'all' || item.stageId === stageId)
  }, [lessons, practiceChallenges, stageId])
  return <AppShell><div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Read · Debug · Translate</p><h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">综合练习场</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">不是算法刷题。重点训练看代码、找错误、补全语法和判断 AI 代码意图。</p></div><Link to="/mistakes" className="btn-secondary"><Flame size={15} className="text-rose-500" /> 查看错题本</Link></div>
    <div className="mb-5 flex gap-2 overflow-x-auto pb-2"><button onClick={() => setStageId('all')} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${stageId === 'all' ? 'bg-emerald-500 text-emerald-950' : 'border border-slate-200 bg-white text-slate-500 dark:border-white/10 dark:bg-white/[0.03]'}`}>全部课程</button>{stages.map((stage) => <button key={stage.id} onClick={() => setStageId(stage.id)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold ${stageId === stage.id ? 'bg-emerald-500 text-emerald-950' : 'border border-slate-200 bg-white text-slate-500 dark:border-white/10 dark:bg-white/[0.03]'}`}>{stage.order}. {stage.shortTitle}</button>)}</div>
    <PracticeSession key={stageId} pool={pool} />
  </div></AppShell>
}

function PracticeSession({ pool }: { pool: PracticeItem[] }) {
  const { stages } = useCourseData()
  const { recordExercise } = useLearningProgress()
  const [queue, setQueue] = useState(() => pool.slice(0, 20))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string>()
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const current = queue[index]
  const finished = !current

  function submit() {
    if (!selected || !current) return
    const correct = selected === current.exercise.answer
    recordExercise(current.lessonId, correct)
    if (correct) setScore((value) => value + 1)
    setSubmitted(true)
  }

  function next() { setIndex((value) => value + 1); setSelected(undefined); setSubmitted(false) }
  function shuffle() {
    setQueue([...pool].sort(() => Math.random() - 0.5).slice(0, 20))
    setIndex(0); setScore(0); setSelected(undefined); setSubmitted(false)
  }

  if (finished) return <div className="rounded-3xl border border-emerald-200 bg-white p-8 text-center dark:border-emerald-400/20 dark:bg-white/[0.03]"><CheckCircle2 size={42} className="mx-auto text-emerald-500" /><h2 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">本轮完成</h2><p className="mt-2 text-sm text-slate-500">答对 {score} / {queue.length}，错误题目已自动进入错题本。</p><button onClick={shuffle} className="btn-primary mt-6"><RotateCcw size={15} /> 再来一轮</button></div>

  const exercise = current.exercise
  const correct = selected === exercise.answer
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-mint"><Dumbbell size={17} /></span><div><div className="text-xs font-bold text-slate-900 dark:text-white">{current.title}</div><div className="mt-0.5 text-[10px] text-slate-400">{stages.find((stage) => stage.id === current.stageId)?.shortTitle} · {exercise.type}</div></div></div><div className="flex items-center gap-3"><span className="text-xs text-slate-400">{index + 1} / {queue.length} · 得分 {score}</span><button onClick={shuffle} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10" title="随机出题"><Shuffle size={15} /></button></div></div>
    <div className="p-5 sm:p-8"><h2 className="text-lg font-bold leading-7 text-slate-950 dark:text-white">{exercise.prompt}</h2>{exercise.code && <div className="mt-5"><CodeBlock code={exercise.code} /></div>}<div className="mt-6 grid gap-3">{exercise.options.map((option, optionIndex) => { const style = submitted && option === exercise.answer ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-400/10' : submitted && option === selected ? 'border-rose-400 bg-rose-50 dark:bg-rose-400/10' : selected === option ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-400/[0.06]' : 'border-slate-200 hover:border-slate-300 dark:border-white/10'; return <button key={option} disabled={submitted} onClick={() => setSelected(option)} className={`flex items-start gap-3 rounded-2xl border p-4 text-left text-sm transition ${style}`}><span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-100 font-mono text-xs dark:bg-white/10">{String.fromCharCode(65 + optionIndex)}</span><code className="break-all font-mono text-xs leading-6 sm:text-sm">{option}</code></button> })}</div>
      {submitted && <div className={`mt-5 flex gap-3 rounded-2xl p-4 text-sm ${correct ? 'bg-emerald-100/70 text-emerald-900 dark:bg-emerald-400/10 dark:text-emerald-200' : 'bg-rose-100/70 text-rose-900 dark:bg-rose-400/10 dark:text-rose-200'}`}>{correct ? <CheckCircle2 size={19} className="shrink-0" /> : <XCircle size={19} className="shrink-0" />}<div><strong>{correct ? '回答正确' : `正确答案：${exercise.answer}`}</strong><p className="mt-1 leading-6 opacity-80">{exercise.explanation}</p></div></div>}
      <div className="mt-6 flex justify-end">{submitted ? <button onClick={next} className="btn-primary">下一题 <ArrowRight size={15} /></button> : <button onClick={submit} disabled={!selected} className="btn-primary disabled:opacity-40">检查答案</button>}</div>
    </div>
  </div>
}
