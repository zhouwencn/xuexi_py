<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# sys：解释器与运行时

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/sys.html](https://docs.python.org/3.12/library/sys.html)

访问解释器参数、模块缓存、导入路径、标准流和运行时限制。它描述的是当前 Python 进程，而不是通用操作系统接口。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- argv 与退出码
- stdin/stdout/stderr
- sys.path 与 sys.modules
- 解释器和平台信息

## 常见工作流

- 编写命令行入口
- 诊断导入问题
- 检查运行时版本和字节序

## 最小示例

```python
import sys

print(sys.version_info)
print(sys.argv[1:])
```

## 常见陷阱

- 不要随意修改 sys.path
- 不要删除不理解的 sys.modules 项
- SystemExit 应由程序边界处理

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **145** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
