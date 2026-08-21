import { Play, RotateCcw, TerminalSquare } from 'lucide-react'
import { useState } from 'react'
import { usePyodide } from '../../hooks/usePyodide'
import { Button } from '../ui/Button'

export function SimulatedRunner({ code }: { code: string; output?: string }) {
  const [value, setValue] = useState(code)
  const [result, setResult] = useState('点击“运行”在浏览器中执行真实 Python 代码。')
  const { run, status } = usePyodide()
  const busy = status === 'loading' || status === 'running'

  async function runCode() {
    setResult(status === 'idle' ? '正在加载 Python 运行环境…' : '正在运行…')
    setResult(await run(value))
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#0b1714]">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-white/10"><div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300"><TerminalSquare size={15} className="text-emerald-500" /> Python Playground <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-normal text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">Pyodide</span></div><button onClick={() => setValue(code)} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10" aria-label="重置代码"><RotateCcw size={14} /></button></div>
      <textarea value={value} onChange={(event) => setValue(event.target.value)} spellCheck={false} className="min-h-36 w-full resize-y bg-[#0b1311] p-4 font-mono text-[13px] leading-6 text-slate-200 outline-none" aria-label="Python 代码编辑器" />
      <div className="flex min-h-20 items-start justify-between gap-4 border-t border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-black/20"><div><div className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Output</div><pre className="whitespace-pre-wrap font-mono text-xs leading-5 text-slate-700 dark:text-slate-300">{result}</pre></div><Button onClick={runCode} disabled={busy}><Play size={14} fill="currentColor" /> {busy ? '运行中' : '运行'}</Button></div>
    </div>
  )
}
