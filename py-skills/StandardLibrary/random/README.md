<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# random：伪随机数

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/random.html](https://docs.python.org/3.12/library/random.html)

生成可复现的伪随机数、抽样和常见分布；安全 token、密码和密钥必须使用 secrets。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- 模块级生成器与 Random 实例
- seed 和状态
- 序列抽样
- 概率分布

## 常见工作流

- 构造测试数据
- 随机抽样与洗牌
- 隔离可复现随机状态

## 最小示例

```python
from random import Random

rng = Random(42)
print(rng.sample(range(100), k=5))
```

## 常见陷阱

- 不要用于安全用途
- 全局 seed 会耦合测试
- choices 与 sample 是否放回不同

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **32** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
