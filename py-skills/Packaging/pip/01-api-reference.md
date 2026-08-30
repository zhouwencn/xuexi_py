<!-- 由 py-skills/tools/generate_api_guides.py 生成，请通过脚本更新。 -->
# pip：包安装器

版本基线：**pip 26.2**  
官方参考：[https://pip.pypa.io/en/stable/cli/](https://pip.pypa.io/en/stable/cli/)

本文件用于防遗漏核对。名称、类别和链接来自官方文档对象清单；签名与一句话说明在本机对象可解析时由公开对象的签名和 docstring 生成。

共收录 **16** 个公开对象或用户命令。私有下划线接口不收录。

## 用户接口

| 命令/API | 用途 |
|---|---|
| `python -m pip install` | 安装索引、URL、VCS、本地目录或可编辑项目。 |
| `python -m pip uninstall` | 卸载一个或多个分发包。 |
| `python -m pip inspect` | 输出环境、依赖和元数据的 JSON 报告。 |
| `python -m pip list` | 列出已安装、过期或可编辑包。 |
| `python -m pip show` | 显示指定包元数据和安装位置。 |
| `python -m pip freeze` | 按 requirements 格式输出已安装版本。 |
| `python -m pip check` | 检查已安装依赖是否兼容和完整。 |
| `python -m pip lock` | 根据需求生成锁文件。 |
| `python -m pip download` | 只下载分发文件及依赖，不安装。 |
| `python -m pip wheel` | 为需求构建 wheel。 |
| `python -m pip hash` | 计算本地包文件哈希。 |
| `python -m pip search` | 旧 XML-RPC 搜索接口，当前公共 PyPI 通常不可用。 |
| `python -m pip index` | 检查包索引中的版本和兼容候选。 |
| `python -m pip cache` | 查看、清理和管理 pip 缓存。 |
| `python -m pip config` | 读取和修改全局、用户、站点配置。 |
| `python -m pip debug` | 显示解释器、证书、vendored 库和兼容标签。 |
