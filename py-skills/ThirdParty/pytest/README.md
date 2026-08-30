<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# pytest：测试框架

版本基线：**pytest 9.1**  
官方文档：[https://docs.pytest.org/en/stable/reference/index.html](https://docs.pytest.org/en/stable/reference/index.html)

通过普通函数断言、fixture、参数化、标记、钩子、插件和捕获工具组织可读、可扩展的测试。`_pytest.hookspec` 虽位于内部模块路径，但其中 `pytest_*` hooks 是官方公开插件接口，因此作为明确例外收录。

## 安装与导入

`python -m pip install pytest`。

## 核心模型

- assert 重写
- fixture 和作用域
- parametrize/mark
- monkeypatch/capsys/tmp_path

## 常见工作流

- 编写单元和接口测试
- 复用分层 fixture
- 参数化边界条件

## 最小示例

```python
import pytest

@pytest.mark.parametrize(("value", "expected"), [(2, 4), (3, 9)])
def test_square(value: int, expected: int) -> None:
    assert value * value == expected
```

## 常见陷阱

- fixture 不应隐藏过多业务
- 不要让测试依赖执行顺序
- 只测试实现细节会阻碍重构

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **488** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
