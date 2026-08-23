import { Clock3 } from 'lucide-react'
import type { Difficulty, Importance } from '../../types/course'
import { Badge } from './Badge'

const importanceMap: Record<Importance, { label: string; icon: string }> = {
  must: { label: '必须掌握', icon: '🔥' },
  frequent: { label: '经常使用', icon: '✅' },
  read: { label: '看懂即可', icon: '👀' },
  skip: { label: '可以暂时跳过', icon: '⏭' },
}

export function LessonMeta({ difficulty, importance, duration }: { difficulty: Difficulty; importance: Importance; duration: number }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <Badge><span className="tracking-[-2px] text-amber-400">{'★'.repeat(difficulty)}</span><span className="ml-1 text-slate-500">难度</span></Badge>
      <Badge>{importanceMap[importance].icon} {importanceMap[importance].label}</Badge>
      <Badge><Clock3 size={12} /> {duration} 分钟</Badge>
    </div>
  )
}
