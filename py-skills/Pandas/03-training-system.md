# Pandas 训练与考核体系

## 一、每章必须完成的七类训练

### 1. 模仿题

看完示例后替换字段或条件，从头写一遍。

例如：从“筛选 close > 100”迁移到“筛选 volume 大于本股票历史均量两倍”。

### 2. 独立题

只提供需求、输入列和输出契约，不提供代码框架。

例如：独立实现 `clean_quotes(df)`，返回 clean 与 rejected 两个 DataFrame。

### 3. 改错题

必须回答：

1. 代码会报错、警告，还是静默给出错误结果？
2. 哪一行开始偏离预期？
3. 当前表的一行粒度是什么？
4. 根因属于类型、Index、分组、排序、窗口还是连接基数？
5. 最小修复是什么？
6. 应增加哪个测试？

### 4. 阅读题

给一段真实数据管线，要求解释：

- 每一步输入和输出 shape。
- 哪些列被新增、删除或改变 dtype。
- 粒度是否变化。
- Index 如何变化。
- 是否修改原 DataFrame。
- 哪些步骤可能丢行或放大行数。

### 5. 输出预测题

重点覆盖：

- `loc` 与 `iloc` 切片终点。
- Series 标签对齐。
- `groupby().agg()` 结果粒度。
- `transform()` 长度。
- inner/left/outer merge 行数。
- rolling 的前几行 NaN。
- 每组首条 `pct_change`。
- pivot 的行列结构。

### 6. 重构题

把下面几类低质量代码改写：

- `iterrows()` 做简单列运算。
- `apply(axis=1)` 做加减乘除。
- 循环中不断 `pd.concat()`。
- 无差别 `fillna(0)`。
- merge 后随意 `drop_duplicates()`。
- 链式索引赋值。

重构后必须验证结果与原需求一致，而不是只比较代码长度。

### 7. 综合题

一道综合题至少覆盖：

```text
读取或构造数据
+ 类型转换
+ 缺失/重复处理
+ 筛选或字段计算
+ 分组或窗口
+ 结果验证
```

## 二、Pandas 基础训练路径

### Level 1：DataFrame 结构检查

训练：

- 对 5 个陌生 DataFrame 写结构检查报告。
- 识别数字读成 object、日期读成字符串、重复键和异常范围。
- 给每个表写出“一行代表什么”和业务唯一键。

通过标准：开始分析前能主动检查，而不是等报错。

### Level 2：选择与筛选

训练：

- 单列和多列选择各 10 题。
- `loc` / `iloc` 对比 15 题。
- 单条件与复合 mask 15 题。
- `isin` / `between` / `query` 各 5 题。
- 条件赋值 10 题。

通过标准：不靠反复运行猜选区，能提前说出结果类型和行列范围。

### Level 3：清洗

训练：

- 字符串数字转换。
- 日期解析与失败审计。
- 缺失值策略比较。
- 唯一键去重。
- 字符串标准化。
- clean/rejected 双输出。

通过标准：每个删除或填充动作都有业务解释和数量记录。

## 三、Pandas 中高级训练路径

### Level 4：分组与粒度

训练：

- 对 20 个需求先判断 `agg` / `transform` / `filter`。
- Named Aggregation 多字段统计。
- 组内排名、占比和标准化。
- 分组键缺失与分类类型。

通过标准：写代码前能明确结果是一组一行还是原表一行。

### Level 5：连接与形状变换

训练：

- 四种 join 结果预测。
- one-to-one / one-to-many / many-to-one / many-to-many 判断。
- `validate` 与 `indicator`。
- `concat` 行列方向。
- long / wide 转换。
- pivot 重复键调试。

通过标准：merge 前能预测行数范围，merge 后有验证断言。

### Level 6：时间序列

训练：

- 日期解析、时区和排序。
- 每组 `shift` / `diff` / `pct_change`。
- MA5 / MA10 / MA20。
- expanding 累计统计。
- 停牌和缺失前值。
- 前视偏差改错。

通过标准：多股票计算不会跨组，窗口不会使用未来数据。

### Level 7：性能与工程交付

训练：

- 将 `apply(axis=1)` 改成列运算。
- 比较 object / string / category 内存。
- 用 `usecols` / `dtype` 减少读取。
- 分块计算可合并统计。
- 避免循环 concat。
- 让清洗函数可测试、可复用、可审计。

通过标准：能用测量说明优化效果，并用测试证明结果不变。

## 四、调试制度

### 第一步：不要打印整个表

先打印：

```python
print(df.shape)
print(df.columns.tolist())
print(df.index)
print(df.dtypes)
print(df.head(3).to_dict("records"))
```

### 第二步：检查质量

```python
print(df.isna().sum())
print(df.duplicated().sum())
print(df.duplicated(["date", "symbol"]).sum())
print(df[["open", "high", "low", "close", "volume"]].describe())
```

### 第三步：检查粒度变化

在 groupby、pivot、merge 前后记录：

```python
print("before", len(df))
print("unique keys", df[["date", "symbol"]].drop_duplicates().shape[0])
print("after", len(result))
```

### 第四步：构造最小失败样本

保留 3～8 行，必须包含：

- 一条正常数据。
- 一条触发错误的数据。
- 必要的前后行或同组记录。

能在小样本稳定复现后再修复完整数据。

## 五、阶段考试

### Stage 2：Pandas 基础考试

给一份包含以下问题的 CSV：

- 日期字符串格式不统一。
- close 含数字字符串和坏值。
- symbol 有空格和大小写差异。
- date + symbol 有重复。
- volume 有缺失。

要求 90 分钟内：

1. 读取并检查。
2. 写数据契约。
3. 清洗键、日期和数值。
4. 输出 rejected rows。
5. 完成条件筛选和字段计算。
6. 导出稳定 CSV。
7. 写 6 个断言。

### Stage 3：Pandas 中高级考试

要求独立完成：

- 每组多字段 Named Aggregation。
- transform 计算组内相对指标。
- many-to-one merge 并验证基数。
- pivot 构造宽表。
- 每组 rolling 与 pct_change。
- 找出性能较差的 apply 并重构。
- 用测试验证组边界和窗口不足。

### Stage 4：真实项目考试

参见 [股票数据综合实战](./05-stock-data-projects.md)。

## 六、复习周期

| 时间 | 任务 |
|---|---|
| 当天 | 示例模仿 + 输出预测 + 一个错误修复 |
| 次日 | 不看笔记重写核心流程 |
| 第 3 天 | 更换字段和数据粒度做变式 |
| 第 7 天 | 完成跨模块综合题 |
| 第 14 天 | 从空文件重做弱项 |
| 第 30 天 | 用一份新数据完整处理一次 |
