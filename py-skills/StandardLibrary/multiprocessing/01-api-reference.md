<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# multiprocessing：多进程

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/multiprocessing.html](https://docs.python.org/3.12/library/multiprocessing.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **151** 个公开对象或用户命令。私有下划线接口不收录。

## `multiprocessing`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing`](https://docs.python.org/3.12/library/multiprocessing.html#module-multiprocessing) | 模块 | `` | 参见官方 API 文档。 |
| [`multiprocessing.active_children`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.active_children) | 函数 | `()` | Return list of process objects corresponding to live child processes |
| [`multiprocessing.Array`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Array) | 函数 | `(typecode_or_type, size_or_initializer, *, lock=True)` | Returns a synchronized shared array |
| [`multiprocessing.AuthenticationError`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.AuthenticationError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`multiprocessing.Barrier`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Barrier) | 类 | `(parties, action=None, timeout=None)` | Returns a barrier object |
| [`multiprocessing.BoundedSemaphore`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.BoundedSemaphore) | 类 | `(value=1)` | Returns a bounded semaphore object |
| [`multiprocessing.BufferTooShort`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.BufferTooShort) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`multiprocessing.Condition`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Condition) | 类 | `(lock=None)` | Returns a condition object |
| [`multiprocessing.cpu_count`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.cpu_count) | 函数 | `()` | Returns the number of CPUs in the system |
| [`multiprocessing.current_process`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.current_process) | 函数 | `()` | Return process object representing the current process |
| [`multiprocessing.dummy`](https://docs.python.org/3.12/library/multiprocessing.html#module-multiprocessing.dummy) | 模块 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Event`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Event) | 类 | `()` | Returns an event object |
| [`multiprocessing.freeze_support`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.freeze_support) | 函数 | `()` | Check whether this is a fake forked process in a frozen executable. If so then run code specified by commandline and exit. |
| [`multiprocessing.get_all_start_methods`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.get_all_start_methods) | 函数 | `()` | Returns a list of the supported start methods, default first. |
| [`multiprocessing.get_context`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.get_context) | 函数 | `(method=None)` | 参见官方 API 文档。 |
| [`multiprocessing.get_logger`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.get_logger) | 函数 | `()` | Return package logger -- if it does not already exist then it is created. |
| [`multiprocessing.get_start_method`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.get_start_method) | 函数 | `(allow_none=False)` | 参见官方 API 文档。 |
| [`multiprocessing.JoinableQueue`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.JoinableQueue) | 类 | `(maxsize=0)` | Returns a queue object |
| [`multiprocessing.Lock`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Lock) | 类 | `()` | Returns a non-recursive lock object |
| [`multiprocessing.log_to_stderr`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.log_to_stderr) | 函数 | `(level=None)` | Turn on logging and add a handler which prints to stderr |
| [`multiprocessing.Manager`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Manager) | 函数 | `()` | Returns a manager associated with a running server process |
| [`multiprocessing.parent_process`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.parent_process) | 函数 | `()` | Return process object representing the parent process |
| [`multiprocessing.Pipe`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Pipe) | 函数 | `(duplex=True)` | Returns two connection object connected by a pipe |
| [`multiprocessing.Process`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process) | 类 | `(group=None, target=None, name=None, args=(), kwargs={}, *, daemon=None)` | Process objects represent activity that is run in a separate process |
| [`multiprocessing.ProcessError`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.ProcessError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`multiprocessing.Queue`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue) | 类 | `(maxsize=0)` | Returns a queue object |
| [`multiprocessing.RLock`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.RLock) | 类 | `()` | Returns a recursive lock object |
| [`multiprocessing.Semaphore`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Semaphore) | 类 | `(value=1)` | Returns a semaphore object |
| [`multiprocessing.set_executable`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.set_executable) | 函数 | `(executable)` | Sets the path to a python.exe or pythonw.exe binary used to run child processes instead of sys.executable when using the 'spawn' start method.  Useful for people embedding Python. |
| [`multiprocessing.set_forkserver_preload`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.set_forkserver_preload) | 函数 | `(module_names)` | Set list of module names to try to load in forkserver process. This is really just a hint. |
| [`multiprocessing.set_start_method`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.set_start_method) | 函数 | `(method, force=False)` | 参见官方 API 文档。 |
| [`multiprocessing.sharedctypes`](https://docs.python.org/3.12/library/multiprocessing.html#module-multiprocessing.sharedctypes) | 模块 | `` | 参见官方 API 文档。 |
| [`multiprocessing.SimpleQueue`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.SimpleQueue) | 类 | `()` | Returns a queue object |
| [`multiprocessing.TimeoutError`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.TimeoutError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`multiprocessing.Value`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Value) | 函数 | `(typecode_or_type, *args, lock=True)` | Returns a synchronized shared object |

## `multiprocessing.connection`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.connection`](https://docs.python.org/3.12/library/multiprocessing.html#module-multiprocessing.connection) | 模块 | `` | 参见官方 API 文档。 |
| [`multiprocessing.connection.answer_challenge`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.answer_challenge) | 函数 | `(connection, authkey: bytes)` | 参见官方 API 文档。 |
| [`multiprocessing.connection.Client`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Client) | 函数 | `(address, family=None, authkey=None)` | Returns a connection to the address of a `Listener` |
| [`multiprocessing.connection.Connection`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection) | 类 | `(handle, readable=True, writable=True)` | Connection class based on an arbitrary file descriptor (Unix only), or a socket handle (Windows). |
| [`multiprocessing.connection.deliver_challenge`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.deliver_challenge) | 函数 | `(connection, authkey: bytes, digest_name='sha256')` | 参见官方 API 文档。 |
| [`multiprocessing.connection.Listener`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Listener) | 类 | `(address=None, family=None, backlog=1, authkey=None)` | Returns a listener object. |
| [`multiprocessing.connection.wait`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.wait) | 函数 | `(object_list, timeout=None)` | Wait till an object in object_list is ready/readable. |

## `multiprocessing.connection.Connection`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.connection.Connection.close`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.close) | 方法 | `(self)` | Close the connection |
| [`multiprocessing.connection.Connection.fileno`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.fileno) | 方法 | `(self)` | File descriptor or handle of the connection |
| [`multiprocessing.connection.Connection.poll`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.poll) | 方法 | `(self, timeout=0.0)` | Whether there is any input available to be read |
| [`multiprocessing.connection.Connection.recv`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.recv) | 方法 | `(self)` | Receive a (picklable) object |
| [`multiprocessing.connection.Connection.recv_bytes`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes) | 方法 | `(self, maxlength=None)` | Receive bytes data as a bytes object. |
| [`multiprocessing.connection.Connection.recv_bytes_into`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.recv_bytes_into) | 方法 | `(self, buf, offset=0)` | Receive bytes data into a writeable bytes-like object. Return the number of bytes read. |
| [`multiprocessing.connection.Connection.send`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.send) | 方法 | `(self, obj)` | Send a (picklable) object |
| [`multiprocessing.connection.Connection.send_bytes`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Connection.send_bytes) | 方法 | `(self, buf, offset=0, size=None)` | Send the bytes data from a bytes-like object |

## `multiprocessing.connection.Listener`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.connection.Listener.accept`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Listener.accept) | 方法 | `(self)` | Accept a connection on the bound socket or named pipe of `self`. |
| [`multiprocessing.connection.Listener.address`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Listener.address) | 属性 | `` | 参见官方 API 文档。 |
| [`multiprocessing.connection.Listener.close`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Listener.close) | 方法 | `(self)` | Close the bound socket or named pipe of `self`. |
| [`multiprocessing.connection.Listener.last_accepted`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.connection.Listener.last_accepted) | 属性 | `` | 参见官方 API 文档。 |

## `multiprocessing.JoinableQueue`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.JoinableQueue.join`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.JoinableQueue.join) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.JoinableQueue.task_done`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.JoinableQueue.task_done) | 方法 | `` | 参见官方 API 文档。 |

## `multiprocessing.Lock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.Lock.acquire`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Lock.acquire) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Lock.release`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Lock.release) | 方法 | `` | 参见官方 API 文档。 |

## `multiprocessing.managers`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.managers`](https://docs.python.org/3.12/library/multiprocessing.html#module-multiprocessing.managers) | 模块 | `` | 参见官方 API 文档。 |
| [`multiprocessing.managers.BaseManager`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseManager) | 类 | `(address=None, authkey=None, serializer='pickle', ctx=None, *, shutdown_timeout=1.0)` | Base class for managers |
| [`multiprocessing.managers.BaseProxy`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseProxy) | 类 | `(token, serializer, manager=None, authkey=None, exposed=None, incref=True, manager_owned=False)` | A base for proxies of shared objects |
| [`multiprocessing.managers.Namespace`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.Namespace) | 类 | `(**kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SharedMemoryManager`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.managers.SharedMemoryManager) | 类 | `(*args, **kwargs)` | Like SyncManager but uses SharedMemoryServer instead of Server. |
| [`multiprocessing.managers.SyncManager`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager) | 类 | `(address=None, authkey=None, serializer='pickle', ctx=None, *, shutdown_timeout=1.0)` | Subclass of `BaseManager` which supports a number of shared object types. |

## `multiprocessing.managers.BaseManager`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.managers.BaseManager.address`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseManager.address) | 属性 | `` | 参见官方 API 文档。 |
| [`multiprocessing.managers.BaseManager.connect`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseManager.connect) | 方法 | `(self)` | Connect manager object to the server process |
| [`multiprocessing.managers.BaseManager.get_server`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseManager.get_server) | 方法 | `(self)` | Return server object with serve_forever() method and address attribute |
| [`multiprocessing.managers.BaseManager.register`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseManager.register) | 方法 | `` | Register a typeid with the manager type |
| [`multiprocessing.managers.BaseManager.shutdown`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseManager.shutdown) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.managers.BaseManager.start`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.BaseManager.start) | 方法 | `(self, initializer=None, initargs=())` | Spawn a server process for this manager object |

## `multiprocessing.managers.SharedMemoryManager`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.managers.SharedMemoryManager.ShareableList`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.managers.SharedMemoryManager.ShareableList) | 方法 | `(self, sequence)` | Returns a new ShareableList instance populated with the values from the input sequence, to be tracked by the manager. |
| [`multiprocessing.managers.SharedMemoryManager.SharedMemory`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.managers.SharedMemoryManager.SharedMemory) | 方法 | `(self, size)` | Returns a new SharedMemory instance with the specified size in bytes, to be tracked by the manager. |

