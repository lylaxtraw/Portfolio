#!/usr/bin/env python3
"""Repository checks for the static portfolio (stdlib only).

1. Root is index-only: index.html is the only .html file in the root.
2. Every local href/src in every .html file points to an existing file.
3. public/*.md rows are well formed, ids are unique and consistent,
   and every referenced photo exists in img/pfp/.
4. Every local file referenced from CSS url(...) exists.
"""
from html.parser import HTMLParser
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[2]
errors: list[str] = []


def fail(message: str) -> None:
    errors.append(message)


def is_local(url: str) -> bool:
    parsed = urlparse(url)
    return not (parsed.scheme or parsed.netloc or url.startswith(("#", "//")))


def resolve(base: Path, url: str) -> Path:
    return (base.parent / unquote(urlparse(url).path)).resolve()


class RefParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.refs: list[str] = []

    def handle_starttag(self, tag, attrs):
        for name, value in attrs:
            if name in ("href", "src") and value and is_local(value):
                self.refs.append(value)


def check_root_index_only() -> None:
    for page in ROOT.glob("*.html"):
        if page.name != "index.html":
            fail(f"root must be index-only, move {page.name} to html/")
    if not (ROOT / "index.html").is_file():
        fail("index.html is missing")


def check_html_references() -> None:
    skip = {".git", ".github", "_to-delete", "dev", "node_modules"}
    for page in ROOT.rglob("*.html"):
        if skip & set(page.relative_to(ROOT).parts):
            continue
        parser = RefParser()
        parser.feed(page.read_text(encoding="utf8"))
        for ref in parser.refs:
            target = resolve(page, ref)
            if not target.exists():
                fail(f"{page.relative_to(ROOT)}: missing file '{ref}'")


def md_rows(path: Path, columns: int) -> list[list[str]]:
    rows = []
    for number, line in enumerate(path.read_text(encoding="utf8").splitlines(), 1):
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        cells = [cell.strip() for cell in line.split("::")]
        if len(cells) != columns or not all(cells):
            fail(f"{path.relative_to(ROOT)}:{number}: expected {columns} non-empty '::' columns")
            continue
        rows.append(cells)
    return rows


def check_content() -> None:
    public = ROOT / "public"
    opinions = md_rows(public / "opinion.md", 2)
    socials = md_rows(public / "social_link.md", 4)
    links = md_rows(public / "other_links.md", 3)

    for label, rows in (("opinion.md", opinions), ("social_link.md", socials)):
        ids = [row[0] for row in rows]
        for dup in {i for i in ids if ids.count(i) > 1}:
            fail(f"public/{label}: duplicate id '{dup}'")

    opinion_ids = {row[0] for row in opinions}
    social_ids = {row[0] for row in socials}
    for missing in sorted(opinion_ids - social_ids):
        fail(f"public/opinion.md: id '{missing}' has no row in social_link.md")
    for orphan in sorted(social_ids - opinion_ids):
        fail(f"public/social_link.md: id '{orphan}' has no row in opinion.md")

    for _id, _who, href, photo in socials:
        if not href.startswith(("https://", "http://")):
            fail(f"public/social_link.md: '{_id}' link must be http(s)")
        if not (ROOT / "img" / "pfp" / photo).is_file():
            fail(f"public/social_link.md: '{_id}' photo not found: img/pfp/{photo}")

    for group, _text, href in links:
        if group not in {"papers", "playlists"}:
            fail(f"public/other_links.md: unknown group '{group}'")
        if not href.startswith(("https://", "http://")):
            fail(f"public/other_links.md: link must be http(s): {href}")


def check_css_urls() -> None:
    for css in (ROOT / "css").glob("*.css"):
        for url in re.findall(r"url\(\s*['\"]?([^'\")]+)", css.read_text(encoding="utf8")):
            if is_local(url) and not url.startswith("data:") and not resolve(css, url).exists():
                fail(f"{css.relative_to(ROOT)}: missing file '{url}'")


def main() -> int:
    check_root_index_only()
    check_html_references()
    check_content()
    check_css_urls()
    if errors:
        print("Checks failed:")
        for message in errors:
            print(f"  - {message}")
        return 1
    print("All site checks passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
