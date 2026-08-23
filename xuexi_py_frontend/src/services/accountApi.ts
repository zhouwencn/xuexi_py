import { API_BASE_URL, ApiBusinessError, courseApiEnabled } from './courseApi'
import type { ApiResponse, LearningState } from '../types/course'

export interface UserAccount { id: string; email: string; displayName: string; createdAt: string }
export interface AuthSession { accessToken: string; tokenType: 'bearer'; expiresAt: string; user: UserAccount }
export interface CloudProgress { courseId: string; state: Partial<LearningState>; version: number; updatedAt?: string }
export interface DiagnosticQuestion { id: string; title: string; prompt: string; options: string[]; type: string; difficulty: number; skillIds: string[] }
export interface DiagnosticResult { attemptId: string; score: number; correct: number; total: number; skillScores: Record<string, number>; recommendedSkillIds: string[] }
export interface SubmissionResult { id: string; exerciseId: string; passed: number; total: number; score: number; results: { name: string; passed: boolean; error: string }[]; diff: string; review: string[]; createdAt: string }
export interface EnvironmentInfo { id: string; status: string; url?: string; expiresAt: string }

async function apiRequest<T>(path: string, options: RequestInit = {}, token?: string, allowNull = false): Promise<T> {
  if (!courseApiEnabled) throw new ApiBusinessError('当前环境未配置后端 API', -1, 0)
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers },
  })
  let payload: ApiResponse<T>
  try {
    payload = await response.json() as ApiResponse<T>
  } catch {
    throw new ApiBusinessError('API 返回的数据不是有效 JSON', -1, response.status)
  }
  if (typeof payload.code !== 'number' || typeof payload.message !== 'string' || !('data' in payload)) {
    throw new ApiBusinessError('API 返回格式不符合统一响应规范', -1, response.status)
  }
  if (!response.ok || payload.code !== 0 || (payload.data === null && !allowNull)) throw new ApiBusinessError(payload.message || '请求失败', payload.code, response.status)
  return payload.data as T
}

export const registerAccount = (email: string, displayName: string, password: string) => apiRequest<AuthSession>('/auth/register', { method: 'POST', body: JSON.stringify({ email, displayName, password }) })
export const loginAccount = (email: string, password: string) => apiRequest<AuthSession>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) })
export const fetchMe = (token: string) => apiRequest<UserAccount>('/auth/me', {}, token)
export const fetchCloudProgress = (token: string) => apiRequest<CloudProgress>('/me/progress/python-from-js', {}, token)
export const saveCloudProgress = (token: string, state: LearningState, version: number) => apiRequest<CloudProgress>('/me/progress/python-from-js', { method: 'PUT', body: JSON.stringify({ state, version }) }, token)
export const fetchDiagnostic = (token: string) => apiRequest<{ courseId: string; questions: DiagnosticQuestion[] }>('/diagnostics/python-from-js', {}, token)
export const submitDiagnostic = (token: string, answers: Record<string, string>) => apiRequest<DiagnosticResult>('/diagnostics/python-from-js/submit', { method: 'POST', body: JSON.stringify({ answers }) }, token)
export const submitHiddenTests = (token: string, exerciseId: string, code: string) => apiRequest<SubmissionResult>(`/exercises/${exerciseId}/submissions`, { method: 'POST', body: JSON.stringify({ code }) }, token)
export const fetchEnvironment = (token: string) => apiRequest<EnvironmentInfo | null>('/environments/current', {}, token, true)
export const startEnvironment = (token: string) => apiRequest<EnvironmentInfo>('/environments', { method: 'POST' }, token)
export const stopEnvironment = (token: string) => apiRequest<EnvironmentInfo>('/environments/current', { method: 'DELETE' }, token)
