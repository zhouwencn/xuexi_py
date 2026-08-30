<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# threading：线程并发

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/threading.html](https://docs.python.org/3.12/library/threading.html)

在同一进程内通过线程并发处理等待型任务，并用同步原语保护共享状态。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- Thread 生命周期
- Lock/RLock/Condition
- Event/Semaphore/Barrier
- thread-local 与异常钩子

## 常见工作流

- 并发 I/O
- 协调生产者和消费者
- 保护共享可变状态

## 最小示例

```python
from threading import Thread

def work(name: str) -> None:
    print(name)

thread = Thread(target=work, args=("worker",))
thread.start()
thread.join()
```

## 常见陷阱

- GIL 不让纯 Python CPU 任务自动并行
- 锁顺序不一致会死锁
- daemon 线程可能来不及清理

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **63** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
