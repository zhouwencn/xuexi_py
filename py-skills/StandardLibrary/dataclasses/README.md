<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# dataclasses：数据类

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/dataclasses.html](https://docs.python.org/3.12/library/dataclasses.html)

根据字段注解生成初始化、比较和显示等样板方法，适合以数据为主的普通 Python 对象。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- @dataclass 参数
- field/default_factory
- 冻结、排序和 slots
- 转换、复制和字段反射

## 常见工作流

- 定义轻量领域数据
- 避免可变默认值
- 按字段生成比较或哈希

## 最小示例

```python
from dataclasses import dataclass, field

@dataclass(slots=True)
class Course:
    title: str
    tags: list[str] = field(default_factory=list)
```

## 常见陷阱

- asdict 会递归深拷贝
- frozen 不是绝对不可变
- unsafe_hash 需要理解相等性约束

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **13** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
