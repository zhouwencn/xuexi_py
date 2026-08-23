import { Check, ChevronDown, Circle, LockKeyhole, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useCourseData } from '../../hooks/useCourseData'
import { useLearningProgress } from '../../hooks/useLearningProgress'
import { ProgressBar } from '../ui/ProgressBar'

export function LearningSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lessons, stages } = useCourseData()
  const { completed, progress } = useLearningProgress()
  const { lessonId } = useParams<{ lessonId: string }>()
  const activeStages = stages.filter((stage) => stage.status === 'active')
  const currentStageId = lessons.find((lesson) => lesson.id === lessonId)?.stageId ?? activeStages[0]?.id ?? 'foundation'
  const activeLessonRef = useRef<HTMLAnchorElement>(null)
  const [expansion, setExpansion] = useState(() => ({
    stageId: currentStageId,
    expanded: new Set([currentStageId]),
  }))
  const expanded = expansion.stageId === currentStageId
    ? expansion.expanded
    : new Set([currentStageId])

  useEffect(() => {
    activeLessonRef.current?.scrollIntoView({ block: 'center', inline: 'nearest' })
  }, [lessonId])

  function toggleStage(stageId: string) {
    setExpansion((current) => {
      const next = new Set(current.stageId === currentStageId ? current.expanded : [currentStageId])
      if (next.has(stageId)) next.delete(stageId)
      else next.add(stageId)
      return { stageId: currentStageId, expanded: next }
    })
  }

  return (
    <>
      {open && <button className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden" onClick={onClose} aria-label="关闭目录遮罩" />}
      <aside className={`fixed bottom-0 left-0 top-0 z-50 w-[310px] border-r border-slate-200 bg-[#f8faf9] transition-transform duration-300 lg:sticky lg:top-16 lg:z-20 lg:h-[calc(100vh-4rem)] lg:translate-x-0 dark:border-white/[0.08] dark:bg-[#091512] ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-full flex-col">
          <div className="border-b border-slate-200 p-5 dark:border-white/[0.08]">
            <div className="mb-4 flex items-center justify-between">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Learning path</p><h2 className="mt-1 text-base font-bold text-slate-900 dark:text-white">Python 项目阅读路线</h2></div>
              <button onClick={onClose} className="rounded-lg p-2 text-slate-400 lg:hidden" aria-label="关闭目录"><X size={18} /></button>
            </div>
            <div className="mb-2 flex justify-between text-xs"><span className="text-slate-500">已开放内容进度</span><strong className="text-slate-800 dark:text-slate-100">{completed.length} / {lessons.length}</strong></div>
            <ProgressBar value={progress} />
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-4">
            {activeStages.map((stage) => {
              const stageLessons = lessons.filter((item) => item.stageId === stage.id)
              const stageCompleted = stageLessons.filter((item) => completed.includes(item.id)).length
              const isExpanded = expanded.has(stage.id)
              return (
                <div key={stage.id} className="mb-4">
                  <button onClick={() => toggleStage(stage.id)} aria-expanded={isExpanded} className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-left hover:bg-white/70 dark:hover:bg-white/[0.04]">
                    <div className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500 text-xs font-bold text-emerald-950">{String(stage.order).padStart(2, '0')}</span><div><div className="text-sm font-semibold text-slate-900 dark:text-white">{stage.shortTitle}</div><div className="text-[10px] text-slate-400">{stageCompleted} / {stageLessons.length} 节已掌握</div></div></div>
                    <ChevronDown size={15} className={`text-slate-400 transition-transform ${isExpanded ? '' : '-rotate-90'}`} />
                  </button>
                  {isExpanded && <div className="ml-[21px] mt-1 border-l border-slate-200 pl-3 dark:border-white/10">
                    {stageLessons.map((item) => {
                      const done = completed.includes(item.id)
                      return (
                        <NavLink ref={item.id === lessonId ? activeLessonRef : undefined} key={item.id} to={`/learn/${item.id}`} end onClick={onClose} className={({ isActive }) => `group mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${isActive ? 'bg-white text-emerald-700 shadow-sm ring-1 ring-slate-200 dark:bg-white/[0.07] dark:text-mint dark:ring-white/10' : 'text-slate-500 hover:bg-white/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.04] dark:hover:text-slate-100'}`}>
                          <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${done ? 'border-emerald-400 bg-emerald-400 text-emerald-950' : 'border-slate-300 text-slate-300 dark:border-white/20 dark:text-white/20'}`}>{done ? <Check size={12} strokeWidth={3} /> : <Circle size={6} fill="currentColor" />}</span>
                          <span className="min-w-0 flex-1 truncate">{String(item.order).padStart(2, '0')} · {item.title}</span>
                          <span className="text-[10px] text-slate-400">{item.duration}m</span>
                        </NavLink>
                      )
                    })}
                  </div>}
                </div>
              )
            })}
            <div className="mt-5 space-y-1 border-t border-slate-200 pt-4 dark:border-white/10">
              {stages.filter((stage) => stage.status === 'coming-soon').map((stage) => (
                <div key={stage.id} className="flex items-center gap-3 rounded-xl px-3 py-3 text-slate-400 opacity-65">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-200 text-[10px] font-bold dark:bg-white/10">{String(stage.order).padStart(2, '0')}</span>
                  <span className="flex-1 text-sm">{stage.shortTitle}</span>
                  <LockKeyhole size={13} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