## `multiprocessing.managers.SyncManager`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.managers.SyncManager.Array`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Array) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Barrier`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Barrier) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.BoundedSemaphore`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.BoundedSemaphore) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Condition`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Condition) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.dict`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.dict) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Event`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Event) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.list`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.list) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Lock`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Lock) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Namespace`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Namespace) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Queue`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Queue) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.RLock`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.RLock) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Semaphore`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Semaphore) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |
| [`multiprocessing.managers.SyncManager.Value`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.managers.SyncManager.Value) | 方法 | `(self, /, *args, **kwds)` | 参见官方 API 文档。 |

## `multiprocessing.pool`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.pool`](https://docs.python.org/3.12/library/multiprocessing.html#module-multiprocessing.pool) | 模块 | `` | 参见官方 API 文档。 |
| [`multiprocessing.pool.AsyncResult`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.AsyncResult) | 类 | `(pool, callback, error_callback)` | 参见官方 API 文档。 |
| [`multiprocessing.pool.Pool`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool) | 类 | `(processes=None, initializer=None, initargs=(), maxtasksperchild=None, context=None)` | Class which supports an async version of applying functions to arguments. |
| [`multiprocessing.pool.ThreadPool`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.ThreadPool) | 类 | `(processes=None, initializer=None, initargs=())` | Class which supports an async version of applying functions to arguments. |

