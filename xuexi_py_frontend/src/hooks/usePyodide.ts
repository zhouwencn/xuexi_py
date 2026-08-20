import { useCallback, useState } from 'react'

interface PyodideRuntime {
  loadPackagesFromImports: (code: string) => Promise<void>
  runPythonAsync: (code: string) => Promise<unknown>
}

declare global {
  interface Window {
    loadPyodide?: (options: { indexURL: string }) => Promise<PyodideRuntime>
  }
}

const PYODIDE_VERSION = '314.0.3'
const INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`
let runtimePromise: Promise<PyodideRuntime> | null = null

function loadRuntime() {
  if (runtimePromise) return runtimePromise
  runtimePromise = new Promise<PyodideRuntime>((resolve, reject) => {
    const start = () => window.loadPyodide?.({ indexURL: INDEX_URL }).then(resolve, reject)
    if (window.loadPyodide) return start()

    const script = document.createElement('script')
    script.src = `${INDEX_URL}pyodide.js`
    script.async = true
    script.onload = start
    script.onerror = () => reject(new Error('Pyodide 下载失败，请检查网络后重试。'))
    document.head.appendChild(script)
  })
  return runtimePromise
}

export function usePyodide() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'running' | 'error'>('idle')
  const [error, setError] = useState('')

  const run = useCallback(async (code: string) => {
    setError('')
    setStatus((current) => current === 'ready' ? 'running' : 'loading')
    try {
      const runtime = await loadRuntime()
      setStatus('running')
      await runtime.loadPackagesFromImports(code)
      const source = JSON.stringify(code)
      const output = await runtime.runPythonAsync(`
import contextlib
import io
import ast
import inspect
import traceback

_buffer = io.StringIO()
_source = ${source}
try:
    with contextlib.redirect_stdout(_buffer), contextlib.redirect_stderr(_buffer):
        _compiled = compile(
            _source,
            "<playground>",
            "exec",
            flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT,
        )
        _result = eval(_compiled, globals())
        if inspect.isawaitable(_result):
            await _result
except Exception:
    traceback.print_exc(file=_buffer)
_buffer.getvalue()
`)
      setStatus('ready')
      return String(output || '程序运行完成（没有输出）')
    } catch (reason) {
      const message = reason instanceof Error ? reason.message : String(reason)
      setError(message)
      setStatus('error')
      return `运行环境错误：${message}`
    }
  }, [])

  return { run, status, error, version: PYODIDE_VERSION }
}
