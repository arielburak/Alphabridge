# Alphabridge Partners

Marketing site for Alphabridge Partners — a holding company that develops,
buys, and holds AI-enabled businesses. First portfolio company:
[recruitingats.com](https://recruitingats.com).

## Stack

Plain HTML, CSS, and a small sprinkle of vanilla JS. No build step, no
dependencies — open `index.html` directly or serve the folder with any static
host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3/CloudFront).

```
index.html      # page
styles.css      # all styles
main.js         # reveal animations + small parallax
assets/         # favicon + static assets
```

## Local preview

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Any static host works. For Vercel:

```bash
npx vercel --prod
```
