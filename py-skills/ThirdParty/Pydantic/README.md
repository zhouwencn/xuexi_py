<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# Pydantic：数据验证与序列化

版本基线：**Pydantic 2.13**  
官方文档：[https://docs.pydantic.dev/latest/api/](https://docs.pydantic.dev/latest/api/)

使用类型注解构建运行时验证、转换、序列化和 JSON Schema，涵盖模型、字段、验证器、TypeAdapter 和常用约束类型。

## 安装与导入

`python -m pip install pydantic`。

## 核心模型

- BaseModel/RootModel
- Field/Annotated
- 验证器与序列化器
- TypeAdapter、严格模式和 JSON Schema

## 常见工作流

- 验证 API 数据
- 定义配置和领域 Schema
- 验证非模型类型

## 最小示例

```python
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(min_length=1)
    age: int = Field(ge=0)

print(User.model_validate({"name": "Ada", "age": "20"}))
```

## 常见陷阱

- 转换模式与严格模式不同
- 不要在验证器里产生隐藏副作用
- Pydantic v1/v2 API 不可混用

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **1009** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
