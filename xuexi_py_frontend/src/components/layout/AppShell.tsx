import { useState, type ReactNode } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { LearningSidebar } from './LearningSidebar'
import { TopBar } from './TopBar'
import { MobileNav } from './MobileNav'

export function AppShell({ children, showSidebar = false }: { children: ReactNode; showSidebar?: boolean }) {
  const { theme, toggleTheme } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#f5f8f7] pb-16 text-slate-800 transition-colors md:pb-0 dark:bg-[#07110f] dark:text-slate-200">
      <TopBar theme={theme} onThemeToggle={toggleTheme} onMenuToggle={() => setSidebarOpen(true)} />
      {showSidebar ? (
        <div className="mx-auto flex max-w-[1500px] items-start">
          <LearningSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      ) : <main>{children}</main>}
      <MobileNav />
    </div>
  )
}
