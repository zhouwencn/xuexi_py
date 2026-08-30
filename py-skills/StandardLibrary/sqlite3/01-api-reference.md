<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# sqlite3：SQLite DB-API

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/sqlite3.html](https://docs.python.org/3.12/library/sqlite3.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **105** 个公开对象或用户命令。私有下划线接口不收录。

## `sqlite3`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sqlite3`](https://docs.python.org/3.12/library/sqlite3.html#module-sqlite3) | 模块 | `` | The sqlite3 extension module provides a DB-API 2.0 (PEP 249) compliant interface to the SQLite library, and requires SQLite 3.7.15 or newer. |
| [`sqlite3.apilevel`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.apilevel) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sqlite3.Blob`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Blob) | 类 | `()` | 参见官方 API 文档。 |
| [`sqlite3.complete_statement`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.complete_statement) | 函数 | `(statement)` | Checks if a string contains a complete SQL statement. |
| [`sqlite3.connect`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.connect) | 函数 | `` | Opens a connection to the SQLite database file database. |
| [`sqlite3.Connection`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection) | 类 | `` | SQLite database connection object. |
| [`sqlite3.Cursor`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor) | 类 | `` | SQLite database cursor class. |
| [`sqlite3.DatabaseError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.DatabaseError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.DataError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.DataError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.enable_callback_tracebacks`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.enable_callback_tracebacks) | 函数 | `(enable, /)` | Enable or disable callback functions throwing errors to stderr. |
| [`sqlite3.Error`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Error) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.IntegrityError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.IntegrityError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.InterfaceError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.InterfaceError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.InternalError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.InternalError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.LEGACY_TRANSACTION_CONTROL`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.LEGACY_TRANSACTION_CONTROL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.NotSupportedError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.NotSupportedError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.OperationalError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.OperationalError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.paramstyle`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.paramstyle) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sqlite3.PARSE_COLNAMES`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.PARSE_COLNAMES) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.PARSE_DECLTYPES`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.PARSE_DECLTYPES) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.PrepareProtocol`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.PrepareProtocol) | 类 | `` | PEP 246 style object adaption protocol type. |
| [`sqlite3.ProgrammingError`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.ProgrammingError) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`sqlite3.register_adapter`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.register_adapter) | 函数 | `(type, adapter, /)` | Register a function to adapt Python objects to SQLite values. |
| [`sqlite3.register_converter`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.register_converter) | 函数 | `(typename, converter, /)` | Register a function to convert SQLite values to Python objects. |
| [`sqlite3.Row`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Row) | 类 | `` | 参见官方 API 文档。 |
| [`sqlite3.SQLITE_DBCONFIG_DEFENSIVE`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_DEFENSIVE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_DQS_DDL`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_DQS_DDL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_DQS_DML`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_DQS_DML) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_ENABLE_FKEY`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_ENABLE_FKEY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_ENABLE_QPSG`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_ENABLE_QPSG) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_ENABLE_TRIGGER`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_ENABLE_TRIGGER) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_ENABLE_VIEW`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_ENABLE_VIEW) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_RESET_DATABASE`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_RESET_DATABASE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_TRIGGER_EQP`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_TRIGGER_EQP) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_TRUSTED_SCHEMA`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_TRUSTED_SCHEMA) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DBCONFIG_WRITABLE_SCHEMA`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DBCONFIG_WRITABLE_SCHEMA) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_DENY`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_DENY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_IGNORE`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_IGNORE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.SQLITE_OK`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.SQLITE_OK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.sqlite_version`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.sqlite_version) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sqlite3.sqlite_version_info`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.sqlite_version_info) | 数据/常量 | `` | Built-in immutable sequence. |
| [`sqlite3.threadsafety`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.threadsafety) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sqlite3.version`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.version) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sqlite3.version_info`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.version_info) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sqlite3.Warning`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Warning) | 异常 | `` | Common base class for all non-exit exceptions. |

## `sqlite3.Blob`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sqlite3.Blob.close`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Blob.close) | 方法 | `(self, /)` | Close the blob. |
| [`sqlite3.Blob.read`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Blob.read) | 方法 | `(self, length=-1, /)` | Read data at the current offset position. |
| [`sqlite3.Blob.seek`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Blob.seek) | 方法 | `(self, offset, origin=0, /)` | Set the current access position to offset. |
| [`sqlite3.Blob.tell`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Blob.tell) | 方法 | `(self, /)` | Return the current access position for the blob. |
| [`sqlite3.Blob.write`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Blob.write) | 方法 | `(self, data, /)` | Write data at the current offset. |

