<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# pathlib：对象化路径

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/pathlib.html](https://docs.python.org/3.12/library/pathlib.html)

用 Path 对象表达路径组合、查询、遍历和文件读写，是现代 Python 文件路径操作的首选。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- 纯路径与具体路径
- 路径组合和标准化
- 遍历、匹配和元数据
- 文本/二进制便捷读写

## 常见工作流

- 构造跨平台路径
- 查找指定后缀文件
- 安全创建目录并读写配置

## 最小示例

```python
from pathlib import Path

config = Path("config") / "app.json"
config.parent.mkdir(parents=True, exist_ok=True)
config.write_text("{}", encoding="utf-8")
```

## 常见陷阱

- resolve 与 absolute 不等价
- glob 结果是迭代器
- 写入前确认覆盖语义

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **69** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
