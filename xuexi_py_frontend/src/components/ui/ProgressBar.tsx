import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  className?: string
  label?: string
}

export function ProgressBar({ value, className, label = '学习进度' }: ProgressBarProps) {
  const normalizedValue = Math.min(100, Math.max(0, value))
  return (
    <ProgressPrimitive.Root
      value={normalizedValue}
      aria-label={label}
      className={cn('relative h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10', className)}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 transition-transform duration-500"
        style={{ transform: `translateX(-${100 - normalizedValue}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}
