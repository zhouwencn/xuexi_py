# NumPy 知识图谱

## 总体依赖图

```mermaid
flowchart TD
    A[Python 基础与 list] --> B[ndarray 数据模型]
    B --> C[dtype]
    B --> D[shape / ndim / size]
    B --> E[内存缓冲区 / strides]

    D --> F[一维与多维索引]
    F --> G[切片]
    F --> H[布尔索引]
    F --> I[花式索引]

    C --> J[数组运算]
    D --> J
    J --> K[ufunc]
    J --> L[向量化]
    D --> M[Broadcasting]
    M --> J

    D --> N[reshape / transpose]
    E --> O[view / copy]
    N --> O
    O --> P[contiguous / 性能]

    D --> Q[concatenate / stack]
    D --> R[split]
    D --> S[聚合与 axis]

    H --> T[where / any / all]
    C --> U[NaN / isfinite]
    T --> V[数据清洗]
    U --> V
    S --> V

    B --> W[default_rng]
    W --> X[可复现测试数据]

    L --> Y[性能优化]
    P --> Y
    C --> Y
```

## ndarray 对象模型

```mermaid
flowchart LR
    A[ndarray 对象] --> B[数据缓冲区]
    A --> C[dtype]
    A --> D[shape]
    A --> E[strides]
    A --> F[flags]

    C --> G[单元素大小 itemsize]
    D --> H[维数 ndim]
    D --> I[元素总数 size]
    G --> J[内存 nbytes]
    I --> J

    B --> K[view 可共享]
    B --> L[copy 独立拥有]
    E --> M[C / F 连续布局]
```

## 索引知识图谱

```mermaid
flowchart TD
    A[数组选择] --> B[基础索引]
    A --> C[高级索引]

    B --> D[整数索引]
    B --> E[切片]
    B --> F[省略号 / newaxis]
    E --> G[通常返回 view]

    C --> H[布尔索引]
    C --> I[整数数组 / 花式索引]
    H --> J[通常返回 copy]
    I --> J

    D --> K[可能减少维度]
    E --> L[通常保留轴]
    F --> M[增加或选择轴]
```

## Broadcasting 判断图

```mermaid
flowchart TD
    A[取得两个 shape] --> B[从最右侧维度开始]
    B --> C{当前维度相等?}
    C -- 是 --> D[该维兼容]
    C -- 否 --> E{其中一个为 1 或缺失?}
    E -- 是 --> D
    E -- 否 --> F[广播失败 ValueError]
    D --> G{还有更左侧维度?}
    G -- 是 --> B
    G -- 否 --> H[各维取较大值形成结果 shape]
```

## shape 变换图谱

```mermaid
flowchart LR
    A[原数组] --> B[reshape]
    A --> C[transpose / T]
    A --> D[squeeze]
    A --> E[expand_dims / newaxis]
    A --> F[flatten]
    A --> G[ravel]

    B --> H[元素总数不变]
    C --> I[轴顺序改变]
    D --> J[删除长度为 1 的轴]
    E --> K[增加长度为 1 的轴]
    F --> L[一维 copy]
    G --> M[尽量一维 view]
```

## axis 与聚合关系

```text
二维数组 shape = (rows, columns)

                    columns 轴 axis=1
                  ───────────────────→
rows 轴 axis=0    [ a00  a01  a02 ]
       │           [ a10  a11  a12 ]
       │           [ a20  a21  a22 ]
       ▼

沿 axis=0 聚合：折叠 rows，得到每列结果，shape=(columns,)
沿 axis=1 聚合：折叠 columns，得到每行结果，shape=(rows,)
```

## 核心机制与常见错误映射

| 机制 | 必须掌握 | 常见错误 |
|---|---|---|
| dtype | 范围、精度、类型提升、内存 | 整数溢出、浮点直接相等、混合类型字符串化 |
| shape | 维度含义、结果 shape 推理 | 只看元素数量、不看逐轴结构 |
| 索引 | 基础与高级索引差异 | 行列写反、整数索引意外降维 |
| broadcasting | 从右向左逐轴判断 | 把 size 相同误认为可广播 |
| axis | 被折叠的轴 | 机械背“行/列”导致三维时失效 |
| view/copy | 数据是否共享 | 修改切片污染原数组，或到处复制浪费内存 |
| NaN | 专用检查函数 | `arr == np.nan` 永远找不到 NaN |
| 向量化 | 数组表达整个计算 | 把 `np.vectorize` 当性能优化，制造大临时数组 |
| 随机数 | 独立 Generator | 库函数修改全局 seed，测试相互影响 |

## 学习依赖清单

```text
必须先会 ndarray / shape
    才能学习多维索引、axis、reshape、broadcasting

必须先会 dtype
    才能理解 NaN、精度、溢出、内存和性能

必须先会索引与 shape
    才能理解 view/copy、合并拆分和高级选择

必须先会 broadcasting + axis
    才能独立完成标准化、批量统计和特征运算

必须先会 view/copy + dtype
    才能进行可靠的内存与性能优化
```
