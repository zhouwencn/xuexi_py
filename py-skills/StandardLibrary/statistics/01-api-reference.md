<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# statistics：基础统计

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/statistics.html](https://docs.python.org/3.12/library/statistics.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **34** 个公开对象或用户命令。私有下划线接口不收录。

## `statistics`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`statistics`](https://docs.python.org/3.12/library/statistics.html#module-statistics) | 模块 | `` | Basic statistics module. |
| [`statistics.correlation`](https://docs.python.org/3.12/library/statistics.html#statistics.correlation) | 函数 | `(x, y, /, *, method='linear')` | Pearson's correlation coefficient |
| [`statistics.covariance`](https://docs.python.org/3.12/library/statistics.html#statistics.covariance) | 函数 | `(x, y, /)` | Covariance |
| [`statistics.fmean`](https://docs.python.org/3.12/library/statistics.html#statistics.fmean) | 函数 | `(data, weights=None)` | Convert data to floats and compute the arithmetic mean. |
| [`statistics.geometric_mean`](https://docs.python.org/3.12/library/statistics.html#statistics.geometric_mean) | 函数 | `(data)` | Convert data to floats and compute the geometric mean. |
| [`statistics.harmonic_mean`](https://docs.python.org/3.12/library/statistics.html#statistics.harmonic_mean) | 函数 | `(data, weights=None)` | Return the harmonic mean of data. |
| [`statistics.linear_regression`](https://docs.python.org/3.12/library/statistics.html#statistics.linear_regression) | 函数 | `(x, y, /, *, proportional=False)` | Slope and intercept for simple linear regression. |
| [`statistics.mean`](https://docs.python.org/3.12/library/statistics.html#statistics.mean) | 函数 | `(data)` | Return the sample arithmetic mean of data. |
| [`statistics.median`](https://docs.python.org/3.12/library/statistics.html#statistics.median) | 函数 | `(data)` | Return the median (middle value) of numeric data. |
| [`statistics.median_grouped`](https://docs.python.org/3.12/library/statistics.html#statistics.median_grouped) | 函数 | `(data, interval=1.0)` | Estimates the median for numeric data binned around the midpoints of consecutive, fixed-width intervals. |
| [`statistics.median_high`](https://docs.python.org/3.12/library/statistics.html#statistics.median_high) | 函数 | `(data)` | Return the high median of data. |
| [`statistics.median_low`](https://docs.python.org/3.12/library/statistics.html#statistics.median_low) | 函数 | `(data)` | Return the low median of numeric data. |
| [`statistics.mode`](https://docs.python.org/3.12/library/statistics.html#statistics.mode) | 函数 | `(data)` | Return the most common data point from discrete or nominal data. |
| [`statistics.multimode`](https://docs.python.org/3.12/library/statistics.html#statistics.multimode) | 函数 | `(data)` | Return a list of the most frequently occurring values. |
| [`statistics.NormalDist`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist) | 类 | `(mu=0.0, sigma=1.0)` | Normal distribution of a random variable |
| [`statistics.pstdev`](https://docs.python.org/3.12/library/statistics.html#statistics.pstdev) | 函数 | `(data, mu=None)` | Return the square root of the population variance. |
| [`statistics.pvariance`](https://docs.python.org/3.12/library/statistics.html#statistics.pvariance) | 函数 | `(data, mu=None)` | Return the population variance of ``data``. |
| [`statistics.quantiles`](https://docs.python.org/3.12/library/statistics.html#statistics.quantiles) | 函数 | `(data, *, n=4, method='exclusive')` | Divide *data* into *n* continuous intervals with equal probability. |
| [`statistics.StatisticsError`](https://docs.python.org/3.12/library/statistics.html#statistics.StatisticsError) | 异常 | `` | Inappropriate argument value (of correct type). |
| [`statistics.stdev`](https://docs.python.org/3.12/library/statistics.html#statistics.stdev) | 函数 | `(data, xbar=None)` | Return the square root of the sample variance. |
| [`statistics.variance`](https://docs.python.org/3.12/library/statistics.html#statistics.variance) | 函数 | `(data, xbar=None)` | Return the sample variance of data. |

## `statistics.NormalDist`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`statistics.NormalDist.cdf`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.cdf) | 方法 | `(self, x)` | Cumulative distribution function.  P(X <= x) |
| [`statistics.NormalDist.from_samples`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.from_samples) | 方法 | `` | Make a normal distribution instance from sample data. |
| [`statistics.NormalDist.inv_cdf`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.inv_cdf) | 方法 | `(self, p)` | Inverse cumulative distribution function.  x : P(X <= x) = p |
| [`statistics.NormalDist.mean`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.mean) | 属性 | `` | Arithmetic mean of the normal distribution. |
| [`statistics.NormalDist.median`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.median) | 属性 | `` | Return the median of the normal distribution |
| [`statistics.NormalDist.mode`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.mode) | 属性 | `` | Return the mode of the normal distribution |
| [`statistics.NormalDist.overlap`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.overlap) | 方法 | `(self, other)` | Compute the overlapping coefficient (OVL) between two normal distributions. |
| [`statistics.NormalDist.pdf`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.pdf) | 方法 | `(self, x)` | Probability density function.  P(x <= X < x+dx) / dx |
| [`statistics.NormalDist.quantiles`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.quantiles) | 方法 | `(self, n=4)` | Divide into *n* continuous intervals with equal probability. |
| [`statistics.NormalDist.samples`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.samples) | 方法 | `(self, n, *, seed=None)` | Generate *n* samples for a given mean and standard deviation. |
| [`statistics.NormalDist.stdev`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.stdev) | 属性 | `` | Standard deviation of the normal distribution. |
| [`statistics.NormalDist.variance`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.variance) | 属性 | `` | Square of the standard deviation. |
| [`statistics.NormalDist.zscore`](https://docs.python.org/3.12/library/statistics.html#statistics.NormalDist.zscore) | 方法 | `(self, x)` | Compute the Standard Score.  (x - mean) / stdev |
