<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# Requests：同步 HTTP 客户端

版本基线：**Requests 2.34**  
官方文档：[https://requests.readthedocs.io/en/latest/api/](https://requests.readthedocs.io/en/latest/api/)

提供友好的同步 HTTP 请求、Session、认证、Cookie、流式响应、PreparedRequest、适配器和异常体系。

## 安装与导入

`python -m pip install requests`。

## 核心模型

- 请求方法和 Response
- Session 与连接复用
- 认证、Cookie 和 TLS
- PreparedRequest/Adapter/Hooks

## 常见工作流

- 调用 JSON API
- 上传和下载文件
- 配置重试、代理和证书

## 最小示例

```python
import requests

with requests.Session() as session:
    response = session.get("https://example.com", timeout=10)
    response.raise_for_status()
```

## 常见陷阱

- 所有外部请求都应设置 timeout
- raise_for_status 不会自动调用
- verify=False 会关闭 TLS 校验

## API 完整性

- [公开 API 参考](./01-api-reference.md)
- 当前清单收录 **164** 个官方公开对象或用户接口。
- 私有下划线接口不属于稳定学习范围；废弃接口以官方版本说明为准。

## 练习顺序

1. 不查资料复写最小示例。
2. 为示例增加一个正常边界和一个错误边界。
3. 从 API 参考中选择三个低频接口，说明它们解决的问题。
4. 完成一个包含输入、处理、错误和验证的小任务。
