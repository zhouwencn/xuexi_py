import { Clock3 } from 'lucide-react'
import { importanceMap } from '../../data/course'
import type { Difficulty, Importance } from '../../types/course'
import { Badge } from './Badge'

export function LessonMeta({ difficulty, importance, duration }: { difficulty: Difficulty; importance: Importance; duration: number }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <Badge><span className="tracking-[-2px] text-amber-400">{'★'.repeat(difficulty)}</span><span className="ml-1 text-slate-500">难度</span></Badge>
      <Badge>{importanceMap[importance].icon} {importanceMap[importance].label}</Badge>
      <Badge><Clock3 size={12} /> {duration} 分钟</Badge>
    </div>
  )
}
