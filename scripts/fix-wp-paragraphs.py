"""Merge mid-sentence paragraph splits in whitepaper HTML (PDF import artifacts)."""
from __future__ import annotations

import re
from pathlib import Path

WP_DIR = Path(r"c:\Users\lenovo\NSQTech-Code\Inselberg\website-v3\public\whitepapers")

HEADING_FIXES = [
    (
        re.compile(
            r"<h2>3\.\s*What a Useful Banking Knowledge</h2>\s*"
            r"<p>Graph Includes\s+(.*?)</p>",
            re.S,
        ),
        r"<h2>3. What a Useful Banking Knowledge Graph Includes</h2>\n<p>\1</p>",
    ),
    (
        re.compile(
            r"<h2>3\.\s*Why Banking AI Needs Connected</h2>\s*"
            r"<p>Context\s+(.*?)</p>",
            re.S,
        ),
        r"<h2>3. Why Banking AI Needs Connected Context</h2>\n<p>\1</p>",
    ),
]


def plain(html_inner: str) -> str:
    return re.sub(r"<[^>]+>", "", html_inner).strip()


def ends_mid_sentence(text: str) -> bool:
    t = text.rstrip()
    if not t:
        return False
    if t.endswith((",", ";", ":", "—", "-")):
        return True
    lower = t.lower()
    for tail in (
        " and", " or", " the", " a", " an", " of", " to", " for",
        " with", " from", " than", " every", " same", " full", " rather",
    ):
        if lower.endswith(tail):
            return True
    return t[-1] not in ".?!…"


def starts_continuation(text: str) -> bool:
    return bool(text) and text[0].islower()


def should_merge(a_plain: str, b_plain: str) -> bool:
    return ends_mid_sentence(a_plain) and starts_continuation(b_plain)


def merge_paragraphs(html: str) -> tuple[str, int]:
    """Split on <p>…</p>, merge continuation fragments, reassemble."""
    token_re = re.compile(r"(<p>.*?</p>)", re.S)
    parts = token_re.split(html)
    merges = 0

    # parts alternates: text, p, text, p, ...
    i = 0
    out: list[str] = []
    while i < len(parts):
        part = parts[i]
        m = re.fullmatch(r"<p>(.*?)</p>", part, re.S)
        if not m:
            out.append(part)
            i += 1
            continue

        inner = m.group(1)
        # Look ahead for next paragraph token (skip whitespace-only between)
        j = i + 1
        while j < len(parts) and parts[j].strip() == "":
            j += 1

        if j < len(parts):
            nxt = re.fullmatch(r"<p>(.*?)</p>", parts[j], re.S)
            if nxt and should_merge(plain(inner), plain(nxt.group(1))):
                inner = f"{inner.rstrip()} {nxt.group(1).lstrip()}"
                merges += 1
                # absorb whitespace tokens between and the next p
                i = j + 1
                # keep merging into same paragraph if chain continues
                while True:
                    k = i
                    while k < len(parts) and parts[k].strip() == "":
                        k += 1
                    if k >= len(parts):
                        break
                    nxt2 = re.fullmatch(r"<p>(.*?)</p>", parts[k], re.S)
                    if not (nxt2 and should_merge(plain(inner), plain(nxt2.group(1)))):
                        break
                    inner = f"{inner.rstrip()} {nxt2.group(1).lstrip()}"
                    merges += 1
                    i = k + 1
                out.append(f"<p>{inner}</p>")
                continue

        out.append(f"<p>{inner}</p>")
        i += 1

    return "".join(out), merges


def main() -> None:
    total = 0
    for path in sorted(WP_DIR.glob("*.html")):
        text = path.read_text(encoding="utf-8")
        original = text
        for rx, repl in HEADING_FIXES:
            text = rx.sub(repl, text)
        text, merges = merge_paragraphs(text)
        if text != original:
            path.write_text(text, encoding="utf-8")
            print(f"{path.name}: {merges} paragraph merges")
            total += merges
        else:
            print(f"{path.name}: no changes")
    print(f"total merges: {total}")


if __name__ == "__main__":
    main()
