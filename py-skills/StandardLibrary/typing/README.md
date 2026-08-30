<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# typing：类型系统

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/typing.html](https://docs.python.org/3.12/library/typing.html)

为静态分析、编辑器和运行时框架表达类型关系。类型提示不会自动验证或转换普通 Python 值。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- Union/Literal/Callable
- TypeVar/Generic/Protocol
- TypedDict/NamedTuple
- 类型守卫、重载和注解工具

## 常见工作流

- 描述函数和容器边界
- 定义结构化协议
- 为泛型组件保留类型信息

## 最小示例

```python
from typing import Protocol

class SupportsClose(Protocol):
    def close(self) -> None: ...

def shutdown(resource: SupportsClose) -> None:
    resource.close()
```

## 常见陷阱

- 不要把 Any 当作逃生口
- 运行时 isinstance 对多数 typing 构造无效
- 过度复杂注解会降低可读性

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **103** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
