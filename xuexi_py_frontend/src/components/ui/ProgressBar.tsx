interface ProgressBarProps {
  value: number
  className?: string
}

export function ProgressBar({ value, className = '' }: ProgressBarProps) {
  return (
    <div className={`h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10 ${className}`}>
      <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 transition-all duration-500" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  )
}
