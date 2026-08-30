<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# typing：类型系统

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/typing.html](https://docs.python.org/3.12/library/typing.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **103** 个公开对象或用户命令。私有下划线接口不收录。

## `typing`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`typing`](https://docs.python.org/3.12/library/typing.html#module-typing) | 模块 | `` | The typing module: Support for gradual typing as defined by PEP 484 and subsequent PEPs. |
| [`typing.AbstractSet`](https://docs.python.org/3.12/library/typing.html#typing.AbstractSet) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Set. |
| [`typing.Annotated`](https://docs.python.org/3.12/library/typing.html#typing.Annotated) | 数据/常量 | `(*args, **kwargs)` | Add context-specific metadata to a type. |
| [`typing.Any`](https://docs.python.org/3.12/library/typing.html#typing.Any) | 数据/常量 | `(*args, **kwargs)` | Special type indicating an unconstrained type. |
| [`typing.AnyStr`](https://docs.python.org/3.12/library/typing.html#typing.AnyStr) | 数据/常量 | `` | Type variable. |
| [`typing.assert_never`](https://docs.python.org/3.12/library/typing.html#typing.assert_never) | 函数 | `(arg: Never, /) -> Never` | Statically assert that a line of code is unreachable. |
| [`typing.assert_type`](https://docs.python.org/3.12/library/typing.html#typing.assert_type) | 函数 | `(val, typ, /)` | Ask a static type checker to confirm that the value is of the given type. |
| [`typing.AsyncContextManager`](https://docs.python.org/3.12/library/typing.html#typing.AsyncContextManager) | 类 | `(*args, **kwargs)` | A generic version of contextlib.AbstractAsyncContextManager. |
| [`typing.AsyncGenerator`](https://docs.python.org/3.12/library/typing.html#typing.AsyncGenerator) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.AsyncGenerator. |
| [`typing.AsyncIterable`](https://docs.python.org/3.12/library/typing.html#typing.AsyncIterable) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.AsyncIterable. |
| [`typing.AsyncIterator`](https://docs.python.org/3.12/library/typing.html#typing.AsyncIterator) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.AsyncIterator. |
| [`typing.Awaitable`](https://docs.python.org/3.12/library/typing.html#typing.Awaitable) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Awaitable. |
| [`typing.BinaryIO`](https://docs.python.org/3.12/library/typing.html#typing.BinaryIO) | 类 | `()` | Typed version of the return of open() in binary mode. |
| [`typing.ByteString`](https://docs.python.org/3.12/library/typing.html#typing.ByteString) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.ByteString. |
| [`typing.Callable`](https://docs.python.org/3.12/library/typing.html#typing.Callable) | 数据/常量 | `(*args, **kwargs)` | Deprecated alias to collections.abc.Callable. |
| [`typing.cast`](https://docs.python.org/3.12/library/typing.html#typing.cast) | 函数 | `(typ, val)` | Cast a value to a type. |
| [`typing.ChainMap`](https://docs.python.org/3.12/library/typing.html#typing.ChainMap) | 类 | `(*args, **kwargs)` | A generic version of collections.ChainMap. |
| [`typing.ClassVar`](https://docs.python.org/3.12/library/typing.html#typing.ClassVar) | 数据/常量 | `(*args, **kwds)` | Special type construct to mark class variables. |
| [`typing.clear_overloads`](https://docs.python.org/3.12/library/typing.html#typing.clear_overloads) | 函数 | `()` | Clear all overloads in the registry. |
| [`typing.Collection`](https://docs.python.org/3.12/library/typing.html#typing.Collection) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Collection. |
| [`typing.Concatenate`](https://docs.python.org/3.12/library/typing.html#typing.Concatenate) | 数据/常量 | `(*args, **kwds)` | Special form for annotating higher-order functions. |
| [`typing.Container`](https://docs.python.org/3.12/library/typing.html#typing.Container) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Container. |
| [`typing.ContextManager`](https://docs.python.org/3.12/library/typing.html#typing.ContextManager) | 类 | `(*args, **kwargs)` | A generic version of contextlib.AbstractContextManager. |
| [`typing.Coroutine`](https://docs.python.org/3.12/library/typing.html#typing.Coroutine) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Coroutine. |
| [`typing.Counter`](https://docs.python.org/3.12/library/typing.html#typing.Counter) | 类 | `(*args, **kwargs)` | A generic version of collections.Counter. |
| [`typing.dataclass_transform`](https://docs.python.org/3.12/library/typing.html#typing.dataclass_transform) | 函数 | `(*, eq_default: bool = True, order_default: bool = False, kw_only_default: bool = False, frozen_default: bool = False, field_specifiers: ...` | Decorator to mark an object as providing dataclass-like behaviour. |
| [`typing.DefaultDict`](https://docs.python.org/3.12/library/typing.html#typing.DefaultDict) | 类 | `(*args, **kwargs)` | A generic version of collections.defaultdict. |
| [`typing.Deque`](https://docs.python.org/3.12/library/typing.html#typing.Deque) | 类 | `(*args, **kwargs)` | A generic version of collections.deque. |
| [`typing.Dict`](https://docs.python.org/3.12/library/typing.html#typing.Dict) | 类 | `(*args, **kwargs)` | A generic version of dict. |
| [`typing.Final`](https://docs.python.org/3.12/library/typing.html#typing.Final) | 数据/常量 | `(*args, **kwds)` | Special typing construct to indicate final names to type checkers. |
| [`typing.final`](https://docs.python.org/3.12/library/typing.html#typing.final) | 函数 | `(f)` | Decorator to indicate final methods and final classes. |
| [`typing.ForwardRef`](https://docs.python.org/3.12/library/typing.html#typing.ForwardRef) | 类 | `(arg, is_argument=True, module=None, *, is_class=False)` | Internal wrapper to hold a forward reference. |
| [`typing.FrozenSet`](https://docs.python.org/3.12/library/typing.html#typing.FrozenSet) | 类 | `(*args, **kwargs)` | A generic version of frozenset. |
| [`typing.Generator`](https://docs.python.org/3.12/library/typing.html#typing.Generator) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Generator. |
| [`typing.Generic`](https://docs.python.org/3.12/library/typing.html#typing.Generic) | 类 | `()` | Abstract base class for generic types. |
| [`typing.get_args`](https://docs.python.org/3.12/library/typing.html#typing.get_args) | 函数 | `(tp)` | Get type arguments with all substitutions performed. |
| [`typing.get_origin`](https://docs.python.org/3.12/library/typing.html#typing.get_origin) | 函数 | `(tp)` | Get the unsubscripted version of a type. |
| [`typing.get_overloads`](https://docs.python.org/3.12/library/typing.html#typing.get_overloads) | 函数 | `(func)` | Return all defined overloads for *func* as a sequence. |
| [`typing.get_type_hints`](https://docs.python.org/3.12/library/typing.html#typing.get_type_hints) | 函数 | `(obj, globalns=None, localns=None, include_extras=False)` | Return type hints for an object. |
| [`typing.Hashable`](https://docs.python.org/3.12/library/typing.html#typing.Hashable) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Hashable. |
| [`typing.IO`](https://docs.python.org/3.12/library/typing.html#typing.IO) | 类 | `()` | Generic base class for TextIO and BinaryIO. |
| [`typing.is_typeddict`](https://docs.python.org/3.12/library/typing.html#typing.is_typeddict) | 函数 | `(tp)` | Check if an annotation is a TypedDict class. |
| [`typing.ItemsView`](https://docs.python.org/3.12/library/typing.html#typing.ItemsView) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.ItemsView. |
| [`typing.Iterable`](https://docs.python.org/3.12/library/typing.html#typing.Iterable) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Iterable. |
| [`typing.Iterator`](https://docs.python.org/3.12/library/typing.html#typing.Iterator) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Iterator. |
| [`typing.KeysView`](https://docs.python.org/3.12/library/typing.html#typing.KeysView) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.KeysView. |
| [`typing.List`](https://docs.python.org/3.12/library/typing.html#typing.List) | 类 | `(*args, **kwargs)` | A generic version of list. |
| [`typing.Literal`](https://docs.python.org/3.12/library/typing.html#typing.Literal) | 数据/常量 | `(*args, **kwds)` | Special typing form to define literal types (a.k.a. value types). |
| [`typing.LiteralString`](https://docs.python.org/3.12/library/typing.html#typing.LiteralString) | 数据/常量 | `(*args, **kwds)` | Represents an arbitrary literal string. |
| [`typing.Mapping`](https://docs.python.org/3.12/library/typing.html#typing.Mapping) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Mapping. |
| [`typing.MappingView`](https://docs.python.org/3.12/library/typing.html#typing.MappingView) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.MappingView. |
| [`typing.Match`](https://docs.python.org/3.12/library/typing.html#typing.Match) | 类 | `(*args, **kwargs)` | A generic version of re.Match. |
| [`typing.MutableMapping`](https://docs.python.org/3.12/library/typing.html#typing.MutableMapping) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.MutableMapping. |
| [`typing.MutableSequence`](https://docs.python.org/3.12/library/typing.html#typing.MutableSequence) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.MutableSequence. |
| [`typing.MutableSet`](https://docs.python.org/3.12/library/typing.html#typing.MutableSet) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.MutableSet. |
| [`typing.NamedTuple`](https://docs.python.org/3.12/library/typing.html#typing.NamedTuple) | 类 | `(typename, fields=None, /, **kwargs)` | Typed version of namedtuple. |
| [`typing.Never`](https://docs.python.org/3.12/library/typing.html#typing.Never) | 数据/常量 | `(*args, **kwds)` | The bottom type, a type that has no members. |
| [`typing.NewType`](https://docs.python.org/3.12/library/typing.html#typing.NewType) | 类 | `(name, tp)` | NewType creates simple unique types with almost zero runtime overhead. |
| [`typing.no_type_check`](https://docs.python.org/3.12/library/typing.html#typing.no_type_check) | 函数 | `(arg)` | Decorator to indicate that annotations are not type hints. |
| [`typing.no_type_check_decorator`](https://docs.python.org/3.12/library/typing.html#typing.no_type_check_decorator) | 函数 | `(decorator)` | Decorator to give another decorator the @no_type_check effect. |
| [`typing.NoReturn`](https://docs.python.org/3.12/library/typing.html#typing.NoReturn) | 数据/常量 | `(*args, **kwds)` | Special type indicating functions that never return. |
| [`typing.NotRequired`](https://docs.python.org/3.12/library/typing.html#typing.NotRequired) | 数据/常量 | `(*args, **kwds)` | Special typing construct to mark a TypedDict key as potentially missing. |
| [`typing.Optional`](https://docs.python.org/3.12/library/typing.html#typing.Optional) | 数据/常量 | `(*args, **kwds)` | Optional[X] is equivalent to Union[X, None]. |
| [`typing.OrderedDict`](https://docs.python.org/3.12/library/typing.html#typing.OrderedDict) | 类 | `(*args, **kwargs)` | A generic version of collections.OrderedDict. |
| [`typing.overload`](https://docs.python.org/3.12/library/typing.html#typing.overload) | 函数 | `(func)` | Decorator for overloaded functions/methods. |
| [`typing.override`](https://docs.python.org/3.12/library/typing.html#typing.override) | 函数 | `(method: F, /) -> F` | Indicate that a method is intended to override a method in a base class. |
| [`typing.ParamSpec`](https://docs.python.org/3.12/library/typing.html#typing.ParamSpec) | 类 | `` | Parameter specification variable. |
| [`typing.ParamSpecArgs`](https://docs.python.org/3.12/library/typing.html#typing.ParamSpecArgs) | 数据/常量 | `` | The args for a ParamSpec object. |
| [`typing.ParamSpecKwargs`](https://docs.python.org/3.12/library/typing.html#typing.ParamSpecKwargs) | 数据/常量 | `` | The kwargs for a ParamSpec object. |
| [`typing.Pattern`](https://docs.python.org/3.12/library/typing.html#typing.Pattern) | 类 | `(*args, **kwargs)` | A generic version of re.Pattern. |
| [`typing.Protocol`](https://docs.python.org/3.12/library/typing.html#typing.Protocol) | 类 | `()` | Base class for protocol classes. |
| [`typing.Required`](https://docs.python.org/3.12/library/typing.html#typing.Required) | 数据/常量 | `(*args, **kwds)` | Special typing construct to mark a TypedDict key as required. |
| [`typing.reveal_type`](https://docs.python.org/3.12/library/typing.html#typing.reveal_type) | 函数 | `(obj: T, /) -> T` | Ask a static type checker to reveal the inferred type of an expression. |
| [`typing.Reversible`](https://docs.python.org/3.12/library/typing.html#typing.Reversible) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Reversible. |
| [`typing.runtime_checkable`](https://docs.python.org/3.12/library/typing.html#typing.runtime_checkable) | 函数 | `(cls)` | Mark a protocol class as a runtime protocol. |
| [`typing.Self`](https://docs.python.org/3.12/library/typing.html#typing.Self) | 数据/常量 | `(*args, **kwds)` | Used to spell the type of "self" in classes. |
| [`typing.Sequence`](https://docs.python.org/3.12/library/typing.html#typing.Sequence) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Sequence. |
| [`typing.Set`](https://docs.python.org/3.12/library/typing.html#typing.Set) | 类 | `(*args, **kwargs)` | A generic version of set. |
| [`typing.Sized`](https://docs.python.org/3.12/library/typing.html#typing.Sized) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.Sized. |
| [`typing.SupportsAbs`](https://docs.python.org/3.12/library/typing.html#typing.SupportsAbs) | 类 | `(*args, **kwargs)` | An ABC with one abstract method __abs__ that is covariant in its return type. |
| [`typing.SupportsBytes`](https://docs.python.org/3.12/library/typing.html#typing.SupportsBytes) | 类 | `(*args, **kwargs)` | An ABC with one abstract method __bytes__. |
| [`typing.SupportsComplex`](https://docs.python.org/3.12/library/typing.html#typing.SupportsComplex) | 类 | `(*args, **kwargs)` | An ABC with one abstract method __complex__. |
| [`typing.SupportsFloat`](https://docs.python.org/3.12/library/typing.html#typing.SupportsFloat) | 类 | `(*args, **kwargs)` | An ABC with one abstract method __float__. |
| [`typing.SupportsIndex`](https://docs.python.org/3.12/library/typing.html#typing.SupportsIndex) | 类 | `(*args, **kwargs)` | An ABC with one abstract method __index__. |
| [`typing.SupportsInt`](https://docs.python.org/3.12/library/typing.html#typing.SupportsInt) | 类 | `(*args, **kwargs)` | An ABC with one abstract method __int__. |
| [`typing.SupportsRound`](https://docs.python.org/3.12/library/typing.html#typing.SupportsRound) | 类 | `(*args, **kwargs)` | An ABC with one abstract method __round__ that is covariant in its return type. |
| [`typing.Text`](https://docs.python.org/3.12/library/typing.html#typing.Text) | 类 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`typing.TextIO`](https://docs.python.org/3.12/library/typing.html#typing.TextIO) | 类 | `()` | Typed version of the return of open() in text mode. |
| [`typing.Tuple`](https://docs.python.org/3.12/library/typing.html#typing.Tuple) | 数据/常量 | `(*args, **kwargs)` | Deprecated alias to builtins.tuple. |
| [`typing.Type`](https://docs.python.org/3.12/library/typing.html#typing.Type) | 类 | `(*args, **kwargs)` | Deprecated alias to builtins.type. |
| [`typing.type_check_only`](https://docs.python.org/3.12/library/typing.html#typing.type_check_only) | 函数 | `` | 参见官方 API 文档。 |
| [`typing.TYPE_CHECKING`](https://docs.python.org/3.12/library/typing.html#typing.TYPE_CHECKING) | 数据/常量 | `` | bool(x) -> bool |
| [`typing.TypeAlias`](https://docs.python.org/3.12/library/typing.html#typing.TypeAlias) | 数据/常量 | `(*args, **kwds)` | Special form for marking type aliases. |
| [`typing.TypeAliasType`](https://docs.python.org/3.12/library/typing.html#typing.TypeAliasType) | 类 | `` | Type alias. |
| [`typing.TypedDict`](https://docs.python.org/3.12/library/typing.html#typing.TypedDict) | 类 | `(typename, fields=None, /, *, total=True, **kwargs)` | A simple typed namespace. At runtime it is equivalent to a plain dict. |
| [`typing.TypeGuard`](https://docs.python.org/3.12/library/typing.html#typing.TypeGuard) | 数据/常量 | `(*args, **kwds)` | Special typing construct for marking user-defined type guard functions. |
| [`typing.TypeVar`](https://docs.python.org/3.12/library/typing.html#typing.TypeVar) | 类 | `` | Type variable. |
| [`typing.TypeVarTuple`](https://docs.python.org/3.12/library/typing.html#typing.TypeVarTuple) | 类 | `` | Type variable tuple. A specialized form of type variable that enables variadic generics. |
| [`typing.Union`](https://docs.python.org/3.12/library/typing.html#typing.Union) | 数据/常量 | `(*args, **kwds)` | Union type; Union[X, Y] means either X or Y. |
| [`typing.Unpack`](https://docs.python.org/3.12/library/typing.html#typing.Unpack) | 数据/常量 | `(*args, **kwds)` | Type unpack operator. |
| [`typing.ValuesView`](https://docs.python.org/3.12/library/typing.html#typing.ValuesView) | 类 | `(*args, **kwargs)` | A generic version of collections.abc.ValuesView. |

## `typing.ParamSpec`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`typing.ParamSpec.args`](https://docs.python.org/3.12/library/typing.html#typing.ParamSpec.args) | 属性 | `` | Represents positional arguments. |
| [`typing.ParamSpec.kwargs`](https://docs.python.org/3.12/library/typing.html#typing.ParamSpec.kwargs) | 属性 | `` | Represents keyword arguments. |
