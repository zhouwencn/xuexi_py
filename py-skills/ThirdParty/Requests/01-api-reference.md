<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# Requests：同步 HTTP 客户端

版本基线：**Requests 2.34**  
官方参考：[https://requests.readthedocs.io/en/latest/api/](https://requests.readthedocs.io/en/latest/api/)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **164** 个公开对象或用户命令。私有下划线接口不收录。

## `requests`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests`](https://requests.readthedocs.io/en/latest/api/#module-requests) | 模块 | `` | Requests HTTP Library ~~~~~~~~~~~~~~~~~~~~~ |
| [`requests.codes`](https://requests.readthedocs.io/en/latest/api/#requests.codes) | 属性 | `` | Dictionary lookup object. |
| [`requests.ConnectionError`](https://requests.readthedocs.io/en/latest/api/#requests.ConnectionError) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | A Connection error occurred. |
| [`requests.ConnectTimeout`](https://requests.readthedocs.io/en/latest/api/#requests.ConnectTimeout) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | The request timed out while trying to connect to the remote server. |
| [`requests.delete`](https://requests.readthedocs.io/en/latest/api/#requests.delete) | 函数 | `(url: '_t.UriType', **kwargs: 'Unpack[_t.RequestKwargs]') -> 'Response'` | Sends a DELETE request. |
| [`requests.get`](https://requests.readthedocs.io/en/latest/api/#requests.get) | 函数 | `(url: '_t.UriType', params: '_t.ParamsType' = None, **kwargs: 'Unpack[_t.GetKwargs]') -> 'Response'` | Sends a GET request. |
| [`requests.head`](https://requests.readthedocs.io/en/latest/api/#requests.head) | 函数 | `(url: '_t.UriType', **kwargs: 'Unpack[_t.RequestKwargs]') -> 'Response'` | Sends a HEAD request. |
| [`requests.HTTPError`](https://requests.readthedocs.io/en/latest/api/#requests.HTTPError) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | An HTTP error occurred. |
| [`requests.JSONDecodeError`](https://requests.readthedocs.io/en/latest/api/#requests.JSONDecodeError) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | Couldn't decode the text into json |
| [`requests.models`](https://requests.readthedocs.io/en/latest/user/quickstart/#module-requests.models) | 模块 | `` | requests.models ~~~~~~~~~~~~~~~ |
| [`requests.patch`](https://requests.readthedocs.io/en/latest/api/#requests.patch) | 函数 | `(url: '_t.UriType', data: '_t.DataType' = None, **kwargs: 'Unpack[_t.DataKwargs]') -> 'Response'` | Sends a PATCH request. |
| [`requests.post`](https://requests.readthedocs.io/en/latest/api/#requests.post) | 函数 | `(url: '_t.UriType', data: '_t.DataType' = None, json: '_t.JsonType' = None, **kwargs: 'Unpack[_t.PostKwargs]') -> 'Response'` | Sends a POST request. |
| [`requests.PreparedRequest`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest) | 类 | `() -> 'None'` | The fully mutable :class:`PreparedRequest <PreparedRequest>` object, containing the exact bytes that will be sent to the server. |
| [`requests.put`](https://requests.readthedocs.io/en/latest/api/#requests.put) | 函数 | `(url: '_t.UriType', data: '_t.DataType' = None, **kwargs: 'Unpack[_t.DataKwargs]') -> 'Response'` | Sends a PUT request. |
| [`requests.ReadTimeout`](https://requests.readthedocs.io/en/latest/api/#requests.ReadTimeout) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | The server did not send any data in the allotted amount of time. |
| [`requests.Request`](https://requests.readthedocs.io/en/latest/api/#requests.Request) | 类 | `(method: 'str \| None' = None, url: '_t.UriType \| None' = None, headers: '_t.HeadersType' = None, files: '_t.FilesType' = None, data: '_t....` | A user-created :class:`Request <Request>` object. |
| [`requests.request`](https://requests.readthedocs.io/en/latest/api/#requests.request) | 函数 | `(method: 'str', url: '_t.UriType', **kwargs: 'Unpack[_t.RequestKwargs]') -> 'Response'` | Constructs and sends a :class:`Request <Request>`. |
| [`requests.RequestException`](https://requests.readthedocs.io/en/latest/api/#requests.RequestException) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | There was an ambiguous exception that occurred while handling your request. |
| [`requests.Response`](https://requests.readthedocs.io/en/latest/api/#requests.Response) | 类 | `() -> 'None'` | The :class:`Response <Response>` object, which contains a server's response to an HTTP request. |
| [`requests.Session`](https://requests.readthedocs.io/en/latest/api/#requests.Session) | 类 | `() -> 'None'` | A Requests session. |
| [`requests.status_codes`](https://requests.readthedocs.io/en/latest/api/#module-requests.status_codes) | 模块 | `` | The ``codes`` object defines a mapping from common names for HTTP statuses to their numerical codes, accessible either as attributes or as dictionary items. |
| [`requests.Timeout`](https://requests.readthedocs.io/en/latest/api/#requests.Timeout) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | The request timed out. |
| [`requests.TooManyRedirects`](https://requests.readthedocs.io/en/latest/api/#requests.TooManyRedirects) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | Too many redirects. |

## `requests.adapters`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.adapters.BaseAdapter`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.BaseAdapter) | 类 | `() -> 'None'` | The Base Transport Adapter |
| [`requests.adapters.BaseAdapter.close`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.BaseAdapter.close) | 方法 | `(self) -> 'None'` | Cleans up adapter specific items. |
| [`requests.adapters.BaseAdapter.send`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.BaseAdapter.send) | 方法 | `(self, request: 'PreparedRequest', stream: 'bool' = False, timeout: '_t.TimeoutType' = None, verify: '_t.VerifyType' = True, cert: '_t.Ce...` | Sends PreparedRequest object. Returns Response object. |
| [`requests.adapters.HTTPAdapter`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter) | 类 | `(pool_connections: 'int' = 10, pool_maxsize: 'int' = 10, max_retries: 'int \| Retry' = 0, pool_block: 'bool' = False) -> 'None'` | The built-in HTTP Adapter for urllib3. |
| [`requests.adapters.HTTPAdapter.add_headers`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.add_headers) | 方法 | `(self, request: 'PreparedRequest', **kwargs: 'Any') -> 'None'` | Add any headers needed by the connection. As of v2.0 this does nothing by default, but is left for overriding by users that subclass the :class:`HTTPAdapter <requests.adapters.H... |
| [`requests.adapters.HTTPAdapter.build_connection_pool_key_attributes`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.build_connection_pool_key_attributes) | 方法 | `(self, request: 'PreparedRequest', verify: '_t.VerifyType', cert: '_t.CertType' = None) -> 'tuple[dict[str, Any], dict[str, Any]]'` | Build the PoolKey attributes used by urllib3 to return a connection. |
| [`requests.adapters.HTTPAdapter.build_response`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.build_response) | 方法 | `(self, req: 'PreparedRequest', resp: 'Any') -> 'Response'` | Builds a :class:`Response <requests.Response>` object from a urllib3 response. This should not be called from user code, and is only exposed for use when subclassing the :class:... |
| [`requests.adapters.HTTPAdapter.cert_verify`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.cert_verify) | 方法 | `(self, conn: 'Any', url: 'str', verify: '_t.VerifyType', cert: '_t.CertType') -> 'None'` | Verify a SSL certificate. This method should not be called from user code, and is only exposed for use when subclassing the :class:`HTTPAdapter <requests.adapters.HTTPAdapter>`. |
| [`requests.adapters.HTTPAdapter.close`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.close) | 方法 | `(self) -> 'None'` | Disposes of any internal state. |
| [`requests.adapters.HTTPAdapter.get_connection`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.get_connection) | 方法 | `(self, url: 'str', proxies: 'dict[str, str] \| None' = None) -> 'HTTPConnectionPool'` | DEPRECATED: Users should move to `get_connection_with_tls_context` for all subclasses of HTTPAdapter using Requests>=2.32.2. |
| [`requests.adapters.HTTPAdapter.get_connection_with_tls_context`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.get_connection_with_tls_context) | 方法 | `(self, request: 'PreparedRequest', verify: '_t.VerifyType', proxies: 'dict[str, str] \| None' = None, cert: '_t.CertType' = None) -> 'HTTP...` | Returns a urllib3 connection for the given request and TLS settings. This should not be called from user code, and is only exposed for use when subclassing the :class:`HTTPAdapt... |
| [`requests.adapters.HTTPAdapter.init_poolmanager`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.init_poolmanager) | 方法 | `(self, connections: 'int', maxsize: 'int', block: 'bool' = False, **pool_kwargs: 'Any') -> 'None'` | Initializes a urllib3 PoolManager. |
| [`requests.adapters.HTTPAdapter.proxy_headers`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.proxy_headers) | 方法 | `(self, proxy: 'str') -> 'dict[str, str]'` | Returns a dictionary of the headers to add to any request sent through a proxy. This works with urllib3 magic to ensure that they are correctly sent to the proxy, rather than in... |
| [`requests.adapters.HTTPAdapter.proxy_manager_for`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.proxy_manager_for) | 方法 | `(self, proxy: 'str', **proxy_kwargs: 'Any') -> 'Any'` | Return urllib3 ProxyManager for the given proxy. |
| [`requests.adapters.HTTPAdapter.request_url`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.request_url) | 方法 | `(self, request: 'PreparedRequest', proxies: 'dict[str, str] \| None') -> 'str'` | Obtain the url to use when making the final request. |
| [`requests.adapters.HTTPAdapter.send`](https://requests.readthedocs.io/en/latest/api/#requests.adapters.HTTPAdapter.send) | 方法 | `(self, request: 'PreparedRequest', stream: 'bool' = False, timeout: '_t.TimeoutType' = None, verify: '_t.VerifyType' = True, cert: '_t.Ce...` | Sends PreparedRequest object. Returns Response object. |

## `requests.auth`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.auth.AuthBase`](https://requests.readthedocs.io/en/latest/api/#requests.auth.AuthBase) | 类 | `()` | Base class that all auth implementations derive from |
| [`requests.auth.HTTPBasicAuth`](https://requests.readthedocs.io/en/latest/api/#requests.auth.HTTPBasicAuth) | 类 | `(username: 'bytes \| str', password: 'bytes \| str') -> 'None'` | Attaches HTTP Basic Authentication to the given Request object. |
| [`requests.auth.HTTPDigestAuth`](https://requests.readthedocs.io/en/latest/api/#requests.auth.HTTPDigestAuth) | 类 | `(username: 'bytes \| str', password: 'bytes \| str') -> 'None'` | Attaches HTTP Digest Authentication to the given Request object. |
| [`requests.auth.HTTPProxyAuth`](https://requests.readthedocs.io/en/latest/api/#requests.auth.HTTPProxyAuth) | 类 | `(username: 'bytes \| str', password: 'bytes \| str') -> 'None'` | Attaches HTTP Proxy Authentication to a given Request object. |

## `requests.cookies`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.cookies.CookieConflictError`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.CookieConflictError) | 类 | `` | There are two cookies that meet the criteria specified in the cookie jar. Use .get and .set and include domain and path args in order to be more specific. |
| [`requests.cookies.CookieConflictError.add_note`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.CookieConflictError.add_note) | 方法 | `(self, object, /)` | Exception.add_note(note) -- add a note to the exception |
| [`requests.cookies.CookieConflictError.with_traceback`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.CookieConflictError.with_traceback) | 方法 | `(self, object, /)` | Exception.with_traceback(tb) -- set self.__traceback__ to tb and return self. |
| [`requests.cookies.cookiejar_from_dict`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.cookiejar_from_dict) | 函数 | `(cookie_dict: 'dict[str, str] \| None', cookiejar: 'CookieJar \| None' = None, overwrite: 'bool' = True) -> 'CookieJar'` | Returns a CookieJar from a key/value dictionary. |
| [`requests.cookies.RequestsCookieJar`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar) | 类 | `(policy=None)` | Compatibility class; is a http.cookiejar.CookieJar, but exposes a dict interface. |
| [`requests.cookies.RequestsCookieJar.add_cookie_header`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.add_cookie_header) | 方法 | `(self, request)` | Add correct Cookie: header to request (urllib.request.Request object). |
| [`requests.cookies.RequestsCookieJar.clear`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.clear) | 方法 | `(self, domain=None, path=None, name=None)` | Clear some cookies. |
| [`requests.cookies.RequestsCookieJar.clear_expired_cookies`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.clear_expired_cookies) | 方法 | `(self)` | Discard all expired cookies. |
| [`requests.cookies.RequestsCookieJar.clear_session_cookies`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.clear_session_cookies) | 方法 | `(self)` | Discard all session cookies. |
| [`requests.cookies.RequestsCookieJar.copy`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.copy) | 方法 | `(self) -> 'RequestsCookieJar'` | Return a copy of this RequestsCookieJar. |
| [`requests.cookies.RequestsCookieJar.extract_cookies`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.extract_cookies) | 方法 | `(self, response, request)` | Extract cookies from response, where allowable given the request. |
| [`requests.cookies.RequestsCookieJar.get`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.get) | 方法 | `(self, name: 'str', default: 'str \| None' = None, domain: 'str \| None' = None, path: 'str \| None' = None) -> 'str \| None'` | Dict-like get() that also supports optional domain and path args in order to resolve naming collisions from using one cookie jar over multiple domains. |
| [`requests.cookies.RequestsCookieJar.get_dict`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.get_dict) | 方法 | `(self, domain: 'str \| None' = None, path: 'str \| None' = None) -> 'dict[str, str \| None]'` | Takes as an argument an optional domain and path and returns a plain old Python dict of name-value pairs of cookies that meet the requirements. |
| [`requests.cookies.RequestsCookieJar.get_policy`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.get_policy) | 方法 | `(self) -> 'CookiePolicy'` | Return the CookiePolicy instance used. |
| [`requests.cookies.RequestsCookieJar.items`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.items) | 方法 | `(self) -> 'list[tuple[str, str \| None]]'` | Dict-like items() that returns a list of name-value tuples from the jar. Allows client-code to call ``dict(RequestsCookieJar)`` and get a vanilla python dict of key value pairs. |
| [`requests.cookies.RequestsCookieJar.iteritems`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.iteritems) | 方法 | `(self) -> 'Iterator[tuple[str, str \| None]]'` | Dict-like iteritems() that returns an iterator of name-value tuples from the jar. |
| [`requests.cookies.RequestsCookieJar.iterkeys`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.iterkeys) | 方法 | `(self) -> 'Iterator[str]'` | Dict-like iterkeys() that returns an iterator of names of cookies from the jar. |
| [`requests.cookies.RequestsCookieJar.itervalues`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.itervalues) | 方法 | `(self) -> 'Iterator[str \| None]'` | Dict-like itervalues() that returns an iterator of values of cookies from the jar. |
| [`requests.cookies.RequestsCookieJar.keys`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.keys) | 方法 | `(self) -> 'list[str]'` | Dict-like keys() that returns a list of names of cookies from the jar. |
| [`requests.cookies.RequestsCookieJar.list_domains`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.list_domains) | 方法 | `(self) -> 'list[str]'` | Utility method to list all the domains in the jar. |
| [`requests.cookies.RequestsCookieJar.list_paths`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.list_paths) | 方法 | `(self) -> 'list[str]'` | Utility method to list all the paths in the jar. |
| [`requests.cookies.RequestsCookieJar.make_cookies`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.make_cookies) | 方法 | `(self, response, request)` | Return sequence of Cookie objects extracted from response object. |
| [`requests.cookies.RequestsCookieJar.multiple_domains`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.multiple_domains) | 方法 | `(self) -> 'bool'` | Returns True if there are multiple domains in the jar. Returns False otherwise. |
| [`requests.cookies.RequestsCookieJar.pop`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.pop) | 方法 | `(self, key, default=<object object at 0x100d981a0>)` | D.pop(k[,d]) -> v, remove specified key and return the corresponding value. If key is not found, d is returned if given, otherwise KeyError is raised. |
| [`requests.cookies.RequestsCookieJar.popitem`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.popitem) | 方法 | `(self)` | D.popitem() -> (k, v), remove and return some (key, value) pair as a 2-tuple; but raise KeyError if D is empty. |
| [`requests.cookies.RequestsCookieJar.set`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.set) | 方法 | `(self, name: 'str', value: 'str \| Morsel[dict[str, str]] \| None', **kwargs: 'Any') -> 'Cookie \| None'` | Dict-like set() that also supports optional domain and path args in order to resolve naming collisions from using one cookie jar over multiple domains. |
| [`requests.cookies.RequestsCookieJar.set_cookie`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.set_cookie) | 方法 | `(self, cookie: 'Cookie', *args: 'Any', **kwargs: 'Any') -> 'None'` | Set a cookie, without checking whether or not it should be set. |
| [`requests.cookies.RequestsCookieJar.set_cookie_if_ok`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.set_cookie_if_ok) | 方法 | `(self, cookie, request)` | Set a cookie if policy says it's OK to do so. |
| [`requests.cookies.RequestsCookieJar.setdefault`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.setdefault) | 方法 | `(self, key, default=None)` | D.setdefault(k[,d]) -> D.get(k,d), also set D[k]=d if k not in D |
| [`requests.cookies.RequestsCookieJar.update`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.update) | 方法 | `(self, other: 'CookieJar \| SupportsKeysAndGetItem[str, str]') -> 'None'` | Updates this jar with cookies from another CookieJar or dict-like |
| [`requests.cookies.RequestsCookieJar.values`](https://requests.readthedocs.io/en/latest/api/#requests.cookies.RequestsCookieJar.values) | 方法 | `(self) -> 'list[str \| None]'` | Dict-like values() that returns a list of values of cookies from the jar. |

## `requests.exceptions`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.exceptions.ConnectionError`](https://requests.readthedocs.io/en/latest/api/#requests.ConnectionError) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | A Connection error occurred. |
| [`requests.exceptions.ConnectTimeout`](https://requests.readthedocs.io/en/latest/api/#requests.ConnectTimeout) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | The request timed out while trying to connect to the remote server. |
| [`requests.exceptions.HTTPError`](https://requests.readthedocs.io/en/latest/api/#requests.HTTPError) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | An HTTP error occurred. |
| [`requests.exceptions.JSONDecodeError`](https://requests.readthedocs.io/en/latest/api/#requests.JSONDecodeError) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | Couldn't decode the text into json |
| [`requests.exceptions.ReadTimeout`](https://requests.readthedocs.io/en/latest/api/#requests.ReadTimeout) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | The server did not send any data in the allotted amount of time. |
| [`requests.exceptions.RequestException`](https://requests.readthedocs.io/en/latest/api/#requests.RequestException) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | There was an ambiguous exception that occurred while handling your request. |
| [`requests.exceptions.Timeout`](https://requests.readthedocs.io/en/latest/api/#requests.Timeout) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | The request timed out. |
| [`requests.exceptions.TooManyRedirects`](https://requests.readthedocs.io/en/latest/api/#requests.TooManyRedirects) | 异常 | `(*args: 'Any', **kwargs: 'Any') -> 'None'` | Too many redirects. |

## `requests.models`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.models.PreparedRequest`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest) | 类 | `() -> 'None'` | The fully mutable :class:`PreparedRequest <PreparedRequest>` object, containing the exact bytes that will be sent to the server. |
| [`requests.models.Request`](https://requests.readthedocs.io/en/latest/api/#requests.Request) | 类 | `(method: 'str \| None' = None, url: '_t.UriType \| None' = None, headers: '_t.HeadersType' = None, files: '_t.FilesType' = None, data: '_t....` | A user-created :class:`Request <Request>` object. |
| [`requests.models.Response`](https://requests.readthedocs.io/en/latest/api/#requests.Response) | 类 | `() -> 'None'` | The :class:`Response <Response>` object, which contains a server's response to an HTTP request. |

## `requests.PreparedRequest`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.PreparedRequest.body`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.body) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.PreparedRequest.deregister_hook`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.deregister_hook) | 方法 | `(self, event: 'str', hook: '_t.HookType') -> 'bool'` | Deregister a previously registered hook. Returns True if the hook existed, False if not. |
| [`requests.PreparedRequest.headers`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.headers) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.PreparedRequest.hooks`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.hooks) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.PreparedRequest.method`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.method) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.PreparedRequest.path_url`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.path_url) | 属性 | `` | Build the path URL to use. |
| [`requests.PreparedRequest.prepare`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare) | 方法 | `(self, method: 'str \| None' = None, url: '_t.UriType \| None' = None, headers: 'Mapping[str, str \| bytes] \| None' = None, files: '_t.Files...` | Prepares the entire request with the given parameters. |
| [`requests.PreparedRequest.prepare_auth`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_auth) | 方法 | `(self, auth: '_t.AuthType', url: '_t.UriType' = '') -> 'None'` | Prepares the given HTTP auth data. |
| [`requests.PreparedRequest.prepare_body`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_body) | 方法 | `(self, data: '_t.DataType', files: '_t.FilesType', json: '_t.JsonType' = None) -> 'None'` | Prepares the given HTTP body data. |
| [`requests.PreparedRequest.prepare_content_length`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_content_length) | 方法 | `(self, body: '_t.BodyType') -> 'None'` | Prepare Content-Length header based on request method and body |
| [`requests.PreparedRequest.prepare_cookies`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_cookies) | 方法 | `(self, cookies: 'RequestsCookieJar \| CookieJar \| dict[str, str] \| None') -> 'None'` | Prepares the given HTTP cookie data. |
| [`requests.PreparedRequest.prepare_headers`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_headers) | 方法 | `(self, headers: 'Mapping[str, str \| bytes] \| None') -> 'None'` | Prepares the given HTTP headers. |
| [`requests.PreparedRequest.prepare_hooks`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_hooks) | 方法 | `(self, hooks: '_t.HooksInputType \| None') -> 'None'` | Prepares the given hooks. |
| [`requests.PreparedRequest.prepare_method`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_method) | 方法 | `(self, method: 'str \| None') -> 'None'` | Prepares the given HTTP method. |
| [`requests.PreparedRequest.prepare_url`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.prepare_url) | 方法 | `(self, url: '_t.UriType', params: '_t.ParamsType') -> 'None'` | Prepares the given HTTP URL. |
| [`requests.PreparedRequest.register_hook`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.register_hook) | 方法 | `(self, event: 'str', hook: 'Iterable[_t.HookType] \| _t.HookType') -> 'None'` | Properly register a hook. |
| [`requests.PreparedRequest.url`](https://requests.readthedocs.io/en/latest/api/#requests.PreparedRequest.url) | 属性 | `` | 参见官方 API 文档。 |

## `requests.Request`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.Request.deregister_hook`](https://requests.readthedocs.io/en/latest/api/#requests.Request.deregister_hook) | 方法 | `(self, event: 'str', hook: '_t.HookType') -> 'bool'` | Deregister a previously registered hook. Returns True if the hook existed, False if not. |
| [`requests.Request.prepare`](https://requests.readthedocs.io/en/latest/api/#requests.Request.prepare) | 方法 | `(self) -> 'PreparedRequest'` | Constructs a :class:`PreparedRequest <PreparedRequest>` for transmission and returns it. |
| [`requests.Request.register_hook`](https://requests.readthedocs.io/en/latest/api/#requests.Request.register_hook) | 方法 | `(self, event: 'str', hook: 'Iterable[_t.HookType] \| _t.HookType') -> 'None'` | Properly register a hook. |

## `requests.Response`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.Response.apparent_encoding`](https://requests.readthedocs.io/en/latest/api/#requests.Response.apparent_encoding) | 属性 | `` | The apparent encoding, provided by the charset_normalizer or chardet libraries. |
| [`requests.Response.close`](https://requests.readthedocs.io/en/latest/api/#requests.Response.close) | 方法 | `(self) -> 'None'` | Releases the connection back to the pool. Once this method has been called the underlying ``raw`` object must not be accessed again. |
| [`requests.Response.content`](https://requests.readthedocs.io/en/latest/api/#requests.Response.content) | 属性 | `` | Content of the response, in bytes. |
| [`requests.Response.cookies`](https://requests.readthedocs.io/en/latest/api/#requests.Response.cookies) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.elapsed`](https://requests.readthedocs.io/en/latest/api/#requests.Response.elapsed) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.encoding`](https://requests.readthedocs.io/en/latest/api/#requests.Response.encoding) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.headers`](https://requests.readthedocs.io/en/latest/api/#requests.Response.headers) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.history`](https://requests.readthedocs.io/en/latest/api/#requests.Response.history) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.is_redirect`](https://requests.readthedocs.io/en/latest/api/#requests.Response.is_redirect) | 属性 | `` | True if this Response is a well-formed HTTP redirect that could have been processed automatically (by :meth:`Session.resolve_redirects`). |
| [`requests.Response.iter_content`](https://requests.readthedocs.io/en/latest/api/#requests.Response.iter_content) | 方法 | `(self, chunk_size: 'int \| None' = 1, decode_unicode: 'bool' = False) -> 'Iterator[str \| bytes]'` | Iterates over the response data.  When stream=True is set on the request, this avoids reading the content at once into memory for large responses.  The chunk size is the number ... |
| [`requests.Response.iter_lines`](https://requests.readthedocs.io/en/latest/api/#requests.Response.iter_lines) | 方法 | `(self, chunk_size: 'int' = 512, decode_unicode: 'bool' = False, delimiter: 'str \| bytes \| None' = None) -> 'Iterator[str \| bytes]'` | Iterates over the response data, one line at a time.  When stream=True is set on the request, this avoids reading the content at once into memory for large responses. |
| [`requests.Response.json`](https://requests.readthedocs.io/en/latest/api/#requests.Response.json) | 方法 | `(self, **kwargs: 'Any') -> 'Any'` | Decodes the JSON response body (if any) as a Python object. |
| [`requests.Response.links`](https://requests.readthedocs.io/en/latest/api/#requests.Response.links) | 属性 | `` | Returns the parsed header links of the response, if any. |
| [`requests.Response.next`](https://requests.readthedocs.io/en/latest/api/#requests.Response.next) | 属性 | `` | Returns a PreparedRequest for the next request in a redirect chain, if there is one. |
| [`requests.Response.ok`](https://requests.readthedocs.io/en/latest/api/#requests.Response.ok) | 属性 | `` | Returns True if :attr:`status_code` is less than 400, False if not. |
| [`requests.Response.raise_for_status`](https://requests.readthedocs.io/en/latest/api/#requests.Response.raise_for_status) | 方法 | `(self) -> 'None'` | Raises :class:`HTTPError`, if one occurred. |
| [`requests.Response.raw`](https://requests.readthedocs.io/en/latest/api/#requests.Response.raw) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.reason`](https://requests.readthedocs.io/en/latest/api/#requests.Response.reason) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.request`](https://requests.readthedocs.io/en/latest/api/#requests.Response.request) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.status_code`](https://requests.readthedocs.io/en/latest/api/#requests.Response.status_code) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Response.text`](https://requests.readthedocs.io/en/latest/api/#requests.Response.text) | 属性 | `` | Content of the response, in unicode. |
| [`requests.Response.url`](https://requests.readthedocs.io/en/latest/api/#requests.Response.url) | 属性 | `` | 参见官方 API 文档。 |

## `requests.Session`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.Session.auth`](https://requests.readthedocs.io/en/latest/api/#requests.Session.auth) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.cert`](https://requests.readthedocs.io/en/latest/api/#requests.Session.cert) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.close`](https://requests.readthedocs.io/en/latest/api/#requests.Session.close) | 方法 | `(self) -> 'None'` | Closes all adapters and as such the session |
| [`requests.Session.cookies`](https://requests.readthedocs.io/en/latest/api/#requests.Session.cookies) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.delete`](https://requests.readthedocs.io/en/latest/api/#requests.Session.delete) | 方法 | `(self, url: '_t.UriType', **kwargs: 'Unpack[_t.RequestKwargs]') -> 'Response'` | Sends a DELETE request. Returns :class:`Response` object. |
| [`requests.Session.get`](https://requests.readthedocs.io/en/latest/api/#requests.Session.get) | 方法 | `(self, url: '_t.UriType', params: '_t.ParamsType' = None, **kwargs: 'Unpack[_t.GetKwargs]') -> 'Response'` | Sends a GET request. Returns :class:`Response` object. |
| [`requests.Session.get_adapter`](https://requests.readthedocs.io/en/latest/api/#requests.Session.get_adapter) | 方法 | `(self, url: 'str') -> 'BaseAdapter'` | Returns the appropriate connection adapter for the given URL. |
| [`requests.Session.get_redirect_target`](https://requests.readthedocs.io/en/latest/api/#requests.Session.get_redirect_target) | 方法 | `(self, resp: 'Response') -> 'str \| None'` | Receives a Response. Returns a redirect URI or ``None`` |
| [`requests.Session.head`](https://requests.readthedocs.io/en/latest/api/#requests.Session.head) | 方法 | `(self, url: '_t.UriType', **kwargs: 'Unpack[_t.RequestKwargs]') -> 'Response'` | Sends a HEAD request. Returns :class:`Response` object. |
| [`requests.Session.headers`](https://requests.readthedocs.io/en/latest/api/#requests.Session.headers) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.hooks`](https://requests.readthedocs.io/en/latest/api/#requests.Session.hooks) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.max_redirects`](https://requests.readthedocs.io/en/latest/api/#requests.Session.max_redirects) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.merge_environment_settings`](https://requests.readthedocs.io/en/latest/api/#requests.Session.merge_environment_settings) | 方法 | `(self, url: 'str', proxies: 'dict[str, str] \| None', stream: 'bool \| None', verify: '_t.VerifyType \| None', cert: '_t.CertType') -> 'dict...` | Check the environment and merge it with some settings. |
| [`requests.Session.mount`](https://requests.readthedocs.io/en/latest/api/#requests.Session.mount) | 方法 | `(self, prefix: 'str', adapter: 'BaseAdapter') -> 'None'` | Registers a connection adapter to a prefix. |
| [`requests.Session.options`](https://requests.readthedocs.io/en/latest/api/#requests.Session.options) | 方法 | `(self, url: '_t.UriType', **kwargs: 'Unpack[_t.RequestKwargs]') -> 'Response'` | Sends a OPTIONS request. Returns :class:`Response` object. |
| [`requests.Session.params`](https://requests.readthedocs.io/en/latest/api/#requests.Session.params) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.patch`](https://requests.readthedocs.io/en/latest/api/#requests.Session.patch) | 方法 | `(self, url: '_t.UriType', data: '_t.DataType' = None, **kwargs: 'Unpack[_t.DataKwargs]') -> 'Response'` | Sends a PATCH request. Returns :class:`Response` object. |
| [`requests.Session.post`](https://requests.readthedocs.io/en/latest/api/#requests.Session.post) | 方法 | `(self, url: '_t.UriType', data: '_t.DataType' = None, json: '_t.JsonType' = None, **kwargs: 'Unpack[_t.PostKwargs]') -> 'Response'` | Sends a POST request. Returns :class:`Response` object. |
| [`requests.Session.prepare_request`](https://requests.readthedocs.io/en/latest/api/#requests.Session.prepare_request) | 方法 | `(self, request: 'Request') -> 'PreparedRequest'` | Constructs a :class:`PreparedRequest <PreparedRequest>` for transmission and returns it. The :class:`PreparedRequest` has settings merged from the :class:`Request <Request>` ins... |
| [`requests.Session.proxies`](https://requests.readthedocs.io/en/latest/api/#requests.Session.proxies) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.put`](https://requests.readthedocs.io/en/latest/api/#requests.Session.put) | 方法 | `(self, url: '_t.UriType', data: '_t.DataType' = None, **kwargs: 'Unpack[_t.DataKwargs]') -> 'Response'` | Sends a PUT request. Returns :class:`Response` object. |
| [`requests.Session.rebuild_auth`](https://requests.readthedocs.io/en/latest/api/#requests.Session.rebuild_auth) | 方法 | `(self, prepared_request: 'PreparedRequest', response: 'Response') -> 'None'` | When being redirected we may want to strip authentication from the request to avoid leaking credentials. This method intelligently removes and reapplies authentication where pos... |
| [`requests.Session.rebuild_method`](https://requests.readthedocs.io/en/latest/api/#requests.Session.rebuild_method) | 方法 | `(self, prepared_request: 'PreparedRequest', response: 'Response') -> 'None'` | When being redirected we may want to change the method of the request based on certain specs or browser behavior. |
| [`requests.Session.rebuild_proxies`](https://requests.readthedocs.io/en/latest/api/#requests.Session.rebuild_proxies) | 方法 | `(self, prepared_request: 'PreparedRequest', proxies: 'dict[str, str] \| None') -> 'dict[str, str]'` | This method re-evaluates the proxy configuration by considering the environment variables. If we are redirected to a URL covered by NO_PROXY, we strip the proxy configuration. O... |
| [`requests.Session.request`](https://requests.readthedocs.io/en/latest/api/#requests.Session.request) | 方法 | `(self, method: 'str', url: '_t.UriType', params: '_t.ParamsType' = None, data: '_t.DataType' = None, headers: '_t.HeadersType' = None, co...` | Constructs a :class:`Request <Request>`, prepares it and sends it. Returns :class:`Response <Response>` object. |
| [`requests.Session.resolve_redirects`](https://requests.readthedocs.io/en/latest/api/#requests.Session.resolve_redirects) | 方法 | `(self, resp: 'Response', req: 'PreparedRequest', stream: 'bool' = False, timeout: '_t.TimeoutType' = None, verify: '_t.VerifyType' = True...` | Receives a Response. Returns a generator of Responses or Requests. |
| [`requests.Session.send`](https://requests.readthedocs.io/en/latest/api/#requests.Session.send) | 方法 | `(self, request: 'PreparedRequest', **kwargs: 'Any') -> 'Response'` | Send a given PreparedRequest. |
| [`requests.Session.should_strip_auth`](https://requests.readthedocs.io/en/latest/api/#requests.Session.should_strip_auth) | 方法 | `(self, old_url: 'str', new_url: 'str') -> 'bool'` | Decide whether Authorization header should be removed when redirecting |
| [`requests.Session.stream`](https://requests.readthedocs.io/en/latest/api/#requests.Session.stream) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.trust_env`](https://requests.readthedocs.io/en/latest/api/#requests.Session.trust_env) | 属性 | `` | 参见官方 API 文档。 |
| [`requests.Session.verify`](https://requests.readthedocs.io/en/latest/api/#requests.Session.verify) | 属性 | `` | 参见官方 API 文档。 |

## `requests.sessions`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.sessions.Session`](https://requests.readthedocs.io/en/latest/api/#requests.Session) | 类 | `() -> 'None'` | A Requests session. |

## `requests.utils`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`requests.utils.add_dict_to_cookiejar`](https://requests.readthedocs.io/en/latest/api/#requests.utils.add_dict_to_cookiejar) | 函数 | `(cj: 'CookieJar', cookie_dict: 'dict[str, str]') -> 'CookieJar'` | Returns a CookieJar from a key/value dictionary. |
| [`requests.utils.dict_from_cookiejar`](https://requests.readthedocs.io/en/latest/api/#requests.utils.dict_from_cookiejar) | 函数 | `(cj: 'CookieJar') -> 'dict[str, str \| None]'` | Returns a key/value dictionary from a CookieJar. |
| [`requests.utils.get_encoding_from_headers`](https://requests.readthedocs.io/en/latest/api/#requests.utils.get_encoding_from_headers) | 函数 | `(headers: 'CaseInsensitiveDict[str]') -> 'str \| None'` | Returns encodings from given HTTP Header Dict. |
| [`requests.utils.get_encodings_from_content`](https://requests.readthedocs.io/en/latest/api/#requests.utils.get_encodings_from_content) | 函数 | `(content: 'str') -> 'list[str]'` | Returns encodings from given content string. |
| [`requests.utils.get_unicode_from_response`](https://requests.readthedocs.io/en/latest/api/#requests.utils.get_unicode_from_response) | 函数 | `(r: 'Response') -> 'str \| bytes \| None'` | Returns the requested content back in unicode. |
