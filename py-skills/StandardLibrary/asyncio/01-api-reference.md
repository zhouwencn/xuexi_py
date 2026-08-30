<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# asyncio：异步 I/O

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/asyncio.html](https://docs.python.org/3.12/library/asyncio.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **304** 个公开对象或用户命令。私有下划线接口不收录。

## `asyncio`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio`](https://docs.python.org/3.12/library/asyncio.html#module-asyncio) | 模块 | `` | The asyncio package, tracking PEP 3156. |
| [`asyncio.AbstractChildWatcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractChildWatcher) | 类 | `()` | Abstract base class for monitoring child processes. |
| [`asyncio.AbstractEventLoop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.AbstractEventLoop) | 类 | `()` | Abstract event loop. |
| [`asyncio.AbstractEventLoopPolicy`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractEventLoopPolicy) | 类 | `()` | Abstract policy for accessing the event loop. |
| [`asyncio.ALL_COMPLETED`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.ALL_COMPLETED) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`asyncio.all_tasks`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.all_tasks) | 函数 | `(loop=None)` | Return a set of all tasks for the loop. |
| [`asyncio.as_completed`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.as_completed) | 函数 | `(fs, *, timeout=None)` | Return an iterator whose values are coroutines. |
| [`asyncio.Barrier`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Barrier) | 类 | `(parties)` | Asyncio equivalent to threading.Barrier |
| [`asyncio.BaseProtocol`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseProtocol) | 类 | `()` | Common base class for protocol interfaces. |
| [`asyncio.BaseTransport`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseTransport) | 类 | `(extra=None)` | Base class for transports. |
| [`asyncio.BoundedSemaphore`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.BoundedSemaphore) | 类 | `(value=1)` | A bounded semaphore implementation. |
| [`asyncio.BrokenBarrierError`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.BrokenBarrierError) | 异常 | `` | Barrier is broken by barrier.abort() call. |
| [`asyncio.BufferedProtocol`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BufferedProtocol) | 类 | `()` | Interface for stream protocol with manual buffer control. |
| [`asyncio.CancelledError`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.CancelledError) | 异常 | `` | The Future or Task was cancelled. |
| [`asyncio.Condition`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition) | 类 | `(lock=None)` | Asynchronous equivalent to threading.Condition. |
| [`asyncio.create_eager_task_factory`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.create_eager_task_factory) | 函数 | `(custom_task_constructor)` | Create a function suitable for use as a task factory on an event-loop. |
| [`asyncio.create_subprocess_exec`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.create_subprocess_exec) | 函数 | `(program, *args, stdin=None, stdout=None, stderr=None, limit=65536, **kwds)` | 参见官方 API 文档。 |
| [`asyncio.create_subprocess_shell`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.create_subprocess_shell) | 函数 | `(cmd, stdin=None, stdout=None, stderr=None, limit=65536, **kwds)` | 参见官方 API 文档。 |
| [`asyncio.create_task`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.create_task) | 函数 | `(coro, *, name=None, context=None)` | Schedule the execution of a coroutine object in a spawn task. |
| [`asyncio.current_task`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.current_task) | 函数 | `(loop=None)` | Return a currently executed task. |
| [`asyncio.DatagramProtocol`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.DatagramProtocol) | 类 | `()` | Interface for datagram protocol. |
| [`asyncio.DatagramTransport`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.DatagramTransport) | 类 | `(extra=None)` | Interface for datagram (UDP) transports. |
| [`asyncio.DefaultEventLoopPolicy`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.DefaultEventLoopPolicy) | 类 | `()` | UNIX event loop policy with a watcher for child processes. |
| [`asyncio.eager_task_factory`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.eager_task_factory) | 函数 | `(loop, coro, *, name=None, context=None)` | 参见官方 API 文档。 |
| [`asyncio.ensure_future`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.ensure_future) | 函数 | `(coro_or_future, *, loop=None)` | Wrap a coroutine or an awaitable in a future. |
| [`asyncio.Event`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Event) | 类 | `()` | Asynchronous equivalent to threading.Event. |
| [`asyncio.FastChildWatcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.FastChildWatcher) | 类 | `()` | 'Fast' child watcher implementation. |
| [`asyncio.FIRST_COMPLETED`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.FIRST_COMPLETED) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`asyncio.FIRST_EXCEPTION`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.FIRST_EXCEPTION) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`asyncio.Future`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future) | 类 | `(*, loop=None)` | This class is *almost* compatible with concurrent.futures.Future. |
| [`asyncio.gather`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.gather) | 函数 | `(*coros_or_futures, return_exceptions=False)` | Return a future aggregating results from the given coroutines/futures. |
| [`asyncio.get_child_watcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.get_child_watcher) | 函数 | `()` | Equivalent to calling get_event_loop_policy().get_child_watcher(). |
| [`asyncio.get_event_loop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.get_event_loop) | 函数 | `()` | Return an asyncio event loop. |
| [`asyncio.get_event_loop_policy`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.get_event_loop_policy) | 函数 | `()` | Get the current event loop policy. |
| [`asyncio.get_running_loop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.get_running_loop) | 函数 | `()` | Return the running event loop.  Raise a RuntimeError if there is none. |
| [`asyncio.Handle`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Handle) | 类 | `(callback, args, loop, context=None)` | Object returned by callback registration methods. |
| [`asyncio.IncompleteReadError`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.IncompleteReadError) | 异常 | `(partial, expected)` | Incomplete read error. Attributes: |
| [`asyncio.InvalidStateError`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.InvalidStateError) | 异常 | `` | The operation is not allowed in this state. |
| [`asyncio.iscoroutine`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.iscoroutine) | 函数 | `(obj)` | Return True if obj is a coroutine object. |
| [`asyncio.isfuture`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.isfuture) | 函数 | `(obj)` | Check for a Future. |
| [`asyncio.LifoQueue`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.LifoQueue) | 类 | `(maxsize=0)` | A subclass of Queue that retrieves most recently added entries first. |
| [`asyncio.LimitOverrunError`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.LimitOverrunError) | 异常 | `(message, consumed)` | Reached the buffer limit while looking for a separator. |
| [`asyncio.Lock`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Lock) | 类 | `()` | Primitive lock objects. |
| [`asyncio.MultiLoopChildWatcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.MultiLoopChildWatcher) | 类 | `()` | A watcher that doesn't require running loop in the main thread. |
| [`asyncio.new_event_loop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.new_event_loop) | 函数 | `()` | Equivalent to calling get_event_loop_policy().new_event_loop(). |
| [`asyncio.open_connection`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.open_connection) | 函数 | `(host=None, port=None, *, limit=65536, **kwds)` | A wrapper for create_connection() returning a (reader, writer) pair. |
| [`asyncio.open_unix_connection`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.open_unix_connection) | 函数 | `(path=None, *, limit=65536, **kwds)` | Similar to `open_connection` but works with UNIX Domain Sockets. |
| [`asyncio.PidfdChildWatcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.PidfdChildWatcher) | 类 | `()` | Child watcher implementation using Linux's pid file descriptors. |
| [`asyncio.PriorityQueue`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.PriorityQueue) | 类 | `(maxsize=0)` | A subclass of Queue; retrieves entries in priority order (lowest first). |
| [`asyncio.ProactorEventLoop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.ProactorEventLoop) | 类 | `` | 参见官方 API 文档。 |
| [`asyncio.Protocol`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.Protocol) | 类 | `()` | Interface for stream protocol. |
| [`asyncio.Queue`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue) | 类 | `(maxsize=0)` | A queue, useful for coordinating producer and consumer coroutines. |
| [`asyncio.QueueEmpty`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.QueueEmpty) | 异常 | `` | Raised when Queue.get_nowait() is called on an empty Queue. |
| [`asyncio.QueueFull`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.QueueFull) | 异常 | `` | Raised when the Queue.put_nowait() method is called on a full Queue. |
| [`asyncio.ReadTransport`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.ReadTransport) | 类 | `(extra=None)` | Interface for read-only transports. |
| [`asyncio.run`](https://docs.python.org/3.12/library/asyncio-runner.html#asyncio.run) | 函数 | `(main, *, debug=None, loop_factory=None)` | Execute the coroutine and return the result. |
| [`asyncio.run_coroutine_threadsafe`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.run_coroutine_threadsafe) | 函数 | `(coro, loop)` | Submit a coroutine object to a given event loop. |
| [`asyncio.Runner`](https://docs.python.org/3.12/library/asyncio-runner.html#asyncio.Runner) | 类 | `(*, debug=None, loop_factory=None)` | A context manager that controls event loop life cycle. |
| [`asyncio.SafeChildWatcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.SafeChildWatcher) | 类 | `()` | 'Safe' child watcher implementation. |
| [`asyncio.SelectorEventLoop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.SelectorEventLoop) | 类 | `(selector=None)` | Unix event loop. |
| [`asyncio.Semaphore`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Semaphore) | 类 | `(value=1)` | A Semaphore implementation. |
| [`asyncio.SendfileNotAvailableError`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.SendfileNotAvailableError) | 异常 | `` | Sendfile syscall is not available. |
| [`asyncio.Server`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server) | 类 | `(loop, sockets, protocol_factory, ssl_context, backlog, ssl_handshake_timeout, ssl_shutdown_timeout=None)` | Abstract server returned by create_server(). |
| [`asyncio.set_child_watcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.set_child_watcher) | 函数 | `(watcher)` | Equivalent to calling get_event_loop_policy().set_child_watcher(watcher). |
| [`asyncio.set_event_loop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.set_event_loop) | 函数 | `(loop)` | Equivalent to calling get_event_loop_policy().set_event_loop(loop). |
| [`asyncio.set_event_loop_policy`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.set_event_loop_policy) | 函数 | `(policy)` | Set the current event loop policy. |
| [`asyncio.shield`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.shield) | 函数 | `(arg)` | Wait for a future, shielding it from cancellation. |
| [`asyncio.sleep`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.sleep) | 函数 | `(delay, result=None)` | Coroutine that completes after a given time (in seconds). |
| [`asyncio.start_server`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.start_server) | 函数 | `(client_connected_cb, host=None, port=None, *, limit=65536, **kwds)` | Start a socket server, call back for each client connected. |
| [`asyncio.start_unix_server`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.start_unix_server) | 函数 | `(client_connected_cb, path=None, *, limit=65536, **kwds)` | Similar to `start_server` but works with UNIX Domain Sockets. |
| [`asyncio.StreamReader`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamReader) | 类 | `(limit=65536, loop=None)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter) | 类 | `(transport, protocol, reader, loop)` | Wraps a Transport. |
| [`asyncio.SubprocessProtocol`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessProtocol) | 类 | `()` | Interface for protocol for subprocess calls. |
| [`asyncio.SubprocessTransport`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport) | 类 | `(extra=None)` | Base class for transports. |
| [`asyncio.Task`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task) | 类 | `(coro, *, loop=None, name=None, context=None, eager_start=False)` | A coroutine wrapped in a Future. |
| [`asyncio.TaskGroup`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.TaskGroup) | 类 | `()` | Asynchronous context manager for managing groups of tasks. |
| [`asyncio.ThreadedChildWatcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.ThreadedChildWatcher) | 类 | `()` | Threaded child watcher implementation. |
| [`asyncio.Timeout`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Timeout) | 类 | `(when: Optional[float]) -> None` | Asynchronous context manager for cancelling overdue coroutines. |
| [`asyncio.timeout`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.timeout) | 函数 | `(delay: Optional[float]) -> asyncio.timeouts.Timeout` | Timeout async context manager. |
| [`asyncio.timeout_at`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.timeout_at) | 函数 | `(when: Optional[float]) -> asyncio.timeouts.Timeout` | Schedule the timeout at absolute time. |
| [`asyncio.TimeoutError`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.TimeoutError) | 异常 | `` | Timeout expired. |
| [`asyncio.TimerHandle`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.TimerHandle) | 类 | `(when, callback, args, loop, context=None)` | Object returned by timed callback registration methods. |
| [`asyncio.to_thread`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.to_thread) | 函数 | `(func, /, *args, **kwargs)` | Asynchronously run function *func* in a separate thread. |
| [`asyncio.Transport`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.Transport) | 类 | `(extra=None)` | Interface representing a bidirectional transport. |
| [`asyncio.wait`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.wait) | 函数 | `(fs, *, timeout=None, return_when='ALL_COMPLETED')` | Wait for the Futures or Tasks given by fs to complete. |
| [`asyncio.wait_for`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.wait_for) | 函数 | `(fut, timeout)` | Wait for the single Future or coroutine to complete, with timeout. |
| [`asyncio.WindowsProactorEventLoopPolicy`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.WindowsProactorEventLoopPolicy) | 类 | `` | 参见官方 API 文档。 |
| [`asyncio.WindowsSelectorEventLoopPolicy`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.WindowsSelectorEventLoopPolicy) | 类 | `` | 参见官方 API 文档。 |
| [`asyncio.wrap_future`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.wrap_future) | 函数 | `(future, *, loop=None)` | Wrap concurrent.futures.Future object. |
| [`asyncio.WriteTransport`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport) | 类 | `(extra=None)` | Interface for write-only transports. |

## `asyncio.AbstractChildWatcher`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.AbstractChildWatcher.add_child_handler`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractChildWatcher.add_child_handler) | 方法 | `(self, pid, callback, *args)` | Register a new child handler. |
| [`asyncio.AbstractChildWatcher.attach_loop`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractChildWatcher.attach_loop) | 方法 | `(self, loop)` | Attach the watcher to an event loop. |
| [`asyncio.AbstractChildWatcher.close`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractChildWatcher.close) | 方法 | `(self)` | Close the watcher. |
| [`asyncio.AbstractChildWatcher.is_active`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractChildWatcher.is_active) | 方法 | `(self)` | Return ``True`` if the watcher is active and is used by the event loop. |
| [`asyncio.AbstractChildWatcher.remove_child_handler`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractChildWatcher.remove_child_handler) | 方法 | `(self, pid)` | Removes the handler for process 'pid'. |

## `asyncio.AbstractEventLoopPolicy`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.AbstractEventLoopPolicy.get_child_watcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractEventLoopPolicy.get_child_watcher) | 方法 | `(self)` | Get the watcher for child processes. |
| [`asyncio.AbstractEventLoopPolicy.get_event_loop`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractEventLoopPolicy.get_event_loop) | 方法 | `(self)` | Get the event loop for the current context. |
| [`asyncio.AbstractEventLoopPolicy.new_event_loop`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractEventLoopPolicy.new_event_loop) | 方法 | `(self)` | Create and return a new event loop object according to this policy's rules. If there's need to set this loop as the event loop for the current context, set_event_loop must be ca... |
| [`asyncio.AbstractEventLoopPolicy.set_child_watcher`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractEventLoopPolicy.set_child_watcher) | 方法 | `(self, watcher)` | Set the watcher for child processes. |
| [`asyncio.AbstractEventLoopPolicy.set_event_loop`](https://docs.python.org/3.12/library/asyncio-policy.html#asyncio.AbstractEventLoopPolicy.set_event_loop) | 方法 | `(self, loop)` | Set the event loop for the current context to loop. |

## `asyncio.Barrier`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Barrier.abort`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Barrier.abort) | 方法 | `(self)` | Place the barrier into a 'broken' state. |
| [`asyncio.Barrier.broken`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Barrier.broken) | 属性 | `` | Return True if the barrier is in a broken state. |
| [`asyncio.Barrier.n_waiting`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Barrier.n_waiting) | 属性 | `` | Return the number of tasks currently waiting at the barrier. |
| [`asyncio.Barrier.parties`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Barrier.parties) | 属性 | `` | Return the number of tasks required to trip the barrier. |
| [`asyncio.Barrier.reset`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Barrier.reset) | 方法 | `(self)` | Reset the barrier to the initial state. |
| [`asyncio.Barrier.wait`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Barrier.wait) | 方法 | `(self)` | Wait for the barrier. |

## `asyncio.BaseProtocol`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.BaseProtocol.connection_lost`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseProtocol.connection_lost) | 方法 | `(self, exc)` | Called when the connection is lost or closed. |
| [`asyncio.BaseProtocol.connection_made`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseProtocol.connection_made) | 方法 | `(self, transport)` | Called when a connection is made. |
| [`asyncio.BaseProtocol.pause_writing`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseProtocol.pause_writing) | 方法 | `(self)` | Called when the transport's buffer goes over the high-water mark. |
| [`asyncio.BaseProtocol.resume_writing`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseProtocol.resume_writing) | 方法 | `(self)` | Called when the transport's buffer drains below the low-water mark. |

## `asyncio.BaseTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.BaseTransport.close`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseTransport.close) | 方法 | `(self)` | Close the transport. |
| [`asyncio.BaseTransport.get_extra_info`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseTransport.get_extra_info) | 方法 | `(self, name, default=None)` | Get optional transport information. |
| [`asyncio.BaseTransport.get_protocol`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseTransport.get_protocol) | 方法 | `(self)` | Return the current protocol. |
| [`asyncio.BaseTransport.is_closing`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseTransport.is_closing) | 方法 | `(self)` | Return True if the transport is closing or closed. |
| [`asyncio.BaseTransport.set_protocol`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BaseTransport.set_protocol) | 方法 | `(self, protocol)` | Set a new protocol. |

## `asyncio.BufferedProtocol`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.BufferedProtocol.buffer_updated`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BufferedProtocol.buffer_updated) | 方法 | `(self, nbytes)` | Called when the buffer was updated with the received data. |
| [`asyncio.BufferedProtocol.eof_received`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BufferedProtocol.eof_received) | 方法 | `(self)` | Called when the other end calls write_eof() or equivalent. |
| [`asyncio.BufferedProtocol.get_buffer`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.BufferedProtocol.get_buffer) | 方法 | `(self, sizehint)` | Called to allocate a new receive buffer. |

## `asyncio.Condition`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Condition.acquire`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition.acquire) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.Condition.locked`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition.locked) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.Condition.notify`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition.notify) | 方法 | `(self, n=1)` | By default, wake up one coroutine waiting on this condition, if any. If the calling coroutine has not acquired the lock when this method is called, a RuntimeError is raised. |
| [`asyncio.Condition.notify_all`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition.notify_all) | 方法 | `(self)` | Wake up all threads waiting on this condition. This method acts like notify(), but wakes up all waiting threads instead of one. If the calling thread has not acquired the lock w... |
| [`asyncio.Condition.release`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition.release) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.Condition.wait`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition.wait) | 方法 | `(self)` | Wait until notified. |
| [`asyncio.Condition.wait_for`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Condition.wait_for) | 方法 | `(self, predicate)` | Wait until a predicate becomes true. |

## `asyncio.DatagramProtocol`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.DatagramProtocol.datagram_received`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.DatagramProtocol.datagram_received) | 方法 | `(self, data, addr)` | Called when some datagram is received. |
| [`asyncio.DatagramProtocol.error_received`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.DatagramProtocol.error_received) | 方法 | `(self, exc)` | Called when a send or receive operation raises an OSError. |

## `asyncio.DatagramTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.DatagramTransport.abort`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.DatagramTransport.abort) | 方法 | `(self)` | Close the transport immediately. |
| [`asyncio.DatagramTransport.sendto`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.DatagramTransport.sendto) | 方法 | `(self, data, addr=None)` | Send data to the transport. |

## `asyncio.Event`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Event.clear`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Event.clear) | 方法 | `(self)` | Reset the internal flag to false. Subsequently, coroutines calling wait() will block until set() is called to set the internal flag to true again. |
| [`asyncio.Event.is_set`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Event.is_set) | 方法 | `(self)` | Return True if and only if the internal flag is true. |
| [`asyncio.Event.set`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Event.set) | 方法 | `(self)` | Set the internal flag to true. All coroutines waiting for it to become true are awakened. Coroutine that call wait() once the flag is true will not block at all. |
| [`asyncio.Event.wait`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Event.wait) | 方法 | `(self)` | Block until the internal flag is true. |

## `asyncio.Future`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Future.add_done_callback`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.add_done_callback) | 方法 | `` | Add a callback to be run when the future becomes done. |
| [`asyncio.Future.cancel`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.cancel) | 方法 | `(self, /, msg=None)` | Cancel the future and schedule callbacks. |
| [`asyncio.Future.cancelled`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.cancelled) | 方法 | `(self, /)` | Return True if the future was cancelled. |
| [`asyncio.Future.done`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.done) | 方法 | `(self, /)` | Return True if the future is done. |
| [`asyncio.Future.exception`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.exception) | 方法 | `(self, /)` | Return the exception that was set on this future. |
| [`asyncio.Future.get_loop`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.get_loop) | 方法 | `(self, /)` | Return the event loop the Future is bound to. |
| [`asyncio.Future.remove_done_callback`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.remove_done_callback) | 方法 | `(self, fn, /)` | Remove all instances of a callback from the "call when done" list. |
| [`asyncio.Future.result`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.result) | 方法 | `(self, /)` | Return the result this future represents. |
| [`asyncio.Future.set_exception`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.set_exception) | 方法 | `(self, exception, /)` | Mark the future done and set an exception. |
| [`asyncio.Future.set_result`](https://docs.python.org/3.12/library/asyncio-future.html#asyncio.Future.set_result) | 方法 | `(self, result, /)` | Mark the future done and set its result. |

## `asyncio.Handle`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Handle.cancel`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Handle.cancel) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.Handle.cancelled`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Handle.cancelled) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.Handle.get_context`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Handle.get_context) | 方法 | `(self)` | 参见官方 API 文档。 |

## `asyncio.IncompleteReadError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.IncompleteReadError.expected`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.IncompleteReadError.expected) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.IncompleteReadError.partial`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.IncompleteReadError.partial) | 属性 | `` | 参见官方 API 文档。 |

## `asyncio.LimitOverrunError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.LimitOverrunError.consumed`](https://docs.python.org/3.12/library/asyncio-exceptions.html#asyncio.LimitOverrunError.consumed) | 属性 | `` | 参见官方 API 文档。 |

## `asyncio.Lock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Lock.acquire`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Lock.acquire) | 方法 | `(self)` | Acquire a lock. |
| [`asyncio.Lock.locked`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Lock.locked) | 方法 | `(self)` | Return True if lock is acquired. |
| [`asyncio.Lock.release`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Lock.release) | 方法 | `(self)` | Release a lock. |

## `asyncio.loop`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.loop.add_reader`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.add_reader) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.add_signal_handler`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.add_signal_handler) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.add_writer`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.add_writer) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.call_at`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.call_at) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.call_exception_handler`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.call_exception_handler) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.call_later`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.call_later) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.call_soon`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.call_soon) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.call_soon_threadsafe`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.call_soon_threadsafe) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.close`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.close) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.connect_accepted_socket`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.connect_accepted_socket) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.connect_read_pipe`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.connect_read_pipe) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.connect_write_pipe`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.connect_write_pipe) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.create_connection`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.create_connection) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.create_datagram_endpoint`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.create_datagram_endpoint) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.create_future`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.create_future) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.create_server`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.create_server) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.create_task`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.create_task) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.create_unix_connection`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.create_unix_connection) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.create_unix_server`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.create_unix_server) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.default_exception_handler`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.default_exception_handler) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.get_debug`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.get_debug) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.get_exception_handler`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.get_exception_handler) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.get_task_factory`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.get_task_factory) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.getaddrinfo`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.getaddrinfo) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.getnameinfo`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.getnameinfo) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.is_closed`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.is_closed) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.is_running`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.is_running) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.remove_reader`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.remove_reader) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.remove_signal_handler`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.remove_signal_handler) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.remove_writer`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.remove_writer) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.run_forever`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.run_forever) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.run_in_executor`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.run_in_executor) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.run_until_complete`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.run_until_complete) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sendfile`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sendfile) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.set_debug`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.set_debug) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.set_default_executor`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.set_default_executor) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.set_exception_handler`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.set_exception_handler) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.set_task_factory`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.set_task_factory) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.shutdown_asyncgens`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.shutdown_asyncgens) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.shutdown_default_executor`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.shutdown_default_executor) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.slow_callback_duration`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.slow_callback_duration) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_accept`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_accept) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_connect`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_connect) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_recv`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_recv) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_recv_into`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_recv_into) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_recvfrom`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_recvfrom) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_recvfrom_into`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_recvfrom_into) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_sendall`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_sendall) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_sendfile`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_sendfile) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.sock_sendto`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.sock_sendto) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.start_tls`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.start_tls) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.stop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.stop) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.subprocess_exec`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.subprocess_exec) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.subprocess_shell`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.subprocess_shell) | 方法 | `` | 参见官方 API 文档。 |
| [`asyncio.loop.time`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.loop.time) | 方法 | `` | 参见官方 API 文档。 |

## `asyncio.Protocol`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Protocol.data_received`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.Protocol.data_received) | 方法 | `(self, data)` | Called when some data is received. |
| [`asyncio.Protocol.eof_received`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.Protocol.eof_received) | 方法 | `(self)` | Called when the other end calls write_eof() or equivalent. |

## `asyncio.Queue`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Queue.empty`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.empty) | 方法 | `(self)` | Return True if the queue is empty, False otherwise. |
| [`asyncio.Queue.full`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.full) | 方法 | `(self)` | Return True if there are maxsize items in the queue. |
| [`asyncio.Queue.get`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.get) | 方法 | `(self)` | Remove and return an item from the queue. |
| [`asyncio.Queue.get_nowait`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.get_nowait) | 方法 | `(self)` | Remove and return an item from the queue. |
| [`asyncio.Queue.join`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.join) | 方法 | `(self)` | Block until all items in the queue have been gotten and processed. |
| [`asyncio.Queue.maxsize`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.maxsize) | 属性 | `` | Number of items allowed in the queue. |
| [`asyncio.Queue.put`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.put) | 方法 | `(self, item)` | Put an item into the queue. |
| [`asyncio.Queue.put_nowait`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.put_nowait) | 方法 | `(self, item)` | Put an item into the queue without blocking. |
| [`asyncio.Queue.qsize`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.qsize) | 方法 | `(self)` | Number of items in the queue. |
| [`asyncio.Queue.task_done`](https://docs.python.org/3.12/library/asyncio-queue.html#asyncio.Queue.task_done) | 方法 | `(self)` | Indicate that a formerly enqueued task is complete. |

## `asyncio.ReadTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.ReadTransport.is_reading`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.ReadTransport.is_reading) | 方法 | `(self)` | Return True if the transport is receiving. |
| [`asyncio.ReadTransport.pause_reading`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.ReadTransport.pause_reading) | 方法 | `(self)` | Pause the receiving end. |
| [`asyncio.ReadTransport.resume_reading`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.ReadTransport.resume_reading) | 方法 | `(self)` | Resume the receiving end. |

## `asyncio.Runner`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Runner.close`](https://docs.python.org/3.12/library/asyncio-runner.html#asyncio.Runner.close) | 方法 | `(self)` | Shutdown and close event loop. |
| [`asyncio.Runner.get_loop`](https://docs.python.org/3.12/library/asyncio-runner.html#asyncio.Runner.get_loop) | 方法 | `(self)` | Return embedded event loop. |
| [`asyncio.Runner.run`](https://docs.python.org/3.12/library/asyncio-runner.html#asyncio.Runner.run) | 方法 | `(self, coro, *, context=None)` | Run a coroutine inside the embedded event loop. |

## `asyncio.Semaphore`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Semaphore.acquire`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Semaphore.acquire) | 方法 | `(self)` | Acquire a semaphore. |
| [`asyncio.Semaphore.locked`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Semaphore.locked) | 方法 | `(self)` | Returns True if semaphore cannot be acquired immediately. |
| [`asyncio.Semaphore.release`](https://docs.python.org/3.12/library/asyncio-sync.html#asyncio.Semaphore.release) | 方法 | `(self)` | Release a semaphore, incrementing the internal counter by one. |

## `asyncio.Server`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Server.close`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server.close) | 方法 | `(self)` | Stop serving.  This leaves existing connections open. |
| [`asyncio.Server.get_loop`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server.get_loop) | 方法 | `(self)` | Get the event loop the Server object is attached to. |
| [`asyncio.Server.is_serving`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server.is_serving) | 方法 | `(self)` | Return True if the server is accepting connections. |
| [`asyncio.Server.serve_forever`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server.serve_forever) | 方法 | `(self)` | Start accepting connections until the coroutine is cancelled. |
| [`asyncio.Server.sockets`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server.sockets) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.Server.start_serving`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server.start_serving) | 方法 | `(self)` | Start accepting connections. |
| [`asyncio.Server.wait_closed`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.Server.wait_closed) | 方法 | `(self)` | Wait until server is closed and all connections are dropped. |

## `asyncio.StreamReader`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.StreamReader.at_eof`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamReader.at_eof) | 方法 | `(self)` | Return True if the buffer is empty and 'feed_eof' was called. |
| [`asyncio.StreamReader.feed_eof`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamReader.feed_eof) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.StreamReader.read`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamReader.read) | 方法 | `(self, n=-1)` | Read up to `n` bytes from the stream. |
| [`asyncio.StreamReader.readexactly`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamReader.readexactly) | 方法 | `(self, n)` | Read exactly `n` bytes. |
| [`asyncio.StreamReader.readline`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamReader.readline) | 方法 | `(self)` | Read chunk of data from the stream until newline (b' ') is found. |
| [`asyncio.StreamReader.readuntil`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamReader.readuntil) | 方法 | `(self, separator=b'\n')` | Read data from the stream until ``separator`` is found. |

## `asyncio.StreamWriter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.StreamWriter.can_write_eof`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.can_write_eof) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.close`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.close) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.drain`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.drain) | 方法 | `(self)` | Flush the write buffer. |
| [`asyncio.StreamWriter.get_extra_info`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.get_extra_info) | 方法 | `(self, name, default=None)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.is_closing`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.is_closing) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.start_tls`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.start_tls) | 方法 | `(self, sslcontext, *, server_hostname=None, ssl_handshake_timeout=None, ssl_shutdown_timeout=None)` | Upgrade an existing stream-based connection to TLS. |
| [`asyncio.StreamWriter.transport`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.transport) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.wait_closed`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.wait_closed) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.write`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.write) | 方法 | `(self, data)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.write_eof`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.write_eof) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.StreamWriter.writelines`](https://docs.python.org/3.12/library/asyncio-stream.html#asyncio.StreamWriter.writelines) | 方法 | `(self, data)` | 参见官方 API 文档。 |

## `asyncio.subprocess`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.subprocess.DEVNULL`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.DEVNULL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`asyncio.subprocess.PIPE`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.PIPE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`asyncio.subprocess.Process`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process) | 类 | `(transport, protocol, loop)` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.communicate`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.communicate) | 方法 | `(self, input=None)` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.kill`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.kill) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.pid`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.pid) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.returncode`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.returncode) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.send_signal`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.send_signal) | 方法 | `(self, signal)` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.stderr`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.stderr) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.stdin`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.stdin) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.stdout`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.stdout) | 属性 | `` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.terminate`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.terminate) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`asyncio.subprocess.Process.wait`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.Process.wait) | 方法 | `(self)` | Wait until the process exit and return the process return code. |
| [`asyncio.subprocess.STDOUT`](https://docs.python.org/3.12/library/asyncio-subprocess.html#asyncio.subprocess.STDOUT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |

## `asyncio.SubprocessProtocol`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.SubprocessProtocol.pipe_connection_lost`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessProtocol.pipe_connection_lost) | 方法 | `(self, fd, exc)` | Called when a file descriptor associated with the child process is closed. |
| [`asyncio.SubprocessProtocol.pipe_data_received`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessProtocol.pipe_data_received) | 方法 | `(self, fd, data)` | Called when the subprocess writes data into stdout/stderr pipe. |
| [`asyncio.SubprocessProtocol.process_exited`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessProtocol.process_exited) | 方法 | `(self)` | Called when subprocess has exited. |

