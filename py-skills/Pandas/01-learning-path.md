# Pandas 完整学习路径

## 模块 1：Series、DataFrame 与 Index

### 知识点

- Pandas 是什么
- Pandas 与 NumPy 的关系
- `Series`
- `DataFrame`
- `Index`
- `columns`
- row / column 的数据粒度
- 列 dtype
- 标签对齐
- 单列选择返回 Series
- 多列选择返回 DataFrame

### 核心关系

```text
Series = 一维 values + Index + name

DataFrame = 多个共享行 Index 的 Series

Index = 行标签系统
columns = 列标签系统
```

### JavaScript 对照

```javascript
const rows = [
  { symbol: "AAA", close: 10 },
  { symbol: "BBB", close: 20 },
]
```

```python
df = pd.DataFrame({
    "symbol": ["AAA", "BBB"],
    "close": [10, 20],
})
```

DataFrame 可以从对象数组创建，但它的计算模型不是逐个 JavaScript 对象：Pandas 按列组织 dtype，并在许多运算中按 Index 标签对齐。

### 通过标准

- 能解释 `df["close"]` 和 `df[["close"]]` 的类型、维度差异。
- 能解释 Index 为什么不仅是显示行号。
- 能说清当前表中一行代表什么。

---

## 模块 2：创建 Series 与 DataFrame

### 知识点

- `pd.Series()`
- `pd.DataFrame()`
- 从 dict 创建
- 从 list 创建
- 从 list of dict 创建
- 从 NumPy array 创建
- 指定 `index`
- 指定 `columns`
- 指定 `dtype`
- 缺失键如何形成缺失值
- 记录方向与列方向

### 必做练习

使用下面四种输入创建相同的 DataFrame：

1. 字典的列表。
2. 列表的字典。
3. 二维 NumPy 数组加列名。
4. 两个 Series 组成的字典。

比较它们如何决定行数、列顺序、Index 和 dtype。

---

## 模块 3：读取 CSV、Excel、JSON 与 SQL

### 核心 API

```python
pd.read_csv()
pd.read_excel()
pd.read_json()
pd.read_sql()
```

### 常见参数

```text
usecols
dtype
parse_dates
index_col
encoding
nrows
chunksize
na_values
keep_default_na
```

### 推荐读取流程

```text
确认文件来源与大小
  ↓
用 nrows 抽样读取
  ↓
检查列名、类型、日期和缺失标记
  ↓
确定 usecols / dtype / parse_dates
  ↓
评估是否需要 chunksize
  ↓
完整读取并验证行数、键和范围
```

### 为什么大文件不能总是直接 `read_csv()`

- CSV 文本大小不等于 DataFrame 内存大小。
- object 字符串可能占用大量 Python 对象内存。
- 类型推断可能扫描并产生不理想 dtype。
- 读取无关列浪费 I/O 和内存。
- 文件可能大于可用内存。

### SQL 重点

- SQL 查询应参数化，不能把外部输入直接拼接进 SQL。
- 大查询应限制列、条件和粒度。
- 明确数据库与 Pandas 之间的时间、数值和缺失类型映射。

---

## 模块 4：陌生 DataFrame 的检查顺序

### 必查内容

```python
df.shape
df.head()
df.tail()
df.sample()
df.columns
df.index
df.dtypes
df.info()
df.describe()
```

### 数据质量检查

```python
df.isna().sum()
df.duplicated().sum()
df.duplicated(["date", "symbol"]).sum()
df["symbol"].nunique()
df["date"].min()
df["date"].max()
df.memory_usage(deep=True)
```

### 检查顺序

1. `shape`：规模是否符合预期。
2. `columns`：字段名是否正确，有无空格或大小写问题。
3. `head/tail/sample`：真实值、格式、单位和异常模式。
4. `dtypes/info`：类型、非空数量和内存。
5. `describe`：范围、分位数、唯一值和高频值。
6. 唯一键：重复与缺失。
7. 业务约束：日期、价格、数量、状态值。

`head()` 不是质量证明。前几行可能属于同一个股票、日期或分区，必须结合随机样本和统计检查。

---

## 模块 5：列选择与 loc / iloc / at / iat

### 基础选择

```python
df["close"]
df[["open", "close"]]
```

### 四个索引器

