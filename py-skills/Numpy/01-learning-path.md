# NumPy 完整学习路径

## 模块 1：NumPy 与 ndarray 数据模型

### 学习目标

- 理解 NumPy 解决什么问题。
- 理解 ndarray 与 Python list 的根本差异。
- 能读懂数组的结构元信息。

### 知识点

- NumPy 是什么、适用场景与不适用场景
- Python list：保存 Python 对象引用，可混合类型
- ndarray：同质元素、固定维度、紧凑数据缓冲区
- `dtype`
- `shape`
- `ndim`
- `size`
- `itemsize`
- `nbytes`
- 标量类型与数组标量
- 同质类型带来的内存和计算优势
- 整数范围、溢出与浮点精度

### 必须理解

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]], dtype=np.int64)

print(arr.shape)     # (2, 3)
print(arr.ndim)      # 2
print(arr.size)      # 6
print(arr.dtype)     # int64
print(arr.itemsize)  # 单个元素占用字节数
print(arr.nbytes)    # 数据缓冲区总字节数
```

### 通过标准

- 看到任意小数组，可以不运行就说出 `shape`、`ndim` 和 `size`。
- 能解释混合类型输入为什么可能发生 dtype 提升或字符串化。
- 能用 `size * itemsize` 估算数组数据区内存。

---

## 模块 2：数组创建

### 知识点

- `np.array()`
- `np.asarray()`
- `np.zeros()`
- `np.ones()`
- `np.empty()`
- `np.full()`
- `np.arange()`
- `np.linspace()`
- `np.eye()`
- 一维、二维和多维数组
- 从 Python list / tuple 创建
- 从已有数组创建
- 显式指定 dtype

### API 选择逻辑

| 需求 | 推荐方式 |
|---|---|
| 从已有序列创建 | `np.array` / `np.asarray` |
| 全部初始化为 0 | `np.zeros` |
| 全部初始化为 1 | `np.ones` |
| 固定填充值 | `np.full` |
| 立即覆盖全部元素，只分配内存 | `np.empty` |
| 按固定步长生成 | `np.arange` |
| 在区间内生成固定数量的等距点 | `np.linspace` |
| 单位矩阵 | `np.eye` |

### 重点陷阱

- `np.empty()` 不是“空数组”，而是未初始化数组。
- 浮点区间优先考虑 `linspace`，避免 `arange` 步长误差带来的终点问题。
- `np.zeros((2, 3))` 的 shape 要作为一个元组传入。
- 创建时选择的 dtype 会影响精度、范围和内存。

---

## 模块 3：一维与多维索引、切片

### 知识点

- 正向索引
- 负数索引
- 左闭右开的切片
- 步长切片
- 多维索引
- 多维切片
- 省略号 `...`
- `None` / `np.newaxis`
- 整数索引导致维度减少
- 切片与 shape 推理

### 核心写法

```python
arr[0]
arr[-1]
arr[1:5]
arr[::-1]

matrix[:, 0]       # 所有行，第 0 列
matrix[0, :]       # 第 0 行，所有列
matrix[1:3, 2:5]   # 行区间与列区间的交叉块
matrix[:, 0:1]     # 保留二维列结构
```

### 必须理解

二维数组 `arr[行选择, 列选择]` 中，逗号分隔每个轴的选择规则：

```text
shape = (rows, columns)
arr[:, 0]
     │  └─ 固定列轴，列轴被消除
     └──── 保留全部行
