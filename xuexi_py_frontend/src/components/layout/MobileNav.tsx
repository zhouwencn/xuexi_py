import { BookOpen, ChartNoAxesColumnIncreasing, Dumbbell, Terminal } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: '学习', icon: BookOpen },
  { to: '/practice', label: '练习', icon: Dumbbell },
  { to: '/playground', label: '运行', icon: Terminal },
  { to: '/progress', label: '进度', icon: ChartNoAxesColumnIncreasing },
]

export function MobileNav() {
  return <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-4 border-t border-slate-200 bg-white/95 px-2 pb-[max(.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-[#07110f]/95">{items.map(({ to, label, icon: Icon }) => <NavLink key={to} to={to} className={({ isActive }) => `flex flex-col items-center gap-1 text-[10px] font-semibold ${isActive ? 'text-emerald-600 dark:text-mint' : 'text-slate-400'}`}><Icon size={18} /><span>{label}</span></NavLink>)}</nav>
}
