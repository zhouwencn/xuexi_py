<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# sys：解释器与运行时

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/sys.html](https://docs.python.org/3.12/library/sys.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **145** 个公开对象或用户命令。私有下划线接口不收录。

## `sys`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sys`](https://docs.python.org/3.12/library/sys.html#module-sys) | 模块 | `` | This module provides access to some objects used or maintained by the interpreter and to functions that interact strongly with the interpreter. |
| [`sys.abiflags`](https://docs.python.org/3.12/library/sys.html#sys.abiflags) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.activate_stack_trampoline`](https://docs.python.org/3.12/library/sys.html#sys.activate_stack_trampoline) | 函数 | `(backend, /)` | Activate stack profiler trampoline *backend*. |
| [`sys.addaudithook`](https://docs.python.org/3.12/library/sys.html#sys.addaudithook) | 函数 | `(hook)` | Adds a new audit hook callback. |
| [`sys.api_version`](https://docs.python.org/3.12/library/sys.html#sys.api_version) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sys.argv`](https://docs.python.org/3.12/library/sys.html#sys.argv) | 数据/常量 | `` | Built-in mutable sequence. |
| [`sys.audit`](https://docs.python.org/3.12/library/sys.html#sys.audit) | 函数 | `` | audit(event, *args) |
| [`sys.base_exec_prefix`](https://docs.python.org/3.12/library/sys.html#sys.base_exec_prefix) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.base_prefix`](https://docs.python.org/3.12/library/sys.html#sys.base_prefix) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.breakpointhook`](https://docs.python.org/3.12/library/sys.html#sys.breakpointhook) | 函数 | `` | breakpointhook(*args, **kws) |
| [`sys.builtin_module_names`](https://docs.python.org/3.12/library/sys.html#sys.builtin_module_names) | 数据/常量 | `` | Built-in immutable sequence. |
| [`sys.byteorder`](https://docs.python.org/3.12/library/sys.html#sys.byteorder) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.call_tracing`](https://docs.python.org/3.12/library/sys.html#sys.call_tracing) | 函数 | `(func, args, /)` | Call func(*args), while tracing is enabled. |
| [`sys.copyright`](https://docs.python.org/3.12/library/sys.html#sys.copyright) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.deactivate_stack_trampoline`](https://docs.python.org/3.12/library/sys.html#sys.deactivate_stack_trampoline) | 函数 | `()` | Deactivate the current stack profiler trampoline backend. |
| [`sys.displayhook`](https://docs.python.org/3.12/library/sys.html#sys.displayhook) | 函数 | `(object, /)` | Print an object to sys.stdout and also save it in builtins._ |
| [`sys.dllhandle`](https://docs.python.org/3.12/library/sys.html#sys.dllhandle) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.dont_write_bytecode`](https://docs.python.org/3.12/library/sys.html#sys.dont_write_bytecode) | 数据/常量 | `` | bool(x) -> bool |
| [`sys.exc_info`](https://docs.python.org/3.12/library/sys.html#sys.exc_info) | 函数 | `()` | Return current exception information: (type, value, traceback). |
| [`sys.excepthook`](https://docs.python.org/3.12/library/sys.html#sys.excepthook) | 函数 | `(exctype, value, traceback, /)` | Handle an exception by displaying it with a traceback on sys.stderr. |
| [`sys.exception`](https://docs.python.org/3.12/library/sys.html#sys.exception) | 函数 | `()` | Return the current exception. |
| [`sys.exec_prefix`](https://docs.python.org/3.12/library/sys.html#sys.exec_prefix) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.executable`](https://docs.python.org/3.12/library/sys.html#sys.executable) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.exit`](https://docs.python.org/3.12/library/sys.html#sys.exit) | 函数 | `(status=None, /)` | Exit the interpreter by raising SystemExit(status). |
| [`sys.flags`](https://docs.python.org/3.12/library/sys.html#sys.flags) | 数据/常量 | `` | sys.flags |
| [`sys.float_info`](https://docs.python.org/3.12/library/sys.html#sys.float_info) | 数据/常量 | `` | sys.float_info |
| [`sys.float_repr_style`](https://docs.python.org/3.12/library/sys.html#sys.float_repr_style) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.get_asyncgen_hooks`](https://docs.python.org/3.12/library/sys.html#sys.get_asyncgen_hooks) | 函数 | `()` | Return the installed asynchronous generators hooks. |
| [`sys.get_coroutine_origin_tracking_depth`](https://docs.python.org/3.12/library/sys.html#sys.get_coroutine_origin_tracking_depth) | 函数 | `()` | Check status of origin tracking for coroutine objects in this thread. |
| [`sys.get_int_max_str_digits`](https://docs.python.org/3.12/library/sys.html#sys.get_int_max_str_digits) | 函数 | `()` | Return the maximum string digits limit for non-binary int<->str conversions. |
| [`sys.getallocatedblocks`](https://docs.python.org/3.12/library/sys.html#sys.getallocatedblocks) | 函数 | `()` | Return the number of memory blocks currently allocated. |
| [`sys.getandroidapilevel`](https://docs.python.org/3.12/library/sys.html#sys.getandroidapilevel) | 函数 | `` | 参见官方 API 文档。 |
| [`sys.getdefaultencoding`](https://docs.python.org/3.12/library/sys.html#sys.getdefaultencoding) | 函数 | `()` | Return the current default encoding used by the Unicode implementation. |
| [`sys.getdlopenflags`](https://docs.python.org/3.12/library/sys.html#sys.getdlopenflags) | 函数 | `()` | Return the current value of the flags that are used for dlopen calls. |
| [`sys.getfilesystemencodeerrors`](https://docs.python.org/3.12/library/sys.html#sys.getfilesystemencodeerrors) | 函数 | `()` | Return the error mode used Unicode to OS filename conversion. |
| [`sys.getfilesystemencoding`](https://docs.python.org/3.12/library/sys.html#sys.getfilesystemencoding) | 函数 | `()` | Return the encoding used to convert Unicode filenames to OS filenames. |
| [`sys.getobjects`](https://docs.python.org/3.12/library/sys.html#sys.getobjects) | 函数 | `` | 参见官方 API 文档。 |
| [`sys.getprofile`](https://docs.python.org/3.12/library/sys.html#sys.getprofile) | 函数 | `()` | Return the profiling function set with sys.setprofile. |
| [`sys.getrecursionlimit`](https://docs.python.org/3.12/library/sys.html#sys.getrecursionlimit) | 函数 | `()` | Return the current value of the recursion limit. |
| [`sys.getrefcount`](https://docs.python.org/3.12/library/sys.html#sys.getrefcount) | 函数 | `(object, /)` | Return the reference count of object. |
| [`sys.getsizeof`](https://docs.python.org/3.12/library/sys.html#sys.getsizeof) | 函数 | `` | getsizeof(object [, default]) -> int |
| [`sys.getswitchinterval`](https://docs.python.org/3.12/library/sys.html#sys.getswitchinterval) | 函数 | `()` | Return the current thread switch interval; see sys.setswitchinterval(). |
| [`sys.gettrace`](https://docs.python.org/3.12/library/sys.html#sys.gettrace) | 函数 | `()` | Return the global debug tracing function set with sys.settrace. |
| [`sys.getunicodeinternedsize`](https://docs.python.org/3.12/library/sys.html#sys.getunicodeinternedsize) | 函数 | `(*, _only_immortal=False)` | Return the number of elements of the unicode interned dictionary |
| [`sys.getwindowsversion`](https://docs.python.org/3.12/library/sys.html#sys.getwindowsversion) | 函数 | `` | 参见官方 API 文档。 |
| [`sys.hash_info`](https://docs.python.org/3.12/library/sys.html#sys.hash_info) | 数据/常量 | `` | hash_info |
| [`sys.hexversion`](https://docs.python.org/3.12/library/sys.html#sys.hexversion) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sys.implementation`](https://docs.python.org/3.12/library/sys.html#sys.implementation) | 数据/常量 | `` | A simple attribute-based namespace. |
| [`sys.int_info`](https://docs.python.org/3.12/library/sys.html#sys.int_info) | 数据/常量 | `` | sys.int_info |
| [`sys.intern`](https://docs.python.org/3.12/library/sys.html#sys.intern) | 函数 | `(string, /)` | ``Intern'' the given string. |
| [`sys.is_finalizing`](https://docs.python.org/3.12/library/sys.html#sys.is_finalizing) | 函数 | `()` | Return True if Python is exiting. |
| [`sys.is_stack_trampoline_active`](https://docs.python.org/3.12/library/sys.html#sys.is_stack_trampoline_active) | 函数 | `()` | Return *True* if a stack profiler trampoline is active. |
| [`sys.last_exc`](https://docs.python.org/3.12/library/sys.html#sys.last_exc) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.last_traceback`](https://docs.python.org/3.12/library/sys.html#sys.last_traceback) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.last_type`](https://docs.python.org/3.12/library/sys.html#sys.last_type) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.last_value`](https://docs.python.org/3.12/library/sys.html#sys.last_value) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.maxsize`](https://docs.python.org/3.12/library/sys.html#sys.maxsize) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sys.maxunicode`](https://docs.python.org/3.12/library/sys.html#sys.maxunicode) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`sys.meta_path`](https://docs.python.org/3.12/library/sys.html#sys.meta_path) | 数据/常量 | `` | Built-in mutable sequence. |
| [`sys.modules`](https://docs.python.org/3.12/library/sys.html#sys.modules) | 数据/常量 | `` | dict() -> new empty dictionary dict(mapping) -> new dictionary initialized from a mapping object's (key, value) pairs dict(iterable) -> new dictionary initialized as if via: d =... |
| [`sys.monitoring`](https://docs.python.org/3.12/library/sys.monitoring.html#module-sys.monitoring) | 模块 | `` | 参见官方 API 文档。 |
| [`sys.orig_argv`](https://docs.python.org/3.12/library/sys.html#sys.orig_argv) | 数据/常量 | `` | Built-in mutable sequence. |
| [`sys.path`](https://docs.python.org/3.12/library/sys.html#sys.path) | 数据/常量 | `` | Built-in mutable sequence. |
| [`sys.path_hooks`](https://docs.python.org/3.12/library/sys.html#sys.path_hooks) | 数据/常量 | `` | Built-in mutable sequence. |
| [`sys.path_importer_cache`](https://docs.python.org/3.12/library/sys.html#sys.path_importer_cache) | 数据/常量 | `` | dict() -> new empty dictionary dict(mapping) -> new dictionary initialized from a mapping object's (key, value) pairs dict(iterable) -> new dictionary initialized as if via: d =... |
| [`sys.platform`](https://docs.python.org/3.12/library/sys.html#sys.platform) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.platlibdir`](https://docs.python.org/3.12/library/sys.html#sys.platlibdir) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.prefix`](https://docs.python.org/3.12/library/sys.html#sys.prefix) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.ps1`](https://docs.python.org/3.12/library/sys.html#sys.ps1) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.ps2`](https://docs.python.org/3.12/library/sys.html#sys.ps2) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.pycache_prefix`](https://docs.python.org/3.12/library/sys.html#sys.pycache_prefix) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.set_asyncgen_hooks`](https://docs.python.org/3.12/library/sys.html#sys.set_asyncgen_hooks) | 函数 | `` | set_asyncgen_hooks([firstiter] [, finalizer]) |
| [`sys.set_coroutine_origin_tracking_depth`](https://docs.python.org/3.12/library/sys.html#sys.set_coroutine_origin_tracking_depth) | 函数 | `(depth)` | Enable or disable origin tracking for coroutine objects in this thread. |
| [`sys.set_int_max_str_digits`](https://docs.python.org/3.12/library/sys.html#sys.set_int_max_str_digits) | 函数 | `(maxdigits)` | Set the maximum string digits limit for non-binary int<->str conversions. |
| [`sys.setdlopenflags`](https://docs.python.org/3.12/library/sys.html#sys.setdlopenflags) | 函数 | `(flags, /)` | Set the flags used by the interpreter for dlopen calls. |
| [`sys.setprofile`](https://docs.python.org/3.12/library/sys.html#sys.setprofile) | 函数 | `` | setprofile(function) |
| [`sys.setrecursionlimit`](https://docs.python.org/3.12/library/sys.html#sys.setrecursionlimit) | 函数 | `(limit, /)` | Set the maximum depth of the Python interpreter stack to n. |
| [`sys.setswitchinterval`](https://docs.python.org/3.12/library/sys.html#sys.setswitchinterval) | 函数 | `(interval, /)` | Set the ideal thread switching delay inside the Python interpreter. |
| [`sys.settrace`](https://docs.python.org/3.12/library/sys.html#sys.settrace) | 函数 | `` | settrace(function) |
| [`sys.stderr`](https://docs.python.org/3.12/library/sys.html#sys.stderr) | 数据/常量 | `` | Character and line based layer over a BufferedIOBase object, buffer. |
| [`sys.stdin`](https://docs.python.org/3.12/library/sys.html#sys.stdin) | 数据/常量 | `` | Character and line based layer over a BufferedIOBase object, buffer. |
| [`sys.stdlib_module_names`](https://docs.python.org/3.12/library/sys.html#sys.stdlib_module_names) | 数据/常量 | `` | frozenset() -> empty frozenset object frozenset(iterable) -> frozenset object |
| [`sys.stdout`](https://docs.python.org/3.12/library/sys.html#sys.stdout) | 数据/常量 | `` | Character and line based layer over a BufferedIOBase object, buffer. |
| [`sys.thread_info`](https://docs.python.org/3.12/library/sys.html#sys.thread_info) | 数据/常量 | `` | sys.thread_info |
| [`sys.tracebacklimit`](https://docs.python.org/3.12/library/sys.html#sys.tracebacklimit) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`sys.unraisablehook`](https://docs.python.org/3.12/library/sys.html#sys.unraisablehook) | 函数 | `(unraisable, /)` | Handle an unraisable exception. |
| [`sys.version`](https://docs.python.org/3.12/library/sys.html#sys.version) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`sys.version_info`](https://docs.python.org/3.12/library/sys.html#sys.version_info) | 数据/常量 | `` | sys.version_info |
| [`sys.warnoptions`](https://docs.python.org/3.12/library/sys.html#sys.warnoptions) | 数据/常量 | `` | Built-in mutable sequence. |
| [`sys.winver`](https://docs.python.org/3.12/library/sys.html#sys.winver) | 数据/常量 | `` | 参见官方 API 文档。 |

## `sys.flags`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sys.flags.bytes_warning`](https://docs.python.org/3.12/library/sys.html#sys.flags.bytes_warning) | 属性 | `` | -b |
| [`sys.flags.debug`](https://docs.python.org/3.12/library/sys.html#sys.flags.debug) | 属性 | `` | -d |
| [`sys.flags.dev_mode`](https://docs.python.org/3.12/library/sys.html#sys.flags.dev_mode) | 属性 | `` | -X dev |
| [`sys.flags.dont_write_bytecode`](https://docs.python.org/3.12/library/sys.html#sys.flags.dont_write_bytecode) | 属性 | `` | -B |
| [`sys.flags.hash_randomization`](https://docs.python.org/3.12/library/sys.html#sys.flags.hash_randomization) | 属性 | `` | -R |
| [`sys.flags.ignore_environment`](https://docs.python.org/3.12/library/sys.html#sys.flags.ignore_environment) | 属性 | `` | -E |
| [`sys.flags.inspect`](https://docs.python.org/3.12/library/sys.html#sys.flags.inspect) | 属性 | `` | -i |
| [`sys.flags.int_max_str_digits`](https://docs.python.org/3.12/library/sys.html#sys.flags.int_max_str_digits) | 属性 | `` | -X int_max_str_digits |
| [`sys.flags.interactive`](https://docs.python.org/3.12/library/sys.html#sys.flags.interactive) | 属性 | `` | -i |
| [`sys.flags.isolated`](https://docs.python.org/3.12/library/sys.html#sys.flags.isolated) | 属性 | `` | -I |
| [`sys.flags.no_site`](https://docs.python.org/3.12/library/sys.html#sys.flags.no_site) | 属性 | `` | -S |
| [`sys.flags.no_user_site`](https://docs.python.org/3.12/library/sys.html#sys.flags.no_user_site) | 属性 | `` | -s |
| [`sys.flags.optimize`](https://docs.python.org/3.12/library/sys.html#sys.flags.optimize) | 属性 | `` | -O or -OO |
| [`sys.flags.quiet`](https://docs.python.org/3.12/library/sys.html#sys.flags.quiet) | 属性 | `` | -q |
| [`sys.flags.safe_path`](https://docs.python.org/3.12/library/sys.html#sys.flags.safe_path) | 属性 | `` | -P |
| [`sys.flags.utf8_mode`](https://docs.python.org/3.12/library/sys.html#sys.flags.utf8_mode) | 属性 | `` | -X utf8 |
| [`sys.flags.verbose`](https://docs.python.org/3.12/library/sys.html#sys.flags.verbose) | 属性 | `` | -v |
| [`sys.flags.warn_default_encoding`](https://docs.python.org/3.12/library/sys.html#sys.flags.warn_default_encoding) | 属性 | `` | -X warn_default_encoding |

## `sys.float_info`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sys.float_info.dig`](https://docs.python.org/3.12/library/sys.html#sys.float_info.dig) | 属性 | `` | DBL_DIG -- maximum number of decimal digits that can be faithfully represented in a float |
| [`sys.float_info.epsilon`](https://docs.python.org/3.12/library/sys.html#sys.float_info.epsilon) | 属性 | `` | DBL_EPSILON -- Difference between 1 and the next representable float |
| [`sys.float_info.mant_dig`](https://docs.python.org/3.12/library/sys.html#sys.float_info.mant_dig) | 属性 | `` | DBL_MANT_DIG -- mantissa digits |
| [`sys.float_info.max`](https://docs.python.org/3.12/library/sys.html#sys.float_info.max) | 属性 | `` | DBL_MAX -- maximum representable finite float |
| [`sys.float_info.max_10_exp`](https://docs.python.org/3.12/library/sys.html#sys.float_info.max_10_exp) | 属性 | `` | DBL_MAX_10_EXP -- maximum int e such that 10**e is representable |
| [`sys.float_info.max_exp`](https://docs.python.org/3.12/library/sys.html#sys.float_info.max_exp) | 属性 | `` | DBL_MAX_EXP -- maximum int e such that radix**(e-1) is representable |
| [`sys.float_info.min`](https://docs.python.org/3.12/library/sys.html#sys.float_info.min) | 属性 | `` | DBL_MIN -- Minimum positive normalized float |
| [`sys.float_info.min_10_exp`](https://docs.python.org/3.12/library/sys.html#sys.float_info.min_10_exp) | 属性 | `` | DBL_MIN_10_EXP -- minimum int e such that 10**e is a normalized float |
| [`sys.float_info.min_exp`](https://docs.python.org/3.12/library/sys.html#sys.float_info.min_exp) | 属性 | `` | DBL_MIN_EXP -- minimum int e such that radix**(e-1) is a normalized float |
| [`sys.float_info.radix`](https://docs.python.org/3.12/library/sys.html#sys.float_info.radix) | 属性 | `` | FLT_RADIX -- radix of exponent |
| [`sys.float_info.rounds`](https://docs.python.org/3.12/library/sys.html#sys.float_info.rounds) | 属性 | `` | FLT_ROUNDS -- rounding mode used for arithmetic operations |

## `sys.hash_info`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sys.hash_info.algorithm`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.algorithm) | 属性 | `` | name of the algorithm for hashing of str, bytes and memoryviews |
| [`sys.hash_info.hash_bits`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.hash_bits) | 属性 | `` | internal output size of hash algorithm |
| [`sys.hash_info.imag`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.imag) | 属性 | `` | multiplier used for the imaginary part of a complex number |
| [`sys.hash_info.inf`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.inf) | 属性 | `` | value to be used for hash of a positive infinity |
| [`sys.hash_info.modulus`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.modulus) | 属性 | `` | prime number giving the modulus on which the hash function is based |
| [`sys.hash_info.nan`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.nan) | 属性 | `` | value to be used for hash of a nan |
| [`sys.hash_info.seed_bits`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.seed_bits) | 属性 | `` | seed size of hash algorithm |
| [`sys.hash_info.width`](https://docs.python.org/3.12/library/sys.html#sys.hash_info.width) | 属性 | `` | width of the type used for hashing, in bits |

## `sys.int_info`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sys.int_info.bits_per_digit`](https://docs.python.org/3.12/library/sys.html#sys.int_info.bits_per_digit) | 属性 | `` | size of a digit in bits |
| [`sys.int_info.default_max_str_digits`](https://docs.python.org/3.12/library/sys.html#sys.int_info.default_max_str_digits) | 属性 | `` | maximum string conversion digits limitation |
| [`sys.int_info.sizeof_digit`](https://docs.python.org/3.12/library/sys.html#sys.int_info.sizeof_digit) | 属性 | `` | size in bytes of the C type used to represent a digit |
| [`sys.int_info.str_digits_check_threshold`](https://docs.python.org/3.12/library/sys.html#sys.int_info.str_digits_check_threshold) | 属性 | `` | minimum positive value for int_max_str_digits |

## `sys.monitoring`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sys.monitoring.DISABLE`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.DISABLE) | 数据/常量 | `` | The base class of the class hierarchy. |
| [`sys.monitoring.free_tool_id`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.free_tool_id) | 函数 | `(tool_id, /)` | 参见官方 API 文档。 |
| [`sys.monitoring.get_events`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.get_events) | 函数 | `(tool_id, /)` | 参见官方 API 文档。 |
| [`sys.monitoring.get_local_events`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.get_local_events) | 函数 | `(tool_id, code, /)` | 参见官方 API 文档。 |
| [`sys.monitoring.get_tool`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.get_tool) | 函数 | `(tool_id, /)` | 参见官方 API 文档。 |
| [`sys.monitoring.MISSING`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.MISSING) | 数据/常量 | `` | The base class of the class hierarchy. |
| [`sys.monitoring.register_callback`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.register_callback) | 函数 | `(tool_id, event, func, /)` | 参见官方 API 文档。 |
| [`sys.monitoring.restart_events`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.restart_events) | 函数 | `()` | 参见官方 API 文档。 |
| [`sys.monitoring.set_events`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.set_events) | 函数 | `(tool_id, event_set, /)` | 参见官方 API 文档。 |
| [`sys.monitoring.set_local_events`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.set_local_events) | 函数 | `(tool_id, code, event_set, /)` | 参见官方 API 文档。 |
| [`sys.monitoring.use_tool_id`](https://docs.python.org/3.12/library/sys.monitoring.html#sys.monitoring.use_tool_id) | 函数 | `(tool_id, name, /)` | 参见官方 API 文档。 |

## `sys.thread_info`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`sys.thread_info.lock`](https://docs.python.org/3.12/library/sys.html#sys.thread_info.lock) | 属性 | `` | name of the lock implementation |
| [`sys.thread_info.name`](https://docs.python.org/3.12/library/sys.html#sys.thread_info.name) | 属性 | `` | name of the thread implementation |
| [`sys.thread_info.version`](https://docs.python.org/3.12/library/sys.html#sys.thread_info.version) | 属性 | `` | name and version of the thread library |