## `multiprocessing.pool.AsyncResult`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.pool.AsyncResult.get`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.AsyncResult.get) | 方法 | `(self, timeout=None)` | 参见官方 API 文档。 |
| [`multiprocessing.pool.AsyncResult.ready`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.AsyncResult.ready) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`multiprocessing.pool.AsyncResult.successful`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.AsyncResult.successful) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`multiprocessing.pool.AsyncResult.wait`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.AsyncResult.wait) | 方法 | `(self, timeout=None)` | 参见官方 API 文档。 |

## `multiprocessing.pool.Pool`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.pool.Pool.apply`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.apply) | 方法 | `(self, func, args=(), kwds={})` | Equivalent of `func(*args, **kwds)`. Pool must be running. |
| [`multiprocessing.pool.Pool.apply_async`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.apply_async) | 方法 | `(self, func, args=(), kwds={}, callback=None, error_callback=None)` | Asynchronous version of `apply()` method. |
| [`multiprocessing.pool.Pool.close`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.close) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`multiprocessing.pool.Pool.imap`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.imap) | 方法 | `(self, func, iterable, chunksize=1)` | Equivalent of `map()` -- can be MUCH slower than `Pool.map()`. |
| [`multiprocessing.pool.Pool.imap_unordered`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.imap_unordered) | 方法 | `(self, func, iterable, chunksize=1)` | Like `imap()` method but ordering of results is arbitrary. |
| [`multiprocessing.pool.Pool.join`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.join) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`multiprocessing.pool.Pool.map`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.map) | 方法 | `(self, func, iterable, chunksize=None)` | Apply `func` to each element in `iterable`, collecting the results in a list that is returned. |
| [`multiprocessing.pool.Pool.map_async`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.map_async) | 方法 | `(self, func, iterable, chunksize=None, callback=None, error_callback=None)` | Asynchronous version of `map()` method. |
| [`multiprocessing.pool.Pool.starmap`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.starmap) | 方法 | `(self, func, iterable, chunksize=None)` | Like `map()` method but the elements of the `iterable` are expected to be iterables as well and will be unpacked as arguments. Hence `func` and (a, b) becomes func(a, b). |
| [`multiprocessing.pool.Pool.starmap_async`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.starmap_async) | 方法 | `(self, func, iterable, chunksize=None, callback=None, error_callback=None)` | Asynchronous version of `starmap()` method. |
| [`multiprocessing.pool.Pool.terminate`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.pool.Pool.terminate) | 方法 | `(self)` | 参见官方 API 文档。 |

