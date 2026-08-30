<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# csv：CSV 表格文本

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/csv.html](https://docs.python.org/3.12/library/csv.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **39** 个公开对象或用户命令。私有下划线接口不收录。

## `csv`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`csv`](https://docs.python.org/3.12/library/csv.html#module-csv) | 模块 | `` | CSV parsing and writing. |
| [`csv.Dialect`](https://docs.python.org/3.12/library/csv.html#csv.Dialect) | 类 | `()` | Describe a CSV dialect. |
| [`csv.DictReader`](https://docs.python.org/3.12/library/csv.html#csv.DictReader) | 类 | `(f, fieldnames=None, restkey=None, restval=None, dialect='excel', *args, **kwds)` | 参见官方 API 文档。 |
| [`csv.DictWriter`](https://docs.python.org/3.12/library/csv.html#csv.DictWriter) | 类 | `(f, fieldnames, restval='', extrasaction='raise', dialect='excel', *args, **kwds)` | 参见官方 API 文档。 |
| [`csv.Error`](https://docs.python.org/3.12/library/csv.html#csv.Error) | 异常 | `` | Common base class for all non-exit exceptions. |
| [`csv.excel`](https://docs.python.org/3.12/library/csv.html#csv.excel) | 类 | `()` | Describe the usual properties of Excel-generated CSV files. |
| [`csv.excel_tab`](https://docs.python.org/3.12/library/csv.html#csv.excel_tab) | 类 | `()` | Describe the usual properties of Excel-generated TAB-delimited files. |
| [`csv.field_size_limit`](https://docs.python.org/3.12/library/csv.html#csv.field_size_limit) | 函数 | `` | Sets an upper limit on parsed fields. |
| [`csv.get_dialect`](https://docs.python.org/3.12/library/csv.html#csv.get_dialect) | 函数 | `(name)` | Return the dialect instance associated with name. |
| [`csv.list_dialects`](https://docs.python.org/3.12/library/csv.html#csv.list_dialects) | 函数 | `()` | Return a list of all known dialect names. |
| [`csv.QUOTE_ALL`](https://docs.python.org/3.12/library/csv.html#csv.QUOTE_ALL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`csv.QUOTE_MINIMAL`](https://docs.python.org/3.12/library/csv.html#csv.QUOTE_MINIMAL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`csv.QUOTE_NONE`](https://docs.python.org/3.12/library/csv.html#csv.QUOTE_NONE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`csv.QUOTE_NONNUMERIC`](https://docs.python.org/3.12/library/csv.html#csv.QUOTE_NONNUMERIC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`csv.QUOTE_NOTNULL`](https://docs.python.org/3.12/library/csv.html#csv.QUOTE_NOTNULL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`csv.QUOTE_STRINGS`](https://docs.python.org/3.12/library/csv.html#csv.QUOTE_STRINGS) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`csv.reader`](https://docs.python.org/3.12/library/csv.html#csv.reader) | 函数 | `` | csv_reader = reader(iterable [, dialect='excel'] [optional keyword args]) for row in csv_reader: process(row) |
| [`csv.register_dialect`](https://docs.python.org/3.12/library/csv.html#csv.register_dialect) | 函数 | `` | Create a mapping from a string name to a dialect class. dialect = csv.register_dialect(name[, dialect[, **fmtparams]]) |
| [`csv.Sniffer`](https://docs.python.org/3.12/library/csv.html#csv.Sniffer) | 类 | `()` | "Sniffs" the format of a CSV file (i.e. delimiter, quotechar) Returns a Dialect object. |
| [`csv.unix_dialect`](https://docs.python.org/3.12/library/csv.html#csv.unix_dialect) | 类 | `()` | Describe the usual properties of Unix-generated CSV files. |
| [`csv.unregister_dialect`](https://docs.python.org/3.12/library/csv.html#csv.unregister_dialect) | 函数 | `(name)` | Delete the name/dialect mapping associated with a string name. |
| [`csv.writer`](https://docs.python.org/3.12/library/csv.html#csv.writer) | 函数 | `` | csv_writer = csv.writer(fileobj [, dialect='excel'] [optional keyword args]) for row in sequence: csv_writer.writerow(row) |

## `csv.csvreader`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`csv.csvreader.dialect`](https://docs.python.org/3.12/library/csv.html#csv.csvreader.dialect) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.csvreader.line_num`](https://docs.python.org/3.12/library/csv.html#csv.csvreader.line_num) | 属性 | `` | 参见官方 API 文档。 |

## `csv.csvwriter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`csv.csvwriter.dialect`](https://docs.python.org/3.12/library/csv.html#csv.csvwriter.dialect) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.csvwriter.writerow`](https://docs.python.org/3.12/library/csv.html#csv.csvwriter.writerow) | 方法 | `` | 参见官方 API 文档。 |
| [`csv.csvwriter.writerows`](https://docs.python.org/3.12/library/csv.html#csv.csvwriter.writerows) | 方法 | `` | 参见官方 API 文档。 |

## `csv.Dialect`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`csv.Dialect.delimiter`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.delimiter) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.Dialect.doublequote`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.doublequote) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.Dialect.escapechar`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.escapechar) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.Dialect.lineterminator`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.lineterminator) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.Dialect.quotechar`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.quotechar) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.Dialect.quoting`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.quoting) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.Dialect.skipinitialspace`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.skipinitialspace) | 属性 | `` | 参见官方 API 文档。 |
| [`csv.Dialect.strict`](https://docs.python.org/3.12/library/csv.html#csv.Dialect.strict) | 属性 | `` | 参见官方 API 文档。 |

## `csv.DictReader`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`csv.DictReader.fieldnames`](https://docs.python.org/3.12/library/csv.html#csv.DictReader.fieldnames) | 属性 | `` | 参见官方 API 文档。 |

## `csv.DictWriter`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`csv.DictWriter.writeheader`](https://docs.python.org/3.12/library/csv.html#csv.DictWriter.writeheader) | 方法 | `(self)` | 参见官方 API 文档。 |

## `csv.Sniffer`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`csv.Sniffer.has_header`](https://docs.python.org/3.12/library/csv.html#csv.Sniffer.has_header) | 方法 | `(self, sample)` | 参见官方 API 文档。 |
| [`csv.Sniffer.sniff`](https://docs.python.org/3.12/library/csv.html#csv.Sniffer.sniff) | 方法 | `(self, sample, delimiters=None)` | Returns a dialect (or None) corresponding to the sample |
