<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# math：实数数学函数

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/math.html](https://docs.python.org/3.12/library/math.html)

提供 C 标准支持的实数数学函数、常量和精确辅助运算。复数使用 cmath，批量数组运算使用 NumPy。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- 数论和组合
- 浮点比较与分类
- 幂、对数和三角函数
- 常量与聚合

## 常见工作流

- 可靠比较浮点数
- 组合数和最大公约数
- 几何及概率计算

## 最小示例

```python
import math

print(math.comb(10, 3))
print(math.isclose(0.1 + 0.2, 0.3))
```

## 常见陷阱

- domain error 会抛 ValueError
- isclose 需要理解容差
- 不要用 float 处理精确金额

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **62** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
