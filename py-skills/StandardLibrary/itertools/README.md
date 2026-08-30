<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# itertools：惰性迭代工具

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/itertools.html](https://docs.python.org/3.12/library/itertools.html)

用组合式、惰性的迭代器构建高效数据管线，包括无限迭代、最短终止和组合生成。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- 无限迭代器
- 终止于最短输入
- 组合迭代器
- groupby/tee/batched

## 常见工作流

- 分批处理数据
- 组合多个迭代来源
- 生成排列组合

## 最小示例

```python
from itertools import batched, chain

print(list(batched(chain([1, 2], [3, 4, 5]), 2)))
```

## 常见陷阱

- 迭代器通常只能消费一次
- groupby 只合并相邻键
- tee 可能缓存大量数据

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **22** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
