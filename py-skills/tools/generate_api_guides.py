"""根据官方文档清单生成 Python 模块学习入口和公开 API 索引。

运行方式：
    python py-skills/tools/generate_api_guides.py

生成文件是学习资料的一部分，需要提交 Git。脚本只覆盖带有生成标记的文件，
不会修改 NumPy/Pandas 已有的人工学习路线。
"""

from __future__ import annotations

import argparse
import html
import importlib
import inspect
import io
import re
import urllib.parse
import urllib.request
import zlib
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


ROOT = Path(__file__).resolve().parents[1]
GENERATED_NOTICE = "<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->"
PYTHON_INVENTORY = "https://docs.python.org/3.12/objects.inv"


@dataclass(frozen=True)
class Guide:
    category: str
    slug: str
    title: str
    version: str
    import_name: str | None
    official_url: str
    inventory_url: str | None
    prefixes: tuple[str, ...]
    summary: str
    concepts: tuple[str, ...]
    workflows: tuple[str, ...]
    pitfalls: tuple[str, ...]
    example: str


def std(
    slug: str,
    title: str,
    prefixes: tuple[str, ...],
    summary: str,
    concepts: tuple[str, ...],
    workflows: tuple[str, ...],
    pitfalls: tuple[str, ...],
    example: str,
) -> Guide:
    return Guide(
        category="StandardLibrary",
        slug=slug,
        title=title,
        version="Python 3.12",
        import_name=prefixes[0],
        official_url=f"https://docs.python.org/3.12/library/{slug}.html",
        inventory_url=PYTHON_INVENTORY,
        prefixes=prefixes,
        summary=summary,
        concepts=concepts,
        workflows=workflows,
        pitfalls=pitfalls,
        example=example,
    )


