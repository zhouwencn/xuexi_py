import { useCallback, useState } from 'react'

interface PyodideRuntime {
  loadPackagesFromImports: (code: string) => Promise<void>
  runPythonAsync: (code: string) => Promise<unknown>
}

export interface CodeTestResult {
  name: string
  passed: boolean
  error: string
}

export interface CodeTestRun {
  passed: number
  total: number
  output: string
  results: CodeTestResult[]
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

  const runTests = useCallback(async (code: string, testCases: { name: string; code: string }[]): Promise<CodeTestRun> => {
    setError('')
    setStatus((current) => current === 'ready' ? 'running' : 'loading')
    try {
      const runtime = await loadRuntime()
      setStatus('running')
      await runtime.loadPackagesFromImports(code)
      const source = JSON.stringify(code)
      const testsSource = JSON.stringify(JSON.stringify(testCases))
      const raw = await runtime.runPythonAsync(`
import contextlib
import io
import json
import traceback

_source = ${source}
_tests = json.loads(${testsSource})
_scope = {}
_buffer = io.StringIO()
_results = []
_load_error = None

try:
    with contextlib.redirect_stdout(_buffer), contextlib.redirect_stderr(_buffer):
        exec(compile(_source, "<solution>", "exec"), _scope)
except Exception:
    _load_error = traceback.format_exc()

for _test in _tests:
    if _load_error:
        _results.append({"name": _test["name"], "passed": False, "error": _load_error})
        continue
    try:
        with contextlib.redirect_stdout(_buffer), contextlib.redirect_stderr(_buffer):
            exec(compile(_test["code"], "<test>", "exec"), _scope)
        _results.append({"name": _test["name"], "passed": True, "error": ""})
    except Exception:
        _results.append({"name": _test["name"], "passed": False, "error": traceback.format_exc()})

json.dumps({
    "passed": sum(1 for _item in _results if _item["passed"]),
    "total": len(_results),
    "output": _buffer.getvalue(),
    "results": _results,
}, ensure_ascii=False)
`)
      const result = JSON.parse(String(raw)) as CodeTestRun
      setStatus('ready')
      return result
    } catch (reason) {
      const message = reason instanceof Error ? reason.message : String(reason)
      setError(message)
      setStatus('error')
      return { passed: 0, total: testCases.length, output: '', results: testCases.map((item) => ({ name: item.name, passed: false, error: message })) }
    }
  }, [])

  return { run, runTests, status, error, version: PYODIDE_VERSION }
}
