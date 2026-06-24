# Rings made by Lari Frontend

Static Flutter web shell for the Rings made by Lari webshop redesign. The visible site is implemented with HTML, CSS, and JavaScript under `web/`.

## Project Structure

```text
.
├── docs/
│   └── design-system.md
├── lib/
│   └── main.dart
├── web/
│   ├── assets/
│   │   └── old-site/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── index.html
│   ├── shop.html
│   └── collection-*.html
├── pubspec.yaml
└── pubspec.lock
```

## Notes

- `web/css/styles.css` contains the shared design system and page styling.
- `web/js/app.js` contains theme switching, language switching, generated product cards, galleries, and product preview behavior.
- `web/assets/old-site/` contains imported media from the old site.
- Root-level scrape files such as `old-*.html` and `old-*.txt` are temporary import artifacts and should not be committed.

## Start in Browser

In VS Code, run the `Start app in browser` launch configuration. It starts a local static server for the `web/` folder and opens:

```text
http://localhost:8080/index.html
```

You can also start the server manually:

```powershell
python -m http.server 8080 --directory web
```
