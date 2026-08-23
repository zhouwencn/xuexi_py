import type { ApiResponse, CourseCatalog } from '../types/course'

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL
  ?? (import.meta.env.DEV ? '/api/v1' : '')
).replace(/\/$/, '')
const COURSE_ID = 'python-from-js'

export const courseApiEnabled = Boolean(API_BASE_URL)

export class ApiBusinessError extends Error {
  constructor(
    message: string,
    public readonly code: number,
    public readonly httpStatus: number,
  ) {
    super(message)
    this.name = 'ApiBusinessError'
  }
}

export async function fetchCourseCatalog(signal?: AbortSignal): Promise<CourseCatalog> {
  if (!courseApiEnabled) {
    throw new ApiBusinessError('生产环境未配置课程 API', -1, 0)
  }

  const response = await fetch(`${API_BASE_URL}/courses/${COURSE_ID}/catalog`, {
    headers: { Accept: 'application/json' },
    signal,
  })

  let payload: ApiResponse<CourseCatalog>
  try {
    payload = await response.json() as ApiResponse<CourseCatalog>
  } catch {
    throw new ApiBusinessError('API 返回的数据不是有效 JSON', -1, response.status)
  }

  if (typeof payload.code !== 'number' || typeof payload.message !== 'string' || !('data' in payload)) {
    throw new ApiBusinessError('API 返回格式不符合统一响应规范', -1, response.status)
  }

  if (!response.ok || payload.code !== 0) {
    throw new ApiBusinessError(payload.message || '课程数据请求失败', payload.code, response.status)
  }

  const catalog = payload.data
  if (!catalog) {
    throw new ApiBusinessError('课程 API 成功响应缺少 data', -1, response.status)
  }

  if (!Array.isArray(catalog.stages) || !Array.isArray(catalog.lessons) || !catalog.lessons.length || !Array.isArray(catalog.practiceChallenges) || !Array.isArray(catalog.skills) || !Array.isArray(catalog.projects) || !Array.isArray(catalog.labs)) {
    throw new ApiBusinessError('课程 API 返回的数据结构不完整', -1, response.status)
  }

  return catalog
}
