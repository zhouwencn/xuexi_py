<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# json：JSON 编解码

版本基线：**Python 3.12**  
官方文档：[https://docs.python.org/3.12/library/json.html](https://docs.python.org/3.12/library/json.html)

在 JSON 文本、文件流和 Python 基础对象之间转换；重点理解序列化边界、数字精度、编码和自定义类型。

## 安装与导入

Python 3.12 标准库，无需安装。

## 核心模型

- loads/dumps 与 load/dump
- 编码器和解码器
- ensure_ascii、indent、sort_keys
- 自定义 default/object_hook

## 常见工作流

- 读取 API 响应
- 保存 UTF-8 配置
- 扩展日期等非原生类型

## 最小示例

```python
import json

payload = {"name": "Ada", "active": True}
text = json.dumps(payload, ensure_ascii=False)
print(json.loads(text))
```

## 常见陷阱

- JSON 不是任意 Python 对象格式
- NaN 默认行为不完全符合严格 JSON
- 不要反序列化后跳过结构校验

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **19** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
