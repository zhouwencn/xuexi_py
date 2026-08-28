# Pandas 知识图谱

## 总体依赖图

```mermaid
flowchart TD
    A[Python + NumPy 基础] --> B[Series]
    A --> C[ndarray / dtype / axis]
    B --> D[Index]
    B --> E[DataFrame]
    D --> E

    E --> F[创建与读取]
    F --> G[结构检查]
    G --> H[列选择]
    G --> I[loc / iloc / at / iat]
    I --> J[条件筛选]
    J --> K[新增与修改字段]

    G --> L[缺失值]
    G --> M[重复与唯一键]
    G --> N[dtype 转换]
    N --> O[字符串]
    N --> P[日期时间]

    D --> Q[标签对齐]
    Q --> K
    Q --> R[set/reset/reindex]

    E --> S[GroupBy]
    S --> T[agg]
    S --> U[transform]
    S --> V[filter]

    M --> W[Merge / Join]
    Q --> W
    E --> X[Concat]

    S --> Y[MultiIndex]
    Y --> Z[stack / unstack]
    E --> AA[pivot / pivot_table / melt]

    P --> AB[排序]
    AB --> AC[rolling / expanding]
    AB --> AD[shift / diff / pct_change]
    S --> AC
    S --> AD

    O --> AE[向量化 .str]
    P --> AF[向量化 .dt]
    C --> AG[列向量化运算]
    AE --> AH[减少 apply]
    AF --> AH
    AG --> AH

    F --> AI[大文件 / chunksize]
    N --> AJ[dtype / category 内存优化]
    AH --> AK[性能]
    AI --> AK
    AJ --> AK

    L --> AL[数据质量]
    M --> AL
    W --> AL
    AC --> AL
    AL --> AM[真实数据管线]
    AK --> AM
```

## Pandas 对象关系

```mermaid
flowchart LR
    A[DataFrame] --> B[行 Index]
    A --> C[columns]
    A --> D[Series: open]
    A --> E[Series: close]
    A --> F[Series: symbol]

    D --> B
    E --> B
    F --> B

    D --> G[numeric dtype]
    E --> H[numeric dtype]
    F --> I[string/category dtype]
```

## 数据处理主流程

```mermaid
flowchart TD
    A[原始 CSV / Excel / JSON / SQL] --> B[读取配置]
    B --> C[Schema 检查]
    C --> D[类型转换]
    D --> E[缺失与重复审计]
    E --> F[业务约束校验]
    F --> G[clean 数据]
    F --> H[rejected 数据]

    G --> I[筛选 / 字段变换]
    I --> J[GroupBy / Pivot / Rolling]
    J --> K[Merge 外部信息]
    K --> L[结果验证]
    L --> M[CSV / Excel / 数据库输出]
    L --> N[测试与质量报告]
```

## 数据选择图谱

```mermaid
flowchart TD
    A[我要选择什么?] --> B{列?}
    B -- 单列 --> C[df['col'] -> Series]
    B -- 多列 --> D[df[['a','b']] -> DataFrame]
    B -- 行与列 --> E{依据是什么?}
    E -- 标签 --> F[loc]
    E -- 整数位置 --> G[iloc]
    E -- 单个标签标量 --> H[at]
    E -- 单个位置标量 --> I[iat]
    E -- 条件 --> J[构造布尔 mask]
    J --> K[df.loc[mask, columns]]
```

## GroupBy 粒度图谱

```mermaid
flowchart TD
    A[按 key 分组] --> B{期望每组输出多少行?}
    B -- 一行或少量汇总 --> C[agg]
    B -- 与原组相同行数 --> D[transform]
    B -- 整组保留或删除 --> E[filter]
    B -- 形状无法用专用操作表达 --> F[apply 谨慎使用]

    C --> G[Named Aggregation]
    D --> H[组内标准化 / 均值回写 / rolling]
    E --> I[按观测数或组级统计筛组]
```

## Merge 决策图

```mermaid
flowchart TD
    A[两张表需要组合] --> B{按业务键匹配?}
    B -- 否，只是堆叠 --> C[pd.concat]
    B -- 是 --> D[定义左右表一行粒度]
    D --> E[检查键 dtype / 缺失 / 重复]
    E --> F{期望基数}
    F --> G[one_to_one]
    F --> H[one_to_many]
    F --> I[many_to_one]
    F --> J[many_to_many 谨慎]
    G --> K[merge + validate]
    H --> K
    I --> K
    J --> K
    K --> L[indicator 审计]
    L --> M[比较行数与未匹配率]
```

## 时间序列依赖图

```mermaid
flowchart TD
    A[原始日期列] --> B[pd.to_datetime]
    B --> C[处理 NaT / 时区]
    C --> D[按 symbol + date 排序]
    D --> E[groupby symbol]

    E --> F[shift 前值]
    E --> G[diff 绝对变化]
    E --> H[pct_change 相对变化]
    E --> I[rolling 移动窗口]
    E --> J[expanding 累计窗口]

    I --> K[MA5 / MA10 / MA20]
    I --> L[成交量基线]
    J --> M[累计峰值]
    M --> N[回撤]
```

## 错误与根因映射

| 表现 | 优先检查 | 常见根因 |
|---|---|---|
| `KeyError` | `columns` / `index` 的 `repr` | 拼写、空格、大小写、错误轴、层级标签 |
| `IndexError` | `shape` 与 `iloc` 位置 | 筛选后行数减少、位置越界 |
| `ValueError` | dtype、shape、mask、赋值长度 | 类型转换失败、真值含糊、广播/对齐错误 |
| SettingWithCopy | 赋值目标所有权 | 链式索引、切片与副本意图不明确 |
| merge 行数膨胀 | 两侧键重复和基数 | 多对多组合 |
| rolling 结果异常 | 排序和分组边界 | 未排序、跨股票窗口、未来数据泄漏 |
| 结果大量 NaN | Index 与键对齐 | 标签不一致、reindex、merge 未匹配、类型不一致 |
| 内存过高 | object、无关列、复制 | 未设置 usecols/dtype、循环 concat、过度 copy |

## 学习依赖清单

```text
Series / DataFrame / Index
    是选择、对齐和所有高级操作的基础

数据检查 + dtype + 缺失 + 唯一键
    是可靠 GroupBy、Merge、时间序列的前提

一行粒度 + 分组思想
    决定 agg / transform / filter 的正确选择

Index 对齐 + 键基数
    决定赋值和 Merge 是否安全

datetime + 排序 + groupby
    决定 rolling / shift / pct_change 是否正确

向量化 + dtype + 分块
    共同决定性能，而不是单靠 apply 或一个参数
```
