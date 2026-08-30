<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# datetime：日期与时间

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/datetime.html](https://docs.python.org/3.12/library/datetime.html)

处理 date、time、datetime、timedelta 和时区。关键不是格式化，而是区分朴素时间、感知时间、时间点和持续时间。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- date/time/datetime
- timedelta 运算
- tzinfo/timezone
- 解析与格式化

## 常见工作流

- 生成 UTC 时间戳
- 计算日期区间
- 解析 ISO 8601 字符串

## 最小示例

```python
from datetime import UTC, datetime, timedelta

now = datetime.now(UTC)
expires_at = now + timedelta(minutes=30)
print(expires_at.isoformat())
```

## 常见陷阱

- 不要混算 naive 与 aware datetime
- 月份不能用固定天数代替
- 本地时间存在 DST 歧义

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **102** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
