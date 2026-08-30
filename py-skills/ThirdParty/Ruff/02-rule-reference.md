<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# Ruff 全规则参考

规则基线：官方当前稳定文档（2026-08-30）。共收录 **951** 条规则。

规则数量很大，学习时先按项目需要选择规则族；本表用于确保规则代码没有因人工挑选而遗漏。

| 规则代码 | 规则名称 | 检查内容 |
|---|---|---|
| [`AIR001`](https://docs.astral.sh/ruff/rules/airflow-variable-name-task-id-mismatch/) | `airflow-variable-name-task-id-mismatch` | Task variable name should match the task_id: "{task_id}" |
| [`AIR002`](https://docs.astral.sh/ruff/rules/airflow-dag-no-schedule-argument/) | `airflow-dag-no-schedule-argument` | DAG or @dag should have an explicit schedule argument |
| [`AIR003`](https://docs.astral.sh/ruff/rules/airflow-variable-get-outside-task/) | `airflow-variable-get-outside-task` | Variable.get() outside of a task |
| [`AIR004`](https://docs.astral.sh/ruff/rules/airflow-task-branch-as-short-circuit/) | `airflow-task-branch-as-short-circuit` | @task.branch can be replaced with @task.short_circuit |
| [`AIR201`](https://docs.astral.sh/ruff/rules/airflow-xcom-pull-in-template-string/) | `airflow-xcom-pull-in-template-string` | Use the .output attribute on the task object for "{task_id}" instead of xcom_pull in a template string |
| [`AIR202`](https://docs.astral.sh/ruff/rules/airflow-task-implicit-multiple-outputs/) | `airflow-task-implicit-multiple-outputs` | @task-decorated function relies on multiple_outputs inference |
| [`AIR301`](https://docs.astral.sh/ruff/rules/airflow3-removal/) | `airflow3-removal` | {deprecated} is removed in Airflow 3.0 |
| [`AIR302`](https://docs.astral.sh/ruff/rules/airflow3-moved-to-provider/) | `airflow3-moved-to-provider` | {deprecated} is moved into {provider} provider in Airflow 3.0; |
| [`AIR303`](https://docs.astral.sh/ruff/rules/airflow3-incompatible-function-signature/) | `airflow3-incompatible-function-signature` | {function_name} signature is changed in Airflow 3.0 |
| [`AIR304`](https://docs.astral.sh/ruff/rules/airflow3-dag-dynamic-value/) | `airflow3-dag-dynamic-value` | {function_name}() produces a value that changes at runtime; using it in a Dag or task argument causes infinite Dag version creation |
| [`AIR311`](https://docs.astral.sh/ruff/rules/airflow3-suggested-update/) | `airflow3-suggested-update` | {deprecated} is removed in Airflow 3.0; It still works in Airflow 3.0 but is expected to be removed in a future version. |
| [`AIR312`](https://docs.astral.sh/ruff/rules/airflow3-suggested-to-move-to-provider/) | `airflow3-suggested-to-move-to-provider` | {deprecated} is deprecated and moved into {provider} provider in Airflow 3.0; It still works in Airflow 3.0 but is expected to be removed in a future version. |
| [`AIR321`](https://docs.astral.sh/ruff/rules/airflow31-moved/) | `airflow31-moved` | {deprecated} is moved in Airflow 3.1 |
| [`ERA001`](https://docs.astral.sh/ruff/rules/commented-out-code/) | `commented-out-code` | Found commented-out code |
| [`FAST001`](https://docs.astral.sh/ruff/rules/fast-api-redundant-response-model/) | `fast-api-redundant-response-model` | FastAPI route with redundant response_model argument |
| [`FAST002`](https://docs.astral.sh/ruff/rules/fast-api-non-annotated-dependency/) | `fast-api-non-annotated-dependency` | FastAPI dependency without Annotated |
| [`FAST003`](https://docs.astral.sh/ruff/rules/fast-api-unused-path-parameter/) | `fast-api-unused-path-parameter` | Parameter {arg_name} appears in route path, but not in {function_name} signature |
| [`YTT101`](https://docs.astral.sh/ruff/rules/sys-version-slice3/) | `sys-version-slice3` | sys.version[:3] referenced (python3.10), use sys.version_info |
| [`YTT102`](https://docs.astral.sh/ruff/rules/sys-version2/) | `sys-version2` | sys.version[2] referenced (python3.10), use sys.version_info |
| [`YTT103`](https://docs.astral.sh/ruff/rules/sys-version-cmp-str3/) | `sys-version-cmp-str3` | sys.version compared to string (python3.10), use sys.version_info |
| [`YTT201`](https://docs.astral.sh/ruff/rules/sys-version-info0-eq3/) | `sys-version-info0-eq3` | sys.version_info[0] == 3 referenced (python4), use >= |
| [`YTT202`](https://docs.astral.sh/ruff/rules/six-py3/) | `six-py3` | six.PY3 referenced (python4), use not six.PY2 |
| [`YTT203`](https://docs.astral.sh/ruff/rules/sys-version-info1-cmp-int/) | `sys-version-info1-cmp-int` | sys.version_info[1] compared to integer (python4), compare sys.version_info to tuple |
| [`YTT204`](https://docs.astral.sh/ruff/rules/sys-version-info-minor-cmp-int/) | `sys-version-info-minor-cmp-int` | sys.version_info.minor compared to integer (python4), compare sys.version_info to tuple |
| [`YTT301`](https://docs.astral.sh/ruff/rules/sys-version0/) | `sys-version0` | sys.version[0] referenced (python10), use sys.version_info |
| [`YTT302`](https://docs.astral.sh/ruff/rules/sys-version-cmp-str10/) | `sys-version-cmp-str10` | sys.version compared to string (python10), use sys.version_info |
| [`YTT303`](https://docs.astral.sh/ruff/rules/sys-version-slice1/) | `sys-version-slice1` | sys.version[:1] referenced (python10), use sys.version_info |
| [`ANN001`](https://docs.astral.sh/ruff/rules/missing-type-function-argument/) | `missing-type-function-argument` | Missing type annotation for function argument {name} |
| [`ANN002`](https://docs.astral.sh/ruff/rules/missing-type-args/) | `missing-type-args` | Missing type annotation for *{name} |
| [`ANN003`](https://docs.astral.sh/ruff/rules/missing-type-kwargs/) | `missing-type-kwargs` | Missing type annotation for **{name} |
| [`ANN201`](https://docs.astral.sh/ruff/rules/missing-return-type-undocumented-public-function/) | `missing-return-type-undocumented-public-function` | Missing return type annotation for public function {name} |
| [`ANN202`](https://docs.astral.sh/ruff/rules/missing-return-type-private-function/) | `missing-return-type-private-function` | Missing return type annotation for private function {name} |
| [`ANN204`](https://docs.astral.sh/ruff/rules/missing-return-type-special-method/) | `missing-return-type-special-method` | Missing return type annotation for special method {name} |
| [`ANN205`](https://docs.astral.sh/ruff/rules/missing-return-type-static-method/) | `missing-return-type-static-method` | Missing return type annotation for staticmethod {name} |
| [`ANN206`](https://docs.astral.sh/ruff/rules/missing-return-type-class-method/) | `missing-return-type-class-method` | Missing return type annotation for classmethod {name} |
| [`ANN401`](https://docs.astral.sh/ruff/rules/any-type/) | `any-type` | Dynamically typed expressions (typing.Any) are disallowed in {name} |
| [`ASYNC100`](https://docs.astral.sh/ruff/rules/cancel-scope-no-checkpoint/) | `cancel-scope-no-checkpoint` | A with {method_name}(...): context does not contain any await statements. This makes it pointless, as the timeout can only be triggered by a checkpoint. |
| [`ASYNC105`](https://docs.astral.sh/ruff/rules/trio-sync-call/) | `trio-sync-call` | Call to {method_name} is not immediately awaited |
| [`ASYNC109`](https://docs.astral.sh/ruff/rules/async-function-with-timeout/) | `async-function-with-timeout` | Async function definition with a timeout parameter |
| [`ASYNC110`](https://docs.astral.sh/ruff/rules/async-busy-wait/) | `async-busy-wait` | Use {module}.Event instead of awaiting {module}.sleep in a while loop |
| [`ASYNC115`](https://docs.astral.sh/ruff/rules/async-zero-sleep/) | `async-zero-sleep` | Use {module}.lowlevel.checkpoint() instead of {module}.sleep(0) |
| [`ASYNC116`](https://docs.astral.sh/ruff/rules/long-sleep-not-forever/) | `long-sleep-not-forever` | {module}.sleep() with >24 hour interval should usually be {module}.sleep_forever() |
| [`ASYNC119`](https://docs.astral.sh/ruff/rules/yield-in-context-manager-in-async-generator/) | `yield-in-context-manager-in-async-generator` | Yield in context manager in async generator may not trigger cleanup |
| [`ASYNC210`](https://docs.astral.sh/ruff/rules/blocking-http-call-in-async-function/) | `blocking-http-call-in-async-function` | Async functions should not call blocking HTTP methods |
| [`ASYNC212`](https://docs.astral.sh/ruff/rules/blocking-http-call-httpx-in-async-function/) | `blocking-http-call-httpx-in-async-function` | Blocking httpx method {name}.{call}() in async context, use httpx.AsyncClient |
| [`ASYNC220`](https://docs.astral.sh/ruff/rules/create-subprocess-in-async-function/) | `create-subprocess-in-async-function` | Async functions should not create subprocesses with blocking methods |
| [`ASYNC221`](https://docs.astral.sh/ruff/rules/run-process-in-async-function/) | `run-process-in-async-function` | Async functions should not run processes with blocking methods |
| [`ASYNC222`](https://docs.astral.sh/ruff/rules/wait-for-process-in-async-function/) | `wait-for-process-in-async-function` | Async functions should not wait on processes with blocking methods |
| [`ASYNC230`](https://docs.astral.sh/ruff/rules/blocking-open-call-in-async-function/) | `blocking-open-call-in-async-function` | Async functions should not open files with blocking methods like open |
| [`ASYNC240`](https://docs.astral.sh/ruff/rules/blocking-path-method-in-async-function/) | `blocking-path-method-in-async-function` | Async functions should not use {path_library} methods, use trio.Path or anyio.path |
| [`ASYNC250`](https://docs.astral.sh/ruff/rules/blocking-input-in-async-function/) | `blocking-input-in-async-function` | Blocking call to input() in async context |
| [`ASYNC251`](https://docs.astral.sh/ruff/rules/blocking-sleep-in-async-function/) | `blocking-sleep-in-async-function` | Async functions should not call time.sleep |
| [`S101`](https://docs.astral.sh/ruff/rules/assert/) | `assert` | Use of assert detected |
| [`S102`](https://docs.astral.sh/ruff/rules/exec-builtin/) | `exec-builtin` | Use of exec detected |
| [`S103`](https://docs.astral.sh/ruff/rules/bad-file-permissions/) | `bad-file-permissions` | os.chmod setting a permissive mask {mask:#o} on file or directory |
| [`S104`](https://docs.astral.sh/ruff/rules/hardcoded-bind-all-interfaces/) | `hardcoded-bind-all-interfaces` | Possible binding to all interfaces |
| [`S105`](https://docs.astral.sh/ruff/rules/hardcoded-password-string/) | `hardcoded-password-string` | Possible hardcoded password assigned to: "{}" |
| [`S106`](https://docs.astral.sh/ruff/rules/hardcoded-password-func-arg/) | `hardcoded-password-func-arg` | Possible hardcoded password assigned to argument: "{}" |
| [`S107`](https://docs.astral.sh/ruff/rules/hardcoded-password-default/) | `hardcoded-password-default` | Possible hardcoded password assigned to function default: "{}" |
| [`S108`](https://docs.astral.sh/ruff/rules/hardcoded-temp-file/) | `hardcoded-temp-file` | Probable insecure usage of temporary file or directory: "{}" |
| [`S110`](https://docs.astral.sh/ruff/rules/try-except-pass/) | `try-except-pass` | try-except-pass detected, consider logging the exception |
| [`S112`](https://docs.astral.sh/ruff/rules/try-except-continue/) | `try-except-continue` | try-except-continue detected, consider logging the exception |
| [`S113`](https://docs.astral.sh/ruff/rules/request-without-timeout/) | `request-without-timeout` | Probable use of {module} call without timeout |
| [`S201`](https://docs.astral.sh/ruff/rules/flask-debug-true/) | `flask-debug-true` | Use of debug=True in Flask app detected |
| [`S202`](https://docs.astral.sh/ruff/rules/tarfile-unsafe-members/) | `tarfile-unsafe-members` | Uses of tarfile.extractall() |
| [`S301`](https://docs.astral.sh/ruff/rules/suspicious-pickle-usage/) | `suspicious-pickle-usage` | pickle and modules that wrap it can be unsafe when used to deserialize untrusted data, possible security issue |
| [`S302`](https://docs.astral.sh/ruff/rules/suspicious-marshal-usage/) | `suspicious-marshal-usage` | Deserialization with the marshal module is possibly dangerous |
| [`S303`](https://docs.astral.sh/ruff/rules/suspicious-insecure-hash-usage/) | `suspicious-insecure-hash-usage` | Use of insecure MD2, MD4, MD5, or SHA1 hash function |
| [`S304`](https://docs.astral.sh/ruff/rules/suspicious-insecure-cipher-usage/) | `suspicious-insecure-cipher-usage` | Use of insecure cipher, replace with a known secure cipher such as AES |
| [`S305`](https://docs.astral.sh/ruff/rules/suspicious-insecure-cipher-mode-usage/) | `suspicious-insecure-cipher-mode-usage` | Use of insecure block cipher mode, replace with a known secure mode such as CBC or CTR |
| [`S306`](https://docs.astral.sh/ruff/rules/suspicious-mktemp-usage/) | `suspicious-mktemp-usage` | Use of insecure and deprecated function (mktemp) |
| [`S307`](https://docs.astral.sh/ruff/rules/suspicious-eval-usage/) | `suspicious-eval-usage` | Use of possibly insecure function; consider using ast.literal_eval |
| [`S308`](https://docs.astral.sh/ruff/rules/suspicious-mark-safe-usage/) | `suspicious-mark-safe-usage` | Use of mark_safe may expose cross-site scripting vulnerabilities |
| [`S310`](https://docs.astral.sh/ruff/rules/suspicious-url-open-usage/) | `suspicious-url-open-usage` | Audit URL open for permitted schemes. Allowing use of file: or custom schemes is often unexpected. |
| [`S311`](https://docs.astral.sh/ruff/rules/suspicious-non-cryptographic-random-usage/) | `suspicious-non-cryptographic-random-usage` | Standard pseudo-random generators are not suitable for cryptographic purposes |
| [`S312`](https://docs.astral.sh/ruff/rules/suspicious-telnet-usage/) | `suspicious-telnet-usage` | Telnet is considered insecure. Use SSH or some other encrypted protocol. |
| [`S313`](https://docs.astral.sh/ruff/rules/suspicious-xmlc-element-tree-usage/) | `suspicious-xmlc-element-tree-usage` | Using xml to parse untrusted data is known to be vulnerable to XML attacks; use defusedxml equivalents |
| [`S314`](https://docs.astral.sh/ruff/rules/suspicious-xml-element-tree-usage/) | `suspicious-xml-element-tree-usage` | Using xml to parse untrusted data is known to be vulnerable to XML attacks; use defusedxml equivalents |
| [`S315`](https://docs.astral.sh/ruff/rules/suspicious-xml-expat-reader-usage/) | `suspicious-xml-expat-reader-usage` | Using xml to parse untrusted data is known to be vulnerable to XML attacks; use defusedxml equivalents |
| [`S316`](https://docs.astral.sh/ruff/rules/suspicious-xml-expat-builder-usage/) | `suspicious-xml-expat-builder-usage` | Using xml to parse untrusted data is known to be vulnerable to XML attacks; use defusedxml equivalents |
| [`S317`](https://docs.astral.sh/ruff/rules/suspicious-xml-sax-usage/) | `suspicious-xml-sax-usage` | Using xml to parse untrusted data is known to be vulnerable to XML attacks; use defusedxml equivalents |
| [`S318`](https://docs.astral.sh/ruff/rules/suspicious-xml-mini-dom-usage/) | `suspicious-xml-mini-dom-usage` | Using xml to parse untrusted data is known to be vulnerable to XML attacks; use defusedxml equivalents |
| [`S319`](https://docs.astral.sh/ruff/rules/suspicious-xml-pull-dom-usage/) | `suspicious-xml-pull-dom-usage` | Using xml to parse untrusted data is known to be vulnerable to XML attacks; use defusedxml equivalents |
| [`S321`](https://docs.astral.sh/ruff/rules/suspicious-ftp-lib-usage/) | `suspicious-ftp-lib-usage` | FTP-related functions are being called. FTP is considered insecure. Use SSH/SFTP/SCP or some other encrypted protocol. |
| [`S323`](https://docs.astral.sh/ruff/rules/suspicious-unverified-context-usage/) | `suspicious-unverified-context-usage` | Python allows using an insecure context via the _create_unverified_context that reverts to the previous behavior that does not validate certificates or perform hostname checks. |
| [`S324`](https://docs.astral.sh/ruff/rules/hashlib-insecure-hash-function/) | `hashlib-insecure-hash-function` | Probable use of insecure hash functions in {library}: {string} |
| [`S401`](https://docs.astral.sh/ruff/rules/suspicious-telnetlib-import/) | `suspicious-telnetlib-import` | telnetlib and related modules are considered insecure. Use SSH or another encrypted protocol. |
| [`S402`](https://docs.astral.sh/ruff/rules/suspicious-ftplib-import/) | `suspicious-ftplib-import` | ftplib and related modules are considered insecure. Use SSH, SFTP, SCP, or another encrypted protocol. |
| [`S403`](https://docs.astral.sh/ruff/rules/suspicious-pickle-import/) | `suspicious-pickle-import` | pickle, cPickle, dill, and shelve modules are possibly insecure |
| [`S404`](https://docs.astral.sh/ruff/rules/suspicious-subprocess-import/) | `suspicious-subprocess-import` | subprocess module is possibly insecure |
| [`S405`](https://docs.astral.sh/ruff/rules/suspicious-xml-etree-import/) | `suspicious-xml-etree-import` | xml.etree methods are vulnerable to XML attacks |
| [`S406`](https://docs.astral.sh/ruff/rules/suspicious-xml-sax-import/) | `suspicious-xml-sax-import` | xml.sax methods are vulnerable to XML attacks |
| [`S407`](https://docs.astral.sh/ruff/rules/suspicious-xml-expat-import/) | `suspicious-xml-expat-import` | xml.dom.expatbuilder is vulnerable to XML attacks |
| [`S408`](https://docs.astral.sh/ruff/rules/suspicious-xml-minidom-import/) | `suspicious-xml-minidom-import` | xml.dom.minidom is vulnerable to XML attacks |
| [`S409`](https://docs.astral.sh/ruff/rules/suspicious-xml-pulldom-import/) | `suspicious-xml-pulldom-import` | xml.dom.pulldom is vulnerable to XML attacks |
| [`S411`](https://docs.astral.sh/ruff/rules/suspicious-xmlrpc-import/) | `suspicious-xmlrpc-import` | XMLRPC is vulnerable to remote XML attacks |
| [`S412`](https://docs.astral.sh/ruff/rules/suspicious-httpoxy-import/) | `suspicious-httpoxy-import` | httpoxy is a set of vulnerabilities that affect application code running inCGI, or CGI-like environments. The use of CGI for web applications should be avoided |
| [`S413`](https://docs.astral.sh/ruff/rules/suspicious-pycrypto-import/) | `suspicious-pycrypto-import` | pycrypto library is known to have publicly disclosed buffer overflow vulnerability |
| [`S415`](https://docs.astral.sh/ruff/rules/suspicious-pyghmi-import/) | `suspicious-pyghmi-import` | An IPMI-related module is being imported. Prefer an encrypted protocol over IPMI. |
| [`S501`](https://docs.astral.sh/ruff/rules/request-with-no-cert-validation/) | `request-with-no-cert-validation` | Probable use of {string} call with verify=False disabling SSL certificate checks |
| [`S502`](https://docs.astral.sh/ruff/rules/ssl-insecure-version/) | `ssl-insecure-version` | Call made with insecure SSL protocol: {protocol} |
| [`S503`](https://docs.astral.sh/ruff/rules/ssl-with-bad-defaults/) | `ssl-with-bad-defaults` | Argument default set to insecure SSL protocol: {protocol} |
| [`S504`](https://docs.astral.sh/ruff/rules/ssl-with-no-version/) | `ssl-with-no-version` | ssl.wrap_socket called without an `ssl_version`` |
| [`S505`](https://docs.astral.sh/ruff/rules/weak-cryptographic-key/) | `weak-cryptographic-key` | {cryptographic_key} key sizes below {minimum_key_size} bits are considered breakable |
| [`S506`](https://docs.astral.sh/ruff/rules/unsafe-yaml-load/) | `unsafe-yaml-load` | Probable use of unsafe loader {name} with yaml.load. Allows instantiation of arbitrary objects. Consider yaml.safe_load. |
| [`S507`](https://docs.astral.sh/ruff/rules/ssh-no-host-key-verification/) | `ssh-no-host-key-verification` | Paramiko call with policy set to automatically trust the unknown host key |
| [`S508`](https://docs.astral.sh/ruff/rules/snmp-insecure-version/) | `snmp-insecure-version` | The use of SNMPv1 and SNMPv2 is insecure. Use SNMPv3 if able. |
| [`S509`](https://docs.astral.sh/ruff/rules/snmp-weak-cryptography/) | `snmp-weak-cryptography` | You should not use SNMPv3 without encryption. noAuthNoPriv & authNoPriv is insecure. |
| [`S601`](https://docs.astral.sh/ruff/rules/paramiko-call/) | `paramiko-call` | Possible shell injection via Paramiko call; check inputs are properly sanitized |
| [`S602`](https://docs.astral.sh/ruff/rules/subprocess-popen-with-shell-equals-true/) | `subprocess-popen-with-shell-equals-true` | subprocess call with shell=True seems safe, but may be changed in the future; consider rewriting without shell |
| [`S603`](https://docs.astral.sh/ruff/rules/subprocess-without-shell-equals-true/) | `subprocess-without-shell-equals-true` | subprocess call: check for execution of untrusted input |
| [`S604`](https://docs.astral.sh/ruff/rules/call-with-shell-equals-true/) | `call-with-shell-equals-true` | Function call with shell=True parameter identified, security issue |
| [`S605`](https://docs.astral.sh/ruff/rules/start-process-with-a-shell/) | `start-process-with-a-shell` | Starting a process with a shell: seems safe, but may be changed in the future; consider rewriting without shell |
| [`S606`](https://docs.astral.sh/ruff/rules/start-process-with-no-shell/) | `start-process-with-no-shell` | Starting a process without a shell |
| [`S607`](https://docs.astral.sh/ruff/rules/start-process-with-partial-path/) | `start-process-with-partial-path` | Starting a process with a partial executable path |
| [`S608`](https://docs.astral.sh/ruff/rules/hardcoded-sql-expression/) | `hardcoded-sql-expression` | Possible SQL injection vector through string-based query construction |
| [`S609`](https://docs.astral.sh/ruff/rules/unix-command-wildcard-injection/) | `unix-command-wildcard-injection` | Possible wildcard injection in call due to * usage |
| [`S610`](https://docs.astral.sh/ruff/rules/django-extra/) | `django-extra` | Use of Django extra can lead to SQL injection vulnerabilities |
| [`S611`](https://docs.astral.sh/ruff/rules/django-raw-sql/) | `django-raw-sql` | Use of RawSQL can lead to SQL injection vulnerabilities |
| [`S612`](https://docs.astral.sh/ruff/rules/logging-config-insecure-listen/) | `logging-config-insecure-listen` | Use of insecure logging.config.listen detected |
| [`S701`](https://docs.astral.sh/ruff/rules/jinja2-autoescape-false/) | `jinja2-autoescape-false` | Using jinja2 templates with autoescape=False is dangerous and can lead to XSS. Ensure autoescape=True or use the select_autoescape function. |
| [`S702`](https://docs.astral.sh/ruff/rules/mako-templates/) | `mako-templates` | Mako templates allow HTML and JavaScript rendering by default and are inherently open to XSS attacks |
| [`S704`](https://docs.astral.sh/ruff/rules/unsafe-markup-use/) | `unsafe-markup-use` | Unsafe use of {name} detected |
| [`BLE001`](https://docs.astral.sh/ruff/rules/blind-except/) | `blind-except` | Do not catch blind exception: {name} |
| [`FBT001`](https://docs.astral.sh/ruff/rules/boolean-type-hint-positional-argument/) | `boolean-type-hint-positional-argument` | Boolean-typed positional argument in function definition |
| [`FBT002`](https://docs.astral.sh/ruff/rules/boolean-default-value-positional-argument/) | `boolean-default-value-positional-argument` | Boolean default positional argument in function definition |
| [`FBT003`](https://docs.astral.sh/ruff/rules/boolean-positional-value-in-call/) | `boolean-positional-value-in-call` | Boolean positional value in function call |
| [`B002`](https://docs.astral.sh/ruff/rules/unary-prefix-increment-decrement/) | `unary-prefix-increment-decrement` | Python does not support the unary prefix increment operator (++) |
| [`B003`](https://docs.astral.sh/ruff/rules/assignment-to-os-environ/) | `assignment-to-os-environ` | Assigning to os.environ doesn't clear the environment |
| [`B004`](https://docs.astral.sh/ruff/rules/unreliable-callable-check/) | `unreliable-callable-check` | Using hasattr(x, "__call__") to test if x is callable is unreliable. Use callable(x) for consistent results. |
| [`B005`](https://docs.astral.sh/ruff/rules/strip-with-multi-characters/) | `strip-with-multi-characters` | Using .strip() with multi-character strings is misleading |
| [`B006`](https://docs.astral.sh/ruff/rules/mutable-argument-default/) | `mutable-argument-default` | Do not use mutable data structures for argument defaults |
| [`B007`](https://docs.astral.sh/ruff/rules/unused-loop-control-variable/) | `unused-loop-control-variable` | Loop control variable {name} not used within loop body |
| [`B008`](https://docs.astral.sh/ruff/rules/function-call-in-default-argument/) | `function-call-in-default-argument` | Do not perform function call {name} in argument defaults; instead, perform the call within the function, or read the default from a module-level singleton variable |
| [`B009`](https://docs.astral.sh/ruff/rules/get-attr-with-constant/) | `get-attr-with-constant` | Do not call getattr with a constant attribute value. It is not any safer than normal property access. |
| [`B010`](https://docs.astral.sh/ruff/rules/set-attr-with-constant/) | `set-attr-with-constant` | Do not call setattr with a constant attribute value. It is not any safer than normal property access. |
| [`B011`](https://docs.astral.sh/ruff/rules/assert-false/) | `assert-false` | Do not assert False (python -O removes these calls), raise AssertionError() |
| [`B012`](https://docs.astral.sh/ruff/rules/jump-statement-in-finally/) | `jump-statement-in-finally` | {name} inside finally blocks cause exceptions to be silenced |
| [`B013`](https://docs.astral.sh/ruff/rules/redundant-tuple-in-exception-handler/) | `redundant-tuple-in-exception-handler` | A length-one tuple literal is redundant in exception handlers |
| [`B014`](https://docs.astral.sh/ruff/rules/duplicate-handler-exception/) | `duplicate-handler-exception` | Exception handler with duplicate exception: {name} |
| [`B015`](https://docs.astral.sh/ruff/rules/useless-comparison/) | `useless-comparison` | Pointless comparison. Did you mean to assign a value? Otherwise, prepend assert or remove it. |
| [`B016`](https://docs.astral.sh/ruff/rules/raise-literal/) | `raise-literal` | Cannot raise a literal. Did you intend to return it or raise an Exception? |
| [`B017`](https://docs.astral.sh/ruff/rules/assert-raises-exception/) | `assert-raises-exception` | Do not assert blind exception: {exception} |
| [`B018`](https://docs.astral.sh/ruff/rules/useless-expression/) | `useless-expression` | Found useless expression. Either assign it to a variable or remove it. |
| [`B019`](https://docs.astral.sh/ruff/rules/cached-instance-method/) | `cached-instance-method` | Use of functools.lru_cache or functools.cache on methods can lead to memory leaks |
| [`B020`](https://docs.astral.sh/ruff/rules/loop-variable-overrides-iterator/) | `loop-variable-overrides-iterator` | Loop control variable {name} overrides iterable it iterates |
| [`B021`](https://docs.astral.sh/ruff/rules/f-string-docstring/) | `f-string-docstring` | f-string used as docstring. Python will interpret this as a joined string, rather than a docstring. |
| [`B022`](https://docs.astral.sh/ruff/rules/useless-contextlib-suppress/) | `useless-contextlib-suppress` | No arguments passed to contextlib.suppress. No exceptions will be suppressed and therefore this context manager is redundant |
| [`B023`](https://docs.astral.sh/ruff/rules/function-uses-loop-variable/) | `function-uses-loop-variable` | Function definition does not bind loop variable {name} |
| [`B024`](https://docs.astral.sh/ruff/rules/abstract-base-class-without-abstract-method/) | `abstract-base-class-without-abstract-method` | {name} is an abstract base class, but it has no abstract methods or properties |
| [`B025`](https://docs.astral.sh/ruff/rules/duplicate-try-block-exception/) | `duplicate-try-block-exception` | try-except* block with duplicate exception {name} |
| [`B026`](https://docs.astral.sh/ruff/rules/star-arg-unpacking-after-keyword-arg/) | `star-arg-unpacking-after-keyword-arg` | Star-arg unpacking after a keyword argument is strongly discouraged |
| [`B027`](https://docs.astral.sh/ruff/rules/empty-method-without-abstract-decorator/) | `empty-method-without-abstract-decorator` | {name} is an empty method in an abstract base class, but has no abstract decorator |
| [`B028`](https://docs.astral.sh/ruff/rules/no-explicit-stacklevel/) | `no-explicit-stacklevel` | No explicit stacklevel keyword argument found |
| [`B029`](https://docs.astral.sh/ruff/rules/except-with-empty-tuple/) | `except-with-empty-tuple` | Using except* (): with an empty tuple does not catch anything; add exceptions to handle |
| [`B030`](https://docs.astral.sh/ruff/rules/except-with-non-exception-classes/) | `except-with-non-exception-classes` | except* handlers should only be exception classes or tuples of exception classes |
| [`B031`](https://docs.astral.sh/ruff/rules/reuse-of-groupby-generator/) | `reuse-of-groupby-generator` | Using the generator returned from itertools.groupby() more than once will do nothing on the second usage |
| [`B032`](https://docs.astral.sh/ruff/rules/unintentional-type-annotation/) | `unintentional-type-annotation` | Possible unintentional type annotation (using :). Did you mean to assign (using =)? |
| [`B033`](https://docs.astral.sh/ruff/rules/duplicate-value/) | `duplicate-value` | Sets should not contain duplicate item {value} |
| [`B034`](https://docs.astral.sh/ruff/rules/re-sub-positional-args/) | `re-sub-positional-args` | {method} should pass {param_name} and flags as keyword arguments to avoid confusion due to unintuitive argument positions |
| [`B035`](https://docs.astral.sh/ruff/rules/static-key-dict-comprehension/) | `static-key-dict-comprehension` | Dictionary comprehension uses static key: {key} |
| [`B039`](https://docs.astral.sh/ruff/rules/mutable-contextvar-default/) | `mutable-contextvar-default` | Do not use mutable data structures for ContextVar defaults |
| [`B043`](https://docs.astral.sh/ruff/rules/del-attr-with-constant/) | `del-attr-with-constant` | Do not call delattr with a constant attribute value. It is not any safer than normal property deletion. |
| [`B901`](https://docs.astral.sh/ruff/rules/return-in-generator/) | `return-in-generator` | Using yield and return {value} in a generator function can lead to confusing behavior |
| [`B903`](https://docs.astral.sh/ruff/rules/class-as-data-structure/) | `class-as-data-structure` | Class could be dataclass or namedtuple |
| [`B904`](https://docs.astral.sh/ruff/rules/raise-without-from-inside-except/) | `raise-without-from-inside-except` | Within an except* clause, raise exceptions with raise ... from err or raise ... from None to distinguish them from errors in exception handling |
| [`B905`](https://docs.astral.sh/ruff/rules/zip-without-explicit-strict/) | `zip-without-explicit-strict` | zip() without an explicit strict= parameter |
| [`B909`](https://docs.astral.sh/ruff/rules/loop-iterator-mutation/) | `loop-iterator-mutation` | Mutation to loop iterable {name} during iteration |
| [`B911`](https://docs.astral.sh/ruff/rules/batched-without-explicit-strict/) | `batched-without-explicit-strict` | itertools.batched() without an explicit strict parameter |
| [`B912`](https://docs.astral.sh/ruff/rules/map-without-explicit-strict/) | `map-without-explicit-strict` | map() without an explicit strict= parameter |
| [`A001`](https://docs.astral.sh/ruff/rules/builtin-variable-shadowing/) | `builtin-variable-shadowing` | Variable {name} is shadowing a Python builtin |
| [`A002`](https://docs.astral.sh/ruff/rules/builtin-argument-shadowing/) | `builtin-argument-shadowing` | Function argument {name} is shadowing a Python builtin |
| [`A003`](https://docs.astral.sh/ruff/rules/builtin-attribute-shadowing/) | `builtin-attribute-shadowing` | Python builtin is shadowed by class attribute {name} from {row} |
| [`A004`](https://docs.astral.sh/ruff/rules/builtin-import-shadowing/) | `builtin-import-shadowing` | Import {name} is shadowing a Python builtin |
| [`A005`](https://docs.astral.sh/ruff/rules/stdlib-module-shadowing/) | `stdlib-module-shadowing` | Module {name} shadows a Python standard-library module |
| [`A006`](https://docs.astral.sh/ruff/rules/builtin-lambda-argument-shadowing/) | `builtin-lambda-argument-shadowing` | Lambda argument {name} is shadowing a Python builtin |
| [`COM812`](https://docs.astral.sh/ruff/rules/missing-trailing-comma/) | `missing-trailing-comma` | Trailing comma missing |
| [`COM818`](https://docs.astral.sh/ruff/rules/trailing-comma-on-bare-tuple/) | `trailing-comma-on-bare-tuple` | Trailing comma on bare tuple prohibited |
| [`COM819`](https://docs.astral.sh/ruff/rules/prohibited-trailing-comma/) | `prohibited-trailing-comma` | Trailing comma prohibited |
| [`C400`](https://docs.astral.sh/ruff/rules/unnecessary-generator-list/) | `unnecessary-generator-list` | Unnecessary generator (rewrite using list()) |
| [`C401`](https://docs.astral.sh/ruff/rules/unnecessary-generator-set/) | `unnecessary-generator-set` | Unnecessary generator (rewrite using set()) |
| [`C402`](https://docs.astral.sh/ruff/rules/unnecessary-generator-dict/) | `unnecessary-generator-dict` | Unnecessary generator (rewrite as a dict comprehension) |
| [`C403`](https://docs.astral.sh/ruff/rules/unnecessary-list-comprehension-set/) | `unnecessary-list-comprehension-set` | Unnecessary list comprehension (rewrite as a set comprehension) |
| [`C404`](https://docs.astral.sh/ruff/rules/unnecessary-list-comprehension-dict/) | `unnecessary-list-comprehension-dict` | Unnecessary list comprehension (rewrite as a dict comprehension) |
| [`C405`](https://docs.astral.sh/ruff/rules/unnecessary-literal-set/) | `unnecessary-literal-set` | Unnecessary {kind} literal (rewrite as a set literal) |
| [`C406`](https://docs.astral.sh/ruff/rules/unnecessary-literal-dict/) | `unnecessary-literal-dict` | Unnecessary {obj_type} literal (rewrite as a dict literal) |
| [`C408`](https://docs.astral.sh/ruff/rules/unnecessary-collection-call/) | `unnecessary-collection-call` | Unnecessary {kind}() call (rewrite as a literal) |
| [`C409`](https://docs.astral.sh/ruff/rules/unnecessary-literal-within-tuple-call/) | `unnecessary-literal-within-tuple-call` | Unnecessary list literal passed to tuple() (rewrite as a tuple literal) |
| [`C410`](https://docs.astral.sh/ruff/rules/unnecessary-literal-within-list-call/) | `unnecessary-literal-within-list-call` | Unnecessary list literal passed to list() (remove the outer call to list()) |
| [`C411`](https://docs.astral.sh/ruff/rules/unnecessary-list-call/) | `unnecessary-list-call` | Unnecessary list() call (remove the outer call to list()) |
| [`C413`](https://docs.astral.sh/ruff/rules/unnecessary-call-around-sorted/) | `unnecessary-call-around-sorted` | Unnecessary {func}() call around sorted() |
| [`C414`](https://docs.astral.sh/ruff/rules/unnecessary-double-cast-or-process/) | `unnecessary-double-cast-or-process` | Unnecessary {inner}() call within {outer}() |
| [`C415`](https://docs.astral.sh/ruff/rules/unnecessary-subscript-reversal/) | `unnecessary-subscript-reversal` | Unnecessary subscript reversal of iterable within {func}() |
| [`C416`](https://docs.astral.sh/ruff/rules/unnecessary-comprehension/) | `unnecessary-comprehension` | Unnecessary {kind} comprehension (rewrite using {kind}()) |
| [`C417`](https://docs.astral.sh/ruff/rules/unnecessary-map/) | `unnecessary-map` | Unnecessary map() usage (rewrite using a {object_type}) |
| [`C418`](https://docs.astral.sh/ruff/rules/unnecessary-literal-within-dict-call/) | `unnecessary-literal-within-dict-call` | Unnecessary dict {kind} passed to dict() (remove the outer call to dict()) |
| [`C419`](https://docs.astral.sh/ruff/rules/unnecessary-comprehension-in-call/) | `unnecessary-comprehension-in-call` | Unnecessary list comprehension |
| [`C420`](https://docs.astral.sh/ruff/rules/unnecessary-dict-comprehension-for-iterable/) | `unnecessary-dict-comprehension-for-iterable` | Unnecessary dict comprehension for iterable; use dict.fromkeys instead |
| [`CPY001`](https://docs.astral.sh/ruff/rules/missing-copyright-notice/) | `missing-copyright-notice` | Missing copyright notice at top of file |
| [`DTZ001`](https://docs.astral.sh/ruff/rules/call-datetime-without-tzinfo/) | `call-datetime-without-tzinfo` | datetime.datetime() called without a tzinfo argument |
| [`DTZ002`](https://docs.astral.sh/ruff/rules/call-datetime-today/) | `call-datetime-today` | datetime.datetime.today() used |
| [`DTZ003`](https://docs.astral.sh/ruff/rules/call-datetime-utcnow/) | `call-datetime-utcnow` | datetime.datetime.utcnow() used |
| [`DTZ004`](https://docs.astral.sh/ruff/rules/call-datetime-utcfromtimestamp/) | `call-datetime-utcfromtimestamp` | datetime.datetime.utcfromtimestamp() used |
| [`DTZ005`](https://docs.astral.sh/ruff/rules/call-datetime-now-without-tzinfo/) | `call-datetime-now-without-tzinfo` | datetime.datetime.now() called without a tz argument |
| [`DTZ006`](https://docs.astral.sh/ruff/rules/call-datetime-fromtimestamp/) | `call-datetime-fromtimestamp` | datetime.datetime.fromtimestamp() called without a tz argument |
| [`DTZ007`](https://docs.astral.sh/ruff/rules/call-datetime-strptime-without-zone/) | `call-datetime-strptime-without-zone` | Naive datetime constructed using datetime.datetime.strptime() without %z |
| [`DTZ011`](https://docs.astral.sh/ruff/rules/call-date-today/) | `call-date-today` | datetime.date.today() used |
| [`DTZ012`](https://docs.astral.sh/ruff/rules/call-date-fromtimestamp/) | `call-date-fromtimestamp` | datetime.date.fromtimestamp() used |
| [`DTZ901`](https://docs.astral.sh/ruff/rules/datetime-min-max/) | `datetime-min-max` | Use of datetime.datetime.{min_max} without timezone information |
| [`T100`](https://docs.astral.sh/ruff/rules/debugger/) | `debugger` | Trace found: {name} used |
| [`DJ001`](https://docs.astral.sh/ruff/rules/django-nullable-model-string-field/) | `django-nullable-model-string-field` | Avoid using null=True on string-based fields such as {field_name} |
| [`DJ003`](https://docs.astral.sh/ruff/rules/django-locals-in-render-function/) | `django-locals-in-render-function` | Avoid passing locals() as context to a render function |
| [`DJ006`](https://docs.astral.sh/ruff/rules/django-exclude-with-model-form/) | `django-exclude-with-model-form` | Do not use exclude with ModelForm, use fields instead |
| [`DJ007`](https://docs.astral.sh/ruff/rules/django-all-with-model-form/) | `django-all-with-model-form` | Do not use __all__ with ModelForm, use fields instead |
| [`DJ008`](https://docs.astral.sh/ruff/rules/django-model-without-dunder-str/) | `django-model-without-dunder-str` | Model does not define __str__ method |
| [`DJ012`](https://docs.astral.sh/ruff/rules/django-unordered-body-content-in-model/) | `django-unordered-body-content-in-model` | Order of model's inner classes, methods, and fields does not follow the Django Style Guide: {element_type} should come before {prev_element_type} |
| [`DJ013`](https://docs.astral.sh/ruff/rules/django-non-leading-receiver-decorator/) | `django-non-leading-receiver-decorator` | @receiver decorator must be on top of all the other decorators |
| [`EM101`](https://docs.astral.sh/ruff/rules/raw-string-in-exception/) | `raw-string-in-exception` | Exception must not use a string literal, assign to variable first |
| [`EM102`](https://docs.astral.sh/ruff/rules/f-string-in-exception/) | `f-string-in-exception` | Exception must not use an f-string literal, assign to variable first |
| [`EM103`](https://docs.astral.sh/ruff/rules/dot-format-in-exception/) | `dot-format-in-exception` | Exception must not use a .format() string directly, assign to variable first |
| [`EXE001`](https://docs.astral.sh/ruff/rules/shebang-not-executable/) | `shebang-not-executable` | Shebang is present but file is not executable |
| [`EXE002`](https://docs.astral.sh/ruff/rules/shebang-missing-executable-file/) | `shebang-missing-executable-file` | The file is executable but no shebang is present |
| [`EXE003`](https://docs.astral.sh/ruff/rules/shebang-missing-python/) | `shebang-missing-python` | Shebang should contain python, pytest, or uv run |
| [`EXE004`](https://docs.astral.sh/ruff/rules/shebang-leading-whitespace/) | `shebang-leading-whitespace` | Avoid whitespace before shebang |
| [`EXE005`](https://docs.astral.sh/ruff/rules/shebang-not-first-line/) | `shebang-not-first-line` | Shebang should be at the beginning of the file |
| [`FIX001`](https://docs.astral.sh/ruff/rules/line-contains-fixme/) | `line-contains-fixme` | Line contains FIXME, consider resolving the issue |
| [`FIX002`](https://docs.astral.sh/ruff/rules/line-contains-todo/) | `line-contains-todo` | Line contains TODO, consider resolving the issue |
| [`FIX003`](https://docs.astral.sh/ruff/rules/line-contains-xxx/) | `line-contains-xxx` | Line contains XXX, consider resolving the issue |
| [`FIX004`](https://docs.astral.sh/ruff/rules/line-contains-hack/) | `line-contains-hack` | Line contains HACK, consider resolving the issue |
| [`FA100`](https://docs.astral.sh/ruff/rules/future-rewritable-type-annotation/) | `future-rewritable-type-annotation` | Add from __future__ import annotations to simplify {name} |
| [`FA102`](https://docs.astral.sh/ruff/rules/future-required-type-annotation/) | `future-required-type-annotation` | Missing from __future__ import annotations, but uses {reason} |
| [`INT001`](https://docs.astral.sh/ruff/rules/f-string-in-get-text-func-call/) | `f-string-in-get-text-func-call` | f-string in plural argument is resolved before function call |
| [`INT002`](https://docs.astral.sh/ruff/rules/format-in-get-text-func-call/) | `format-in-get-text-func-call` | format method in plural argument is resolved before function call |
| [`INT003`](https://docs.astral.sh/ruff/rules/printf-in-get-text-func-call/) | `printf-in-get-text-func-call` | printf-style format in plural argument is resolved before function call |
| [`ISC001`](https://docs.astral.sh/ruff/rules/single-line-implicit-string-concatenation/) | `single-line-implicit-string-concatenation` | Implicitly concatenated string literals on one line |
| [`ISC002`](https://docs.astral.sh/ruff/rules/multi-line-implicit-string-concatenation/) | `multi-line-implicit-string-concatenation` | Implicitly concatenated string literals over multiple lines |
| [`ISC003`](https://docs.astral.sh/ruff/rules/explicit-string-concatenation/) | `explicit-string-concatenation` | Explicitly concatenated string should be implicitly concatenated |
| [`ISC004`](https://docs.astral.sh/ruff/rules/implicit-string-concatenation-in-collection-literal/) | `implicit-string-concatenation-in-collection-literal` | Unparenthesized implicit string concatenation in collection |
| [`ICN001`](https://docs.astral.sh/ruff/rules/unconventional-import-alias/) | `unconventional-import-alias` | {name} should be imported as {asname} |
| [`ICN002`](https://docs.astral.sh/ruff/rules/banned-import-alias/) | `banned-import-alias` | {name} should not be imported as {asname} |
| [`ICN003`](https://docs.astral.sh/ruff/rules/banned-import-from/) | `banned-import-from` | Members of {name} should not be imported explicitly |
| [`LOG001`](https://docs.astral.sh/ruff/rules/direct-logger-instantiation/) | `direct-logger-instantiation` | Use logging.getLogger() to instantiate loggers |
| [`LOG002`](https://docs.astral.sh/ruff/rules/invalid-get-logger-argument/) | `invalid-get-logger-argument` | Use __name__ with logging.getLogger() |
| [`LOG004`](https://docs.astral.sh/ruff/rules/log-exception-outside-except-handler/) | `log-exception-outside-except-handler` | .exception() call outside exception handlers |
| [`LOG007`](https://docs.astral.sh/ruff/rules/exception-without-exc-info/) | `exception-without-exc-info` | Use of logging.exception with falsy exc_info |
| [`LOG009`](https://docs.astral.sh/ruff/rules/undocumented-warn/) | `undocumented-warn` | Use of undocumented logging.WARN constant |
| [`LOG014`](https://docs.astral.sh/ruff/rules/exc-info-outside-except-handler/) | `exc-info-outside-except-handler` | exc_info= outside exception handlers |
| [`LOG015`](https://docs.astral.sh/ruff/rules/root-logger-call/) | `root-logger-call` | {}() call on root logger |
| [`G001`](https://docs.astral.sh/ruff/rules/logging-string-format/) | `logging-string-format` | Logging statement uses str.format |
| [`G002`](https://docs.astral.sh/ruff/rules/logging-percent-format/) | `logging-percent-format` | Logging statement uses % |
| [`G003`](https://docs.astral.sh/ruff/rules/logging-string-concat/) | `logging-string-concat` | Logging statement uses + |
| [`G004`](https://docs.astral.sh/ruff/rules/logging-f-string/) | `logging-f-string` | Logging statement uses f-string |
| [`G010`](https://docs.astral.sh/ruff/rules/logging-warn/) | `logging-warn` | Logging statement uses warn instead of warning |
| [`G101`](https://docs.astral.sh/ruff/rules/logging-extra-attr-clash/) | `logging-extra-attr-clash` | Logging statement uses an extra field that clashes with a LogRecord field: {key} |
| [`G201`](https://docs.astral.sh/ruff/rules/logging-exc-info/) | `logging-exc-info` | Logging .exception(...) should be used instead of .error(..., exc_info=True) |
| [`G202`](https://docs.astral.sh/ruff/rules/logging-redundant-exc-info/) | `logging-redundant-exc-info` | Logging statement has redundant exc_info |
| [`INP001`](https://docs.astral.sh/ruff/rules/implicit-namespace-package/) | `implicit-namespace-package` | File {filename} is part of an implicit namespace package. Add an __init__.py. |
| [`PIE790`](https://docs.astral.sh/ruff/rules/unnecessary-placeholder/) | `unnecessary-placeholder` | Unnecessary pass statement |
| [`PIE794`](https://docs.astral.sh/ruff/rules/duplicate-class-field-definition/) | `duplicate-class-field-definition` | Class field {name} is defined multiple times |
| [`PIE796`](https://docs.astral.sh/ruff/rules/non-unique-enums/) | `non-unique-enums` | Enum contains duplicate value: {value} |
| [`PIE800`](https://docs.astral.sh/ruff/rules/unnecessary-spread/) | `unnecessary-spread` | Unnecessary spread ** |
| [`PIE804`](https://docs.astral.sh/ruff/rules/unnecessary-dict-kwargs/) | `unnecessary-dict-kwargs` | Unnecessary dict kwargs |
| [`PIE807`](https://docs.astral.sh/ruff/rules/reimplemented-container-builtin/) | `reimplemented-container-builtin` | Prefer {container} over useless lambda |
| [`PIE808`](https://docs.astral.sh/ruff/rules/unnecessary-range-start/) | `unnecessary-range-start` | Unnecessary start argument in range |
| [`PIE810`](https://docs.astral.sh/ruff/rules/multiple-starts-ends-with/) | `multiple-starts-ends-with` | Call {attr} once with a tuple |
| [`T201`](https://docs.astral.sh/ruff/rules/print/) | `print` | print found |
| [`T203`](https://docs.astral.sh/ruff/rules/p-print/) | `p-print` | pprint found |
| [`PYI001`](https://docs.astral.sh/ruff/rules/unprefixed-type-param/) | `unprefixed-type-param` | Name of private {kind} must start with _ |
| [`PYI002`](https://docs.astral.sh/ruff/rules/complex-if-statement-in-stub/) | `complex-if-statement-in-stub` | if test must be a simple comparison against sys.platform or sys.version_info |
| [`PYI003`](https://docs.astral.sh/ruff/rules/unrecognized-version-info-check/) | `unrecognized-version-info-check` | Unrecognized sys.version_info check |
| [`PYI004`](https://docs.astral.sh/ruff/rules/patch-version-comparison/) | `patch-version-comparison` | Version comparison must use only major and minor version |
| [`PYI005`](https://docs.astral.sh/ruff/rules/wrong-tuple-length-version-comparison/) | `wrong-tuple-length-version-comparison` | Version comparison must be against a length-{expected_length} tuple |
| [`PYI006`](https://docs.astral.sh/ruff/rules/bad-version-info-comparison/) | `bad-version-info-comparison` | Use < or >= for sys.version_info comparisons |
| [`PYI007`](https://docs.astral.sh/ruff/rules/unrecognized-platform-check/) | `unrecognized-platform-check` | Unrecognized sys.platform check |
| [`PYI008`](https://docs.astral.sh/ruff/rules/unrecognized-platform-name/) | `unrecognized-platform-name` | Unrecognized platform {platform} |
| [`PYI009`](https://docs.astral.sh/ruff/rules/pass-statement-stub-body/) | `pass-statement-stub-body` | Empty body should contain ..., not pass |
| [`PYI010`](https://docs.astral.sh/ruff/rules/non-empty-stub-body/) | `non-empty-stub-body` | Function body must contain only ... |
| [`PYI011`](https://docs.astral.sh/ruff/rules/typed-argument-default-in-stub/) | `typed-argument-default-in-stub` | Only simple default values allowed for typed arguments |
| [`PYI012`](https://docs.astral.sh/ruff/rules/pass-in-class-body/) | `pass-in-class-body` | Class body must not contain pass |
| [`PYI013`](https://docs.astral.sh/ruff/rules/ellipsis-in-non-empty-class-body/) | `ellipsis-in-non-empty-class-body` | Non-empty class body must not contain ... |
| [`PYI014`](https://docs.astral.sh/ruff/rules/argument-default-in-stub/) | `argument-default-in-stub` | Only simple default values allowed for arguments |
| [`PYI015`](https://docs.astral.sh/ruff/rules/assignment-default-in-stub/) | `assignment-default-in-stub` | Only simple default values allowed for assignments |
| [`PYI016`](https://docs.astral.sh/ruff/rules/duplicate-union-member/) | `duplicate-union-member` | Duplicate union member {} |
| [`PYI017`](https://docs.astral.sh/ruff/rules/complex-assignment-in-stub/) | `complex-assignment-in-stub` | Stubs should not contain assignments to attributes or multiple targets |
| [`PYI018`](https://docs.astral.sh/ruff/rules/unused-private-type-var/) | `unused-private-type-var` | Private {type_var_like_kind} {type_var_like_name} is never used |
| [`PYI019`](https://docs.astral.sh/ruff/rules/custom-type-var-for-self/) | `custom-type-var-for-self` | Use Self instead of custom TypeVar {} |
| [`PYI020`](https://docs.astral.sh/ruff/rules/quoted-annotation-in-stub/) | `quoted-annotation-in-stub` | Quoted annotations should not be included in stubs |
| [`PYI021`](https://docs.astral.sh/ruff/rules/docstring-in-stub/) | `docstring-in-stub` | Docstrings should not be included in stubs |
| [`PYI024`](https://docs.astral.sh/ruff/rules/collections-named-tuple/) | `collections-named-tuple` | Use typing.NamedTuple instead of collections.namedtuple |
| [`PYI025`](https://docs.astral.sh/ruff/rules/unaliased-collections-abc-set-import/) | `unaliased-collections-abc-set-import` | Use from collections.abc import Set as AbstractSet to avoid confusion with the set builtin |
| [`PYI026`](https://docs.astral.sh/ruff/rules/type-alias-without-annotation/) | `type-alias-without-annotation` | Use {module}.TypeAlias for type alias, e.g., {name}: TypeAlias = {value} |
| [`PYI029`](https://docs.astral.sh/ruff/rules/str-or-repr-defined-in-stub/) | `str-or-repr-defined-in-stub` | Defining {name} in a stub is almost always redundant |
| [`PYI030`](https://docs.astral.sh/ruff/rules/unnecessary-literal-union/) | `unnecessary-literal-union` | Multiple literal members in a union. Use a single literal, e.g. Literal[{}] |
| [`PYI032`](https://docs.astral.sh/ruff/rules/any-eq-ne-annotation/) | `any-eq-ne-annotation` | Prefer object to Any for the second parameter to {method_name} |
| [`PYI033`](https://docs.astral.sh/ruff/rules/legacy-type-comment/) | `legacy-type-comment` | Don't use type comments |
| [`PYI034`](https://docs.astral.sh/ruff/rules/non-self-return-type/) | `non-self-return-type` | __new__ methods usually return self at runtime |
| [`PYI035`](https://docs.astral.sh/ruff/rules/unassigned-special-variable-in-stub/) | `unassigned-special-variable-in-stub` | {name} in a stub file must have a value, as it has the same semantics as {name} at runtime |
| [`PYI036`](https://docs.astral.sh/ruff/rules/bad-exit-annotation/) | `bad-exit-annotation` | Star-args in {method_name} should be annotated with object |
| [`PYI041`](https://docs.astral.sh/ruff/rules/redundant-numeric-union/) | `redundant-numeric-union` | Use {supertype} instead of {subtype} \| {supertype} |
| [`PYI042`](https://docs.astral.sh/ruff/rules/snake-case-type-alias/) | `snake-case-type-alias` | Type alias {name} should be CamelCase |
| [`PYI043`](https://docs.astral.sh/ruff/rules/t-suffixed-type-alias/) | `t-suffixed-type-alias` | Private type alias {name} should not be suffixed with T (the T suffix implies that an object is a TypeVar) |
| [`PYI044`](https://docs.astral.sh/ruff/rules/future-annotations-in-stub/) | `future-annotations-in-stub` | from __future__ import annotations has no effect in stub files, since type checkers automatically treat stubs as having those semantics |
| [`PYI045`](https://docs.astral.sh/ruff/rules/iter-method-return-iterable/) | `iter-method-return-iterable` | __aiter__ methods should return an AsyncIterator, not an AsyncIterable |
| [`PYI046`](https://docs.astral.sh/ruff/rules/unused-private-protocol/) | `unused-private-protocol` | Private protocol {name} is never used |
| [`PYI047`](https://docs.astral.sh/ruff/rules/unused-private-type-alias/) | `unused-private-type-alias` | Private TypeAlias {name} is never used |
| [`PYI048`](https://docs.astral.sh/ruff/rules/stub-body-multiple-statements/) | `stub-body-multiple-statements` | Function body must contain exactly one statement |
| [`PYI049`](https://docs.astral.sh/ruff/rules/unused-private-typed-dict/) | `unused-private-typed-dict` | Private TypedDict {name} is never used |
| [`PYI050`](https://docs.astral.sh/ruff/rules/no-return-argument-annotation-in-stub/) | `no-return-argument-annotation-in-stub` | Prefer {module}.Never over NoReturn for argument annotations |
| [`PYI051`](https://docs.astral.sh/ruff/rules/redundant-literal-union/) | `redundant-literal-union` | Literal[{literal}] is redundant in a union with {builtin_type} |
| [`PYI052`](https://docs.astral.sh/ruff/rules/unannotated-assignment-in-stub/) | `unannotated-assignment-in-stub` | Need type annotation for {name} |
| [`PYI053`](https://docs.astral.sh/ruff/rules/string-or-bytes-too-long/) | `string-or-bytes-too-long` | String and bytes literals longer than 50 characters are not permitted |
| [`PYI054`](https://docs.astral.sh/ruff/rules/numeric-literal-too-long/) | `numeric-literal-too-long` | Numeric literals with a string representation longer than ten characters are not permitted |
| [`PYI055`](https://docs.astral.sh/ruff/rules/unnecessary-type-union/) | `unnecessary-type-union` | Multiple type members in a union. Combine them into one, e.g., type[{union_str}]. |
| [`PYI056`](https://docs.astral.sh/ruff/rules/unsupported-method-call-on-all/) | `unsupported-method-call-on-all` | Calling .{name}() on __all__ may not be supported by all type checkers (use += instead) |
| [`PYI057`](https://docs.astral.sh/ruff/rules/byte-string-usage/) | `byte-string-usage` | Do not use {origin}.ByteString, which has unclear semantics and is deprecated |
| [`PYI058`](https://docs.astral.sh/ruff/rules/generator-return-from-iter-method/) | `generator-return-from-iter-method` | Use {return_type} as the return value for simple {method} methods |
| [`PYI059`](https://docs.astral.sh/ruff/rules/generic-not-last-base-class/) | `generic-not-last-base-class` | Generic[] should always be the last base class |
| [`PYI061`](https://docs.astral.sh/ruff/rules/redundant-none-literal/) | `redundant-none-literal` | Use None rather than Literal[None] |
| [`PYI062`](https://docs.astral.sh/ruff/rules/duplicate-literal-member/) | `duplicate-literal-member` | Duplicate literal member {} |
| [`PYI063`](https://docs.astral.sh/ruff/rules/pep484-style-positional-only-parameter/) | `pep484-style-positional-only-parameter` | Use PEP 570 syntax for positional-only parameters |
| [`PYI064`](https://docs.astral.sh/ruff/rules/redundant-final-literal/) | `redundant-final-literal` | Final[Literal[{literal}]] can be replaced with a bare Final |
| [`PYI066`](https://docs.astral.sh/ruff/rules/bad-version-info-order/) | `bad-version-info-order` | Put branches for newer Python versions first when branching on sys.version_info comparisons |
| [`PT001`](https://docs.astral.sh/ruff/rules/pytest-fixture-incorrect-parentheses-style/) | `pytest-fixture-incorrect-parentheses-style` | Use @pytest.fixture{expected} over @pytest.fixture{actual} |
| [`PT002`](https://docs.astral.sh/ruff/rules/pytest-fixture-positional-args/) | `pytest-fixture-positional-args` | Configuration for fixture {function} specified via positional args, use kwargs |
| [`PT003`](https://docs.astral.sh/ruff/rules/pytest-extraneous-scope-function/) | `pytest-extraneous-scope-function` | scope='function' is implied in @pytest.fixture() |
| [`PT006`](https://docs.astral.sh/ruff/rules/pytest-parametrize-names-wrong-type/) | `pytest-parametrize-names-wrong-type` | Wrong type passed to first argument of pytest.mark.parametrize; expected {expected_string} |
| [`PT007`](https://docs.astral.sh/ruff/rules/pytest-parametrize-values-wrong-type/) | `pytest-parametrize-values-wrong-type` | Wrong values type in pytest.mark.parametrize expected {values} |
| [`PT008`](https://docs.astral.sh/ruff/rules/pytest-patch-with-lambda/) | `pytest-patch-with-lambda` | Use return_value= instead of patching with lambda |
| [`PT009`](https://docs.astral.sh/ruff/rules/pytest-unittest-assertion/) | `pytest-unittest-assertion` | Use a regular assert instead of unittest-style {assertion} |
| [`PT010`](https://docs.astral.sh/ruff/rules/pytest-raises-without-exception/) | `pytest-raises-without-exception` | Set the expected exception in pytest.raises() |
| [`PT011`](https://docs.astral.sh/ruff/rules/pytest-raises-too-broad/) | `pytest-raises-too-broad` | pytest.raises({exception}) is too broad, set the match parameter or use a more specific exception |
| [`PT012`](https://docs.astral.sh/ruff/rules/pytest-raises-with-multiple-statements/) | `pytest-raises-with-multiple-statements` | pytest.raises() block should contain a single simple statement |
| [`PT013`](https://docs.astral.sh/ruff/rules/pytest-incorrect-pytest-import/) | `pytest-incorrect-pytest-import` | Incorrect import of pytest; use import pytest instead |
| [`PT014`](https://docs.astral.sh/ruff/rules/pytest-duplicate-parametrize-test-cases/) | `pytest-duplicate-parametrize-test-cases` | Duplicate of test case at index {index} in pytest.mark.parametrize |
| [`PT015`](https://docs.astral.sh/ruff/rules/pytest-assert-always-false/) | `pytest-assert-always-false` | Assertion always fails, replace with pytest.fail() |
| [`PT016`](https://docs.astral.sh/ruff/rules/pytest-fail-without-message/) | `pytest-fail-without-message` | No message passed to pytest.fail() |
| [`PT017`](https://docs.astral.sh/ruff/rules/pytest-assert-in-except/) | `pytest-assert-in-except` | Found assertion on exception {name} in except block, use pytest.raises() instead |
| [`PT018`](https://docs.astral.sh/ruff/rules/pytest-composite-assertion/) | `pytest-composite-assertion` | Assertion should be broken down into multiple parts |
| [`PT019`](https://docs.astral.sh/ruff/rules/pytest-fixture-param-without-value/) | `pytest-fixture-param-without-value` | Fixture {name} without value is injected as parameter, use @pytest.mark.usefixtures instead |
| [`PT020`](https://docs.astral.sh/ruff/rules/pytest-deprecated-yield-fixture/) | `pytest-deprecated-yield-fixture` | @pytest.yield_fixture is deprecated, use @pytest.fixture |
| [`PT021`](https://docs.astral.sh/ruff/rules/pytest-fixture-finalizer-callback/) | `pytest-fixture-finalizer-callback` | Use yield instead of request.addfinalizer |
| [`PT022`](https://docs.astral.sh/ruff/rules/pytest-useless-yield-fixture/) | `pytest-useless-yield-fixture` | No teardown in fixture {name}, use return instead of yield |
| [`PT023`](https://docs.astral.sh/ruff/rules/pytest-incorrect-mark-parentheses-style/) | `pytest-incorrect-mark-parentheses-style` | Use @pytest.mark.{mark_name}{expected_parens} over @pytest.mark.{mark_name}{actual_parens} |
| [`PT024`](https://docs.astral.sh/ruff/rules/pytest-unnecessary-asyncio-mark-on-fixture/) | `pytest-unnecessary-asyncio-mark-on-fixture` | pytest.mark.asyncio is unnecessary for fixtures |
| [`PT025`](https://docs.astral.sh/ruff/rules/pytest-erroneous-use-fixtures-on-fixture/) | `pytest-erroneous-use-fixtures-on-fixture` | pytest.mark.usefixtures has no effect on fixtures |
| [`PT026`](https://docs.astral.sh/ruff/rules/pytest-use-fixtures-without-parameters/) | `pytest-use-fixtures-without-parameters` | Useless pytest.mark.usefixtures without parameters |
| [`PT027`](https://docs.astral.sh/ruff/rules/pytest-unittest-raises-assertion/) | `pytest-unittest-raises-assertion` | Use pytest.raises instead of unittest-style {assertion} |
| [`PT028`](https://docs.astral.sh/ruff/rules/pytest-parameter-with-default-argument/) | `pytest-parameter-with-default-argument` | Test function parameter {} has default argument |
| [`PT029`](https://docs.astral.sh/ruff/rules/pytest-warns-without-warning/) | `pytest-warns-without-warning` | Set the expected warning in pytest.warns() |
| [`PT030`](https://docs.astral.sh/ruff/rules/pytest-warns-too-broad/) | `pytest-warns-too-broad` | pytest.warns({warning}) is too broad, set the match parameter or use a more specific warning |
| [`PT031`](https://docs.astral.sh/ruff/rules/pytest-warns-with-multiple-statements/) | `pytest-warns-with-multiple-statements` | pytest.warns() block should contain a single simple statement |
| [`Q000`](https://docs.astral.sh/ruff/rules/bad-quotes-inline-string/) | `bad-quotes-inline-string` | Single quotes found but double quotes preferred |
| [`Q001`](https://docs.astral.sh/ruff/rules/bad-quotes-multiline-string/) | `bad-quotes-multiline-string` | Single quote multiline found but double quotes preferred |
| [`Q002`](https://docs.astral.sh/ruff/rules/bad-quotes-docstring/) | `bad-quotes-docstring` | Single quote docstring found but double quotes preferred |
| [`Q003`](https://docs.astral.sh/ruff/rules/avoidable-escaped-quote/) | `avoidable-escaped-quote` | Change outer quotes to avoid escaping inner quotes |
| [`Q004`](https://docs.astral.sh/ruff/rules/unnecessary-escaped-quote/) | `unnecessary-escaped-quote` | Unnecessary escape on inner quote character |
| [`RSE102`](https://docs.astral.sh/ruff/rules/unnecessary-paren-on-raise-exception/) | `unnecessary-paren-on-raise-exception` | Unnecessary parentheses on raised exception |
| [`RET501`](https://docs.astral.sh/ruff/rules/unnecessary-return-none/) | `unnecessary-return-none` | Do not explicitly return None in function if it is the only possible return value |
| [`RET502`](https://docs.astral.sh/ruff/rules/implicit-return-value/) | `implicit-return-value` | Do not implicitly return None in function able to return non-None value |
| [`RET503`](https://docs.astral.sh/ruff/rules/implicit-return/) | `implicit-return` | Missing explicit return at the end of function able to return non-None value |
| [`RET504`](https://docs.astral.sh/ruff/rules/unnecessary-assign/) | `unnecessary-assign` | Unnecessary assignment to {name} before return statement |
| [`RET505`](https://docs.astral.sh/ruff/rules/superfluous-else-return/) | `superfluous-else-return` | Unnecessary {branch} after return statement |
| [`RET506`](https://docs.astral.sh/ruff/rules/superfluous-else-raise/) | `superfluous-else-raise` | Unnecessary {branch} after raise statement |
| [`RET507`](https://docs.astral.sh/ruff/rules/superfluous-else-continue/) | `superfluous-else-continue` | Unnecessary {branch} after continue statement |
| [`RET508`](https://docs.astral.sh/ruff/rules/superfluous-else-break/) | `superfluous-else-break` | Unnecessary {branch} after break statement |
| [`SLF001`](https://docs.astral.sh/ruff/rules/private-member-access/) | `private-member-access` | Private member accessed: {access} |
| [`SIM101`](https://docs.astral.sh/ruff/rules/duplicate-isinstance-call/) | `duplicate-isinstance-call` | Multiple isinstance calls for {name}, merge into a single call |
| [`SIM102`](https://docs.astral.sh/ruff/rules/collapsible-if/) | `collapsible-if` | Use a single if statement instead of nested if statements |
| [`SIM103`](https://docs.astral.sh/ruff/rules/needless-bool/) | `needless-bool` | Return the condition {condition} directly |
| [`SIM105`](https://docs.astral.sh/ruff/rules/suppressible-exception/) | `suppressible-exception` | Use contextlib.suppress({exception}) instead of try-except-pass |
| [`SIM107`](https://docs.astral.sh/ruff/rules/return-in-try-except-finally/) | `return-in-try-except-finally` | Don't use return in try-except and finally |
| [`SIM108`](https://docs.astral.sh/ruff/rules/if-else-block-instead-of-if-exp/) | `if-else-block-instead-of-if-exp` | Use ternary operator {contents} instead of if-else-block |
| [`SIM109`](https://docs.astral.sh/ruff/rules/compare-with-tuple/) | `compare-with-tuple` | Use {replacement} instead of multiple equality comparisons |
| [`SIM110`](https://docs.astral.sh/ruff/rules/reimplemented-builtin/) | `reimplemented-builtin` | Use {replacement} instead of for loop |
| [`SIM112`](https://docs.astral.sh/ruff/rules/uncapitalized-environment-variables/) | `uncapitalized-environment-variables` | Use capitalized environment variable {expected} instead of {actual} |
| [`SIM113`](https://docs.astral.sh/ruff/rules/enumerate-for-loop/) | `enumerate-for-loop` | Use enumerate() for index variable {index} in for loop |
| [`SIM114`](https://docs.astral.sh/ruff/rules/if-with-same-arms/) | `if-with-same-arms` | Combine if branches using logical or operator |
| [`SIM115`](https://docs.astral.sh/ruff/rules/open-file-with-context-handler/) | `open-file-with-context-handler` | Use a context manager for opening files |
| [`SIM116`](https://docs.astral.sh/ruff/rules/if-else-block-instead-of-dict-lookup/) | `if-else-block-instead-of-dict-lookup` | Use a dictionary instead of consecutive if statements |
| [`SIM117`](https://docs.astral.sh/ruff/rules/multiple-with-statements/) | `multiple-with-statements` | Use a single with statement with multiple contexts instead of nested with statements |
| [`SIM118`](https://docs.astral.sh/ruff/rules/in-dict-keys/) | `in-dict-keys` | Use key {operator} dict instead of key {operator} dict.keys() |
| [`SIM201`](https://docs.astral.sh/ruff/rules/negate-equal-op/) | `negate-equal-op` | Use {left} != {right} instead of not {left} == {right} |
| [`SIM202`](https://docs.astral.sh/ruff/rules/negate-not-equal-op/) | `negate-not-equal-op` | Use {left} == {right} instead of not {left} != {right} |
| [`SIM208`](https://docs.astral.sh/ruff/rules/double-negation/) | `double-negation` | Use {expr} instead of not (not {expr}) |
| [`SIM210`](https://docs.astral.sh/ruff/rules/if-expr-with-true-false/) | `if-expr-with-true-false` | Remove unnecessary True if ... else False |
| [`SIM211`](https://docs.astral.sh/ruff/rules/if-expr-with-false-true/) | `if-expr-with-false-true` | Use not ... instead of False if ... else True |
| [`SIM212`](https://docs.astral.sh/ruff/rules/if-expr-with-twisted-arms/) | `if-expr-with-twisted-arms` | Use {expr_else} if {expr_else} else {expr_body} instead of {expr_body} if not {expr_else} else {expr_else} |
| [`SIM220`](https://docs.astral.sh/ruff/rules/expr-and-not-expr/) | `expr-and-not-expr` | Use False instead of {name} and not {name} |
| [`SIM221`](https://docs.astral.sh/ruff/rules/expr-or-not-expr/) | `expr-or-not-expr` | Use True instead of {name} or not {name} |
| [`SIM222`](https://docs.astral.sh/ruff/rules/expr-or-true/) | `expr-or-true` | Use {expr} instead of {replaced} |
| [`SIM223`](https://docs.astral.sh/ruff/rules/expr-and-false/) | `expr-and-false` | Use {expr} instead of {replaced} |
| [`SIM300`](https://docs.astral.sh/ruff/rules/yoda-conditions/) | `yoda-conditions` | Yoda condition detected |
| [`SIM401`](https://docs.astral.sh/ruff/rules/if-else-block-instead-of-dict-get/) | `if-else-block-instead-of-dict-get` | Use {contents} instead of an if block |
| [`SIM905`](https://docs.astral.sh/ruff/rules/split-static-string/) | `split-static-string` | Consider using a list literal instead of str.{} |
| [`SIM910`](https://docs.astral.sh/ruff/rules/dict-get-with-none-default/) | `dict-get-with-none-default` | Use {expected} instead of {actual} |
| [`SIM911`](https://docs.astral.sh/ruff/rules/zip-dict-keys-and-values/) | `zip-dict-keys-and-values` | Use {expected} instead of {actual} |
| [`SLOT000`](https://docs.astral.sh/ruff/rules/no-slots-in-str-subclass/) | `no-slots-in-str-subclass` | Subclasses of str should define __slots__ |
| [`SLOT001`](https://docs.astral.sh/ruff/rules/no-slots-in-tuple-subclass/) | `no-slots-in-tuple-subclass` | Subclasses of tuple should define __slots__ |
| [`SLOT002`](https://docs.astral.sh/ruff/rules/no-slots-in-namedtuple-subclass/) | `no-slots-in-namedtuple-subclass` | Subclasses of {namedtuple_kind} should define __slots__ |
| [`TID251`](https://docs.astral.sh/ruff/rules/banned-api/) | `banned-api` | {name} is banned: {message} |
| [`TID252`](https://docs.astral.sh/ruff/rules/relative-imports/) | `relative-imports` | Prefer absolute imports over relative imports from parent modules |
| [`TID253`](https://docs.astral.sh/ruff/rules/banned-module-level-imports/) | `banned-module-level-imports` | {name} is banned at the module level |
| [`TID254`](https://docs.astral.sh/ruff/rules/lazy-import-mismatch/) | `lazy-import-mismatch` | {name} should be imported lazily |
| [`TID255`](https://docs.astral.sh/ruff/rules/lazy-import-immediately-resolved/) | `lazy-import-immediately-resolved` | Lazy import {name} is resolved immediately |
| [`TD001`](https://docs.astral.sh/ruff/rules/invalid-todo-tag/) | `invalid-todo-tag` | Invalid TODO tag: {tag} |
| [`TD002`](https://docs.astral.sh/ruff/rules/missing-todo-author/) | `missing-todo-author` | Missing author in TODO; try: # TODO(<author_name>): ... or # TODO @<author_name>: ... |
| [`TD003`](https://docs.astral.sh/ruff/rules/missing-todo-link/) | `missing-todo-link` | Missing issue link for this TODO |
| [`TD004`](https://docs.astral.sh/ruff/rules/missing-todo-colon/) | `missing-todo-colon` | Missing colon in TODO |
| [`TD005`](https://docs.astral.sh/ruff/rules/missing-todo-description/) | `missing-todo-description` | Missing issue description after TODO |
| [`TD006`](https://docs.astral.sh/ruff/rules/invalid-todo-capitalization/) | `invalid-todo-capitalization` | Invalid TODO capitalization: {tag} should be TODO |
| [`TD007`](https://docs.astral.sh/ruff/rules/missing-space-after-todo-colon/) | `missing-space-after-todo-colon` | Missing space after colon in TODO |
| [`TC001`](https://docs.astral.sh/ruff/rules/typing-only-first-party-import/) | `typing-only-first-party-import` | Move application import {} into a type-checking block |
| [`TC002`](https://docs.astral.sh/ruff/rules/typing-only-third-party-import/) | `typing-only-third-party-import` | Move third-party import {} into a type-checking block |
| [`TC003`](https://docs.astral.sh/ruff/rules/typing-only-standard-library-import/) | `typing-only-standard-library-import` | Move standard library import {} into a type-checking block |
| [`TC004`](https://docs.astral.sh/ruff/rules/runtime-import-in-type-checking-block/) | `runtime-import-in-type-checking-block` | Move import {qualified_name} out of type-checking block. Import is used for more than type hinting. |
| [`TC005`](https://docs.astral.sh/ruff/rules/empty-type-checking-block/) | `empty-type-checking-block` | Found empty type-checking block |
| [`TC006`](https://docs.astral.sh/ruff/rules/runtime-cast-value/) | `runtime-cast-value` | Add quotes to type expression in typing.cast() |
| [`TC007`](https://docs.astral.sh/ruff/rules/unquoted-type-alias/) | `unquoted-type-alias` | Add quotes to type alias |
| [`TC008`](https://docs.astral.sh/ruff/rules/quoted-type-alias/) | `quoted-type-alias` | Remove quotes from type alias |
| [`TC010`](https://docs.astral.sh/ruff/rules/runtime-string-union/) | `runtime-string-union` | Invalid string member in X \| Y-style union type |
| [`ARG001`](https://docs.astral.sh/ruff/rules/unused-function-argument/) | `unused-function-argument` | Unused function argument: {name} |
| [`ARG002`](https://docs.astral.sh/ruff/rules/unused-method-argument/) | `unused-method-argument` | Unused method argument: {name} |
| [`ARG003`](https://docs.astral.sh/ruff/rules/unused-class-method-argument/) | `unused-class-method-argument` | Unused class method argument: {name} |
| [`ARG004`](https://docs.astral.sh/ruff/rules/unused-static-method-argument/) | `unused-static-method-argument` | Unused static method argument: {name} |
| [`ARG005`](https://docs.astral.sh/ruff/rules/unused-lambda-argument/) | `unused-lambda-argument` | Unused lambda argument: {name} |
| [`PTH100`](https://docs.astral.sh/ruff/rules/os-path-abspath/) | `os-path-abspath` | os.path.abspath() should be replaced by Path.resolve() |
| [`PTH101`](https://docs.astral.sh/ruff/rules/os-chmod/) | `os-chmod` | os.chmod() should be replaced by Path.chmod() |
| [`PTH102`](https://docs.astral.sh/ruff/rules/os-mkdir/) | `os-mkdir` | os.mkdir() should be replaced by Path.mkdir() |
| [`PTH103`](https://docs.astral.sh/ruff/rules/os-makedirs/) | `os-makedirs` | os.makedirs() should be replaced by Path.mkdir(parents=True) |
| [`PTH104`](https://docs.astral.sh/ruff/rules/os-rename/) | `os-rename` | os.rename() should be replaced by Path.rename() |
| [`PTH105`](https://docs.astral.sh/ruff/rules/os-replace/) | `os-replace` | os.replace() should be replaced by Path.replace() |
| [`PTH106`](https://docs.astral.sh/ruff/rules/os-rmdir/) | `os-rmdir` | os.rmdir() should be replaced by Path.rmdir() |
| [`PTH107`](https://docs.astral.sh/ruff/rules/os-remove/) | `os-remove` | os.remove() should be replaced by Path.unlink() |
| [`PTH108`](https://docs.astral.sh/ruff/rules/os-unlink/) | `os-unlink` | os.unlink() should be replaced by Path.unlink() |
| [`PTH109`](https://docs.astral.sh/ruff/rules/os-getcwd/) | `os-getcwd` | os.getcwd() should be replaced by Path.cwd() |
| [`PTH110`](https://docs.astral.sh/ruff/rules/os-path-exists/) | `os-path-exists` | os.path.exists() should be replaced by Path.exists() |
| [`PTH111`](https://docs.astral.sh/ruff/rules/os-path-expanduser/) | `os-path-expanduser` | os.path.expanduser() should be replaced by Path.expanduser() |
| [`PTH112`](https://docs.astral.sh/ruff/rules/os-path-isdir/) | `os-path-isdir` | os.path.isdir() should be replaced by Path.is_dir() |
| [`PTH113`](https://docs.astral.sh/ruff/rules/os-path-isfile/) | `os-path-isfile` | os.path.isfile() should be replaced by Path.is_file() |
| [`PTH114`](https://docs.astral.sh/ruff/rules/os-path-islink/) | `os-path-islink` | os.path.islink() should be replaced by Path.is_symlink() |
| [`PTH115`](https://docs.astral.sh/ruff/rules/os-readlink/) | `os-readlink` | os.readlink() should be replaced by Path.readlink() |
| [`PTH116`](https://docs.astral.sh/ruff/rules/os-stat/) | `os-stat` | os.stat() should be replaced by Path.stat(), Path.owner(), or Path.group() |
| [`PTH117`](https://docs.astral.sh/ruff/rules/os-path-isabs/) | `os-path-isabs` | os.path.isabs() should be replaced by Path.is_absolute() |
| [`PTH118`](https://docs.astral.sh/ruff/rules/os-path-join/) | `os-path-join` | os.{module}.join() should be replaced by Path with / operator |
| [`PTH119`](https://docs.astral.sh/ruff/rules/os-path-basename/) | `os-path-basename` | os.path.basename() should be replaced by Path.name |
| [`PTH120`](https://docs.astral.sh/ruff/rules/os-path-dirname/) | `os-path-dirname` | os.path.dirname() should be replaced by Path.parent |
| [`PTH121`](https://docs.astral.sh/ruff/rules/os-path-samefile/) | `os-path-samefile` | os.path.samefile() should be replaced by Path.samefile() |
| [`PTH122`](https://docs.astral.sh/ruff/rules/os-path-splitext/) | `os-path-splitext` | os.path.splitext() should be replaced by Path.suffix, Path.stem, and Path.parent |
| [`PTH123`](https://docs.astral.sh/ruff/rules/builtin-open/) | `builtin-open` | open() should be replaced by Path.open() |
| [`PTH124`](https://docs.astral.sh/ruff/rules/py-path/) | `py-path` | py.path is in maintenance mode, use pathlib instead |
| [`PTH201`](https://docs.astral.sh/ruff/rules/path-constructor-current-directory/) | `path-constructor-current-directory` | Do not pass the current directory explicitly to Path |
| [`PTH202`](https://docs.astral.sh/ruff/rules/os-path-getsize/) | `os-path-getsize` | os.path.getsize should be replaced by Path.stat().st_size |
| [`PTH203`](https://docs.astral.sh/ruff/rules/os-path-getatime/) | `os-path-getatime` | os.path.getatime should be replaced by Path.stat().st_atime |
| [`PTH204`](https://docs.astral.sh/ruff/rules/os-path-getmtime/) | `os-path-getmtime` | os.path.getmtime should be replaced by Path.stat().st_mtime |
| [`PTH205`](https://docs.astral.sh/ruff/rules/os-path-getctime/) | `os-path-getctime` | os.path.getctime should be replaced by Path.stat().st_ctime |
| [`PTH206`](https://docs.astral.sh/ruff/rules/os-sep-split/) | `os-sep-split` | Replace .split(os.sep) with Path.parts |
| [`PTH207`](https://docs.astral.sh/ruff/rules/glob/) | `glob` | Replace {function} with Path.glob or Path.rglob |
| [`PTH208`](https://docs.astral.sh/ruff/rules/os-listdir/) | `os-listdir` | Use pathlib.Path.iterdir() instead. |
| [`PTH210`](https://docs.astral.sh/ruff/rules/invalid-pathlib-with-suffix/) | `invalid-pathlib-with-suffix` | Invalid suffix passed to .with_suffix() |
| [`PTH211`](https://docs.astral.sh/ruff/rules/os-symlink/) | `os-symlink` | os.symlink should be replaced by Path.symlink_to |
| [`FLY002`](https://docs.astral.sh/ruff/rules/static-join-to-f-string/) | `static-join-to-f-string` | Consider {expression} instead of string join |
| [`I001`](https://docs.astral.sh/ruff/rules/unsorted-imports/) | `unsorted-imports` | Import block is un-sorted or un-formatted |
| [`I002`](https://docs.astral.sh/ruff/rules/missing-required-import/) | `missing-required-import` | Missing required import: {name} |
| [`C901`](https://docs.astral.sh/ruff/rules/complex-structure/) | `complex-structure` | {name} is too complex ({complexity} > {max_complexity}) |
| [`NPY001`](https://docs.astral.sh/ruff/rules/numpy-deprecated-type-alias/) | `numpy-deprecated-type-alias` | Type alias np.{type_name} is deprecated, replace with builtin type |
| [`NPY002`](https://docs.astral.sh/ruff/rules/numpy-legacy-random/) | `numpy-legacy-random` | Replace legacy np.random.{method_name} call with np.random.Generator |
| [`NPY003`](https://docs.astral.sh/ruff/rules/numpy-deprecated-function/) | `numpy-deprecated-function` | np.{existing} is deprecated; use np.{replacement} instead |
| [`NPY201`](https://docs.astral.sh/ruff/rules/numpy2-deprecation/) | `numpy2-deprecation` | np.{existing} will be removed in NumPy 2.0. {migration_guide} |
| [`PD002`](https://docs.astral.sh/ruff/rules/pandas-use-of-inplace-argument/) | `pandas-use-of-inplace-argument` | inplace=True should be avoided; it has inconsistent behavior |
| [`PD003`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-is-null/) | `pandas-use-of-dot-is-null` | .isna is preferred to .isnull; functionality is equivalent |
| [`PD004`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-not-null/) | `pandas-use-of-dot-not-null` | .notna is preferred to .notnull; functionality is equivalent |
| [`PD007`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-ix/) | `pandas-use-of-dot-ix` | .ix is deprecated; use more explicit .loc or .iloc |
| [`PD008`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-at/) | `pandas-use-of-dot-at` | Use .loc instead of .at. If speed is important, use NumPy. |
| [`PD009`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-iat/) | `pandas-use-of-dot-iat` | Use .iloc instead of .iat. If speed is important, use NumPy. |
| [`PD010`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-pivot-or-unstack/) | `pandas-use-of-dot-pivot-or-unstack` | .pivot_table is preferred to .pivot or .unstack; provides same functionality |
| [`PD011`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-values/) | `pandas-use-of-dot-values` | Use .to_numpy() or .array instead of .values |
| [`PD012`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-read-table/) | `pandas-use-of-dot-read-table` | Use .read_csv instead of .read_table to read CSV files |
| [`PD013`](https://docs.astral.sh/ruff/rules/pandas-use-of-dot-stack/) | `pandas-use-of-dot-stack` | .melt is preferred to .stack; provides same functionality |
| [`PD015`](https://docs.astral.sh/ruff/rules/pandas-use-of-pd-merge/) | `pandas-use-of-pd-merge` | Use .merge method instead of pd.merge function. They have equivalent functionality. |
| [`PD101`](https://docs.astral.sh/ruff/rules/pandas-nunique-constant-series-check/) | `pandas-nunique-constant-series-check` | Using series.nunique() for checking that a series is constant is inefficient |
| [`N801`](https://docs.astral.sh/ruff/rules/invalid-class-name/) | `invalid-class-name` | Class name {name} should use CapWords convention |
| [`N802`](https://docs.astral.sh/ruff/rules/invalid-function-name/) | `invalid-function-name` | Function name {name} should be lowercase |
| [`N803`](https://docs.astral.sh/ruff/rules/invalid-argument-name/) | `invalid-argument-name` | Argument name {name} should be lowercase |
| [`N804`](https://docs.astral.sh/ruff/rules/invalid-first-argument-name-for-class-method/) | `invalid-first-argument-name-for-class-method` | First argument of a class method should be named cls |
| [`N805`](https://docs.astral.sh/ruff/rules/invalid-first-argument-name-for-method/) | `invalid-first-argument-name-for-method` | First argument of a method should be named self |
| [`N806`](https://docs.astral.sh/ruff/rules/non-lowercase-variable-in-function/) | `non-lowercase-variable-in-function` | Variable {name} in function should be lowercase |
| [`N807`](https://docs.astral.sh/ruff/rules/dunder-function-name/) | `dunder-function-name` | Function name should not start and end with __ |
| [`N811`](https://docs.astral.sh/ruff/rules/constant-imported-as-non-constant/) | `constant-imported-as-non-constant` | Constant {name} imported as non-constant {asname} |
| [`N812`](https://docs.astral.sh/ruff/rules/lowercase-imported-as-non-lowercase/) | `lowercase-imported-as-non-lowercase` | Lowercase {name} imported as non-lowercase {asname} |
| [`N813`](https://docs.astral.sh/ruff/rules/camelcase-imported-as-lowercase/) | `camelcase-imported-as-lowercase` | Camelcase {name} imported as lowercase {asname} |
| [`N814`](https://docs.astral.sh/ruff/rules/camelcase-imported-as-constant/) | `camelcase-imported-as-constant` | Camelcase {name} imported as constant {asname} |
| [`N815`](https://docs.astral.sh/ruff/rules/mixed-case-variable-in-class-scope/) | `mixed-case-variable-in-class-scope` | Variable {name} in class scope should not be mixedCase |
| [`N816`](https://docs.astral.sh/ruff/rules/mixed-case-variable-in-global-scope/) | `mixed-case-variable-in-global-scope` | Variable {name} in global scope should not be mixedCase |
| [`N817`](https://docs.astral.sh/ruff/rules/camelcase-imported-as-acronym/) | `camelcase-imported-as-acronym` | CamelCase {name} imported as acronym {asname} |
| [`N818`](https://docs.astral.sh/ruff/rules/error-suffix-on-exception-name/) | `error-suffix-on-exception-name` | Exception name {name} should be named with an Error suffix |
| [`N999`](https://docs.astral.sh/ruff/rules/invalid-module-name/) | `invalid-module-name` | Invalid module name: '{name}' |
| [`PERF101`](https://docs.astral.sh/ruff/rules/unnecessary-list-cast/) | `unnecessary-list-cast` | Do not cast an iterable to list before iterating over it |
| [`PERF102`](https://docs.astral.sh/ruff/rules/incorrect-dict-iterator/) | `incorrect-dict-iterator` | When using only the {subset} of a dict use the {subset}() method |
| [`PERF203`](https://docs.astral.sh/ruff/rules/try-except-in-loop/) | `try-except-in-loop` | try-except within a loop incurs performance overhead |
| [`PERF401`](https://docs.astral.sh/ruff/rules/manual-list-comprehension/) | `manual-list-comprehension` | Use {message_str} to create a transformed list |
| [`PERF402`](https://docs.astral.sh/ruff/rules/manual-list-copy/) | `manual-list-copy` | Use list or list.copy to create a copy of a list |
| [`PERF403`](https://docs.astral.sh/ruff/rules/manual-dict-comprehension/) | `manual-dict-comprehension` | Use a dictionary comprehension instead of {modifier} for-loop |
| [`E101`](https://docs.astral.sh/ruff/rules/mixed-spaces-and-tabs/) | `mixed-spaces-and-tabs` | Indentation contains mixed spaces and tabs |
| [`E111`](https://docs.astral.sh/ruff/rules/indentation-with-invalid-multiple/) | `indentation-with-invalid-multiple` | Indentation is not a multiple of {indent_width} |
| [`E112`](https://docs.astral.sh/ruff/rules/no-indented-block/) | `no-indented-block` | Expected an indented block |
| [`E113`](https://docs.astral.sh/ruff/rules/unexpected-indentation/) | `unexpected-indentation` | Unexpected indentation |
| [`E114`](https://docs.astral.sh/ruff/rules/indentation-with-invalid-multiple-comment/) | `indentation-with-invalid-multiple-comment` | Indentation is not a multiple of {indent_width} (comment) |
| [`E115`](https://docs.astral.sh/ruff/rules/no-indented-block-comment/) | `no-indented-block-comment` | Expected an indented block (comment) |
| [`E116`](https://docs.astral.sh/ruff/rules/unexpected-indentation-comment/) | `unexpected-indentation-comment` | Unexpected indentation (comment) |
| [`E117`](https://docs.astral.sh/ruff/rules/over-indented/) | `over-indented` | Over-indented (comment) |
| [`E201`](https://docs.astral.sh/ruff/rules/whitespace-after-open-bracket/) | `whitespace-after-open-bracket` | Whitespace after '{symbol}' |
| [`E202`](https://docs.astral.sh/ruff/rules/whitespace-before-close-bracket/) | `whitespace-before-close-bracket` | Whitespace before '{symbol}' |
| [`E203`](https://docs.astral.sh/ruff/rules/whitespace-before-punctuation/) | `whitespace-before-punctuation` | Whitespace before '{symbol}' |
| [`E204`](https://docs.astral.sh/ruff/rules/whitespace-after-decorator/) | `whitespace-after-decorator` | Whitespace after decorator |
| [`E211`](https://docs.astral.sh/ruff/rules/whitespace-before-parameters/) | `whitespace-before-parameters` | Whitespace before '{bracket}' |
| [`E221`](https://docs.astral.sh/ruff/rules/multiple-spaces-before-operator/) | `multiple-spaces-before-operator` | Multiple spaces before operator |
| [`E222`](https://docs.astral.sh/ruff/rules/multiple-spaces-after-operator/) | `multiple-spaces-after-operator` | Multiple spaces after operator |
| [`E223`](https://docs.astral.sh/ruff/rules/tab-before-operator/) | `tab-before-operator` | Tab before operator |
| [`E224`](https://docs.astral.sh/ruff/rules/tab-after-operator/) | `tab-after-operator` | Tab after operator |
| [`E225`](https://docs.astral.sh/ruff/rules/missing-whitespace-around-operator/) | `missing-whitespace-around-operator` | Missing whitespace around operator |
| [`E226`](https://docs.astral.sh/ruff/rules/missing-whitespace-around-arithmetic-operator/) | `missing-whitespace-around-arithmetic-operator` | Missing whitespace around arithmetic operator |
| [`E227`](https://docs.astral.sh/ruff/rules/missing-whitespace-around-bitwise-or-shift-operator/) | `missing-whitespace-around-bitwise-or-shift-operator` | Missing whitespace around bitwise or shift operator |
| [`E228`](https://docs.astral.sh/ruff/rules/missing-whitespace-around-modulo-operator/) | `missing-whitespace-around-modulo-operator` | Missing whitespace around modulo operator |
| [`E231`](https://docs.astral.sh/ruff/rules/missing-whitespace/) | `missing-whitespace` | Missing whitespace after {} |
| [`E241`](https://docs.astral.sh/ruff/rules/multiple-spaces-after-comma/) | `multiple-spaces-after-comma` | Multiple spaces after comma |
| [`E242`](https://docs.astral.sh/ruff/rules/tab-after-comma/) | `tab-after-comma` | Tab after comma |
| [`E251`](https://docs.astral.sh/ruff/rules/unexpected-spaces-around-keyword-parameter-equals/) | `unexpected-spaces-around-keyword-parameter-equals` | Unexpected spaces around keyword / parameter equals |
| [`E252`](https://docs.astral.sh/ruff/rules/missing-whitespace-around-parameter-equals/) | `missing-whitespace-around-parameter-equals` | Missing whitespace around parameter equals |
| [`E261`](https://docs.astral.sh/ruff/rules/too-few-spaces-before-inline-comment/) | `too-few-spaces-before-inline-comment` | Insert at least two spaces before an inline comment |
| [`E262`](https://docs.astral.sh/ruff/rules/no-space-after-inline-comment/) | `no-space-after-inline-comment` | Inline comment should start with # |
| [`E265`](https://docs.astral.sh/ruff/rules/no-space-after-block-comment/) | `no-space-after-block-comment` | Block comment should start with # |
| [`E266`](https://docs.astral.sh/ruff/rules/multiple-leading-hashes-for-block-comment/) | `multiple-leading-hashes-for-block-comment` | Too many leading # before block comment |
| [`E271`](https://docs.astral.sh/ruff/rules/multiple-spaces-after-keyword/) | `multiple-spaces-after-keyword` | Multiple spaces after keyword |
| [`E272`](https://docs.astral.sh/ruff/rules/multiple-spaces-before-keyword/) | `multiple-spaces-before-keyword` | Multiple spaces before keyword |
| [`E273`](https://docs.astral.sh/ruff/rules/tab-after-keyword/) | `tab-after-keyword` | Tab after keyword |
| [`E274`](https://docs.astral.sh/ruff/rules/tab-before-keyword/) | `tab-before-keyword` | Tab before keyword |
| [`E275`](https://docs.astral.sh/ruff/rules/missing-whitespace-after-keyword/) | `missing-whitespace-after-keyword` | Missing whitespace after keyword |
| [`E301`](https://docs.astral.sh/ruff/rules/blank-line-between-methods/) | `blank-line-between-methods` | Expected {BLANK_LINES_NESTED_LEVEL:?} blank line, found 0 |
| [`E302`](https://docs.astral.sh/ruff/rules/blank-lines-top-level/) | `blank-lines-top-level` | Expected {expected_blank_lines:?} blank lines, found {actual_blank_lines} |
| [`E303`](https://docs.astral.sh/ruff/rules/too-many-blank-lines/) | `too-many-blank-lines` | Too many blank lines ({actual_blank_lines}) |
| [`E304`](https://docs.astral.sh/ruff/rules/blank-line-after-decorator/) | `blank-line-after-decorator` | Blank lines found after function decorator ({lines}) |
| [`E305`](https://docs.astral.sh/ruff/rules/blank-lines-after-function-or-class/) | `blank-lines-after-function-or-class` | Expected 2 blank lines after class or function definition, found ({blank_lines}) |
| [`E306`](https://docs.astral.sh/ruff/rules/blank-lines-before-nested-definition/) | `blank-lines-before-nested-definition` | Expected 1 blank line before a nested definition, found 0 |
| [`E401`](https://docs.astral.sh/ruff/rules/multiple-imports-on-one-line/) | `multiple-imports-on-one-line` | Multiple imports on one line |
| [`E402`](https://docs.astral.sh/ruff/rules/module-import-not-at-top-of-file/) | `module-import-not-at-top-of-file` | Module level import not at top of cell |
| [`E501`](https://docs.astral.sh/ruff/rules/line-too-long/) | `line-too-long` | Line too long ({width} > {limit}) |
| [`E502`](https://docs.astral.sh/ruff/rules/redundant-backslash/) | `redundant-backslash` | Redundant backslash |
| [`E701`](https://docs.astral.sh/ruff/rules/multiple-statements-on-one-line-colon/) | `multiple-statements-on-one-line-colon` | Multiple statements on one line (colon) |
| [`E702`](https://docs.astral.sh/ruff/rules/multiple-statements-on-one-line-semicolon/) | `multiple-statements-on-one-line-semicolon` | Multiple statements on one line (semicolon) |
| [`E703`](https://docs.astral.sh/ruff/rules/useless-semicolon/) | `useless-semicolon` | Statement ends with an unnecessary semicolon |
| [`E711`](https://docs.astral.sh/ruff/rules/none-comparison/) | `none-comparison` | Comparison to None should be cond is None |
| [`E712`](https://docs.astral.sh/ruff/rules/true-false-comparison/) | `true-false-comparison` | Avoid equality comparisons to True; use {cond}: for truth checks |
| [`E713`](https://docs.astral.sh/ruff/rules/not-in-test/) | `not-in-test` | Test for membership should be not in |
| [`E714`](https://docs.astral.sh/ruff/rules/not-is-test/) | `not-is-test` | Test for object identity should be is not |
| [`E721`](https://docs.astral.sh/ruff/rules/type-comparison/) | `type-comparison` | Use is and is not for type comparisons, or isinstance() for isinstance checks |
| [`E722`](https://docs.astral.sh/ruff/rules/bare-except/) | `bare-except` | Do not use bare except |
| [`E731`](https://docs.astral.sh/ruff/rules/lambda-assignment/) | `lambda-assignment` | Do not assign a lambda expression, use a def |
| [`E741`](https://docs.astral.sh/ruff/rules/ambiguous-variable-name/) | `ambiguous-variable-name` | Ambiguous variable name: {name} |
| [`E742`](https://docs.astral.sh/ruff/rules/ambiguous-class-name/) | `ambiguous-class-name` | Ambiguous class name: {name} |
| [`E743`](https://docs.astral.sh/ruff/rules/ambiguous-function-name/) | `ambiguous-function-name` | Ambiguous function name: {name} |
| [`E902`](https://docs.astral.sh/ruff/rules/io-error/) | `io-error` | {message} |
| [`W191`](https://docs.astral.sh/ruff/rules/tab-indentation/) | `tab-indentation` | Indentation contains tabs |
| [`W291`](https://docs.astral.sh/ruff/rules/trailing-whitespace/) | `trailing-whitespace` | Trailing whitespace |
| [`W292`](https://docs.astral.sh/ruff/rules/missing-newline-at-end-of-file/) | `missing-newline-at-end-of-file` | No newline at end of file |
| [`W293`](https://docs.astral.sh/ruff/rules/blank-line-with-whitespace/) | `blank-line-with-whitespace` | Blank line contains whitespace |
| [`W391`](https://docs.astral.sh/ruff/rules/too-many-newlines-at-end-of-file/) | `too-many-newlines-at-end-of-file` | Too many newlines at end of {domain} |
| [`W505`](https://docs.astral.sh/ruff/rules/doc-line-too-long/) | `doc-line-too-long` | Doc line too long ({width} > {limit}) |
| [`W605`](https://docs.astral.sh/ruff/rules/invalid-escape-sequence/) | `invalid-escape-sequence` | Invalid escape sequence: \{ch} |
| [`DOC102`](https://docs.astral.sh/ruff/rules/docstring-extraneous-parameter/) | `docstring-extraneous-parameter` | Documented parameter {id} is not in the function's signature |
| [`DOC201`](https://docs.astral.sh/ruff/rules/docstring-missing-returns/) | `docstring-missing-returns` | return is not documented in docstring |
| [`DOC202`](https://docs.astral.sh/ruff/rules/docstring-extraneous-returns/) | `docstring-extraneous-returns` | Docstring should not have a returns section because the function doesn't return anything |
| [`DOC402`](https://docs.astral.sh/ruff/rules/docstring-missing-yields/) | `docstring-missing-yields` | yield is not documented in docstring |
| [`DOC403`](https://docs.astral.sh/ruff/rules/docstring-extraneous-yields/) | `docstring-extraneous-yields` | Docstring has a "Yields" section but the function doesn't yield anything |
| [`DOC501`](https://docs.astral.sh/ruff/rules/docstring-missing-exception/) | `docstring-missing-exception` | Raised exception {id} missing from docstring |
| [`DOC502`](https://docs.astral.sh/ruff/rules/docstring-extraneous-exception/) | `docstring-extraneous-exception` | Raised exception is not explicitly raised: {id} |
| [`D100`](https://docs.astral.sh/ruff/rules/undocumented-public-module/) | `undocumented-public-module` | Missing docstring in public module |
| [`D101`](https://docs.astral.sh/ruff/rules/undocumented-public-class/) | `undocumented-public-class` | Missing docstring in public class |
| [`D102`](https://docs.astral.sh/ruff/rules/undocumented-public-method/) | `undocumented-public-method` | Missing docstring in public method |
| [`D103`](https://docs.astral.sh/ruff/rules/undocumented-public-function/) | `undocumented-public-function` | Missing docstring in public function |
| [`D104`](https://docs.astral.sh/ruff/rules/undocumented-public-package/) | `undocumented-public-package` | Missing docstring in public package |
| [`D105`](https://docs.astral.sh/ruff/rules/undocumented-magic-method/) | `undocumented-magic-method` | Missing docstring in magic method |
| [`D106`](https://docs.astral.sh/ruff/rules/undocumented-public-nested-class/) | `undocumented-public-nested-class` | Missing docstring in public nested class |
| [`D107`](https://docs.astral.sh/ruff/rules/undocumented-public-init/) | `undocumented-public-init` | Missing docstring in __init__ |
| [`D200`](https://docs.astral.sh/ruff/rules/unnecessary-multiline-docstring/) | `unnecessary-multiline-docstring` | One-line docstring should fit on one line |
| [`D201`](https://docs.astral.sh/ruff/rules/blank-line-before-function/) | `blank-line-before-function` | No blank lines allowed before function docstring (found {num_lines}) |
| [`D202`](https://docs.astral.sh/ruff/rules/blank-line-after-function/) | `blank-line-after-function` | No blank lines allowed after function docstring (found {num_lines}) |
| [`D203`](https://docs.astral.sh/ruff/rules/incorrect-blank-line-before-class/) | `incorrect-blank-line-before-class` | 1 blank line required before class docstring |
| [`D204`](https://docs.astral.sh/ruff/rules/incorrect-blank-line-after-class/) | `incorrect-blank-line-after-class` | 1 blank line required after class docstring |
| [`D205`](https://docs.astral.sh/ruff/rules/missing-blank-line-after-summary/) | `missing-blank-line-after-summary` | 1 blank line required between summary line and description |
| [`D206`](https://docs.astral.sh/ruff/rules/docstring-tab-indentation/) | `docstring-tab-indentation` | Docstring should be indented with spaces, not tabs |
| [`D207`](https://docs.astral.sh/ruff/rules/under-indentation/) | `under-indentation` | Docstring is under-indented |
| [`D208`](https://docs.astral.sh/ruff/rules/over-indentation/) | `over-indentation` | Docstring is over-indented |
| [`D209`](https://docs.astral.sh/ruff/rules/new-line-after-last-paragraph/) | `new-line-after-last-paragraph` | Multi-line docstring closing quotes should be on a separate line |
| [`D210`](https://docs.astral.sh/ruff/rules/surrounding-whitespace/) | `surrounding-whitespace` | No whitespaces allowed surrounding docstring text |
| [`D211`](https://docs.astral.sh/ruff/rules/blank-line-before-class/) | `blank-line-before-class` | No blank lines allowed before class docstring |
| [`D212`](https://docs.astral.sh/ruff/rules/multi-line-summary-first-line/) | `multi-line-summary-first-line` | Multi-line docstring summary should start at the first line |
| [`D213`](https://docs.astral.sh/ruff/rules/multi-line-summary-second-line/) | `multi-line-summary-second-line` | Multi-line docstring summary should start at the second line |
| [`D214`](https://docs.astral.sh/ruff/rules/overindented-section/) | `overindented-section` | Section is over-indented ("{name}") |
| [`D215`](https://docs.astral.sh/ruff/rules/overindented-section-underline/) | `overindented-section-underline` | Section underline is over-indented ("{name}") |
| [`D300`](https://docs.astral.sh/ruff/rules/triple-single-quotes/) | `triple-single-quotes` | Use triple double quotes """ |
| [`D301`](https://docs.astral.sh/ruff/rules/escape-sequence-in-docstring/) | `escape-sequence-in-docstring` | Use r""" if any backslashes in a docstring |
| [`D400`](https://docs.astral.sh/ruff/rules/missing-trailing-period/) | `missing-trailing-period` | First line should end with a period |
| [`D401`](https://docs.astral.sh/ruff/rules/non-imperative-mood/) | `non-imperative-mood` | First line of docstring should be in imperative mood: "{first_line}" |
| [`D402`](https://docs.astral.sh/ruff/rules/signature-in-docstring/) | `signature-in-docstring` | First line should not be the function's signature |
| [`D403`](https://docs.astral.sh/ruff/rules/first-word-uncapitalized/) | `first-word-uncapitalized` | First word of the docstring should be capitalized: {} -> {} |
| [`D404`](https://docs.astral.sh/ruff/rules/docstring-starts-with-this/) | `docstring-starts-with-this` | First word of the docstring should not be "This" |
| [`D405`](https://docs.astral.sh/ruff/rules/non-capitalized-section-name/) | `non-capitalized-section-name` | Section name should be properly capitalized ("{name}") |
| [`D406`](https://docs.astral.sh/ruff/rules/missing-new-line-after-section-name/) | `missing-new-line-after-section-name` | Section name should end with a newline ("{name}") |
| [`D407`](https://docs.astral.sh/ruff/rules/missing-dashed-underline-after-section/) | `missing-dashed-underline-after-section` | Missing dashed underline after section ("{name}") |
| [`D408`](https://docs.astral.sh/ruff/rules/missing-section-underline-after-name/) | `missing-section-underline-after-name` | Section underline should be in the line following the section's name ("{name}") |
| [`D409`](https://docs.astral.sh/ruff/rules/mismatched-section-underline-length/) | `mismatched-section-underline-length` | Section underline should match the length of its name ("{name}") |
| [`D410`](https://docs.astral.sh/ruff/rules/no-blank-line-after-section/) | `no-blank-line-after-section` | Missing blank line after section ("{name}") |
| [`D411`](https://docs.astral.sh/ruff/rules/no-blank-line-before-section/) | `no-blank-line-before-section` | Missing blank line before section ("{name}") |
| [`D412`](https://docs.astral.sh/ruff/rules/blank-lines-between-header-and-content/) | `blank-lines-between-header-and-content` | No blank lines allowed between a section header and its content ("{name}") |
| [`D413`](https://docs.astral.sh/ruff/rules/missing-blank-line-after-last-section/) | `missing-blank-line-after-last-section` | Missing blank line after last section ("{name}") |
| [`D414`](https://docs.astral.sh/ruff/rules/empty-docstring-section/) | `empty-docstring-section` | Section has no content ("{name}") |
| [`D415`](https://docs.astral.sh/ruff/rules/missing-terminal-punctuation/) | `missing-terminal-punctuation` | First line should end with a period, question mark, or exclamation point |
| [`D416`](https://docs.astral.sh/ruff/rules/missing-section-name-colon/) | `missing-section-name-colon` | Section name should end with a colon ("{name}") |
| [`D417`](https://docs.astral.sh/ruff/rules/undocumented-param/) | `undocumented-param` | Missing argument description in the docstring for {definition}: {name} |
| [`D418`](https://docs.astral.sh/ruff/rules/overload-with-docstring/) | `overload-with-docstring` | Function decorated with @overload shouldn't contain a docstring |
| [`D419`](https://docs.astral.sh/ruff/rules/empty-docstring/) | `empty-docstring` | Docstring is empty |
| [`D420`](https://docs.astral.sh/ruff/rules/incorrect-section-order/) | `incorrect-section-order` | Section "{current}" appears after section "{previous}" but should be before it |
| [`D421`](https://docs.astral.sh/ruff/rules/property-docstring-starts-with-verb/) | `property-docstring-starts-with-verb` | Property docstring should not start with a verb ("{first_word}") |
| [`F401`](https://docs.astral.sh/ruff/rules/unused-import/) | `unused-import` | {name} imported but unused; consider using importlib.util.find_spec to test for availability |
| [`F402`](https://docs.astral.sh/ruff/rules/import-shadowed-by-loop-var/) | `import-shadowed-by-loop-var` | Import {name} from {row} shadowed by loop variable |
| [`F403`](https://docs.astral.sh/ruff/rules/undefined-local-with-import-star/) | `undefined-local-with-import-star` | from {name} import * used; unable to detect undefined names |
| [`F404`](https://docs.astral.sh/ruff/rules/late-future-import/) | `late-future-import` | from __future__ imports must occur at the beginning of the file |
| [`F405`](https://docs.astral.sh/ruff/rules/undefined-local-with-import-star-usage/) | `undefined-local-with-import-star-usage` | {name} may be undefined, or defined from star imports |
| [`F406`](https://docs.astral.sh/ruff/rules/undefined-local-with-nested-import-star-usage/) | `undefined-local-with-nested-import-star-usage` | from {name} import * only allowed at module level |
| [`F407`](https://docs.astral.sh/ruff/rules/future-feature-not-defined/) | `future-feature-not-defined` | Future feature {name} is not defined |
| [`F501`](https://docs.astral.sh/ruff/rules/percent-format-invalid-format/) | `percent-format-invalid-format` | %-format string has invalid format string: {message} |
| [`F502`](https://docs.astral.sh/ruff/rules/percent-format-expected-mapping/) | `percent-format-expected-mapping` | %-format string expected mapping but got sequence |
| [`F503`](https://docs.astral.sh/ruff/rules/percent-format-expected-sequence/) | `percent-format-expected-sequence` | %-format string expected sequence but got mapping |
| [`F504`](https://docs.astral.sh/ruff/rules/percent-format-extra-named-arguments/) | `percent-format-extra-named-arguments` | %-format string has unused named argument(s): {message} |
| [`F505`](https://docs.astral.sh/ruff/rules/percent-format-missing-argument/) | `percent-format-missing-argument` | %-format string is missing argument(s) for placeholder(s): {message} |
| [`F506`](https://docs.astral.sh/ruff/rules/percent-format-mixed-positional-and-named/) | `percent-format-mixed-positional-and-named` | %-format string has mixed positional and named placeholders |
| [`F507`](https://docs.astral.sh/ruff/rules/percent-format-positional-count-mismatch/) | `percent-format-positional-count-mismatch` | %-format string has {wanted} placeholder(s) but {got} substitution(s) |
| [`F508`](https://docs.astral.sh/ruff/rules/percent-format-star-requires-sequence/) | `percent-format-star-requires-sequence` | %-format string * specifier requires sequence |
| [`F509`](https://docs.astral.sh/ruff/rules/percent-format-unsupported-format-character/) | `percent-format-unsupported-format-character` | %-format string has unsupported format character {char} |
| [`F521`](https://docs.astral.sh/ruff/rules/string-dot-format-invalid-format/) | `string-dot-format-invalid-format` | .format call has invalid format string: {message} |
| [`F522`](https://docs.astral.sh/ruff/rules/string-dot-format-extra-named-arguments/) | `string-dot-format-extra-named-arguments` | .format call has unused named argument(s): {message} |
| [`F523`](https://docs.astral.sh/ruff/rules/string-dot-format-extra-positional-arguments/) | `string-dot-format-extra-positional-arguments` | .format call has unused arguments at position(s): {message} |
| [`F524`](https://docs.astral.sh/ruff/rules/string-dot-format-missing-arguments/) | `string-dot-format-missing-arguments` | .format call is missing argument(s) for placeholder(s): {message} |
| [`F525`](https://docs.astral.sh/ruff/rules/string-dot-format-mixing-automatic/) | `string-dot-format-mixing-automatic` | .format string mixes automatic and manual numbering |
| [`F541`](https://docs.astral.sh/ruff/rules/f-string-missing-placeholders/) | `f-string-missing-placeholders` | f-string without any placeholders |
| [`F601`](https://docs.astral.sh/ruff/rules/multi-value-repeated-key-literal/) | `multi-value-repeated-key-literal` | Dictionary key literal {name} repeated |
| [`F602`](https://docs.astral.sh/ruff/rules/multi-value-repeated-key-variable/) | `multi-value-repeated-key-variable` | Dictionary key {name} repeated |
| [`F621`](https://docs.astral.sh/ruff/rules/expressions-in-star-assignment/) | `expressions-in-star-assignment` | Too many expressions in star-unpacking assignment |
| [`F622`](https://docs.astral.sh/ruff/rules/multiple-starred-expressions/) | `multiple-starred-expressions` | Two starred expressions in assignment |
| [`F631`](https://docs.astral.sh/ruff/rules/assert-tuple/) | `assert-tuple` | Assert test is a non-empty tuple, which is always True |
| [`F632`](https://docs.astral.sh/ruff/rules/is-literal/) | `is-literal` | Use == to compare constant literals |
| [`F633`](https://docs.astral.sh/ruff/rules/invalid-print-syntax/) | `invalid-print-syntax` | Use of >> is invalid with print function |
| [`F634`](https://docs.astral.sh/ruff/rules/if-tuple/) | `if-tuple` | If test is a tuple, which is always True |
| [`F701`](https://docs.astral.sh/ruff/rules/break-outside-loop/) | `break-outside-loop` | break outside loop |
| [`F702`](https://docs.astral.sh/ruff/rules/continue-outside-loop/) | `continue-outside-loop` | continue not properly in loop |
| [`F704`](https://docs.astral.sh/ruff/rules/yield-outside-function/) | `yield-outside-function` | {keyword} statement outside of a function |
| [`F706`](https://docs.astral.sh/ruff/rules/return-outside-function/) | `return-outside-function` | return statement outside of a function/method |
| [`F707`](https://docs.astral.sh/ruff/rules/default-except-not-last/) | `default-except-not-last` | An except block as not the last exception handler |
| [`F722`](https://docs.astral.sh/ruff/rules/forward-annotation-syntax-error/) | `forward-annotation-syntax-error` | Syntax error in forward annotation: {parse_error} |
| [`F811`](https://docs.astral.sh/ruff/rules/redefined-while-unused/) | `redefined-while-unused` | Redefinition of unused {name} from {row} |
| [`F821`](https://docs.astral.sh/ruff/rules/undefined-name/) | `undefined-name` | Undefined name {name}. {tip} |
| [`F822`](https://docs.astral.sh/ruff/rules/undefined-export/) | `undefined-export` | Undefined name {name} in __all__ |
| [`F823`](https://docs.astral.sh/ruff/rules/undefined-local/) | `undefined-local` | Local variable {name} referenced before assignment |
| [`F841`](https://docs.astral.sh/ruff/rules/unused-variable/) | `unused-variable` | Local variable {name} is assigned to but never used |
| [`F842`](https://docs.astral.sh/ruff/rules/unused-annotation/) | `unused-annotation` | Local variable {name} is annotated but never used |
| [`F901`](https://docs.astral.sh/ruff/rules/raise-not-implemented/) | `raise-not-implemented` | raise NotImplemented should be raise NotImplementedError |
| [`PGH003`](https://docs.astral.sh/ruff/rules/blanket-type-ignore/) | `blanket-type-ignore` | Use specific rule codes when ignoring type issues |
| [`PGH004`](https://docs.astral.sh/ruff/rules/blanket-noqa/) | `blanket-noqa` | Use specific rule codes when using noqa |
| [`PGH005`](https://docs.astral.sh/ruff/rules/invalid-mock-access/) | `invalid-mock-access` | Mock method should be called: {name} |
| [`PLC0105`](https://docs.astral.sh/ruff/rules/type-name-incorrect-variance/) | `type-name-incorrect-variance` | {kind} name "{param_name}" does not reflect its {variance}; consider renaming it to "{replacement_name}" |
| [`PLC0131`](https://docs.astral.sh/ruff/rules/type-bivariance/) | `type-bivariance` | {kind} cannot be both covariant and contravariant |
| [`PLC0132`](https://docs.astral.sh/ruff/rules/type-param-name-mismatch/) | `type-param-name-mismatch` | {kind} name {param_name} does not match assigned variable name {var_name} |
| [`PLC0205`](https://docs.astral.sh/ruff/rules/single-string-slots/) | `single-string-slots` | Class __slots__ should be a non-string iterable |
| [`PLC0206`](https://docs.astral.sh/ruff/rules/dict-index-missing-items/) | `dict-index-missing-items` | Extracting value from dictionary without calling .items() |
| [`PLC0207`](https://docs.astral.sh/ruff/rules/missing-maxsplit-arg/) | `missing-maxsplit-arg` | String is split more times than necessary |
| [`PLC0208`](https://docs.astral.sh/ruff/rules/iteration-over-set/) | `iteration-over-set` | Use a sequence type instead of a set when iterating over values |
| [`PLC0414`](https://docs.astral.sh/ruff/rules/useless-import-alias/) | `useless-import-alias` | Import alias does not rename original package |
| [`PLC0415`](https://docs.astral.sh/ruff/rules/import-outside-top-level/) | `import-outside-top-level` | import should be at the top-level of a file |
| [`PLC1802`](https://docs.astral.sh/ruff/rules/len-test/) | `len-test` | len({expression}) used as condition without comparison |
| [`PLC1901`](https://docs.astral.sh/ruff/rules/compare-to-empty-string/) | `compare-to-empty-string` | {existing} can be simplified to {replacement} as an empty string is falsey |
| [`PLC2401`](https://docs.astral.sh/ruff/rules/non-ascii-name/) | `non-ascii-name` | {kind} name {name} contains a non-ASCII character |
| [`PLC2403`](https://docs.astral.sh/ruff/rules/non-ascii-import-name/) | `non-ascii-import-name` | Module alias {name} contains a non-ASCII character |
| [`PLC2701`](https://docs.astral.sh/ruff/rules/import-private-name/) | `import-private-name` | Private name import {name} from external module {module} |
| [`PLC2801`](https://docs.astral.sh/ruff/rules/unnecessary-dunder-call/) | `unnecessary-dunder-call` | Unnecessary dunder call to {method}. {replacement}. |
| [`PLC3002`](https://docs.astral.sh/ruff/rules/unnecessary-direct-lambda-call/) | `unnecessary-direct-lambda-call` | Lambda expression called directly. Execute the expression inline instead. |
| [`PLE0100`](https://docs.astral.sh/ruff/rules/yield-in-init/) | `yield-in-init` | __init__ method is a generator |
| [`PLE0101`](https://docs.astral.sh/ruff/rules/return-in-init/) | `return-in-init` | Explicit return in __init__ |
| [`PLE0115`](https://docs.astral.sh/ruff/rules/nonlocal-and-global/) | `nonlocal-and-global` | Name {name} is both nonlocal and global |
| [`PLE0116`](https://docs.astral.sh/ruff/rules/continue-in-finally/) | `continue-in-finally` | continue not supported inside finally clause |
| [`PLE0117`](https://docs.astral.sh/ruff/rules/nonlocal-without-binding/) | `nonlocal-without-binding` | Nonlocal name {name} found without binding |
| [`PLE0118`](https://docs.astral.sh/ruff/rules/load-before-global-declaration/) | `load-before-global-declaration` | Name {name} is used prior to global declaration on {row} |
| [`PLE0237`](https://docs.astral.sh/ruff/rules/non-slot-assignment/) | `non-slot-assignment` | Attribute {name} is not defined in class's __slots__ |
| [`PLE0241`](https://docs.astral.sh/ruff/rules/duplicate-bases/) | `duplicate-bases` | Duplicate base {base} for class {class} |
| [`PLE0302`](https://docs.astral.sh/ruff/rules/unexpected-special-method-signature/) | `unexpected-special-method-signature` | The special method {} expects {}, {} {} given |
| [`PLE0303`](https://docs.astral.sh/ruff/rules/invalid-length-return-type/) | `invalid-length-return-type` | __len__ does not return a non-negative integer |
| [`PLE0304`](https://docs.astral.sh/ruff/rules/invalid-bool-return-type/) | `invalid-bool-return-type` | __bool__ does not return bool |
| [`PLE0305`](https://docs.astral.sh/ruff/rules/invalid-index-return-type/) | `invalid-index-return-type` | __index__ does not return an integer |
| [`PLE0307`](https://docs.astral.sh/ruff/rules/invalid-str-return-type/) | `invalid-str-return-type` | __str__ does not return str |
| [`PLE0308`](https://docs.astral.sh/ruff/rules/invalid-bytes-return-type/) | `invalid-bytes-return-type` | __bytes__ does not return bytes |
| [`PLE0309`](https://docs.astral.sh/ruff/rules/invalid-hash-return-type/) | `invalid-hash-return-type` | __hash__ does not return an integer |
| [`PLE0604`](https://docs.astral.sh/ruff/rules/invalid-all-object/) | `invalid-all-object` | Invalid object in __all__, must contain only strings |
| [`PLE0605`](https://docs.astral.sh/ruff/rules/invalid-all-format/) | `invalid-all-format` | Invalid format for __all__, must be tuple or list |
| [`PLE0643`](https://docs.astral.sh/ruff/rules/potential-index-error/) | `potential-index-error` | Expression is likely to raise IndexError |
| [`PLE0704`](https://docs.astral.sh/ruff/rules/misplaced-bare-raise/) | `misplaced-bare-raise` | Bare raise statement is not inside an exception handler |
| [`PLE1132`](https://docs.astral.sh/ruff/rules/repeated-keyword-argument/) | `repeated-keyword-argument` | Repeated keyword argument: {duplicate_keyword} |
| [`PLE1141`](https://docs.astral.sh/ruff/rules/dict-iter-missing-items/) | `dict-iter-missing-items` | Unpacking a dictionary in iteration without calling .items() |
| [`PLE1142`](https://docs.astral.sh/ruff/rules/await-outside-async/) | `await-outside-async` | await should be used within an async function |
| [`PLE1205`](https://docs.astral.sh/ruff/rules/logging-too-many-args/) | `logging-too-many-args` | Too many arguments for logging format string |
| [`PLE1206`](https://docs.astral.sh/ruff/rules/logging-too-few-args/) | `logging-too-few-args` | Not enough arguments for logging format string |
| [`PLE1300`](https://docs.astral.sh/ruff/rules/bad-string-format-character/) | `bad-string-format-character` | Unsupported format character '{format_char}' |
| [`PLE1307`](https://docs.astral.sh/ruff/rules/bad-string-format-type/) | `bad-string-format-type` | Format type does not match argument type |
| [`PLE1310`](https://docs.astral.sh/ruff/rules/bad-str-strip-call/) | `bad-str-strip-call` | String {strip} call contains duplicate characters (did you mean {removal}?) |
| [`PLE1507`](https://docs.astral.sh/ruff/rules/invalid-envvar-value/) | `invalid-envvar-value` | Invalid type for initial os.getenv argument; expected str |
| [`PLE1519`](https://docs.astral.sh/ruff/rules/singledispatch-method/) | `singledispatch-method` | @singledispatch decorator should not be used on methods |
| [`PLE1520`](https://docs.astral.sh/ruff/rules/singledispatchmethod-function/) | `singledispatchmethod-function` | @singledispatchmethod decorator should not be used on non-method functions |
| [`PLE1700`](https://docs.astral.sh/ruff/rules/yield-from-in-async-function/) | `yield-from-in-async-function` | yield from statement in async function; use async for instead |
| [`PLE2502`](https://docs.astral.sh/ruff/rules/bidirectional-unicode/) | `bidirectional-unicode` | Contains control characters that can permit obfuscated code |
| [`PLE2510`](https://docs.astral.sh/ruff/rules/invalid-character-backspace/) | `invalid-character-backspace` | Invalid unescaped character backspace, use "\b" instead |
| [`PLE2512`](https://docs.astral.sh/ruff/rules/invalid-character-sub/) | `invalid-character-sub` | Invalid unescaped character SUB, use "\x1a" instead |
| [`PLE2513`](https://docs.astral.sh/ruff/rules/invalid-character-esc/) | `invalid-character-esc` | Invalid unescaped character ESC, use "\x1b" instead |
| [`PLE2514`](https://docs.astral.sh/ruff/rules/invalid-character-nul/) | `invalid-character-nul` | Invalid unescaped character NUL, use "\0" instead |
| [`PLE2515`](https://docs.astral.sh/ruff/rules/invalid-character-zero-width-space/) | `invalid-character-zero-width-space` | Invalid unescaped character zero-width-space, use "\u200B" instead |
| [`PLE4703`](https://docs.astral.sh/ruff/rules/modified-iterating-set/) | `modified-iterating-set` | Iterated set {name} is modified within the for loop |
| [`PLR0124`](https://docs.astral.sh/ruff/rules/comparison-with-itself/) | `comparison-with-itself` | Name compared with itself, consider replacing {actual} |
| [`PLR0133`](https://docs.astral.sh/ruff/rules/comparison-of-constant/) | `comparison-of-constant` | Two constants compared in a comparison, consider replacing {left_constant} {op} {right_constant} |
| [`PLR0202`](https://docs.astral.sh/ruff/rules/no-classmethod-decorator/) | `no-classmethod-decorator` | Class method defined without decorator |
| [`PLR0203`](https://docs.astral.sh/ruff/rules/no-staticmethod-decorator/) | `no-staticmethod-decorator` | Static method defined without decorator |
| [`PLR0206`](https://docs.astral.sh/ruff/rules/property-with-parameters/) | `property-with-parameters` | Cannot have defined parameters for properties |
| [`PLR0402`](https://docs.astral.sh/ruff/rules/manual-from-import/) | `manual-from-import` | Use from {module} import {name} in lieu of alias |
| [`PLR0904`](https://docs.astral.sh/ruff/rules/too-many-public-methods/) | `too-many-public-methods` | Too many public methods ({methods} > {max_methods}) |
| [`PLR0911`](https://docs.astral.sh/ruff/rules/too-many-return-statements/) | `too-many-return-statements` | Too many return statements ({returns} > {max_returns}) |
| [`PLR0912`](https://docs.astral.sh/ruff/rules/too-many-branches/) | `too-many-branches` | Too many branches ({branches} > {max_branches}) |
| [`PLR0913`](https://docs.astral.sh/ruff/rules/too-many-arguments/) | `too-many-arguments` | Too many arguments in function definition ({c_args} > {max_args}) |
| [`PLR0914`](https://docs.astral.sh/ruff/rules/too-many-locals/) | `too-many-locals` | Too many local variables ({current_amount} > {max_amount}) |
| [`PLR0915`](https://docs.astral.sh/ruff/rules/too-many-statements/) | `too-many-statements` | Too many statements ({statements} > {max_statements}) |
| [`PLR0916`](https://docs.astral.sh/ruff/rules/too-many-boolean-expressions/) | `too-many-boolean-expressions` | Too many Boolean expressions ({expressions} > {max_expressions}) |
| [`PLR0917`](https://docs.astral.sh/ruff/rules/too-many-positional-arguments/) | `too-many-positional-arguments` | Too many positional arguments ({c_pos} > {max_pos}) |
| [`PLR1702`](https://docs.astral.sh/ruff/rules/too-many-nested-blocks/) | `too-many-nested-blocks` | Too many nested blocks ({nested_blocks} > {max_nested_blocks}) |
| [`PLR1704`](https://docs.astral.sh/ruff/rules/redefined-argument-from-local/) | `redefined-argument-from-local` | Redefining argument with the local name {name} |
| [`PLR1708`](https://docs.astral.sh/ruff/rules/stop-iteration-return/) | `stop-iteration-return` | Explicit raise StopIteration in generator |
| [`PLR1711`](https://docs.astral.sh/ruff/rules/useless-return/) | `useless-return` | Useless return statement at end of function |
| [`PLR1712`](https://docs.astral.sh/ruff/rules/swap-with-temporary-variable/) | `swap-with-temporary-variable` | Unnecessary temporary variable |
| [`PLR1714`](https://docs.astral.sh/ruff/rules/repeated-equality-comparison/) | `repeated-equality-comparison` | Consider merging multiple comparisons: {expression}. Use a set if the elements are hashable. |
| [`PLR1716`](https://docs.astral.sh/ruff/rules/boolean-chained-comparison/) | `boolean-chained-comparison` | Contains chained boolean comparison that can be simplified |
| [`PLR1722`](https://docs.astral.sh/ruff/rules/sys-exit-alias/) | `sys-exit-alias` | Use sys.exit() instead of {name} |
| [`PLR1730`](https://docs.astral.sh/ruff/rules/if-stmt-min-max/) | `if-stmt-min-max` | Replace if statement with {replacement} |
| [`PLR1733`](https://docs.astral.sh/ruff/rules/unnecessary-dict-index-lookup/) | `unnecessary-dict-index-lookup` | Unnecessary lookup of dictionary value by key |
| [`PLR1736`](https://docs.astral.sh/ruff/rules/unnecessary-list-index-lookup/) | `unnecessary-list-index-lookup` | List index lookup in enumerate() loop |
| [`PLR2004`](https://docs.astral.sh/ruff/rules/magic-value-comparison/) | `magic-value-comparison` | Magic value used in comparison, consider replacing {value} with a constant variable |
| [`PLR2044`](https://docs.astral.sh/ruff/rules/empty-comment/) | `empty-comment` | Line with empty comment |
| [`PLR5501`](https://docs.astral.sh/ruff/rules/collapsible-else-if/) | `collapsible-else-if` | Use elif instead of else then if, to reduce indentation |
| [`PLR6104`](https://docs.astral.sh/ruff/rules/non-augmented-assignment/) | `non-augmented-assignment` | Use {operator} to perform an augmented assignment directly |
| [`PLR6201`](https://docs.astral.sh/ruff/rules/literal-membership/) | `literal-membership` | Use a set literal when testing for membership |
| [`PLR6301`](https://docs.astral.sh/ruff/rules/no-self-use/) | `no-self-use` | Method {method_name} could be a function, class method, or static method |
| [`PLW0108`](https://docs.astral.sh/ruff/rules/unnecessary-lambda/) | `unnecessary-lambda` | Lambda may be unnecessary; consider inlining inner function |
| [`PLW0120`](https://docs.astral.sh/ruff/rules/useless-else-on-loop/) | `useless-else-on-loop` | else clause on loop without a break statement; remove the else and dedent its contents |
| [`PLW0127`](https://docs.astral.sh/ruff/rules/self-assigning-variable/) | `self-assigning-variable` | Self-assignment of variable {name} |
| [`PLW0128`](https://docs.astral.sh/ruff/rules/redeclared-assigned-name/) | `redeclared-assigned-name` | Redeclared variable {name} in assignment |
| [`PLW0129`](https://docs.astral.sh/ruff/rules/assert-on-string-literal/) | `assert-on-string-literal` | Asserting on an empty string literal will never pass |
| [`PLW0131`](https://docs.astral.sh/ruff/rules/named-expr-without-context/) | `named-expr-without-context` | Named expression used without context |
| [`PLW0133`](https://docs.astral.sh/ruff/rules/useless-exception-statement/) | `useless-exception-statement` | Missing raise statement on exception |
| [`PLW0177`](https://docs.astral.sh/ruff/rules/nan-comparison/) | `nan-comparison` | Comparing against a NaN value; use math.isnan instead |
| [`PLW0211`](https://docs.astral.sh/ruff/rules/bad-staticmethod-argument/) | `bad-staticmethod-argument` | First argument of a static method should not be named {argument_name} |
| [`PLW0244`](https://docs.astral.sh/ruff/rules/redefined-slots-in-subclass/) | `redefined-slots-in-subclass` | Slot {slot_name} redefined from base class {base} |
| [`PLW0245`](https://docs.astral.sh/ruff/rules/super-without-brackets/) | `super-without-brackets` | super call is missing parentheses |
| [`PLW0406`](https://docs.astral.sh/ruff/rules/import-self/) | `import-self` | Module {name} imports itself |
| [`PLW0602`](https://docs.astral.sh/ruff/rules/global-variable-not-assigned/) | `global-variable-not-assigned` | Using global for {name} but no assignment is done |
| [`PLW0603`](https://docs.astral.sh/ruff/rules/global-statement/) | `global-statement` | Using the global statement to update {name} is discouraged |
| [`PLW0604`](https://docs.astral.sh/ruff/rules/global-at-module-level/) | `global-at-module-level` | global at module level is redundant |
| [`PLW0642`](https://docs.astral.sh/ruff/rules/self-or-cls-assignment/) | `self-or-cls-assignment` | Reassigned {} variable in {method_type} method |
| [`PLW0711`](https://docs.astral.sh/ruff/rules/binary-op-exception/) | `binary-op-exception` | Exception to catch is the result of a binary and operation |
| [`PLW0717`](https://docs.astral.sh/ruff/rules/too-many-statements-in-try-clause/) | `too-many-statements-in-try-clause` | Try clause contains too many statements ({statements} > {max_statements}) |
| [`PLW1501`](https://docs.astral.sh/ruff/rules/bad-open-mode/) | `bad-open-mode` | {mode} is not a valid mode for open |
| [`PLW1507`](https://docs.astral.sh/ruff/rules/shallow-copy-environ/) | `shallow-copy-environ` | Shallow copy of os.environ via copy.copy(os.environ) |
| [`PLW1508`](https://docs.astral.sh/ruff/rules/invalid-envvar-default/) | `invalid-envvar-default` | Invalid type for environment variable default; expected str or None |
| [`PLW1509`](https://docs.astral.sh/ruff/rules/subprocess-popen-preexec-fn/) | `subprocess-popen-preexec-fn` | preexec_fn argument is unsafe when using threads |
| [`PLW1510`](https://docs.astral.sh/ruff/rules/subprocess-run-without-check/) | `subprocess-run-without-check` | subprocess.run without explicit check argument |
| [`PLW1514`](https://docs.astral.sh/ruff/rules/unspecified-encoding/) | `unspecified-encoding` | {function_name} in text mode without explicit encoding argument |
| [`PLW1641`](https://docs.astral.sh/ruff/rules/eq-without-hash/) | `eq-without-hash` | Object does not implement __hash__ method |
| [`PLW2101`](https://docs.astral.sh/ruff/rules/useless-with-lock/) | `useless-with-lock` | Threading lock directly created in with statement has no effect |
| [`PLW2901`](https://docs.astral.sh/ruff/rules/redefined-loop-name/) | `redefined-loop-name` | Outer {outer_kind} variable {name} overwritten by inner {inner_kind} target |
| [`PLW3201`](https://docs.astral.sh/ruff/rules/bad-dunder-method-name/) | `bad-dunder-method-name` | Dunder method {name} has no special meaning in Python 3 |
| [`PLW3301`](https://docs.astral.sh/ruff/rules/nested-min-max/) | `nested-min-max` | Nested {func} calls can be flattened |
| [`UP001`](https://docs.astral.sh/ruff/rules/useless-metaclass-type/) | `useless-metaclass-type` | __metaclass__ = type is implied |
| [`UP003`](https://docs.astral.sh/ruff/rules/type-of-primitive/) | `type-of-primitive` | Use {} instead of type(...) |
| [`UP004`](https://docs.astral.sh/ruff/rules/useless-object-inheritance/) | `useless-object-inheritance` | Class {name} inherits from object |
| [`UP005`](https://docs.astral.sh/ruff/rules/deprecated-unittest-alias/) | `deprecated-unittest-alias` | {alias} is deprecated, use {target} |
| [`UP006`](https://docs.astral.sh/ruff/rules/non-pep585-annotation/) | `non-pep585-annotation` | Use {to} instead of {from} for type annotation |
| [`UP007`](https://docs.astral.sh/ruff/rules/non-pep604-annotation-union/) | `non-pep604-annotation-union` | Use X \| Y for type annotations |
| [`UP008`](https://docs.astral.sh/ruff/rules/super-call-with-parameters/) | `super-call-with-parameters` | Use super() instead of super(__class__, self) |
| [`UP009`](https://docs.astral.sh/ruff/rules/utf8-encoding-declaration/) | `utf8-encoding-declaration` | UTF-8 encoding declaration is unnecessary |
| [`UP010`](https://docs.astral.sh/ruff/rules/unnecessary-future-import/) | `unnecessary-future-import` | Unnecessary __future__ import {import} for target Python version |
| [`UP011`](https://docs.astral.sh/ruff/rules/lru-cache-without-parameters/) | `lru-cache-without-parameters` | Unnecessary parentheses to functools.lru_cache |
| [`UP012`](https://docs.astral.sh/ruff/rules/unnecessary-encode-utf8/) | `unnecessary-encode-utf8` | Unnecessary call to encode as UTF-8 |
| [`UP013`](https://docs.astral.sh/ruff/rules/convert-typed-dict-functional-to-class/) | `convert-typed-dict-functional-to-class` | Convert {name} from TypedDict functional to class syntax |
| [`UP014`](https://docs.astral.sh/ruff/rules/convert-named-tuple-functional-to-class/) | `convert-named-tuple-functional-to-class` | Convert {name} from NamedTuple functional to class syntax |
| [`UP015`](https://docs.astral.sh/ruff/rules/redundant-open-modes/) | `redundant-open-modes` | Unnecessary mode argument |
| [`UP017`](https://docs.astral.sh/ruff/rules/datetime-timezone-utc/) | `datetime-timezone-utc` | Use datetime.UTC alias |
| [`UP018`](https://docs.astral.sh/ruff/rules/native-literals/) | `native-literals` | Unnecessary {literal_type} call (rewrite as a literal) |
| [`UP019`](https://docs.astral.sh/ruff/rules/typing-text-str-alias/) | `typing-text-str-alias` | {}.Text is deprecated, use str |
| [`UP020`](https://docs.astral.sh/ruff/rules/open-alias/) | `open-alias` | Use builtin open |
| [`UP021`](https://docs.astral.sh/ruff/rules/replace-universal-newlines/) | `replace-universal-newlines` | universal_newlines is deprecated, use text |
| [`UP022`](https://docs.astral.sh/ruff/rules/replace-stdout-stderr/) | `replace-stdout-stderr` | Prefer capture_output over sending stdout and stderr to PIPE |
| [`UP023`](https://docs.astral.sh/ruff/rules/deprecated-c-element-tree/) | `deprecated-c-element-tree` | cElementTree is deprecated, use ElementTree |
| [`UP024`](https://docs.astral.sh/ruff/rules/os-error-alias/) | `os-error-alias` | Replace aliased errors with OSError |
| [`UP025`](https://docs.astral.sh/ruff/rules/unicode-kind-prefix/) | `unicode-kind-prefix` | Remove unicode literals from strings |
| [`UP026`](https://docs.astral.sh/ruff/rules/deprecated-mock-import/) | `deprecated-mock-import` | mock is deprecated, use unittest.mock |
| [`UP028`](https://docs.astral.sh/ruff/rules/yield-in-for-loop/) | `yield-in-for-loop` | Replace yield over for loop with yield from |
| [`UP029`](https://docs.astral.sh/ruff/rules/unnecessary-builtin-import/) | `unnecessary-builtin-import` | Unnecessary builtin import: {import} |
| [`UP030`](https://docs.astral.sh/ruff/rules/format-literals/) | `format-literals` | Use implicit references for positional format fields |
| [`UP031`](https://docs.astral.sh/ruff/rules/printf-string-formatting/) | `printf-string-formatting` | Use format specifiers instead of percent format |
| [`UP032`](https://docs.astral.sh/ruff/rules/f-string/) | `f-string` | Use f-string instead of format call |
| [`UP033`](https://docs.astral.sh/ruff/rules/lru-cache-with-maxsize-none/) | `lru-cache-with-maxsize-none` | Use @functools.cache instead of @functools.lru_cache(maxsize=None) |
| [`UP034`](https://docs.astral.sh/ruff/rules/extraneous-parentheses/) | `extraneous-parentheses` | Avoid extraneous parentheses |
| [`UP035`](https://docs.astral.sh/ruff/rules/deprecated-import/) | `deprecated-import` | Import from {target} instead: {names} |
| [`UP036`](https://docs.astral.sh/ruff/rules/outdated-version-block/) | `outdated-version-block` | Version block is outdated for minimum Python version |
| [`UP037`](https://docs.astral.sh/ruff/rules/quoted-annotation/) | `quoted-annotation` | Remove quotes from type annotation |
| [`UP039`](https://docs.astral.sh/ruff/rules/unnecessary-class-parentheses/) | `unnecessary-class-parentheses` | Unnecessary parentheses after class definition |
| [`UP040`](https://docs.astral.sh/ruff/rules/non-pep695-type-alias/) | `non-pep695-type-alias` | Type alias {name} uses {type_alias_method} instead of the type keyword |
| [`UP041`](https://docs.astral.sh/ruff/rules/timeout-error-alias/) | `timeout-error-alias` | Replace aliased errors with TimeoutError |
| [`UP042`](https://docs.astral.sh/ruff/rules/replace-str-enum/) | `replace-str-enum` | Class {name} inherits from both str and enum.Enum |
| [`UP043`](https://docs.astral.sh/ruff/rules/unnecessary-default-type-args/) | `unnecessary-default-type-args` | Unnecessary default type arguments |
| [`UP044`](https://docs.astral.sh/ruff/rules/non-pep646-unpack/) | `non-pep646-unpack` | Use * for unpacking |
| [`UP045`](https://docs.astral.sh/ruff/rules/non-pep604-annotation-optional/) | `non-pep604-annotation-optional` | Use X \| None for type annotations |
| [`UP046`](https://docs.astral.sh/ruff/rules/non-pep695-generic-class/) | `non-pep695-generic-class` | Generic class {name} uses Generic subclass instead of type parameters |
| [`UP047`](https://docs.astral.sh/ruff/rules/non-pep695-generic-function/) | `non-pep695-generic-function` | Generic function {name} should use type parameters |
| [`UP048`](https://docs.astral.sh/ruff/rules/while-one/) | `while-one` | Use while True: instead of while 1: |
| [`UP049`](https://docs.astral.sh/ruff/rules/private-type-parameter/) | `private-type-parameter` | Generic {} uses private type parameters |
| [`UP050`](https://docs.astral.sh/ruff/rules/useless-class-metaclass-type/) | `useless-class-metaclass-type` | Class {name} uses metaclass=type, which is redundant |
| [`UP051`](https://docs.astral.sh/ruff/rules/deprecated-abc-decorator/) | `deprecated-abc-decorator` | Use @{to} and @abstractmethod instead of {from} |
| [`FURB101`](https://docs.astral.sh/ruff/rules/read-whole-file/) | `read-whole-file` | Path.open() followed by read() can be replaced by {filename}.{suggestion} |
| [`FURB103`](https://docs.astral.sh/ruff/rules/write-whole-file/) | `write-whole-file` | Path.open() followed by write() can be replaced by {filename}.{suggestion} |
| [`FURB105`](https://docs.astral.sh/ruff/rules/print-empty-string/) | `print-empty-string` | Unnecessary empty string passed to print |
| [`FURB110`](https://docs.astral.sh/ruff/rules/if-exp-instead-of-or-operator/) | `if-exp-instead-of-or-operator` | Replace ternary if expression with or operator |
| [`FURB113`](https://docs.astral.sh/ruff/rules/repeated-append/) | `repeated-append` | Use {suggestion} instead of repeatedly calling {name}.append() |
| [`FURB116`](https://docs.astral.sh/ruff/rules/f-string-number-format/) | `f-string-number-format` | Replace {function_name} call with {display} |
| [`FURB118`](https://docs.astral.sh/ruff/rules/reimplemented-operator/) | `reimplemented-operator` | Use operator.{operator} instead of defining a {target} |
| [`FURB122`](https://docs.astral.sh/ruff/rules/for-loop-writes/) | `for-loop-writes` | Use of {}.write in a for loop |
| [`FURB129`](https://docs.astral.sh/ruff/rules/readlines-in-for/) | `readlines-in-for` | Instead of calling readlines(), iterate over file object directly |
| [`FURB131`](https://docs.astral.sh/ruff/rules/delete-full-slice/) | `delete-full-slice` | Prefer clear over deleting a full slice |
| [`FURB132`](https://docs.astral.sh/ruff/rules/check-and-remove-from-set/) | `check-and-remove-from-set` | Use {suggestion} instead of check and remove |
| [`FURB136`](https://docs.astral.sh/ruff/rules/if-expr-min-max/) | `if-expr-min-max` | Replace if expression with {min_max} call |
| [`FURB140`](https://docs.astral.sh/ruff/rules/reimplemented-starmap/) | `reimplemented-starmap` | Use itertools.starmap instead of the generator |
| [`FURB142`](https://docs.astral.sh/ruff/rules/for-loop-set-mutations/) | `for-loop-set-mutations` | Use of set.{}() in a for loop |
| [`FURB145`](https://docs.astral.sh/ruff/rules/slice-copy/) | `slice-copy` | Prefer copy method over slicing |
| [`FURB148`](https://docs.astral.sh/ruff/rules/unnecessary-enumerate/) | `unnecessary-enumerate` | enumerate value is unused, use for x in range(len(y)) instead |
| [`FURB152`](https://docs.astral.sh/ruff/rules/math-constant/) | `math-constant` | Replace {literal} with math.{constant} |
| [`FURB154`](https://docs.astral.sh/ruff/rules/repeated-global/) | `repeated-global` | Use of repeated consecutive {} |
| [`FURB156`](https://docs.astral.sh/ruff/rules/hardcoded-string-charset/) | `hardcoded-string-charset` | Use of hardcoded string charset |
| [`FURB157`](https://docs.astral.sh/ruff/rules/verbose-decimal-constructor/) | `verbose-decimal-constructor` | Verbose expression in Decimal constructor |
| [`FURB161`](https://docs.astral.sh/ruff/rules/bit-count/) | `bit-count` | Use of bin({existing}).count('1') |
| [`FURB162`](https://docs.astral.sh/ruff/rules/fromisoformat-replace-z/) | `fromisoformat-replace-z` | Unnecessary timezone replacement with zero offset |
| [`FURB163`](https://docs.astral.sh/ruff/rules/redundant-log-base/) | `redundant-log-base` | Prefer math.{log_function}({arg}) over math.log with a redundant base |
| [`FURB164`](https://docs.astral.sh/ruff/rules/unnecessary-from-float/) | `unnecessary-from-float` | Verbose method {method_name} in {constructor} construction |
| [`FURB166`](https://docs.astral.sh/ruff/rules/int-on-sliced-str/) | `int-on-sliced-str` | Use of int with explicit base={base} after removing prefix |
| [`FURB167`](https://docs.astral.sh/ruff/rules/regex-flag-alias/) | `regex-flag-alias` | Use of regular expression alias re.{} |
| [`FURB168`](https://docs.astral.sh/ruff/rules/isinstance-type-none/) | `isinstance-type-none` | Prefer is operator over isinstance to check if an object is None |
| [`FURB169`](https://docs.astral.sh/ruff/rules/type-none-comparison/) | `type-none-comparison` | When checking against None, use {} instead of comparison with type(None) |
| [`FURB171`](https://docs.astral.sh/ruff/rules/single-item-membership-test/) | `single-item-membership-test` | Membership test against single-item container |
| [`FURB177`](https://docs.astral.sh/ruff/rules/implicit-cwd/) | `implicit-cwd` | Prefer Path.cwd() over Path().resolve() for current-directory lookups |
| [`FURB180`](https://docs.astral.sh/ruff/rules/meta-class-abc-meta/) | `meta-class-abc-meta` | Use of metaclass=abc.ABCMeta to define abstract base class |
| [`FURB181`](https://docs.astral.sh/ruff/rules/hashlib-digest-hex/) | `hashlib-digest-hex` | Use of hashlib's .digest().hex() |
| [`FURB187`](https://docs.astral.sh/ruff/rules/list-reverse-copy/) | `list-reverse-copy` | Use of assignment of reversed on list {name} |
| [`FURB188`](https://docs.astral.sh/ruff/rules/slice-to-remove-prefix-or-suffix/) | `slice-to-remove-prefix-or-suffix` | Prefer str.removeprefix() over conditionally replacing with slice. |
| [`FURB189`](https://docs.astral.sh/ruff/rules/subclass-builtin/) | `subclass-builtin` | Subclassing {subclass} can be error prone, use collections.{replacement} instead |
| [`FURB192`](https://docs.astral.sh/ruff/rules/sorted-min-max/) | `sorted-min-max` | Prefer min over sorted() to compute the minimum value in a sequence |
| [`RUF001`](https://docs.astral.sh/ruff/rules/ambiguous-unicode-character-string/) | `ambiguous-unicode-character-string` | String contains ambiguous {}. Did you mean {}? |
| [`RUF002`](https://docs.astral.sh/ruff/rules/ambiguous-unicode-character-docstring/) | `ambiguous-unicode-character-docstring` | Docstring contains ambiguous {}. Did you mean {}? |
| [`RUF003`](https://docs.astral.sh/ruff/rules/ambiguous-unicode-character-comment/) | `ambiguous-unicode-character-comment` | Comment contains ambiguous {}. Did you mean {}? |
| [`RUF005`](https://docs.astral.sh/ruff/rules/collection-literal-concatenation/) | `collection-literal-concatenation` | Consider {expression} instead of concatenation |
| [`RUF006`](https://docs.astral.sh/ruff/rules/asyncio-dangling-task/) | `asyncio-dangling-task` | Store a reference to the return value of {expr}.{method} |
| [`RUF007`](https://docs.astral.sh/ruff/rules/zip-instead-of-pairwise/) | `zip-instead-of-pairwise` | Prefer itertools.pairwise() over zip() when iterating over successive pairs |
| [`RUF008`](https://docs.astral.sh/ruff/rules/mutable-dataclass-default/) | `mutable-dataclass-default` | Do not use mutable default values for dataclass attributes |
| [`RUF009`](https://docs.astral.sh/ruff/rules/function-call-in-dataclass-default-argument/) | `function-call-in-dataclass-default-argument` | Do not perform function call {name} in dataclass defaults |
| [`RUF010`](https://docs.astral.sh/ruff/rules/explicit-f-string-type-conversion/) | `explicit-f-string-type-conversion` | Use explicit conversion flag |
| [`RUF012`](https://docs.astral.sh/ruff/rules/mutable-class-default/) | `mutable-class-default` | Mutable default value for class attribute |
| [`RUF013`](https://docs.astral.sh/ruff/rules/implicit-optional/) | `implicit-optional` | PEP 484 prohibits implicit Optional |
| [`RUF015`](https://docs.astral.sh/ruff/rules/unnecessary-iterable-allocation-for-first-element/) | `unnecessary-iterable-allocation-for-first-element` | Prefer next({iterable}) over single element slice |
| [`RUF016`](https://docs.astral.sh/ruff/rules/invalid-index-type/) | `invalid-index-type` | Slice in indexed access to type {value_type} uses type {index_type} instead of an integer |
| [`RUF017`](https://docs.astral.sh/ruff/rules/quadratic-list-summation/) | `quadratic-list-summation` | Avoid quadratic list summation |
| [`RUF018`](https://docs.astral.sh/ruff/rules/assignment-in-assert/) | `assignment-in-assert` | Avoid assignment expressions in assert statements |
| [`RUF019`](https://docs.astral.sh/ruff/rules/unnecessary-key-check/) | `unnecessary-key-check` | Unnecessary key check before dictionary access |
| [`RUF020`](https://docs.astral.sh/ruff/rules/never-union/) | `never-union` | {never_like} \| T is equivalent to T |
| [`RUF021`](https://docs.astral.sh/ruff/rules/parenthesize-chained-operators/) | `parenthesize-chained-operators` | Parenthesize a and b expressions when chaining and and or together, to make the precedence clear |
| [`RUF022`](https://docs.astral.sh/ruff/rules/unsorted-dunder-all/) | `unsorted-dunder-all` | __all__ is not sorted |
| [`RUF023`](https://docs.astral.sh/ruff/rules/unsorted-dunder-slots/) | `unsorted-dunder-slots` | {}.__slots__ is not sorted |
| [`RUF024`](https://docs.astral.sh/ruff/rules/mutable-fromkeys-value/) | `mutable-fromkeys-value` | Do not pass mutable objects as values to dict.fromkeys |
| [`RUF026`](https://docs.astral.sh/ruff/rules/default-factory-kwarg/) | `default-factory-kwarg` | default_factory is a positional-only argument to defaultdict |
| [`RUF027`](https://docs.astral.sh/ruff/rules/missing-f-string-syntax/) | `missing-f-string-syntax` | Possible f-string without an f prefix |
| [`RUF028`](https://docs.astral.sh/ruff/rules/invalid-formatter-suppression-comment/) | `invalid-formatter-suppression-comment` | This suppression comment is invalid because {} |
| [`RUF029`](https://docs.astral.sh/ruff/rules/unused-async/) | `unused-async` | Function {name} is declared async, but doesn't await or use async features. |
| [`RUF030`](https://docs.astral.sh/ruff/rules/assert-with-print-message/) | `assert-with-print-message` | print() call in assert statement is likely unintentional |
| [`RUF031`](https://docs.astral.sh/ruff/rules/incorrectly-parenthesized-tuple-in-subscript/) | `incorrectly-parenthesized-tuple-in-subscript` | Use parentheses for tuples in subscripts |
| [`RUF032`](https://docs.astral.sh/ruff/rules/decimal-from-float-literal/) | `decimal-from-float-literal` | Decimal() called with float literal argument |
| [`RUF033`](https://docs.astral.sh/ruff/rules/post-init-default/) | `post-init-default` | __post_init__ method with argument defaults |
| [`RUF034`](https://docs.astral.sh/ruff/rules/useless-if-else/) | `useless-if-else` | Useless if-else condition |
| [`RUF036`](https://docs.astral.sh/ruff/rules/none-not-at-end-of-union/) | `none-not-at-end-of-union` | None not at the end of the type union. |
| [`RUF037`](https://docs.astral.sh/ruff/rules/unnecessary-empty-iterable-within-deque-call/) | `unnecessary-empty-iterable-within-deque-call` | Unnecessary empty iterable within a deque call |
| [`RUF038`](https://docs.astral.sh/ruff/rules/redundant-bool-literal/) | `redundant-bool-literal` | Literal[True, False, ...] can be replaced with Literal[...] \| bool |
| [`RUF039`](https://docs.astral.sh/ruff/rules/unraw-re-pattern/) | `unraw-re-pattern` | First argument to {call} is not raw string |
| [`RUF040`](https://docs.astral.sh/ruff/rules/invalid-assert-message-literal-argument/) | `invalid-assert-message-literal-argument` | Non-string literal used as assert message |
| [`RUF041`](https://docs.astral.sh/ruff/rules/unnecessary-nested-literal/) | `unnecessary-nested-literal` | Unnecessary nested Literal |
| [`RUF043`](https://docs.astral.sh/ruff/rules/pytest-raises-ambiguous-pattern/) | `pytest-raises-ambiguous-pattern` | Pattern passed to match= contains metacharacters but is neither escaped nor raw |
| [`RUF045`](https://docs.astral.sh/ruff/rules/implicit-class-var-in-dataclass/) | `implicit-class-var-in-dataclass` | Assignment without annotation found in dataclass body |
| [`RUF046`](https://docs.astral.sh/ruff/rules/unnecessary-cast-to-int/) | `unnecessary-cast-to-int` | Value being cast to int is already an integer |
| [`RUF047`](https://docs.astral.sh/ruff/rules/needless-else/) | `needless-else` | Empty else clause |
| [`RUF048`](https://docs.astral.sh/ruff/rules/map-int-version-parsing/) | `map-int-version-parsing` | __version__ may contain non-integral-like elements |
| [`RUF049`](https://docs.astral.sh/ruff/rules/dataclass-enum/) | `dataclass-enum` | An enum class should not be decorated with @dataclass |
| [`RUF050`](https://docs.astral.sh/ruff/rules/unnecessary-if/) | `unnecessary-if` | Empty if statement |
| [`RUF051`](https://docs.astral.sh/ruff/rules/if-key-in-dict-del/) | `if-key-in-dict-del` | Use pop instead of key in dict followed by del dict[key] |
| [`RUF052`](https://docs.astral.sh/ruff/rules/used-dummy-variable/) | `used-dummy-variable` | Local dummy variable {} is accessed |
| [`RUF053`](https://docs.astral.sh/ruff/rules/class-with-mixed-type-vars/) | `class-with-mixed-type-vars` | Class with type parameter list inherits from Generic |
| [`RUF054`](https://docs.astral.sh/ruff/rules/indented-form-feed/) | `indented-form-feed` | Indented form feed |
| [`RUF055`](https://docs.astral.sh/ruff/rules/unnecessary-regular-expression/) | `unnecessary-regular-expression` | Plain string pattern passed to re function |
| [`RUF056`](https://docs.astral.sh/ruff/rules/falsy-dict-get-fallback/) | `falsy-dict-get-fallback` | Avoid providing a falsy fallback to dict.get() in boolean test positions. The default fallback None is already falsy. |
| [`RUF057`](https://docs.astral.sh/ruff/rules/unnecessary-round/) | `unnecessary-round` | Value being rounded is already an integer |
| [`RUF058`](https://docs.astral.sh/ruff/rules/starmap-zip/) | `starmap-zip` | itertools.starmap called on zip iterable |
| [`RUF059`](https://docs.astral.sh/ruff/rules/unused-unpacked-variable/) | `unused-unpacked-variable` | Unpacked variable {name} is never used |
| [`RUF060`](https://docs.astral.sh/ruff/rules/in-empty-collection/) | `in-empty-collection` | Unnecessary membership test on empty collection |
| [`RUF061`](https://docs.astral.sh/ruff/rules/legacy-form-pytest-raises/) | `legacy-form-pytest-raises` | Use context-manager form of pytest.{}() |
| [`RUF063`](https://docs.astral.sh/ruff/rules/access-annotations-from-class-dict/) | `access-annotations-from-class-dict` | Use {suggestion} instead of __dict__ access |
| [`RUF064`](https://docs.astral.sh/ruff/rules/non-octal-permissions/) | `non-octal-permissions` | Non-octal mode |
| [`RUF065`](https://docs.astral.sh/ruff/rules/logging-eager-conversion/) | `logging-eager-conversion` | Unnecessary oct() conversion when formatting with %s. Use %#o instead of %s |
| [`RUF066`](https://docs.astral.sh/ruff/rules/property-without-return/) | `property-without-return` | {name} is a property without a return statement |
| [`RUF067`](https://docs.astral.sh/ruff/rules/non-empty-init-module/) | `non-empty-init-module` | __init__ module should not contain any code |
| [`RUF068`](https://docs.astral.sh/ruff/rules/duplicate-entry-in-dunder-all/) | `duplicate-entry-in-dunder-all` | __all__ contains duplicate entries |
| [`RUF069`](https://docs.astral.sh/ruff/rules/float-equality-comparison/) | `float-equality-comparison` | Unreliable floating point equality comparison {left} {operator} {right} |
| [`RUF070`](https://docs.astral.sh/ruff/rules/unnecessary-assign-before-yield/) | `unnecessary-assign-before-yield` | Unnecessary assignment to {name} before yield from statement |
| [`RUF071`](https://docs.astral.sh/ruff/rules/os-path-commonprefix/) | `os-path-commonprefix` | os.path.commonprefix() compares strings character-by-character |
| [`RUF072`](https://docs.astral.sh/ruff/rules/useless-finally/) | `useless-finally` | Empty finally clause |
| [`RUF073`](https://docs.astral.sh/ruff/rules/f-string-percent-format/) | `f-string-percent-format` | % operator used on an f-string |
| [`RUF074`](https://docs.astral.sh/ruff/rules/incorrect-decorator-order/) | `incorrect-decorator-order` | @{outer_decorator} should be placed after @{inner_decorator} |
| [`RUF075`](https://docs.astral.sh/ruff/rules/fallible-context-manager/) | `fallible-context-manager` | Context manager does not catch exceptions |
| [`RUF100`](https://docs.astral.sh/ruff/rules/unused-noqa/) | `unused-noqa` | Unused {} |
| [`RUF101`](https://docs.astral.sh/ruff/rules/redirected-noqa/) | `redirected-noqa` | {original} is a redirect to {target} |
| [`RUF102`](https://docs.astral.sh/ruff/rules/invalid-rule-code/) | `invalid-rule-code` | Invalid rule code in {}: {} |
| [`RUF103`](https://docs.astral.sh/ruff/rules/invalid-suppression-comment/) | `invalid-suppression-comment` | Invalid suppression comment: {msg} |
| [`RUF104`](https://docs.astral.sh/ruff/rules/unmatched-suppression-comment/) | `unmatched-suppression-comment` | Suppression comment without matching #ruff:enable comment |
| [`RUF105`](https://docs.astral.sh/ruff/rules/noqa-comments/) | `noqa-comments` | noqa comment used instead of ruff: ignore |
| [`RUF106`](https://docs.astral.sh/ruff/rules/rule-codes-in-suppression-comments/) | `rule-codes-in-suppression-comments` | Rule code used instead of name in suppression comment |
| [`RUF200`](https://docs.astral.sh/ruff/rules/invalid-pyproject-toml/) | `invalid-pyproject-toml` | Failed to parse pyproject.toml: {message} |
| [`RUF201`](https://docs.astral.sh/ruff/rules/rule-codes-in-selectors/) | `rule-codes-in-selectors` | Rule code used instead of name in lint.{selector} |
| [`TRY002`](https://docs.astral.sh/ruff/rules/raise-vanilla-class/) | `raise-vanilla-class` | Create your own exception |
| [`TRY003`](https://docs.astral.sh/ruff/rules/raise-vanilla-args/) | `raise-vanilla-args` | Avoid specifying long messages outside the exception class |
| [`TRY004`](https://docs.astral.sh/ruff/rules/type-check-without-type-error/) | `type-check-without-type-error` | Prefer TypeError exception for invalid type |
| [`TRY201`](https://docs.astral.sh/ruff/rules/verbose-raise/) | `verbose-raise` | Use raise without specifying exception name |
| [`TRY203`](https://docs.astral.sh/ruff/rules/useless-try-except/) | `useless-try-except` | Remove exception handler; error is immediately re-raised |
| [`TRY300`](https://docs.astral.sh/ruff/rules/try-consider-else/) | `try-consider-else` | Consider moving this statement to an else block |
| [`TRY301`](https://docs.astral.sh/ruff/rules/raise-within-try/) | `raise-within-try` | Abstract raise to an inner function |
| [`TRY400`](https://docs.astral.sh/ruff/rules/error-instead-of-exception/) | `error-instead-of-exception` | Use logging.exception instead of logging.error |
| [`TRY401`](https://docs.astral.sh/ruff/rules/verbose-log-message/) | `verbose-log-message` | Redundant exception object included in logging.exception call |
