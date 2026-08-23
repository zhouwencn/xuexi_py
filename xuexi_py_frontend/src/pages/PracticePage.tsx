import { ArrowRight, CheckCircle2, Dumbbell, Flame, RotateCcw, Shuffle } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { CodeExerciseCard } from '../components/lesson/CodeExerciseCard'
import { ExerciseCard } from '../components/lesson/ExerciseCard'
import { Button } from '../components/ui/Button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/ui/Tooltip'
import { useCourseData } from '../hooks/useCourseData'
import type { Exercise, PracticeItem } from '../types/course'

const exerciseTypeLabels: Record<Exercise['type'], string> = {
  fill: '代码填空', choice: '选择判断', predict: '结果预测', debug: '调试修复', code: '代码实验', review: 'Code Review', rewrite: '代码改写', incident: '故障诊断', design: '架构设计',
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
  const [queue, setQueue] = useState(() => pool.slice(0, 20))
  const [index, setIndex] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [codeScored, setCodeScored] = useState(false)
  const current = queue[index]
  const finished = !current

  if (!pool.length) return <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-white/10 dark:bg-white/[0.03]">当前筛选条件没有题目，请调整技能、难度或题型。</div>

  function next() { setIndex((value) => value + 1); setSubmitted(false); setCodeScored(false) }
  function shuffle() {
    setQueue([...pool].sort(() => Math.random() - 0.5).slice(0, 20))
    setIndex(0); setScore(0); setSubmitted(false); setCodeScored(false)
  }

  if (finished) return <div className="rounded-3xl border border-emerald-200 bg-white p-8 text-center dark:border-emerald-400/20 dark:bg-white/[0.03]"><CheckCircle2 size={42} className="mx-auto text-emerald-500" /><h2 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">本轮完成</h2><p className="mt-2 text-sm text-slate-500">答对 {score} / {queue.length}，错误题目已自动进入错题本。</p><Button onClick={shuffle} className="mt-6"><RotateCcw size={15} /> 再来一轮</Button></div>

  const exercise = current.exercise
  return <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-mint"><Dumbbell size={17} /></span><div><div className="text-xs font-bold text-slate-900 dark:text-white">{current.title}</div><div className="mt-0.5 text-[10px] text-slate-400">{stages.find((stage) => stage.id === current.stageId)?.shortTitle} · {exercise.type}</div></div></div><div className="flex items-center gap-3"><span className="text-xs text-slate-400">{index + 1} / {queue.length} · 得分 {score}</span><Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon-sm" onClick={shuffle} aria-label="随机出题"><Shuffle size={15} /></Button></TooltipTrigger><TooltipContent>随机出题</TooltipContent></Tooltip></div></div>
    <div className="p-5 sm:p-8">{exercise.type === 'code' ? <CodeExerciseCard key={current.id} exercise={exercise} lessonId={current.lessonId} onResult={(passed) => { if (passed) { if (!codeScored) setScore((value) => value + 1); setCodeScored(true); setSubmitted(true) } }} /> : <ExerciseCard key={current.id} exercise={exercise} lessonId={current.lessonId} allowRetry={false} onResult={(correct) => { if (correct) setScore((value) => value + 1); setSubmitted(true) }} />}
      {submitted && <div className="mt-6 flex justify-end"><Button onClick={next}>下一题 <ArrowRight size={15} /></Button></div>}
    </div>
  </div>
}
