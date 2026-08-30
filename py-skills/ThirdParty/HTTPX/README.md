<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# HTTPX：同步与异步 HTTP 客户端

版本基线：**HTTPX 0.28**  
官方文档：[https://www.python-httpx.org/api/](https://www.python-httpx.org/api/)

同时提供同步 Client 和异步 AsyncClient，支持 HTTP/2、严格超时、连接池、流式传输、传输层和 ASGI/WSGI 测试。

## 安装与导入

`python -m pip install httpx`。

## 核心模型

- 顶层请求与 Client
- AsyncClient
- Timeout/Limits
- Transport、认证和事件钩子

## 常见工作流

- 调用同步或异步 API
- 流式读取大响应
- 在测试中直接调用 ASGI 应用

## 最小示例

```python
import httpx

with httpx.Client(timeout=10.0) as client:
    response = client.get("https://example.com")
    response.raise_for_status()
```

## 常见陷阱

- 不要在循环里反复创建 Client
- 异步接口必须正确关闭
- 网络超时分为 connect/read/write/pool

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **428** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
