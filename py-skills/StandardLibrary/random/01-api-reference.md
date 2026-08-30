<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# random：伪随机数

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/random.html](https://docs.python.org/3.12/library/random.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **32** 个公开对象或用户命令。私有下划线接口不收录。

## `random`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`random`](https://docs.python.org/3.12/library/random.html#module-random) | 模块 | `` | Random variable generators. |
| [`random.betavariate`](https://docs.python.org/3.12/library/random.html#random.betavariate) | 函数 | `(alpha, beta)` | Beta distribution. |
| [`random.binomialvariate`](https://docs.python.org/3.12/library/random.html#random.binomialvariate) | 函数 | `(n=1, p=0.5)` | Binomial random variable. |
| [`random.choice`](https://docs.python.org/3.12/library/random.html#random.choice) | 函数 | `(seq)` | Choose a random element from a non-empty sequence. |
| [`random.choices`](https://docs.python.org/3.12/library/random.html#random.choices) | 函数 | `(population, weights=None, *, cum_weights=None, k=1)` | Return a k sized list of population elements chosen with replacement. |
| [`random.expovariate`](https://docs.python.org/3.12/library/random.html#random.expovariate) | 函数 | `(lambd=1.0)` | Exponential distribution. |
| [`random.gammavariate`](https://docs.python.org/3.12/library/random.html#random.gammavariate) | 函数 | `(alpha, beta)` | Gamma distribution.  Not the gamma function! |
| [`random.gauss`](https://docs.python.org/3.12/library/random.html#random.gauss) | 函数 | `(mu=0.0, sigma=1.0)` | Gaussian distribution. |
| [`random.getrandbits`](https://docs.python.org/3.12/library/random.html#random.getrandbits) | 函数 | `(k, /)` | getrandbits(k) -> x.  Generates an int with k random bits. |
| [`random.getstate`](https://docs.python.org/3.12/library/random.html#random.getstate) | 函数 | `()` | Return internal state; can be passed to setstate() later. |
| [`random.lognormvariate`](https://docs.python.org/3.12/library/random.html#random.lognormvariate) | 函数 | `(mu, sigma)` | Log normal distribution. |
| [`random.normalvariate`](https://docs.python.org/3.12/library/random.html#random.normalvariate) | 函数 | `(mu=0.0, sigma=1.0)` | Normal distribution. |
| [`random.paretovariate`](https://docs.python.org/3.12/library/random.html#random.paretovariate) | 函数 | `(alpha)` | Pareto distribution.  alpha is the shape parameter. |
| [`random.randbytes`](https://docs.python.org/3.12/library/random.html#random.randbytes) | 函数 | `(n)` | Generate n random bytes. |
| [`random.randint`](https://docs.python.org/3.12/library/random.html#random.randint) | 函数 | `(a, b)` | Return random integer in range [a, b], including both end points. |
| [`random.Random`](https://docs.python.org/3.12/library/random.html#random.Random) | 类 | `(x=None)` | Random number generator base class used by bound module functions. |
| [`random.random`](https://docs.python.org/3.12/library/random.html#random.random) | 函数 | `()` | random() -> x in the interval [0, 1). |
| [`random.randrange`](https://docs.python.org/3.12/library/random.html#random.randrange) | 函数 | `(start, stop=None, step=1)` | Choose a random item from range(stop) or range(start, stop[, step]). |
| [`random.sample`](https://docs.python.org/3.12/library/random.html#random.sample) | 函数 | `(population, k, *, counts=None)` | Chooses k unique random elements from a population sequence. |
| [`random.seed`](https://docs.python.org/3.12/library/random.html#random.seed) | 函数 | `(a=None, version=2)` | Initialize internal state from a seed. |
| [`random.setstate`](https://docs.python.org/3.12/library/random.html#random.setstate) | 函数 | `(state)` | Restore internal state from object returned by getstate(). |
| [`random.shuffle`](https://docs.python.org/3.12/library/random.html#random.shuffle) | 函数 | `(x)` | Shuffle list x in place, and return None. |
| [`random.SystemRandom`](https://docs.python.org/3.12/library/random.html#random.SystemRandom) | 类 | `(x=None)` | Alternate random number generator using sources provided by the operating system (such as /dev/urandom on Unix or CryptGenRandom on Windows). |
| [`random.triangular`](https://docs.python.org/3.12/library/random.html#random.triangular) | 函数 | `(low=0.0, high=1.0, mode=None)` | Triangular distribution. |
| [`random.uniform`](https://docs.python.org/3.12/library/random.html#random.uniform) | 函数 | `(a, b)` | Get a random number in the range [a, b) or [a, b] depending on rounding. |
| [`random.vonmisesvariate`](https://docs.python.org/3.12/library/random.html#random.vonmisesvariate) | 函数 | `(mu, kappa)` | Circular data distribution. |
| [`random.weibullvariate`](https://docs.python.org/3.12/library/random.html#random.weibullvariate) | 函数 | `(alpha, beta)` | Weibull distribution. |

## `random.Random`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`random.Random.getrandbits`](https://docs.python.org/3.12/library/random.html#random.Random.getrandbits) | 方法 | `(self, k, /)` | getrandbits(k) -> x.  Generates an int with k random bits. |
| [`random.Random.getstate`](https://docs.python.org/3.12/library/random.html#random.Random.getstate) | 方法 | `(self)` | Return internal state; can be passed to setstate() later. |
| [`random.Random.random`](https://docs.python.org/3.12/library/random.html#random.Random.random) | 方法 | `(self, /)` | random() -> x in the interval [0, 1). |
| [`random.Random.seed`](https://docs.python.org/3.12/library/random.html#random.Random.seed) | 方法 | `(self, a=None, version=2)` | Initialize internal state from a seed. |
| [`random.Random.setstate`](https://docs.python.org/3.12/library/random.html#random.Random.setstate) | 方法 | `(self, state)` | Restore internal state from object returned by getstate(). |