结果 shape = (rows,)
```

### 通过标准

- 能在运行前写出复杂切片结果的 shape。
- 能解释 `arr[:, 0]` 与 `arr[:, 0:1]` 的维数差异。
- 能解释负索引与切片终点规则。

---

## 模块 4：布尔索引与花式索引

### 知识点

- 比较运算生成布尔数组
- 布尔掩码筛选
- 多条件组合
- `&`、`|`、`~`
- 每个条件必须加括号
- 整数数组索引
- 按指定顺序重排
- 多维花式索引
- `np.ix_()`
- 基础索引与高级索引的结果差异

### 核心写法

```python
arr[arr > 10]
arr[(arr > 10) & (arr < 20)]
arr[~np.isnan(arr)]
arr[[3, 0, 2]]
```

### 为什么不能使用 `and`

```python
arr > 10 and arr < 20
```

`arr > 10` 返回的是一整个布尔数组。Python 的 `and` 要求把左侧对象判断为一个布尔值，但包含多个元素的数组没有唯一的整体真值，所以会报错。

正确写法：

```python
(arr > 10) & (arr < 20)
```

---

## 模块 5：数组运算、向量化与 ufunc

### 知识点

- 数组与标量运算
- 数组之间逐元素运算
- 加、减、乘、除、整除、取余、幂
- 比较运算
- 向量化
- Universal Functions
- 一元 ufunc 与二元 ufunc
- `out`、`where` 等通用参数的认识
- `np.sqrt()`
- `np.exp()`
- `np.log()`
- `np.abs()`
- `np.maximum()` / `np.minimum()`
- Python 循环与底层批量循环的区别

### 核心写法

```python
arr + 10
arr * 2
arr1 + arr2
np.sqrt(arr)
np.exp(arr)
np.abs(arr)
```

### 为什么推荐向量化

Python 循环每次迭代都涉及解释器、对象和动态类型操作。NumPy 将同质数组的批量计算交给优化过的底层循环，通常能减少 Python 层开销。

但需要同时理解：

- 向量化不是“一行代码就是快”。
- 复杂表达式可能创建多个大型临时数组。
- `np.vectorize()` 主要是便利包装，通常不等于真正的底层向量化加速。
- 性能结论必须通过基准测试验证。

---

## 模块 6：Broadcasting 广播机制

### 广播规则

从两个 shape 的最右侧维度开始向左比较。每一对维度满足以下任一条件才兼容：

1. 两个维度相等。
2. 其中一个维度是 `1`。
3. 某一方不存在该维度，可视为在左侧补 `1`。

### 示例

```text
(2, 3) + (3,)       → (2, 3)
(2, 3) + (1, 3)     → (2, 3)
(2, 3) + (2, 1)     → (2, 3)
(4, 1, 3) + (2, 3)  → (4, 2, 3)
(2, 3) + (2,)       → 不兼容
```

### 重点能力

- 独立判断是否可广播。
- 写出广播后的结果 shape。
- 区分 `(n,)`、`(1, n)` 和 `(n, 1)`。
- 使用广播完成按列标准化和按行加权。
- 识别意外广播导致的逻辑错误或巨大临时数组。

### 真实案例：按列标准化

```python
column_mean = matrix.mean(axis=0)
column_std = matrix.std(axis=0)
standardized = (matrix - column_mean) / column_std
```

---

## 模块 7：形状变换与轴操作

### 知识点

- `reshape()`
- `-1` 自动推导维度
- `flatten()`
- `ravel()`
- `transpose()`
- `.T`
- `swapaxes()`
- `moveaxis()`
- `squeeze()`
- `expand_dims()`
- `np.newaxis`

### `-1` 的真正含义

```python
arr.reshape(-1, 1)  # 根据总元素数推导行数，形成列向量
arr.reshape(1, -1)  # 根据总元素数推导列数，形成行向量
arr.reshape(3, -1)  # 总元素数必须能被 3 整除
```

一个 reshape 中最多只能出现一个 `-1`，因为 NumPy 必须能够唯一推导未知维度。

### 必须区分

| 操作 | 核心特点 |
|---|---|
| `flatten()` | 总是返回一维 copy |
| `ravel()` | 尽量返回一维 view，必要时也会 copy |
| `.T` | 二维时交换行列轴；多维时反转轴顺序 |
| `squeeze()` | 删除长度为 1 的轴 |
| `expand_dims()` | 在指定位置增加长度为 1 的轴 |

---

## 模块 8：view、copy 与内存布局

### 知识点

- ndarray 对象与数据缓冲区
- view 共享底层数据
- copy 拥有独立数据
- 基础切片通常产生 view
- 花式索引、布尔索引通常产生 copy
- `.base`
- `np.shares_memory()`
- `strides`
- C contiguous
- F contiguous
- 转置与非连续布局
- 浅复制与深复制的区别
- 原地运算与普通表达式

### 核心实验

```python
base = np.arange(6)
view = base[1:4]
copy = base[[1, 2, 3]]

view[0] = 99
copy[1] = 88

