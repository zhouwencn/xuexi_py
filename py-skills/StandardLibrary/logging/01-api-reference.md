<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# logging：日志系统

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/logging.html](https://docs.python.org/3.12/library/logging.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **174** 个公开对象或用户命令。私有下划线接口不收录。

## `logging`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging`](https://docs.python.org/3.12/library/logging.html#module-logging) | 模块 | `` | Logging package for Python. Based on PEP 282 and comments thereto in comp.lang.python. |
| [`logging.addLevelName`](https://docs.python.org/3.12/library/logging.html#logging.addLevelName) | 函数 | `(level, levelName)` | Associate 'levelName' with 'level'. |
| [`logging.basicConfig`](https://docs.python.org/3.12/library/logging.html#logging.basicConfig) | 函数 | `(**kwargs)` | Do basic configuration for the logging system. |
| [`logging.BufferingFormatter`](https://docs.python.org/3.12/library/logging.html#logging.BufferingFormatter) | 类 | `(linefmt=None)` | A formatter suitable for formatting a number of records. |
| [`logging.captureWarnings`](https://docs.python.org/3.12/library/logging.html#logging.captureWarnings) | 函数 | `(capture)` | If capture is true, redirect all warnings to the logging package. If capture is False, ensure that warnings are not redirected to logging but to their original destinations. |
| [`logging.CRITICAL`](https://docs.python.org/3.12/library/logging.html#logging.CRITICAL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`logging.critical`](https://docs.python.org/3.12/library/logging.html#logging.critical) | 函数 | `(msg, *args, **kwargs)` | Log a message with severity 'CRITICAL' on the root logger. If the logger has no handlers, call basicConfig() to add a console handler with a pre-defined format. |
| [`logging.DEBUG`](https://docs.python.org/3.12/library/logging.html#logging.DEBUG) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`logging.debug`](https://docs.python.org/3.12/library/logging.html#logging.debug) | 函数 | `(msg, *args, **kwargs)` | Log a message with severity 'DEBUG' on the root logger. If the logger has no handlers, call basicConfig() to add a console handler with a pre-defined format. |
| [`logging.disable`](https://docs.python.org/3.12/library/logging.html#logging.disable) | 函数 | `(level=50)` | Disable all logging calls of severity 'level' and below. |
| [`logging.ERROR`](https://docs.python.org/3.12/library/logging.html#logging.ERROR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`logging.error`](https://docs.python.org/3.12/library/logging.html#logging.error) | 函数 | `(msg, *args, **kwargs)` | Log a message with severity 'ERROR' on the root logger. If the logger has no handlers, call basicConfig() to add a console handler with a pre-defined format. |
| [`logging.exception`](https://docs.python.org/3.12/library/logging.html#logging.exception) | 函数 | `(msg, *args, exc_info=True, **kwargs)` | Log a message with severity 'ERROR' on the root logger, with exception information. If the logger has no handlers, basicConfig() is called to add a console handler with a pre-de... |
| [`logging.FileHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.FileHandler) | 类 | `(filename, mode='a', encoding=None, delay=False, errors=None)` | A handler class which writes formatted logging records to disk files. |
| [`logging.Filter`](https://docs.python.org/3.12/library/logging.html#logging.Filter) | 类 | `(name='')` | Filter instances are used to perform arbitrary filtering of LogRecords. |
| [`logging.Formatter`](https://docs.python.org/3.12/library/logging.html#logging.Formatter) | 类 | `(fmt=None, datefmt=None, style='%', validate=True, *, defaults=None)` | Formatter instances are used to convert a LogRecord to text. |
| [`logging.getHandlerByName`](https://docs.python.org/3.12/library/logging.html#logging.getHandlerByName) | 函数 | `(name)` | Get a handler with the specified *name*, or None if there isn't one with that name. |
| [`logging.getHandlerNames`](https://docs.python.org/3.12/library/logging.html#logging.getHandlerNames) | 函数 | `()` | Return all known handler names as an immutable set. |
| [`logging.getLevelName`](https://docs.python.org/3.12/library/logging.html#logging.getLevelName) | 函数 | `(level)` | Return the textual or numeric representation of logging level 'level'. |
| [`logging.getLevelNamesMapping`](https://docs.python.org/3.12/library/logging.html#logging.getLevelNamesMapping) | 函数 | `()` | 参见官方 API 文档。 |
| [`logging.getLogger`](https://docs.python.org/3.12/library/logging.html#logging.getLogger) | 函数 | `(name=None)` | Return a logger with the specified name, creating it if necessary. |
| [`logging.getLoggerClass`](https://docs.python.org/3.12/library/logging.html#logging.getLoggerClass) | 函数 | `()` | Return the class to be used when instantiating a logger. |
| [`logging.getLogRecordFactory`](https://docs.python.org/3.12/library/logging.html#logging.getLogRecordFactory) | 函数 | `()` | Return the factory to be used when instantiating a log record. |
| [`logging.Handler`](https://docs.python.org/3.12/library/logging.html#logging.Handler) | 类 | `(level=0)` | Handler instances dispatch logging events to specific destinations. |
| [`logging.INFO`](https://docs.python.org/3.12/library/logging.html#logging.INFO) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`logging.info`](https://docs.python.org/3.12/library/logging.html#logging.info) | 函数 | `(msg, *args, **kwargs)` | Log a message with severity 'INFO' on the root logger. If the logger has no handlers, call basicConfig() to add a console handler with a pre-defined format. |
| [`logging.lastResort`](https://docs.python.org/3.12/library/logging.html#logging.lastResort) | 数据/常量 | `` | This class is like a StreamHandler using sys.stderr, but always uses whatever sys.stderr is currently set to rather than the value of sys.stderr at handler construction time. |
| [`logging.log`](https://docs.python.org/3.12/library/logging.html#logging.log) | 函数 | `(level, msg, *args, **kwargs)` | Log 'msg % args' with the integer severity 'level' on the root logger. If the logger has no handlers, call basicConfig() to add a console handler with a pre-defined format. |
| [`logging.Logger`](https://docs.python.org/3.12/library/logging.html#logging.Logger) | 类 | `(name, level=0)` | Instances of the Logger class represent a single logging channel. A "logging channel" indicates an area of an application. Exactly how an "area" is defined is up to the applicat... |
| [`logging.LoggerAdapter`](https://docs.python.org/3.12/library/logging.html#logging.LoggerAdapter) | 类 | `(logger, extra=None)` | An adapter for loggers which makes it easier to specify contextual information in logging output. |
| [`logging.LogRecord`](https://docs.python.org/3.12/library/logging.html#logging.LogRecord) | 类 | `(name, level, pathname, lineno, msg, args, exc_info, func=None, sinfo=None, **kwargs)` | A LogRecord instance represents an event being logged. |
| [`logging.makeLogRecord`](https://docs.python.org/3.12/library/logging.html#logging.makeLogRecord) | 函数 | `(dict)` | Make a LogRecord whose attributes are defined by the specified dictionary, This function is useful for converting a logging event received over a socket connection (which is sen... |
| [`logging.NOTSET`](https://docs.python.org/3.12/library/logging.html#logging.NOTSET) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`logging.NullHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.NullHandler) | 类 | `(level=0)` | This handler does nothing. It's intended to be used to avoid the "No handlers could be found for logger XXX" one-off warning. This is important for library code, which may conta... |
| [`logging.raiseExceptions`](https://docs.python.org/3.12/library/logging.html#logging.raiseExceptions) | 数据/常量 | `` | bool(x) -> bool |
| [`logging.setLoggerClass`](https://docs.python.org/3.12/library/logging.html#logging.setLoggerClass) | 函数 | `(klass)` | Set the class to be used when instantiating a logger. The class should define __init__() such that only a name argument is required, and the __init__() should call Logger.__init... |
| [`logging.setLogRecordFactory`](https://docs.python.org/3.12/library/logging.html#logging.setLogRecordFactory) | 函数 | `(factory)` | Set the factory to be used when instantiating a log record. |
| [`logging.shutdown`](https://docs.python.org/3.12/library/logging.html#logging.shutdown) | 函数 | `(handlerList=[<weakref at 0x101d6e430; to '_StderrHandler' at 0x101d5cc80>])` | Perform any cleanup actions in the logging system (e.g. flushing buffers). |
| [`logging.StreamHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.StreamHandler) | 类 | `(stream=None)` | A handler class which writes logging records, appropriately formatted, to a stream. Note that this class does not close the stream, as sys.stdout or sys.stderr may be used. |
| [`logging.WARNING`](https://docs.python.org/3.12/library/logging.html#logging.WARNING) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`logging.warning`](https://docs.python.org/3.12/library/logging.html#logging.warning) | 函数 | `(msg, *args, **kwargs)` | Log a message with severity 'WARNING' on the root logger. If the logger has no handlers, call basicConfig() to add a console handler with a pre-defined format. |

## `logging.BufferingFormatter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.BufferingFormatter.format`](https://docs.python.org/3.12/library/logging.html#logging.BufferingFormatter.format) | 方法 | `(self, records)` | Format the specified records and return the result as a string. |
| [`logging.BufferingFormatter.formatFooter`](https://docs.python.org/3.12/library/logging.html#logging.BufferingFormatter.formatFooter) | 方法 | `(self, records)` | Return the footer string for the specified records. |
| [`logging.BufferingFormatter.formatHeader`](https://docs.python.org/3.12/library/logging.html#logging.BufferingFormatter.formatHeader) | 方法 | `(self, records)` | Return the header string for the specified records. |

## `logging.config`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.config`](https://docs.python.org/3.12/library/logging.config.html#module-logging.config) | 模块 | `` | Configuration functions for the logging package for Python. The core package is based on PEP 282 and comments thereto in comp.lang.python, and influenced by Apache's log4j system. |
| [`logging.config.dictConfig`](https://docs.python.org/3.12/library/logging.config.html#logging.config.dictConfig) | 函数 | `(config)` | Configure logging using a dictionary. |
| [`logging.config.fileConfig`](https://docs.python.org/3.12/library/logging.config.html#logging.config.fileConfig) | 函数 | `(fname, defaults=None, disable_existing_loggers=True, encoding=None)` | Read the logging configuration from a ConfigParser-format file. |
| [`logging.config.listen`](https://docs.python.org/3.12/library/logging.config.html#logging.config.listen) | 函数 | `(port=9030, verify=None)` | Start up a socket server on the specified port, and listen for new configurations. |
| [`logging.config.stopListening`](https://docs.python.org/3.12/library/logging.config.html#logging.config.stopListening) | 函数 | `()` | Stop the listening server which was created with a call to listen(). |

## `logging.FileHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.FileHandler.close`](https://docs.python.org/3.12/library/logging.handlers.html#logging.FileHandler.close) | 方法 | `(self)` | Closes the stream. |
| [`logging.FileHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.FileHandler.emit) | 方法 | `(self, record)` | Emit a record. |

## `logging.Filter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.Filter.filter`](https://docs.python.org/3.12/library/logging.html#logging.Filter.filter) | 方法 | `(self, record)` | Determine if the specified record is to be logged. |

## `logging.Formatter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.Formatter.format`](https://docs.python.org/3.12/library/logging.html#logging.Formatter.format) | 方法 | `(self, record)` | Format the specified record as text. |
| [`logging.Formatter.formatException`](https://docs.python.org/3.12/library/logging.html#logging.Formatter.formatException) | 方法 | `(self, ei)` | Format and return the specified exception information as a string. |
| [`logging.Formatter.formatStack`](https://docs.python.org/3.12/library/logging.html#logging.Formatter.formatStack) | 方法 | `(self, stack_info)` | This method is provided as an extension point for specialized formatting of stack information. |
| [`logging.Formatter.formatTime`](https://docs.python.org/3.12/library/logging.html#logging.Formatter.formatTime) | 方法 | `(self, record, datefmt=None)` | Return the creation time of the specified LogRecord as formatted text. |

## `logging.Handler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.Handler.acquire`](https://docs.python.org/3.12/library/logging.html#logging.Handler.acquire) | 方法 | `(self)` | Acquire the I/O thread lock. |
| [`logging.Handler.addFilter`](https://docs.python.org/3.12/library/logging.html#logging.Handler.addFilter) | 方法 | `(self, filter)` | Add the specified filter to this handler. |
| [`logging.Handler.close`](https://docs.python.org/3.12/library/logging.html#logging.Handler.close) | 方法 | `(self)` | Tidy up any resources used by the handler. |
| [`logging.Handler.createLock`](https://docs.python.org/3.12/library/logging.html#logging.Handler.createLock) | 方法 | `(self)` | Acquire a thread lock for serializing access to the underlying I/O. |
| [`logging.Handler.emit`](https://docs.python.org/3.12/library/logging.html#logging.Handler.emit) | 方法 | `(self, record)` | Do whatever it takes to actually log the specified logging record. |
| [`logging.Handler.filter`](https://docs.python.org/3.12/library/logging.html#logging.Handler.filter) | 方法 | `(self, record)` | Determine if a record is loggable by consulting all the filters. |
| [`logging.Handler.flush`](https://docs.python.org/3.12/library/logging.html#logging.Handler.flush) | 方法 | `(self)` | Ensure all logging output has been flushed. |
| [`logging.Handler.format`](https://docs.python.org/3.12/library/logging.html#logging.Handler.format) | 方法 | `(self, record)` | Format the specified record. |
| [`logging.Handler.handle`](https://docs.python.org/3.12/library/logging.html#logging.Handler.handle) | 方法 | `(self, record)` | Conditionally emit the specified logging record. |
| [`logging.Handler.handleError`](https://docs.python.org/3.12/library/logging.html#logging.Handler.handleError) | 方法 | `(self, record)` | Handle errors which occur during an emit() call. |
| [`logging.Handler.release`](https://docs.python.org/3.12/library/logging.html#logging.Handler.release) | 方法 | `(self)` | Release the I/O thread lock. |
| [`logging.Handler.removeFilter`](https://docs.python.org/3.12/library/logging.html#logging.Handler.removeFilter) | 方法 | `(self, filter)` | Remove the specified filter from this handler. |
| [`logging.Handler.setFormatter`](https://docs.python.org/3.12/library/logging.html#logging.Handler.setFormatter) | 方法 | `(self, fmt)` | Set the formatter for this handler. |
| [`logging.Handler.setLevel`](https://docs.python.org/3.12/library/logging.html#logging.Handler.setLevel) | 方法 | `(self, level)` | Set the logging level of this handler.  level must be an int or a str. |

## `logging.handlers`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers`](https://docs.python.org/3.12/library/logging.handlers.html#module-logging.handlers) | 模块 | `` | Additional handlers for the logging package for Python. The core package is based on PEP 282 and comments thereto in comp.lang.python. |
| [`logging.handlers.BaseRotatingHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BaseRotatingHandler) | 类 | `(filename, mode, encoding=None, delay=False, errors=None)` | Base class for handlers that rotate log files at a certain point. Not meant to be instantiated directly.  Instead, use RotatingFileHandler or TimedRotatingFileHandler. |
| [`logging.handlers.BufferingHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BufferingHandler) | 类 | `(capacity)` | A handler class which buffers logging records in memory. Whenever each record is added to the buffer, a check is made to see if the buffer should be flushed. If it should, then ... |
| [`logging.handlers.DatagramHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.DatagramHandler) | 类 | `(host, port)` | A handler class which writes logging records, in pickle format, to a datagram socket.  The pickle which is sent is that of the LogRecord's attribute dictionary (__dict__), so th... |
| [`logging.handlers.HTTPHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.HTTPHandler) | 类 | `(host, url, method='GET', secure=False, credentials=None, context=None)` | A class which sends records to a web server, using either GET or POST semantics. |
| [`logging.handlers.MemoryHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.MemoryHandler) | 类 | `(capacity, flushLevel=40, target=None, flushOnClose=True)` | A handler class which buffers logging records in memory, periodically flushing them to a target handler. Flushing occurs whenever the buffer is full, or when an event of a certa... |
| [`logging.handlers.NTEventLogHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.NTEventLogHandler) | 类 | `(appname, dllname=None, logtype='Application')` | A handler class which sends events to the NT Event Log. Adds a registry entry for the specified application name. If no dllname is provided, win32service.pyd (which contains som... |
| [`logging.handlers.QueueHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueHandler) | 类 | `(queue)` | This handler sends events to a queue. Typically, it would be used together with a multiprocessing Queue to centralise logging to file in one process (in a multi-process applicat... |
| [`logging.handlers.QueueListener`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueListener) | 类 | `(queue, *handlers, respect_handler_level=False)` | This class implements an internal threaded listener which watches for LogRecords being added to a queue, removes them and passes them to a list of handlers for processing. |
| [`logging.handlers.RotatingFileHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.RotatingFileHandler) | 类 | `(filename, mode='a', maxBytes=0, backupCount=0, encoding=None, delay=False, errors=None)` | Handler for logging to a set of files, which switches from one file to the next when the current file reaches a certain size. |
| [`logging.handlers.SMTPHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SMTPHandler) | 类 | `(mailhost, fromaddr, toaddrs, subject, credentials=None, secure=None, timeout=5.0)` | A handler class which sends an SMTP email for each logging event. |
| [`logging.handlers.SocketHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler) | 类 | `(host, port)` | A handler class which writes logging records, in pickle format, to a streaming socket. The socket is kept open across logging calls. If the peer resets it, an attempt is made to... |
| [`logging.handlers.SysLogHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SysLogHandler) | 类 | `(address=('localhost', 514), facility=1, socktype=None)` | A handler class which sends formatted logging records to a syslog server. Based on Sam Rushing's syslog module: http://www.nightmare.com/squirl/python-ext/misc/syslog.py Contrib... |
| [`logging.handlers.TimedRotatingFileHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler) | 类 | `(filename, when='h', interval=1, backupCount=0, encoding=None, delay=False, utc=False, atTime=None, errors=None)` | Handler for logging to a file, rotating the log file at certain timed intervals. |
| [`logging.handlers.WatchedFileHandler`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.WatchedFileHandler) | 类 | `(filename, mode='a', encoding=None, delay=False, errors=None)` | A handler for logging to a file, which watches the file to see if it has changed while in use. This can happen because of usage of programs such as newsyslog and logrotate which... |

## `logging.handlers.BaseRotatingHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.BaseRotatingHandler.namer`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BaseRotatingHandler.namer) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.handlers.BaseRotatingHandler.rotate`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BaseRotatingHandler.rotate) | 方法 | `(self, source, dest)` | When rotating, rotate the current log. |
| [`logging.handlers.BaseRotatingHandler.rotation_filename`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BaseRotatingHandler.rotation_filename) | 方法 | `(self, default_name)` | Modify the filename of a log file when rotating. |
| [`logging.handlers.BaseRotatingHandler.rotator`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BaseRotatingHandler.rotator) | 属性 | `` | 参见官方 API 文档。 |

## `logging.handlers.BufferingHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.BufferingHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BufferingHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.BufferingHandler.flush`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BufferingHandler.flush) | 方法 | `(self)` | Override to implement custom flushing behaviour. |
| [`logging.handlers.BufferingHandler.shouldFlush`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.BufferingHandler.shouldFlush) | 方法 | `(self, record)` | Should the handler flush its buffer? |

## `logging.handlers.DatagramHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.DatagramHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.DatagramHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.DatagramHandler.makeSocket`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.DatagramHandler.makeSocket) | 方法 | `(self)` | The factory method of SocketHandler is here overridden to create a UDP socket (SOCK_DGRAM). |
| [`logging.handlers.DatagramHandler.send`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.DatagramHandler.send) | 方法 | `(self, s)` | Send a pickled string to a socket. |

## `logging.handlers.HTTPHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.HTTPHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.HTTPHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.HTTPHandler.mapLogRecord`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.HTTPHandler.mapLogRecord) | 方法 | `(self, record)` | Default implementation of mapping the log record into a dict that is sent as the CGI data. Overwrite in your class. Contributed by Franz Glasner. |

## `logging.handlers.MemoryHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.MemoryHandler.close`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.MemoryHandler.close) | 方法 | `(self)` | Flush, if appropriately configured, set the target to None and lose the buffer. |
| [`logging.handlers.MemoryHandler.flush`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.MemoryHandler.flush) | 方法 | `(self)` | For a MemoryHandler, flushing means just sending the buffered records to the target, if there is one. Override if you want different behaviour. |
| [`logging.handlers.MemoryHandler.setTarget`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.MemoryHandler.setTarget) | 方法 | `(self, target)` | Set the target handler for this handler. |
| [`logging.handlers.MemoryHandler.shouldFlush`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.MemoryHandler.shouldFlush) | 方法 | `(self, record)` | Check for buffer full or a record at the flushLevel or higher. |

## `logging.handlers.NTEventLogHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.NTEventLogHandler.close`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.NTEventLogHandler.close) | 方法 | `(self)` | Clean up this handler. |
| [`logging.handlers.NTEventLogHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.NTEventLogHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.NTEventLogHandler.getEventCategory`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.NTEventLogHandler.getEventCategory) | 方法 | `(self, record)` | Return the event category for the record. |
| [`logging.handlers.NTEventLogHandler.getEventType`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.NTEventLogHandler.getEventType) | 方法 | `(self, record)` | Return the event type for the record. |
| [`logging.handlers.NTEventLogHandler.getMessageID`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.NTEventLogHandler.getMessageID) | 方法 | `(self, record)` | Return the message ID for the event record. If you are using your own messages, you could do this by having the msg passed to the logger being an ID rather than a formatting str... |

## `logging.handlers.QueueHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.QueueHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.QueueHandler.enqueue`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueHandler.enqueue) | 方法 | `(self, record)` | Enqueue a record. |
| [`logging.handlers.QueueHandler.listener`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueHandler.listener) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.handlers.QueueHandler.prepare`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueHandler.prepare) | 方法 | `(self, record)` | Prepare a record for queuing. The object returned by this method is enqueued. |

## `logging.handlers.QueueListener`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.QueueListener.dequeue`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueListener.dequeue) | 方法 | `(self, block)` | Dequeue a record and return it, optionally blocking. |
| [`logging.handlers.QueueListener.enqueue_sentinel`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueListener.enqueue_sentinel) | 方法 | `(self)` | This is used to enqueue the sentinel record. |
| [`logging.handlers.QueueListener.handle`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueListener.handle) | 方法 | `(self, record)` | Handle a record. |
| [`logging.handlers.QueueListener.prepare`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueListener.prepare) | 方法 | `(self, record)` | Prepare a record for handling. |
| [`logging.handlers.QueueListener.start`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueListener.start) | 方法 | `(self)` | Start the listener. |
| [`logging.handlers.QueueListener.stop`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.QueueListener.stop) | 方法 | `(self)` | Stop the listener. |

## `logging.handlers.RotatingFileHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.RotatingFileHandler.doRollover`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.RotatingFileHandler.doRollover) | 方法 | `(self)` | Do a rollover, as described in __init__(). |
| [`logging.handlers.RotatingFileHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.RotatingFileHandler.emit) | 方法 | `(self, record)` | Emit a record. |

## `logging.handlers.SMTPHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.SMTPHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SMTPHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.SMTPHandler.getSubject`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SMTPHandler.getSubject) | 方法 | `(self, record)` | Determine the subject for the email. |

## `logging.handlers.SocketHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.SocketHandler.close`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler.close) | 方法 | `(self)` | Closes the socket. |
| [`logging.handlers.SocketHandler.createSocket`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler.createSocket) | 方法 | `(self)` | Try to create a socket, using an exponential backoff with a max retry time. Thanks to Robert Olson for the original patch (SF #815911) which has been slightly refactored. |
| [`logging.handlers.SocketHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.SocketHandler.handleError`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler.handleError) | 方法 | `(self, record)` | Handle an error during logging. |
| [`logging.handlers.SocketHandler.makePickle`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler.makePickle) | 方法 | `(self, record)` | Pickles the record in binary format with a length prefix, and returns it ready for transmission across the socket. |
| [`logging.handlers.SocketHandler.makeSocket`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler.makeSocket) | 方法 | `(self, timeout=1)` | A factory method which allows subclasses to define the precise type of socket they want. |
| [`logging.handlers.SocketHandler.send`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SocketHandler.send) | 方法 | `(self, s)` | Send a pickled string to the socket. |

## `logging.handlers.SysLogHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.SysLogHandler.close`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SysLogHandler.close) | 方法 | `(self)` | Closes the socket. |
| [`logging.handlers.SysLogHandler.createSocket`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SysLogHandler.createSocket) | 方法 | `(self)` | Try to create a socket and, if it's not a datagram socket, connect it to the other end. This method is called during handler initialization, but it's not regarded as an error if... |
| [`logging.handlers.SysLogHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SysLogHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.SysLogHandler.encodePriority`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SysLogHandler.encodePriority) | 方法 | `(self, facility, priority)` | Encode the facility and priority. You can pass in strings or integers - if strings are passed, the facility_names and priority_names mapping dictionaries are used to convert the... |
| [`logging.handlers.SysLogHandler.mapPriority`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.SysLogHandler.mapPriority) | 方法 | `(self, levelName)` | Map a logging level name to a key in the priority_names map. This is useful in two scenarios: when custom levels are being used, and in the case where you can't do a straightfor... |

## `logging.handlers.TimedRotatingFileHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.TimedRotatingFileHandler.doRollover`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler.doRollover) | 方法 | `(self)` | do a rollover; in this case, a date/time stamp is appended to the filename when the rollover happens.  However, you want the file to be named for the start of the interval, not ... |
| [`logging.handlers.TimedRotatingFileHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.TimedRotatingFileHandler.getFilesToDelete`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.TimedRotatingFileHandler.getFilesToDelete) | 方法 | `(self)` | Determine the files to delete when rolling over. |

## `logging.handlers.WatchedFileHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.handlers.WatchedFileHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.WatchedFileHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.handlers.WatchedFileHandler.reopenIfNeeded`](https://docs.python.org/3.12/library/logging.handlers.html#logging.handlers.WatchedFileHandler.reopenIfNeeded) | 方法 | `(self)` | Reopen log file if needed. |

## `logging.Logger`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.Logger.addFilter`](https://docs.python.org/3.12/library/logging.html#logging.Logger.addFilter) | 方法 | `(self, filter)` | Add the specified filter to this handler. |
| [`logging.Logger.addHandler`](https://docs.python.org/3.12/library/logging.html#logging.Logger.addHandler) | 方法 | `(self, hdlr)` | Add the specified handler to this logger. |
| [`logging.Logger.critical`](https://docs.python.org/3.12/library/logging.html#logging.Logger.critical) | 方法 | `(self, msg, *args, **kwargs)` | Log 'msg % args' with severity 'CRITICAL'. |
| [`logging.Logger.debug`](https://docs.python.org/3.12/library/logging.html#logging.Logger.debug) | 方法 | `(self, msg, *args, **kwargs)` | Log 'msg % args' with severity 'DEBUG'. |
| [`logging.Logger.disabled`](https://docs.python.org/3.12/library/logging.html#logging.Logger.disabled) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.Logger.error`](https://docs.python.org/3.12/library/logging.html#logging.Logger.error) | 方法 | `(self, msg, *args, **kwargs)` | Log 'msg % args' with severity 'ERROR'. |
| [`logging.Logger.exception`](https://docs.python.org/3.12/library/logging.html#logging.Logger.exception) | 方法 | `(self, msg, *args, exc_info=True, **kwargs)` | Convenience method for logging an ERROR with exception information. |
| [`logging.Logger.filter`](https://docs.python.org/3.12/library/logging.html#logging.Logger.filter) | 方法 | `(self, record)` | Determine if a record is loggable by consulting all the filters. |
| [`logging.Logger.findCaller`](https://docs.python.org/3.12/library/logging.html#logging.Logger.findCaller) | 方法 | `(self, stack_info=False, stacklevel=1)` | Find the stack frame of the caller so that we can note the source file name, line number and function name. |
| [`logging.Logger.getChild`](https://docs.python.org/3.12/library/logging.html#logging.Logger.getChild) | 方法 | `(self, suffix)` | Get a logger which is a descendant to this one. |
| [`logging.Logger.getChildren`](https://docs.python.org/3.12/library/logging.html#logging.Logger.getChildren) | 方法 | `(self)` | 参见官方 API 文档。 |
| [`logging.Logger.getEffectiveLevel`](https://docs.python.org/3.12/library/logging.html#logging.Logger.getEffectiveLevel) | 方法 | `(self)` | Get the effective level for this logger. |
| [`logging.Logger.handle`](https://docs.python.org/3.12/library/logging.html#logging.Logger.handle) | 方法 | `(self, record)` | Call the handlers for the specified record. |
| [`logging.Logger.handlers`](https://docs.python.org/3.12/library/logging.html#logging.Logger.handlers) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.Logger.hasHandlers`](https://docs.python.org/3.12/library/logging.html#logging.Logger.hasHandlers) | 方法 | `(self)` | See if this logger has any handlers configured. |
| [`logging.Logger.info`](https://docs.python.org/3.12/library/logging.html#logging.Logger.info) | 方法 | `(self, msg, *args, **kwargs)` | Log 'msg % args' with severity 'INFO'. |
| [`logging.Logger.isEnabledFor`](https://docs.python.org/3.12/library/logging.html#logging.Logger.isEnabledFor) | 方法 | `(self, level)` | Is this logger enabled for level 'level'? |
| [`logging.Logger.level`](https://docs.python.org/3.12/library/logging.html#logging.Logger.level) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.Logger.log`](https://docs.python.org/3.12/library/logging.html#logging.Logger.log) | 方法 | `(self, level, msg, *args, **kwargs)` | Log 'msg % args' with the integer severity 'level'. |
| [`logging.Logger.makeRecord`](https://docs.python.org/3.12/library/logging.html#logging.Logger.makeRecord) | 方法 | `(self, name, level, fn, lno, msg, args, exc_info, func=None, extra=None, sinfo=None)` | A factory method which can be overridden in subclasses to create specialized LogRecords. |
| [`logging.Logger.name`](https://docs.python.org/3.12/library/logging.html#logging.Logger.name) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.Logger.parent`](https://docs.python.org/3.12/library/logging.html#logging.Logger.parent) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.Logger.propagate`](https://docs.python.org/3.12/library/logging.html#logging.Logger.propagate) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.Logger.removeFilter`](https://docs.python.org/3.12/library/logging.html#logging.Logger.removeFilter) | 方法 | `(self, filter)` | Remove the specified filter from this handler. |
| [`logging.Logger.removeHandler`](https://docs.python.org/3.12/library/logging.html#logging.Logger.removeHandler) | 方法 | `(self, hdlr)` | Remove the specified handler from this logger. |
| [`logging.Logger.setLevel`](https://docs.python.org/3.12/library/logging.html#logging.Logger.setLevel) | 方法 | `(self, level)` | Set the logging level of this logger.  level must be an int or a str. |
| [`logging.Logger.warning`](https://docs.python.org/3.12/library/logging.html#logging.Logger.warning) | 方法 | `(self, msg, *args, **kwargs)` | Log 'msg % args' with severity 'WARNING'. |

## `logging.LoggerAdapter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.LoggerAdapter.manager`](https://docs.python.org/3.12/library/logging.html#logging.LoggerAdapter.manager) | 属性 | `` | 参见官方 API 文档。 |
| [`logging.LoggerAdapter.process`](https://docs.python.org/3.12/library/logging.html#logging.LoggerAdapter.process) | 方法 | `(self, msg, kwargs)` | Process the logging message and keyword arguments passed in to a logging call to insert contextual information. You can either manipulate the message itself, the keyword args or... |

## `logging.LogRecord`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.LogRecord.getMessage`](https://docs.python.org/3.12/library/logging.html#logging.LogRecord.getMessage) | 方法 | `(self)` | Return the message for this LogRecord. |

## `logging.NullHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.NullHandler.createLock`](https://docs.python.org/3.12/library/logging.handlers.html#logging.NullHandler.createLock) | 方法 | `(self)` | Acquire a thread lock for serializing access to the underlying I/O. |
| [`logging.NullHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.NullHandler.emit) | 方法 | `(self, record)` | Stub. |
| [`logging.NullHandler.handle`](https://docs.python.org/3.12/library/logging.handlers.html#logging.NullHandler.handle) | 方法 | `(self, record)` | Stub. |

## `logging.StreamHandler`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`logging.StreamHandler.emit`](https://docs.python.org/3.12/library/logging.handlers.html#logging.StreamHandler.emit) | 方法 | `(self, record)` | Emit a record. |
| [`logging.StreamHandler.flush`](https://docs.python.org/3.12/library/logging.handlers.html#logging.StreamHandler.flush) | 方法 | `(self)` | Flushes the stream. |
| [`logging.StreamHandler.setStream`](https://docs.python.org/3.12/library/logging.handlers.html#logging.StreamHandler.setStream) | 方法 | `(self, stream)` | Sets the StreamHandler's stream to the specified value, if it is different. |
| [`logging.StreamHandler.terminator`](https://docs.python.org/3.12/library/logging.handlers.html#logging.StreamHandler.terminator) | 属性 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
