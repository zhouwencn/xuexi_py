import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { Button } from './Button'
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip'

interface CodeBlockProps {
  code: string
  language?: 'python' | 'javascript' | 'text'
  label?: string
}

export function CodeBlock({ code, language = 'python', label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function copyCode() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#0b1311] shadow-sm dark:border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          <span className={`h-2 w-2 rounded-full ${language === 'javascript' ? 'bg-amber-300' : 'bg-emerald-400'}`} />
          {label ?? language}
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon-sm" onClick={copyCode} className="h-8 w-8 text-slate-500 hover:bg-white/10 hover:text-slate-200" aria-label="复制代码">
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{copied ? '已复制' : '复制代码'}</TooltipContent>
        </Tooltip>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-slate-200"><code>{code}</code></pre>
    </div>
  )
}
