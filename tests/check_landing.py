"""Run with: python tests/check_landing.py (standard library only)."""
import json
from pathlib import Path
import re
import subprocess

root = Path(__file__).resolve().parents[1]
web = root
script = (web / 'js/app.js').read_text(encoding='utf-8')
manifest = json.loads((root / 'docs/reference-images.json').read_text())
assert len({item['source'] for item in manifest}) == 100
for item in manifest:
    assert (root / item['file']).is_file(), item['file']

# Evaluate the actual gallery and hero lists so missing generated paths fail too.
media = script[script.index('const oldSiteMedia ='):script.index('const products =')]
hero = re.search(r'const heroImages = \[.*?\];', script, re.S).group()
paths = json.loads(subprocess.check_output(
    ['node', '-e', media + '\n' + hero +
     '\nconsole.log(JSON.stringify([...oldSiteMedia, ...heroImages.map(x => "assets/" + x)]));'],
    text=True))
for path in paths:
    assert (web / path).is_file(), path
assert 'fefc2c59' in paths[-1], 'Reference hero must be retained'
assert len(paths[:-1]) == len(set(paths[:-1])), 'Duplicate gallery paths'

expected = ['index.html', 'contact.html', 'shop.html', 'about.html', 'gallery.html']
for page in web.glob('*.html'):
    html = page.read_text(encoding='utf-8')
    nav = re.search(r'<nav class="nav".*?</nav>', html, re.S).group()
    assert re.findall(r'href="([^"]+)"', nav) == expected, page
    assert 'class="social-banner"' in html, page
    assert 'facebook.com/rings_made_by_lari' in html, page
    assert 'data-action="cart"' not in html, page
    assert 'add-cart-button' not in html, page
assert 'function addToCart' not in script
assert 'renderCartDrawer' not in script
assert 'encodeURIComponent(productTitle(item))' in script, 'Enquiries must identify the piece'
assert 'previewDialog.showModal()' in script, 'Product details remain accessible'
print(f'OK: {len(manifest)} reference images, {len(paths)-1} gallery images, shared navigation and enquiry-only details.')

assert (root / "index.html").is_file()
assert (root / ".nojekyll").is_file()
assert '"lari-language-v2") === "en" ? "en" : "de"' in script
from urllib.parse import urlsplit, unquote
for page in web.glob("*.html"):
    html = page.read_text(encoding="utf-8")
    assert '<html lang="de">' in html, page
    assert 'href="index.html#contact"' not in html, page
    for url in re.findall(r'(?:href|src)="([^"$]+)"', html):
        parsed = urlsplit(url)
        if parsed.scheme or parsed.netloc or not parsed.path:
            continue
        assert not parsed.path.startswith("/"), (page, url)
        assert (page.parent / unquote(parsed.path)).is_file(), (page, url)
print("OK: German defaults and root-relative hosting links.")

# Legal imports must remain complete and must not be replaced by language placeholders.
import hashlib
import html as html_module
for source in json.loads((root / "docs/legal-sources.json").read_text(encoding="utf-8"))["pages"]:
    legal = (root / source["file"]).read_text(encoding="utf-8")
    body = re.search(r'<div class="page-copy legal-copy" lang="de">(.*?)</div>', legal, re.S).group(1)
    text = " ".join(html_module.unescape(re.sub(r"<[^>]*>", " ", body)).split())
    assert hashlib.sha256(text.encode()).hexdigest() == source["textSha256"], source["file"]
assert "replace this placeholder" not in script
assert "vollständig rechtlich geprüfte" not in script
print("OK: complete reference legal text retained.")

# The removed collections stay out of navigation; former size-selectable rings remain in the catalog.
catalog = json.loads(subprocess.check_output([
    "node", "-e", "function pageName() { return 'index.html'; }\n" +
    script[:script.index("const benefits =")] +
    "console.log(JSON.stringify({collections, shopCategoryOptions, shopProducts, collectionProducts}));"
], encoding="utf-8"))
assert not any(item["href"] in ["collection-ring-size-measurer.html", "collection-gift-cards.html", "collection-rings-size.html"] for item in catalog["collections"])
assert any(item["titleDe"] == "Ringe" for item in catalog["collections"])
assert not any(item["id"] in ["rings-size", "ready-rings", "ring-measurer"] for item in catalog["shopCategoryOptions"])
for ring in catalog["collectionProducts"]:
    assert any(item["title"] == ring["title"] and item["category"] == "rings" for item in catalog["shopProducts"])
print("OK: removed collections and merged ring products.")
