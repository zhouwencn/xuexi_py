# Pandas 学习入口

Pandas 的核心不是“会调用 `read_csv` 和 `groupby`”，而是建立五个稳定模型：

1. 结构模型：`DataFrame` 是共享行 `Index` 的多列 `Series`。
2. 选择模型：列、标签、位置和布尔条件是四种不同选择方式。
3. 对齐模型：运算、赋值和连接会受 Index 与键影响。
4. 粒度模型：每一步都要说清“一行代表什么”。
5. 管线模型：读取、验证、清洗、转换、分析、导出和测试构成完整闭环。

## 推荐顺序

1. [完整学习路径](./01-learning-path.md)
2. [知识图谱](./02-knowledge-graph.md)
3. [训练与考核体系](./03-training-system.md)
4. [API 掌握分级](./04-api-mastery.md)
5. [股票数据综合实战](./05-stock-data-projects.md)

## 学完后应具备的能力

- 面对陌生 DataFrame，知道先检查什么。
- 能独立读取 CSV / Excel / JSON / SQL 数据。
- 能使用 `loc`、`iloc` 和布尔 mask 准确选择和修改数据。
- 能清洗缺失、重复、字符串数字和日期。
- 能根据结果粒度选择 `agg`、`transform` 或 `filter`。
- 能验证 merge 基数，避免连接后行数意外膨胀。
- 能在多股票数据中正确完成 rolling、shift 和 pct_change。
- 能定位 `KeyError`、`ValueError` 和 SettingWithCopy 问题。
- 能处理大 CSV，并形成基本的内存和性能意识。

## 学习前置

开始 Pandas 前，应掌握：

- Python list、dict、函数、异常和文件基础。
- NumPy ndarray、dtype、shape、布尔索引、broadcasting 和 axis。
- CSV 的行列结构与基本编码概念。

## 每次处理数据前的五问

```text
1. 一行代表什么？
2. 唯一键是什么？
3. 每列的类型、单位和缺失语义是什么？
4. 当前操作会改变粒度或行数吗？
5. 如何验证结果没有静默出错？
```
