# NumPy API 掌握分级

分级的目标不是限制学习，而是避免把记忆力浪费在低频参数上。

## A 级：必须脱离文档手写

### 创建与属性

```python
np.array
np.zeros
np.ones
np.arange
np.linspace

arr.dtype
arr.shape
arr.ndim
arr.size
arr.itemsize
arr.nbytes
```

### 索引与形状

```python
arr[index]
arr[start:stop:step]
arr[row_selection, column_selection]
arr[boolean_mask]
arr[[positions]]

arr.reshape(...)
arr.T
np.expand_dims
np.squeeze
```

### 计算与聚合

```python
arr + scalar
arr1 + arr2
np.sqrt
np.exp
np.abs

np.sum
np.mean
np.median
np.std
np.min
np.max
np.argmin
np.argmax
```

### 条件与缺失

```python
np.where
np.any
np.all
np.isnan
np.isfinite
```

### 随机数

```python
np.random.default_rng
rng.random
rng.integers
rng.choice
rng.normal
```

### A 级要求

- 不只会补全代码，还要知道输入、输出和常见 shape。
- 能说出是否返回新数组。
- 能解释 axis 和 broadcasting。
- 能为正常和边界情况写断言。

## B 级：必须认识，允许查文档

### 创建与转换

```python
np.asarray
np.empty
np.full
np.eye
astype
```

### 形状与轴

```python
flatten
ravel
transpose
swapaxes
moveaxis
np.newaxis
```

### 合并与拆分

```python
np.concatenate
np.stack
np.vstack
np.hstack
np.column_stack
np.split
np.array_split
np.hsplit
np.vsplit
```

### 统计、条件和排序

```python
np.var
np.percentile
np.quantile
np.cumsum
np.cumprod
np.unique
np.sort
np.argsort
np.maximum
np.minimum
np.isinf
np.nanmean
np.nansum
```

### 内存检查

```python
np.shares_memory
arr.base
arr.strides
arr.flags
np.ascontiguousarray
```

### B 级要求

- 看到代码能解释用途。
- 知道在哪一类问题中查找它。
- 会阅读官方文档的参数、返回值和示例。
- 不要求背完冷门参数。

## C 级：知道存在，按需学习

```text
结构化数组与 record array
masked array
memmap
einsum
tensordot
高级线性代数
FFT
多项式模块
自定义 dtype
自定义 ufunc 的底层扩展
复杂 stride tricks
```

### C 级原则

- 遇到明确需求再深入。
- 不把危险的 stride 技巧用于普通业务代码。
- 线性代数、FFT 等领域 API 应结合对应数学知识学习。

## 个人熟练度表

给每个 A/B 级 API 标记状态：

| 状态 | 含义 |
|---|---|
| 0 | 没见过 |
| 1 | 见过但说不清输入输出 |
| 2 | 看示例能模仿 |
| 3 | 能独立手写常见用法 |
| 4 | 能解释机制和常见错误 |
| 5 | 能在真实项目中选择、测试和优化 |

A 级 API 的目标是全部达到 4；高频项目 API 应达到 5。
