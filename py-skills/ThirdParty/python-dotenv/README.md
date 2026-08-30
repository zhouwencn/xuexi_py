<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# python-dotenv：.env 加载

版本基线：**python-dotenv 1.2**  
官方文档：[https://bbc2.github.io/python-dotenv/reference/](https://bbc2.github.io/python-dotenv/reference/)

从 .env 文件查找、解析和加载环境变量，并提供 CLI 修改与运行命令。

## 安装与导入

`python -m pip install python-dotenv`。

## 核心模型

- load_dotenv
- dotenv_values
- find_dotenv
- set_key/unset_key 与 CLI

## 常见工作流

- 加载本地开发配置
- 只解析而不污染环境
- 在指定环境下运行命令

## 最小示例

```python
from dotenv import dotenv_values, load_dotenv

load_dotenv()
config = dotenv_values(".env.example")
print(config.get("APP_ENV"))
```

## 常见陷阱

- 真实 .env 不应提交 Git
- override 默认行为要明确
- 环境变量仍然都是字符串

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **14** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
