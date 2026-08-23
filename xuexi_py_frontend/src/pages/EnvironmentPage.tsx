import { Boxes, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AppShell } from '../components/layout/AppShell'
import { Button } from '../components/ui/Button'
import { useAuth } from '../hooks/useAuth'
import { fetchEnvironment, startEnvironment, stopEnvironment, type EnvironmentInfo } from '../services/accountApi'

export function EnvironmentPage() {
  const { token, status } = useAuth(); const [environment, setEnvironment] = useState<EnvironmentInfo | null>(); const [message, setMessage] = useState(''); const [busy,setBusy] = useState(false)
  useEffect(() => { if (token) fetchEnvironment(token).then(setEnvironment).catch((reason) => setMessage(reason instanceof Error ? reason.message : String(reason))) }, [token])
  async function action(kind:'start'|'stop') { if (!token) return; setBusy(true); setMessage(''); try { setEnvironment(kind === 'start' ? await startEnvironment(token) : await stopEnvironment(token)) } catch (reason) { setMessage(reason instanceof Error ? reason.message : String(reason)) } finally { setBusy(false) } }
  return <AppShell><div className="mx-auto max-w-3xl px-4 py-12 sm:px-6"><p className="eyebrow">Temporary workspace</p><h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">FastAPI/PostgreSQL 临时环境</h1><div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">该功能默认关闭，需要本地构建受限运行镜像并由后端显式启用。环境有 TTL，PostgreSQL 不暴露到公网。</div>{status !== 'authenticated' ? <p className="mt-8 text-sm text-slate-500">请先登录。</p> : <div className="mt-6 rounded-3xl border bg-white p-7 dark:bg-white/[0.03]"><Boxes size={24} className="text-violet-500" /><h2 className="mt-4 font-bold">{environment ? `状态：${environment.status}` : '当前没有环境'}</h2>{environment?.expiresAt && <p className="mt-2 text-sm text-slate-400">到期时间：{new Date(environment.expiresAt).toLocaleString()}</p>}<div className="mt-5 flex gap-3">{environment?.status === 'running' ? <><Button asChild><a href={environment.url} target="_blank" rel="noreferrer">打开环境 <ExternalLink size={14} /></a></Button><Button variant="secondary" disabled={busy} onClick={() => action('stop')}>停止并清理</Button></> : <Button disabled={busy} onClick={() => action('start')}>创建临时环境</Button>}</div>{message && <p className="mt-4 text-sm text-rose-500">{message}</p>}</div>}</div></AppShell>
}
