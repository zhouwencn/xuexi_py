<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# HTTPX：同步与异步 HTTP 客户端

版本基线：**HTTPX 0.28**  
官方参考：[https://www.python-httpx.org/api/](https://www.python-httpx.org/api/)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **428** 个公开对象或用户命令。私有下划线接口不收录。

## `httpx`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.__description__` | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| `httpx.__title__` | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| `httpx.__version__` | 数据/常量 | `` | 参见官方 API 文档。 |
| `httpx.ASGITransport` | 类 | `(app: '_ASGIApp', raise_app_exceptions: 'bool' = True, root_path: 'str' = '', client: 'tuple[str, int]' = ('127.0.0.1', 123)) -> 'None'` | A custom AsyncTransport that handles sending requests directly to an ASGI app. |
| `httpx.AsyncBaseTransport` | 类 | `()` | 参见官方 API 文档。 |
| `httpx.AsyncByteStream` | 类 | `()` | 参见官方 API 文档。 |
| `httpx.AsyncClient` | 类 | `(*, auth: 'AuthTypes \| None' = None, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes...` | An asynchronous HTTP client, with connection pooling, HTTP/2, redirects, cookie persistence, etc. |
| `httpx.AsyncHTTPTransport` | 类 | `(verify: 'ssl.SSLContext \| str \| bool' = True, cert: 'CertTypes \| None' = None, trust_env: 'bool' = True, http1: 'bool' = True, http2: 'b...` | 参见官方 API 文档。 |
| `httpx.Auth` | 类 | `()` | Base class for all authentication schemes. |
| `httpx.BaseTransport` | 类 | `()` | 参见官方 API 文档。 |
| `httpx.BasicAuth` | 类 | `(username: 'str \| bytes', password: 'str \| bytes') -> 'None'` | Allows the 'auth' argument to be passed as a (username, password) pair, and uses HTTP Basic authentication. |
| `httpx.ByteStream` | 类 | `(stream: 'bytes') -> 'None'` | 参见官方 API 文档。 |
| `httpx.Client` | 类 | `(*, auth: 'AuthTypes \| None' = None, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes...` | An HTTP client, with connection pooling, HTTP/2, redirects, cookie persistence, etc. |
| `httpx.CloseError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Failed to close a connection. |
| `httpx.codes` | 类 | `(*values)` | HTTP status codes and reason phrases |
| `httpx.ConnectError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Failed to establish a connection. |
| `httpx.ConnectTimeout` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Timed out while connecting to the host. |
| `httpx.CookieConflict` | 类 | `(message: 'str') -> 'None'` | Attempted to lookup a cookie by name, but multiple cookies existed. |
| `httpx.Cookies` | 类 | `(cookies: 'CookieTypes \| None' = None) -> 'None'` | HTTP Cookies, as a mutable mapping. |
| `httpx.create_ssl_context` | 函数 | `(verify: 'ssl.SSLContext \| str \| bool' = True, cert: 'CertTypes \| None' = None, trust_env: 'bool' = True) -> 'ssl.SSLContext'` | 参见官方 API 文档。 |
| `httpx.DecodingError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Decoding of the response failed, due to a malformed encoding. |
| `httpx.delete` | 函数 | `(url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' = None...` | Sends a `DELETE` request. |
| `httpx.DigestAuth` | 类 | `(username: 'str \| bytes', password: 'str \| bytes') -> 'None'` | Base class for all authentication schemes. |
| `httpx.get` | 函数 | `(url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' = None...` | Sends a `GET` request. |
| `httpx.head` | 函数 | `(url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' = None...` | Sends a `HEAD` request. |
| `httpx.Headers` | 类 | `(headers: 'HeaderTypes \| None' = None, encoding: 'str \| None' = None) -> 'None'` | HTTP headers, as a case-insensitive multi-dict. |
| `httpx.HTTPError` | 类 | `(message: 'str') -> 'None'` | Base class for `RequestError` and `HTTPStatusError`. |
| `httpx.HTTPStatusError` | 类 | `(message: 'str', *, request: 'Request', response: 'Response') -> 'None'` | The response had an error HTTP status of 4xx or 5xx. |
| `httpx.HTTPTransport` | 类 | `(verify: 'ssl.SSLContext \| str \| bool' = True, cert: 'CertTypes \| None' = None, trust_env: 'bool' = True, http1: 'bool' = True, http2: 'b...` | 参见官方 API 文档。 |
| `httpx.InvalidURL` | 类 | `(message: 'str') -> 'None'` | URL is improperly formed or cannot be parsed. |
| `httpx.Limits` | 类 | `(*, max_connections: 'int \| None' = None, max_keepalive_connections: 'int \| None' = None, keepalive_expiry: 'float \| None' = 5.0) -> 'None'` | Configuration for limits to various client behaviors. |
| `httpx.LocalProtocolError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | A protocol was violated by the client. |
| `httpx.main` | 函数 | `(*args: 't.Any', **kwargs: 't.Any') -> 't.Any'` | An HTTP command line client. Sends a request and displays the response. |
| `httpx.MockTransport` | 类 | `(handler: 'SyncHandler \| AsyncHandler') -> 'None'` | 参见官方 API 文档。 |
| `httpx.NetRCAuth` | 类 | `(file: 'str \| None' = None) -> 'None'` | Use a 'netrc' file to lookup basic auth credentials based on the url host. |
| `httpx.NetworkError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | The base class for network-related errors. |
| `httpx.options` | 函数 | `(url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' = None...` | Sends an `OPTIONS` request. |
| `httpx.patch` | 函数 | `(url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = None, js...` | Sends a `PATCH` request. |
| `httpx.PoolTimeout` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Timed out waiting to acquire a connection from the pool. |
| `httpx.post` | 函数 | `(url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = None, js...` | Sends a `POST` request. |
| `httpx.ProtocolError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | The protocol was violated. |
| `httpx.Proxy` | 类 | `(url: 'URL \| str', *, ssl_context: 'ssl.SSLContext \| None' = None, auth: 'tuple[str, str] \| None' = None, headers: 'HeaderTypes \| None' =...` | 参见官方 API 文档。 |
| `httpx.ProxyError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | An error occurred while establishing a proxy connection. |
| `httpx.put` | 函数 | `(url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = None, js...` | Sends a `PUT` request. |
| `httpx.QueryParams` | 类 | `(*args: 'QueryParamTypes \| None', **kwargs: 'typing.Any') -> 'None'` | URL query parameters, as a multi-dict. |
| `httpx.ReadError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Failed to receive data from the network. |
| `httpx.ReadTimeout` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Timed out while receiving data from the host. |
| `httpx.RemoteProtocolError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | The protocol was violated by the server. |
| `httpx.Request` | 类 | `(method: 'str', url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes...` | 参见官方 API 文档。 |
| `httpx.request` | 函数 | `(method: 'str', url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, content: 'RequestContent \| None' = None, data: 'RequestData...` | Sends an HTTP request. |
| `httpx.RequestError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Base class for all exceptions that may occur when issuing a `.request()`. |
| `httpx.RequestNotRead` | 类 | `() -> 'None'` | Attempted to access streaming request content, without having called `read()`. |
| `httpx.Response` | 类 | `(status_code: 'int', *, headers: 'HeaderTypes \| None' = None, content: 'ResponseContent \| None' = None, text: 'str \| None' = None, html: ...` | 参见官方 API 文档。 |
| `httpx.ResponseNotRead` | 类 | `() -> 'None'` | Attempted to access streaming response content, without having called `read()`. |
| `httpx.stream` | 函数 | `(method: 'str', url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, content: 'RequestContent \| None' = None, data: 'RequestData...` | Alternative to `httpx.request()` that streams the response body instead of loading it into memory at once. |
| `httpx.StreamClosed` | 类 | `() -> 'None'` | Attempted to read or stream response content, but the request has been closed. |
| `httpx.StreamConsumed` | 类 | `() -> 'None'` | Attempted to read or stream content, but the content has already been streamed. |
| `httpx.StreamError` | 类 | `(message: 'str') -> 'None'` | The base class for stream exceptions. |
| `httpx.SyncByteStream` | 类 | `()` | 参见官方 API 文档。 |
| `httpx.Timeout` | 类 | `(timeout: 'TimeoutTypes \| UnsetType' = <httpx._config.UnsetType object at 0x103747380>, *, connect: 'None \| float \| UnsetType' = <httpx._...` | Timeout configuration. |
| `httpx.TimeoutException` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | The base class for timeout errors. |
| `httpx.TooManyRedirects` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Too many redirects. |
| `httpx.TransportError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Base class for all exceptions that occur at the level of the Transport API. |
| `httpx.UnsupportedProtocol` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Attempted to make a request to an unsupported protocol. |
| `httpx.URL` | 类 | `(url: 'URL \| str' = '', **kwargs: 'typing.Any') -> 'None'` | url = httpx.URL("HTTPS://jo%40email.com:a%20secret@müller.de:1234/pa%20th?search=ab#anchorlink") |
| `httpx.USE_CLIENT_DEFAULT` | 数据/常量 | `` | For some parameters such as `auth=...` and `timeout=...` we need to be able to indicate the default "unset" state, in a way that is distinctly different to using `None`. |
| `httpx.WriteError` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Failed to send data through the network. |
| `httpx.WriteTimeout` | 类 | `(message: 'str', *, request: 'Request \| None' = None) -> 'None'` | Timed out while sending data to the host. |
| `httpx.WSGITransport` | 类 | `(app: 'WSGIApplication', raise_app_exceptions: 'bool' = True, script_name: 'str' = '', remote_addr: 'str' = '127.0.0.1', wsgi_errors: 'ty...` | A custom transport that handles sending requests directly to an WSGI app. The simplest way to use this functionality is to use the `app` argument. |

## `httpx.ASGITransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ASGITransport.aclose` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.ASGITransport.handle_async_request` | 方法 | `(self, request: 'Request') -> 'Response'` | 参见官方 API 文档。 |

## `httpx.AsyncBaseTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.AsyncBaseTransport.aclose` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.AsyncBaseTransport.handle_async_request` | 方法 | `(self, request: 'Request') -> 'Response'` | 参见官方 API 文档。 |

## `httpx.AsyncByteStream`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.AsyncByteStream.aclose` | 方法 | `(self) -> None` | 参见官方 API 文档。 |

## `httpx.AsyncClient`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.AsyncClient.aclose` | 方法 | `(self) -> 'None'` | Close transport and proxies. |
| `httpx.AsyncClient.auth` | 属性 | `` | Authentication class used when none is passed at the request-level. |
| `httpx.AsyncClient.base_url` | 属性 | `` | Base URL to use when sending requests with relative URLs. |
| `httpx.AsyncClient.build_request` | 方法 | `(self, method: 'str', url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFil...` | Build and return a request instance. |
| `httpx.AsyncClient.cookies` | 属性 | `` | Cookie values to include when sending requests. |
| `httpx.AsyncClient.delete` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send a `DELETE` request. |
| `httpx.AsyncClient.event_hooks` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.AsyncClient.get` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send a `GET` request. |
| `httpx.AsyncClient.head` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send a `HEAD` request. |
| `httpx.AsyncClient.headers` | 属性 | `` | HTTP headers to include when sending requests. |
| `httpx.AsyncClient.is_closed` | 属性 | `` | Check if the client being closed |
| `httpx.AsyncClient.options` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send an `OPTIONS` request. |
| `httpx.AsyncClient.params` | 属性 | `` | Query parameters to include in the URL when sending requests. |
| `httpx.AsyncClient.patch` | 方法 | `(self, url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = No...` | Send a `PATCH` request. |
| `httpx.AsyncClient.post` | 方法 | `(self, url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = No...` | Send a `POST` request. |
| `httpx.AsyncClient.put` | 方法 | `(self, url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = No...` | Send a `PUT` request. |
| `httpx.AsyncClient.request` | 方法 | `(self, method: 'str', url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFil...` | Build and send a request. |
| `httpx.AsyncClient.send` | 方法 | `(self, request: 'Request', *, stream: 'bool' = False, auth: 'AuthTypes \| UseClientDefault \| None' = <httpx._client.UseClientDefault objec...` | Send a request. |
| `httpx.AsyncClient.stream` | 方法 | `(self, method: 'str', url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFil...` | Alternative to `httpx.request()` that streams the response body instead of loading it into memory at once. |
| `httpx.AsyncClient.timeout` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.AsyncClient.trust_env` | 属性 | `` | 参见官方 API 文档。 |

## `httpx.AsyncHTTPTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.AsyncHTTPTransport.aclose` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.AsyncHTTPTransport.handle_async_request` | 方法 | `(self, request: 'Request') -> 'Response'` | 参见官方 API 文档。 |

## `httpx.Auth`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Auth.async_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.AsyncGenerator[Request, Response]'` | Execute the authentication flow asynchronously. |
| `httpx.Auth.auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow. |
| `httpx.Auth.requires_request_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.Auth.requires_response_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.Auth.sync_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow synchronously. |

## `httpx.BaseTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.BaseTransport.close` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.BaseTransport.handle_request` | 方法 | `(self, request: 'Request') -> 'Response'` | Send a single HTTP request and return a response. |

## `httpx.BasicAuth`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.BasicAuth.async_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.AsyncGenerator[Request, Response]'` | Execute the authentication flow asynchronously. |
| `httpx.BasicAuth.auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow. |
| `httpx.BasicAuth.requires_request_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.BasicAuth.requires_response_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.BasicAuth.sync_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow synchronously. |

## `httpx.ByteStream`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ByteStream.aclose` | 方法 | `(self) -> None` | 参见官方 API 文档。 |
| `httpx.ByteStream.close` | 方法 | `(self) -> None` | Subclasses can override this method to release any network resources after a request/response cycle is complete. |

## `httpx.Client`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Client.auth` | 属性 | `` | Authentication class used when none is passed at the request-level. |
| `httpx.Client.base_url` | 属性 | `` | Base URL to use when sending requests with relative URLs. |
| `httpx.Client.build_request` | 方法 | `(self, method: 'str', url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFil...` | Build and return a request instance. |
| `httpx.Client.close` | 方法 | `(self) -> 'None'` | Close transport and proxies. |
| `httpx.Client.cookies` | 属性 | `` | Cookie values to include when sending requests. |
| `httpx.Client.delete` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send a `DELETE` request. |
| `httpx.Client.event_hooks` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Client.get` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send a `GET` request. |
| `httpx.Client.head` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send a `HEAD` request. |
| `httpx.Client.headers` | 属性 | `` | HTTP headers to include when sending requests. |
| `httpx.Client.is_closed` | 属性 | `` | Check if the client being closed |
| `httpx.Client.options` | 方法 | `(self, url: 'URL \| str', *, params: 'QueryParamTypes \| None' = None, headers: 'HeaderTypes \| None' = None, cookies: 'CookieTypes \| None' ...` | Send an `OPTIONS` request. |
| `httpx.Client.params` | 属性 | `` | Query parameters to include in the URL when sending requests. |
| `httpx.Client.patch` | 方法 | `(self, url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = No...` | Send a `PATCH` request. |
| `httpx.Client.post` | 方法 | `(self, url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = No...` | Send a `POST` request. |
| `httpx.Client.put` | 方法 | `(self, url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFiles \| None' = No...` | Send a `PUT` request. |
| `httpx.Client.request` | 方法 | `(self, method: 'str', url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFil...` | Build and send a request. |
| `httpx.Client.send` | 方法 | `(self, request: 'Request', *, stream: 'bool' = False, auth: 'AuthTypes \| UseClientDefault \| None' = <httpx._client.UseClientDefault objec...` | Send a request. |
| `httpx.Client.stream` | 方法 | `(self, method: 'str', url: 'URL \| str', *, content: 'RequestContent \| None' = None, data: 'RequestData \| None' = None, files: 'RequestFil...` | Alternative to `httpx.request()` that streams the response body instead of loading it into memory at once. |
| `httpx.Client.timeout` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Client.trust_env` | 属性 | `` | 参见官方 API 文档。 |

## `httpx.CloseError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.CloseError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.CloseError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.CloseError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.CloseError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.codes`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.codes.ACCEPTED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.ALREADY_REPORTED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.as_integer_ratio` | 方法 | `(self, /)` | Return a pair of integers, whose ratio is equal to the original int. |
| `httpx.codes.BAD_GATEWAY` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.BAD_REQUEST` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.bit_count` | 方法 | `(self, /)` | Number of ones in the binary representation of the absolute value of self. |
| `httpx.codes.bit_length` | 方法 | `(self, /)` | Number of bits necessary to represent self in binary. |
| `httpx.codes.CONFLICT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.conjugate` | 方法 | `(self, /)` | Returns self, the complex conjugate of any int. |
| `httpx.codes.CONTINUE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.CREATED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.denominator` | 属性 | `` | the denominator of a rational number in lowest terms |
| `httpx.codes.EARLY_HINTS` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.EXPECTATION_FAILED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.FAILED_DEPENDENCY` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.FORBIDDEN` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.FOUND` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.from_bytes` | 方法 | `(type, /, bytes, byteorder='big', *, signed=False)` | Return the integer represented by the given array of bytes. |
| `httpx.codes.GATEWAY_TIMEOUT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.GONE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.HTTP_VERSION_NOT_SUPPORTED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.IM_A_TEAPOT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.IM_USED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.imag` | 属性 | `` | the imaginary part of a complex number |
| `httpx.codes.INSUFFICIENT_STORAGE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.INTERNAL_SERVER_ERROR` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.is_integer` | 方法 | `(self, /)` | Returns True. Exists for duck type compatibility with float.is_integer. |
| `httpx.codes.LENGTH_REQUIRED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.LOCKED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.LOOP_DETECTED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.METHOD_NOT_ALLOWED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.MISDIRECTED_REQUEST` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.MOVED_PERMANENTLY` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.MULTI_STATUS` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.MULTIPLE_CHOICES` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NETWORK_AUTHENTICATION_REQUIRED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NO_CONTENT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NON_AUTHORITATIVE_INFORMATION` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NOT_ACCEPTABLE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NOT_EXTENDED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NOT_FOUND` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NOT_IMPLEMENTED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.NOT_MODIFIED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.numerator` | 属性 | `` | the numerator of a rational number in lowest terms |
| `httpx.codes.OK` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.PARTIAL_CONTENT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.PAYMENT_REQUIRED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.PERMANENT_REDIRECT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.PRECONDITION_FAILED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.PRECONDITION_REQUIRED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.PROCESSING` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.PROXY_AUTHENTICATION_REQUIRED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.real` | 属性 | `` | the real part of a complex number |
| `httpx.codes.REQUEST_ENTITY_TOO_LARGE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.REQUEST_HEADER_FIELDS_TOO_LARGE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.REQUEST_TIMEOUT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.REQUEST_URI_TOO_LONG` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.REQUESTED_RANGE_NOT_SATISFIABLE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.RESET_CONTENT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.SEE_OTHER` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.SERVICE_UNAVAILABLE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.SWITCHING_PROTOCOLS` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.TEMPORARY_REDIRECT` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.to_bytes` | 方法 | `(self, /, length=1, byteorder='big', *, signed=False)` | Return an array of bytes representing an integer. |
| `httpx.codes.TOO_EARLY` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.TOO_MANY_REQUESTS` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.UNAUTHORIZED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.UNAVAILABLE_FOR_LEGAL_REASONS` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.UNPROCESSABLE_ENTITY` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.UNSUPPORTED_MEDIA_TYPE` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.UPGRADE_REQUIRED` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.USE_PROXY` | 属性 | `` | HTTP status codes and reason phrases |
| `httpx.codes.VARIANT_ALSO_NEGOTIATES` | 属性 | `` | HTTP status codes and reason phrases |

## `httpx.ConnectError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ConnectError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.ConnectError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ConnectError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ConnectError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.ConnectTimeout`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ConnectTimeout.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.ConnectTimeout.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ConnectTimeout.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ConnectTimeout.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.CookieConflict`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.CookieConflict.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.CookieConflict.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.CookieConflict.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.Cookies`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Cookies.clear` | 方法 | `(self, domain: 'str \| None' = None, path: 'str \| None' = None) -> 'None'` | Delete all cookies. Optionally include a domain and path in order to only delete a subset of all the cookies. |
| `httpx.Cookies.delete` | 方法 | `(self, name: 'str', domain: 'str \| None' = None, path: 'str \| None' = None) -> 'None'` | Delete a cookie by name. May optionally include domain and path in order to specify exactly which cookie to delete. |
| `httpx.Cookies.extract_cookies` | 方法 | `(self, response: 'Response') -> 'None'` | Loads any cookies based on the response `Set-Cookie` headers. |
| `httpx.Cookies.get` | 方法 | `(self, name: 'str', default: 'str \| None' = None, domain: 'str \| None' = None, path: 'str \| None' = None) -> 'str \| None'` | Get a cookie by name. May optionally include domain and path in order to specify exactly which cookie to retrieve. |
| `httpx.Cookies.items` | 方法 | `(self)` | D.items() -> a set-like object providing a view on D's items |
| `httpx.Cookies.keys` | 方法 | `(self)` | D.keys() -> a set-like object providing a view on D's keys |
| `httpx.Cookies.pop` | 方法 | `(self, key, default=<object object at 0x100d981a0>)` | D.pop(k[,d]) -> v, remove specified key and return the corresponding value. If key is not found, d is returned if given, otherwise KeyError is raised. |
| `httpx.Cookies.popitem` | 方法 | `(self)` | D.popitem() -> (k, v), remove and return some (key, value) pair as a 2-tuple; but raise KeyError if D is empty. |
| `httpx.Cookies.set` | 方法 | `(self, name: 'str', value: 'str', domain: 'str' = '', path: 'str' = '/') -> 'None'` | Set a cookie value by name. May optionally include domain and path. |
| `httpx.Cookies.set_cookie_header` | 方法 | `(self, request: 'Request') -> 'None'` | Sets an appropriate 'Cookie:' HTTP header on the `Request`. |
| `httpx.Cookies.setdefault` | 方法 | `(self, key, default=None)` | D.setdefault(k[,d]) -> D.get(k,d), also set D[k]=d if k not in D |
| `httpx.Cookies.update` | 方法 | `(self, cookies: 'CookieTypes \| None' = None) -> 'None'` | D.update([E, ]**F) -> None.  Update D from mapping/iterable E and F. If E present and has a .keys() method, does:     for k in E.keys(): D[k] = E[k] If E present and lacks .keys... |
| `httpx.Cookies.values` | 方法 | `(self)` | D.values() -> an object providing a view on D's values |

## `httpx.DecodingError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.DecodingError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.DecodingError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.DecodingError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.DecodingError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.DigestAuth`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.DigestAuth.async_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.AsyncGenerator[Request, Response]'` | Execute the authentication flow asynchronously. |
| `httpx.DigestAuth.auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow. |
| `httpx.DigestAuth.requires_request_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.DigestAuth.requires_response_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.DigestAuth.sync_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow synchronously. |

## `httpx.Headers`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Headers.clear` | 方法 | `(self)` | D.clear() -> None.  Remove all items from D. |
| `httpx.Headers.copy` | 方法 | `(self) -> 'Headers'` | 参见官方 API 文档。 |
| `httpx.Headers.encoding` | 属性 | `` | Header encoding is mandated as ascii, but we allow fallbacks to utf-8 or iso-8859-1. |
| `httpx.Headers.get` | 方法 | `(self, key: 'str', default: 'typing.Any' = None) -> 'typing.Any'` | Return a header value. If multiple occurrences of the header occur then concatenate them together with commas. |
| `httpx.Headers.get_list` | 方法 | `(self, key: 'str', split_commas: 'bool' = False) -> 'list[str]'` | Return a list of all header values for a given key. If `split_commas=True` is passed, then any comma separated header values are split into multiple return strings. |
| `httpx.Headers.items` | 方法 | `(self) -> 'typing.ItemsView[str, str]'` | Return `(key, value)` items of headers. Concatenate headers into a single comma separated value when a key occurs multiple times. |
| `httpx.Headers.keys` | 方法 | `(self) -> 'typing.KeysView[str]'` | D.keys() -> a set-like object providing a view on D's keys |
| `httpx.Headers.multi_items` | 方法 | `(self) -> 'list[tuple[str, str]]'` | Return a list of `(key, value)` pairs of headers. Allow multiple occurrences of the same key without concatenating into a single comma separated value. |
| `httpx.Headers.pop` | 方法 | `(self, key, default=<object object at 0x100d981a0>)` | D.pop(k[,d]) -> v, remove specified key and return the corresponding value. If key is not found, d is returned if given, otherwise KeyError is raised. |
| `httpx.Headers.popitem` | 方法 | `(self)` | D.popitem() -> (k, v), remove and return some (key, value) pair as a 2-tuple; but raise KeyError if D is empty. |
| `httpx.Headers.raw` | 属性 | `` | Returns a list of the raw header items, as byte pairs. |
| `httpx.Headers.setdefault` | 方法 | `(self, key, default=None)` | D.setdefault(k[,d]) -> D.get(k,d), also set D[k]=d if k not in D |
| `httpx.Headers.update` | 方法 | `(self, headers: 'HeaderTypes \| None' = None) -> 'None'` | D.update([E, ]**F) -> None.  Update D from mapping/iterable E and F. If E present and has a .keys() method, does:     for k in E.keys(): D[k] = E[k] If E present and lacks .keys... |
| `httpx.Headers.values` | 方法 | `(self) -> 'typing.ValuesView[str]'` | D.values() -> an object providing a view on D's values |

## `httpx.HTTPError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.HTTPError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.HTTPError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.HTTPError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.HTTPError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.HTTPStatusError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.HTTPStatusError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.HTTPStatusError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.HTTPStatusError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.HTTPStatusError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.HTTPTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.HTTPTransport.close` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.HTTPTransport.handle_request` | 方法 | `(self, request: 'Request') -> 'Response'` | Send a single HTTP request and return a response. |

## `httpx.InvalidURL`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.InvalidURL.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.InvalidURL.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.InvalidURL.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.LocalProtocolError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.LocalProtocolError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.LocalProtocolError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.LocalProtocolError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.LocalProtocolError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.MockTransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.MockTransport.aclose` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.MockTransport.close` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.MockTransport.handle_async_request` | 方法 | `(self, request: 'Request') -> 'Response'` | 参见官方 API 文档。 |
| `httpx.MockTransport.handle_request` | 方法 | `(self, request: 'Request') -> 'Response'` | Send a single HTTP request and return a response. |

## `httpx.NetRCAuth`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.NetRCAuth.async_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.AsyncGenerator[Request, Response]'` | Execute the authentication flow asynchronously. |
| `httpx.NetRCAuth.auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow. |
| `httpx.NetRCAuth.requires_request_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.NetRCAuth.requires_response_body` | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| `httpx.NetRCAuth.sync_auth_flow` | 方法 | `(self, request: 'Request') -> 'typing.Generator[Request, Response, None]'` | Execute the authentication flow synchronously. |

## `httpx.NetworkError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.NetworkError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.NetworkError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.NetworkError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.NetworkError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.PoolTimeout`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.PoolTimeout.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.PoolTimeout.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.PoolTimeout.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.PoolTimeout.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.ProtocolError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ProtocolError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.ProtocolError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ProtocolError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ProtocolError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.Proxy`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Proxy.raw_auth` | 属性 | `` | 参见官方 API 文档。 |

## `httpx.ProxyError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ProxyError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.ProxyError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ProxyError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ProxyError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.QueryParams`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.QueryParams.add` | 方法 | `(self, key: 'str', value: 'typing.Any' = None) -> 'QueryParams'` | Return a new QueryParams instance, setting or appending the value of a key. |
| `httpx.QueryParams.get` | 方法 | `(self, key: 'typing.Any', default: 'typing.Any' = None) -> 'typing.Any'` | Get a value from the query param for a given key. If the key occurs more than once, then only the first value is returned. |
| `httpx.QueryParams.get_list` | 方法 | `(self, key: 'str') -> 'list[str]'` | Get all values from the query param for a given key. |
| `httpx.QueryParams.items` | 方法 | `(self) -> 'typing.ItemsView[str, str]'` | Return all items in the query params. If a key occurs more than once only the first item for that key is returned. |
| `httpx.QueryParams.keys` | 方法 | `(self) -> 'typing.KeysView[str]'` | Return all the keys in the query params. |
| `httpx.QueryParams.merge` | 方法 | `(self, params: 'QueryParamTypes \| None' = None) -> 'QueryParams'` | Return a new QueryParams instance, updated with. |
| `httpx.QueryParams.multi_items` | 方法 | `(self) -> 'list[tuple[str, str]]'` | Return all items in the query params. Allow duplicate keys to occur. |
| `httpx.QueryParams.remove` | 方法 | `(self, key: 'str') -> 'QueryParams'` | Return a new QueryParams instance, removing the value of a key. |
| `httpx.QueryParams.set` | 方法 | `(self, key: 'str', value: 'typing.Any' = None) -> 'QueryParams'` | Return a new QueryParams instance, setting the value of a key. |
| `httpx.QueryParams.update` | 方法 | `(self, params: 'QueryParamTypes \| None' = None) -> 'None'` | 参见官方 API 文档。 |
| `httpx.QueryParams.values` | 方法 | `(self) -> 'typing.ValuesView[str]'` | Return all the values in the query params. If a key occurs more than once only the first item for that key is returned. |

## `httpx.ReadError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ReadError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.ReadError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ReadError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ReadError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.ReadTimeout`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ReadTimeout.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.ReadTimeout.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ReadTimeout.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ReadTimeout.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.RemoteProtocolError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.RemoteProtocolError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.RemoteProtocolError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.RemoteProtocolError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.RemoteProtocolError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.Request`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Request.aread` | 方法 | `(self) -> 'bytes'` | Read and return the request content. |
| `httpx.Request.content` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Request.read` | 方法 | `(self) -> 'bytes'` | Read and return the request content. |

## `httpx.RequestError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.RequestError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.RequestError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.RequestError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.RequestError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.RequestNotRead`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.RequestNotRead.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.RequestNotRead.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.RequestNotRead.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.Response`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Response.aclose` | 方法 | `(self) -> 'None'` | Close the response and release the connection. Automatically called if the response body is read to completion. |
| `httpx.Response.aiter_bytes` | 方法 | `(self, chunk_size: 'int \| None' = None) -> 'typing.AsyncIterator[bytes]'` | A byte-iterator over the decoded response content. This allows us to handle gzip, deflate, brotli, and zstd encoded responses. |
| `httpx.Response.aiter_lines` | 方法 | `(self) -> 'typing.AsyncIterator[str]'` | 参见官方 API 文档。 |
| `httpx.Response.aiter_raw` | 方法 | `(self, chunk_size: 'int \| None' = None) -> 'typing.AsyncIterator[bytes]'` | A byte-iterator over the raw response content. |
| `httpx.Response.aiter_text` | 方法 | `(self, chunk_size: 'int \| None' = None) -> 'typing.AsyncIterator[str]'` | A str-iterator over the decoded response content that handles both gzip, deflate, etc but also detects the content's string encoding. |
| `httpx.Response.aread` | 方法 | `(self) -> 'bytes'` | Read and return the response content. |
| `httpx.Response.charset_encoding` | 属性 | `` | Return the encoding, as specified by the Content-Type header. |
| `httpx.Response.close` | 方法 | `(self) -> 'None'` | Close the response and release the connection. Automatically called if the response body is read to completion. |
| `httpx.Response.content` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Response.cookies` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Response.elapsed` | 属性 | `` | Returns the time taken for the complete request/response cycle to complete. |
| `httpx.Response.encoding` | 属性 | `` | Return an encoding to use for decoding the byte content into text. The priority for determining this is given by... |
| `httpx.Response.has_redirect_location` | 属性 | `` | Returns True for 3xx responses with a properly formed URL redirection, `False` otherwise. |
| `httpx.Response.http_version` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Response.is_client_error` | 属性 | `` | A property which is `True` for 4xx status codes, `False` otherwise. |
| `httpx.Response.is_error` | 属性 | `` | A property which is `True` for 4xx and 5xx status codes, `False` otherwise. |
| `httpx.Response.is_informational` | 属性 | `` | A property which is `True` for 1xx status codes, `False` otherwise. |
| `httpx.Response.is_redirect` | 属性 | `` | A property which is `True` for 3xx status codes, `False` otherwise. |
| `httpx.Response.is_server_error` | 属性 | `` | A property which is `True` for 5xx status codes, `False` otherwise. |
| `httpx.Response.is_success` | 属性 | `` | A property which is `True` for 2xx status codes, `False` otherwise. |
| `httpx.Response.iter_bytes` | 方法 | `(self, chunk_size: 'int \| None' = None) -> 'typing.Iterator[bytes]'` | A byte-iterator over the decoded response content. This allows us to handle gzip, deflate, brotli, and zstd encoded responses. |
| `httpx.Response.iter_lines` | 方法 | `(self) -> 'typing.Iterator[str]'` | 参见官方 API 文档。 |
| `httpx.Response.iter_raw` | 方法 | `(self, chunk_size: 'int \| None' = None) -> 'typing.Iterator[bytes]'` | A byte-iterator over the raw response content. |
| `httpx.Response.iter_text` | 方法 | `(self, chunk_size: 'int \| None' = None) -> 'typing.Iterator[str]'` | A str-iterator over the decoded response content that handles both gzip, deflate, etc but also detects the content's string encoding. |
| `httpx.Response.json` | 方法 | `(self, **kwargs: 'typing.Any') -> 'typing.Any'` | 参见官方 API 文档。 |
| `httpx.Response.links` | 属性 | `` | Returns the parsed header links of the response, if any |
| `httpx.Response.num_bytes_downloaded` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Response.raise_for_status` | 方法 | `(self) -> 'Response'` | Raise the `HTTPStatusError` if one occurred. |
| `httpx.Response.read` | 方法 | `(self) -> 'bytes'` | Read and return the response content. |
| `httpx.Response.reason_phrase` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Response.request` | 属性 | `` | Returns the request instance associated to the current response. |
| `httpx.Response.text` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.Response.url` | 属性 | `` | Returns the URL for which the request was made. |

## `httpx.ResponseNotRead`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.ResponseNotRead.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.ResponseNotRead.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.ResponseNotRead.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.StreamClosed`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.StreamClosed.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.StreamClosed.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.StreamClosed.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.StreamConsumed`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.StreamConsumed.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.StreamConsumed.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.StreamConsumed.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.StreamError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.StreamError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.StreamError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.StreamError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.SyncByteStream`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.SyncByteStream.close` | 方法 | `(self) -> None` | Subclasses can override this method to release any network resources after a request/response cycle is complete. |

## `httpx.Timeout`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.Timeout.as_dict` | 方法 | `(self) -> 'dict[str, float \| None]'` | 参见官方 API 文档。 |

## `httpx.TimeoutException`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.TimeoutException.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.TimeoutException.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.TimeoutException.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.TimeoutException.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.TooManyRedirects`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.TooManyRedirects.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.TooManyRedirects.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.TooManyRedirects.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.TooManyRedirects.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.TransportError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.TransportError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.TransportError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.TransportError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.TransportError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.UnsupportedProtocol`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.UnsupportedProtocol.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.UnsupportedProtocol.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.UnsupportedProtocol.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.UnsupportedProtocol.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.URL`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.URL.copy_add_param` | 方法 | `(self, key: 'str', value: 'typing.Any' = None) -> 'URL'` | 参见官方 API 文档。 |
| `httpx.URL.copy_merge_params` | 方法 | `(self, params: 'QueryParamTypes') -> 'URL'` | 参见官方 API 文档。 |
| `httpx.URL.copy_remove_param` | 方法 | `(self, key: 'str') -> 'URL'` | 参见官方 API 文档。 |
| `httpx.URL.copy_set_param` | 方法 | `(self, key: 'str', value: 'typing.Any' = None) -> 'URL'` | 参见官方 API 文档。 |
| `httpx.URL.copy_with` | 方法 | `(self, **kwargs: 'typing.Any') -> 'URL'` | Copy this URL, returning a new URL with some components altered. Accepts the same set of parameters as the components that are made available via properties on the `URL` class. |
| `httpx.URL.fragment` | 属性 | `` | The URL fragments, as used in HTML anchors. As a string, without the leading '#'. |
| `httpx.URL.host` | 属性 | `` | The URL host as a string. Always normalized to lowercase, with IDNA hosts decoded into unicode. |
| `httpx.URL.is_absolute_url` | 属性 | `` | Return `True` for absolute URLs such as 'http://example.com/path', and `False` for relative URLs such as '/path'. |
| `httpx.URL.is_relative_url` | 属性 | `` | Return `False` for absolute URLs such as 'http://example.com/path', and `True` for relative URLs such as '/path'. |
| `httpx.URL.join` | 方法 | `(self, url: 'URL \| str') -> 'URL'` | Return an absolute URL, using this URL as the base. |
| `httpx.URL.netloc` | 属性 | `` | Either `<host>` or `<host>:<port>` as bytes. Always normalized to lowercase, and IDNA encoded. |
| `httpx.URL.params` | 属性 | `` | The URL query parameters, neatly parsed and packaged into an immutable multidict representation. |
| `httpx.URL.password` | 属性 | `` | The URL password as a string, with URL decoding applied. For example: "a secret" |
| `httpx.URL.path` | 属性 | `` | The URL path as a string. Excluding the query string, and URL decoded. |
| `httpx.URL.port` | 属性 | `` | The URL port as an integer. |
| `httpx.URL.query` | 属性 | `` | The URL query string, as raw bytes, excluding the leading b"?". |
| `httpx.URL.raw` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.URL.raw_host` | 属性 | `` | The raw bytes representation of the URL host. Always normalized to lowercase, and IDNA encoded. |
| `httpx.URL.raw_path` | 属性 | `` | The complete URL path and query string as raw bytes. Used as the target when constructing HTTP requests. |
| `httpx.URL.raw_scheme` | 属性 | `` | The raw bytes representation of the URL scheme, such as b"http", b"https". Always normalised to lowercase. |
| `httpx.URL.scheme` | 属性 | `` | The URL scheme, such as "http", "https". Always normalised to lowercase. |
| `httpx.URL.userinfo` | 属性 | `` | The URL userinfo as a raw bytestring. For example: b"jo%40email.com:a%20secret". |
| `httpx.URL.username` | 属性 | `` | The URL username as a string, with URL decoding applied. For example: "jo@email.com" |

## `httpx.WriteError`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.WriteError.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.WriteError.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.WriteError.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.WriteError.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.WriteTimeout`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.WriteTimeout.add_note` | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| `httpx.WriteTimeout.args` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.WriteTimeout.request` | 属性 | `` | 参见官方 API 文档。 |
| `httpx.WriteTimeout.with_traceback` | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |

## `httpx.WSGITransport`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| `httpx.WSGITransport.close` | 方法 | `(self) -> 'None'` | 参见官方 API 文档。 |
| `httpx.WSGITransport.handle_request` | 方法 | `(self, request: 'Request') -> 'Response'` | Send a single HTTP request and return a response. |
