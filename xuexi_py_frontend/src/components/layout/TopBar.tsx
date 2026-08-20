import { BookOpen, Menu, Moon, Sun } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useCourseData } from '../../hooks/useCourseData'

const navItems = [
  { to: '/', label: '学习首页', end: true },
  { to: '/roadmap', label: '完整路线' },
  { to: '/practice', label: '练习场' },
  { to: '/playground', label: 'Playground' },
  { to: '/mistakes', label: '错题本' },
  { to: '/progress', label: '学习进度' },
]

export function TopBar({ theme, onThemeToggle, onMenuToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void; onMenuToggle: () => void }) {
  const { lessons, stages } = useCourseData()
  const activeStages = stages.filter((stage) => stage.status === 'active').length
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#07110f]/85">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center px-4 sm:px-6">
        <button onClick={onMenuToggle} className="mr-2 rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-white/10" aria-label="打开课程目录"><Menu size={20} /></button>
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0d201b] text-mint shadow-sm ring-1 ring-emerald-300/20"><BookOpen size={18} /></span>
          <div><div className="text-sm font-bold tracking-tight text-slate-950 dark:text-white">PyPath</div><div className="text-[10px] font-medium tracking-wide text-slate-400">READ · REASON · BUILD</div></div>
        </NavLink>
        <nav className="ml-8 hidden items-center gap-5 text-xs font-semibold lg:flex">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => isActive ? 'text-emerald-600 dark:text-mint' : 'nav-link'}>{item.label}</NavLink>)}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-medium text-slate-500 xl:block dark:border-white/10 dark:text-slate-400">{activeStages} 个阶段 · {lessons.length} 节课程</div>
          <button onClick={onThemeToggle} className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-emerald-400/40 dark:hover:text-mint" aria-label="切换深色模式">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </div>
    </header>
  )
}
