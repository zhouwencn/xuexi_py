<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# unittest：标准测试框架

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/unittest.html](https://docs.python.org/3.12/library/unittest.html)

标准库的 xUnit 测试框架，并提供断言、fixture、发现、跳过、参数化子测试和 mock/patch。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- TestCase 与断言
- setUp/tearDown
- suite/loader/runner
- Mock/patch/side_effect

## 常见工作流

- 组织可发现测试
- 隔离外部依赖
- 验证调用和异常

## 最小示例

```python
from unittest import TestCase

class AddTests(TestCase):
    def test_add(self) -> None:
        self.assertEqual(1 + 2, 3)
```

## 常见陷阱

- patch 必须作用在被查找的位置
- 不要 mock 被测核心逻辑
- 测试之间不能共享可变状态

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **179** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