## `asyncio.SubprocessTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.SubprocessTransport.close`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport.close) | 方法 | `(self)` | Close the transport. |
| [`asyncio.SubprocessTransport.get_pid`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport.get_pid) | 方法 | `(self)` | Get subprocess id. |
| [`asyncio.SubprocessTransport.get_pipe_transport`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport.get_pipe_transport) | 方法 | `(self, fd)` | Get transport for pipe with number fd. |
| [`asyncio.SubprocessTransport.get_returncode`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport.get_returncode) | 方法 | `(self)` | Get subprocess returncode. |
| [`asyncio.SubprocessTransport.kill`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport.kill) | 方法 | `(self)` | Kill the subprocess. |
| [`asyncio.SubprocessTransport.send_signal`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport.send_signal) | 方法 | `(self, signal)` | Send signal to subprocess. |
| [`asyncio.SubprocessTransport.terminate`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.SubprocessTransport.terminate) | 方法 | `(self)` | Stop the subprocess. |

## `asyncio.Task`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Task.add_done_callback`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.add_done_callback) | 方法 | `` | Add a callback to be run when the future becomes done. |
| [`asyncio.Task.cancel`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.cancel) | 方法 | `(self, /, msg=None)` | Request that this task cancel itself. |
| [`asyncio.Task.cancelled`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.cancelled) | 方法 | `(self, /)` | Return True if the future was cancelled. |
| [`asyncio.Task.cancelling`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.cancelling) | 方法 | `(self, /)` | Return the count of the task's cancellation requests. |
| [`asyncio.Task.done`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.done) | 方法 | `(self, /)` | Return True if the future is done. |
| [`asyncio.Task.exception`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.exception) | 方法 | `(self, /)` | Return the exception that was set on this future. |
| [`asyncio.Task.get_context`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.get_context) | 方法 | `(self, /)` | 参见官方 API 文档。 |
| [`asyncio.Task.get_coro`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.get_coro) | 方法 | `(self, /)` | 参见官方 API 文档。 |
| [`asyncio.Task.get_name`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.get_name) | 方法 | `(self, /)` | 参见官方 API 文档。 |
| [`asyncio.Task.get_stack`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.get_stack) | 方法 | `(self, /, *, limit=None)` | Return the list of stack frames for this task's coroutine. |
| [`asyncio.Task.print_stack`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.print_stack) | 方法 | `(self, /, *, limit=None, file=None)` | Print the stack or traceback for this task's coroutine. |
| [`asyncio.Task.remove_done_callback`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.remove_done_callback) | 方法 | `(self, fn, /)` | Remove all instances of a callback from the "call when done" list. |
| [`asyncio.Task.result`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.result) | 方法 | `(self, /)` | Return the result this future represents. |
| [`asyncio.Task.set_name`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.set_name) | 方法 | `(self, value, /)` | 参见官方 API 文档。 |
| [`asyncio.Task.uncancel`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Task.uncancel) | 方法 | `(self, /)` | Decrement the task's count of cancellation requests. |

