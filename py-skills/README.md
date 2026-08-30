# Python 常用模块与依赖学习体系

这套资料以 Python 语言和常用开发能力为核心。每个模块独立成目录，学习入口负责建立概念和工作流，API 参考负责防止遗漏。

版本基线日期：**2026-08-30**。标准库使用 Python 3.12；第三方库版本写在各自入口。

## 使用方法

详细训练方法见：[Python 模块与依赖学习方法](./LEARNING-METHOD.md)。

1. 先读模块 README，理解它解决的问题。
2. 运行最小示例并主动修改输入。
3. 使用 API 参考查缺补漏，不按字母顺序死背。
4. 完成边界、报错和综合任务后再进入下一个模块。

## Python 3.12 标准库

- [asyncio：异步 I/O](./StandardLibrary/asyncio/README.md)
- [collections：专用容器](./StandardLibrary/collections/README.md)
- [csv：CSV 表格文本](./StandardLibrary/csv/README.md)
- [dataclasses：数据类](./StandardLibrary/dataclasses/README.md)
- [datetime：日期与时间](./StandardLibrary/datetime/README.md)
- [functools：高阶函数工具](./StandardLibrary/functools/README.md)
- [itertools：惰性迭代工具](./StandardLibrary/itertools/README.md)
- [json：JSON 编解码](./StandardLibrary/json/README.md)
- [logging：日志系统](./StandardLibrary/logging/README.md)
- [math：实数数学函数](./StandardLibrary/math/README.md)
- [multiprocessing：多进程](./StandardLibrary/multiprocessing/README.md)
- [os：操作系统接口](./StandardLibrary/os/README.md)
- [pathlib：对象化路径](./StandardLibrary/pathlib/README.md)
- [random：伪随机数](./StandardLibrary/random/README.md)
- [re：正则表达式](./StandardLibrary/re/README.md)
- [sqlite3：SQLite DB-API](./StandardLibrary/sqlite3/README.md)
- [statistics：基础统计](./StandardLibrary/statistics/README.md)
- [subprocess：子进程管理](./StandardLibrary/subprocess/README.md)
- [sys：解释器与运行时](./StandardLibrary/sys/README.md)
- [threading：线程并发](./StandardLibrary/threading/README.md)
- [time：系统时间与计时](./StandardLibrary/time/README.md)
- [typing：类型系统](./StandardLibrary/typing/README.md)
- [unittest：标准测试框架](./StandardLibrary/unittest/README.md)

## 打包与依赖工具

- [pip：包安装器](./Packaging/pip/README.md)
- [setuptools：构建后端](./Packaging/setuptools/README.md)
- [wheel：Wheel 文件工具](./Packaging/wheel/README.md)

## 常用第三方库与工具

- [HTTPX：同步与异步 HTTP 客户端](./ThirdParty/HTTPX/README.md)
- [IPython：增强交互式 Python](./ThirdParty/IPython/README.md)
- [JupyterLab：交互式开发环境](./ThirdParty/JupyterLab/README.md)
- [Matplotlib：Python 绘图](./ThirdParty/Matplotlib/README.md)
- [Pydantic：数据验证与序列化](./ThirdParty/Pydantic/README.md)
- [pytest：测试框架](./ThirdParty/pytest/README.md)
- [python-dotenv：.env 加载](./ThirdParty/python-dotenv/README.md)
- [Requests：同步 HTTP 客户端](./ThirdParty/Requests/README.md)
- [Ruff：Lint 与格式化](./ThirdParty/Ruff/README.md)

## 数值与表格数据

- [NumPy 学习入口](./Numpy/README.md)
- [Pandas 学习入口](./Pandas/README.md)

## 推荐学习顺序

```text
pathlib / json / csv / datetime
  ↓
collections / itertools / functools / typing / dataclasses
  ↓
logging / subprocess / sqlite3 / unittest / pytest
  ↓
threading / multiprocessing / asyncio / HTTPX
  ↓
NumPy / Pandas / Matplotlib
  ↓
Pydantic / packaging / 工程工具
```

## API 完整性规则

- [API 覆盖矩阵](./API-COVERAGE.md)
- 收录官方文档中的稳定公开 Python 对象或用户命令。
- 下划线开头的私有接口不作为稳定 API。
- 废弃接口保留在对应版本的官方索引中，学习时以替代方案为主。
- NumPy、Pandas、Matplotlib 等大型库通过完整索引保证覆盖，通过学习路径区分掌握优先级。
