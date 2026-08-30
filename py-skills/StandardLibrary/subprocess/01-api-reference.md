<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# subprocess：子进程管理

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/subprocess.html](https://docs.python.org/3.12/library/subprocess.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **67** 个公开对象或用户命令。私有下划线接口不收录。

## `subprocess`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`subprocess`](https://docs.python.org/3.12/library/subprocess.html#module-subprocess) | 模块 | `` | Subprocesses with accessible I/O streams |
| [`subprocess.ABOVE_NORMAL_PRIORITY_CLASS`](https://docs.python.org/3.12/library/subprocess.html#subprocess.ABOVE_NORMAL_PRIORITY_CLASS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.BELOW_NORMAL_PRIORITY_CLASS`](https://docs.python.org/3.12/library/subprocess.html#subprocess.BELOW_NORMAL_PRIORITY_CLASS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.call`](https://docs.python.org/3.12/library/subprocess.html#subprocess.call) | 函数 | `(*popenargs, timeout=None, **kwargs)` | Run command with arguments.  Wait for command to complete or for timeout seconds, then return the returncode attribute. |
| [`subprocess.CalledProcessError`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CalledProcessError) | 异常 | `(returncode, cmd, output=None, stderr=None)` | Raised when run() is called with check=True and the process returns a non-zero exit status. |
| [`subprocess.check_call`](https://docs.python.org/3.12/library/subprocess.html#subprocess.check_call) | 函数 | `(*popenargs, **kwargs)` | Run command with arguments.  Wait for command to complete.  If the exit code was zero then return, otherwise raise CalledProcessError.  The CalledProcessError object will have t... |
| [`subprocess.check_output`](https://docs.python.org/3.12/library/subprocess.html#subprocess.check_output) | 函数 | `(*popenargs, timeout=None, **kwargs)` | Run command with arguments and return its output. |
| [`subprocess.CompletedProcess`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CompletedProcess) | 类 | `(args, returncode, stdout=None, stderr=None)` | A process that has finished running. |
| [`subprocess.CREATE_BREAKAWAY_FROM_JOB`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CREATE_BREAKAWAY_FROM_JOB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.CREATE_DEFAULT_ERROR_MODE`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CREATE_DEFAULT_ERROR_MODE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.CREATE_NEW_CONSOLE`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CREATE_NEW_CONSOLE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.CREATE_NEW_PROCESS_GROUP`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CREATE_NEW_PROCESS_GROUP) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.CREATE_NO_WINDOW`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CREATE_NO_WINDOW) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.DETACHED_PROCESS`](https://docs.python.org/3.12/library/subprocess.html#subprocess.DETACHED_PROCESS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.DEVNULL`](https://docs.python.org/3.12/library/subprocess.html#subprocess.DEVNULL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`subprocess.getoutput`](https://docs.python.org/3.12/library/subprocess.html#subprocess.getoutput) | 函数 | `(cmd, *, encoding=None, errors=None)` | Return output (stdout or stderr) of executing cmd in a shell. |
| [`subprocess.getstatusoutput`](https://docs.python.org/3.12/library/subprocess.html#subprocess.getstatusoutput) | 函数 | `(cmd, *, encoding=None, errors=None)` | Return (exitcode, output) of executing cmd in a shell. |
| [`subprocess.HIGH_PRIORITY_CLASS`](https://docs.python.org/3.12/library/subprocess.html#subprocess.HIGH_PRIORITY_CLASS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.IDLE_PRIORITY_CLASS`](https://docs.python.org/3.12/library/subprocess.html#subprocess.IDLE_PRIORITY_CLASS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.NORMAL_PRIORITY_CLASS`](https://docs.python.org/3.12/library/subprocess.html#subprocess.NORMAL_PRIORITY_CLASS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.PIPE`](https://docs.python.org/3.12/library/subprocess.html#subprocess.PIPE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`subprocess.Popen`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen) | 类 | `(args, bufsize=-1, executable=None, stdin=None, stdout=None, stderr=None, preexec_fn=None, close_fds=True, shell=False, cwd=None, env=Non...` | Execute a child program in a new process. |
| [`subprocess.REALTIME_PRIORITY_CLASS`](https://docs.python.org/3.12/library/subprocess.html#subprocess.REALTIME_PRIORITY_CLASS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.run`](https://docs.python.org/3.12/library/subprocess.html#subprocess.run) | 函数 | `(*popenargs, input=None, capture_output=False, timeout=None, check=False, **kwargs)` | Run command with arguments and return a CompletedProcess instance. |
| [`subprocess.STARTF_USESHOWWINDOW`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTF_USESHOWWINDOW) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.STARTF_USESTDHANDLES`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTF_USESTDHANDLES) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.STARTUPINFO`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTUPINFO) | 类 | `` | 参见官方 API 文档。 |
| [`subprocess.STD_ERROR_HANDLE`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STD_ERROR_HANDLE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.STD_INPUT_HANDLE`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STD_INPUT_HANDLE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.STD_OUTPUT_HANDLE`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STD_OUTPUT_HANDLE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.STDOUT`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STDOUT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`subprocess.SubprocessError`](https://docs.python.org/3.12/library/subprocess.html#subprocess.SubprocessError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`subprocess.SW_HIDE`](https://docs.python.org/3.12/library/subprocess.html#subprocess.SW_HIDE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`subprocess.TimeoutExpired`](https://docs.python.org/3.12/library/subprocess.html#subprocess.TimeoutExpired) | 异常 | `(cmd, timeout, output=None, stderr=None)` | This exception is raised when the timeout expires while waiting for a child process. |

## `subprocess.CalledProcessError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`subprocess.CalledProcessError.cmd`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CalledProcessError.cmd) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.CalledProcessError.output`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CalledProcessError.output) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.CalledProcessError.returncode`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CalledProcessError.returncode) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.CalledProcessError.stderr`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CalledProcessError.stderr) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.CalledProcessError.stdout`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CalledProcessError.stdout) | 属性 | `` | Alias for output attribute, to match stderr |

## `subprocess.CompletedProcess`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`subprocess.CompletedProcess.args`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CompletedProcess.args) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.CompletedProcess.check_returncode`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CompletedProcess.check_returncode) | 方法 | `(self)` | Raise CalledProcessError if the exit code is non-zero. |
| [`subprocess.CompletedProcess.returncode`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CompletedProcess.returncode) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.CompletedProcess.stderr`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CompletedProcess.stderr) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.CompletedProcess.stdout`](https://docs.python.org/3.12/library/subprocess.html#subprocess.CompletedProcess.stdout) | 属性 | `` | 参见官方 API 文档。 |

## `subprocess.Popen`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`subprocess.Popen.args`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.args) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.Popen.communicate`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.communicate) | 方法 | `(self, input=None, timeout=None)` | Interact with process: Send data to stdin and close it. Read data from stdout and stderr, until end-of-file is reached.  Wait for process to terminate. |
| [`subprocess.Popen.kill`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.kill) | 方法 | `(self)` | Kill the process with SIGKILL |
| [`subprocess.Popen.pid`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.pid) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.Popen.poll`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.poll) | 方法 | `(self)` | Check if child process has terminated. Set and return returncode attribute. |
| [`subprocess.Popen.returncode`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.returncode) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.Popen.send_signal`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.send_signal) | 方法 | `(self, sig)` | Send a signal to the process. |
| [`subprocess.Popen.stderr`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.stderr) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.Popen.stdin`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.stdin) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.Popen.stdout`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.stdout) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.Popen.terminate`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.terminate) | 方法 | `(self)` | Terminate the process with SIGTERM |
| [`subprocess.Popen.wait`](https://docs.python.org/3.12/library/subprocess.html#subprocess.Popen.wait) | 方法 | `(self, timeout=None)` | Wait for child process to terminate; returns self.returncode. |

## `subprocess.STARTUPINFO`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`subprocess.STARTUPINFO.dwFlags`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTUPINFO.dwFlags) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.STARTUPINFO.hStdError`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTUPINFO.hStdError) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.STARTUPINFO.hStdInput`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTUPINFO.hStdInput) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.STARTUPINFO.hStdOutput`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTUPINFO.hStdOutput) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.STARTUPINFO.lpAttributeList`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTUPINFO.lpAttributeList) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.STARTUPINFO.wShowWindow`](https://docs.python.org/3.12/library/subprocess.html#subprocess.STARTUPINFO.wShowWindow) | 属性 | `` | 参见官方 API 文档。 |

## `subprocess.TimeoutExpired`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`subprocess.TimeoutExpired.cmd`](https://docs.python.org/3.12/library/subprocess.html#subprocess.TimeoutExpired.cmd) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.TimeoutExpired.output`](https://docs.python.org/3.12/library/subprocess.html#subprocess.TimeoutExpired.output) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.TimeoutExpired.stderr`](https://docs.python.org/3.12/library/subprocess.html#subprocess.TimeoutExpired.stderr) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.TimeoutExpired.stdout`](https://docs.python.org/3.12/library/subprocess.html#subprocess.TimeoutExpired.stdout) | 属性 | `` | 参见官方 API 文档。 |
| [`subprocess.TimeoutExpired.timeout`](https://docs.python.org/3.12/library/subprocess.html#subprocess.TimeoutExpired.timeout) | 属性 | `` | 参见官方 API 文档。 |
