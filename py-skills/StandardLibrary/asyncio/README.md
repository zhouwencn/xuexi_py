<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# asyncio：异步 I/O

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/asyncio.html](https://docs.python.org/3.12/library/asyncio.html)

用事件循环调度协程、Task、Future、异步流和同步原语，适合大量并发等待型工作。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- 协程、Task 与 Future
- 结构化并发和取消
- 超时、队列与同步原语
- streams、子进程和事件循环

## 常见工作流

- 并发请求多个 I/O
- 限制并发和实现背压
- 正确传播取消和超时

## 最小示例

```python
import asyncio

async def main() -> None:
    async with asyncio.TaskGroup() as group:
        group.create_task(asyncio.sleep(0.1))
        group.create_task(asyncio.sleep(0.2))

asyncio.run(main())
```

## 常见陷阱

- 不要在事件循环中执行阻塞函数
- create_task 后要保留任务生命周期
- CancelledError 通常应继续抛出

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **304** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
