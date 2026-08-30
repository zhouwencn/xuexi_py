<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# functools：高阶函数工具

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/functools.html](https://docs.python.org/3.12/library/functools.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **16** 个公开对象或用户命令。私有下划线接口不收录。

## `functools`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`functools`](https://docs.python.org/3.12/library/functools.html#module-functools) | 模块 | `` | functools.py - Tools for working with functions and callable objects |
| [`functools.cache`](https://docs.python.org/3.12/library/functools.html#functools.cache) | 函数 | `(user_function, /)` | Simple lightweight unbounded cache.  Sometimes called "memoize". |
| [`functools.cached_property`](https://docs.python.org/3.12/library/functools.html#functools.cached_property) | 函数 | `(func)` | 参见官方 API 文档。 |
| [`functools.cmp_to_key`](https://docs.python.org/3.12/library/functools.html#functools.cmp_to_key) | 函数 | `(mycmp)` | Convert a cmp= function into a key= function. |
| [`functools.lru_cache`](https://docs.python.org/3.12/library/functools.html#functools.lru_cache) | 函数 | `(maxsize=128, typed=False)` | Least-recently-used cache decorator. |
| [`functools.partial`](https://docs.python.org/3.12/library/functools.html#functools.partial) | 函数 | `` | partial(func, *args, **keywords) - new function with partial application of the given arguments and keywords. |
| [`functools.partialmethod`](https://docs.python.org/3.12/library/functools.html#functools.partialmethod) | 类 | `(func, /, *args, **keywords)` | Method descriptor with partial application of the given arguments and keywords. |
| [`functools.reduce`](https://docs.python.org/3.12/library/functools.html#functools.reduce) | 函数 | `` | reduce(function, iterable[, initial]) -> value |
| [`functools.singledispatch`](https://docs.python.org/3.12/library/functools.html#functools.singledispatch) | 函数 | `(func)` | Single-dispatch generic function decorator. |
| [`functools.singledispatchmethod`](https://docs.python.org/3.12/library/functools.html#functools.singledispatchmethod) | 类 | `(func)` | Single-dispatch generic method descriptor. |
| [`functools.total_ordering`](https://docs.python.org/3.12/library/functools.html#functools.total_ordering) | 函数 | `(cls)` | Class decorator that fills in missing ordering methods |
| [`functools.update_wrapper`](https://docs.python.org/3.12/library/functools.html#functools.update_wrapper) | 函数 | `(wrapper, wrapped, assigned=('__module__', '__name__', '__qualname__', '__doc__', '__annotations__', '__type_params__'), updated=('__dict...` | Update a wrapper function to look like the wrapped function |
| [`functools.wraps`](https://docs.python.org/3.12/library/functools.html#functools.wraps) | 函数 | `(wrapped, assigned=('__module__', '__name__', '__qualname__', '__doc__', '__annotations__', '__type_params__'), updated=('__dict__',))` | Decorator factory to apply update_wrapper() to a wrapper function |

## `functools.partial`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`functools.partial.args`](https://docs.python.org/3.12/library/functools.html#functools.partial.args) | 属性 | `` | tuple of arguments to future partial calls |
| [`functools.partial.func`](https://docs.python.org/3.12/library/functools.html#functools.partial.func) | 属性 | `` | function object to use in future partial calls |
| [`functools.partial.keywords`](https://docs.python.org/3.12/library/functools.html#functools.partial.keywords) | 属性 | `` | dictionary of keyword arguments to future partial calls |
