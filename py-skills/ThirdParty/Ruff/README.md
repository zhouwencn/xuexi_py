<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# Ruff：Lint 与格式化

版本基线：**Ruff current**  
官方文档：[https://docs.astral.sh/ruff/](https://docs.astral.sh/ruff/)

通过 ruff check、ruff format 和 pyproject.toml 配置执行快速静态检查、自动修复、导入排序和格式化。

## 安装与导入

`python -m pip install ruff`（Ruff 主要通过 `ruff` 命令使用）。

## 核心模型

- 规则代码和选择
- 安全/不安全修复
- formatter
- 配置继承和文件排除

## 常见工作流

- 检查整个项目
- 自动修复确定问题
- 在 CI 中验证格式

## 最小示例

```bash
ruff check .
ruff check . --fix
ruff format --check .
```

## 常见陷阱

- 不要盲目开启全部规则
- unsafe-fixes 必须审查
- per-file-ignores 应说明原因

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **8** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。
- [Ruff 全规则参考](./02-rule-reference.md)

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
