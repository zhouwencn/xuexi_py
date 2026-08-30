<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# time：系统时间与计时

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/time.html](https://docs.python.org/3.12/library/time.html)

提供时间戳、结构化时间、休眠和高精度计时器。业务日期优先 datetime，性能测量优先 perf_counter。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- wall clock 与 monotonic clock
- 时间戳和 struct_time
- sleep
- perf_counter/process_time

## 常见工作流

- 测量耗时
- 实现简单退避
- 转换时间戳

## 最小示例

```python
from time import perf_counter

start = perf_counter()
sum(range(100_000))
print(perf_counter() - start)
```

## 常见陷阱

- 不要用 time.time 测量可能受校时影响的耗时
- sleep 不保证精确唤醒
- 时区转换优先 datetime/zoneinfo

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **54** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
