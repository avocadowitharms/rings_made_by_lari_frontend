# Rings made by Lari

Static German-first landing page, product catalog and gallery. The complete site lives in the repository root: `index.html`, `contact.html`, the other HTML pages, `css/`, `js/` and `assets/`. No build step or Flutter runtime is required.

## Preview

Run `python -m http.server 8080` from the repository root, then open http://localhost:8080/. The VS Code launch configuration serves the same directory.

## GitHub Pages

Commit and push the site files, including `assets/` and `.nojekyll`. In the repository's **Settings → Pages**, select **Deploy from a branch**, choose your published branch and **/(root)**, then save. All internal links and asset URLs are relative, so the site also works at a repository URL such as `https://username.github.io/repository/`.

The repository is prepared for hosting; no publishing or account setting changes have been made.

[GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Contact form

The standalone contact page follows the reference enquiry flow. Submitting valid fields opens a prepared email in the visitor's mail app; the visitor must send it there. Direct email and telephone links are also available. GitHub Pages does not provide a form backend. To deliver submissions directly from the website, connect a form service or backend before changing this behavior.

## Checks

Run `python tests/check_landing.py` `node tests/check_contact.cjs`, and `node --check js/app.js`. Do not run Flutter analysis.

`docs/reference-images.json` maps the 100 image references from the Wix home page to local assets (40 reused, 60 imported). The hero uses a CSS crop to exclude the photograph's lower logo; the original image remains intact in the gallery.

German is the initial language, including static HTML, navigation, footer and product details. Visitors can explicitly choose English in settings. The updated language preference uses `lari-language-v2` so older preview sessions do not force an English first visit.
