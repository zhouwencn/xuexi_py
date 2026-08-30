# NumPy 学习入口

NumPy 的核心不在于记住几十个函数，而在于建立四个稳定模型：

1. 数据模型：`ndarray = 数据缓冲区 + dtype + shape + strides`。
2. 选择模型：每个索引或切片都在指定某个轴如何取值。
3. 运算模型：向量化运算、ufunc 和 broadcasting 共同决定批量计算。
4. 内存模型：view、copy、连续布局和临时数组决定修改影响与性能。

## 推荐顺序

1. [完整学习路径](./01-learning-path.md)
2. [知识图谱](./02-knowledge-graph.md)
3. [训练与考核体系](./03-training-system.md)
4. [API 掌握分级](./04-api-mastery.md)

## 学完后应具备的能力

- 能解释 NumPy 为什么比 Python list 更适合大规模同质数值计算。
- 能根据 `shape` 判断索引、切片、聚合和广播后的结果。
- 能独立使用布尔索引与花式索引完成筛选和重排。
- 能把简单 Python 数值循环改写成清晰的向量化计算。
- 能判断两个数组是否共享内存，避免意外修改。
- 能选择合理 `dtype`，估算数组内存并识别不必要复制。
- 能使用独立随机数生成器构造可复现测试数据。

## 每节学习动作

```text
先预测 shape / dtype / 输出
  ↓
运行最小示例
  ↓
手写同类代码
  ↓
改变一个轴或 shape
  ↓
解释结果变化
  ↓
完成改错和综合练习
```
## 完整 API 索引

- [NumPy 完整公开 API 参考](./05-complete-api-reference.md)