| API | 依据 | 适合场景 |
|---|---|---|
| `loc` | 行标签、列标签、布尔 Series | 选择区域、条件筛选、赋值 |
| `iloc` | 整数位置 | 按第几行、第几列选择 |
| `at` | 单个行标签 + 列标签 | 读取或写入单个标量 |
| `iat` | 单个行位置 + 列位置 | 按位置读取或写入单个标量 |

### 重点差异

```python
df.loc["2026-01-01":"2026-01-31"]  # 标签切片通常包含终点
df.iloc[0:10]                         # 位置切片不包含终点
```

### 高频错误

- 把整数标签当成整数位置。
- `df["close"]` 与 `df[["close"]]` 混用导致维度不符。
- 链式索引后赋值。
- `iloc` 位置越界。
- `loc` 使用不存在标签导致 `KeyError`。

---

## 模块 6：条件筛选

### 核心写法

```python
df[df["close"] > 100]

df[
    (df["close"] > 100)
    & (df["volume"] > 1_000_000)
]
```

### 扩展 API

```python
df["symbol"].isin(["AAA", "BBB"])
df["close"].between(100, 200, inclusive="both")
df.query("close > 100 and volume > 1_000_000")
```

### 必须理解

- 比较结果是带 Index 的布尔 Series。
- 使用 `&`、`|`、`~`，不用 Python `and`、`or`、`not`。
- 每个比较表达式加括号。
- mask 的 Index 对齐可能影响筛选结果。
- `query` 提升可读性，但复杂动态输入应谨慎处理。

### 推荐写法

```python
has_high_price = df["close"].gt(100)
has_high_volume = df["volume"].gt(1_000_000)
selected = df.loc[has_high_price & has_high_volume].copy()
```

给 mask 命名，便于逐个检查条件数量和失败样本。

---

## 模块 7：新增、修改、删除字段

### 知识点

- 直接列赋值
- 标量赋值
- Series 按 Index 对齐赋值
- 条件赋值
- `assign()`
- `rename()`
- `drop()`
- `insert()` 的认识
- 原地修改与返回新对象
- 方法链

### 核心写法

```python
df["range"] = df["high"] - df["low"]

df.loc[df["close"] > 100, "signal"] = "buy"

result = (
    df.assign(return_rate=df["close"] / df["open"] - 1)
      .rename(columns={"return_rate": "return"})
      .drop(columns=["temporary_column"])
)
```

### 重点

- 明确要修改原表，还是构造新结果。
- 赋值 Series 会按 Index 对齐，不一定按位置。
- 不迷信 `inplace=True`；它并不保证更省内存，也可能降低方法链可读性。

---

## 模块 8：缺失值处理

### 缺失类型

| 值 | 常见场景 |
|---|---|
| `np.nan` | 传统浮点缺失值 |
| `None` | Python 对象缺失 |
| `pd.NaT` | 日期时间缺失 |
| `pd.NA` | Pandas nullable dtype 的统一缺失标量 |

### 核心 API

```python
isna()
notna()
fillna()
dropna()
```

### 处理原则

```text
先识别缺失
  ↓
解释缺失的业务原因
  ↓
判断是否随机、系统性或状态含义
  ↓
选择保留、填充、删除或单独标记
  ↓
记录处理数量
  ↓
验证处理后分布
```

### 高频错误

- 所有列统一 `fillna(0)`。
- 因一个无关字段缺失删除整行。
- 对时间序列使用未来值回填，造成数据泄漏。
- 忽略填充对均值、收益和分组统计的影响。

---

## 模块 9：重复值与唯一键

### 核心 API

```python
df.duplicated()
df.drop_duplicates()
```

### 必须先回答

- 一行代表什么？
- 业务唯一键是什么？
- 完全重复和键重复有什么区别？
- 多个版本应保留 first、last，还是按版本时间选择？
- 去重前数据是否已经按正确依据排序？

### 示例

```python
duplicate_keys = df.duplicated(["date", "symbol"], keep=False)
conflicts = df.loc[duplicate_keys].sort_values(["symbol", "date"])

deduplicated = (
    df.sort_values("updated_at")
      .drop_duplicates(["date", "symbol"], keep="last")
)
```

不能为了“行数看起来正常”而直接 `drop_duplicates()`。去重规则必须有业务依据。

---

## 模块 10：数据类型转换

### 核心 API

```python
astype()
pd.to_numeric()
pd.to_datetime()
convert_dtypes()
```

### 类型转换策略

