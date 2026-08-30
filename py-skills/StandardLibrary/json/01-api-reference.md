<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# json：JSON 编解码

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/json.html](https://docs.python.org/3.12/library/json.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **19** 个公开对象或用户命令。私有下划线接口不收录。

## `json`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`json`](https://docs.python.org/3.12/library/json.html#module-json) | 模块 | `` | JSON (JavaScript Object Notation) <https://json.org> is a subset of JavaScript syntax (ECMA-262 3rd edition) used as a lightweight data interchange format. |
| [`json.dump`](https://docs.python.org/3.12/library/json.html#json.dump) | 函数 | `(obj, fp, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None...` | Serialize ``obj`` as a JSON formatted stream to ``fp`` (a ``.write()``-supporting file-like object). |
| [`json.dumps`](https://docs.python.org/3.12/library/json.html#json.dumps) | 函数 | `(obj, *, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, so...` | Serialize ``obj`` to a JSON formatted ``str``. |
| [`json.JSONDecodeError`](https://docs.python.org/3.12/library/json.html#json.JSONDecodeError) | 异常 | `(msg, doc, pos)` | Subclass of ValueError with the following additional properties: |
| [`json.JSONDecoder`](https://docs.python.org/3.12/library/json.html#json.JSONDecoder) | 类 | `(*, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, strict=True, object_pairs_hook=None)` | Simple JSON <https://json.org> decoder |
| [`json.JSONEncoder`](https://docs.python.org/3.12/library/json.html#json.JSONEncoder) | 类 | `(*, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, sort_keys=False, indent=None, separators=None, default=None)` | Extensible JSON <https://json.org> encoder for Python data structures. |
| [`json.load`](https://docs.python.org/3.12/library/json.html#json.load) | 函数 | `(fp, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)` | Deserialize ``fp`` (a ``.read()``-supporting file-like object containing a JSON document) to a Python object. |
| [`json.loads`](https://docs.python.org/3.12/library/json.html#json.loads) | 函数 | `(s, *, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)` | Deserialize ``s`` (a ``str``, ``bytes`` or ``bytearray`` instance containing a JSON document) to a Python object. |
| [`json.tool`](https://docs.python.org/3.12/library/json.html#module-json.tool) | 模块 | `` | Command-line tool to validate and pretty-print JSON |

## `json.JSONDecodeError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`json.JSONDecodeError.colno`](https://docs.python.org/3.12/library/json.html#json.JSONDecodeError.colno) | 属性 | `` | 参见官方 API 文档。 |
| [`json.JSONDecodeError.doc`](https://docs.python.org/3.12/library/json.html#json.JSONDecodeError.doc) | 属性 | `` | 参见官方 API 文档。 |
| [`json.JSONDecodeError.lineno`](https://docs.python.org/3.12/library/json.html#json.JSONDecodeError.lineno) | 属性 | `` | 参见官方 API 文档。 |
| [`json.JSONDecodeError.msg`](https://docs.python.org/3.12/library/json.html#json.JSONDecodeError.msg) | 属性 | `` | 参见官方 API 文档。 |
| [`json.JSONDecodeError.pos`](https://docs.python.org/3.12/library/json.html#json.JSONDecodeError.pos) | 属性 | `` | 参见官方 API 文档。 |

## `json.JSONDecoder`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`json.JSONDecoder.decode`](https://docs.python.org/3.12/library/json.html#json.JSONDecoder.decode) | 方法 | `(self, s, _w=<built-in method match of re.Pattern object at 0x101fee0c0>)` | Return the Python representation of ``s`` (a ``str`` instance containing a JSON document). |
| [`json.JSONDecoder.raw_decode`](https://docs.python.org/3.12/library/json.html#json.JSONDecoder.raw_decode) | 方法 | `(self, s, idx=0)` | Decode a JSON document from ``s`` (a ``str`` beginning with a JSON document) and return a 2-tuple of the Python representation and the index in ``s`` where the document ended. |

## `json.JSONEncoder`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`json.JSONEncoder.default`](https://docs.python.org/3.12/library/json.html#json.JSONEncoder.default) | 方法 | `(self, o)` | Implement this method in a subclass such that it returns a serializable object for ``o``, or calls the base implementation (to raise a ``TypeError``). |
| [`json.JSONEncoder.encode`](https://docs.python.org/3.12/library/json.html#json.JSONEncoder.encode) | 方法 | `(self, o)` | Return a JSON string representation of a Python data structure. |
| [`json.JSONEncoder.iterencode`](https://docs.python.org/3.12/library/json.html#json.JSONEncoder.iterencode) | 方法 | `(self, o, _one_shot=False)` | Encode the given object and yield each string representation as available. |
