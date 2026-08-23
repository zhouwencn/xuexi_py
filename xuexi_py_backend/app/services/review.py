import difflib
import re


def build_code_diff(reference: str, submitted: str) -> str:
    return "".join(
        difflib.unified_diff(
            reference.splitlines(keepends=True),
            submitted.splitlines(keepends=True),
            fromfile="reference.py",
            tofile="submission.py",
        )
    )[:20_000]


def review_python_code(code: str) -> list[str]:
    suggestions: list[str] = []
    if re.search(r"def\s+\w+\([^)]*=\s*(\[|\{)", code):
        suggestions.append("检测到可变默认参数；建议使用 None 并在函数内部创建对象。")
    if re.search(r"except\s*:\s*", code):
        suggestions.append("检测到裸 except；只捕获能够处理的具体异常。")
    if "print(" in code:
        suggestions.append("提交中包含 print；库函数通常应返回结果，生产服务应使用结构化日志。")
    if len(code.splitlines()) > 80:
        suggestions.append("函数或提交较长；考虑拆分职责并为边界补充测试。")
    if not suggestions:
        suggestions.append("未发现基础规则问题；继续检查命名、边界条件、复杂度和测试覆盖。")
    return suggestions