GUIDES: tuple[Guide, ...] = (
    std("os", "os：操作系统接口", ("os", "os.path"), "连接 Python 与操作系统环境、进程、文件描述符和路径能力。日常路径处理优先 pathlib，只有需要底层系统接口时再直接使用 os。", ("环境变量与进程环境", "目录、权限和文件描述符", "os.path 的字符串路径模型", "跨平台差异"), ("读取和校验环境变量", "遍历或创建目录", "执行原子重命名与权限操作"), ("不要拼接不可信路径", "不要把 os.system 用于外部输入", "Windows 与 POSIX API 可用性不同"), 'from os import environ\n\napi_url = environ.get("API_URL", "http://127.0.0.1:8000")\nprint(api_url)'),
    std("sys", "sys：解释器与运行时", ("sys",), "访问解释器参数、模块缓存、导入路径、标准流和运行时限制。它描述的是当前 Python 进程，而不是通用操作系统接口。", ("argv 与退出码", "stdin/stdout/stderr", "sys.path 与 sys.modules", "解释器和平台信息"), ("编写命令行入口", "诊断导入问题", "检查运行时版本和字节序"), ("不要随意修改 sys.path", "不要删除不理解的 sys.modules 项", "SystemExit 应由程序边界处理"), 'import sys\n\nprint(sys.version_info)\nprint(sys.argv[1:])'),
    std("pathlib", "pathlib：对象化路径", ("pathlib",), "用 Path 对象表达路径组合、查询、遍历和文件读写，是现代 Python 文件路径操作的首选。", ("纯路径与具体路径", "路径组合和标准化", "遍历、匹配和元数据", "文本/二进制便捷读写"), ("构造跨平台路径", "查找指定后缀文件", "安全创建目录并读写配置"), ("resolve 与 absolute 不等价", "glob 结果是迭代器", "写入前确认覆盖语义"), 'from pathlib import Path\n\nconfig = Path("config") / "app.json"\nconfig.parent.mkdir(parents=True, exist_ok=True)\nconfig.write_text("{}", encoding="utf-8")'),
    std("json", "json：JSON 编解码", ("json",), "在 JSON 文本、文件流和 Python 基础对象之间转换；重点理解序列化边界、数字精度、编码和自定义类型。", ("loads/dumps 与 load/dump", "编码器和解码器", "ensure_ascii、indent、sort_keys", "自定义 default/object_hook"), ("读取 API 响应", "保存 UTF-8 配置", "扩展日期等非原生类型"), ("JSON 不是任意 Python 对象格式", "NaN 默认行为不完全符合严格 JSON", "不要反序列化后跳过结构校验"), 'import json\n\npayload = {"name": "Ada", "active": True}\ntext = json.dumps(payload, ensure_ascii=False)\nprint(json.loads(text))'),
    std("csv", "csv：CSV 表格文本", ("csv",), "按方言处理 CSV 行列，支持列表行和字典行。CSV 没有统一类型系统，读取后通常仍需显式转换和校验。", ("reader/writer", "DictReader/DictWriter", "dialect 与 Sniffer", "newline 和编码"), ("读取带表头数据", "稳定导出列顺序", "识别分隔符和引号规则"), ("打开文件应使用 newline=''", "所有字段默认是字符串", "Sniffer 只是启发式判断"), 'import csv\nfrom io import StringIO\n\nrows = list(csv.DictReader(StringIO("name,score\\nAda,98\\n")))\nprint(rows)'),
    std("datetime", "datetime：日期与时间", ("datetime",), "处理 date、time、datetime、timedelta 和时区。关键不是格式化，而是区分朴素时间、感知时间、时间点和持续时间。", ("date/time/datetime", "timedelta 运算", "tzinfo/timezone", "解析与格式化"), ("生成 UTC 时间戳", "计算日期区间", "解析 ISO 8601 字符串"), ("不要混算 naive 与 aware datetime", "月份不能用固定天数代替", "本地时间存在 DST 歧义"), 'from datetime import UTC, datetime, timedelta\n\nnow = datetime.now(UTC)\nexpires_at = now + timedelta(minutes=30)\nprint(expires_at.isoformat())'),
    std("time", "time：系统时间与计时", ("time",), "提供时间戳、结构化时间、休眠和高精度计时器。业务日期优先 datetime，性能测量优先 perf_counter。", ("wall clock 与 monotonic clock", "时间戳和 struct_time", "sleep", "perf_counter/process_time"), ("测量耗时", "实现简单退避", "转换时间戳"), ("不要用 time.time 测量可能受校时影响的耗时", "sleep 不保证精确唤醒", "时区转换优先 datetime/zoneinfo"), 'from time import perf_counter\n\nstart = perf_counter()\nsum(range(100_000))\nprint(perf_counter() - start)'),
    std("re", "re：正则表达式", ("re",), "编译和执行正则表达式，用于有明确模式的文本匹配、提取和替换；结构化格式优先专用解析器。", ("Pattern 与 Match", "search/match/fullmatch", "findall/finditer", "split/sub 与 flags"), ("校验完整格式", "提取命名分组", "批量规范化文本"), ("优先 raw string", "避免灾难性回溯", "不要用正则解析复杂 HTML"), 'import re\n\npattern = re.compile(r"(?P<name>[a-z]+)=(?P<value>\\d+)")\nmatch = pattern.fullmatch("count=42")\nprint(match.groupdict() if match else None)'),
    std("math", "math：实数数学函数", ("math",), "提供 C 标准支持的实数数学函数、常量和精确辅助运算。复数使用 cmath，批量数组运算使用 NumPy。", ("数论和组合", "浮点比较与分类", "幂、对数和三角函数", "常量与聚合"), ("可靠比较浮点数", "组合数和最大公约数", "几何及概率计算"), ("domain error 会抛 ValueError", "isclose 需要理解容差", "不要用 float 处理精确金额"), 'import math\n\nprint(math.comb(10, 3))\nprint(math.isclose(0.1 + 0.2, 0.3))'),
    std("statistics", "statistics：基础统计", ("statistics",), "为普通 Python 数值序列提供均值、中位数、方差、相关、线性回归和分布工具，适合小规模教学与脚本。", ("中心趋势", "离散程度", "协方差和相关", "NormalDist 与核密度"), ("生成描述统计", "比较样本与总体方差", "构建简单正态分布模型"), ("空数据和样本不足会报错", "mean 对异常值敏感", "大规模分析优先 NumPy/Pandas"), 'from statistics import mean, median, pstdev\n\nvalues = [10, 12, 13, 15]\nprint(mean(values), median(values), pstdev(values))'),
    std("random", "random：伪随机数", ("random",), "生成可复现的伪随机数、抽样和常见分布；安全 token、密码和密钥必须使用 secrets。", ("模块级生成器与 Random 实例", "seed 和状态", "序列抽样", "概率分布"), ("构造测试数据", "随机抽样与洗牌", "隔离可复现随机状态"), ("不要用于安全用途", "全局 seed 会耦合测试", "choices 与 sample 是否放回不同"), 'from random import Random\n\nrng = Random(42)\nprint(rng.sample(range(100), k=5))'),
    std("collections", "collections：专用容器", ("collections", "collections.abc"), "补充 dict/list/tuple，提供计数器、双端队列、带默认值映射、命名元组、映射视图和容器抽象基类。", ("Counter/defaultdict/deque", "namedtuple", "ChainMap/UserDict 等包装器", "collections.abc 协议"), ("计数和 Top-N", "高效队列", "运行时判断容器协议"), ("Counter 的零/负计数不会自动删除", "defaultdict 读取会创建键", "运行时检查协议不等于静态类型提示"), 'from collections import Counter, deque\n\ncounts = Counter("abracadabra")\nqueue = deque([1, 2, 3])\nprint(counts.most_common(2), queue.popleft())'),
    std("itertools", "itertools：惰性迭代工具", ("itertools",), "用组合式、惰性的迭代器构建高效数据管线，包括无限迭代、最短终止和组合生成。", ("无限迭代器", "终止于最短输入", "组合迭代器", "groupby/tee/batched"), ("分批处理数据", "组合多个迭代来源", "生成排列组合"), ("迭代器通常只能消费一次", "groupby 只合并相邻键", "tee 可能缓存大量数据"), 'from itertools import batched, chain\n\nprint(list(batched(chain([1, 2], [3, 4, 5]), 2)))'),
    std("functools", "functools：高阶函数工具", ("functools",), "操作和增强可调用对象，涵盖缓存、偏函数、比较转换、泛型函数和装饰器元数据。", ("wraps/update_wrapper", "cache/lru_cache/cached_property", "partial/partialmethod", "singledispatch/total_ordering/reduce"), ("编写保持元数据的装饰器", "缓存纯函数", "预绑定函数参数"), ("缓存可变或无界输入可能占满内存", "cached_property 与属性失效要设计", "singledispatch 只看第一个参数类型"), 'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n: int) -> int:\n    return n if n < 2 else fib(n - 1) + fib(n - 2)\n\nprint(fib(20))'),
    std("typing", "typing：类型系统", ("typing",), "为静态分析、编辑器和运行时框架表达类型关系。类型提示不会自动验证或转换普通 Python 值。", ("Union/Literal/Callable", "TypeVar/Generic/Protocol", "TypedDict/NamedTuple", "类型守卫、重载和注解工具"), ("描述函数和容器边界", "定义结构化协议", "为泛型组件保留类型信息"), ("不要把 Any 当作逃生口", "运行时 isinstance 对多数 typing 构造无效", "过度复杂注解会降低可读性"), 'from typing import Protocol\n\nclass SupportsClose(Protocol):\n    def close(self) -> None: ...\n\ndef shutdown(resource: SupportsClose) -> None:\n    resource.close()'),
    std("dataclasses", "dataclasses：数据类", ("dataclasses",), "根据字段注解生成初始化、比较和显示等样板方法，适合以数据为主的普通 Python 对象。", ("@dataclass 参数", "field/default_factory", "冻结、排序和 slots", "转换、复制和字段反射"), ("定义轻量领域数据", "避免可变默认值", "按字段生成比较或哈希"), ("asdict 会递归深拷贝", "frozen 不是绝对不可变", "unsafe_hash 需要理解相等性约束"), 'from dataclasses import dataclass, field\n\n@dataclass(slots=True)\nclass Course:\n    title: str\n    tags: list[str] = field(default_factory=list)'),
    std("logging", "logging：日志系统", ("logging", "logging.config", "logging.handlers"), "通过 Logger、Handler、Filter、Formatter 和配置系统记录可分级、可路由的运行信息。", ("logger 层级和传播", "handler 与 formatter", "dictConfig/fileConfig", "轮转、队列和网络 handlers"), ("应用入口统一配置日志", "库模块使用命名 logger", "多线程/多进程安全写日志"), ("不要记录密码和 token", "不要在库导入时调用 basicConfig", "重复 handler 会造成重复日志"), 'import logging\n\nlogging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")\nlogger = logging.getLogger(__name__)\nlogger.info("service started")'),
    std("subprocess", "subprocess：子进程管理", ("subprocess",), "创建外部进程、传递参数、捕获输出和管理退出状态；优先使用 run，复杂交互再使用 Popen。", ("run 与 CompletedProcess", "Popen 生命周期", "PIPE/DEVNULL/STDOUT", "超时、信号和退出码"), ("安全执行参数列表", "捕获文本输出", "管理长运行子进程"), ("外部输入不要配合 shell=True", "必须处理超时和非零退出码", "PIPE 双向通信可能死锁"), 'import subprocess\n\nresult = subprocess.run(["python", "--version"], capture_output=True, text=True, check=True)\nprint(result.stdout or result.stderr)'),
    std("threading", "threading：线程并发", ("threading",), "在同一进程内通过线程并发处理等待型任务，并用同步原语保护共享状态。", ("Thread 生命周期", "Lock/RLock/Condition", "Event/Semaphore/Barrier", "thread-local 与异常钩子"), ("并发 I/O", "协调生产者和消费者", "保护共享可变状态"), ("GIL 不让纯 Python CPU 任务自动并行", "锁顺序不一致会死锁", "daemon 线程可能来不及清理"), 'from threading import Thread\n\ndef work(name: str) -> None:\n    print(name)\n\nthread = Thread(target=work, args=("worker",))\nthread.start()\nthread.join()'),
    std("multiprocessing", "multiprocessing：多进程", ("multiprocessing", "multiprocessing.connection", "multiprocessing.managers", "multiprocessing.pool", "multiprocessing.shared_memory"), "通过独立进程利用多核并隔离内存，提供进程、池、队列、管道、同步、管理器和共享内存。", ("Process 与启动方式", "Pool", "Queue/Pipe", "Manager/shared_memory"), ("并行 CPU 密集任务", "跨进程消息通信", "共享大块二进制数据"), ("入口必须使用 if __name__ == '__main__'", "可传对象必须可序列化", "共享状态和进程池需要显式关闭"), 'from multiprocessing import Pool\n\ndef square(value: int) -> int:\n    return value * value\n\nif __name__ == "__main__":\n    with Pool() as pool:\n        print(pool.map(square, [1, 2, 3]))'),
    std("asyncio", "asyncio：异步 I/O", ("asyncio",), "用事件循环调度协程、Task、Future、异步流和同步原语，适合大量并发等待型工作。", ("协程、Task 与 Future", "结构化并发和取消", "超时、队列与同步原语", "streams、子进程和事件循环"), ("并发请求多个 I/O", "限制并发和实现背压", "正确传播取消和超时"), ("不要在事件循环中执行阻塞函数", "create_task 后要保留任务生命周期", "CancelledError 通常应继续抛出"), 'import asyncio\n\nasync def main() -> None:\n    async with asyncio.TaskGroup() as group:\n        group.create_task(asyncio.sleep(0.1))\n        group.create_task(asyncio.sleep(0.2))\n\nasyncio.run(main())'),
    std("unittest", "unittest：标准测试框架", ("unittest", "unittest.mock"), "标准库的 xUnit 测试框架，并提供断言、fixture、发现、跳过、参数化子测试和 mock/patch。", ("TestCase 与断言", "setUp/tearDown", "suite/loader/runner", "Mock/patch/side_effect"), ("组织可发现测试", "隔离外部依赖", "验证调用和异常"), ("patch 必须作用在被查找的位置", "不要 mock 被测核心逻辑", "测试之间不能共享可变状态"), 'from unittest import TestCase\n\nclass AddTests(TestCase):\n    def test_add(self) -> None:\n        self.assertEqual(1 + 2, 3)'),
    std("sqlite3", "sqlite3：SQLite DB-API", ("sqlite3",), "使用 Python DB-API 2.0 访问嵌入式 SQLite，覆盖连接、游标、事务、行工厂、适配器、备份和扩展。", ("Connection/Cursor", "参数化 SQL", "事务和隔离", "row_factory、adapter/converter"), ("建立本地持久化", "执行参数化 CRUD", "备份或导入内存数据库"), ("不要拼接 SQL 参数", "连接默认有线程限制", "DDL/事务行为需要明确验证"), 'import sqlite3\n\nwith sqlite3.connect(":memory:") as connection:\n    connection.execute("CREATE TABLE users(name TEXT)")\n    connection.execute("INSERT INTO users VALUES (?)", ("Ada",))\n    print(connection.execute("SELECT name FROM users").fetchone())'),
    Guide("Packaging", "pip", "pip：包安装器", "pip 26.2", "pip", "https://pip.pypa.io/en/stable/cli/", "https://pip.pypa.io/en/stable/objects.inv", ("pip",), "安装、卸载、解析、检查和下载 Python 分发包。用户接口以 python -m pip 命令为主，pip 的内部 Python 模块不是稳定公共 API。", ("需求说明符", "依赖解析", "可重复与安全安装", "缓存和配置"), ("安装项目依赖", "检查环境一致性", "下载或构建 wheel"), ("始终确认当前解释器", "不要依赖 pip freeze 代替项目设计", "谨慎使用 --force-reinstall"), 'python -m pip install -e ".[dev]"\npython -m pip check\npython -m pip list --outdated'),
    Guide("Packaging", "setuptools", "setuptools：构建后端", "setuptools 84", "setuptools", "https://setuptools.pypa.io/en/latest/userguide/index.html", "https://setuptools.pypa.io/en/latest/objects.inv", ("setuptools",), "读取 pyproject.toml 等配置，发现包、处理元数据、依赖、入口点和数据文件，并构建 sdist/wheel。", ("build backend", "包发现", "项目元数据和依赖", "entry points 与 package data"), ("配置可安装项目", "声明命令行入口", "构建源码和 wheel 分发"), ("不要直接运行 setup.py", "包数据必须显式纳入", "editable install 与普通安装行为不同"), '[build-system]\nrequires = ["setuptools>=75"]\nbuild-backend = "setuptools.build_meta"'),
    Guide("Packaging", "wheel", "wheel：Wheel 文件工具", "wheel 0.48", "wheel", "https://wheel.readthedocs.io/en/stable/", "https://wheel.readthedocs.io/en/stable/objects.inv", ("wheel",), "检查、解包、重打包、转换和修改 .whl 文件标签。现代 setuptools 构建 wheel 不再要求单独安装 wheel。", ("PEP 427", "wheel 文件名和兼容标签", "unpack/pack", "info/tags/convert"), ("检查 wheel 内容", "重打包已修改 wheel", "分析平台兼容标签"), ("不要手改 RECORD 后直接压缩", "标签必须反映真实兼容性", "wheel 不是运行时虚拟环境"), 'wheel unpack dist/example.whl\nwheel info dist/example.whl'),
    Guide("ThirdParty", "Requests", "Requests：同步 HTTP 客户端", "Requests 2.34", "requests", "https://requests.readthedocs.io/en/latest/api/", "https://requests.readthedocs.io/en/latest/objects.inv", ("requests",), "提供友好的同步 HTTP 请求、Session、认证、Cookie、流式响应、PreparedRequest、适配器和异常体系。", ("请求方法和 Response", "Session 与连接复用", "认证、Cookie 和 TLS", "PreparedRequest/Adapter/Hooks"), ("调用 JSON API", "上传和下载文件", "配置重试、代理和证书"), ("所有外部请求都应设置 timeout", "raise_for_status 不会自动调用", "verify=False 会关闭 TLS 校验"), 'import requests\n\nwith requests.Session() as session:\n    response = session.get("https://example.com", timeout=10)\n    response.raise_for_status()'),
    Guide("ThirdParty", "HTTPX", "HTTPX：同步与异步 HTTP 客户端", "HTTPX 0.28", "httpx", "https://www.python-httpx.org/api/", None, ("httpx",), "同时提供同步 Client 和异步 AsyncClient，支持 HTTP/2、严格超时、连接池、流式传输、传输层和 ASGI/WSGI 测试。", ("顶层请求与 Client", "AsyncClient", "Timeout/Limits", "Transport、认证和事件钩子"), ("调用同步或异步 API", "流式读取大响应", "在测试中直接调用 ASGI 应用"), ("不要在循环里反复创建 Client", "异步接口必须正确关闭", "网络超时分为 connect/read/write/pool"), 'import httpx\n\nwith httpx.Client(timeout=10.0) as client:\n    response = client.get("https://example.com")\n    response.raise_for_status()'),
    Guide("ThirdParty", "pytest", "pytest：测试框架", "pytest 9.1", "pytest", "https://docs.pytest.org/en/stable/reference/index.html", "https://docs.pytest.org/en/stable/objects.inv", ("pytest", "_pytest.hookspec"), "通过普通函数断言、fixture、参数化、标记、钩子、插件和捕获工具组织可读、可扩展的测试。`_pytest.hookspec` 虽位于内部模块路径，但其中 `pytest_*` hooks 是官方公开插件接口，因此作为明确例外收录。", ("assert 重写", "fixture 和作用域", "parametrize/mark", "monkeypatch/capsys/tmp_path"), ("编写单元和接口测试", "复用分层 fixture", "参数化边界条件"), ("fixture 不应隐藏过多业务", "不要让测试依赖执行顺序", "只测试实现细节会阻碍重构"), 'import pytest\n\n@pytest.mark.parametrize(("value", "expected"), [(2, 4), (3, 9)])\ndef test_square(value: int, expected: int) -> None:\n    assert value * value == expected'),
    Guide("ThirdParty", "Ruff", "Ruff：Lint 与格式化", "Ruff current", None, "https://docs.astral.sh/ruff/", None, (), "通过 ruff check、ruff format 和 pyproject.toml 配置执行快速静态检查、自动修复、导入排序和格式化。", ("规则代码和选择", "安全/不安全修复", "formatter", "配置继承和文件排除"), ("检查整个项目", "自动修复确定问题", "在 CI 中验证格式"), ("不要盲目开启全部规则", "unsafe-fixes 必须审查", "per-file-ignores 应说明原因"), 'ruff check .\nruff check . --fix\nruff format --check .'),
    Guide("ThirdParty", "python-dotenv", "python-dotenv：.env 加载", "python-dotenv 1.2", "dotenv", "https://bbc2.github.io/python-dotenv/reference/", "https://bbc2.github.io/python-dotenv/objects.inv", ("dotenv",), "从 .env 文件查找、解析和加载环境变量，并提供 CLI 修改与运行命令。", ("load_dotenv", "dotenv_values", "find_dotenv", "set_key/unset_key 与 CLI"), ("加载本地开发配置", "只解析而不污染环境", "在指定环境下运行命令"), ("真实 .env 不应提交 Git", "override 默认行为要明确", "环境变量仍然都是字符串"), 'from dotenv import dotenv_values, load_dotenv\n\nload_dotenv()\nconfig = dotenv_values(".env.example")\nprint(config.get("APP_ENV"))'),
    Guide("ThirdParty", "Pydantic", "Pydantic：数据验证与序列化", "Pydantic 2.13", "pydantic", "https://docs.pydantic.dev/latest/api/", "https://docs.pydantic.dev/latest/objects.inv", ("pydantic",), "使用类型注解构建运行时验证、转换、序列化和 JSON Schema，涵盖模型、字段、验证器、TypeAdapter 和常用约束类型。", ("BaseModel/RootModel", "Field/Annotated", "验证器与序列化器", "TypeAdapter、严格模式和 JSON Schema"), ("验证 API 数据", "定义配置和领域 Schema", "验证非模型类型"), ("转换模式与严格模式不同", "不要在验证器里产生隐藏副作用", "Pydantic v1/v2 API 不可混用"), 'from pydantic import BaseModel, Field\n\nclass User(BaseModel):\n    name: str = Field(min_length=1)\n    age: int = Field(ge=0)\n\nprint(User.model_validate({"name": "Ada", "age": "20"}))'),
    Guide("ThirdParty", "IPython", "IPython：增强交互式 Python", "IPython 9.17", "IPython", "https://ipython.readthedocs.io/en/stable/api/index.html", "https://ipython.readthedocs.io/en/stable/objects.inv", ("IPython",), "提供增强 REPL、对象检查、补全、历史、魔法命令、富展示、嵌入式 shell 和扩展机制。", ("InteractiveShell", "line/cell magics", "display system", "extensions、history 和 embed"), ("交互探索对象", "测量和调试代码", "构建自定义魔法命令"), ("魔法命令不是普通 Python 语法", "Notebook 状态可能隐藏执行顺序", "不要让生产代码依赖交互环境"), '%timeit sum(range(1000))\n%debug\n?dict.get'),
    Guide("ThirdParty", "JupyterLab", "JupyterLab：交互式开发环境", "JupyterLab 4.6", None, "https://jupyterlab.readthedocs.io/en/stable/", None, (), "Jupyter 的浏览器开发环境，整合 Notebook、终端、编辑器、调试器、扩展、工作区和服务器配置。它主要是应用和 CLI，不是日常导入的 Python API。", ("kernel 与 notebook", "server 与 workspace", "扩展管理", "配置、导出和安全"), ("启动隔离的学习环境", "管理扩展与工作区", "调试并导出 Notebook"), ("按顺序重跑全部单元格", "不要在 Notebook 中保存密钥", "生产逻辑应迁移到可测试模块"), 'jupyter lab\njupyter lab --no-browser\njupyter labextension list'),
    Guide("ThirdParty", "Matplotlib", "Matplotlib：Python 绘图", "Matplotlib 3.11", "matplotlib", "https://matplotlib.org/stable/api/index.html", "https://matplotlib.org/stable/objects.inv", ("matplotlib",), "围绕 Figure、Axes、Artist、变换、刻度、颜色、布局、后端和动画构建静态、交互和导出图形。", ("Figure/Axes/Artist 对象模型", "pyplot 状态接口", "刻度、图例和注释", "样式、布局、后端和动画"), ("绘制统计和时间序列图", "组合多子图", "定制 Artist 并导出图片"), ("复杂代码优先对象式 API", "保存前显式管理布局", "大量 Artist 会影响性能"), 'import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [1, 4, 9], marker="o")\nax.set(title="Squares", xlabel="x", ylabel="x²")\nfig.savefig("squares.png", dpi=150)'),
)


