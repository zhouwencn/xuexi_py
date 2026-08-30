<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# threading：线程并发

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/threading.html](https://docs.python.org/3.12/library/threading.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **63** 个公开对象或用户命令。私有下划线接口不收录。

## `threading`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading`](https://docs.python.org/3.12/library/threading.html#module-threading) | 模块 | `` | Thread module emulating a subset of Java's threading model. |
| [`threading.active_count`](https://docs.python.org/3.12/library/threading.html#threading.active_count) | 函数 | `()` | Return the number of Thread objects currently alive. |
| [`threading.Barrier`](https://docs.python.org/3.12/library/threading.html#threading.Barrier) | 类 | `(parties, action=None, timeout=None)` | Implements a Barrier. |
| [`threading.BoundedSemaphore`](https://docs.python.org/3.12/library/threading.html#threading.BoundedSemaphore) | 类 | `(value=1)` | Implements a bounded semaphore. |
| [`threading.BrokenBarrierError`](https://docs.python.org/3.12/library/threading.html#threading.BrokenBarrierError) | 异常 | `` | Unspecified run-time error. |
| [`threading.Condition`](https://docs.python.org/3.12/library/threading.html#threading.Condition) | 类 | `(lock=None)` | Class that implements a condition variable. |
| [`threading.current_thread`](https://docs.python.org/3.12/library/threading.html#threading.current_thread) | 函数 | `()` | Return the current Thread object, corresponding to the caller's thread of control. |
| [`threading.enumerate`](https://docs.python.org/3.12/library/threading.html#threading.enumerate) | 函数 | `()` | Return a list of all Thread objects currently alive. |
| [`threading.Event`](https://docs.python.org/3.12/library/threading.html#threading.Event) | 类 | `()` | Class implementing event objects. |
| [`threading.excepthook`](https://docs.python.org/3.12/library/threading.html#threading.excepthook) | 函数 | `` | excepthook(exc_type, exc_value, exc_traceback, thread) |
| [`threading.get_ident`](https://docs.python.org/3.12/library/threading.html#threading.get_ident) | 函数 | `` | get_ident() -> integer |
| [`threading.get_native_id`](https://docs.python.org/3.12/library/threading.html#threading.get_native_id) | 函数 | `` | get_native_id() -> integer |
| [`threading.getprofile`](https://docs.python.org/3.12/library/threading.html#threading.getprofile) | 函数 | `()` | Get the profiler function as set by threading.setprofile(). |
| [`threading.gettrace`](https://docs.python.org/3.12/library/threading.html#threading.gettrace) | 函数 | `()` | Get the trace function as set by threading.settrace(). |
| [`threading.local`](https://docs.python.org/3.12/library/threading.html#threading.local) | 类 | `` | Thread-local data |
| [`threading.Lock`](https://docs.python.org/3.12/library/threading.html#threading.Lock) | 类 | `` | allocate_lock() -> lock object (allocate() is an obsolete synonym) |
| [`threading.main_thread`](https://docs.python.org/3.12/library/threading.html#threading.main_thread) | 函数 | `()` | Return the main thread object. |
| [`threading.RLock`](https://docs.python.org/3.12/library/threading.html#threading.RLock) | 类 | `(*args, **kwargs)` | Factory function that returns a new reentrant lock. |
| [`threading.Semaphore`](https://docs.python.org/3.12/library/threading.html#threading.Semaphore) | 类 | `(value=1)` | This class implements semaphore objects. |
| [`threading.setprofile`](https://docs.python.org/3.12/library/threading.html#threading.setprofile) | 函数 | `(func)` | Set a profile function for all threads started from the threading module. |
| [`threading.setprofile_all_threads`](https://docs.python.org/3.12/library/threading.html#threading.setprofile_all_threads) | 函数 | `(func)` | Set a profile function for all threads started from the threading module and all Python threads that are currently executing. |
| [`threading.settrace`](https://docs.python.org/3.12/library/threading.html#threading.settrace) | 函数 | `(func)` | Set a trace function for all threads started from the threading module. |
| [`threading.settrace_all_threads`](https://docs.python.org/3.12/library/threading.html#threading.settrace_all_threads) | 函数 | `(func)` | Set a trace function for all threads started from the threading module and all Python threads that are currently executing. |
| [`threading.stack_size`](https://docs.python.org/3.12/library/threading.html#threading.stack_size) | 函数 | `` | stack_size([size]) -> size |
| [`threading.Thread`](https://docs.python.org/3.12/library/threading.html#threading.Thread) | 类 | `(group=None, target=None, name=None, args=(), kwargs=None, *, daemon=None)` | A class that represents a thread of control. |
| [`threading.TIMEOUT_MAX`](https://docs.python.org/3.12/library/threading.html#threading.TIMEOUT_MAX) | 数据/常量 | `` | Convert a string or number to a floating-point number, if possible. |
| [`threading.Timer`](https://docs.python.org/3.12/library/threading.html#threading.Timer) | 类 | `(interval, function, args=None, kwargs=None)` | Call a function after a specified number of seconds: |

## `threading.Barrier`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.Barrier.abort`](https://docs.python.org/3.12/library/threading.html#threading.Barrier.abort) | 方法 | `(self)` | Place the barrier into a 'broken' state. |
| [`threading.Barrier.broken`](https://docs.python.org/3.12/library/threading.html#threading.Barrier.broken) | 属性 | `` | Return True if the barrier is in a broken state. |
| [`threading.Barrier.n_waiting`](https://docs.python.org/3.12/library/threading.html#threading.Barrier.n_waiting) | 属性 | `` | Return the number of threads currently waiting at the barrier. |
| [`threading.Barrier.parties`](https://docs.python.org/3.12/library/threading.html#threading.Barrier.parties) | 属性 | `` | Return the number of threads required to trip the barrier. |
| [`threading.Barrier.reset`](https://docs.python.org/3.12/library/threading.html#threading.Barrier.reset) | 方法 | `(self)` | Reset the barrier to the initial state. |
| [`threading.Barrier.wait`](https://docs.python.org/3.12/library/threading.html#threading.Barrier.wait) | 方法 | `(self, timeout=None)` | Wait for the barrier. |

## `threading.Condition`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.Condition.acquire`](https://docs.python.org/3.12/library/threading.html#threading.Condition.acquire) | 方法 | `` | 参见官方 API 文档。 |
| [`threading.Condition.notify`](https://docs.python.org/3.12/library/threading.html#threading.Condition.notify) | 方法 | `(self, n=1)` | Wake up one or more threads waiting on this condition, if any. |
| [`threading.Condition.notify_all`](https://docs.python.org/3.12/library/threading.html#threading.Condition.notify_all) | 方法 | `(self)` | Wake up all threads waiting on this condition. |
| [`threading.Condition.release`](https://docs.python.org/3.12/library/threading.html#threading.Condition.release) | 方法 | `` | 参见官方 API 文档。 |
| [`threading.Condition.wait`](https://docs.python.org/3.12/library/threading.html#threading.Condition.wait) | 方法 | `(self, timeout=None)` | Wait until notified or until a timeout occurs. |
| [`threading.Condition.wait_for`](https://docs.python.org/3.12/library/threading.html#threading.Condition.wait_for) | 方法 | `(self, predicate, timeout=None)` | Wait until a condition evaluates to True. |

## `threading.Event`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.Event.clear`](https://docs.python.org/3.12/library/threading.html#threading.Event.clear) | 方法 | `(self)` | Reset the internal flag to false. |
| [`threading.Event.is_set`](https://docs.python.org/3.12/library/threading.html#threading.Event.is_set) | 方法 | `(self)` | Return true if and only if the internal flag is true. |
| [`threading.Event.set`](https://docs.python.org/3.12/library/threading.html#threading.Event.set) | 方法 | `(self)` | Set the internal flag to true. |
| [`threading.Event.wait`](https://docs.python.org/3.12/library/threading.html#threading.Event.wait) | 方法 | `(self, timeout=None)` | Block until the internal flag is true. |

## `threading.Lock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.Lock.acquire`](https://docs.python.org/3.12/library/threading.html#threading.Lock.acquire) | 方法 | `` | 参见官方 API 文档。 |
| [`threading.Lock.locked`](https://docs.python.org/3.12/library/threading.html#threading.Lock.locked) | 方法 | `` | 参见官方 API 文档。 |
| [`threading.Lock.release`](https://docs.python.org/3.12/library/threading.html#threading.Lock.release) | 方法 | `` | 参见官方 API 文档。 |

## `threading.RLock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.RLock.acquire`](https://docs.python.org/3.12/library/threading.html#threading.RLock.acquire) | 方法 | `` | 参见官方 API 文档。 |
| [`threading.RLock.release`](https://docs.python.org/3.12/library/threading.html#threading.RLock.release) | 方法 | `` | 参见官方 API 文档。 |

## `threading.Semaphore`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.Semaphore.acquire`](https://docs.python.org/3.12/library/threading.html#threading.Semaphore.acquire) | 方法 | `(self, blocking=True, timeout=None)` | Acquire a semaphore, decrementing the internal counter by one. |
| [`threading.Semaphore.release`](https://docs.python.org/3.12/library/threading.html#threading.Semaphore.release) | 方法 | `(self, n=1)` | Release a semaphore, incrementing the internal counter by one or more. |

## `threading.Thread`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.Thread.daemon`](https://docs.python.org/3.12/library/threading.html#threading.Thread.daemon) | 属性 | `` | A boolean value indicating whether this thread is a daemon thread. |
| [`threading.Thread.getName`](https://docs.python.org/3.12/library/threading.html#threading.Thread.getName) | 方法 | `(self)` | Return a string used for identification purposes only. |
| [`threading.Thread.ident`](https://docs.python.org/3.12/library/threading.html#threading.Thread.ident) | 属性 | `` | Thread identifier of this thread or None if it has not been started. |
| [`threading.Thread.is_alive`](https://docs.python.org/3.12/library/threading.html#threading.Thread.is_alive) | 方法 | `(self)` | Return whether the thread is alive. |
| [`threading.Thread.isDaemon`](https://docs.python.org/3.12/library/threading.html#threading.Thread.isDaemon) | 方法 | `(self)` | Return whether this thread is a daemon. |
| [`threading.Thread.join`](https://docs.python.org/3.12/library/threading.html#threading.Thread.join) | 方法 | `(self, timeout=None)` | Wait until the thread terminates. |
| [`threading.Thread.name`](https://docs.python.org/3.12/library/threading.html#threading.Thread.name) | 属性 | `` | A string used for identification purposes only. |
| [`threading.Thread.native_id`](https://docs.python.org/3.12/library/threading.html#threading.Thread.native_id) | 属性 | `` | Native integral thread ID of this thread, or None if it has not been started. |
| [`threading.Thread.run`](https://docs.python.org/3.12/library/threading.html#threading.Thread.run) | 方法 | `(self)` | Method representing the thread's activity. |
| [`threading.Thread.setDaemon`](https://docs.python.org/3.12/library/threading.html#threading.Thread.setDaemon) | 方法 | `(self, daemonic)` | Set whether this thread is a daemon. |
| [`threading.Thread.setName`](https://docs.python.org/3.12/library/threading.html#threading.Thread.setName) | 方法 | `(self, name)` | Set the name string for this thread. |
| [`threading.Thread.start`](https://docs.python.org/3.12/library/threading.html#threading.Thread.start) | 方法 | `(self)` | Start the thread's activity. |

## `threading.Timer`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`threading.Timer.cancel`](https://docs.python.org/3.12/library/threading.html#threading.Timer.cancel) | 方法 | `(self)` | Stop the timer if it hasn't finished yet. |