- 已知数据全部合法：`astype()`。
- 数字字符串中可能有坏值：`pd.to_numeric(errors="coerce")`。
- 日期字符串：`pd.to_datetime()`，格式明确时指定 `format`。
- 转换失败后保留原始值，生成 rejected rows。
- 整数含缺失时考虑 nullable `Int64`。
- 文本考虑 `string` dtype，而不是全部留作 object。

### 审计写法

```python
raw_close = df["close"].copy()
converted = pd.to_numeric(raw_close, errors="coerce")

failed = converted.isna() & raw_close.notna()
rejected = df.loc[failed].assign(raw_close=raw_close.loc[failed])

df["close"] = converted
```

---

## 模块 11：字符串处理

### 核心 API

```python
.str.lower()
.str.upper()
.str.strip()
.str.contains()
.str.replace()
.str.split()
```

### 扩展知识

- `startswith()` / `endswith()`
- `match()` / `fullmatch()`
- `extract()`
- `len()`
- `get()`
- `cat()`
- 缺失值处理
- 正则与字面字符串

### 核心写法

```python
df["symbol"] = (
    df["symbol"]
      .astype("string")
      .str.strip()
      .str.upper()
)

mask = df["headline"].str.contains("earnings", case=False, na=False)
```

### 高频错误

- 忘记把返回 Series 赋回原列。
- `contains()` 的结果中含缺失，无法直接作为 mask。
- 字面替换时忘记明确 `regex=False`。
- 对整表 `astype(str)`，把真正缺失变成字符串。

---

## 模块 12：日期时间

### 知识点

- `pd.to_datetime()`
- `Timestamp`
- `DatetimeIndex`
- `pd.date_range()`
- `.dt.year`
- `.dt.month`
- `.dt.day`
- `.dt.hour`
- `.dt.weekday`
- 日期排序
- 日期范围筛选
- 时区 aware / naive
- 时间差
- 自然日、工作日与交易日的区别
- 时间字符串格式

### 核心写法

```python
df["date"] = pd.to_datetime(df["date"], errors="coerce", utc=True)

df["year"] = df["date"].dt.year
df["month"] = df["date"].dt.month
df["weekday"] = df["date"].dt.weekday

window = df.loc[df["date"].between(start, end, inclusive="both")]
```

### 必须理解

- 字符串日期不能可靠替代 datetime dtype。
- `Timestamp` 是单个时间点；`DatetimeIndex` 是时间标签集合。
- `rolling(5)` 表示 5 个观测，不一定是 5 个自然日。
- 新闻时间和行情日期合并前要统一时区和粒度。

---

## 模块 13：排序

### 核心 API

```python
sort_values()
sort_index()
```

### 知识点

- 单字段排序
- 多字段排序
- 每个字段独立升降序
- 稳定排序
- 缺失值位置
- 按 Index 排序
- GroupBy、rolling、shift 前的排序要求

### 示例

```python
df = df.sort_values(
    ["symbol", "date"],
    ascending=[True, True],
)
```

很多时间序列错误不会抛异常，只会因为排序不正确得到业务错误结果，所以排序应成为显式步骤。

---

## 模块 14：Index 深入

### 核心 API

```python
set_index()
reset_index()
reindex()
```

### 知识点

- Index 的标签语义
- Index 唯一性
- Index 排序
- 标签对齐
- 算术对齐
- 赋值对齐
- 重复 Index
- 时间 Index
- `RangeIndex`
- `reindex` 引入缺失

### 核心区别

| API | 作用 |
|---|---|
| `set_index` | 把普通列设为 Index |
| `reset_index` | 把 Index 恢复为普通列 |
| `reindex` | 按新的标签集合重排、增加或删除数据 |

### 对齐陷阱

```python
left = pd.Series([1, 2], index=["A", "B"])
right = pd.Series([10, 20], index=["B", "C"])
print(left + right)
```

结果 Index 是 `A/B/C`，只有 `B` 同时存在。Pandas 默认按标签，而不是简单按位置相加。

---

## 模块 15：apply、map 与向量化

### 知识点

- `Series.map()`
- `DataFrame.apply()`
- `axis=0`
- `axis=1`
- 字典映射
- Python 回调开销
- 向量化列运算
- `np.where()` / `np.select()`
- `.str` 与 `.dt`
- 内置聚合优先

### 选择顺序

```text
能否用直接列运算？
  ↓ 否
能否用 Pandas / NumPy 内置向量化方法？
  ↓ 否
能否用 map 做简单逐值映射？
  ↓ 否
是否真的需要 apply？
  ↓ 是
写清 axis、输入类型和输出 shape，并测量性能
```

