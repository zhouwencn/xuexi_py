import { CheckCircle2, FlaskConical, Lightbulb, LoaderCircle, Play, RotateCcw, XCircle } from 'lucide-react'
import { useState } from 'react'
import type { Exercise } from '../../types/course'
import { useLearningProgress } from '../../hooks/useLearningProgress'
import { useAuth } from '../../hooks/useAuth'
import { usePyodide, type CodeTestRun } from '../../hooks/usePyodide'
import { Button } from '../ui/Button'
import { submitHiddenTests, type SubmissionResult } from '../../services/accountApi'

export function CodeExerciseCard({ exercise, lessonId, onResult }: { exercise: Exercise; lessonId: string; onResult?: (correct: boolean) => void }) {
  const [code, setCode] = useState(exercise.starterCode ?? exercise.code ?? '')
  const [result, setResult] = useState<CodeTestRun>()
  const [visibleHints, setVisibleHints] = useState(0)
  const [submission, setSubmission] = useState<SubmissionResult>()
  const [submissionError, setSubmissionError] = useState('')
  const { runTests, status } = usePyodide()
  const { recordExercise } = useLearningProgress()
  const { token } = useAuth()
  const busy = status === 'loading' || status === 'running'

  async function checkCode() {
    const next = await runTests(code, exercise.testCases ?? [])
    const correct = next.total > 0 && next.passed === next.total
    setResult(next)
    recordExercise(lessonId, correct, exercise.id)
    onResult?.(correct)
  }

  async function submitCode() {
    if (!token || !exercise.id) return
    setSubmissionError('')
    try { setSubmission(await submitHiddenTests(token, exercise.id, code)) }
    catch (reason) { setSubmissionError(reason instanceof Error ? reason.message : String(reason)) }
  }

  return <div className="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm dark:border-violet-400/20 dark:bg-white/[0.03]">
    <div className="flex items-start gap-3 border-b border-slate-200 p-5 dark:border-white/10"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500 text-white"><FlaskConical size={17} /></span><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">Code lab · 难度 {exercise.difficulty ?? 3}</p><h3 className="mt-1 font-semibold leading-6 text-slate-900 dark:text-white">{exercise.prompt}</h3></div></div>
    <textarea value={code} onChange={(event) => setCode(event.target.value)} spellCheck={false} className="min-h-56 w-full resize-y bg-[#0b1311] p-5 font-mono text-[13px] leading-6 text-slate-200 outline-none" aria-label="代码练习编辑器" />
    <div className="border-t border-slate-200 p-5 dark:border-white/10">
      {result && <div className="mb-5 space-y-2"><div className={`text-sm font-bold ${result.passed === result.total ? 'text-emerald-600' : 'text-rose-500'}`}>测试通过 {result.passed} / {result.total}</div>{result.results.map((item) => <div key={item.name} className={`flex items-start gap-2 rounded-xl px-3 py-2 text-xs ${item.passed ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200' : 'bg-rose-50 text-rose-800 dark:bg-rose-400/10 dark:text-rose-200'}`}>{item.passed ? <CheckCircle2 size={15} className="shrink-0" /> : <XCircle size={15} className="shrink-0" />}<div><strong>{item.name}</strong>{item.error && <pre className="mt-1 max-h-28 overflow-auto whitespace-pre-wrap opacity-75">{item.error.split('\n').slice(-4).join('\n')}</pre>}</div></div>)}{result.output && <pre className="max-h-28 overflow-auto rounded-xl bg-slate-100 p-3 text-xs dark:bg-black/20">{result.output}</pre>}</div>}
      {visibleHints > 0 && <div className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-400/10 dark:text-amber-100">{exercise.hints?.slice(0, visibleHints).map((hint, index) => <p key={hint}>{index + 1}. {hint}</p>)}</div>}
      <div className="flex flex-wrap justify-between gap-3"><div className="flex gap-2"><Button variant="secondary" size="sm" onClick={() => { setCode(exercise.starterCode ?? ''); setResult(undefined) }}><RotateCcw size={14} /> 重置</Button>{visibleHints < (exercise.hints?.length ?? 0) && <Button variant="ghost" size="sm" onClick={() => setVisibleHints((value) => value + 1)}><Lightbulb size={14} /> 查看提示</Button>}</div><Button onClick={checkCode} disabled={busy}>{busy ? <LoaderCircle size={14} className="animate-spin" /> : <Play size={14} fill="currentColor" />}运行测试</Button></div>
      {result && result.passed === result.total && result.total > 0 && <div className="mt-4 border-t border-slate-100 pt-4 dark:border-white/10">{token ? <Button variant="secondary" onClick={submitCode}>提交隐藏测试与评审</Button> : <p className="text-xs text-slate-400">登录后可以提交隐藏测试、保存历史并查看代码差异。</p>}{submissionError && <p className="mt-3 text-sm text-rose-500">{submissionError}</p>}{submission && <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm dark:bg-black/20"><strong className="text-emerald-600">隐藏测试 {submission.passed}/{submission.total} · {submission.score}%</strong><ul className="mt-3 space-y-1 text-xs text-slate-500">{submission.review.map((item) => <li key={item}>• {item}</li>)}</ul>{submission.diff && <pre className="mt-3 max-h-48 overflow-auto whitespace-pre-wrap text-[11px] text-slate-500">{submission.diff}</pre>}</div>}</div>}
    </div>
  </div>
}
