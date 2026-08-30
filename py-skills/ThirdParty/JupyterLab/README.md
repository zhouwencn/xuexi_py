<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# JupyterLab：交互式开发环境

版本基线：**JupyterLab 4.6**  
官方文档：[https://jupyterlab.readthedocs.io/en/stable/](https://jupyterlab.readthedocs.io/en/stable/)

Jupyter 的浏览器开发环境，整合 Notebook、终端、编辑器、调试器、扩展、工作区和服务器配置。它主要是应用和 CLI，不是日常导入的 Python API。

## 安装与导入

`python -m pip install jupyterlab`（主要通过 `jupyter lab` 命令使用）。

## 核心模型

- kernel 与 notebook
- server 与 workspace
- 扩展管理
- 配置、导出和安全

## 常见工作流

- 启动隔离的学习环境
- 管理扩展与工作区
- 调试并导出 Notebook

## 最小示例

```bash
jupyter lab
jupyter lab --no-browser
jupyter labextension list
```

## 常见陷阱

- 按顺序重跑全部单元格
- 不要在 Notebook 中保存密钥
- 生产逻辑应迁移到可测试模块

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **7** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
