<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# datetime：日期与时间

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/datetime.html](https://docs.python.org/3.12/library/datetime.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **102** 个公开对象或用户命令。私有下划线接口不收录。

## `datetime`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`datetime`](https://docs.python.org/3.12/library/datetime.html#module-datetime) | 模块 | `` | Fast implementation of the datetime type. |
| [`datetime.date`](https://docs.python.org/3.12/library/datetime.html#datetime.date) | 类 | `` | date(year, month, day) --> date object |
| [`datetime.datetime`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime) | 类 | `` | datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]]) |
| [`datetime.MAXYEAR`](https://docs.python.org/3.12/library/datetime.html#datetime.MAXYEAR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`datetime.MINYEAR`](https://docs.python.org/3.12/library/datetime.html#datetime.MINYEAR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`datetime.time`](https://docs.python.org/3.12/library/datetime.html#datetime.time) | 类 | `` | time([hour[, minute[, second[, microsecond[, tzinfo]]]]]) --> a time object |
| [`datetime.timedelta`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta) | 类 | `` | Difference between two datetime values. |
| [`datetime.timezone`](https://docs.python.org/3.12/library/datetime.html#datetime.timezone) | 类 | `` | Fixed offset from UTC implementation of tzinfo. |
| [`datetime.tzinfo`](https://docs.python.org/3.12/library/datetime.html#datetime.tzinfo) | 类 | `` | Abstract base class for time zone info objects. |
| [`datetime.UTC`](https://docs.python.org/3.12/library/datetime.html#datetime.UTC) | 数据/常量 | `` | Fixed offset from UTC implementation of tzinfo. |

## `datetime.date`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`datetime.date.ctime`](https://docs.python.org/3.12/library/datetime.html#datetime.date.ctime) | 方法 | `` | Return ctime() style string. |
| [`datetime.date.day`](https://docs.python.org/3.12/library/datetime.html#datetime.date.day) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.date.fromisocalendar`](https://docs.python.org/3.12/library/datetime.html#datetime.date.fromisocalendar) | 方法 | `` | int, int, int -> Construct a date from the ISO year, week number and weekday. |
| [`datetime.date.fromisoformat`](https://docs.python.org/3.12/library/datetime.html#datetime.date.fromisoformat) | 方法 | `` | str -> Construct a date from a string in ISO 8601 format. |
| [`datetime.date.fromordinal`](https://docs.python.org/3.12/library/datetime.html#datetime.date.fromordinal) | 方法 | `` | int -> date corresponding to a proleptic Gregorian ordinal. |
| [`datetime.date.fromtimestamp`](https://docs.python.org/3.12/library/datetime.html#datetime.date.fromtimestamp) | 方法 | `(type, timestamp, /)` | Create a date from a POSIX timestamp. |
| [`datetime.date.isocalendar`](https://docs.python.org/3.12/library/datetime.html#datetime.date.isocalendar) | 方法 | `` | Return a named tuple containing ISO year, week number, and weekday. |
| [`datetime.date.isoformat`](https://docs.python.org/3.12/library/datetime.html#datetime.date.isoformat) | 方法 | `` | Return string in ISO 8601 format, YYYY-MM-DD. |
| [`datetime.date.isoweekday`](https://docs.python.org/3.12/library/datetime.html#datetime.date.isoweekday) | 方法 | `` | Return the day of the week represented by the date. Monday == 1 ... Sunday == 7 |
| [`datetime.date.max`](https://docs.python.org/3.12/library/datetime.html#datetime.date.max) | 属性 | `` | date(year, month, day) --> date object |
| [`datetime.date.min`](https://docs.python.org/3.12/library/datetime.html#datetime.date.min) | 属性 | `` | date(year, month, day) --> date object |
| [`datetime.date.month`](https://docs.python.org/3.12/library/datetime.html#datetime.date.month) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.date.replace`](https://docs.python.org/3.12/library/datetime.html#datetime.date.replace) | 方法 | `` | Return date with new specified fields. |
| [`datetime.date.resolution`](https://docs.python.org/3.12/library/datetime.html#datetime.date.resolution) | 属性 | `` | Difference between two datetime values. |
| [`datetime.date.strftime`](https://docs.python.org/3.12/library/datetime.html#datetime.date.strftime) | 方法 | `` | format -> strftime() style string. |
| [`datetime.date.timetuple`](https://docs.python.org/3.12/library/datetime.html#datetime.date.timetuple) | 方法 | `` | Return time tuple, compatible with time.localtime(). |
| [`datetime.date.today`](https://docs.python.org/3.12/library/datetime.html#datetime.date.today) | 方法 | `` | Current date or datetime:  same as self.__class__.fromtimestamp(time.time()). |
| [`datetime.date.toordinal`](https://docs.python.org/3.12/library/datetime.html#datetime.date.toordinal) | 方法 | `` | Return proleptic Gregorian ordinal.  January 1 of year 1 is day 1. |
| [`datetime.date.weekday`](https://docs.python.org/3.12/library/datetime.html#datetime.date.weekday) | 方法 | `` | Return the day of the week represented by the date. Monday == 0 ... Sunday == 6 |
| [`datetime.date.year`](https://docs.python.org/3.12/library/datetime.html#datetime.date.year) | 属性 | `` | 参见官方 API 文档。 |

## `datetime.datetime`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`datetime.datetime.astimezone`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.astimezone) | 方法 | `` | tz -> convert to local time in new timezone tz |
| [`datetime.datetime.combine`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.combine) | 方法 | `` | date, time -> datetime with same date and time fields |
| [`datetime.datetime.ctime`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.ctime) | 方法 | `` | Return ctime() style string. |
| [`datetime.datetime.date`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.date) | 方法 | `` | Return date object with same year, month and day. |
| [`datetime.datetime.day`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.day) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.dst`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.dst) | 方法 | `` | Return self.tzinfo.dst(self). |
| [`datetime.datetime.fold`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.fold) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.fromisocalendar`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.fromisocalendar) | 方法 | `` | int, int, int -> Construct a date from the ISO year, week number and weekday. |
| [`datetime.datetime.fromisoformat`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.fromisoformat) | 方法 | `` | string -> datetime from a string in most ISO 8601 formats |
| [`datetime.datetime.fromordinal`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.fromordinal) | 方法 | `` | int -> date corresponding to a proleptic Gregorian ordinal. |
| [`datetime.datetime.fromtimestamp`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.fromtimestamp) | 方法 | `` | timestamp[, tz] -> tz's local time from POSIX timestamp. |
| [`datetime.datetime.hour`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.hour) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.isocalendar`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.isocalendar) | 方法 | `` | Return a named tuple containing ISO year, week number, and weekday. |
| [`datetime.datetime.isoformat`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.isoformat) | 方法 | `` | [sep] -> string in ISO 8601 format, YYYY-MM-DDT[HH[:MM[:SS[.mmm[uuu]]]]][+HH:MM]. sep is used to separate the year from the time, and defaults to 'T'. The optional argument time... |
| [`datetime.datetime.isoweekday`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.isoweekday) | 方法 | `` | Return the day of the week represented by the date. Monday == 1 ... Sunday == 7 |
| [`datetime.datetime.max`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.max) | 属性 | `` | datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]]) |
| [`datetime.datetime.microsecond`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.microsecond) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.min`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.min) | 属性 | `` | datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]]) |
| [`datetime.datetime.minute`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.minute) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.month`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.month) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.now`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.now) | 方法 | `(type, /, tz=None)` | Returns new datetime object representing current time local to tz. |
| [`datetime.datetime.replace`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.replace) | 方法 | `` | Return datetime with new specified fields. |
| [`datetime.datetime.resolution`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.resolution) | 属性 | `` | Difference between two datetime values. |
| [`datetime.datetime.second`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.second) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.strftime`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.strftime) | 方法 | `` | format -> strftime() style string. |
| [`datetime.datetime.strptime`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.strptime) | 方法 | `` | string, format -> new datetime parsed from a string (like time.strptime()). |
| [`datetime.datetime.time`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.time) | 方法 | `` | Return time object with same time but with tzinfo=None. |
| [`datetime.datetime.timestamp`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.timestamp) | 方法 | `` | Return POSIX timestamp as float. |
| [`datetime.datetime.timetuple`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.timetuple) | 方法 | `` | Return time tuple, compatible with time.localtime(). |
| [`datetime.datetime.timetz`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.timetz) | 方法 | `` | Return time object with same time and tzinfo. |
| [`datetime.datetime.today`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.today) | 方法 | `` | Current date or datetime:  same as self.__class__.fromtimestamp(time.time()). |
| [`datetime.datetime.toordinal`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.toordinal) | 方法 | `` | Return proleptic Gregorian ordinal.  January 1 of year 1 is day 1. |
| [`datetime.datetime.tzinfo`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.tzinfo) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.datetime.tzname`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.tzname) | 方法 | `` | Return self.tzinfo.tzname(self). |
| [`datetime.datetime.utcfromtimestamp`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.utcfromtimestamp) | 方法 | `` | Construct a naive UTC datetime from a POSIX timestamp. |
| [`datetime.datetime.utcnow`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.utcnow) | 方法 | `` | Return a new datetime representing UTC day and time. |
| [`datetime.datetime.utcoffset`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.utcoffset) | 方法 | `` | Return self.tzinfo.utcoffset(self). |
| [`datetime.datetime.utctimetuple`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.utctimetuple) | 方法 | `` | Return UTC time tuple, compatible with time.localtime(). |
| [`datetime.datetime.weekday`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.weekday) | 方法 | `` | Return the day of the week represented by the date. Monday == 0 ... Sunday == 6 |
| [`datetime.datetime.year`](https://docs.python.org/3.12/library/datetime.html#datetime.datetime.year) | 属性 | `` | 参见官方 API 文档。 |

## `datetime.time`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`datetime.time.dst`](https://docs.python.org/3.12/library/datetime.html#datetime.time.dst) | 方法 | `` | Return self.tzinfo.dst(self). |
| [`datetime.time.fold`](https://docs.python.org/3.12/library/datetime.html#datetime.time.fold) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.time.fromisoformat`](https://docs.python.org/3.12/library/datetime.html#datetime.time.fromisoformat) | 方法 | `` | string -> time from a string in ISO 8601 format |
| [`datetime.time.hour`](https://docs.python.org/3.12/library/datetime.html#datetime.time.hour) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.time.isoformat`](https://docs.python.org/3.12/library/datetime.html#datetime.time.isoformat) | 方法 | `` | Return string in ISO 8601 format, [HH[:MM[:SS[.mmm[uuu]]]]][+HH:MM]. |
| [`datetime.time.max`](https://docs.python.org/3.12/library/datetime.html#datetime.time.max) | 属性 | `` | time([hour[, minute[, second[, microsecond[, tzinfo]]]]]) --> a time object |
| [`datetime.time.microsecond`](https://docs.python.org/3.12/library/datetime.html#datetime.time.microsecond) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.time.min`](https://docs.python.org/3.12/library/datetime.html#datetime.time.min) | 属性 | `` | time([hour[, minute[, second[, microsecond[, tzinfo]]]]]) --> a time object |
| [`datetime.time.minute`](https://docs.python.org/3.12/library/datetime.html#datetime.time.minute) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.time.replace`](https://docs.python.org/3.12/library/datetime.html#datetime.time.replace) | 方法 | `` | Return time with new specified fields. |
| [`datetime.time.resolution`](https://docs.python.org/3.12/library/datetime.html#datetime.time.resolution) | 属性 | `` | Difference between two datetime values. |
| [`datetime.time.second`](https://docs.python.org/3.12/library/datetime.html#datetime.time.second) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.time.strftime`](https://docs.python.org/3.12/library/datetime.html#datetime.time.strftime) | 方法 | `` | format -> strftime() style string. |
| [`datetime.time.tzinfo`](https://docs.python.org/3.12/library/datetime.html#datetime.time.tzinfo) | 属性 | `` | 参见官方 API 文档。 |
| [`datetime.time.tzname`](https://docs.python.org/3.12/library/datetime.html#datetime.time.tzname) | 方法 | `` | Return self.tzinfo.tzname(self). |
| [`datetime.time.utcoffset`](https://docs.python.org/3.12/library/datetime.html#datetime.time.utcoffset) | 方法 | `` | Return self.tzinfo.utcoffset(self). |

## `datetime.timedelta`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`datetime.timedelta.days`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta.days) | 属性 | `` | Number of days. |
| [`datetime.timedelta.max`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta.max) | 属性 | `` | Difference between two datetime values. |
| [`datetime.timedelta.microseconds`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta.microseconds) | 属性 | `` | Number of microseconds (>= 0 and less than 1 second). |
| [`datetime.timedelta.min`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta.min) | 属性 | `` | Difference between two datetime values. |
| [`datetime.timedelta.resolution`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta.resolution) | 属性 | `` | Difference between two datetime values. |
| [`datetime.timedelta.seconds`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta.seconds) | 属性 | `` | Number of seconds (>= 0 and less than 1 day). |
| [`datetime.timedelta.total_seconds`](https://docs.python.org/3.12/library/datetime.html#datetime.timedelta.total_seconds) | 方法 | `` | Total seconds in the duration. |

## `datetime.timezone`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`datetime.timezone.dst`](https://docs.python.org/3.12/library/datetime.html#datetime.timezone.dst) | 方法 | `` | Return None. |
| [`datetime.timezone.fromutc`](https://docs.python.org/3.12/library/datetime.html#datetime.timezone.fromutc) | 方法 | `` | datetime in UTC -> datetime in local time. |
| [`datetime.timezone.tzname`](https://docs.python.org/3.12/library/datetime.html#datetime.timezone.tzname) | 方法 | `` | If name is specified when timezone is created, returns the name.  Otherwise returns offset as 'UTC(+\|-)HH:MM'. |
| [`datetime.timezone.utc`](https://docs.python.org/3.12/library/datetime.html#datetime.timezone.utc) | 属性 | `` | Fixed offset from UTC implementation of tzinfo. |
| [`datetime.timezone.utcoffset`](https://docs.python.org/3.12/library/datetime.html#datetime.timezone.utcoffset) | 方法 | `` | Return fixed offset. |

## `datetime.tzinfo`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`datetime.tzinfo.dst`](https://docs.python.org/3.12/library/datetime.html#datetime.tzinfo.dst) | 方法 | `` | datetime -> DST offset as timedelta positive east of UTC. |
| [`datetime.tzinfo.fromutc`](https://docs.python.org/3.12/library/datetime.html#datetime.tzinfo.fromutc) | 方法 | `` | datetime in UTC -> datetime in local time. |
| [`datetime.tzinfo.tzname`](https://docs.python.org/3.12/library/datetime.html#datetime.tzinfo.tzname) | 方法 | `` | datetime -> string name of time zone. |
| [`datetime.tzinfo.utcoffset`](https://docs.python.org/3.12/library/datetime.html#datetime.tzinfo.utcoffset) | 方法 | `` | datetime -> timedelta showing offset from UTC, negative values indicating West of UTC |
