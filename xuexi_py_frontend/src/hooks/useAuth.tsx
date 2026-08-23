/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { fetchMe, loginAccount, registerAccount, type UserAccount } from '../services/accountApi'

const TOKEN_KEY = 'pypath-access-token-v1'
const TOKEN_EXPIRY_KEY = 'pypath-access-token-expiry-v1'

function clearStoredSession() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_EXPIRY_KEY)
}

interface AuthContextValue {
  token: string | null
  user: UserAccount | null
  status: 'loading' | 'anonymous' | 'authenticated'
  login: (email: string, password: string) => Promise<void>
  register: (email: string, displayName: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    const savedToken = localStorage.getItem(TOKEN_KEY)
    const expiresAt = localStorage.getItem(TOKEN_EXPIRY_KEY)
    if (expiresAt && new Date(expiresAt).getTime() <= Date.now()) {
      clearStoredSession()
      return null
    }
    return savedToken
  })
  const [user, setUser] = useState<UserAccount | null>(null)
  const [status, setStatus] = useState<AuthContextValue['status']>(token ? 'loading' : 'anonymous')

  useEffect(() => {
    if (!token) return
    fetchMe(token).then((account) => { setUser(account); setStatus('authenticated') }).catch(() => {
      clearStoredSession(); setToken(null); setUser(null); setStatus('anonymous')
    })
  }, [token])

  useEffect(() => {
    if (!token) return
    const expiresAt = localStorage.getItem(TOKEN_EXPIRY_KEY)
    if (!expiresAt) return
    const delay = Math.max(0, new Date(expiresAt).getTime() - Date.now())
    const timer = window.setTimeout(() => {
      clearStoredSession()
      setToken(null)
      setUser(null)
      setStatus('anonymous')
    }, Math.min(delay, 2_147_000_000))
    return () => window.clearTimeout(timer)
  }, [token])

  function applySession(session: Awaited<ReturnType<typeof loginAccount>>) {
    localStorage.setItem(TOKEN_KEY, session.accessToken)
    localStorage.setItem(TOKEN_EXPIRY_KEY, session.expiresAt)
    setToken(session.accessToken)
    setUser(session.user)
    setStatus('authenticated')
  }

  const value = useMemo<AuthContextValue>(() => ({
    token, user, status,
    login: async (email, password) => applySession(await loginAccount(email, password)),
    register: async (email, displayName, password) => applySession(await registerAccount(email, displayName, password)),
    logout: () => { clearStoredSession(); setToken(null); setUser(null); setStatus('anonymous') },
  }), [status, token, user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used within AuthProvider')
  return value
}
