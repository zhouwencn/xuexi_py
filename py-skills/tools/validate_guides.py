"""验证 py-skills 目录结构、内部链接和生成的 API 数量。"""

from __future__ import annotations

import re
from pathlib import Path

from generate_api_guides import EXISTING_GUIDES, GUIDES, ROOT


LINK_PATTERN = re.compile(r"\[[^]]+\]\(([^)]+)\)")
COUNT_PATTERN = re.compile(r"共收录 \*\*(\d+)\*\*")
API_ROW_PATTERN = re.compile(r"^\| \[(?:`[^`]+`)\]\([^)]+\) \|", re.MULTILINE)
PLAIN_API_ROW_PATTERN = re.compile(r"^\| `[^`]+` \|", re.MULTILINE)


def expected_files() -> list[Path]:
    files: list[Path] = [ROOT / "README.md", ROOT / "API-COVERAGE.md", ROOT / "LEARNING-METHOD.md"]
    for guide in GUIDES:
        directory = ROOT / guide.category / guide.slug
        files.extend((directory / "README.md", directory / "01-api-reference.md"))
    files.extend((ROOT / "Numpy/05-complete-api-reference.md", ROOT / "Pandas/06-complete-api-reference.md", ROOT / "ThirdParty/Ruff/02-rule-reference.md"))
    return files


def validate_links(errors: list[str]) -> None:
    for path in ROOT.rglob("*.md"):
        text = path.read_text(encoding="utf-8")
        for target in LINK_PATTERN.findall(text):
            if target.startswith(("http://", "https://", "#", "mailto:")):
                continue
            destination = (path.parent / target.split("#", 1)[0]).resolve()
            if not destination.exists():
                errors.append(f"失效链接：{path.relative_to(ROOT)} -> {target}")


def validate_counts(errors: list[str]) -> None:
    api_files = [*ROOT.glob("*/*/01-api-reference.md"), ROOT / "Numpy/05-complete-api-reference.md", ROOT / "Pandas/06-complete-api-reference.md"]
    for path in api_files:
        text = path.read_text(encoding="utf-8")
        match = COUNT_PATTERN.search(text)
        if not match:
            errors.append(f"缺少 API 数量：{path.relative_to(ROOT)}")
            continue
        expected = int(match.group(1))
        actual = len(API_ROW_PATTERN.findall(text)) + len(PLAIN_API_ROW_PATTERN.findall(text))
        if actual != expected:
            errors.append(f"API 数量不一致：{path.relative_to(ROOT)} 声明 {expected}，实际 {actual}")
    ruff_path = ROOT / "ThirdParty/Ruff/02-rule-reference.md"
    ruff_text = ruff_path.read_text(encoding="utf-8")
    ruff_match = re.search(r"共收录 \*\*(\d+)\*\* 条规则", ruff_text)
    ruff_rows = len(re.findall(r"^\| \[`[A-Z]+\d+`\]", ruff_text, re.MULTILINE))
    if not ruff_match or int(ruff_match.group(1)) != ruff_rows:
        errors.append(f"Ruff 规则数量不一致：声明 {ruff_match.group(1) if ruff_match else '缺失'}，实际 {ruff_rows}")


def validate_guide_sections(errors: list[str]) -> None:
    required = ("## 安装与导入", "## 核心模型", "## 常见工作流", "## 最小示例", "## 常见陷阱", "## API 完整性", "## 练习顺序")
    for guide in GUIDES:
        path = ROOT / guide.category / guide.slug / "README.md"
        text = path.read_text(encoding="utf-8")
        missing = [heading for heading in required if heading not in text]
        if missing:
            errors.append(f"学习入口章节缺失：{path.relative_to(ROOT)} -> {', '.join(missing)}")


def main() -> None:
    errors: list[str] = []
    for path in expected_files():
        if not path.exists():
            errors.append(f"缺少文件：{path.relative_to(ROOT)}")
    validate_links(errors)
    validate_counts(errors)
    validate_guide_sections(errors)
    if errors:
        raise SystemExit("\n".join(errors))
    markdown_files = list(ROOT.rglob("*.md"))
    print(f"验证通过：{len(markdown_files)} 个 Markdown 文件，内部链接和 API 数量一致。")


if __name__ == "__main__":
    main()
