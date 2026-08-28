# Pandas API 掌握分级

## A 级：必须脱离文档手写

### 创建与读取

```python
pd.Series
pd.DataFrame
pd.read_csv
```

### 检查

```python
head
tail
info
describe
shape
columns
index
dtypes
sample
```

### 选择与筛选

```python
df["column"]
df[["a", "b"]]
loc
iloc
布尔 mask
isin
between
```

### 字段操作

```python
df["new_column"] = ...
assign
rename
drop
sort_values
sort_index
```

### 清洗与转换

```python
isna
notna
fillna
dropna
duplicated
drop_duplicates
astype
pd.to_numeric
pd.to_datetime
```

### 分组、连接与时间序列

```python
groupby
agg
transform
merge
pd.concat
rolling
shift
diff
pct_change
```

### 导出

```python
to_csv
```

### A 级要求

- 能从需求独立写出常见形式。
- 知道结果是 Series 还是 DataFrame。
- 知道是否改变 Index、行数和粒度。
- 知道缺失值的基本行为。
- 能为正常、空数据和边界情况写测试。

## B 级：必须认识，允许查文档

### I/O

```python
read_excel
read_json
read_sql
to_excel
to_json
to_sql
usecols
parse_dates
index_col
encoding
nrows
chunksize
na_values
```

### 选择与标量访问

```python
at
iat
query
where
mask
filter
```

### 字符串与日期

```python
.str.lower
.str.upper
.str.strip
.str.contains
.str.replace
.str.split
.str.extract
.dt.year
.dt.month
.dt.day
.dt.hour
.dt.weekday
pd.date_range
```

### 分组

```python
size
count
nunique
filter
rank
cumcount
cumsum
GroupBy.apply
```

### 连接与 Index

```python
join
set_index
reset_index
reindex
MultiIndex
xs
swaplevel
```

### 形状变换

```python
pivot
pivot_table
melt
stack
unstack
explode
```

### 时间窗口

```python
expanding
resample
ewm
```

### 类型与性能

```python
convert_dtypes
category
memory_usage
select_dtypes
copy
```

### B 级要求

- 看到代码能解释用途和粒度。
- 知道应该在哪类问题中查找。
- 会阅读官方文档中的参数、返回值和 Notes。
- 使用前会写最小示例验证边界。

## C 级：知道存在，遇到需求再学

```text
IntervalIndex / PeriodIndex / TimedeltaIndex
稀疏数据
ExtensionArray
自定义 accessor
复杂窗口索引器
Styler
高级缺失插值
复杂 offset 与专业日历
Arrow 后端的高级行为
eval 的高级表达式优化
```

## API 选择速查

| 需求 | 第一选择 |
|---|---|
| 选择一列 | `df["col"]` |
| 选择多列 | `df[[...]]` |
| 按标签选择 | `loc` |
| 按位置选择 | `iloc` |
| 单个标量 | `at` / `iat` |
| 多条件筛选 | 命名 mask + `loc` |
| 类型合法且直接转换 | `astype` |
| 数字中含坏值 | `to_numeric(errors="coerce")` + 审计 |
| 日期解析 | `to_datetime` |
| 每组一行汇总 | `groupby().agg()` |
| 组统计写回原行 | `groupby().transform()` |
| 按组级条件留整组 | `groupby().filter()` |
| 按键关联 | `merge` |
| 堆叠同结构表 | `concat` |
| 长表变宽表且键唯一 | `pivot` |
| 重复键需要合法聚合 | `pivot_table` |
| 宽表变长表 | `melt` |
| 最近 N 个观测 | `rolling(N)` |
| 从开始累计至当前 | `expanding()` |
| 前一条记录 | `shift(1)` |
| 绝对变化 | `diff()` |
| 相对变化 | `pct_change(fill_method=None)` |

## 个人熟练度记录

| 状态 | 含义 |
|---|---|
| 0 | 没见过 |
| 1 | 知道名字，不清楚结果结构 |
| 2 | 能照示例模仿 |
| 3 | 能独立完成常见任务 |
| 4 | 能解释 Index、粒度、缺失和错误 |
| 5 | 能在真实项目中选择、测试并优化 |

A 级 API 的目标是全部达到 4；项目高频 API 应达到 5。
