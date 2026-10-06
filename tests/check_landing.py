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