### 重构示例

低效写法：

```python
df["range"] = df.apply(
    lambda row: row["high"] - row["low"],
    axis=1,
)
```

推荐写法：

```python
df["range"] = df["high"] - df["low"]
```

`apply` 不是错误 API，也不是性能 API。只有在内置向量化操作无法清晰表达需求时才使用。

---

## 模块 16：GroupBy 基础

### 思想模型

```text
split：根据 key 把行分组
  ↓
apply：每组执行统计、转换或筛选
  ↓
combine：把每组结果按标签组合
```

### 核心 API

```python
groupby()
sum()
mean()
count()
size()
max()
min()
```

### 核心写法

```python
df.groupby("symbol")["close"].mean()

df.groupby(["symbol", "year"])[["close", "volume"]].sum()
```

### 重点问题

- 分组前的一行粒度是什么？
- 分组键是否存在缺失？
- 聚合后每行代表什么？
- `count` 和 `size` 的缺失处理有何区别？
- 分组键应该成为 Index，还是保留为列？
- 是否需要 `sort=False`、`dropna=False` 或 `observed=True`？

---

## 模块 17：agg、transform 与 filter

### 三者粒度

| API | 结果行数 | 适用场景 |
|---|---|---|
| `agg` | 通常每组一行 | 汇总统计 |
| `transform` | 与原数据相同行数和 Index | 把组级结果写回每行 |
| `filter` | 保留或删除整组 | 按组级条件筛组 |

### Named Aggregation

```python
summary = df.groupby("symbol", as_index=False).agg(
    avg_close=("close", "mean"),
    max_volume=("volume", "max"),
    trading_days=("date", "nunique"),
)
```

### transform 示例

```python
mean_volume = df.groupby("symbol")["volume"].transform("mean")
df["relative_volume"] = df["volume"] / mean_volume
```

### filter 示例

```python
enough_history = df.groupby("symbol").filter(
    lambda group: len(group) >= 20
)
```

---

## 模块 18：Merge、Join 与 Concat

### SQL JOIN 对照

| Pandas | SQL 含义 |
|---|---|
| `how="inner"` | INNER JOIN，保留交集 |
| `how="left"` | LEFT JOIN，保留左表全部行 |
| `how="right"` | RIGHT JOIN，保留右表全部行 |
| `how="outer"` | FULL OUTER JOIN，保留并集 |

### 核心 API

```python
pd.merge()
df.merge()
df.join()
pd.concat()
```

### 安全合并流程

```text
定义左右表粒度
  ↓
检查键 dtype 和缺失
  ↓
检查键唯一性与预期基数
  ↓
选择 how
  ↓
使用 validate
  ↓
使用 indicator 审计匹配
  ↓
比较合并前后行数
```

### 推荐写法

```python
result = quotes.merge(
    companies,
    on="symbol",
    how="left",
    validate="many_to_one",
    indicator=True,
)
```

### Concat 原则

- `axis=0` 通常追加行。
- `axis=1` 通常并排列，并按 Index 对齐。
- 多批数据先收集，最后一次 `pd.concat()`。
- 不要在循环中反复拼接不断增长的 DataFrame。

---

## 模块 19：MultiIndex

### 知识点

- 多层行 Index
- 多层 columns
- `set_index([col1, col2])`
- tuple 标签选择
- `xs()`
- `swaplevel()`
- `reorder_levels()`
- 层级排序
- `stack()` / `unstack()`
- `reset_index()`

### 使用原则

MultiIndex 适合：

- `date + symbol` 等自然层级键。
- 需要按不同层快速切片。
- 透视表或多聚合结果。

不必使用 MultiIndex：

- 下游大量依赖普通 `merge` 和序列化。
- 团队对层级索引不熟悉。
- 普通 long table + `groupby` 已足够清晰。

---

## 模块 20：Pivot、Pivot Table 与 Melt

### 长表和宽表

```text
长表：一行一个观测，变量和值通常纵向存储
宽表：同一实体的多个变量或类别展开为多列
```

### 核心 API

```python
pivot()
pivot_table()
melt()
stack()
unstack()
```

### 关键区别

- `pivot()` 只做形状变换，要求 `index + columns` 组合唯一。
- `pivot_table()` 允许通过 `aggfunc` 聚合重复组合。
- `melt()` 把多个列还原成变量和值两列。

