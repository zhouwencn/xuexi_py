<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# re：正则表达式

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/re.html](https://docs.python.org/3.12/library/re.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **62** 个公开对象或用户命令。私有下划线接口不收录。

## `re`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`re`](https://docs.python.org/3.12/library/re.html#module-re) | 模块 | `` | Support for regular expressions (RE). |
| [`re.A`](https://docs.python.org/3.12/library/re.html#re.A) | 数据/常量 | `` | An enumeration. |
| [`re.ASCII`](https://docs.python.org/3.12/library/re.html#re.ASCII) | 数据/常量 | `` | An enumeration. |
| [`re.compile`](https://docs.python.org/3.12/library/re.html#re.compile) | 函数 | `(pattern, flags=0)` | Compile a regular expression pattern, returning a Pattern object. |
| [`re.DEBUG`](https://docs.python.org/3.12/library/re.html#re.DEBUG) | 数据/常量 | `` | An enumeration. |
| [`re.DOTALL`](https://docs.python.org/3.12/library/re.html#re.DOTALL) | 数据/常量 | `` | An enumeration. |
| [`re.error`](https://docs.python.org/3.12/library/re.html#re.error) | 异常 | `(msg, pattern=None, pos=None)` | Exception raised for invalid regular expressions. |
| [`re.escape`](https://docs.python.org/3.12/library/re.html#re.escape) | 函数 | `(pattern)` | Escape special characters in a string. |
| [`re.findall`](https://docs.python.org/3.12/library/re.html#re.findall) | 函数 | `(pattern, string, flags=0)` | Return a list of all non-overlapping matches in the string. |
| [`re.finditer`](https://docs.python.org/3.12/library/re.html#re.finditer) | 函数 | `(pattern, string, flags=0)` | Return an iterator over all non-overlapping matches in the string.  For each match, the iterator returns a Match object. |
| [`re.fullmatch`](https://docs.python.org/3.12/library/re.html#re.fullmatch) | 函数 | `(pattern, string, flags=0)` | Try to apply the pattern to all of the string, returning a Match object, or None if no match was found. |
| [`re.I`](https://docs.python.org/3.12/library/re.html#re.I) | 数据/常量 | `` | An enumeration. |
| [`re.IGNORECASE`](https://docs.python.org/3.12/library/re.html#re.IGNORECASE) | 数据/常量 | `` | An enumeration. |
| [`re.L`](https://docs.python.org/3.12/library/re.html#re.L) | 数据/常量 | `` | An enumeration. |
| [`re.LOCALE`](https://docs.python.org/3.12/library/re.html#re.LOCALE) | 数据/常量 | `` | An enumeration. |
| [`re.M`](https://docs.python.org/3.12/library/re.html#re.M) | 数据/常量 | `` | An enumeration. |
| [`re.Match`](https://docs.python.org/3.12/library/re.html#re.Match) | 类 | `()` | The result of re.match() and re.search(). Match objects always have a boolean value of True. |
| [`re.match`](https://docs.python.org/3.12/library/re.html#re.match) | 函数 | `(pattern, string, flags=0)` | Try to apply the pattern at the start of the string, returning a Match object, or None if no match was found. |
| [`re.MULTILINE`](https://docs.python.org/3.12/library/re.html#re.MULTILINE) | 数据/常量 | `` | An enumeration. |
| [`re.NOFLAG`](https://docs.python.org/3.12/library/re.html#re.NOFLAG) | 数据/常量 | `` | An enumeration. |
| [`re.Pattern`](https://docs.python.org/3.12/library/re.html#re.Pattern) | 类 | `()` | Compiled regular expression object. |
| [`re.purge`](https://docs.python.org/3.12/library/re.html#re.purge) | 函数 | `()` | Clear the regular expression caches |
| [`re.RegexFlag`](https://docs.python.org/3.12/library/re.html#re.RegexFlag) | 类 | `(*values)` | An enumeration. |
| [`re.S`](https://docs.python.org/3.12/library/re.html#re.S) | 数据/常量 | `` | An enumeration. |
| [`re.search`](https://docs.python.org/3.12/library/re.html#re.search) | 函数 | `(pattern, string, flags=0)` | Scan through string looking for a match to the pattern, returning a Match object, or None if no match was found. |
| [`re.split`](https://docs.python.org/3.12/library/re.html#re.split) | 函数 | `(pattern, string, maxsplit=0, flags=0)` | Split the source string by the occurrences of the pattern, returning a list containing the resulting substrings.  If capturing parentheses are used in pattern, then the text of ... |
| [`re.sub`](https://docs.python.org/3.12/library/re.html#re.sub) | 函数 | `(pattern, repl, string, count=0, flags=0)` | Return the string obtained by replacing the leftmost non-overlapping occurrences of the pattern in string by the replacement repl.  repl can be either a string or a callable; if... |
| [`re.subn`](https://docs.python.org/3.12/library/re.html#re.subn) | 函数 | `(pattern, repl, string, count=0, flags=0)` | Return a 2-tuple containing (new_string, number). new_string is the string obtained by replacing the leftmost non-overlapping occurrences of the pattern in the source string by ... |
| [`re.U`](https://docs.python.org/3.12/library/re.html#re.U) | 数据/常量 | `` | An enumeration. |
| [`re.UNICODE`](https://docs.python.org/3.12/library/re.html#re.UNICODE) | 数据/常量 | `` | An enumeration. |
| [`re.VERBOSE`](https://docs.python.org/3.12/library/re.html#re.VERBOSE) | 数据/常量 | `` | An enumeration. |
| [`re.X`](https://docs.python.org/3.12/library/re.html#re.X) | 数据/常量 | `` | An enumeration. |

## `re.error`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`re.error.colno`](https://docs.python.org/3.12/library/re.html#re.error.colno) | 属性 | `` | 参见官方 API 文档。 |
| [`re.error.lineno`](https://docs.python.org/3.12/library/re.html#re.error.lineno) | 属性 | `` | 参见官方 API 文档。 |
| [`re.error.msg`](https://docs.python.org/3.12/library/re.html#re.error.msg) | 属性 | `` | 参见官方 API 文档。 |
| [`re.error.pattern`](https://docs.python.org/3.12/library/re.html#re.error.pattern) | 属性 | `` | 参见官方 API 文档。 |
| [`re.error.pos`](https://docs.python.org/3.12/library/re.html#re.error.pos) | 属性 | `` | 参见官方 API 文档。 |

## `re.Match`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`re.Match.end`](https://docs.python.org/3.12/library/re.html#re.Match.end) | 方法 | `(self, group=0, /)` | Return index of the end of the substring matched by group. |
| [`re.Match.endpos`](https://docs.python.org/3.12/library/re.html#re.Match.endpos) | 属性 | `` | The index into the string beyond which the RE engine will not go. |
| [`re.Match.expand`](https://docs.python.org/3.12/library/re.html#re.Match.expand) | 方法 | `(self, /, template)` | Return the string obtained by doing backslash substitution on the string template, as done by the sub() method. |
| [`re.Match.group`](https://docs.python.org/3.12/library/re.html#re.Match.group) | 方法 | `` | group([group1, ...]) -> str or tuple. Return subgroup(s) of the match by indices or names. For 0 returns the entire match. |
| [`re.Match.groupdict`](https://docs.python.org/3.12/library/re.html#re.Match.groupdict) | 方法 | `(self, /, default=None)` | Return a dictionary containing all the named subgroups of the match, keyed by the subgroup name. |
| [`re.Match.groups`](https://docs.python.org/3.12/library/re.html#re.Match.groups) | 方法 | `(self, /, default=None)` | Return a tuple containing all the subgroups of the match, from 1. |
| [`re.Match.lastgroup`](https://docs.python.org/3.12/library/re.html#re.Match.lastgroup) | 属性 | `` | The name of the last matched capturing group. |
| [`re.Match.lastindex`](https://docs.python.org/3.12/library/re.html#re.Match.lastindex) | 属性 | `` | The integer index of the last matched capturing group. |
| [`re.Match.pos`](https://docs.python.org/3.12/library/re.html#re.Match.pos) | 属性 | `` | The index into the string at which the RE engine started looking for a match. |
| [`re.Match.re`](https://docs.python.org/3.12/library/re.html#re.Match.re) | 属性 | `` | The regular expression object. |
| [`re.Match.span`](https://docs.python.org/3.12/library/re.html#re.Match.span) | 方法 | `(self, group=0, /)` | For match object m, return the 2-tuple (m.start(group), m.end(group)). |
| [`re.Match.start`](https://docs.python.org/3.12/library/re.html#re.Match.start) | 方法 | `(self, group=0, /)` | Return index of the start of the substring matched by group. |
| [`re.Match.string`](https://docs.python.org/3.12/library/re.html#re.Match.string) | 属性 | `` | The string passed to match() or search(). |

## `re.Pattern`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`re.Pattern.findall`](https://docs.python.org/3.12/library/re.html#re.Pattern.findall) | 方法 | `(self, /, string, pos=0, endpos=9223372036854775807)` | Return a list of all non-overlapping matches of pattern in string. |
| [`re.Pattern.finditer`](https://docs.python.org/3.12/library/re.html#re.Pattern.finditer) | 方法 | `(self, /, string, pos=0, endpos=9223372036854775807)` | Return an iterator over all non-overlapping matches for the RE pattern in string. |
| [`re.Pattern.flags`](https://docs.python.org/3.12/library/re.html#re.Pattern.flags) | 属性 | `` | The regex matching flags. |
| [`re.Pattern.fullmatch`](https://docs.python.org/3.12/library/re.html#re.Pattern.fullmatch) | 方法 | `(self, /, string, pos=0, endpos=9223372036854775807)` | Matches against all of the string. |
| [`re.Pattern.groupindex`](https://docs.python.org/3.12/library/re.html#re.Pattern.groupindex) | 属性 | `` | A dictionary mapping group names to group numbers. |
| [`re.Pattern.groups`](https://docs.python.org/3.12/library/re.html#re.Pattern.groups) | 属性 | `` | The number of capturing groups in the pattern. |
| [`re.Pattern.match`](https://docs.python.org/3.12/library/re.html#re.Pattern.match) | 方法 | `(self, /, string, pos=0, endpos=9223372036854775807)` | Matches zero or more characters at the beginning of the string. |
| [`re.Pattern.pattern`](https://docs.python.org/3.12/library/re.html#re.Pattern.pattern) | 属性 | `` | The pattern string from which the RE object was compiled. |
| [`re.Pattern.search`](https://docs.python.org/3.12/library/re.html#re.Pattern.search) | 方法 | `(self, /, string, pos=0, endpos=9223372036854775807)` | Scan through string looking for a match, and return a corresponding match object instance. |
| [`re.Pattern.split`](https://docs.python.org/3.12/library/re.html#re.Pattern.split) | 方法 | `(self, /, string, maxsplit=0)` | Split string by the occurrences of pattern. |
| [`re.Pattern.sub`](https://docs.python.org/3.12/library/re.html#re.Pattern.sub) | 方法 | `(self, /, repl, string, count=0)` | Return the string obtained by replacing the leftmost non-overlapping occurrences of pattern in string by the replacement repl. |
| [`re.Pattern.subn`](https://docs.python.org/3.12/library/re.html#re.Pattern.subn) | 方法 | `(self, /, repl, string, count=0)` | Return the tuple (new_string, number_of_subs_made) found by replacing the leftmost non-overlapping occurrences of pattern with the replacement repl. |
