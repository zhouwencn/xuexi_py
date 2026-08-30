<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# Matplotlib：Python 绘图

版本基线：**Matplotlib 3.11**  
官方文档：[https://matplotlib.org/stable/api/index.html](https://matplotlib.org/stable/api/index.html)

围绕 Figure、Axes、Artist、变换、刻度、颜色、布局、后端和动画构建静态、交互和导出图形。

## 安装与导入

`python -m pip install matplotlib`。

## 核心模型

- Figure/Axes/Artist 对象模型
- pyplot 状态接口
- 刻度、图例和注释
- 样式、布局、后端和动画

## 常见工作流

- 绘制统计和时间序列图
- 组合多子图
- 定制 Artist 并导出图片

## 最小示例

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 4, 9], marker="o")
ax.set(title="Squares", xlabel="x", ylabel="x²")
fig.savefig("squares.png", dpi=150)
```

## 常见陷阱

- 复杂代码优先对象式 API
- 保存前显式管理布局
- 大量 Artist 会影响性能

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **6353** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
