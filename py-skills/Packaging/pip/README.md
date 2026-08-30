<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# pip：包安装器

版本基线：**pip 26.2**  
官方文档：[https://pip.pypa.io/en/stable/cli/](https://pip.pypa.io/en/stable/cli/)

安装、卸载、解析、检查和下载 Python 分发包。用户接口以 python -m pip 命令为主，pip 的内部 Python 模块不是稳定公共 API。

## 安装与导入

`python -m pip install pip`。

## 核心模型

- 需求说明符
- 依赖解析
- 可重复与安全安装
- 缓存和配置

## 常见工作流

- 安装项目依赖
- 检查环境一致性
- 下载或构建 wheel

## 最小示例

```bash
python -m pip install -e ".[dev]"
python -m pip check
python -m pip list --outdated
```

## 常见陷阱

- 始终确认当前解释器
- 不要依赖 pip freeze 代替项目设计
- 谨慎使用 --force-reinstall

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **16** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
