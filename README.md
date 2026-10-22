# Portfolio

[![CI](https://github.com/lylaxtraw/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/lylaxtraw/Portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/lylaxtraw/Portfolio/actions/workflows/pages.yml/badge.svg)](https://github.com/lylaxtraw/Portfolio/actions/workflows/pages.yml)
[![Live site](https://img.shields.io/badge/live-lylaxtraw.github.io%2FPortfolio-blue)](https://lylaxtraw.github.io/Portfolio/)
[![Release](https://img.shields.io/github/v/release/lylaxtraw/Portfolio?include_prereleases)](https://github.com/lylaxtraw/Portfolio/releases)
[![License: MIT](https://img.shields.io/github/license/lylaxtraw/Portfolio)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/lylaxtraw/Portfolio)](https://github.com/lylaxtraw/Portfolio/commits)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-orange)

Personal portfolio by Lyla Alice: a static site with a 10×10 CSS-grid board. Social links, intro, works
and six content panels (professional, personal, academic, other, opinions, random), most of them carousels.

**Live:** <https://lylaxtraw.github.io/Portfolio/>

## Run it locally

No build tools or dependencies. The site loads content with `fetch`, so open it through a server, not `file://`:

```bash
python3 -m http.server 8123
# http://localhost:8123
```

## Structure

```
index.html        only .html in the root
html/             other pages (project detail)
css/              one stylesheet per section (+ base, board, panels)
js/sections/      one script per section
js/shared/        shared helpers (carousel, block registry, .md loader)
public/           content as Markdown rows: opinions, social links, other links
img/              images and profile pictures
.github/          CI, Pages deploy, release workflow, templates
```

## Editing content

Opinions and links live in `public/` as `a :: b :: c` lines (`#` starts a comment):

| File | Row format |
|------|------------|
| `opinion.md` | `id :: text` |
| `social_link.md` | `id :: who :: link :: photo-in-img/pfp` |
| `other_links.md` | `group :: text :: link` (`papers` or `playlists`) |

An opinion needs a row with the same `id` in both of the first two files.

## Checks

```bash
python3 .github/scripts/check_site.py
```

Verifies that the root is index-only, local links and images exist, the `.md` rows are well formed and
consistent, and CSS `url()` files exist. CI also runs `node --check` on every script and a server smoke test.

## Deploy and releases

- Pushing to `main` runs the checks and deploys to GitHub Pages.
- Pushing a tag such as `v0.1.0` publishes a GitHub release with a zip of the site.
- Day-to-day work happens on `dev`; CI runs on both branches.

One-time setup: **Settings → Pages → Source: GitHub Actions**.

See [CHANGELOG.md](CHANGELOG.md) for what's new.

## License

[MIT](LICENSE)