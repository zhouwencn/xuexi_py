<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# sqlite3：SQLite DB-API

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/sqlite3.html](https://docs.python.org/3.12/library/sqlite3.html)

使用 Python DB-API 2.0 访问嵌入式 SQLite，覆盖连接、游标、事务、行工厂、适配器、备份和扩展。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- Connection/Cursor
- 参数化 SQL
- 事务和隔离
- row_factory、adapter/converter

## 常见工作流

- 建立本地持久化
- 执行参数化 CRUD
- 备份或导入内存数据库

## 最小示例

```python
import sqlite3

with sqlite3.connect(":memory:") as connection:
    connection.execute("CREATE TABLE users(name TEXT)")
    connection.execute("INSERT INTO users VALUES (?)", ("Ada",))
    print(connection.execute("SELECT name FROM users").fetchone())
```

## 常见陷阱

- 不要拼接 SQL 参数
- 连接默认有线程限制
- DDL/事务行为需要明确验证

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **105** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
