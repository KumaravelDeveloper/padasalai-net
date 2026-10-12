# Padasalai.Net — redesign (GitHub Pages)

Files:
- `index.html` — the full website (self-contained)
- `hook-video.html` — the 17-second hook video, embedded in the home hero
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Publish

```bash
git clone https://github.com/KumaravelDeveloper/padasalai-net.git
cd padasalai-net
git checkout -b gh-pages
git rm -rq .
# copy index.html, hook-video.html, .nojekyll, README.md from this folder here
git add -A
git commit -m "Padasalai redesign"
git push -u origin gh-pages
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `gh-pages` / `(root)` → Save.**

Live in ~1 minute at: https://kumaraveldeveloper.github.io/padasalai-net/

To publish from `main` instead, copy the files into the repo root on `main` (this replaces the old `index.html`), push, and pick `main` / `(root)` in Settings → Pages.
