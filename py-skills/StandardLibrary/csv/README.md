<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# csv：CSV 表格文本

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/csv.html](https://docs.python.org/3.12/library/csv.html)

按方言处理 CSV 行列，支持列表行和字典行。CSV 没有统一类型系统，读取后通常仍需显式转换和校验。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- reader/writer
- DictReader/DictWriter
- dialect 与 Sniffer
- newline 和编码

## 常见工作流

- 读取带表头数据
- 稳定导出列顺序
- 识别分隔符和引号规则

## 最小示例

```python
import csv
from io import StringIO

rows = list(csv.DictReader(StringIO("name,score\nAda,98\n")))
print(rows)
```

## 常见陷阱

- 打开文件应使用 newline=''
- 所有字段默认是字符串
- Sniffer 只是启发式判断

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **39** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
