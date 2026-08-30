<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# setuptools：构建后端

版本基线：**setuptools 84**  
官方文档：[https://setuptools.pypa.io/en/latest/userguide/index.html](https://setuptools.pypa.io/en/latest/userguide/index.html)

读取 pyproject.toml 等配置，发现包、处理元数据、依赖、入口点和数据文件，并构建 sdist/wheel。

## 安装与导入

`python -m pip install setuptools`。

## 核心模型

- build backend
- 包发现
- 项目元数据和依赖
- entry points 与 package data

## 常见工作流

- 配置可安装项目
- 声明命令行入口
- 构建源码和 wheel 分发

## 最小示例

```toml
[build-system]
requires = ["setuptools>=75"]
build-backend = "setuptools.build_meta"
```

## 常见陷阱

- 不要直接运行 setup.py
- 包数据必须显式纳入
- editable install 与普通安装行为不同

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **18** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