## `asyncio.TaskGroup`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.TaskGroup.create_task`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.TaskGroup.create_task) | 方法 | `(self, coro, *, name=None, context=None)` | Create a new task in this group and return it. |

## `asyncio.Timeout`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.Timeout.expired`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Timeout.expired) | 方法 | `(self) -> bool` | Is timeout expired during execution? |
| [`asyncio.Timeout.reschedule`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Timeout.reschedule) | 方法 | `(self, when: Optional[float]) -> None` | Reschedule the timeout. |
| [`asyncio.Timeout.when`](https://docs.python.org/3.12/library/asyncio-task.html#asyncio.Timeout.when) | 方法 | `(self) -> Optional[float]` | Return the current deadline. |

## `asyncio.TimerHandle`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.TimerHandle.when`](https://docs.python.org/3.12/library/asyncio-eventloop.html#asyncio.TimerHandle.when) | 方法 | `(self)` | Return a scheduled callback time. |

## `asyncio.WriteTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`asyncio.WriteTransport.abort`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.abort) | 方法 | `(self)` | Close the transport immediately. |
| [`asyncio.WriteTransport.can_write_eof`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.can_write_eof) | 方法 | `(self)` | Return True if this transport supports write_eof(), False if not. |
| [`asyncio.WriteTransport.get_write_buffer_limits`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.get_write_buffer_limits) | 方法 | `(self)` | Get the high and low watermarks for write flow control. Return a tuple (low, high) where low and high are positive number of bytes. |
| [`asyncio.WriteTransport.get_write_buffer_size`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.get_write_buffer_size) | 方法 | `(self)` | Return the current size of the write buffer. |
| [`asyncio.WriteTransport.set_write_buffer_limits`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.set_write_buffer_limits) | 方法 | `(self, high=None, low=None)` | Set the high- and low-water limits for write flow control. |
| [`asyncio.WriteTransport.write`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.write) | 方法 | `(self, data)` | Write some data bytes to the transport. |
| [`asyncio.WriteTransport.write_eof`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.write_eof) | 方法 | `(self)` | Close the write end after flushing buffered data. |
| [`asyncio.WriteTransport.writelines`](https://docs.python.org/3.12/library/asyncio-protocol.html#asyncio.WriteTransport.writelines) | 方法 | `(self, list_of_data)` | Write a list (or any iterable) of data bytes to the transport. |
