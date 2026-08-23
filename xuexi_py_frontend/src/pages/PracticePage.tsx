import { ArrowRight, CheckCircle2, Dumbbell, Flame, RotateCcw, Shuffle, XCircle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { CodeExerciseCard } from '../components/lesson/CodeExerciseCard'
import { Button } from '../components/ui/Button'
import { CodeBlock } from '../components/ui/CodeBlock'
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/ui/Tooltip'
import { useCourseData } from '../hooks/useCourseData'
import { useLearningProgress } from '../hooks/useLearningProgress'
import type { Exercise, PracticeItem } from '../types/course'

const exerciseTypeLabels: Record<Exercise['type'], string> = {
  fill: '代码填空', choice: '选择判断', predict: '结果预测', debug: '调试修复', code: '代码实验', review: 'Code Review', incident: '故障诊断', design: '架构设计',
}

export function PracticePage() {
  const { lessons, practiceChallenges, skills, stages } = useCourseData()
  const [stageId, setStageId] = useState('all')
  const [skillId, setSkillId] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const [exerciseType, setExerciseType] = useState('all')
  const pool = useMemo(() => {
    const lessonQuestions: PracticeItem[] = lessons.map((lesson) => ({ id: `lesson-${lesson.id}`, lessonId: lesson.id, title: lesson.title, stageId: lesson.stageId, exercise: { ...lesson.exercise, difficulty: lesson.exercise.difficulty ?? lesson.difficulty } }))
    const selectedSkill = skills.find((skill) => skill.id === skillId)
    return [...practiceChallenges, ...lessonQuestions].filter((item) => {
      const itemDifficulty = item.exercise.difficulty ?? 2
      return (stageId === 'all' || item.stageId === stageId)
        && (!selectedSkill || selectedSkill.lessonIds.includes(item.lessonId))
        && (difficulty === 'all' || difficulty === 'advanced' ? difficulty === 'all' || itemDifficulty >= 4 : itemDifficulty === Number(difficulty))
        && (exerciseType === 'all' || item.exercise.type === exerciseType)
    })
  }, [difficulty, exerciseType, lessons, practiceChallenges, skillId, skills, stageId])
  const filterKey = `${stageId}:${skillId}:${difficulty}:${exerciseType}`
  return <AppShell><div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">Read · Debug · Translate</p><h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">综合练习场</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">不是算法刷题。重点训练看代码、找错误、补全语法和判断 AI 代码意图。</p></div><Button asChild variant="secondary"><Link to="/mistakes"><Flame size={15} className="text-rose-500" /> 查看错题本</Link></Button></div>
    <div className="mb-5 flex gap-2 overflow-x-auto pb-2"><Button size="sm" variant={stageId === 'all' ? 'default' : 'secondary'} className="rounded-full shadow-none" onClick={() => setStageId('all')}>全部课程</Button>{stages.map((stage) => <Button size="sm" variant={stageId === stage.id ? 'default' : 'secondary'} className="rounded-full shadow-none" key={stage.id} onClick={() => setStageId(stage.id)}>{stage.order}. {stage.shortTitle}</Button>)}</div>
    <div className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-4 dark:border-white/10 dark:bg-white/[0.03]"><label className="text-xs font-semibold text-slate-500">技能<select value={skillId} onChange={(event) => setSkillId(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs dark:border-white/10 dark:bg-[#10201c]"><option value="all">全部技能</option>{skills.map((skill) => <option key={skill.id} value={skill.id}>{skill.title}</option>)}</select></label><label className="text-xs font-semibold text-slate-500">难度<select value={difficulty} onChange={(event) => setDifficulty(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs dark:border-white/10 dark:bg-[#10201c]"><option value="all">全部难度</option>{[1,2,3,4,5].map((value) => <option key={value} value={value}>难度 {value}</option>)}<option value="advanced">高级/专家（4+）</option></select></label><label className="text-xs font-semibold text-slate-500">题型<select value={exerciseType} onChange={(event) => setExerciseType(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs dark:border-white/10 dark:bg-[#10201c]"><option value="all">全部题型</option>{Object.entries(exerciseTypeLabels).map(([value,label]) => <option key={value} value={value}>{label}</option>)}</select></label><div className="flex flex-col justify-between"><span className="text-xs text-slate-400">当前题库 <strong className="text-slate-700 dark:text-slate-200">{pool.length}</strong> 道</span><Button size="sm" variant="secondary" onClick={() => { setStageId('all'); setSkillId('all'); setDifficulty('advanced'); setExerciseType('all') }}>高级/专家模式</Button></div></div>
    <PracticeSession key={filterKey} pool={pool} />
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
  const [codeScored, setCodeScored] = useState(false)
  const current = queue[index]
  const finished = !current

  if (!pool.length) return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-white/10 dark:bg-white/[0.03]">当前筛选条件没有题目，请调整技能、难度或题型。</div>

  function submit() {
    if (!selected || !current) return
    const correct = selected === current.exercise.answer
    recordExercise(current.lessonId, correct, current.exercise.id ?? current.id)
    if (correct) setScore((value) => value + 1)
    setSubmitted(true)
  }

  function next() { setIndex((value) => value + 1); setSelected(undefined); setSubmitted(false); setCodeScored(false) }
  function shuffle() {
    setQueue([...pool].sort(() => Math.random() - 0.5).slice(0, 20))
    setIndex(0); setScore(0); setSelected(undefined); setSubmitted(false); setCodeScored(false)
  }

  if (finished) return <div className="rounded-3xl border border-emerald-200 bg-white p-8 text-center dark:border-emerald-400/20 dark:bg-white/[0.03]"><CheckCircle2 size={42} className="mx-auto text-emerald-500" /><h2 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">本轮完成</h2><p className="mt-2 text-sm text-slate-500">答对 {score} / {queue.length}，错误题目已自动进入错题本。</p><Button onClick={shuffle} className="mt-6"><RotateCcw size={15} /> 再来一轮</Button></div>

  const exercise = current.exercise
  const correct = selected === exercise.answer
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-mint"><Dumbbell size={17} /></span><div><div className="text-xs font-bold text-slate-900 dark:text-white">{current.title}</div><div className="mt-0.5 text-[10px] text-slate-400">{stages.find((stage) => stage.id === current.stageId)?.shortTitle} · {exercise.type}</div></div></div><div className="flex items-center gap-3"><span className="text-xs text-slate-400">{index + 1} / {queue.length} · 得分 {score}</span><Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon-sm" onClick={shuffle} aria-label="随机出题"><Shuffle size={15} /></Button></TooltipTrigger><TooltipContent>随机出题</TooltipContent></Tooltip></div></div>
    <div className="p-5 sm:p-8">{exercise.type === 'code' ? <CodeExerciseCard key={current.id} exercise={exercise} lessonId={current.lessonId} onResult={(passed) => { if (passed) { if (!codeScored) setScore((value) => value + 1); setCodeScored(true); setSubmitted(true) } }} /> : <><h2 className="text-lg font-bold leading-7 text-slate-950 dark:text-white">{exercise.prompt}</h2>{exercise.code && <div className="mt-5"><CodeBlock code={exercise.code} /></div>}<div className="mt-6 grid gap-3">{exercise.options.map((option, optionIndex) => { const style = submitted && option === exercise.answer ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-400/10' : submitted && option === selected ? 'border-rose-400 bg-rose-50 dark:bg-rose-400/10' : selected === option ? 'border-emerald-400 bg-emerald-50/50 dark:bg-emerald-400/[0.06]' : 'border-slate-200 hover:border-slate-300 dark:border-white/10'; return <button key={option} disabled={submitted} onClick={() => setSelected(option)} className={`flex items-start gap-3 rounded-2xl border p-4 text-left text-sm transition ${style}`}><span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-100 font-mono text-xs dark:bg-white/10">{String.fromCharCode(65 + optionIndex)}</span><code className="break-all font-mono text-xs leading-6 sm:text-sm">{option}</code></button> })}</div>
      {submitted && <div className={`mt-5 flex gap-3 rounded-2xl p-4 text-sm ${correct ? 'bg-emerald-100/70 text-emerald-900 dark:bg-emerald-400/10 dark:text-emerald-200' : 'bg-rose-100/70 text-rose-900 dark:bg-rose-400/10 dark:text-rose-200'}`}>{correct ? <CheckCircle2 size={19} className="shrink-0" /> : <XCircle size={19} className="shrink-0" />}<div><strong>{correct ? '回答正确' : `正确答案：${exercise.answer}`}</strong><p className="mt-1 leading-6 opacity-80">{exercise.explanation}</p></div></div>}
      </>}
      <div className="mt-6 flex justify-end">{submitted ? <Button onClick={next}>下一题 <ArrowRight size={15} /></Button> : exercise.type !== 'code' && <Button onClick={submit} disabled={!selected}>检查答案</Button>}</div>
    </div>
  </div>
}
