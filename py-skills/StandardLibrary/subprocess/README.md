<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# subprocess：子进程管理

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/subprocess.html](https://docs.python.org/3.12/library/subprocess.html)

创建外部进程、传递参数、捕获输出和管理退出状态；优先使用 run，复杂交互再使用 Popen。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- run 与 CompletedProcess
- Popen 生命周期
- PIPE/DEVNULL/STDOUT
- 超时、信号和退出码

## 常见工作流

- 安全执行参数列表
- 捕获文本输出
- 管理长运行子进程

## 最小示例

```python
import subprocess

result = subprocess.run(["python", "--version"], capture_output=True, text=True, check=True)
print(result.stdout or result.stderr)
```

## 常见陷阱

- 外部输入不要配合 shell=True
- 必须处理超时和非零退出码
- PIPE 双向通信可能死锁

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **67** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