print(base)
print(np.shares_memory(base, view))
print(np.shares_memory(base, copy))
```

### 工程原则

- 函数是否允许修改调用方数据，必须形成明确契约。
- 需要隔离修改时，在所有权边界调用 `.copy()`。
- 不要为了“安全”到处复制大型数组。
- 不要假设所有 `reshape` 或 `ravel` 都共享内存，应验证。

---

## 模块 9：数组合并与拆分

### 知识点

- `np.concatenate()`
- `np.stack()`
- `np.vstack()`
- `np.hstack()`
- `np.column_stack()`
- `np.split()`
- `np.array_split()`
- `np.hsplit()`
- `np.vsplit()`
- 合并前的 shape 约束
- 在现有轴连接与创建新轴的区别

### 核心区别

```text
concatenate：沿现有轴扩展，ndim 不变
stack：创建一个新轴，ndim 增加 1
```

如果 `a.shape == b.shape == (2, 3)`：

```text
concatenate([a, b], axis=0) → (4, 3)
concatenate([a, b], axis=1) → (2, 6)
stack([a, b], axis=0)       → (2, 2, 3)
```

### 性能原则

不要在循环中反复拼接不断增长的数组。先把分块收集到 list，最后一次合并。

---

## 模块 10：聚合统计与 axis

### 知识点

- `sum`
- `mean`
- `median`
- `std`
- `var`
- `min`
- `max`
- `argmin`
- `argmax`
- `percentile`
- `quantile`
- `cumsum`
- `cumprod`
- `axis=None / 0 / 1 / ...`
- `keepdims`
- NaN-aware 聚合

### axis 的统一理解

axis 表示“被聚合掉的轴”。

```text
matrix.shape = (rows, columns)

matrix.mean(axis=0)
    折叠 rows 轴
    输出 shape = (columns,)
    含义：每列一个均值

matrix.mean(axis=1)
    折叠 columns 轴
    输出 shape = (rows,)
    含义：每行一个均值
```

不要只背“axis=0 是列、axis=1 是行”。进入三维数组后，应始终通过“哪个轴消失、输出 shape 是什么”推理。

---

## 模块 11：条件、排序、唯一值和缺失值

### 知识点

- `np.where()`
- `np.any()`
- `np.all()`
- `np.unique()`
- `np.sort()`
- `np.argsort()`
- `np.nan`
- `np.isnan()`
- `np.isfinite()`
- `np.isinf()`
- `nanmean`、`nansum` 等缺失感知聚合

### NaN 核心机制

```python
np.nan == np.nan  # False
```

NaN 遵循 IEEE 754 浮点语义，它表示“不是一个数值”，因此不能用相等判断寻找 NaN。

```python
mask = np.isnan(arr)
finite = np.isfinite(arr)
cleaned = np.where(finite, arr, 0)
```

### 重点区别

- `np.sort(arr)` 返回排序后的新数组。
- `np.argsort(arr)` 返回排序顺序对应的索引。
- `np.where(condition, x, y)` 在两个值来源间逐元素选择。
- `np.where(condition)` 只传条件时返回满足条件的位置索引元组。

---

## 模块 12：随机数、性能与最佳实践

### 随机数知识点

- 旧式 `np.random` 全局状态
- `np.random.default_rng()`
- `Generator`
- `random()`
- `integers()`
- `choice()`
- `normal()`
- `shuffle()`
- 随机种子与可复现性
- 测试中传入 Generator

### 推荐写法

```python
rng = np.random.default_rng(42)

uniform = rng.random(10)
integers = rng.integers(0, 100, size=20)
samples = rng.choice(["A", "B", "C"], size=10, replace=True)
normal = rng.normal(loc=0, scale=1, size=1000)
rng.shuffle(integers)
```

### 为什么推荐 `default_rng()`

- 独立 Generator 不污染全局随机状态。
- 函数可以显式接收随机数生成器，更容易测试。
- 多个模块之间不容易互相改变随机序列。
- 新代码的随机状态依赖更清晰。

### 性能知识点

- Python for 循环与 NumPy 底层循环
- 向量化收益与临时数组成本
- dtype 与内存消耗
- contiguous array
- view 与 copy
- cache-friendly 访问顺序的认识
- 使用 `%timeit`、`timeit` 或性能分析器
- 正确性优先于微优化
- 用真实数据规模测量

### NumPy 阶段毕业任务

独立实现一个二维数值数据清洗与统计程序：

1. 接收包含 `NaN`、无穷值和异常负数的二维数组。
2. 不修改输入数组。
3. 按列计算有效值中位数并填充无效值。
4. 按列标准化，常量列安全处理。
5. 输出每列均值、标准差、最小值、最大值和 95 分位数。
6. 用至少 6 个断言验证 shape、dtype、缺失、常量列和输入不变性。
