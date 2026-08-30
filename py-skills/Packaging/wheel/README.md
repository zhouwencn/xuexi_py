<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# wheel：Wheel 文件工具

版本基线：**wheel 0.48**  
官方文档：[https://wheel.readthedocs.io/en/stable/](https://wheel.readthedocs.io/en/stable/)

检查、解包、重打包、转换和修改 .whl 文件标签。现代 setuptools 构建 wheel 不再要求单独安装 wheel。

## 安装与导入

`python -m pip install wheel`。

## 核心模型

- PEP 427
- wheel 文件名和兼容标签
- unpack/pack
- info/tags/convert

## 常见工作流

- 检查 wheel 内容
- 重打包已修改 wheel
- 分析平台兼容标签

## 最小示例

```bash
wheel unpack dist/example.whl
wheel info dist/example.whl
```

## 常见陷阱

- 不要手改 RECORD 后直接压缩
- 标签必须反映真实兼容性
- wheel 不是运行时虚拟环境

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **5** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
