<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# statistics：基础统计

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/statistics.html](https://docs.python.org/3.12/library/statistics.html)

为普通 Python 数值序列提供均值、中位数、方差、相关、线性回归和分布工具，适合小规模教学与脚本。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- 中心趋势
- 离散程度
- 协方差和相关
- NormalDist 与核密度

## 常见工作流

- 生成描述统计
- 比较样本与总体方差
- 构建简单正态分布模型

## 最小示例

```python
from statistics import mean, median, pstdev

values = [10, 12, 13, 15]
print(mean(values), median(values), pstdev(values))
```

## 常见陷阱

- 空数据和样本不足会报错
- mean 对异常值敏感
- 大规模分析优先 NumPy/Pandas

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **34** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
