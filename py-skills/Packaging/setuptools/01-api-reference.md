<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# setuptools：构建后端

版本基线：**setuptools 84**  
官方参考：[https://setuptools.pypa.io/en/latest/userguide/index.html](https://setuptools.pypa.io/en/latest/userguide/index.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **18** 个公开对象或用户命令。私有下划线接口不收录。

## `setuptools`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`setuptools.Command`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.Command) | 类 | `(dist: 'Distribution', **kw) -> 'None'` | Setuptools internal actions are organized using a *command design pattern*. This means that each action (or group of closely related actions) executed during the build should be... |
| [`setuptools.Extension`](https://setuptools.pypa.io/en/latest/userguide/ext_modules.html#setuptools.Extension) | 类 | `(name: 'str', sources: 'Iterable[StrPath]', *args, py_limited_api: 'bool' = False, **kw) -> 'None'` | Describes a single extension module. |

## `setuptools.command`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`setuptools.command.build.SubCommand`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand) | 类 | `(*args, **kwargs)` | In order to support editable installations (see :pep:`660`) all build subcommands **SHOULD** implement this protocol. They also **MUST** inherit from ``setuptools.Command``. |
| [`setuptools.command.build.SubCommand.build_lib`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.build_lib) | 属性 | `` | 参见官方 API 文档。 |
| [`setuptools.command.build.SubCommand.editable_mode`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.editable_mode) | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| [`setuptools.command.build.SubCommand.finalize_options`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.finalize_options) | 方法 | `(self) -> 'None'` | (Required by the original :class:`setuptools.Command` interface) |
| [`setuptools.command.build.SubCommand.get_output_mapping`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.get_output_mapping) | 方法 | `(self) -> 'dict[str, str]'` | Return a mapping between destination files as they would be produced by the build (dict keys) into the respective existing (source) files (dict values). Existing (source) files ... |
| [`setuptools.command.build.SubCommand.get_outputs`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.get_outputs) | 方法 | `(self) -> 'list[str]'` | Return a list of files intended for distribution as they would have been produced by the build. These files should be strings in the form of ``"{build_lib}/destination/file/path... |
| [`setuptools.command.build.SubCommand.get_source_files`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.get_source_files) | 方法 | `(self) -> 'list[str]'` | Return a list of all files that are used by the command to create the expected outputs. For example, if your build command transpiles Java files into Python, you should list her... |
| [`setuptools.command.build.SubCommand.initialize_options`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.initialize_options) | 方法 | `(self) -> 'None'` | (Required by the original :class:`setuptools.Command` interface) |
| [`setuptools.command.build.SubCommand.run`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.command.build.SubCommand.run) | 方法 | `(self) -> 'None'` | (Required by the original :class:`setuptools.Command` interface) |

## `setuptools.Command`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`setuptools.Command.dry_run`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.Command.dry_run) | 属性 | `` | Returns True when the argument is true, False otherwise. The builtins True and False are the only two instances of the class bool. The class bool is a subclass of the class int,... |
| [`setuptools.Command.finalize_options`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.Command.finalize_options) | 方法 | `(self) -> 'None'` | Set final values for all options/attributes used by the command. Most of the time, each option/attribute/cache should only be set if it does not have any value yet (e.g. ``if se... |
| [`setuptools.Command.initialize_options`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.Command.initialize_options) | 方法 | `(self) -> 'None'` | Set or (reset) all options/attributes/caches used by the command to their default values. Note that these values may be overwritten during the build. |
| [`setuptools.Command.run`](https://setuptools.pypa.io/en/latest/userguide/extension.html#setuptools.Command.run) | 方法 | `(self) -> 'None'` | Execute the actions intended by the command. (Side effects **SHOULD** only take place when :meth:`run` is executed, for example, creating new files or writing to the terminal ou... |

## `setuptools.discovery`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`setuptools.discovery.FlatLayoutModuleFinder.DEFAULT_EXCLUDE`](https://setuptools.pypa.io/en/latest/userguide/package_discovery.html#setuptools.discovery.FlatLayoutModuleFinder.DEFAULT_EXCLUDE) | 属性 | `` | Built-in immutable sequence. |
| [`setuptools.discovery.FlatLayoutPackageFinder.DEFAULT_EXCLUDE`](https://setuptools.pypa.io/en/latest/userguide/package_discovery.html#setuptools.discovery.FlatLayoutPackageFinder.DEFAULT_EXCLUDE) | 属性 | `` | Built-in immutable sequence. |

## `setuptools.extension`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`setuptools.extension.Extension`](https://setuptools.pypa.io/en/latest/userguide/ext_modules.html#setuptools.Extension) | 类 | `(name: 'str', sources: 'Iterable[StrPath]', *args, py_limited_api: 'bool' = False, **kw) -> 'None'` | Describes a single extension module. |