## `sqlite3.Connection`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sqlite3.Connection.autocommit`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.autocommit) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Connection.backup`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.backup) | 方法 | `(self, /, target, *, pages=-1, progress=None, name='main', sleep=0.25)` | Makes a backup of the database. |
| [`sqlite3.Connection.blobopen`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.blobopen) | 方法 | `(self, table, column, row, /, *, readonly=False, name='main')` | Open and return a BLOB object. |
| [`sqlite3.Connection.close`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.close) | 方法 | `(self, /)` | Close the database connection. |
| [`sqlite3.Connection.commit`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.commit) | 方法 | `(self, /)` | Commit any pending transaction to the database. |
| [`sqlite3.Connection.create_aggregate`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.create_aggregate) | 方法 | `(self, /, name, n_arg, aggregate_class)` | Creates a new aggregate. |
| [`sqlite3.Connection.create_collation`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.create_collation) | 方法 | `(self, name, callback, /)` | Creates a collation function. |
| [`sqlite3.Connection.create_function`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.create_function) | 方法 | `(self, /, name, narg, func, *, deterministic=False)` | Creates a new function. |
| [`sqlite3.Connection.create_window_function`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.create_window_function) | 方法 | `(self, name, num_params, aggregate_class, /)` | Creates or redefines an aggregate window function. Non-standard. |
| [`sqlite3.Connection.cursor`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.cursor) | 方法 | `` | Return a cursor for the connection. |
| [`sqlite3.Connection.deserialize`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.deserialize) | 方法 | `(self, data, /, *, name='main')` | Load a serialized database. |
| [`sqlite3.Connection.enable_load_extension`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.enable_load_extension) | 方法 | `(self, enable, /)` | Enable dynamic loading of SQLite extension modules. |
| [`sqlite3.Connection.execute`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.execute) | 方法 | `` | Executes an SQL statement. |
| [`sqlite3.Connection.executemany`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.executemany) | 方法 | `(self, sql, parameters, /)` | Repeatedly executes an SQL statement. |
| [`sqlite3.Connection.executescript`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.executescript) | 方法 | `(self, sql_script, /)` | Executes multiple SQL statements at once. |
| [`sqlite3.Connection.getconfig`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.getconfig) | 方法 | `(self, op, /)` | Query a boolean connection configuration option. |
| [`sqlite3.Connection.getlimit`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.getlimit) | 方法 | `(self, category, /)` | Get connection run-time limits. |
| [`sqlite3.Connection.in_transaction`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.in_transaction) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Connection.interrupt`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.interrupt) | 方法 | `(self, /)` | Abort any pending database operation. |
| [`sqlite3.Connection.isolation_level`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.isolation_level) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Connection.iterdump`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.iterdump) | 方法 | `(self, /)` | Returns iterator to the dump of the database in an SQL text format. |
| [`sqlite3.Connection.load_extension`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.load_extension) | 方法 | `(self, name, /, *, entrypoint=None)` | Load SQLite extension module. |
| [`sqlite3.Connection.rollback`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.rollback) | 方法 | `(self, /)` | Roll back to the start of any pending transaction. |
| [`sqlite3.Connection.row_factory`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.row_factory) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Connection.serialize`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.serialize) | 方法 | `(self, /, *, name='main')` | Serialize a database into a byte string. |
| [`sqlite3.Connection.set_authorizer`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.set_authorizer) | 方法 | `(self, /, authorizer_callback)` | Sets authorizer callback. |
| [`sqlite3.Connection.set_progress_handler`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.set_progress_handler) | 方法 | `(self, /, progress_handler, n)` | Sets progress handler callback. |
| [`sqlite3.Connection.set_trace_callback`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.set_trace_callback) | 方法 | `(self, /, trace_callback)` | Sets a trace callback called for each SQL statement (passed as unicode). |
| [`sqlite3.Connection.setconfig`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.setconfig) | 方法 | `(self, op, enable=True, /)` | Set a boolean connection configuration option. |
| [`sqlite3.Connection.setlimit`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.setlimit) | 方法 | `(self, category, limit, /)` | Set connection run-time limits. |
| [`sqlite3.Connection.text_factory`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.text_factory) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Connection.total_changes`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Connection.total_changes) | 属性 | `` | 参见官方 API 文档。 |

## `sqlite3.Cursor`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sqlite3.Cursor.arraysize`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.arraysize) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Cursor.close`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.close) | 方法 | `(self, /)` | Closes the cursor. |
| [`sqlite3.Cursor.connection`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.connection) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Cursor.description`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.description) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Cursor.execute`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.execute) | 方法 | `(self, sql, parameters=(), /)` | Executes an SQL statement. |
| [`sqlite3.Cursor.executemany`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.executemany) | 方法 | `(self, sql, seq_of_parameters, /)` | Repeatedly executes an SQL statement. |
| [`sqlite3.Cursor.executescript`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.executescript) | 方法 | `(self, sql_script, /)` | Executes multiple SQL statements at once. |
| [`sqlite3.Cursor.fetchall`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.fetchall) | 方法 | `(self, /)` | Fetches all rows from the resultset. |
| [`sqlite3.Cursor.fetchmany`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.fetchmany) | 方法 | `(self, /, size=1)` | Fetches several rows from the resultset. |
| [`sqlite3.Cursor.fetchone`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.fetchone) | 方法 | `(self, /)` | Fetches one row from the resultset. |
| [`sqlite3.Cursor.lastrowid`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.lastrowid) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Cursor.row_factory`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.row_factory) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Cursor.rowcount`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.rowcount) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Cursor.setinputsizes`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.setinputsizes) | 方法 | `(self, sizes, /)` | Required by DB-API. Does nothing in sqlite3. |
| [`sqlite3.Cursor.setoutputsize`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Cursor.setoutputsize) | 方法 | `(self, size, column=None, /)` | Required by DB-API. Does nothing in sqlite3. |

## `sqlite3.Error`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sqlite3.Error.sqlite_errorcode`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Error.sqlite_errorcode) | 属性 | `` | 参见官方 API 文档。 |
| [`sqlite3.Error.sqlite_errorname`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Error.sqlite_errorname) | 属性 | `` | 参见官方 API 文档。 |

## `sqlite3.Row`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sqlite3.Row.keys`](https://docs.python.org/3.12/library/sqlite3.html#sqlite3.Row.keys) | 方法 | `(self, /)` | Returns the keys of the row. |
