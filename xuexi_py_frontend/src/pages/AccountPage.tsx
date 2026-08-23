import { Cloud, Download, LogOut, Upload, UserRound } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { useAuth } from '../hooks/useAuth'
import { useLearningProgress } from '../hooks/useLearningProgress'

export function AccountPage() {
  const { login, logout, register, status, user } = useAuth()
  const { cloudSyncStatus, downloadCloudProgress, uploadCloudProgress } = useLearningProgress()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function submit(event: React.FormEvent) {
    event.preventDefault(); setMessage('')
    try {
      if (mode === 'login') await login(email, password)
      else await register(email, displayName, password)
    } catch (reason) { setMessage(reason instanceof Error ? reason.message : String(reason)) }
  }

  return <AppShell><div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="mb-8"><p className="eyebrow">Account & cloud</p><h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">账号与云端进度</h1><p className="mt-3 text-sm leading-6 text-slate-500">不登录仍可本地学习；登录后可以主动上传或下载完整学习状态。</p></div>
    {status === 'authenticated' && user ? <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-100 text-emerald-600"><UserRound size={22} /></span><div><h2 className="font-bold text-slate-950 dark:text-white">{user.displayName}</h2><p className="text-sm text-slate-400">{user.email}</p></div></div><div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-white/[0.04]"><Cloud size={17} className="mb-2 text-sky-500" />同步状态：{cloudSyncStatus === 'syncing' ? '正在同步' : cloudSyncStatus === 'synced' ? '已同步' : cloudSyncStatus === 'error' ? '同步失败' : '尚未同步'}</div><div className="mt-5 flex flex-wrap gap-3"><Button onClick={() => uploadCloudProgress()}><Upload size={15} />上传本地进度</Button><Button variant="secondary" onClick={() => downloadCloudProgress()}><Download size={15} />下载云端进度</Button><Button variant="secondary" asChild><Link to="/environment">临时实验环境</Link></Button><Button variant="ghost" onClick={logout}><LogOut size={15} />退出登录</Button></div></div> : <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/[0.03]"><div className="mb-6 flex gap-2"><Button type="button" variant={mode === 'login' ? 'default' : 'secondary'} onClick={() => setMode('login')}>登录</Button><Button type="button" variant={mode === 'register' ? 'default' : 'secondary'} onClick={() => setMode('register')}>注册</Button></div>{mode === 'register' && <label className="block text-sm font-semibold text-slate-600">显示名称<input value={displayName} onChange={(event) => setDisplayName(event.target.value)} className="mt-2 w-full rounded-xl border p-3 dark:bg-black/20" minLength={2} required /></label>}<label className="mt-4 block text-sm font-semibold text-slate-600">邮箱<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border p-3 dark:bg-black/20" required /></label><label className="mt-4 block text-sm font-semibold text-slate-600">密码<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border p-3 dark:bg-black/20" minLength={mode === 'register' ? 10 : 1} required /></label>{message && <p className="mt-4 text-sm text-rose-500">{message}</p>}<Button type="submit" className="mt-6">{mode === 'login' ? '登录' : '创建账号'}</Button></form>}
  </div></AppShell>
}
