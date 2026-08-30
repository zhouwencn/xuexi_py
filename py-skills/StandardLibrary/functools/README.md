<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# functools：高阶函数工具

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/functools.html](https://docs.python.org/3.12/library/functools.html)

操作和增强可调用对象，涵盖缓存、偏函数、比较转换、泛型函数和装饰器元数据。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- wraps/update_wrapper
- cache/lru_cache/cached_property
- partial/partialmethod
- singledispatch/total_ordering/reduce

## 常见工作流

- 编写保持元数据的装饰器
- 缓存纯函数
- 预绑定函数参数

## 最小示例

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n: int) -> int:
    return n if n < 2 else fib(n - 1) + fib(n - 2)

print(fib(20))
```

## 常见陷阱

- 缓存可变或无界输入可能占满内存
- cached_property 与属性失效要设计
- singledispatch 只看第一个参数类型

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **16** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