### 高频错误

`pivot` 因重复键报错时，不要立刻换成 `pivot_table(..., aggfunc="mean")`。先确认重复是数据错误，还是合法的一对多观测，再选择有业务意义的聚合。

---

## 模块 21：Rolling 与 Expanding

### 核心 API

```python
rolling()
expanding()
```

### 知识点

- 固定观测数窗口
- 时间窗口
- `min_periods`
- 窗口聚合
- 按组 rolling
- 时间排序
- centered window
- 未来数据泄漏
- 累计窗口

### 股票示例

```python
df = df.sort_values(["symbol", "date"])

df["ma5"] = df.groupby("symbol")["close"].transform(
    lambda values: values.rolling(5, min_periods=5).mean()
)

df["running_max"] = df.groupby("symbol")["close"].transform(
    lambda values: values.expanding().max()
)
```

### 必须理解

- `rolling(5)` 是 5 条观测，不一定是 5 个自然日。
- 多股票数据必须隔离 group 边界。
- 窗口计算依赖行顺序。
- `bfill()` 早期均线可能引入未来数据。

---

## 模块 22：shift、diff 与 pct_change

### 核心 API

```python
shift()
diff()
pct_change()
```

### 关系

```text
previous = current.shift(1)
diff = current - previous
pct_change = current / previous - 1
```

### 股票写法

```python
df = df.sort_values(["symbol", "date"])
grouped_close = df.groupby("symbol")["close"]

df["previous_close"] = grouped_close.shift(1)
df["change"] = grouped_close.diff()
df["return"] = grouped_close.pct_change(fill_method=None)
```

### 高频错误

- 未分组，导致一只股票首行和上一只股票尾行比较。
- 未排序，导致“上一行”不等于上一交易日。
- 将 `0.05` 误解为 `0.05%`，实际是 `5%`。
- 前值为 0 导致无穷值。
- 隐式填充缺失后计算出虚假收益。

---

## 模块 23：性能与大数据处理

### 知识点

- Python 循环 vs Pandas 向量化
- `apply(axis=1)` 的开销
- object dtype 内存
- nullable dtype
- `category`
- `memory_usage(deep=True)`
- `usecols`
- `dtype`
- `chunksize`
- 分块算法的可合并性
- 避免不必要 copy
- 循环 concat 的性能问题
- NumPy array 与 DataFrame 转换成本
- 性能基准与 profile

### 优化顺序

```text
先确保结果正确
  ↓
测量耗时与内存
  ↓
减少读取列和行
  ↓
修正 object 等不合理 dtype
  ↓
使用内置向量化操作
  ↓
避免循环 concat 和不必要 copy
  ↓
必要时分块或下推到数据库
  ↓
再次验证正确性并测量
```

### 分块平均值的正确做法

不能简单平均每个 chunk 的平均值。每块应保留 `sum` 和 `count`，最后分别相加：

```python
parts = []

for chunk in pd.read_csv("quotes.csv", chunksize=200_000):
    part = chunk.groupby("symbol")["close"].agg(["sum", "count"])
    parts.append(part)

total = pd.concat(parts).groupby(level=0).sum()
total["mean"] = total["sum"] / total["count"]
```

---

## 模块 24：测试与系统调试

### 常见异常

- `KeyError`
- `IndexError`
- `ValueError`
- 日期解析错误
- dtype 转换错误
- merge 基数错误
- SettingWithCopy 相关警告

### SettingWithCopy 的核心

错误思路：把它当成一个需要关闭的烦人警告。

正确思路：它在提醒“当前赋值目标是否是原 DataFrame 并不明确”。

修改原表：

```python
mask = df["close"] > 100
df.loc[mask, "signal"] = "buy"
```

创建独立结果：

```python
subset = df.loc[df["close"] > 100].copy()
subset["signal"] = "buy"
```

### 调试输出

```python
print(df.shape)
print(df.columns.tolist())
print(df.index)
print(df.dtypes)
print(df.isna().sum())
print(df.duplicated(["date", "symbol"]).sum())
print(df.head().to_dict("records"))
```

### 测试重点

- 空 DataFrame。
- 单行与单组。
- 缺失值。
- 重复键。
- 无序日期。
- 多股票组边界。
- merge 未匹配和重复键。
- rolling 窗口不足。
- 输入 DataFrame 不被意外修改。
- 导出列顺序和日期格式稳定。
