# Personal Site Starter (7–10 pages)

## Features
- HTML5 semantics, responsive CSS, accessible nav + skip link
- Iframe (Google Maps + YouTube), media (images), links
- Contact form (HTML5 validation + JS demo handler)
- Clean structure for GitHub Pages/Netlify deployment

## Structure
```
personal-site-starter/
├─ index.html
├─ about.html
├─ projects.html
├─ gallery.html
├─ blog.html
├─ post-1.html
├─ contact.html
├─ map.html
├─ policy.html
└─ assets/
   ├─ styles.css
   ├─ main.js
   └─ images/
      ├─ favicon.svg
      ├─ portrait.jpg      (placeholder)
      ├─ sample-1.jpg      (placeholder)
      ├─ sample-2.jpg      (placeholder)
      └─ sample-3.jpg      (placeholder)
```

## How to run locally
Just open `index.html` in your browser (double click) or serve with VS Code Live Server.

## Deploy
### GitHub Pages
1. Create a repo and push this folder.
2. In repo Settings → Pages → Source: select `main` branch `/ (root)`.
3. Wait ~1–2 minutes, your site goes live.

### Netlify
1. Drag & drop this folder into https://app.netlify.com/drop or connect repo.
2. Build command: _(none)_; Publish directory: `/`.
3. Deploy.

## Customize
- Replace text/images, update links in nav across files.
- Tweak `assets/styles.css` for colors/spacing/typography.
- Add more posts as `post-N.html` and link them from `blog.html`.

## Accessibility tips
- Keep alt text meaningful on images.
- Ensure focus rings remain visible.
- Use headings in order (h1 → h2 → h3...).

Good luck & ship it 