EXISTING_GUIDES: tuple[Guide, ...] = (
    Guide("Existing", "Numpy", "NumPy 完整公开 API", "NumPy 2.5", "numpy", "https://numpy.org/doc/stable/reference/index.html", "https://numpy.org/doc/stable/objects.inv", ("numpy",), "NumPy 官方公开 API 完整索引。", (), (), (), ""),
    Guide("Existing", "Pandas", "Pandas 完整公开 API", "Pandas 3.0", "pandas", "https://pandas.pydata.org/docs/reference/index.html", "https://pandas.pydata.org/docs/objects.inv", ("pandas",), "Pandas 官方公开 API 完整索引。", (), (), (), ""),
)


ROLE_LABELS = {
    "py:function": "函数",
    "py:class": "类",
    "py:method": "方法",
    "py:classmethod": "类方法",
    "py:staticmethod": "静态方法",
    "py:attribute": "属性",
    "py:property": "属性",
    "py:data": "数据/常量",
    "py:exception": "异常",
    "py:module": "模块",
}


def fetch_inventory(url: str) -> list[tuple[str, str, str]]:
    request = urllib.request.Request(url, headers={"User-Agent": "Python-learning-docs/1.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        raw = response.read()
    stream = io.BytesIO(raw)
    header = [stream.readline() for _ in range(4)]
    if len(header) < 4 or b"Sphinx inventory version 2" not in header[0]:
        return []
    body = zlib.decompress(stream.read()).decode("utf-8")
    entries: list[tuple[str, str, str]] = []
    pattern = re.compile(r"^(\S+)\s+(\S+)\s+(-?\d+)\s+(\S+)\s+(.*)$")
    for line in body.splitlines():
        match = pattern.match(line)
        if not match:
            continue
        name, role, _priority, uri, display = match.groups()
        if role not in ROLE_LABELS:
            continue
        if uri.endswith("$"):
            uri = uri[:-1] + name
        entries.append((name, role, uri))
    return entries


def public_name(name: str, prefixes: tuple[str, ...]) -> bool:
    prefix = next((item for item in prefixes if name == item or name.startswith(item + ".")), None)
    if prefix is None:
        return False
    remainder = name[len(prefix):].lstrip(".")
    return not any(part.startswith("_") for part in remainder.split(".") if part)


def resolve_object(name: str) -> object | None:
    parts = name.split(".")
    module = None
    split_at = 0
    for index in range(len(parts), 0, -1):
        try:
            module = importlib.import_module(".".join(parts[:index]))
            split_at = index
            break
        except Exception:
            continue
    if module is None:
        return None
    current: object = module
    try:
        for part in parts[split_at:]:
            current = inspect.getattr_static(current, part)
    except Exception:
        return None
    return current


def signature_and_summary(name: str) -> tuple[str, str]:
    target = resolve_object(name)
    if target is None:
        return "", "参见官方 API 文档。"
    try:
        signature = str(inspect.signature(target)) if callable(target) else ""
    except (TypeError, ValueError):
        signature = ""
    try:
        doc = inspect.getdoc(target) or ""
    except Exception:
        doc = ""
    paragraph: list[str] = []
    for line in doc.splitlines():
        stripped = line.strip()
        if not stripped and paragraph:
            break
        if stripped:
            paragraph.append(stripped)
    summary = " ".join(paragraph) or "参见官方 API 文档。"
    summary = summary.replace("|", "\\|")
    if len(summary) > 180:
        summary = summary[:177] + "..."
    if len(signature) > 140:
        signature = signature[:137] + "..."
    return signature.replace("|", "\\|"), summary


def introspected_entries(import_name: str) -> list[tuple[str, str, str]]:
    module = importlib.import_module(import_name)
    exported = getattr(module, "__all__", None)
    names = sorted(exported if exported else (name for name in dir(module) if not name.startswith("_")))
    result: list[tuple[str, str, str]] = []
    for name in names:
        qualified = f"{import_name}.{name}"
        target = getattr(module, name, None)
        if inspect.isclass(target):
            role = "py:class"
        elif callable(target):
            role = "py:function"
        else:
            role = "py:data"
        result.append((qualified, role, ""))
        if inspect.isclass(target):
            for member_name in sorted(item for item in dir(target) if not item.startswith("_")):
                member = inspect.getattr_static(target, member_name, None)
                member_role = "py:method" if callable(member) else "py:attribute"
                result.append((f"{qualified}.{member_name}", member_role, ""))
    return result


def guide_entries(guide: Guide, inventories: dict[str, list[tuple[str, str, str]]]) -> list[tuple[str, str, str]]:
    if guide.inventory_url:
        entries = inventories[guide.inventory_url]
        selected = [entry for entry in entries if public_name(entry[0], guide.prefixes)]
    elif guide.import_name:
        selected = introspected_entries(guide.import_name)
    else:
        selected = []
    unique: dict[tuple[str, str], tuple[str, str, str]] = {}
    for entry in selected:
        unique[(entry[0], entry[1])] = entry
    return sorted(unique.values(), key=lambda item: (item[0].lower(), item[1]))


def installation_text(guide: Guide) -> str:
    if guide.category == "StandardLibrary":
        return "Python 3.12 标准库，无需安装。"
    if guide.slug == "Ruff":
        return "`python -m pip install ruff`（Ruff 主要通过 `ruff` 命令使用）。"
    if guide.slug == "JupyterLab":
        return "`python -m pip install jupyterlab`（主要通过 `jupyter lab` 命令使用）。"
    package = {"Requests": "requests", "HTTPX": "httpx", "Pydantic": "pydantic", "IPython": "ipython", "Matplotlib": "matplotlib", "python-dotenv": "python-dotenv"}.get(guide.slug, guide.slug)
    return f"`python -m pip install {package}`。"


def write_readme(guide: Guide, count: int) -> None:
    directory = ROOT / guide.category / guide.slug
    directory.mkdir(parents=True, exist_ok=True)
    concepts = "\n".join(f"- {item}" for item in guide.concepts)
    workflows = "\n".join(f"- {item}" for item in guide.workflows)
    pitfalls = "\n".join(f"- {item}" for item in guide.pitfalls)
    language = "bash" if guide.slug in {"pip", "wheel", "Ruff", "IPython", "JupyterLab"} else "toml" if guide.slug == "setuptools" else "python"
    extra_reference = "\n- [Ruff 全规则参考](./02-rule-reference.md)" if guide.slug == "Ruff" else ""
    content = f"""{GENERATED_NOTICE}
# {guide.title}

版本基线：**{guide.version}**  
官方文档：[{guide.official_url}]({guide.official_url})

{guide.summary}

## 安装与导入

{installation_text(guide)}

## 核心模型

{concepts}

## 常见工作流

{workflows}

## 最小示例

```{language}
{guide.example}
```

## 常见陷阱

{pitfalls}

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **{count}** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。{extra_reference}

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
"""
    (directory / "README.md").write_text(content, encoding="utf-8")


def api_group(name: str, prefixes: tuple[str, ...]) -> str:
    matching = next((prefix for prefix in sorted(prefixes, key=len, reverse=True) if name == prefix or name.startswith(prefix + ".")), prefixes[0])
    rest = name[len(matching):].lstrip(".")
    if not rest:
        return matching
    first = rest.split(".", 1)[0]
    return f"{matching}.{first}" if name.count(".") > matching.count(".") + 1 else matching


def write_api_reference(guide: Guide, entries: list[tuple[str, str, str]]) -> None:
    directory = ROOT / (guide.slug if guide.category == "Existing" else f"{guide.category}/{guide.slug}")
    directory.mkdir(parents=True, exist_ok=True)
    filename = "05-complete-api-reference.md" if guide.slug == "Numpy" else "06-complete-api-reference.md" if guide.slug == "Pandas" else "01-api-reference.md"
    extra = command_reference(guide.slug)
    extra_count = max(0, len(extra) - 5)
    display_count = len(entries) + extra_count
    lines = [
        GENERATED_NOTICE,
        f"# {guide.title}",
        "",
        f"版本基线：**{guide.version}**  ",
        f"官方参考：[{guide.official_url}]({guide.official_url})",
        "",
        "本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。",
        "",
        f"共收录 **{display_count}** 个公开对象或用户命令。私有下划线接口不收录。",
        "",
    ]
    if entries:
        grouped: dict[str, list[tuple[str, str, str]]] = {}
        for name, role, uri in entries:
            grouped.setdefault(api_group(name, guide.prefixes), []).append((name, role, uri))
        for group, group_entries in sorted(grouped.items(), key=lambda item: item[0].lower()):
            lines.extend([f"## `{group}`", "", "| API | 类型 | 签名 | 用途摘要 |", "|---|---|---|---|"])
            for name, role, uri in group_entries:
                signature, summary = signature_and_summary(name)
                label = f"`{name}`"
                if uri:
                    base = (guide.inventory_url or guide.official_url).rsplit("/", 1)[0] + "/"
                    label = f"[`{name}`]({urllib.parse.urljoin(base, uri)})"
                lines.append(f"| {label} | {ROLE_LABELS.get(role, role)} | `{signature}` | {summary} |")
            lines.append("")
    if extra_count:
        lines.extend(extra)
    (directory / filename).write_text("\n".join(lines), encoding="utf-8")


def command_reference(slug: str) -> list[str]:
    commands = {
        "pip": (
            ("python -m pip install", "安装索引、URL、VCS、本地目录或可编辑项目。"),
            ("python -m pip uninstall", "卸载一个或多个分发包。"),
            ("python -m pip inspect", "输出环境、依赖和元数据的 JSON 报告。"),
            ("python -m pip list", "列出已安装、过期或可编辑包。"),
            ("python -m pip show", "显示指定包元数据和安装位置。"),
            ("python -m pip freeze", "按 requirements 格式输出已安装版本。"),
            ("python -m pip check", "检查已安装依赖是否兼容和完整。"),
            ("python -m pip lock", "根据需求生成锁文件。"),
            ("python -m pip download", "只下载分发文件及依赖，不安装。"),
            ("python -m pip wheel", "为需求构建 wheel。"),
            ("python -m pip hash", "计算本地包文件哈希。"),
            ("python -m pip search", "旧 XML-RPC 搜索接口，当前公共 PyPI 通常不可用。"),
            ("python -m pip index", "检查包索引中的版本和兼容候选。"),
            ("python -m pip cache", "查看、清理和管理 pip 缓存。"),
            ("python -m pip config", "读取和修改全局、用户、站点配置。"),
            ("python -m pip debug", "显示解释器、证书、vendored 库和兼容标签。"),
        ),
        "wheel": (
            ("wheel convert", "把 egg 归档转换为 wheel。"),
            ("wheel info", "显示 wheel 元数据和标签信息。"),
            ("wheel pack", "把解包目录重新打包为 wheel。"),
            ("wheel tags", "增加、删除或覆盖 wheel 标签。"),
            ("wheel unpack", "解包 wheel 并校验内容。"),
        ),
        "Ruff": (
            ("ruff check", "执行 lint；覆盖文件选择、规则选择、输出格式、缓存、修复和 watch。"),
            ("ruff format", "格式化文件，或用 --check/--diff 只验证。"),
            ("ruff rule", "查看单条或全部规则说明。"),
            ("ruff config", "查看配置项及说明。"),
            ("ruff clean", "清理项目缓存。"),
            ("ruff server", "启动语言服务器。"),
            ("ruff version", "输出版本。"),
            ("ruff help", "查看命令帮助。"),
        ),
        "JupyterLab": (
            ("jupyter lab", "启动 Lab；继承 Jupyter Server 的端口、浏览器、认证和目录选项。"),
            ("jupyter labextension list", "列出扩展。"),
            ("jupyter labextension enable/disable", "启用或禁用扩展。"),
            ("jupyter labextension lock/unlock", "锁定或解锁扩展。"),
            ("jupyter lab path", "显示应用、用户设置和工作区路径。"),
            ("jupyter lab clean/build", "清理或重新构建应用资源；预构建扩展通常无需手动 build。"),
            ("jupyter lab workspaces", "导出、导入和管理工作区。"),
        ),
        "pytest": (
            ("capfd", "以文本捕获文件描述符 1 和 2 的输出。"),
            ("capfdbinary", "以 bytes 捕获文件描述符 1 和 2 的输出。"),
            ("caplog", "控制日志级别并读取捕获的日志记录。"),
            ("capsys", "以文本捕获 sys.stdout 和 sys.stderr。"),
            ("capteesys", "捕获 sys 标准流并同时透传输出。"),
            ("capsysbinary", "以 bytes 捕获 sys.stdout 和 sys.stderr。"),
            ("cache", "跨 pytest 运行保存和读取值。"),
            ("doctest_namespace", "向 doctest 命名空间注入字典。"),
            ("monkeypatch", "临时修改属性、字典、环境变量、路径和当前目录。"),
            ("pytestconfig", "访问 Config、插件管理器和 hooks。"),
            ("subtests", "在测试函数内声明子测试。"),
            ("record_property", "向单个测试报告添加属性。"),
            ("record_testsuite_property", "向测试套件报告添加属性。"),
            ("recwarn", "记录测试发出的警告。"),
            ("request", "访问当前测试/fixture 的上下文和依赖。"),
            ("testdir", "旧式 pytest 插件测试目录 fixture。"),
            ("tmp_path", "提供每个测试独立的 pathlib.Path 临时目录。"),
            ("tmp_path_factory", "创建 session 级 pathlib 临时目录。"),
            ("tmpdir", "旧式 py.path.local 临时目录；优先 tmp_path。"),
            ("tmpdir_factory", "旧式 session 级临时目录；优先 tmp_path_factory。"),
        ),
    }
    rows = commands.get(slug, ())
    return ["## 用户接口", "", "| 命令/API | 用途 |", "|---|---|", *(f"| `{name}` | {summary} |" for name, summary in rows), ""]


def write_ruff_rules() -> int:
    url = "https://docs.astral.sh/ruff/rules/"
    request = urllib.request.Request(url, headers={"User-Agent": "Python-learning-docs/1.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        source = response.read().decode("utf-8")
    pattern = re.compile(
        r'<td id="([A-Z]+\d+)">[^<]+</td>\s*'
        r'<td><a href="([^"]+)">([^<]+)</a></td>\s*'
        r'<td>(.*?)</td>',
        re.DOTALL,
    )
    rules: list[tuple[str, str, str, str]] = []
    for code, href, name, message_html in pattern.findall(source):
        message = re.sub(r"<[^>]+>", "", message_html)
        message = html.unescape(" ".join(message.split())).replace("|", "\\|")
        rules.append((code, name, message, urllib.parse.urljoin(url, href)))
    path = ROOT / "ThirdParty/Ruff/02-rule-reference.md"
    lines = [
        GENERATED_NOTICE,
        "# Ruff 全规则参考",
        "",
        f"规则基线：官方当前稳定文档（2026-08-30）。共收录 **{len(rules)}** 条规则。",
        "",
        "规则数量很大，学习时先按项目需要选择规则族；本表用于确保规则代码没有因人工挑选而遗漏。",
        "",
        "| 规则代码 | 规则名称 | 检查内容 |",
        "|---|---|---|",
        *(f"| [`{code}`]({link}) | `{name}` | {message} |" for code, name, message, link in rules),
        "",
    ]
    path.write_text("\n".join(lines), encoding="utf-8")
    return len(rules)


def update_existing_readmes() -> None:
    additions = {
        ROOT / "Numpy/README.md": "- [NumPy 完整公开 API 参考](./05-complete-api-reference.md)",
        ROOT / "Pandas/README.md": "- [Pandas 完整公开 API 参考](./06-complete-api-reference.md)",
    }
    for path, line in additions.items():
        text = path.read_text(encoding="utf-8")
        section = f"## 完整 API 索引\n\n{line}"
        if "## 完整 API 索引" not in text:
            if line in text:
                text = text.replace(line, section)
            else:
                text = text.rstrip() + "\n\n" + section + "\n"
        path.write_text(text, encoding="utf-8")


def write_root_index(guides: Iterable[Guide]) -> None:
    sections: dict[str, list[Guide]] = {}
    for guide in guides:
        sections.setdefault(guide.category, []).append(guide)
    labels = {"StandardLibrary": "Python 3.12 标准库", "Packaging": "打包与依赖工具", "ThirdParty": "常用第三方库与工具"}
    lines = [
        "# Python 常用模块与依赖学习体系",
        "",
        "这套资料以 Python 语言和常用开发能力为核心。每个模块独立成目录，学习入口负责建立概念和工作流，API 参考负责防止遗漏。",
        "",
        "版本基线日期：**2026-08-30**。标准库使用 Python 3.12；第三方库版本写在各自入口。",
        "",
        "## 使用方法",
        "",
        "详细训练方法见：[Python 模块与依赖学习方法](./LEARNING-METHOD.md)。",
        "",
        "1. 先读模块 README，理解它解决的问题。",
        "2. 运行最小示例并主动修改输入。",
        "3. 使用 API 参考查缺补漏，不按字母顺序死背。",
        "4. 完成边界、报错和综合任务后再进入下一个模块。",
        "",
    ]
    for category in ("StandardLibrary", "Packaging", "ThirdParty"):
        lines.extend([f"## {labels[category]}", ""])
        for guide in sorted(sections.get(category, []), key=lambda item: item.slug.lower()):
            lines.append(f"- [{guide.title}](./{guide.category}/{guide.slug}/README.md)")
        lines.append("")
    lines.extend([
        "## 数值与表格数据",
        "",
        "- [NumPy 学习入口](./Numpy/README.md)",
        "- [Pandas 学习入口](./Pandas/README.md)",
        "",
        "## 推荐学习顺序",
        "",
        "```text",
        "pathlib / json / csv / datetime",
        "  ↓",
        "collections / itertools / functools / typing / dataclasses",
        "  ↓",
        "logging / subprocess / sqlite3 / unittest / pytest",
        "  ↓",
        "threading / multiprocessing / asyncio / HTTPX",
        "  ↓",
        "NumPy / Pandas / Matplotlib",
        "  ↓",
        "Pydantic / packaging / 工程工具",
        "```",
        "",
        "## API 完整性规则",
        "",
        "- [API 覆盖矩阵](./API-COVERAGE.md)",
        "- 收录官方文档中的稳定公开 Python 对象或用户命令。",
        "- 下划线开头的私有接口不作为稳定 API。",
        "- 废弃接口保留在对应版本的官方索引中，学习时以替代方案为主。",
        "- NumPy、Pandas、Matplotlib 等大型库通过完整索引保证覆盖，通过学习路径区分掌握优先级。",
    ])
    (ROOT / "README.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def reference_path(guide: Guide) -> Path:
    if guide.category == "Existing":
        filename = "05-complete-api-reference.md" if guide.slug == "Numpy" else "06-complete-api-reference.md"
        return ROOT / guide.slug / filename
    return ROOT / guide.category / guide.slug / "01-api-reference.md"


def write_coverage_report() -> None:
    rows: list[tuple[str, str, str, int, str, str]] = []
    labels = {"StandardLibrary": "标准库", "Packaging": "打包工具", "ThirdParty": "第三方", "Existing": "数值/数据"}
    for guide in (*GUIDES, *EXISTING_GUIDES):
        path = reference_path(guide)
        if not path.exists():
            continue
        match = re.search(r"共收录 \*\*(\d+)\*\*", path.read_text(encoding="utf-8"))
        count = int(match.group(1)) if match else 0
        relative = path.relative_to(ROOT).as_posix()
        rows.append((labels[guide.category], guide.title, guide.version, count, guide.official_url, relative))
    total = sum(row[3] for row in rows)
    ruff_rules_path = ROOT / "ThirdParty/Ruff/02-rule-reference.md"
    ruff_rules = 0
    if ruff_rules_path.exists():
        match = re.search(r"共收录 \*\*(\d+)\*\* 条规则", ruff_rules_path.read_text(encoding="utf-8"))
        ruff_rules = int(match.group(1)) if match else 0
    lines = [
        GENERATED_NOTICE,
        "# API 覆盖矩阵",
        "",
        "该矩阵用于回答“哪些包已经整理、以什么版本为准、公开 API 是否进入索引”。",
        "",
        f"- 模块/包数量：**{len(rows)}**",
        f"- 公开对象和用户命令：**{total}**",
        f"- Ruff 规则：**{ruff_rules}**",
        "- 标准库基线：Python 3.12",
        "- 快照日期：2026-08-30",
        "",
        "| 分类 | 模块/包 | 版本基线 | 数量 | 本地参考 | 官方来源 |",
        "|---|---|---:|---:|---|---|",
        *(f"| {category} | {title} | {version} | {count} | [打开](./{relative}) | [官方文档]({official}) |" for category, title, version, count, official, relative in rows),
        "",
        "## 覆盖口径",
        "",
        "1. Sphinx 项目以官方 `objects.inv` 中的公开 Python 对象为准。",
        "2. HTTPX 使用顶层公开导出及公开类成员，因为其文档站不提供 Sphinx inventory。",
        "3. pip、wheel、Ruff、JupyterLab 以稳定用户命令为准；它们的内部 Python 模块不是承诺兼容的公共 API。",
        "4. pytest 额外收录官方 hookspec 与全部内置 fixture；Ruff 另有完整规则索引。",
        "5. 下划线私有对象默认排除；pytest 官方 hookspec 是明确的公共插件接口例外。",
    ]
    (ROOT / "API-COVERAGE.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--categories",
        nargs="+",
        choices=("StandardLibrary", "Packaging", "ThirdParty", "Existing"),
        default=("StandardLibrary", "Packaging", "ThirdParty", "Existing"),
    )
    args = parser.parse_args()
    selected_guides = tuple(guide for guide in GUIDES if guide.category in args.categories)
    selected_existing = EXISTING_GUIDES if "Existing" in args.categories else ()
    all_guides = (*selected_guides, *selected_existing)
    inventory_urls = sorted({guide.inventory_url for guide in all_guides if guide.inventory_url})
    inventories = {url: fetch_inventory(url) for url in inventory_urls}
    for guide in selected_guides:
        entries = guide_entries(guide, inventories)
        extra_count = max(0, len(command_reference(guide.slug)) - 5)
        write_readme(guide, len(entries) + extra_count)
        write_api_reference(guide, entries)
        print(f"{guide.category}/{guide.slug}: {len(entries)} APIs")
    for guide in selected_existing:
        entries = guide_entries(guide, inventories)
        write_api_reference(guide, entries)
        print(f"{guide.slug}: {len(entries)} APIs")
    if selected_existing:
        update_existing_readmes()
    if "ThirdParty" in args.categories:
        print(f"Ruff rules: {write_ruff_rules()}")
    write_root_index(GUIDES)
    write_coverage_report()


if __name__ == "__main__":
    main()
