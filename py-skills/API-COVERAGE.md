<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# API 覆盖矩阵

该矩阵用于回答“哪些包已经整理、以什么版本为准、公开 API 是否进入索引”。

- 模块/包数量：**37**
- 公开对象和用户命令：**16770**
- Ruff 规则：**951**
- 标准库基线：Python 3.12
- 快照日期：2026-08-30

| 分类 | 模块/包 | 版本基线 | 数量 | 本地参考 | 官方来源 |
|---|---|---:|---:|---|---|
| 标准库 | os：操作系统接口 | Python 3.12 | 468 | [打开](./StandardLibrary/os/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/os.html) |
| 标准库 | sys：解释器与运行时 | Python 3.12 | 145 | [打开](./StandardLibrary/sys/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/sys.html) |
| 标准库 | pathlib：对象化路径 | Python 3.12 | 69 | [打开](./StandardLibrary/pathlib/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/pathlib.html) |
| 标准库 | json：JSON 编解码 | Python 3.12 | 19 | [打开](./StandardLibrary/json/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/json.html) |
| 标准库 | csv：CSV 表格文本 | Python 3.12 | 39 | [打开](./StandardLibrary/csv/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/csv.html) |
| 标准库 | datetime：日期与时间 | Python 3.12 | 102 | [打开](./StandardLibrary/datetime/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/datetime.html) |
| 标准库 | time：系统时间与计时 | Python 3.12 | 54 | [打开](./StandardLibrary/time/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/time.html) |
| 标准库 | re：正则表达式 | Python 3.12 | 62 | [打开](./StandardLibrary/re/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/re.html) |
| 标准库 | math：实数数学函数 | Python 3.12 | 62 | [打开](./StandardLibrary/math/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/math.html) |
| 标准库 | statistics：基础统计 | Python 3.12 | 34 | [打开](./StandardLibrary/statistics/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/statistics.html) |
| 标准库 | random：伪随机数 | Python 3.12 | 32 | [打开](./StandardLibrary/random/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/random.html) |
| 标准库 | collections：专用容器 | Python 3.12 | 67 | [打开](./StandardLibrary/collections/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/collections.html) |
| 标准库 | itertools：惰性迭代工具 | Python 3.12 | 22 | [打开](./StandardLibrary/itertools/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/itertools.html) |
| 标准库 | functools：高阶函数工具 | Python 3.12 | 16 | [打开](./StandardLibrary/functools/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/functools.html) |
| 标准库 | typing：类型系统 | Python 3.12 | 103 | [打开](./StandardLibrary/typing/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/typing.html) |
| 标准库 | dataclasses：数据类 | Python 3.12 | 13 | [打开](./StandardLibrary/dataclasses/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/dataclasses.html) |
| 标准库 | logging：日志系统 | Python 3.12 | 174 | [打开](./StandardLibrary/logging/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/logging.html) |
| 标准库 | subprocess：子进程管理 | Python 3.12 | 67 | [打开](./StandardLibrary/subprocess/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/subprocess.html) |
| 标准库 | threading：线程并发 | Python 3.12 | 63 | [打开](./StandardLibrary/threading/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/threading.html) |
| 标准库 | multiprocessing：多进程 | Python 3.12 | 151 | [打开](./StandardLibrary/multiprocessing/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/multiprocessing.html) |
| 标准库 | asyncio：异步 I/O | Python 3.12 | 304 | [打开](./StandardLibrary/asyncio/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/asyncio.html) |
| 标准库 | unittest：标准测试框架 | Python 3.12 | 179 | [打开](./StandardLibrary/unittest/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/unittest.html) |
| 标准库 | sqlite3：SQLite DB-API | Python 3.12 | 105 | [打开](./StandardLibrary/sqlite3/01-api-reference.md) | [官方文档](https://docs.python.org/3.12/library/sqlite3.html) |
| 打包工具 | pip：包安装器 | pip 26.2 | 16 | [打开](./Packaging/pip/01-api-reference.md) | [官方文档](https://pip.pypa.io/en/stable/cli/) |
| 打包工具 | setuptools：构建后端 | setuptools 84 | 18 | [打开](./Packaging/setuptools/01-api-reference.md) | [官方文档](https://setuptools.pypa.io/en/latest/userguide/index.html) |
| 打包工具 | wheel：Wheel 文件工具 | wheel 0.48 | 5 | [打开](./Packaging/wheel/01-api-reference.md) | [官方文档](https://wheel.readthedocs.io/en/stable/) |
| 第三方 | Requests：同步 HTTP 客户端 | Requests 2.34 | 164 | [打开](./ThirdParty/Requests/01-api-reference.md) | [官方文档](https://requests.readthedocs.io/en/latest/api/) |
| 第三方 | HTTPX：同步与异步 HTTP 客户端 | HTTPX 0.28 | 428 | [打开](./ThirdParty/HTTPX/01-api-reference.md) | [官方文档](https://www.python-httpx.org/api/) |
| 第三方 | pytest：测试框架 | pytest 9.1 | 488 | [打开](./ThirdParty/pytest/01-api-reference.md) | [官方文档](https://docs.pytest.org/en/stable/reference/index.html) |
| 第三方 | Ruff：Lint 与格式化 | Ruff current | 8 | [打开](./ThirdParty/Ruff/01-api-reference.md) | [官方文档](https://docs.astral.sh/ruff/) |
| 第三方 | python-dotenv：.env 加载 | python-dotenv 1.2 | 14 | [打开](./ThirdParty/python-dotenv/01-api-reference.md) | [官方文档](https://bbc2.github.io/python-dotenv/reference/) |
| 第三方 | Pydantic：数据验证与序列化 | Pydantic 2.13 | 1009 | [打开](./ThirdParty/Pydantic/01-api-reference.md) | [官方文档](https://docs.pydantic.dev/latest/api/) |
| 第三方 | IPython：增强交互式 Python | IPython 9.17 | 1388 | [打开](./ThirdParty/IPython/01-api-reference.md) | [官方文档](https://ipython.readthedocs.io/en/stable/api/index.html) |
| 第三方 | JupyterLab：交互式开发环境 | JupyterLab 4.6 | 7 | [打开](./ThirdParty/JupyterLab/01-api-reference.md) | [官方文档](https://jupyterlab.readthedocs.io/en/stable/) |
| 第三方 | Matplotlib：Python 绘图 | Matplotlib 3.11 | 6353 | [打开](./ThirdParty/Matplotlib/01-api-reference.md) | [官方文档](https://matplotlib.org/stable/api/index.html) |
| 数值/数据 | NumPy 完整公开 API | NumPy 2.5 | 2364 | [打开](./Numpy/05-complete-api-reference.md) | [官方文档](https://numpy.org/doc/stable/reference/index.html) |
| 数值/数据 | Pandas 完整公开 API | Pandas 3.0 | 2158 | [打开](./Pandas/06-complete-api-reference.md) | [官方文档](https://pandas.pydata.org/docs/reference/index.html) |

## 覆盖口径

1. Sphinx 项目以官方 `objects.inv` 中的公开 Python 对象为准。
2. HTTPX 使用顶层公开导出及公开类成员，因为其文档站不提供 Sphinx inventory。
3. pip、wheel、Ruff、JupyterLab 以稳定用户命令为准；它们的内部 Python 模块不是承诺兼容的公共 API。
4. pytest 额外收录官方 hookspec 与全部内置 fixture；Ruff 另有完整规则索引。
5. 下划线私有对象默认排除；pytest 官方 hookspec 是明确的公共插件接口例外。
