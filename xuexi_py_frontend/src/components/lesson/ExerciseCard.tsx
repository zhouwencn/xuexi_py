import { CheckCircle2, Lightbulb, RotateCcw, XCircle } from 'lucide-react'
import { useState } from 'react'
import type { Exercise } from '../../types/course'
import { useLearningProgress } from '../../hooks/useLearningProgress'
import { CodeBlock } from '../ui/CodeBlock'

export function ExerciseCard({ exercise, lessonId, onCorrect }: { exercise: Exercise; lessonId?: string; onCorrect?: () => void }) {
  const { recordExercise } = useLearningProgress()
  const [selected, setSelected] = useState<string>()
  const [submitted, setSubmitted] = useState(false)
  const isCorrect = selected === exercise.answer

  function submit() {
    if (!selected) return
    setSubmitted(true)
    if (lessonId) recordExercise(lessonId, selected === exercise.answer)
    if (selected === exercise.answer) onCorrect?.()
  }

  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-7 dark:border-emerald-400/20 dark:bg-emerald-400/[0.05]">
      <div className="mb-5 flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-500 text-emerald-950"><Lightbulb size={18} /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">Quick check · {exercise.type}</p><h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{exercise.prompt}</h3></div></div>
      {exercise.code && <div className="mb-5"><CodeBlock code={exercise.code} /></div>}
      <div className="grid gap-2">
        {exercise.options.map((option, index) => {
          const answerStyle = submitted && option === exercise.answer ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-400/10' : submitted && option === selected ? 'border-rose-400 bg-rose-50 dark:bg-rose-400/10' : selected === option ? 'border-emerald-400 bg-white dark:bg-white/[0.08]' : 'border-slate-200 bg-white/70 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20'
          return <button key={option} disabled={submitted} onClick={() => setSelected(option)} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${answerStyle}`}><span className="grid h-6 w-6 place-items-center rounded-md bg-slate-100 font-mono text-xs text-slate-500 dark:bg-white/10">{String.fromCharCode(65 + index)}</span><code className="font-mono text-xs sm:text-sm">{option}</code></button>
        })}
      </div>
      {submitted && <div className={`mt-4 flex gap-3 rounded-xl p-4 text-sm ${isCorrect ? 'bg-emerald-100/70 text-emerald-900 dark:bg-emerald-400/10 dark:text-emerald-200' : 'bg-rose-100/70 text-rose-900 dark:bg-rose-400/10 dark:text-rose-200'}`}>{isCorrect ? <CheckCircle2 className="mt-0.5 shrink-0" size={18} /> : <XCircle className="mt-0.5 shrink-0" size={18} />}<div><strong>{isCorrect ? '判断正确' : '再看一眼'}</strong><p className="mt-1 leading-6 opacity-80">{exercise.explanation}</p></div></div>}
      <div className="mt-5 flex justify-end">
        {submitted ? <button onClick={() => { setSelected(undefined); setSubmitted(false) }} className="btn-secondary"><RotateCcw size={15} /> 再做一次</button> : <button onClick={submit} disabled={!selected} className="btn-primary disabled:cursor-not-allowed disabled:opacity-40">检查答案</button>}
      </div>
    </div>
  )
}
