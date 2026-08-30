<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# collections：专用容器

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/collections.html](https://docs.python.org/3.12/library/collections.html)

补充 dict/list/tuple，提供计数器、双端队列、带默认值映射、命名元组、映射视图和容器抽象基类。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- Counter/defaultdict/deque
- namedtuple
- ChainMap/UserDict 等包装器
- collections.abc 协议

## 常见工作流

- 计数和 Top-N
- 高效队列
- 运行时判断容器协议

## 最小示例

```python
from collections import Counter, deque

counts = Counter("abracadabra")
queue = deque([1, 2, 3])
print(counts.most_common(2), queue.popleft())
```

## 常见陷阱

- Counter 的零/负计数不会自动删除
- defaultdict 读取会创建键
- 运行时检查协议不等于静态类型提示

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **67** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
