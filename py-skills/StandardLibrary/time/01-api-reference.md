<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# time：系统时间与计时

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/time.html](https://docs.python.org/3.12/library/time.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **54** 个公开对象或用户命令。私有下划线接口不收录。

## `time`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`time`](https://docs.python.org/3.12/library/time.html#module-time) | 模块 | `` | This module provides various functions to manipulate time values. |
| [`time.altzone`](https://docs.python.org/3.12/library/time.html#time.altzone) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.asctime`](https://docs.python.org/3.12/library/time.html#time.asctime) | 函数 | `` | asctime([tuple]) -> string |
| [`time.CLOCK_BOOTTIME`](https://docs.python.org/3.12/library/time.html#time.CLOCK_BOOTTIME) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`time.clock_getres`](https://docs.python.org/3.12/library/time.html#time.clock_getres) | 函数 | `` | clock_getres(clk_id) -> floating-point number |
| [`time.clock_gettime`](https://docs.python.org/3.12/library/time.html#time.clock_gettime) | 函数 | `` | clock_gettime(clk_id) -> float |
| [`time.clock_gettime_ns`](https://docs.python.org/3.12/library/time.html#time.clock_gettime_ns) | 函数 | `` | clock_gettime_ns(clk_id) -> int |
| [`time.CLOCK_HIGHRES`](https://docs.python.org/3.12/library/time.html#time.CLOCK_HIGHRES) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`time.CLOCK_MONOTONIC`](https://docs.python.org/3.12/library/time.html#time.CLOCK_MONOTONIC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.CLOCK_MONOTONIC_RAW`](https://docs.python.org/3.12/library/time.html#time.CLOCK_MONOTONIC_RAW) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.CLOCK_PROCESS_CPUTIME_ID`](https://docs.python.org/3.12/library/time.html#time.CLOCK_PROCESS_CPUTIME_ID) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.CLOCK_PROF`](https://docs.python.org/3.12/library/time.html#time.CLOCK_PROF) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`time.CLOCK_REALTIME`](https://docs.python.org/3.12/library/time.html#time.CLOCK_REALTIME) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.clock_settime`](https://docs.python.org/3.12/library/time.html#time.clock_settime) | 函数 | `` | clock_settime(clk_id, time) |
| [`time.clock_settime_ns`](https://docs.python.org/3.12/library/time.html#time.clock_settime_ns) | 函数 | `` | clock_settime_ns(clk_id, time) |
| [`time.CLOCK_TAI`](https://docs.python.org/3.12/library/time.html#time.CLOCK_TAI) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`time.CLOCK_THREAD_CPUTIME_ID`](https://docs.python.org/3.12/library/time.html#time.CLOCK_THREAD_CPUTIME_ID) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.CLOCK_UPTIME`](https://docs.python.org/3.12/library/time.html#time.CLOCK_UPTIME) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`time.CLOCK_UPTIME_RAW`](https://docs.python.org/3.12/library/time.html#time.CLOCK_UPTIME_RAW) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.ctime`](https://docs.python.org/3.12/library/time.html#time.ctime) | 函数 | `` | ctime(seconds) -> string |
| [`time.daylight`](https://docs.python.org/3.12/library/time.html#time.daylight) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.get_clock_info`](https://docs.python.org/3.12/library/time.html#time.get_clock_info) | 函数 | `` | get_clock_info(name: str) -> dict |
| [`time.gmtime`](https://docs.python.org/3.12/library/time.html#time.gmtime) | 函数 | `` | gmtime([seconds]) -> (tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec, tm_wday, tm_yday, tm_isdst) |
| [`time.localtime`](https://docs.python.org/3.12/library/time.html#time.localtime) | 函数 | `` | localtime([seconds]) -> (tm_year,tm_mon,tm_mday,tm_hour,tm_min, tm_sec,tm_wday,tm_yday,tm_isdst) |
| [`time.mktime`](https://docs.python.org/3.12/library/time.html#time.mktime) | 函数 | `` | mktime(tuple) -> floating-point number |
| [`time.monotonic`](https://docs.python.org/3.12/library/time.html#time.monotonic) | 函数 | `` | monotonic() -> float |
| [`time.monotonic_ns`](https://docs.python.org/3.12/library/time.html#time.monotonic_ns) | 函数 | `` | monotonic_ns() -> int |
| [`time.perf_counter`](https://docs.python.org/3.12/library/time.html#time.perf_counter) | 函数 | `` | perf_counter() -> float |
| [`time.perf_counter_ns`](https://docs.python.org/3.12/library/time.html#time.perf_counter_ns) | 函数 | `` | perf_counter_ns() -> int |
| [`time.process_time`](https://docs.python.org/3.12/library/time.html#time.process_time) | 函数 | `` | process_time() -> float |
| [`time.process_time_ns`](https://docs.python.org/3.12/library/time.html#time.process_time_ns) | 函数 | `` | process_time() -> int |
| [`time.pthread_getcpuclockid`](https://docs.python.org/3.12/library/time.html#time.pthread_getcpuclockid) | 函数 | `` | 参见官方 API 文档。 |
| [`time.sleep`](https://docs.python.org/3.12/library/time.html#time.sleep) | 函数 | `` | sleep(seconds) |
| [`time.strftime`](https://docs.python.org/3.12/library/time.html#time.strftime) | 函数 | `` | strftime(format[, tuple]) -> string |
| [`time.strptime`](https://docs.python.org/3.12/library/time.html#time.strptime) | 函数 | `` | strptime(string, format) -> struct_time |
| [`time.struct_time`](https://docs.python.org/3.12/library/time.html#time.struct_time) | 类 | `(iterable=(), /)` | The time value as returned by gmtime(), localtime(), and strptime(), and accepted by asctime(), mktime() and strftime().  May be considered as a sequence of 9 integers. |
| [`time.thread_time`](https://docs.python.org/3.12/library/time.html#time.thread_time) | 函数 | `` | thread_time() -> float |
| [`time.thread_time_ns`](https://docs.python.org/3.12/library/time.html#time.thread_time_ns) | 函数 | `` | thread_time() -> int |
| [`time.time`](https://docs.python.org/3.12/library/time.html#time.time) | 函数 | `` | time() -> floating-point number |
| [`time.time_ns`](https://docs.python.org/3.12/library/time.html#time.time_ns) | 函数 | `` | time_ns() -> int |
| [`time.timezone`](https://docs.python.org/3.12/library/time.html#time.timezone) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`time.tzname`](https://docs.python.org/3.12/library/time.html#time.tzname) | 数据/常量 | `` | Built-in immutable sequence. |
| [`time.tzset`](https://docs.python.org/3.12/library/time.html#time.tzset) | 函数 | `` | tzset() |

## `time.struct_time`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`time.struct_time.tm_gmtoff`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_gmtoff) | 属性 | `` | offset from UTC in seconds |
| [`time.struct_time.tm_hour`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_hour) | 属性 | `` | hours, range [0, 23] |
| [`time.struct_time.tm_isdst`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_isdst) | 属性 | `` | 1 if summer time is in effect, 0 if not, and -1 if unknown |
| [`time.struct_time.tm_mday`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_mday) | 属性 | `` | day of month, range [1, 31] |
| [`time.struct_time.tm_min`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_min) | 属性 | `` | minutes, range [0, 59] |
| [`time.struct_time.tm_mon`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_mon) | 属性 | `` | month of year, range [1, 12] |
| [`time.struct_time.tm_sec`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_sec) | 属性 | `` | seconds, range [0, 61]) |
| [`time.struct_time.tm_wday`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_wday) | 属性 | `` | day of week, range [0, 6], Monday is 0 |
| [`time.struct_time.tm_yday`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_yday) | 属性 | `` | day of year, range [1, 366] |
| [`time.struct_time.tm_year`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_year) | 属性 | `` | year, for example, 1993 |
| [`time.struct_time.tm_zone`](https://docs.python.org/3.12/library/time.html#time.struct_time.tm_zone) | 属性 | `` | abbreviation of timezone name |
