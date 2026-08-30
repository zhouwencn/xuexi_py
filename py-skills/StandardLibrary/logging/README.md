<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# logging：日志系统

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/logging.html](https://docs.python.org/3.12/library/logging.html)

通过 Logger、Handler、Filter、Formatter 和配置系统记录可分级、可路由的运行信息。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- logger 层级和传播
- handler 与 formatter
- dictConfig/fileConfig
- 轮转、队列和网络 handlers

## 常见工作流

- 应用入口统一配置日志
- 库模块使用命名 logger
- 多线程/多进程安全写日志

## 最小示例

```python
import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
logger = logging.getLogger(__name__)
logger.info("service started")
```

## 常见陷阱

- 不要记录密码和 token
- 不要在库导入时调用 basicConfig
- 重复 handler 会造成重复日志

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **174** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
