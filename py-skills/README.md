# NumPy + Pandas 系统学习体系

这是一套独立于项目前后端代码的学习资料，目标不是背 API，而是形成下面这条完整能力链：

```text
理解原理
  ↓
阅读代码并预测结果
  ↓
模仿示例手写
  ↓
脱离示例独立实现
  ↓
定位并修复错误
  ↓
重构低质量代码
  ↓
完成真实数据项目
```

最终标准：遇到常见数值计算或表格数据处理需求时，可以独立分析数据结构、选择方案、手写代码、验证结果和定位问题。

## 目录

### NumPy

- [NumPy 学习入口](./Numpy/README.md)
- [NumPy 完整学习路径](./Numpy/01-learning-path.md)
- [NumPy 知识图谱](./Numpy/02-knowledge-graph.md)
- [NumPy 训练与考核体系](./Numpy/03-training-system.md)
- [NumPy API 掌握分级](./Numpy/04-api-mastery.md)

### Pandas

- [Pandas 学习入口](./Pandas/README.md)
- [Pandas 完整学习路径](./Pandas/01-learning-path.md)
- [Pandas 知识图谱](./Pandas/02-knowledge-graph.md)
- [Pandas 训练与考核体系](./Pandas/03-training-system.md)
- [Pandas API 掌握分级](./Pandas/04-api-mastery.md)
- [股票数据综合实战](./Pandas/05-stock-data-projects.md)

## 总体学习顺序

```text
Python list / 基础数据结构
  ↓
NumPy ndarray 与 dtype
  ↓
索引、切片、向量化与广播
  ↓
shape、axis、view/copy 与内存
  ↓
Pandas Series / DataFrame / Index
  ↓
读取、检查、选择、清洗与类型转换
  ↓
GroupBy、Merge、透视与时间序列
  ↓
性能、调试和数据质量
  ↓
股票数据完整项目
```

## 四阶段考核

| 阶段 | 核心目标 | 通过标准 |
|---|---|---|
| Stage 1：NumPy 基础 | 独立完成常见数组操作 | 不查资料完成创建、索引、广播、reshape、条件和聚合 |
| Stage 2：Pandas 基础 | 独立读取并清洗 CSV | 能检查结构、修正类型、处理缺失与重复、完成筛选和导出 |
| Stage 3：Pandas 中高级 | 独立完成分析任务 | 掌握 GroupBy、Merge、rolling、时间序列和性能基本原则 |
| Stage 4：真实项目 | 独立交付股票分析程序 | 从原始数据到清洗、指标、统计、合并、测试和导出形成闭环 |

建议每个阶段达到至少 85% 的独立正确率后再进入下一阶段。

## AI 辅助学习规则

练习期间使用三级提示：

1. 第一次只提示方向，不给代码。
2. 第二次指出关键知识点或 API。
3. 第三次只给关键一两行，不提供完整实现。
4. 只有学习者明确说“查看答案”后，才查看完整参考答案。

代码出错时，先回答以下问题：

- 哪一行最可能有问题？
- 当前数据的 `shape`、`dtype`、`columns`、`index` 是什么？
- 实际结果和预期结果从哪一步开始不同？
- 问题属于索引、类型、缺失、对齐、分组、排序、窗口还是引用关系？

## JavaScript 经验迁移原则

可以用 JavaScript 建立第一层直觉，但不能简单画等号：

| JavaScript | Python / 数据工具 | 主要区别 |
|---|---|---|
| `Array` | Python `list` | 二者都是通用容器，可放不同类型 |
| `Array` | NumPy `ndarray` | ndarray 通常同质，支持广播和底层批量运算 |
| `Object` / `Map` | Python `dict` | 都表达键值关系，但语义和 API 不完全相同 |
| 对象数组 | Pandas `DataFrame` | DataFrame 按列组织类型，并按标签对齐 |
| `array.filter(...)` | `df.loc[mask]` | Pandas 的 mask 是带 Index 的布尔 Series |
| `array.map(...)` | `Series.map(...)` | Pandas 会保留 Index；数值任务优先考虑向量化列运算 |

> 股票数据只作为编程与数据分析练习，不构成投资建议。
