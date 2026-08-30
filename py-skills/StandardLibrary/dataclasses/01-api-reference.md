<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# dataclasses：数据类

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/dataclasses.html](https://docs.python.org/3.12/library/dataclasses.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **13** 个公开对象或用户命令。私有下划线接口不收录。

## `dataclasses`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`dataclasses`](https://docs.python.org/3.12/library/dataclasses.html#module-dataclasses) | 模块 | `` | 参见官方 API 文档。 |
| [`dataclasses.asdict`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.asdict) | 函数 | `(obj, *, dict_factory=<class 'dict'>)` | Return the fields of a dataclass instance as a new dictionary mapping field names to field values. |
| [`dataclasses.astuple`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.astuple) | 函数 | `(obj, *, tuple_factory=<class 'tuple'>)` | Return the fields of a dataclass instance as a new tuple of field values. |
| [`dataclasses.dataclass`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.dataclass) | 函数 | `(cls=None, /, *, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=True, kw_only=False, slots=False...` | Add dunder methods based on the fields defined in the class. |
| [`dataclasses.Field`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.Field) | 类 | `(default, default_factory, init, repr, hash, compare, metadata, kw_only)` | 参见官方 API 文档。 |
| [`dataclasses.field`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.field) | 函数 | `(*, default=<dataclasses._MISSING_TYPE object at 0x1014f48f0>, default_factory=<dataclasses._MISSING_TYPE object at 0x1014f48f0>, init=Tr...` | Return an object to identify dataclass fields. |
| [`dataclasses.fields`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.fields) | 函数 | `(class_or_instance)` | Return a tuple describing the fields of this dataclass. |
| [`dataclasses.FrozenInstanceError`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.FrozenInstanceError) | 异常 | `` | Attribute not found. |
| [`dataclasses.is_dataclass`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.is_dataclass) | 函数 | `(obj)` | Returns True if obj is a dataclass or an instance of a dataclass. |
| [`dataclasses.KW_ONLY`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.KW_ONLY) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`dataclasses.make_dataclass`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.make_dataclass) | 函数 | `(cls_name, fields, *, bases=(), namespace=None, init=True, repr=True, eq=True, order=False, unsafe_hash=False, frozen=False, match_args=T...` | Return a new dynamically created dataclass. |
| [`dataclasses.MISSING`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.MISSING) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`dataclasses.replace`](https://docs.python.org/3.12/library/dataclasses.html#dataclasses.replace) | 函数 | `(obj, /, **changes)` | Return a new object replacing specified fields with new values. |
