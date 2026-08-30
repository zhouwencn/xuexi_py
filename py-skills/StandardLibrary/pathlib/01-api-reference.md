<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# pathlib：对象化路径

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/pathlib.html](https://docs.python.org/3.12/library/pathlib.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **69** 个公开对象或用户命令。私有下划线接口不收录。

## `pathlib`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`pathlib`](https://docs.python.org/3.12/library/pathlib.html#module-pathlib) | 模块 | `` | Object-oriented filesystem paths. |
| [`pathlib.Path`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path) | 类 | `(*args, **kwargs)` | PurePath subclass that can make system calls. |
| [`pathlib.PosixPath`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PosixPath) | 类 | `(*args, **kwargs)` | Path subclass for non-Windows systems. |
| [`pathlib.PurePath`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath) | 类 | `(*args, **kwargs)` | Base class for manipulating paths without I/O. |
| [`pathlib.PurePosixPath`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePosixPath) | 类 | `(*args, **kwargs)` | PurePath subclass for non-Windows systems. |
| [`pathlib.PureWindowsPath`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PureWindowsPath) | 类 | `(*args, **kwargs)` | PurePath subclass for Windows systems. |
| [`pathlib.WindowsPath`](https://docs.python.org/3.12/library/pathlib.html#pathlib.WindowsPath) | 类 | `(*args, **kwargs)` | Path subclass for Windows systems. |

## `pathlib.Path`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`pathlib.Path.absolute`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.absolute) | 方法 | `(self)` | Return an absolute version of this path by prepending the current working directory. No normalization or symlink resolution is performed. |
| [`pathlib.Path.chmod`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.chmod) | 方法 | `(self, mode, *, follow_symlinks=True)` | Change the permissions of the path, like os.chmod(). |
| [`pathlib.Path.cwd`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.cwd) | 方法 | `` | Return a new path pointing to the current working directory. |
| [`pathlib.Path.exists`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.exists) | 方法 | `(self, *, follow_symlinks=True)` | Whether this path exists. |
| [`pathlib.Path.expanduser`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.expanduser) | 方法 | `(self)` | Return a new path with expanded ~ and ~user constructs (as returned by os.path.expanduser) |
| [`pathlib.Path.glob`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.glob) | 方法 | `(self, pattern, *, case_sensitive=None)` | Iterate over this subtree and yield all existing files (of any kind, including directories) matching the given relative pattern. |
| [`pathlib.Path.group`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.group) | 方法 | `(self)` | Return the group name of the file gid. |
| [`pathlib.Path.hardlink_to`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.hardlink_to) | 方法 | `(self, target)` | Make this path a hard link pointing to the same file as *target*. |
| [`pathlib.Path.home`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.home) | 方法 | `` | Return a new path pointing to the user's home directory (as returned by os.path.expanduser('~')). |
| [`pathlib.Path.is_block_device`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_block_device) | 方法 | `(self)` | Whether this path is a block device. |
| [`pathlib.Path.is_char_device`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_char_device) | 方法 | `(self)` | Whether this path is a character device. |
| [`pathlib.Path.is_dir`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_dir) | 方法 | `(self)` | Whether this path is a directory. |
| [`pathlib.Path.is_fifo`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_fifo) | 方法 | `(self)` | Whether this path is a FIFO. |
| [`pathlib.Path.is_file`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_file) | 方法 | `(self)` | Whether this path is a regular file (also True for symlinks pointing to regular files). |
| [`pathlib.Path.is_junction`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_junction) | 方法 | `(self)` | Whether this path is a junction. |
| [`pathlib.Path.is_mount`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_mount) | 方法 | `(self)` | Check if this path is a mount point |
| [`pathlib.Path.is_socket`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_socket) | 方法 | `(self)` | Whether this path is a socket. |
| [`pathlib.Path.is_symlink`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.is_symlink) | 方法 | `(self)` | Whether this path is a symbolic link. |
| [`pathlib.Path.iterdir`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.iterdir) | 方法 | `(self)` | Yield path objects of the directory contents. |
| [`pathlib.Path.lchmod`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.lchmod) | 方法 | `(self, mode)` | Like chmod(), except if the path points to a symlink, the symlink's permissions are changed, rather than its target's. |
| [`pathlib.Path.lstat`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.lstat) | 方法 | `(self)` | Like stat(), except if the path points to a symlink, the symlink's status information is returned, rather than its target's. |
| [`pathlib.Path.mkdir`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.mkdir) | 方法 | `(self, mode=511, parents=False, exist_ok=False)` | Create a new directory at this given path. |
| [`pathlib.Path.open`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.open) | 方法 | `(self, mode='r', buffering=-1, encoding=None, errors=None, newline=None)` | Open the file pointed to by this path and return a file object, as the built-in open() function does. |
| [`pathlib.Path.owner`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.owner) | 方法 | `(self)` | Return the login name of the file owner. |
| [`pathlib.Path.read_bytes`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.read_bytes) | 方法 | `(self)` | Open the file in bytes mode, read it, and close the file. |
| [`pathlib.Path.read_text`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.read_text) | 方法 | `(self, encoding=None, errors=None)` | Open the file in text mode, read it, and close the file. |
| [`pathlib.Path.readlink`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.readlink) | 方法 | `(self)` | Return the path to which the symbolic link points. |
| [`pathlib.Path.rename`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.rename) | 方法 | `(self, target)` | Rename this path to the target path. |
| [`pathlib.Path.replace`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.replace) | 方法 | `(self, target)` | Rename this path to the target path, overwriting if that path exists. |
| [`pathlib.Path.resolve`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.resolve) | 方法 | `(self, strict=False)` | Make the path absolute, resolving all symlinks on the way and also normalizing it. |
| [`pathlib.Path.rglob`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.rglob) | 方法 | `(self, pattern, *, case_sensitive=None)` | Recursively yield all existing files (of any kind, including directories) matching the given relative pattern, anywhere in this subtree. |
| [`pathlib.Path.rmdir`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.rmdir) | 方法 | `(self)` | Remove this directory.  The directory must be empty. |
| [`pathlib.Path.samefile`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.samefile) | 方法 | `(self, other_path)` | Return whether other_path is the same or not as this file (as returned by os.path.samefile()). |
| [`pathlib.Path.stat`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.stat) | 方法 | `(self, *, follow_symlinks=True)` | Return the result of the stat() system call on this path, like os.stat() does. |
| [`pathlib.Path.symlink_to`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.symlink_to) | 方法 | `(self, target, target_is_directory=False)` | Make this path a symlink pointing to the target path. Note the order of arguments (link, target) is the reverse of os.symlink. |
| [`pathlib.Path.touch`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.touch) | 方法 | `(self, mode=438, exist_ok=True)` | Create this file with the given access mode, if it doesn't exist. |
| [`pathlib.Path.unlink`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.unlink) | 方法 | `(self, missing_ok=False)` | Remove this file or link. If the path is a directory, use rmdir() instead. |
| [`pathlib.Path.walk`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.walk) | 方法 | `(self, top_down=True, on_error=None, follow_symlinks=False)` | Walk the directory tree from this directory, similar to os.walk(). |
| [`pathlib.Path.write_bytes`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.write_bytes) | 方法 | `(self, data)` | Open the file in bytes mode, write to it, and close the file. |
| [`pathlib.Path.write_text`](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.write_text) | 方法 | `(self, data, encoding=None, errors=None, newline=None)` | Open the file in text mode, write to it, and close the file. |

## `pathlib.PurePath`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`pathlib.PurePath.anchor`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.anchor) | 属性 | `` | The concatenation of the drive and root, or ''. |
| [`pathlib.PurePath.as_posix`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.as_posix) | 方法 | `(self)` | Return the string representation of the path with forward (/) slashes. |
| [`pathlib.PurePath.as_uri`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.as_uri) | 方法 | `(self)` | Return the path as a 'file' URI. |
| [`pathlib.PurePath.drive`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.drive) | 属性 | `` | The drive prefix (letter or UNC path), if any. |
| [`pathlib.PurePath.is_absolute`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.is_absolute) | 方法 | `(self)` | True if the path is absolute (has both a root and, if applicable, a drive). |
| [`pathlib.PurePath.is_relative_to`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.is_relative_to) | 方法 | `(self, other, /, *_deprecated)` | Return True if the path is relative to another path or False. |
| [`pathlib.PurePath.is_reserved`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.is_reserved) | 方法 | `(self)` | Return True if the path contains one of the special names reserved by the system, if any. |
| [`pathlib.PurePath.joinpath`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.joinpath) | 方法 | `(self, *pathsegments)` | Combine this path with one or several arguments, and return a new path representing either a subpath (if all arguments are relative paths) or a totally different path (if one of... |
| [`pathlib.PurePath.match`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.match) | 方法 | `(self, path_pattern, *, case_sensitive=None)` | Return True if this path matches the given pattern. |
| [`pathlib.PurePath.name`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.name) | 属性 | `` | The final path component, if any. |
| [`pathlib.PurePath.parent`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.parent) | 属性 | `` | The logical parent of the path. |
| [`pathlib.PurePath.parents`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.parents) | 属性 | `` | A sequence of this path's logical parents. |
| [`pathlib.PurePath.parts`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.parts) | 属性 | `` | An object providing sequence-like access to the components in the filesystem path. |
| [`pathlib.PurePath.relative_to`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.relative_to) | 方法 | `(self, other, /, *_deprecated, walk_up=False)` | Return the relative path to another path identified by the passed arguments.  If the operation is not possible (because this is not related to the other path), raise ValueError. |
| [`pathlib.PurePath.root`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.root) | 属性 | `` | The root of the path, if any. |
| [`pathlib.PurePath.stem`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.stem) | 属性 | `` | The final path component, minus its last suffix. |
| [`pathlib.PurePath.suffix`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.suffix) | 属性 | `` | The final component's last suffix, if any. |
| [`pathlib.PurePath.suffixes`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.suffixes) | 属性 | `` | A list of the final component's suffixes, if any. |
| [`pathlib.PurePath.with_name`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.with_name) | 方法 | `(self, name)` | Return a new path with the file name changed. |
| [`pathlib.PurePath.with_segments`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.with_segments) | 方法 | `(self, *pathsegments)` | Construct a new path object from any number of path-like objects. Subclasses may override this method to customize how new path objects are created from methods like `iterdir()`. |
| [`pathlib.PurePath.with_stem`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.with_stem) | 方法 | `(self, stem)` | Return a new path with the stem changed. |
| [`pathlib.PurePath.with_suffix`](https://docs.python.org/3.12/library/pathlib.html#pathlib.PurePath.with_suffix) | 方法 | `(self, suffix)` | Return a new path with the file suffix changed.  If the path has no suffix, add given suffix.  If the given suffix is an empty string, remove the suffix from the path. |
