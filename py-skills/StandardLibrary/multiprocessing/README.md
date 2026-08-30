<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# multiprocessing：多进程

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/multiprocessing.html](https://docs.python.org/3.12/library/multiprocessing.html)

通过独立进程利用多核并隔离内存，提供进程、池、队列、管道、同步、管理器和共享内存。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- Process 与启动方式
- Pool
- Queue/Pipe
- Manager/shared_memory

## 常见工作流

- 并行 CPU 密集任务
- 跨进程消息通信
- 共享大块二进制数据

## 最小示例

```python
from multiprocessing import Pool

def square(value: int) -> int:
    return value * value

if __name__ == "__main__":
    with Pool() as pool:
        print(pool.map(square, [1, 2, 3]))
```

## 常见陷阱

- 入口必须使用 if __name__ == '__main__'
- 可传对象必须可序列化
- 共享状态和进程池需要显式关闭

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **151** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
