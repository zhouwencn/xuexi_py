<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# os：操作系统接口

版本基线：**Python 3.12**  
官方参考：[https://docs.python.org/3.12/library/os.html](https://docs.python.org/3.12/library/os.html)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **468** 个公开对象或用户命令。私有下划线接口不收录。

## `os`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`os`](https://docs.python.org/3.12/library/os.html#module-os) | 模块 | `` | OS routines for NT or Posix depending on what system we're on. |
| [`os.abort`](https://docs.python.org/3.12/library/os.html#os.abort) | 函数 | `()` | Abort the interpreter immediately. |
| [`os.access`](https://docs.python.org/3.12/library/os.html#os.access) | 函数 | `(path, mode, *, dir_fd=None, effective_ids=False, follow_symlinks=True)` | Use the real uid/gid to test for access to a path. |
| [`os.add_dll_directory`](https://docs.python.org/3.12/library/os.html#os.add_dll_directory) | 函数 | `` | 参见官方 API 文档。 |
| [`os.altsep`](https://docs.python.org/3.12/library/os.html#os.altsep) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.chdir`](https://docs.python.org/3.12/library/os.html#os.chdir) | 函数 | `(path)` | Change the current working directory to the specified path. |
| [`os.chflags`](https://docs.python.org/3.12/library/os.html#os.chflags) | 函数 | `(path, flags, follow_symlinks=True)` | Set file flags. |
| [`os.chmod`](https://docs.python.org/3.12/library/os.html#os.chmod) | 函数 | `(path, mode, *, dir_fd=None, follow_symlinks=True)` | Change the access permissions of a file. |
| [`os.chown`](https://docs.python.org/3.12/library/os.html#os.chown) | 函数 | `(path, uid, gid, *, dir_fd=None, follow_symlinks=True)` | Change the owner and group id of path to the numeric uid and gid.\ |
| [`os.chroot`](https://docs.python.org/3.12/library/os.html#os.chroot) | 函数 | `(path)` | Change root directory to path. |
| [`os.CLD_CONTINUED`](https://docs.python.org/3.12/library/os.html#os.CLD_CONTINUED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.CLD_DUMPED`](https://docs.python.org/3.12/library/os.html#os.CLD_DUMPED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.CLD_EXITED`](https://docs.python.org/3.12/library/os.html#os.CLD_EXITED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.CLD_KILLED`](https://docs.python.org/3.12/library/os.html#os.CLD_KILLED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.CLD_STOPPED`](https://docs.python.org/3.12/library/os.html#os.CLD_STOPPED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.CLD_TRAPPED`](https://docs.python.org/3.12/library/os.html#os.CLD_TRAPPED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.CLONE_FILES`](https://docs.python.org/3.12/library/os.html#os.CLONE_FILES) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_FS`](https://docs.python.org/3.12/library/os.html#os.CLONE_FS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWCGROUP`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWCGROUP) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWIPC`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWIPC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWNET`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWNET) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWNS`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWNS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWPID`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWPID) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWTIME`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWTIME) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWUSER`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWUSER) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_NEWUTS`](https://docs.python.org/3.12/library/os.html#os.CLONE_NEWUTS) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_SIGHAND`](https://docs.python.org/3.12/library/os.html#os.CLONE_SIGHAND) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_SYSVSEM`](https://docs.python.org/3.12/library/os.html#os.CLONE_SYSVSEM) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_THREAD`](https://docs.python.org/3.12/library/os.html#os.CLONE_THREAD) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.CLONE_VM`](https://docs.python.org/3.12/library/os.html#os.CLONE_VM) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.close`](https://docs.python.org/3.12/library/os.html#os.close) | 函数 | `(fd)` | Close a file descriptor. |
| [`os.closerange`](https://docs.python.org/3.12/library/os.html#os.closerange) | 函数 | `(fd_low, fd_high, /)` | Closes all file descriptors in [fd_low, fd_high), ignoring errors. |
| [`os.confstr`](https://docs.python.org/3.12/library/os.html#os.confstr) | 函数 | `(name, /)` | Return a string-valued system configuration variable. |
| [`os.confstr_names`](https://docs.python.org/3.12/library/os.html#os.confstr_names) | 数据/常量 | `` | dict() -> new empty dictionary dict(mapping) -> new dictionary initialized from a mapping object's (key, value) pairs dict(iterable) -> new dictionary initialized as if via: d =... |
| [`os.copy_file_range`](https://docs.python.org/3.12/library/os.html#os.copy_file_range) | 函数 | `` | 参见官方 API 文档。 |
| [`os.cpu_count`](https://docs.python.org/3.12/library/os.html#os.cpu_count) | 函数 | `()` | Return the number of CPUs in the system; return None if indeterminable. |
| [`os.ctermid`](https://docs.python.org/3.12/library/os.html#os.ctermid) | 函数 | `()` | Return the name of the controlling terminal for this process. |
| [`os.curdir`](https://docs.python.org/3.12/library/os.html#os.curdir) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.defpath`](https://docs.python.org/3.12/library/os.html#os.defpath) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.device_encoding`](https://docs.python.org/3.12/library/os.html#os.device_encoding) | 函数 | `(fd)` | Return a string describing the encoding of a terminal's file descriptor. |
| [`os.devnull`](https://docs.python.org/3.12/library/os.html#os.devnull) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.DirEntry`](https://docs.python.org/3.12/library/os.html#os.DirEntry) | 类 | `()` | 参见官方 API 文档。 |
| [`os.dup`](https://docs.python.org/3.12/library/os.html#os.dup) | 函数 | `(fd, /)` | Return a duplicate of a file descriptor. |
| [`os.dup2`](https://docs.python.org/3.12/library/os.html#os.dup2) | 函数 | `(fd, fd2, inheritable=True)` | Duplicate file descriptor. |
| [`os.EFD_CLOEXEC`](https://docs.python.org/3.12/library/os.html#os.EFD_CLOEXEC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.EFD_NONBLOCK`](https://docs.python.org/3.12/library/os.html#os.EFD_NONBLOCK) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.EFD_SEMAPHORE`](https://docs.python.org/3.12/library/os.html#os.EFD_SEMAPHORE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.environ`](https://docs.python.org/3.12/library/os.html#os.environ) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.environb`](https://docs.python.org/3.12/library/os.html#os.environb) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.error`](https://docs.python.org/3.12/library/os.html#os.error) | 异常 | `` | Base class for I/O related errors. |
| [`os.eventfd`](https://docs.python.org/3.12/library/os.html#os.eventfd) | 函数 | `` | 参见官方 API 文档。 |
| [`os.eventfd_read`](https://docs.python.org/3.12/library/os.html#os.eventfd_read) | 函数 | `` | 参见官方 API 文档。 |
| [`os.eventfd_write`](https://docs.python.org/3.12/library/os.html#os.eventfd_write) | 函数 | `` | 参见官方 API 文档。 |
| [`os.EX_CANTCREAT`](https://docs.python.org/3.12/library/os.html#os.EX_CANTCREAT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_CONFIG`](https://docs.python.org/3.12/library/os.html#os.EX_CONFIG) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_DATAERR`](https://docs.python.org/3.12/library/os.html#os.EX_DATAERR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_IOERR`](https://docs.python.org/3.12/library/os.html#os.EX_IOERR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_NOHOST`](https://docs.python.org/3.12/library/os.html#os.EX_NOHOST) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_NOINPUT`](https://docs.python.org/3.12/library/os.html#os.EX_NOINPUT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_NOPERM`](https://docs.python.org/3.12/library/os.html#os.EX_NOPERM) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_NOTFOUND`](https://docs.python.org/3.12/library/os.html#os.EX_NOTFOUND) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.EX_NOUSER`](https://docs.python.org/3.12/library/os.html#os.EX_NOUSER) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_OK`](https://docs.python.org/3.12/library/os.html#os.EX_OK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_OSERR`](https://docs.python.org/3.12/library/os.html#os.EX_OSERR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_OSFILE`](https://docs.python.org/3.12/library/os.html#os.EX_OSFILE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_PROTOCOL`](https://docs.python.org/3.12/library/os.html#os.EX_PROTOCOL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_SOFTWARE`](https://docs.python.org/3.12/library/os.html#os.EX_SOFTWARE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_TEMPFAIL`](https://docs.python.org/3.12/library/os.html#os.EX_TEMPFAIL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_UNAVAILABLE`](https://docs.python.org/3.12/library/os.html#os.EX_UNAVAILABLE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.EX_USAGE`](https://docs.python.org/3.12/library/os.html#os.EX_USAGE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.execl`](https://docs.python.org/3.12/library/os.html#os.execl) | 函数 | `(file, *args)` | execl(file, *args) |
| [`os.execle`](https://docs.python.org/3.12/library/os.html#os.execle) | 函数 | `(file, *args)` | execle(file, *args, env) |
| [`os.execlp`](https://docs.python.org/3.12/library/os.html#os.execlp) | 函数 | `(file, *args)` | execlp(file, *args) |
| [`os.execlpe`](https://docs.python.org/3.12/library/os.html#os.execlpe) | 函数 | `(file, *args)` | execlpe(file, *args, env) |
| [`os.execv`](https://docs.python.org/3.12/library/os.html#os.execv) | 函数 | `(path, argv, /)` | Execute an executable path with arguments, replacing current process. |
| [`os.execve`](https://docs.python.org/3.12/library/os.html#os.execve) | 函数 | `(path, argv, env)` | Execute an executable path with arguments, replacing current process. |
| [`os.execvp`](https://docs.python.org/3.12/library/os.html#os.execvp) | 函数 | `(file, args)` | execvp(file, args) |
| [`os.execvpe`](https://docs.python.org/3.12/library/os.html#os.execvpe) | 函数 | `(file, args, env)` | execvpe(file, args, env) |
| [`os.extsep`](https://docs.python.org/3.12/library/os.html#os.extsep) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.F_LOCK`](https://docs.python.org/3.12/library/os.html#os.F_LOCK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.F_OK`](https://docs.python.org/3.12/library/os.html#os.F_OK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.F_TEST`](https://docs.python.org/3.12/library/os.html#os.F_TEST) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.F_TLOCK`](https://docs.python.org/3.12/library/os.html#os.F_TLOCK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.F_ULOCK`](https://docs.python.org/3.12/library/os.html#os.F_ULOCK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.fchdir`](https://docs.python.org/3.12/library/os.html#os.fchdir) | 函数 | `(fd)` | Change to the directory of the given file descriptor. |
| [`os.fchmod`](https://docs.python.org/3.12/library/os.html#os.fchmod) | 函数 | `(fd, mode)` | Change the access permissions of the file given by file descriptor fd. |
| [`os.fchown`](https://docs.python.org/3.12/library/os.html#os.fchown) | 函数 | `(fd, uid, gid)` | Change the owner and group id of the file specified by file descriptor. |
| [`os.fdatasync`](https://docs.python.org/3.12/library/os.html#os.fdatasync) | 函数 | `` | 参见官方 API 文档。 |
| [`os.fdopen`](https://docs.python.org/3.12/library/os.html#os.fdopen) | 函数 | `(fd, mode='r', buffering=-1, encoding=None, *args, **kwargs)` | 参见官方 API 文档。 |
| [`os.fork`](https://docs.python.org/3.12/library/os.html#os.fork) | 函数 | `()` | Fork a child process. |
| [`os.forkpty`](https://docs.python.org/3.12/library/os.html#os.forkpty) | 函数 | `()` | Fork a new process with a new pseudo-terminal as controlling tty. |
| [`os.fpathconf`](https://docs.python.org/3.12/library/os.html#os.fpathconf) | 函数 | `(fd, name, /)` | Return the configuration limit name for the file descriptor fd. |
| [`os.fsdecode`](https://docs.python.org/3.12/library/os.html#os.fsdecode) | 函数 | `(filename)` | Decode filename (an os.PathLike, bytes, or str) from the filesystem encoding with 'surrogateescape' error handler, return str unchanged. On Windows, use 'strict' error handler i... |
| [`os.fsencode`](https://docs.python.org/3.12/library/os.html#os.fsencode) | 函数 | `(filename)` | Encode filename (an os.PathLike, bytes, or str) to the filesystem encoding with 'surrogateescape' error handler, return bytes unchanged. On Windows, use 'strict' error handler i... |
| [`os.fspath`](https://docs.python.org/3.12/library/os.html#os.fspath) | 函数 | `(path)` | Return the file system path representation of the object. |
| [`os.fstat`](https://docs.python.org/3.12/library/os.html#os.fstat) | 函数 | `(fd)` | Perform a stat system call on the given file descriptor. |
| [`os.fstatvfs`](https://docs.python.org/3.12/library/os.html#os.fstatvfs) | 函数 | `(fd, /)` | Perform an fstatvfs system call on the given fd. |
| [`os.fsync`](https://docs.python.org/3.12/library/os.html#os.fsync) | 函数 | `(fd)` | Force write of fd to disk. |
| [`os.ftruncate`](https://docs.python.org/3.12/library/os.html#os.ftruncate) | 函数 | `(fd, length, /)` | Truncate a file, specified by file descriptor, to a specific length. |
| [`os.fwalk`](https://docs.python.org/3.12/library/os.html#os.fwalk) | 函数 | `(top='.', topdown=True, onerror=None, *, follow_symlinks=False, dir_fd=None)` | Directory tree generator. |
| [`os.get_blocking`](https://docs.python.org/3.12/library/os.html#os.get_blocking) | 函数 | `(fd, /)` | Get the blocking mode of the file descriptor. |
| [`os.get_exec_path`](https://docs.python.org/3.12/library/os.html#os.get_exec_path) | 函数 | `(env=None)` | Returns the sequence of directories that will be searched for the named executable (similar to a shell) when launching a process. |
| [`os.get_handle_inheritable`](https://docs.python.org/3.12/library/os.html#os.get_handle_inheritable) | 函数 | `` | 参见官方 API 文档。 |
| [`os.get_inheritable`](https://docs.python.org/3.12/library/os.html#os.get_inheritable) | 函数 | `(fd, /)` | Get the close-on-exe flag of the specified file descriptor. |
| [`os.get_terminal_size`](https://docs.python.org/3.12/library/os.html#os.get_terminal_size) | 函数 | `` | Return the size of the terminal window as (columns, lines). |
| [`os.getcwd`](https://docs.python.org/3.12/library/os.html#os.getcwd) | 函数 | `()` | Return a unicode string representing the current working directory. |
| [`os.getcwdb`](https://docs.python.org/3.12/library/os.html#os.getcwdb) | 函数 | `()` | Return a bytes string representing the current working directory. |
| [`os.getegid`](https://docs.python.org/3.12/library/os.html#os.getegid) | 函数 | `()` | Return the current process's effective group id. |
| [`os.getenv`](https://docs.python.org/3.12/library/os.html#os.getenv) | 函数 | `(key, default=None)` | Get an environment variable, return None if it doesn't exist. The optional second argument can specify an alternate default. key, default and the result are str. |
| [`os.getenvb`](https://docs.python.org/3.12/library/os.html#os.getenvb) | 函数 | `(key, default=None)` | Get an environment variable, return None if it doesn't exist. The optional second argument can specify an alternate default. key, default and the result are bytes. |
| [`os.geteuid`](https://docs.python.org/3.12/library/os.html#os.geteuid) | 函数 | `()` | Return the current process's effective user id. |
| [`os.getgid`](https://docs.python.org/3.12/library/os.html#os.getgid) | 函数 | `()` | Return the current process's group id. |
| [`os.getgrouplist`](https://docs.python.org/3.12/library/os.html#os.getgrouplist) | 函数 | `(user, group, /)` | Returns a list of groups to which a user belongs. |
| [`os.getgroups`](https://docs.python.org/3.12/library/os.html#os.getgroups) | 函数 | `()` | Return list of supplemental group IDs for the process. |
| [`os.getloadavg`](https://docs.python.org/3.12/library/os.html#os.getloadavg) | 函数 | `()` | Return average recent system load information. |
| [`os.getlogin`](https://docs.python.org/3.12/library/os.html#os.getlogin) | 函数 | `()` | Return the actual login name. |
| [`os.getpgid`](https://docs.python.org/3.12/library/os.html#os.getpgid) | 函数 | `(pid)` | Call the system call getpgid(), and return the result. |
| [`os.getpgrp`](https://docs.python.org/3.12/library/os.html#os.getpgrp) | 函数 | `()` | Return the current process group id. |
| [`os.getpid`](https://docs.python.org/3.12/library/os.html#os.getpid) | 函数 | `()` | Return the current process id. |
| [`os.getppid`](https://docs.python.org/3.12/library/os.html#os.getppid) | 函数 | `()` | Return the parent's process id. |
| [`os.getpriority`](https://docs.python.org/3.12/library/os.html#os.getpriority) | 函数 | `(which, who)` | Return program scheduling priority. |
| [`os.getrandom`](https://docs.python.org/3.12/library/os.html#os.getrandom) | 函数 | `` | 参见官方 API 文档。 |
| [`os.getresgid`](https://docs.python.org/3.12/library/os.html#os.getresgid) | 函数 | `` | 参见官方 API 文档。 |
| [`os.getresuid`](https://docs.python.org/3.12/library/os.html#os.getresuid) | 函数 | `` | 参见官方 API 文档。 |
| [`os.getsid`](https://docs.python.org/3.12/library/os.html#os.getsid) | 函数 | `(pid, /)` | Call the system call getsid(pid) and return the result. |
| [`os.getuid`](https://docs.python.org/3.12/library/os.html#os.getuid) | 函数 | `()` | Return the current process's user id. |
| [`os.getxattr`](https://docs.python.org/3.12/library/os.html#os.getxattr) | 函数 | `` | 参见官方 API 文档。 |
| [`os.GRND_NONBLOCK`](https://docs.python.org/3.12/library/os.html#os.GRND_NONBLOCK) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.GRND_RANDOM`](https://docs.python.org/3.12/library/os.html#os.GRND_RANDOM) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.initgroups`](https://docs.python.org/3.12/library/os.html#os.initgroups) | 函数 | `(username, gid, /)` | Initialize the group access list. |
| [`os.isatty`](https://docs.python.org/3.12/library/os.html#os.isatty) | 函数 | `(fd, /)` | Return True if the fd is connected to a terminal. |
| [`os.kill`](https://docs.python.org/3.12/library/os.html#os.kill) | 函数 | `(pid, signal, /)` | Kill a process with a signal. |
| [`os.killpg`](https://docs.python.org/3.12/library/os.html#os.killpg) | 函数 | `(pgid, signal, /)` | Kill a process group with a signal. |
| [`os.lchflags`](https://docs.python.org/3.12/library/os.html#os.lchflags) | 函数 | `(path, flags)` | Set file flags. |
| [`os.lchmod`](https://docs.python.org/3.12/library/os.html#os.lchmod) | 函数 | `(path, mode)` | Change the access permissions of a file, without following symbolic links. |
| [`os.lchown`](https://docs.python.org/3.12/library/os.html#os.lchown) | 函数 | `(path, uid, gid)` | Change the owner and group id of path to the numeric uid and gid. |
| [`os.linesep`](https://docs.python.org/3.12/library/os.html#os.linesep) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.link`](https://docs.python.org/3.12/library/os.html#os.link) | 函数 | `(src, dst, *, src_dir_fd=None, dst_dir_fd=None, follow_symlinks=True)` | Create a hard link to a file. |
| [`os.listdir`](https://docs.python.org/3.12/library/os.html#os.listdir) | 函数 | `(path=None)` | Return a list containing the names of the files in the directory. |
| [`os.listdrives`](https://docs.python.org/3.12/library/os.html#os.listdrives) | 函数 | `` | 参见官方 API 文档。 |
| [`os.listmounts`](https://docs.python.org/3.12/library/os.html#os.listmounts) | 函数 | `` | 参见官方 API 文档。 |
| [`os.listvolumes`](https://docs.python.org/3.12/library/os.html#os.listvolumes) | 函数 | `` | 参见官方 API 文档。 |
| [`os.listxattr`](https://docs.python.org/3.12/library/os.html#os.listxattr) | 函数 | `` | 参见官方 API 文档。 |
| [`os.lockf`](https://docs.python.org/3.12/library/os.html#os.lockf) | 函数 | `(fd, command, length, /)` | Apply, test or remove a POSIX lock on an open file descriptor. |
| [`os.login_tty`](https://docs.python.org/3.12/library/os.html#os.login_tty) | 函数 | `(fd, /)` | Prepare the tty of which fd is a file descriptor for a new login session. |
| [`os.lseek`](https://docs.python.org/3.12/library/os.html#os.lseek) | 函数 | `(fd, position, whence, /)` | Set the position of a file descriptor.  Return the new position. |
| [`os.lstat`](https://docs.python.org/3.12/library/os.html#os.lstat) | 函数 | `(path, *, dir_fd=None)` | Perform a stat system call on the given path, without following symbolic links. |
| [`os.major`](https://docs.python.org/3.12/library/os.html#os.major) | 函数 | `(device, /)` | Extracts a device major number from a raw device number. |
| [`os.makedev`](https://docs.python.org/3.12/library/os.html#os.makedev) | 函数 | `(major, minor, /)` | Composes a raw device number from the major and minor device numbers. |
| [`os.makedirs`](https://docs.python.org/3.12/library/os.html#os.makedirs) | 函数 | `(name, mode=511, exist_ok=False)` | makedirs(name [, mode=0o777][, exist_ok=False]) |
| [`os.memfd_create`](https://docs.python.org/3.12/library/os.html#os.memfd_create) | 函数 | `` | 参见官方 API 文档。 |
| [`os.MFD_ALLOW_SEALING`](https://docs.python.org/3.12/library/os.html#os.MFD_ALLOW_SEALING) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_CLOEXEC`](https://docs.python.org/3.12/library/os.html#os.MFD_CLOEXEC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_16GB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_16GB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_16MB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_16MB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_1GB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_1GB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_1MB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_1MB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_256MB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_256MB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_2GB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_2GB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_2MB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_2MB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_32MB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_32MB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_512KB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_512KB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_512MB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_512MB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_64KB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_64KB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_8MB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_8MB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_MASK`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_MASK) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGE_SHIFT`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGE_SHIFT) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.MFD_HUGETLB`](https://docs.python.org/3.12/library/os.html#os.MFD_HUGETLB) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.minor`](https://docs.python.org/3.12/library/os.html#os.minor) | 函数 | `(device, /)` | Extracts a device minor number from a raw device number. |
| [`os.mkdir`](https://docs.python.org/3.12/library/os.html#os.mkdir) | 函数 | `(path, mode=511, *, dir_fd=None)` | Create a directory. |
| [`os.mkfifo`](https://docs.python.org/3.12/library/os.html#os.mkfifo) | 函数 | `(path, mode=438, *, dir_fd=None)` | Create a "fifo" (a POSIX named pipe). |
| [`os.mknod`](https://docs.python.org/3.12/library/os.html#os.mknod) | 函数 | `(path, mode=384, device=0, *, dir_fd=None)` | Create a node in the file system. |
| [`os.name`](https://docs.python.org/3.12/library/os.html#os.name) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.nice`](https://docs.python.org/3.12/library/os.html#os.nice) | 函数 | `(increment, /)` | Add increment to the priority of process and return the new priority. |
| [`os.O_APPEND`](https://docs.python.org/3.12/library/os.html#os.O_APPEND) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_ASYNC`](https://docs.python.org/3.12/library/os.html#os.O_ASYNC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_BINARY`](https://docs.python.org/3.12/library/os.html#os.O_BINARY) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_CLOEXEC`](https://docs.python.org/3.12/library/os.html#os.O_CLOEXEC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_CREAT`](https://docs.python.org/3.12/library/os.html#os.O_CREAT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_DIRECT`](https://docs.python.org/3.12/library/os.html#os.O_DIRECT) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_DIRECTORY`](https://docs.python.org/3.12/library/os.html#os.O_DIRECTORY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_DSYNC`](https://docs.python.org/3.12/library/os.html#os.O_DSYNC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_EVTONLY`](https://docs.python.org/3.12/library/os.html#os.O_EVTONLY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_EXCL`](https://docs.python.org/3.12/library/os.html#os.O_EXCL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_EXLOCK`](https://docs.python.org/3.12/library/os.html#os.O_EXLOCK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_FSYNC`](https://docs.python.org/3.12/library/os.html#os.O_FSYNC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_NDELAY`](https://docs.python.org/3.12/library/os.html#os.O_NDELAY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_NOATIME`](https://docs.python.org/3.12/library/os.html#os.O_NOATIME) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_NOCTTY`](https://docs.python.org/3.12/library/os.html#os.O_NOCTTY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_NOFOLLOW`](https://docs.python.org/3.12/library/os.html#os.O_NOFOLLOW) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_NOFOLLOW_ANY`](https://docs.python.org/3.12/library/os.html#os.O_NOFOLLOW_ANY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_NOINHERIT`](https://docs.python.org/3.12/library/os.html#os.O_NOINHERIT) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_NONBLOCK`](https://docs.python.org/3.12/library/os.html#os.O_NONBLOCK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_PATH`](https://docs.python.org/3.12/library/os.html#os.O_PATH) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_RANDOM`](https://docs.python.org/3.12/library/os.html#os.O_RANDOM) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_RDONLY`](https://docs.python.org/3.12/library/os.html#os.O_RDONLY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_RDWR`](https://docs.python.org/3.12/library/os.html#os.O_RDWR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_RSYNC`](https://docs.python.org/3.12/library/os.html#os.O_RSYNC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_SEQUENTIAL`](https://docs.python.org/3.12/library/os.html#os.O_SEQUENTIAL) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_SHLOCK`](https://docs.python.org/3.12/library/os.html#os.O_SHLOCK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_SHORT_LIVED`](https://docs.python.org/3.12/library/os.html#os.O_SHORT_LIVED) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_SYMLINK`](https://docs.python.org/3.12/library/os.html#os.O_SYMLINK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_SYNC`](https://docs.python.org/3.12/library/os.html#os.O_SYNC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_TEMPORARY`](https://docs.python.org/3.12/library/os.html#os.O_TEMPORARY) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_TEXT`](https://docs.python.org/3.12/library/os.html#os.O_TEXT) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_TMPFILE`](https://docs.python.org/3.12/library/os.html#os.O_TMPFILE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.O_TRUNC`](https://docs.python.org/3.12/library/os.html#os.O_TRUNC) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.O_WRONLY`](https://docs.python.org/3.12/library/os.html#os.O_WRONLY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.open`](https://docs.python.org/3.12/library/os.html#os.open) | 函数 | `(path, flags, mode=511, *, dir_fd=None)` | Open a file for low level IO.  Returns a file descriptor (integer). |
| [`os.openpty`](https://docs.python.org/3.12/library/os.html#os.openpty) | 函数 | `()` | Open a pseudo-terminal. |
| [`os.P_ALL`](https://docs.python.org/3.12/library/os.html#os.P_ALL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.P_DETACH`](https://docs.python.org/3.12/library/os.html#os.P_DETACH) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.P_NOWAIT`](https://docs.python.org/3.12/library/os.html#os.P_NOWAIT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.P_NOWAITO`](https://docs.python.org/3.12/library/os.html#os.P_NOWAITO) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.P_OVERLAY`](https://docs.python.org/3.12/library/os.html#os.P_OVERLAY) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.P_PGID`](https://docs.python.org/3.12/library/os.html#os.P_PGID) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.P_PID`](https://docs.python.org/3.12/library/os.html#os.P_PID) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.P_PIDFD`](https://docs.python.org/3.12/library/os.html#os.P_PIDFD) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.P_WAIT`](https://docs.python.org/3.12/library/os.html#os.P_WAIT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.pardir`](https://docs.python.org/3.12/library/os.html#os.pardir) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.pathconf`](https://docs.python.org/3.12/library/os.html#os.pathconf) | 函数 | `(path, name)` | Return the configuration limit name for the file or directory path. |
| [`os.pathconf_names`](https://docs.python.org/3.12/library/os.html#os.pathconf_names) | 数据/常量 | `` | dict() -> new empty dictionary dict(mapping) -> new dictionary initialized from a mapping object's (key, value) pairs dict(iterable) -> new dictionary initialized as if via: d =... |
| [`os.PathLike`](https://docs.python.org/3.12/library/os.html#os.PathLike) | 类 | `()` | Abstract base class for implementing the file system path protocol. |
| [`os.pathsep`](https://docs.python.org/3.12/library/os.html#os.pathsep) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.PIDFD_NONBLOCK`](https://docs.python.org/3.12/library/os.html#os.PIDFD_NONBLOCK) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.pidfd_open`](https://docs.python.org/3.12/library/os.html#os.pidfd_open) | 函数 | `` | 参见官方 API 文档。 |
| [`os.pipe`](https://docs.python.org/3.12/library/os.html#os.pipe) | 函数 | `()` | Create a pipe. |
| [`os.pipe2`](https://docs.python.org/3.12/library/os.html#os.pipe2) | 函数 | `` | 参见官方 API 文档。 |
| [`os.plock`](https://docs.python.org/3.12/library/os.html#os.plock) | 函数 | `` | 参见官方 API 文档。 |
| [`os.popen`](https://docs.python.org/3.12/library/os.html#os.popen) | 函数 | `(cmd, mode='r', buffering=-1)` | 参见官方 API 文档。 |
| [`os.POSIX_FADV_DONTNEED`](https://docs.python.org/3.12/library/os.html#os.POSIX_FADV_DONTNEED) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.POSIX_FADV_NOREUSE`](https://docs.python.org/3.12/library/os.html#os.POSIX_FADV_NOREUSE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.POSIX_FADV_NORMAL`](https://docs.python.org/3.12/library/os.html#os.POSIX_FADV_NORMAL) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.POSIX_FADV_RANDOM`](https://docs.python.org/3.12/library/os.html#os.POSIX_FADV_RANDOM) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.POSIX_FADV_SEQUENTIAL`](https://docs.python.org/3.12/library/os.html#os.POSIX_FADV_SEQUENTIAL) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.POSIX_FADV_WILLNEED`](https://docs.python.org/3.12/library/os.html#os.POSIX_FADV_WILLNEED) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.posix_fadvise`](https://docs.python.org/3.12/library/os.html#os.posix_fadvise) | 函数 | `` | 参见官方 API 文档。 |
| [`os.posix_fallocate`](https://docs.python.org/3.12/library/os.html#os.posix_fallocate) | 函数 | `` | 参见官方 API 文档。 |
| [`os.posix_spawn`](https://docs.python.org/3.12/library/os.html#os.posix_spawn) | 函数 | `` | Execute the program specified by path in a new process. |
| [`os.POSIX_SPAWN_CLOSE`](https://docs.python.org/3.12/library/os.html#os.POSIX_SPAWN_CLOSE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.POSIX_SPAWN_DUP2`](https://docs.python.org/3.12/library/os.html#os.POSIX_SPAWN_DUP2) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.POSIX_SPAWN_OPEN`](https://docs.python.org/3.12/library/os.html#os.POSIX_SPAWN_OPEN) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.posix_spawnp`](https://docs.python.org/3.12/library/os.html#os.posix_spawnp) | 函数 | `` | Execute the program specified by path in a new process. |
| [`os.pread`](https://docs.python.org/3.12/library/os.html#os.pread) | 函数 | `(fd, length, offset, /)` | Read a number of bytes from a file descriptor starting at a particular offset. |
| [`os.preadv`](https://docs.python.org/3.12/library/os.html#os.preadv) | 函数 | `(fd, buffers, offset, flags=0, /)` | Reads from a file descriptor into a number of mutable bytes-like objects. |
| [`os.PRIO_DARWIN_BG`](https://docs.python.org/3.12/library/os.html#os.PRIO_DARWIN_BG) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.PRIO_DARWIN_NONUI`](https://docs.python.org/3.12/library/os.html#os.PRIO_DARWIN_NONUI) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.PRIO_DARWIN_PROCESS`](https://docs.python.org/3.12/library/os.html#os.PRIO_DARWIN_PROCESS) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.PRIO_DARWIN_THREAD`](https://docs.python.org/3.12/library/os.html#os.PRIO_DARWIN_THREAD) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.PRIO_PGRP`](https://docs.python.org/3.12/library/os.html#os.PRIO_PGRP) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.PRIO_PROCESS`](https://docs.python.org/3.12/library/os.html#os.PRIO_PROCESS) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.PRIO_USER`](https://docs.python.org/3.12/library/os.html#os.PRIO_USER) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.putenv`](https://docs.python.org/3.12/library/os.html#os.putenv) | 函数 | `(name, value, /)` | Change or add an environment variable. |
| [`os.pwrite`](https://docs.python.org/3.12/library/os.html#os.pwrite) | 函数 | `(fd, buffer, offset, /)` | Write bytes to a file descriptor starting at a particular offset. |
| [`os.pwritev`](https://docs.python.org/3.12/library/os.html#os.pwritev) | 函数 | `(fd, buffers, offset, flags=0, /)` | Writes the contents of bytes-like objects to a file descriptor at a given offset. |
| [`os.R_OK`](https://docs.python.org/3.12/library/os.html#os.R_OK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.read`](https://docs.python.org/3.12/library/os.html#os.read) | 函数 | `(fd, length, /)` | Read from a file descriptor.  Returns a bytes object. |
| [`os.readlink`](https://docs.python.org/3.12/library/os.html#os.readlink) | 函数 | `(path, *, dir_fd=None)` | Return a string representing the path to which the symbolic link points. |
| [`os.readv`](https://docs.python.org/3.12/library/os.html#os.readv) | 函数 | `(fd, buffers, /)` | Read from a file descriptor fd into an iterable of buffers. |
| [`os.register_at_fork`](https://docs.python.org/3.12/library/os.html#os.register_at_fork) | 函数 | `` | Register callables to be called when forking a new process. |
| [`os.remove`](https://docs.python.org/3.12/library/os.html#os.remove) | 函数 | `(path, *, dir_fd=None)` | Remove a file (same as unlink()). |
| [`os.removedirs`](https://docs.python.org/3.12/library/os.html#os.removedirs) | 函数 | `(name)` | removedirs(name) |
| [`os.removexattr`](https://docs.python.org/3.12/library/os.html#os.removexattr) | 函数 | `` | 参见官方 API 文档。 |
| [`os.rename`](https://docs.python.org/3.12/library/os.html#os.rename) | 函数 | `(src, dst, *, src_dir_fd=None, dst_dir_fd=None)` | Rename a file or directory. |
| [`os.renames`](https://docs.python.org/3.12/library/os.html#os.renames) | 函数 | `(old, new)` | renames(old, new) |
| [`os.replace`](https://docs.python.org/3.12/library/os.html#os.replace) | 函数 | `(src, dst, *, src_dir_fd=None, dst_dir_fd=None)` | Rename a file or directory, overwriting the destination. |
| [`os.rmdir`](https://docs.python.org/3.12/library/os.html#os.rmdir) | 函数 | `(path, *, dir_fd=None)` | Remove a directory. |
| [`os.RTLD_DEEPBIND`](https://docs.python.org/3.12/library/os.html#os.RTLD_DEEPBIND) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.RTLD_GLOBAL`](https://docs.python.org/3.12/library/os.html#os.RTLD_GLOBAL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.RTLD_LAZY`](https://docs.python.org/3.12/library/os.html#os.RTLD_LAZY) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.RTLD_LOCAL`](https://docs.python.org/3.12/library/os.html#os.RTLD_LOCAL) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.RTLD_NODELETE`](https://docs.python.org/3.12/library/os.html#os.RTLD_NODELETE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.RTLD_NOLOAD`](https://docs.python.org/3.12/library/os.html#os.RTLD_NOLOAD) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.RTLD_NOW`](https://docs.python.org/3.12/library/os.html#os.RTLD_NOW) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.RWF_APPEND`](https://docs.python.org/3.12/library/os.html#os.RWF_APPEND) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.RWF_DSYNC`](https://docs.python.org/3.12/library/os.html#os.RWF_DSYNC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.RWF_HIPRI`](https://docs.python.org/3.12/library/os.html#os.RWF_HIPRI) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.RWF_NOWAIT`](https://docs.python.org/3.12/library/os.html#os.RWF_NOWAIT) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.RWF_SYNC`](https://docs.python.org/3.12/library/os.html#os.RWF_SYNC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.scandir`](https://docs.python.org/3.12/library/os.html#os.scandir) | 函数 | `(path=None)` | Return an iterator of DirEntry objects for given path. |
| [`os.SCHED_BATCH`](https://docs.python.org/3.12/library/os.html#os.SCHED_BATCH) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SCHED_FIFO`](https://docs.python.org/3.12/library/os.html#os.SCHED_FIFO) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.sched_get_priority_max`](https://docs.python.org/3.12/library/os.html#os.sched_get_priority_max) | 函数 | `(policy)` | Get the maximum scheduling priority for policy. |
| [`os.sched_get_priority_min`](https://docs.python.org/3.12/library/os.html#os.sched_get_priority_min) | 函数 | `(policy)` | Get the minimum scheduling priority for policy. |
| [`os.sched_getaffinity`](https://docs.python.org/3.12/library/os.html#os.sched_getaffinity) | 函数 | `` | 参见官方 API 文档。 |
| [`os.sched_getparam`](https://docs.python.org/3.12/library/os.html#os.sched_getparam) | 函数 | `` | 参见官方 API 文档。 |
| [`os.sched_getscheduler`](https://docs.python.org/3.12/library/os.html#os.sched_getscheduler) | 函数 | `` | 参见官方 API 文档。 |
| [`os.SCHED_IDLE`](https://docs.python.org/3.12/library/os.html#os.SCHED_IDLE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SCHED_OTHER`](https://docs.python.org/3.12/library/os.html#os.SCHED_OTHER) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.sched_param`](https://docs.python.org/3.12/library/os.html#os.sched_param) | 类 | `` | 参见官方 API 文档。 |
| [`os.SCHED_RESET_ON_FORK`](https://docs.python.org/3.12/library/os.html#os.SCHED_RESET_ON_FORK) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SCHED_RR`](https://docs.python.org/3.12/library/os.html#os.SCHED_RR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.sched_rr_get_interval`](https://docs.python.org/3.12/library/os.html#os.sched_rr_get_interval) | 函数 | `` | 参见官方 API 文档。 |
| [`os.sched_setaffinity`](https://docs.python.org/3.12/library/os.html#os.sched_setaffinity) | 函数 | `` | 参见官方 API 文档。 |
| [`os.sched_setparam`](https://docs.python.org/3.12/library/os.html#os.sched_setparam) | 函数 | `` | 参见官方 API 文档。 |
| [`os.sched_setscheduler`](https://docs.python.org/3.12/library/os.html#os.sched_setscheduler) | 函数 | `` | 参见官方 API 文档。 |
| [`os.SCHED_SPORADIC`](https://docs.python.org/3.12/library/os.html#os.SCHED_SPORADIC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.sched_yield`](https://docs.python.org/3.12/library/os.html#os.sched_yield) | 函数 | `()` | Voluntarily relinquish the CPU. |
| [`os.SEEK_CUR`](https://docs.python.org/3.12/library/os.html#os.SEEK_CUR) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.SEEK_DATA`](https://docs.python.org/3.12/library/os.html#os.SEEK_DATA) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.SEEK_END`](https://docs.python.org/3.12/library/os.html#os.SEEK_END) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.SEEK_HOLE`](https://docs.python.org/3.12/library/os.html#os.SEEK_HOLE) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.SEEK_SET`](https://docs.python.org/3.12/library/os.html#os.SEEK_SET) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.sendfile`](https://docs.python.org/3.12/library/os.html#os.sendfile) | 函数 | `(out_fd, in_fd, offset, count, headers=(), trailers=(), flags=0)` | Copy count bytes from file descriptor in_fd to file descriptor out_fd. |
| [`os.sep`](https://docs.python.org/3.12/library/os.html#os.sep) | 数据/常量 | `` | str(object='') -> str str(bytes_or_buffer[, encoding[, errors]]) -> str |
| [`os.set_blocking`](https://docs.python.org/3.12/library/os.html#os.set_blocking) | 函数 | `(fd, blocking, /)` | Set the blocking mode of the specified file descriptor. |
| [`os.set_handle_inheritable`](https://docs.python.org/3.12/library/os.html#os.set_handle_inheritable) | 函数 | `` | 参见官方 API 文档。 |
| [`os.set_inheritable`](https://docs.python.org/3.12/library/os.html#os.set_inheritable) | 函数 | `(fd, inheritable, /)` | Set the inheritable flag of the specified file descriptor. |
| [`os.setegid`](https://docs.python.org/3.12/library/os.html#os.setegid) | 函数 | `(egid, /)` | Set the current process's effective group id. |
| [`os.seteuid`](https://docs.python.org/3.12/library/os.html#os.seteuid) | 函数 | `(euid, /)` | Set the current process's effective user id. |
| [`os.setgid`](https://docs.python.org/3.12/library/os.html#os.setgid) | 函数 | `(gid, /)` | Set the current process's group id. |
| [`os.setgroups`](https://docs.python.org/3.12/library/os.html#os.setgroups) | 函数 | `(groups, /)` | Set the groups of the current process to list. |
| [`os.setns`](https://docs.python.org/3.12/library/os.html#os.setns) | 函数 | `` | 参见官方 API 文档。 |
| [`os.setpgid`](https://docs.python.org/3.12/library/os.html#os.setpgid) | 函数 | `(pid, pgrp, /)` | Call the system call setpgid(pid, pgrp). |
| [`os.setpgrp`](https://docs.python.org/3.12/library/os.html#os.setpgrp) | 函数 | `()` | Make the current process the leader of its process group. |
| [`os.setpriority`](https://docs.python.org/3.12/library/os.html#os.setpriority) | 函数 | `(which, who, priority)` | Set program scheduling priority. |
| [`os.setregid`](https://docs.python.org/3.12/library/os.html#os.setregid) | 函数 | `(rgid, egid, /)` | Set the current process's real and effective group ids. |
| [`os.setresgid`](https://docs.python.org/3.12/library/os.html#os.setresgid) | 函数 | `` | 参见官方 API 文档。 |
| [`os.setresuid`](https://docs.python.org/3.12/library/os.html#os.setresuid) | 函数 | `` | 参见官方 API 文档。 |
| [`os.setreuid`](https://docs.python.org/3.12/library/os.html#os.setreuid) | 函数 | `(ruid, euid, /)` | Set the current process's real and effective user ids. |
| [`os.setsid`](https://docs.python.org/3.12/library/os.html#os.setsid) | 函数 | `()` | Call the system call setsid(). |
| [`os.setuid`](https://docs.python.org/3.12/library/os.html#os.setuid) | 函数 | `(uid, /)` | Set the current process's user id. |
| [`os.setxattr`](https://docs.python.org/3.12/library/os.html#os.setxattr) | 函数 | `` | 参见官方 API 文档。 |
| [`os.SF_MNOWAIT`](https://docs.python.org/3.12/library/os.html#os.SF_MNOWAIT) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SF_NOCACHE`](https://docs.python.org/3.12/library/os.html#os.SF_NOCACHE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SF_NODISKIO`](https://docs.python.org/3.12/library/os.html#os.SF_NODISKIO) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SF_SYNC`](https://docs.python.org/3.12/library/os.html#os.SF_SYNC) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.spawnl`](https://docs.python.org/3.12/library/os.html#os.spawnl) | 函数 | `(mode, file, *args)` | spawnl(mode, file, *args) -> integer |
| [`os.spawnle`](https://docs.python.org/3.12/library/os.html#os.spawnle) | 函数 | `(mode, file, *args)` | spawnle(mode, file, *args, env) -> integer |
| [`os.spawnlp`](https://docs.python.org/3.12/library/os.html#os.spawnlp) | 函数 | `(mode, file, *args)` | spawnlp(mode, file, *args) -> integer |
| [`os.spawnlpe`](https://docs.python.org/3.12/library/os.html#os.spawnlpe) | 函数 | `(mode, file, *args)` | spawnlpe(mode, file, *args, env) -> integer |
| [`os.spawnv`](https://docs.python.org/3.12/library/os.html#os.spawnv) | 函数 | `(mode, file, args)` | spawnv(mode, file, args) -> integer |
| [`os.spawnve`](https://docs.python.org/3.12/library/os.html#os.spawnve) | 函数 | `(mode, file, args, env)` | spawnve(mode, file, args, env) -> integer |
| [`os.spawnvp`](https://docs.python.org/3.12/library/os.html#os.spawnvp) | 函数 | `(mode, file, args)` | spawnvp(mode, file, args) -> integer |
| [`os.spawnvpe`](https://docs.python.org/3.12/library/os.html#os.spawnvpe) | 函数 | `(mode, file, args, env)` | spawnvpe(mode, file, args, env) -> integer |
| [`os.splice`](https://docs.python.org/3.12/library/os.html#os.splice) | 函数 | `` | 参见官方 API 文档。 |
| [`os.SPLICE_F_MORE`](https://docs.python.org/3.12/library/os.html#os.SPLICE_F_MORE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SPLICE_F_MOVE`](https://docs.python.org/3.12/library/os.html#os.SPLICE_F_MOVE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.SPLICE_F_NONBLOCK`](https://docs.python.org/3.12/library/os.html#os.SPLICE_F_NONBLOCK) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.startfile`](https://docs.python.org/3.12/library/os.html#os.startfile) | 函数 | `` | 参见官方 API 文档。 |
| [`os.stat`](https://docs.python.org/3.12/library/os.html#os.stat) | 函数 | `(path, *, dir_fd=None, follow_symlinks=True)` | Perform a stat system call on the given path. |
| [`os.stat_result`](https://docs.python.org/3.12/library/os.html#os.stat_result) | 类 | `(iterable=(), /)` | stat_result: Result from stat, fstat, or lstat. |
| [`os.statvfs`](https://docs.python.org/3.12/library/os.html#os.statvfs) | 函数 | `(path)` | Perform a statvfs system call on the given path. |
| [`os.strerror`](https://docs.python.org/3.12/library/os.html#os.strerror) | 函数 | `(code, /)` | Translate an error code to a message string. |
| [`os.supports_bytes_environ`](https://docs.python.org/3.12/library/os.html#os.supports_bytes_environ) | 数据/常量 | `` | bool(x) -> bool |
| [`os.supports_dir_fd`](https://docs.python.org/3.12/library/os.html#os.supports_dir_fd) | 数据/常量 | `` | set() -> new empty set object set(iterable) -> new set object |
| [`os.supports_effective_ids`](https://docs.python.org/3.12/library/os.html#os.supports_effective_ids) | 数据/常量 | `` | set() -> new empty set object set(iterable) -> new set object |
| [`os.supports_fd`](https://docs.python.org/3.12/library/os.html#os.supports_fd) | 数据/常量 | `` | set() -> new empty set object set(iterable) -> new set object |
| [`os.supports_follow_symlinks`](https://docs.python.org/3.12/library/os.html#os.supports_follow_symlinks) | 数据/常量 | `` | set() -> new empty set object set(iterable) -> new set object |
| [`os.symlink`](https://docs.python.org/3.12/library/os.html#os.symlink) | 函数 | `(src, dst, target_is_directory=False, *, dir_fd=None)` | Create a symbolic link pointing to src named dst. |
| [`os.sync`](https://docs.python.org/3.12/library/os.html#os.sync) | 函数 | `()` | Force write of everything to disk. |
| [`os.sysconf`](https://docs.python.org/3.12/library/os.html#os.sysconf) | 函数 | `(name, /)` | Return an integer-valued system configuration variable. |
| [`os.sysconf_names`](https://docs.python.org/3.12/library/os.html#os.sysconf_names) | 数据/常量 | `` | dict() -> new empty dictionary dict(mapping) -> new dictionary initialized from a mapping object's (key, value) pairs dict(iterable) -> new dictionary initialized as if via: d =... |
| [`os.system`](https://docs.python.org/3.12/library/os.html#os.system) | 函数 | `(command)` | Execute the command in a subshell. |
| [`os.tcgetpgrp`](https://docs.python.org/3.12/library/os.html#os.tcgetpgrp) | 函数 | `(fd, /)` | Return the process group associated with the terminal specified by fd. |
| [`os.tcsetpgrp`](https://docs.python.org/3.12/library/os.html#os.tcsetpgrp) | 函数 | `(fd, pgid, /)` | Set the process group associated with the terminal specified by fd. |
| [`os.terminal_size`](https://docs.python.org/3.12/library/os.html#os.terminal_size) | 类 | `(iterable=(), /)` | A tuple of (columns, lines) for holding terminal window size |
| [`os.times`](https://docs.python.org/3.12/library/os.html#os.times) | 函数 | `()` | Return a collection containing process timing information. |
| [`os.truncate`](https://docs.python.org/3.12/library/os.html#os.truncate) | 函数 | `(path, length)` | Truncate a file, specified by path, to a specific length. |
| [`os.ttyname`](https://docs.python.org/3.12/library/os.html#os.ttyname) | 函数 | `(fd, /)` | Return the name of the terminal device connected to 'fd'. |
| [`os.umask`](https://docs.python.org/3.12/library/os.html#os.umask) | 函数 | `(mask, /)` | Set the current numeric umask and return the previous umask. |
| [`os.uname`](https://docs.python.org/3.12/library/os.html#os.uname) | 函数 | `()` | Return an object identifying the current operating system. |
| [`os.unlink`](https://docs.python.org/3.12/library/os.html#os.unlink) | 函数 | `(path, *, dir_fd=None)` | Remove a file (same as remove()). |
| [`os.unsetenv`](https://docs.python.org/3.12/library/os.html#os.unsetenv) | 函数 | `(name, /)` | Delete an environment variable. |
| [`os.unshare`](https://docs.python.org/3.12/library/os.html#os.unshare) | 函数 | `` | 参见官方 API 文档。 |
| [`os.urandom`](https://docs.python.org/3.12/library/os.html#os.urandom) | 函数 | `(size, /)` | Return a bytes object containing random bytes suitable for cryptographic use. |
| [`os.utime`](https://docs.python.org/3.12/library/os.html#os.utime) | 函数 | `` | Set the access and modified time of path. |
| [`os.W_OK`](https://docs.python.org/3.12/library/os.html#os.W_OK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.wait`](https://docs.python.org/3.12/library/os.html#os.wait) | 函数 | `()` | Wait for completion of a child process. |
| [`os.wait3`](https://docs.python.org/3.12/library/os.html#os.wait3) | 函数 | `(options)` | Wait for completion of a child process. |
| [`os.wait4`](https://docs.python.org/3.12/library/os.html#os.wait4) | 函数 | `(pid, options)` | Wait for completion of a specific child process. |
| [`os.waitid`](https://docs.python.org/3.12/library/os.html#os.waitid) | 函数 | `` | 参见官方 API 文档。 |
| [`os.waitpid`](https://docs.python.org/3.12/library/os.html#os.waitpid) | 函数 | `(pid, options, /)` | Wait for completion of a given child process. |
| [`os.waitstatus_to_exitcode`](https://docs.python.org/3.12/library/os.html#os.waitstatus_to_exitcode) | 函数 | `(status)` | Convert a wait status to an exit code. |
| [`os.walk`](https://docs.python.org/3.12/library/os.html#os.walk) | 函数 | `(top, topdown=True, onerror=None, followlinks=False)` | Directory tree generator. |
| [`os.WCONTINUED`](https://docs.python.org/3.12/library/os.html#os.WCONTINUED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.WCOREDUMP`](https://docs.python.org/3.12/library/os.html#os.WCOREDUMP) | 函数 | `(status, /)` | Return True if the process returning status was dumped to a core file. |
| [`os.WEXITED`](https://docs.python.org/3.12/library/os.html#os.WEXITED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.WEXITSTATUS`](https://docs.python.org/3.12/library/os.html#os.WEXITSTATUS) | 函数 | `(status)` | Return the process return code from status. |
| [`os.WIFCONTINUED`](https://docs.python.org/3.12/library/os.html#os.WIFCONTINUED) | 函数 | `(status)` | Return True if a particular process was continued from a job control stop. |
| [`os.WIFEXITED`](https://docs.python.org/3.12/library/os.html#os.WIFEXITED) | 函数 | `(status)` | Return True if the process returning status exited via the exit() system call. |
| [`os.WIFSIGNALED`](https://docs.python.org/3.12/library/os.html#os.WIFSIGNALED) | 函数 | `(status)` | Return True if the process returning status was terminated by a signal. |
| [`os.WIFSTOPPED`](https://docs.python.org/3.12/library/os.html#os.WIFSTOPPED) | 函数 | `(status)` | Return True if the process returning status was stopped. |
| [`os.WNOHANG`](https://docs.python.org/3.12/library/os.html#os.WNOHANG) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.WNOWAIT`](https://docs.python.org/3.12/library/os.html#os.WNOWAIT) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.write`](https://docs.python.org/3.12/library/os.html#os.write) | 函数 | `(fd, data, /)` | Write a bytes object to a file descriptor. |
| [`os.writev`](https://docs.python.org/3.12/library/os.html#os.writev) | 函数 | `(fd, buffers, /)` | Iterate over buffers, and write the contents of each to a file descriptor. |
| [`os.WSTOPPED`](https://docs.python.org/3.12/library/os.html#os.WSTOPPED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.WSTOPSIG`](https://docs.python.org/3.12/library/os.html#os.WSTOPSIG) | 函数 | `(status)` | Return the signal that stopped the process that provided the status value. |
| [`os.WTERMSIG`](https://docs.python.org/3.12/library/os.html#os.WTERMSIG) | 函数 | `(status)` | Return the signal that terminated the process that provided the status value. |
| [`os.WUNTRACED`](https://docs.python.org/3.12/library/os.html#os.WUNTRACED) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.X_OK`](https://docs.python.org/3.12/library/os.html#os.X_OK) | 数据/常量 | `` | int([x]) -> integer int(x, base=10) -> integer |
| [`os.XATTR_CREATE`](https://docs.python.org/3.12/library/os.html#os.XATTR_CREATE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.XATTR_REPLACE`](https://docs.python.org/3.12/library/os.html#os.XATTR_REPLACE) | 数据/常量 | `` | 参见官方 API 文档。 |
| [`os.XATTR_SIZE_MAX`](https://docs.python.org/3.12/library/os.html#os.XATTR_SIZE_MAX) | 数据/常量 | `` | 参见官方 API 文档。 |

## `os.DirEntry`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`os.DirEntry.inode`](https://docs.python.org/3.12/library/os.html#os.DirEntry.inode) | 方法 | `(self, /)` | Return inode of the entry; cached per entry. |
| [`os.DirEntry.is_dir`](https://docs.python.org/3.12/library/os.html#os.DirEntry.is_dir) | 方法 | `(self, /, *, follow_symlinks=True)` | Return True if the entry is a directory; cached per entry. |
| [`os.DirEntry.is_file`](https://docs.python.org/3.12/library/os.html#os.DirEntry.is_file) | 方法 | `(self, /, *, follow_symlinks=True)` | Return True if the entry is a file; cached per entry. |
| [`os.DirEntry.is_junction`](https://docs.python.org/3.12/library/os.html#os.DirEntry.is_junction) | 方法 | `(self, /)` | Return True if the entry is a junction; cached per entry. |
| [`os.DirEntry.is_symlink`](https://docs.python.org/3.12/library/os.html#os.DirEntry.is_symlink) | 方法 | `(self, /)` | Return True if the entry is a symbolic link; cached per entry. |
| [`os.DirEntry.name`](https://docs.python.org/3.12/library/os.html#os.DirEntry.name) | 属性 | `` | the entry's base filename, relative to scandir() "path" argument |
| [`os.DirEntry.path`](https://docs.python.org/3.12/library/os.html#os.DirEntry.path) | 属性 | `` | the entry's full path name; equivalent to os.path.join(scandir_path, entry.name) |
| [`os.DirEntry.stat`](https://docs.python.org/3.12/library/os.html#os.DirEntry.stat) | 方法 | `(self, /, *, follow_symlinks=True)` | Return stat_result object for the entry; cached per entry. |

## `os.path`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`os.path`](https://docs.python.org/3.12/library/os.path.html#module-os.path) | 模块 | `` | Common operations on Posix pathnames. |
| [`os.path.abspath`](https://docs.python.org/3.12/library/os.path.html#os.path.abspath) | 函数 | `(path)` | Return an absolute path. |
| [`os.path.ALLOW_MISSING`](https://docs.python.org/3.12/library/os.path.html#os.path.ALLOW_MISSING) | 数据/常量 | `` | Special value for use in realpath(). |
| [`os.path.basename`](https://docs.python.org/3.12/library/os.path.html#os.path.basename) | 函数 | `(p)` | Returns the final component of a pathname |
| [`os.path.commonpath`](https://docs.python.org/3.12/library/os.path.html#os.path.commonpath) | 函数 | `(paths)` | Given a sequence of path names, returns the longest common sub-path. |
| [`os.path.commonprefix`](https://docs.python.org/3.12/library/os.path.html#os.path.commonprefix) | 函数 | `(m)` | Given a list of pathnames, returns the longest common leading component |
| [`os.path.dirname`](https://docs.python.org/3.12/library/os.path.html#os.path.dirname) | 函数 | `(p)` | Returns the directory component of a pathname |
| [`os.path.exists`](https://docs.python.org/3.12/library/os.path.html#os.path.exists) | 函数 | `(path)` | Test whether a path exists.  Returns False for broken symbolic links |
| [`os.path.expanduser`](https://docs.python.org/3.12/library/os.path.html#os.path.expanduser) | 函数 | `(path)` | Expand ~ and ~user constructions.  If user or $HOME is unknown, do nothing. |
| [`os.path.expandvars`](https://docs.python.org/3.12/library/os.path.html#os.path.expandvars) | 函数 | `(path)` | Expand shell variables of form $var and ${var}.  Unknown variables are left unchanged. |
| [`os.path.getatime`](https://docs.python.org/3.12/library/os.path.html#os.path.getatime) | 函数 | `(filename)` | Return the last access time of a file, reported by os.stat(). |
| [`os.path.getctime`](https://docs.python.org/3.12/library/os.path.html#os.path.getctime) | 函数 | `(filename)` | Return the metadata change time of a file, reported by os.stat(). |
| [`os.path.getmtime`](https://docs.python.org/3.12/library/os.path.html#os.path.getmtime) | 函数 | `(filename)` | Return the last modification time of a file, reported by os.stat(). |
| [`os.path.getsize`](https://docs.python.org/3.12/library/os.path.html#os.path.getsize) | 函数 | `(filename)` | Return the size of a file, reported by os.stat(). |
| [`os.path.isabs`](https://docs.python.org/3.12/library/os.path.html#os.path.isabs) | 函数 | `(s)` | Test whether a path is absolute |
| [`os.path.isdevdrive`](https://docs.python.org/3.12/library/os.path.html#os.path.isdevdrive) | 函数 | `` | 参见官方 API 文档。 |
| [`os.path.isdir`](https://docs.python.org/3.12/library/os.path.html#os.path.isdir) | 函数 | `(s)` | Return true if the pathname refers to an existing directory. |
| [`os.path.isfile`](https://docs.python.org/3.12/library/os.path.html#os.path.isfile) | 函数 | `(path)` | Test whether a path is a regular file |
| [`os.path.isjunction`](https://docs.python.org/3.12/library/os.path.html#os.path.isjunction) | 函数 | `(path)` | Test whether a path is a junction Junctions are not a part of posix semantics |
| [`os.path.islink`](https://docs.python.org/3.12/library/os.path.html#os.path.islink) | 函数 | `(path)` | Test whether a path is a symbolic link |
| [`os.path.ismount`](https://docs.python.org/3.12/library/os.path.html#os.path.ismount) | 函数 | `(path)` | Test whether a path is a mount point |
| [`os.path.join`](https://docs.python.org/3.12/library/os.path.html#os.path.join) | 函数 | `(a, *p)` | Join two or more pathname components, inserting '/' as needed. If any component is an absolute path, all previous path components will be discarded.  An empty last part will res... |
| [`os.path.lexists`](https://docs.python.org/3.12/library/os.path.html#os.path.lexists) | 函数 | `(path)` | Test whether a path exists.  Returns True for broken symbolic links |
| [`os.path.normcase`](https://docs.python.org/3.12/library/os.path.html#os.path.normcase) | 函数 | `(s)` | Normalize case of pathname.  Has no effect under Posix |
| [`os.path.normpath`](https://docs.python.org/3.12/library/os.path.html#os.path.normpath) | 函数 | `(path)` | Normalize path, eliminating double slashes, etc. |
| [`os.path.realpath`](https://docs.python.org/3.12/library/os.path.html#os.path.realpath) | 函数 | `(filename, *, strict=False)` | Return the canonical path of the specified filename, eliminating any symbolic links encountered in the path. |
| [`os.path.relpath`](https://docs.python.org/3.12/library/os.path.html#os.path.relpath) | 函数 | `(path, start=None)` | Return a relative version of a path |
| [`os.path.samefile`](https://docs.python.org/3.12/library/os.path.html#os.path.samefile) | 函数 | `(f1, f2)` | Test whether two pathnames reference the same actual file or directory |
| [`os.path.sameopenfile`](https://docs.python.org/3.12/library/os.path.html#os.path.sameopenfile) | 函数 | `(fp1, fp2)` | Test whether two open file objects reference the same file |
| [`os.path.samestat`](https://docs.python.org/3.12/library/os.path.html#os.path.samestat) | 函数 | `(s1, s2)` | Test whether two stat buffers reference the same file |
| [`os.path.split`](https://docs.python.org/3.12/library/os.path.html#os.path.split) | 函数 | `(p)` | Split a pathname.  Returns tuple "(head, tail)" where "tail" is everything after the final slash.  Either part may be empty. |
| [`os.path.splitdrive`](https://docs.python.org/3.12/library/os.path.html#os.path.splitdrive) | 函数 | `(p)` | Split a pathname into drive and path. On Posix, drive is always empty. |
| [`os.path.splitext`](https://docs.python.org/3.12/library/os.path.html#os.path.splitext) | 函数 | `(p)` | Split the extension from a pathname. |
| [`os.path.splitroot`](https://docs.python.org/3.12/library/os.path.html#os.path.splitroot) | 函数 | `(p)` | Split a pathname into drive, root and tail. On Posix, drive is always empty; the root may be empty, a single slash, or two slashes. The tail contains anything after the root. Fo... |
| [`os.path.supports_unicode_filenames`](https://docs.python.org/3.12/library/os.path.html#os.path.supports_unicode_filenames) | 数据/常量 | `` | bool(x) -> bool |

## `os.scandir`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`os.scandir.close`](https://docs.python.org/3.12/library/os.html#os.scandir.close) | 方法 | `` | 参见官方 API 文档。 |

## `os.sched_param`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`os.sched_param.sched_priority`](https://docs.python.org/3.12/library/os.html#os.sched_param.sched_priority) | 属性 | `` | 参见官方 API 文档。 |

## `os.stat_result`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`os.stat_result.st_atime`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_atime) | 属性 | `` | time of last access |
| [`os.stat_result.st_atime_ns`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_atime_ns) | 属性 | `` | time of last access in nanoseconds |
| [`os.stat_result.st_birthtime`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_birthtime) | 属性 | `` | time of creation |
| [`os.stat_result.st_birthtime_ns`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_birthtime_ns) | 属性 | `` | 参见官方 API 文档。 |
| [`os.stat_result.st_blksize`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_blksize) | 属性 | `` | blocksize for filesystem I/O |
| [`os.stat_result.st_blocks`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_blocks) | 属性 | `` | number of blocks allocated |
| [`os.stat_result.st_creator`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_creator) | 属性 | `` | 参见官方 API 文档。 |
| [`os.stat_result.st_ctime`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_ctime) | 属性 | `` | time of last change |
| [`os.stat_result.st_ctime_ns`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_ctime_ns) | 属性 | `` | time of last change in nanoseconds |
| [`os.stat_result.st_dev`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_dev) | 属性 | `` | device |
| [`os.stat_result.st_file_attributes`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_file_attributes) | 属性 | `` | 参见官方 API 文档。 |
| [`os.stat_result.st_flags`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_flags) | 属性 | `` | user defined flags for file |
| [`os.stat_result.st_fstype`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_fstype) | 属性 | `` | 参见官方 API 文档。 |
| [`os.stat_result.st_gen`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_gen) | 属性 | `` | generation number |
| [`os.stat_result.st_gid`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_gid) | 属性 | `` | group ID of owner |
| [`os.stat_result.st_ino`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_ino) | 属性 | `` | inode |
| [`os.stat_result.st_mode`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_mode) | 属性 | `` | protection bits |
| [`os.stat_result.st_mtime`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_mtime) | 属性 | `` | time of last modification |
| [`os.stat_result.st_mtime_ns`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_mtime_ns) | 属性 | `` | time of last modification in nanoseconds |
| [`os.stat_result.st_nlink`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_nlink) | 属性 | `` | number of hard links |
| [`os.stat_result.st_rdev`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_rdev) | 属性 | `` | device type (if inode device) |
| [`os.stat_result.st_reparse_tag`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_reparse_tag) | 属性 | `` | 参见官方 API 文档。 |
| [`os.stat_result.st_rsize`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_rsize) | 属性 | `` | 参见官方 API 文档。 |
| [`os.stat_result.st_size`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_size) | 属性 | `` | total size, in bytes |
| [`os.stat_result.st_type`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_type) | 属性 | `` | 参见官方 API 文档。 |
| [`os.stat_result.st_uid`](https://docs.python.org/3.12/library/os.html#os.stat_result.st_uid) | 属性 | `` | user ID of owner |

## `os.terminal_size`

| API | 类型 | 签名 | 用途摘要 |
|---|---|---|---|
| [`os.terminal_size.columns`](https://docs.python.org/3.12/library/os.html#os.terminal_size.columns) | 属性 | `` | width of the terminal window in characters |
| [`os.terminal_size.lines`](https://docs.python.org/3.12/library/os.html#os.terminal_size.lines) | 属性 | `` | height of the terminal window in characters |