## `multiprocessing.Process`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.Process.authkey`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.authkey) | 属性 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Process.close`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.close) | 方法 | `(self)` | Close the Process object. |
| [`multiprocessing.Process.daemon`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.daemon) | 属性 | `` | Return whether process is a daemon |
| [`multiprocessing.Process.exitcode`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.exitcode) | 属性 | `` | Return exit code of process or `None` if it has yet to stop |
| [`multiprocessing.Process.is_alive`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.is_alive) | 方法 | `(self)` | Return whether process is alive |
| [`multiprocessing.Process.join`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.join) | 方法 | `(self, timeout=None)` | Wait until child process terminates |
| [`multiprocessing.Process.kill`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.kill) | 方法 | `(self)` | Terminate process; sends SIGKILL signal or uses TerminateProcess() |
| [`multiprocessing.Process.name`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.name) | 属性 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Process.pid`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.pid) | 属性 | `` | Return identifier (PID) of process or `None` if it has yet to start |
| [`multiprocessing.Process.run`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.run) | 方法 | `(self)` | Method to be run in sub-process; can be overridden in sub-class |
| [`multiprocessing.Process.sentinel`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.sentinel) | 属性 | `` | Return a file descriptor (Unix) or handle (Windows) suitable for waiting for process termination. |
| [`multiprocessing.Process.start`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.start) | 方法 | `(self)` | Start child process |
| [`multiprocessing.Process.terminate`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Process.terminate) | 方法 | `(self)` | Terminate process; sends SIGTERM signal or uses TerminateProcess() |

## `multiprocessing.Queue`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.Queue.cancel_join_thread`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.cancel_join_thread) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.close`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.close) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.empty`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.empty) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.full`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.full) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.get`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.get) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.get_nowait`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.get_nowait) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.join_thread`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.join_thread) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.put`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.put) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.put_nowait`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.put_nowait) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.Queue.qsize`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.Queue.qsize) | 方法 | `` | 参见官方 API 文档。 |

## `multiprocessing.RLock`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.RLock.acquire`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.RLock.acquire) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.RLock.release`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.RLock.release) | 方法 | `` | 参见官方 API 文档。 |

## `multiprocessing.shared_memory`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.shared_memory`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#module-multiprocessing.shared_memory) | 模块 | `` | Provides shared memory for direct access across processes. |
| [`multiprocessing.shared_memory.ShareableList`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.ShareableList) | 类 | `(sequence=None, *, name=None)` | Pattern for a mutable list-like object shareable via a shared memory block.  It differs from the built-in list type in that these lists can not change their overall length (i.e.... |
| [`multiprocessing.shared_memory.SharedMemory`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory) | 类 | `(name=None, create=False, size=0)` | Creates a new shared memory block or attaches to an existing shared memory block. |

## `multiprocessing.shared_memory.ShareableList`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.shared_memory.ShareableList.count`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.ShareableList.count) | 方法 | `(self, value)` | L.count(value) -> integer -- return number of occurrences of value. |
| [`multiprocessing.shared_memory.ShareableList.format`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.ShareableList.format) | 属性 | `` | The struct packing format used by all currently stored items. |
| [`multiprocessing.shared_memory.ShareableList.index`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.ShareableList.index) | 方法 | `(self, value)` | L.index(value) -> integer -- return first index of value. Raises ValueError if the value is not present. |
| [`multiprocessing.shared_memory.ShareableList.shm`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.ShareableList.shm) | 属性 | `` | 参见官方 API 文档。 |

## `multiprocessing.shared_memory.SharedMemory`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.shared_memory.SharedMemory.buf`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory.buf) | 属性 | `` | A memoryview of contents of the shared memory block. |
| [`multiprocessing.shared_memory.SharedMemory.close`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory.close) | 方法 | `(self)` | Closes access to the shared memory from this instance but does not destroy the shared memory block. |
| [`multiprocessing.shared_memory.SharedMemory.name`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory.name) | 属性 | `` | Unique name that identifies the shared memory block. |
| [`multiprocessing.shared_memory.SharedMemory.size`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory.size) | 属性 | `` | Size in bytes. |
| [`multiprocessing.shared_memory.SharedMemory.unlink`](https://docs.python.org/3.12/library/multiprocessing.shared_memory.html#multiprocessing.shared_memory.SharedMemory.unlink) | 方法 | `(self)` | Requests that the underlying shared memory block be destroyed. |

## `multiprocessing.sharedctypes`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.sharedctypes.Array`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.sharedctypes.Array) | 函数 | `(typecode_or_type, size_or_initializer, *, lock=True, ctx=None)` | Return a synchronization wrapper for a RawArray |
| [`multiprocessing.sharedctypes.copy`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.sharedctypes.copy) | 函数 | `(obj)` | 参见官方 API 文档。 |
| [`multiprocessing.sharedctypes.RawArray`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.sharedctypes.RawArray) | 函数 | `(typecode_or_type, size_or_initializer)` | Returns a ctypes array allocated from shared memory |
| [`multiprocessing.sharedctypes.RawValue`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.sharedctypes.RawValue) | 函数 | `(typecode_or_type, *args)` | Returns a ctypes object allocated from shared memory |
| [`multiprocessing.sharedctypes.synchronized`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.sharedctypes.synchronized) | 函数 | `(obj, lock=None, ctx=None)` | 参见官方 API 文档。 |
| [`multiprocessing.sharedctypes.Value`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.sharedctypes.Value) | 函数 | `(typecode_or_type, *args, lock=True, ctx=None)` | Return a synchronization wrapper for a Value |

## `multiprocessing.SimpleQueue`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`multiprocessing.SimpleQueue.close`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.SimpleQueue.close) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.SimpleQueue.empty`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.SimpleQueue.empty) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.SimpleQueue.get`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.SimpleQueue.get) | 方法 | `` | 参见官方 API 文档。 |
| [`multiprocessing.SimpleQueue.put`](https://docs.python.org/3.12/library/multiprocessing.html#multiprocessing.SimpleQueue.put) | 方法 | `` | 参见官方 API 文档。 |
