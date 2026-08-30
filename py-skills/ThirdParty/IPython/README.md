<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# IPython：增强交互式 Python

版本基线：**IPython 9.17**  
官方文档：[https://ipython.readthedocs.io/en/stable/api/index.html](https://ipython.readthedocs.io/en/stable/api/index.html)

提供增强 REPL、对象检查、补全、历史、魔法命令、富展示、嵌入式 shell 和扩展机制。

## 安装与导入

`python -m pip install ipython`。

## 核心模型

- InteractiveShell
- line/cell magics
- display system
- extensions、history 和 embed

## 常见工作流

- 交互探索对象
- 测量和调试代码
- 构建自定义魔法命令

## 最小示例

```bash
%timeit sum(range(1000))
%debug
?dict.get
```

## 常见陷阱

- 魔法命令不是普通 Python 语法
- Notebook 状态可能隐藏执行顺序
- 不要让生产代码依赖交互环境

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **1388** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
