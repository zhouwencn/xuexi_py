import { Braces, CheckCircle2, ChevronDown, LoaderCircle, Play, RotateCcw, TerminalSquare, Wifi } from 'lucide-react'
import { useState } from 'react'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/ui/Tooltip'
import { usePyodide } from '../hooks/usePyodide'

const templates = [
  { name: '基础语法', code: `user = {"name": "Ada", "skills": ["Python", "FastAPI"]}\n\nfor index, skill in enumerate(user["skills"], start=1):\n    print(f"{index}. {skill}")` },
  { name: '数据处理', code: `orders = [\n    {"id": 1, "amount": 99, "paid": True},\n    {"id": 2, "amount": 45, "paid": False},\n    {"id": 3, "amount": 120, "paid": True},\n]\n\npaid_total = sum(order["amount"] for order in orders if order["paid"])\nprint(f"已支付总额：{paid_total}")` },
  { name: '函数与异常', code: `def parse_age(raw_value: str) -> int | None:\n    try:\n        age = int(raw_value)\n    except ValueError:\n        return None\n    return age if age >= 0 else None\n\nfor value in ["18", "unknown", "-1"]:\n    print(value, "->", parse_age(value))` },
  { name: '异步任务', code: `import asyncio\n\nasync def fetch(name: str, delay: float):\n    await asyncio.sleep(delay)\n    return f"{name} 完成"\n\nasync def main():\n    results = await asyncio.gather(\n        fetch("用户", 0.1),\n        fetch("订单", 0.2),\n    )\n    print(results)\n\nawait main()` },
]

export function PlaygroundPage() {
  const [templateIndex, setTemplateIndex] = useState(0)
  const [code, setCode] = useState(templates[0].code)
  const [output, setOutput] = useState('首次运行会下载浏览器 Python 运行时，之后会被缓存。')
  const { run, status, version } = usePyodide()
  const busy = status === 'loading' || status === 'running'

  async function runCode() {
    setOutput(status === 'idle' ? '正在初始化 Python，请稍候…' : '正在运行…')
    setOutput(await run(code))
  }

  function changeTemplate(index: number) {
    setTemplateIndex(index)
    setCode(templates[index].code)
    setOutput('模板已载入，点击运行查看结果。')
  }

  return <AppShell><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Browser Python · Pyodide</p><h1 className="mt-2 text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl dark:text-white">Python Playground</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">代码直接在浏览器中执行，不会上传到服务器。适合验证 AI 生成的小段代码和语言假设。</p></div><div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-500 dark:border-white/10 dark:bg-white/[0.03]"><Wifi size={13} className="text-emerald-500" /> Pyodide {version} · Python in WebAssembly</div></div>
    <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-glow lg:grid-cols-[1.15fr_.85fr] dark:border-white/10 dark:bg-[#0b1714]">
      <section className="border-b border-slate-200 lg:border-b-0 lg:border-r dark:border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3 dark:border-white/10"><div className="flex items-center gap-2"><TerminalSquare size={16} className="text-emerald-500" /><span className="text-xs font-bold">main.py</span></div><div className="flex items-center gap-2"><label className="relative"><select value={templateIndex} onChange={(event) => changeTemplate(Number(event.target.value))} className="appearance-none rounded-lg border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs outline-none dark:border-white/10 dark:bg-white/[0.05]">{templates.map((template, index) => <option key={template.name} value={index}>{template.name}</option>)}</select><ChevronDown size={13} className="pointer-events-none absolute right-2.5 top-2.5 text-slate-400" /></label><Tooltip><TooltipTrigger asChild><Button variant="secondary" size="icon-sm" onClick={() => setCode(templates[templateIndex].code)} aria-label="重置模板"><RotateCcw size={14} /></Button></TooltipTrigger><TooltipContent>重置模板</TooltipContent></Tooltip><Button onClick={runCode} disabled={busy}>{busy ? <LoaderCircle size={14} className="animate-spin" /> : <Play size={14} fill="currentColor" />}{status === 'loading' ? '加载环境' : status === 'running' ? '运行中' : '运行代码'}</Button></div></div>
        <textarea value={code} onChange={(event) => setCode(event.target.value)} onKeyDown={(event) => { if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') runCode() }} spellCheck={false} className="min-h-[520px] w-full resize-y bg-[#08110f] p-5 font-mono text-[13px] leading-6 text-slate-200 outline-none" aria-label="Python 代码编辑器" />
      </section>
      <section className="flex min-h-[300px] flex-col"><div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-xs font-bold dark:border-white/10"><span className="flex items-center gap-2"><Braces size={15} className="text-violet-400" />Output</span>{status === 'ready' && <span className="flex items-center gap-1 text-[10px] text-emerald-500"><CheckCircle2 size={12} /> Runtime ready</span>}</div><pre className="flex-1 whitespace-pre-wrap break-words bg-slate-50 p-5 font-mono text-xs leading-6 text-slate-700 dark:bg-black/20 dark:text-slate-300">{output}</pre><div className="border-t border-slate-200 p-4 text-[11px] leading-5 text-slate-400 dark:border-white/10">快捷键：⌘ / Ctrl + Enter。浏览器运行环境不支持系统文件、原生二进制包和网络 socket；标准库及 Pyodide 兼容包可以使用。</div></section>
    </div>
  </div></AppShell>
}
