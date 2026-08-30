<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# re：正则表达式

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/re.html](https://docs.python.org/3.12/library/re.html)

编译和执行正则表达式，用于有明确模式的文本匹配、提取和替换；结构化格式优先专用解析器。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- Pattern 与 Match
- search/match/fullmatch
- findall/finditer
- split/sub 与 flags

## 常见工作流

- 校验完整格式
- 提取命名分组
- 批量规范化文本

## 最小示例

```python
import re

pattern = re.compile(r"(?P<name>[a-z]+)=(?P<value>\d+)")
match = pattern.fullmatch("count=42")
print(match.groupdict() if match else None)
```

## 常见陷阱

- 优先 raw string
- 避免灾难性回溯
- 不要用正则解析复杂 HTML

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **62** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
