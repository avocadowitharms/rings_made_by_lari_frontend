"""Import the observed public reference product pages. Run with Python 3."""
import json, re, urllib.request, urllib.parse, urllib.error, time, html
from html.parser import HTMLParser
from pathlib import Path
root=Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self): super().__init__(); self.options=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='input' and a.get('type')=='radio' and a.get('aria-label'): self.options.append(a['aria-label'])
def read(item):
    url=item['url']; assert url.startswith('https://ringsmadebylari.wixsite.com/dein-onlineshop-f/product-page/')
    url=urllib.parse.quote(url,safe=':/%?=&')
    for attempt in range(4):
        try:
            raw=urllib.request.urlopen(url,timeout=45).read().decode()
            break
        except urllib.error.HTTPError as error:
            if error.code != 429 or attempt == 3: raise
            delay=max(30, int(error.headers.get('Retry-After', 30)))
            print(f'Rate limit: pausing {delay}s.',flush=True)
            time.sleep(delay)

    schemas=[json.loads(x) for x in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>',raw,re.S)]
    product=next(x for x in schemas if x.get('@type')=='Product')
    parser=Page();parser.feed(raw)
    warmup=json.loads(re.search(r'<script[^>]*id="wix-warmup-data"[^>]*>(.*?)</script>',raw,re.S).group(1))
    def find(value):
        if isinstance(value,dict):
            if 'productItems' in value and value.get('name','').strip()==html.unescape(product['name']).strip(): return value
            for child in value.values():
                found=find(child)
                if found: return found
        elif isinstance(value,list):
            for child in value:
                found=find(child)
                if found: return found
        elif isinstance(value,str) and value.startswith(('{','[')):
            try: return find(json.loads(value))
            except ValueError: pass
    full=find(warmup)
    assert full, item['url']
    return {'source':item['url'],'catalogText':item['text'],'schema':product,'options':parser.options,'product':full}
if __name__=='__main__':
    links=json.loads((root/'docs/catalog-links.json').read_text(encoding='utf-8'))
    output=root/'docs/reference-products.json'
    products=json.loads(output.read_text(encoding='utf-8')) if output.exists() else []
    for link in links:
        if any(p['source']==link['url'] and p.get('product') for p in products): continue
        record=read(link)
        products=[p for p in products if p["source"]!=link["url"]]+[record]
        output.write_text(json.dumps(products,ensure_ascii=False,indent=2),encoding='utf-8')
        print(f'Imported {len(products)}/{len(links)}',flush=True)
        time.sleep(2)
