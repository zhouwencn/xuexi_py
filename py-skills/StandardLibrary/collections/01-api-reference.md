<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# collections：专用容器

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/collections.html](https://docs.python.org/3.12/library/collections.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **67** 个公开对象或用户命令。私有下划线接口不收录。

## `collections`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections`](https://docs.python.org/3.12/library/collections.html#module-collections) | 模块 | `` | This module implements specialized container datatypes providing alternatives to Python's general purpose built-in containers, dict, list, set, and tuple. |
| [`collections.ChainMap`](https://docs.python.org/3.12/library/collections.html#collections.ChainMap) | 类 | `(*maps)` | A ChainMap groups multiple dicts (or other mappings) together to create a single, updateable view. |
| [`collections.Counter`](https://docs.python.org/3.12/library/collections.html#collections.Counter) | 类 | `(iterable=None, /, **kwds)` | Dict subclass for counting hashable items.  Sometimes called a bag or multiset.  Elements are stored as dictionary keys and their counts are stored as dictionary values. |
| [`collections.defaultdict`](https://docs.python.org/3.12/library/collections.html#collections.defaultdict) | 类 | `` | defaultdict(default_factory=None, /, [...]) --> dict with default factory |
| [`collections.deque`](https://docs.python.org/3.12/library/collections.html#collections.deque) | 类 | `` | deque([iterable[, maxlen]]) --> deque object |
| [`collections.namedtuple`](https://docs.python.org/3.12/library/collections.html#collections.namedtuple) | 函数 | `(typename, field_names, *, rename=False, defaults=None, module=None)` | Returns a new subclass of tuple with named fields. |
| [`collections.OrderedDict`](https://docs.python.org/3.12/library/collections.html#collections.OrderedDict) | 类 | `` | Dictionary that remembers insertion order |
| [`collections.UserDict`](https://docs.python.org/3.12/library/collections.html#collections.UserDict) | 类 | `(dict=None, /, **kwargs)` | A MutableMapping is a generic container for associating key/value pairs. |
| [`collections.UserList`](https://docs.python.org/3.12/library/collections.html#collections.UserList) | 类 | `(initlist=None)` | A more or less complete user-defined wrapper around list objects. |
| [`collections.UserString`](https://docs.python.org/3.12/library/collections.html#collections.UserString) | 类 | `(seq)` | All the operations on a read-only sequence. |

## `collections.abc`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.abc`](https://docs.python.org/3.12/library/collections.abc.html#module-collections.abc) | 模块 | `` | 参见官方 API 文档。 |
| [`collections.abc.AsyncGenerator`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.AsyncGenerator) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.AsyncIterable`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.AsyncIterable) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.AsyncIterator`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.AsyncIterator) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Awaitable`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Awaitable) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Buffer`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Buffer) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.ByteString`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.ByteString) | 类 | `()` | This unifies bytes and bytearray. |
| [`collections.abc.Callable`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Callable) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Collection`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Collection) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Container`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Container) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Coroutine`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Coroutine) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Generator`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Generator) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Hashable`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Hashable) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.ItemsView`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.ItemsView) | 类 | `(mapping)` | A set is a finite, iterable container. |
| [`collections.abc.Iterable`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Iterable) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Iterator`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Iterator) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.KeysView`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.KeysView) | 类 | `(mapping)` | A set is a finite, iterable container. |
| [`collections.abc.Mapping`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Mapping) | 类 | `()` | A Mapping is a generic container for associating key/value pairs. |
| [`collections.abc.MappingView`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.MappingView) | 类 | `(mapping)` | 参见官方 API 文档。 |
| [`collections.abc.MutableMapping`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.MutableMapping) | 类 | `()` | A MutableMapping is a generic container for associating key/value pairs. |
| [`collections.abc.MutableSequence`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.MutableSequence) | 类 | `()` | All the operations on a read-write sequence. |
| [`collections.abc.MutableSet`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.MutableSet) | 类 | `()` | A mutable set is a finite, iterable container. |
| [`collections.abc.Reversible`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Reversible) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.Sequence`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Sequence) | 类 | `()` | All the operations on a read-only sequence. |
| [`collections.abc.Set`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Set) | 类 | `()` | A set is a finite, iterable container. |
| [`collections.abc.Sized`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.Sized) | 类 | `()` | 参见官方 API 文档。 |
| [`collections.abc.ValuesView`](https://docs.python.org/3.12/library/collections.abc.html#collections.abc.ValuesView) | 类 | `(mapping)` | 参见官方 API 文档。 |

## `collections.ChainMap`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.ChainMap.maps`](https://docs.python.org/3.12/library/collections.html#collections.ChainMap.maps) | 属性 | `` | 参见官方 API 文档。 |
| [`collections.ChainMap.new_child`](https://docs.python.org/3.12/library/collections.html#collections.ChainMap.new_child) | 方法 | `(self, m=None, **kwargs)` | New ChainMap with a new map followed by all previous maps. If no map is provided, an empty dict is used. Keyword arguments update the map or new empty dict. |
| [`collections.ChainMap.parents`](https://docs.python.org/3.12/library/collections.html#collections.ChainMap.parents) | 属性 | `` | New ChainMap from maps[1:]. |

## `collections.Counter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.Counter.elements`](https://docs.python.org/3.12/library/collections.html#collections.Counter.elements) | 方法 | `(self)` | Iterator over elements repeating each as many times as its count. |
| [`collections.Counter.fromkeys`](https://docs.python.org/3.12/library/collections.html#collections.Counter.fromkeys) | 方法 | `` | 参见官方 API 文档。 |
| [`collections.Counter.most_common`](https://docs.python.org/3.12/library/collections.html#collections.Counter.most_common) | 方法 | `(self, n=None)` | List the n most common elements and their counts from the most common to the least.  If n is None, then list all element counts. |
| [`collections.Counter.subtract`](https://docs.python.org/3.12/library/collections.html#collections.Counter.subtract) | 方法 | `(self, iterable=None, /, **kwds)` | Like dict.update() but subtracts counts instead of replacing them. Counts can be reduced below zero.  Both the inputs and outputs are allowed to contain zero and negative counts. |
| [`collections.Counter.total`](https://docs.python.org/3.12/library/collections.html#collections.Counter.total) | 方法 | `(self)` | Sum of the counts |
| [`collections.Counter.update`](https://docs.python.org/3.12/library/collections.html#collections.Counter.update) | 方法 | `(self, iterable=None, /, **kwds)` | Like dict.update() but add counts instead of replacing them. |

## `collections.defaultdict`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.defaultdict.default_factory`](https://docs.python.org/3.12/library/collections.html#collections.defaultdict.default_factory) | 属性 | `` | Factory for default value called by __missing__(). |

## `collections.deque`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.deque.append`](https://docs.python.org/3.12/library/collections.html#collections.deque.append) | 方法 | `` | Add an element to the right side of the deque. |
| [`collections.deque.appendleft`](https://docs.python.org/3.12/library/collections.html#collections.deque.appendleft) | 方法 | `` | Add an element to the left side of the deque. |
| [`collections.deque.clear`](https://docs.python.org/3.12/library/collections.html#collections.deque.clear) | 方法 | `` | Remove all elements from the deque. |
| [`collections.deque.copy`](https://docs.python.org/3.12/library/collections.html#collections.deque.copy) | 方法 | `` | Return a shallow copy of a deque. |
| [`collections.deque.count`](https://docs.python.org/3.12/library/collections.html#collections.deque.count) | 方法 | `` | D.count(value) -- return number of occurrences of value |
| [`collections.deque.extend`](https://docs.python.org/3.12/library/collections.html#collections.deque.extend) | 方法 | `` | Extend the right side of the deque with elements from the iterable |
| [`collections.deque.extendleft`](https://docs.python.org/3.12/library/collections.html#collections.deque.extendleft) | 方法 | `` | Extend the left side of the deque with elements from the iterable |
| [`collections.deque.index`](https://docs.python.org/3.12/library/collections.html#collections.deque.index) | 方法 | `` | D.index(value, [start, [stop]]) -- return first index of value. Raises ValueError if the value is not present. |
| [`collections.deque.insert`](https://docs.python.org/3.12/library/collections.html#collections.deque.insert) | 方法 | `` | D.insert(index, object) -- insert object before index |
| [`collections.deque.maxlen`](https://docs.python.org/3.12/library/collections.html#collections.deque.maxlen) | 属性 | `` | maximum size of a deque or None if unbounded |
| [`collections.deque.pop`](https://docs.python.org/3.12/library/collections.html#collections.deque.pop) | 方法 | `` | Remove and return the rightmost element. |
| [`collections.deque.popleft`](https://docs.python.org/3.12/library/collections.html#collections.deque.popleft) | 方法 | `` | Remove and return the leftmost element. |
| [`collections.deque.remove`](https://docs.python.org/3.12/library/collections.html#collections.deque.remove) | 方法 | `` | D.remove(value) -- remove first occurrence of value. |
| [`collections.deque.reverse`](https://docs.python.org/3.12/library/collections.html#collections.deque.reverse) | 方法 | `` | D.reverse() -- reverse *IN PLACE* |
| [`collections.deque.rotate`](https://docs.python.org/3.12/library/collections.html#collections.deque.rotate) | 方法 | `` | Rotate the deque n steps to the right (default n=1).  If n is negative, rotates left. |

## `collections.OrderedDict`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.OrderedDict.move_to_end`](https://docs.python.org/3.12/library/collections.html#collections.OrderedDict.move_to_end) | 方法 | `(self, /, key, last=True)` | Move an existing element to the end (or beginning if last is false). |
| [`collections.OrderedDict.popitem`](https://docs.python.org/3.12/library/collections.html#collections.OrderedDict.popitem) | 方法 | `(self, /, last=True)` | Remove and return a (key, value) pair from the dictionary. |

## `collections.UserDict`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.UserDict.data`](https://docs.python.org/3.12/library/collections.html#collections.UserDict.data) | 属性 | `` | 参见官方 API 文档。 |

## `collections.UserList`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.UserList.data`](https://docs.python.org/3.12/library/collections.html#collections.UserList.data) | 属性 | `` | 参见官方 API 文档。 |

## `collections.UserString`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`collections.UserString.data`](https://docs.python.org/3.12/library/collections.html#collections.UserString.data) | 属性 | `` | 参见官方 API 文档。 |
