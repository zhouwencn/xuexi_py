import { Clock3 } from 'lucide-react'
import { importanceMap } from '../../data/course'
import type { Difficulty, Importance } from '../../types/course'

export function LessonMeta({ difficulty, importance, duration }: { difficulty: Difficulty; importance: Importance; duration: number }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="tag"><span className="tracking-[-2px] text-amber-400">{'★'.repeat(difficulty)}</span><span className="ml-1 text-slate-500">难度</span></span>
      <span className="tag">{importanceMap[importance].icon} {importanceMap[importance].label}</span>
      <span className="tag"><Clock3 size={12} /> {duration} 分钟</span>
    </div>
  )
}
