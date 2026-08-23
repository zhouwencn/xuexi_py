import { CheckCircle2, Lightbulb, RotateCcw, XCircle } from 'lucide-react'
import { useState } from 'react'
import type { Exercise } from '../../types/course'
import { useLearningProgress } from '../../hooks/useLearningProgress'
import { useAuth } from '../../hooks/useAuth'
import { submitExerciseAttempt, type ExerciseAttemptResult } from '../../services/accountApi'
import { CodeBlock } from '../ui/CodeBlock'
import { Button } from '../ui/Button'

export function ExerciseCard({ exercise, lessonId, onResult, allowRetry = true }: { exercise: Exercise; lessonId?: string; onResult?: (correct: boolean) => void; allowRetry?: boolean }) {
  const { recordExercise } = useLearningProgress()
  const { token } = useAuth()
  const [selected, setSelected] = useState<string>()
  const [feedback, setFeedback] = useState<ExerciseAttemptResult>()
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit() {
    if (!selected || !exercise.id) return
    setBusy(true)
    setError('')
    try {
      const result = await submitExerciseAttempt(exercise.id, selected, token ?? undefined)
      setFeedback(result)
      if (lessonId) recordExercise(lessonId, result.correct, exercise.id)
      onResult?.(result.correct)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 sm:p-7 dark:border-emerald-400/20 dark:bg-emerald-400/[0.05]">
      <div className="mb-5 flex items-start gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-500 text-emerald-950"><Lightbulb size={18} /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">Quick check · {exercise.type}</p><h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{exercise.prompt}</h3></div></div>
      {exercise.code && <div className="mb-5"><CodeBlock code={exercise.code} /></div>}
      <div className="grid gap-2">
        {exercise.options.map((option, index) => {
          const answerStyle = feedback && option === feedback.answer ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-400/10' : feedback && option === selected ? 'border-rose-400 bg-rose-50 dark:bg-rose-400/10' : selected === option ? 'border-emerald-400 bg-white dark:bg-white/[0.08]' : 'border-slate-200 bg-white/70 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20'
          return <button key={option} disabled={Boolean(feedback) || busy} onClick={() => setSelected(option)} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${answerStyle}`}><span className="grid h-6 w-6 place-items-center rounded-md bg-slate-100 font-mono text-xs text-slate-500 dark:bg-white/10">{String.fromCharCode(65 + index)}</span><code className="font-mono text-xs sm:text-sm">{option}</code></button>
        })}
      </div>
      {feedback && <div className={`mt-4 flex gap-3 rounded-xl p-4 text-sm ${feedback.correct ? 'bg-emerald-100/70 text-emerald-900 dark:bg-emerald-400/10 dark:text-emerald-200' : 'bg-rose-100/70 text-rose-900 dark:bg-rose-400/10 dark:text-rose-200'}`}>{feedback.correct ? <CheckCircle2 className="mt-0.5 shrink-0" size={18} /> : <XCircle className="mt-0.5 shrink-0" size={18} />}<div><strong>{feedback.correct ? '判断正确' : `正确答案：${feedback.answer}`}</strong><p className="mt-1 leading-6 opacity-80">{feedback.explanation}</p></div></div>}
      {error && <p className="mt-4 text-sm text-rose-500">{error}</p>}
      <div className="mt-5 flex justify-end">
        {feedback ? allowRetry && <Button variant="secondary" onClick={() => { setSelected(undefined); setFeedback(undefined); setError('') }}><RotateCcw size={15} /> 再做一次</Button> : <Button onClick={submit} disabled={!selected || busy}>{busy ? '判题中…' : '提交答案'}</Button>}
      </div>
    </div>
  )
}
