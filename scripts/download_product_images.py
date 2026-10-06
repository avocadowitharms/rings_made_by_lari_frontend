"""Download missing original product photos; existing files are reused."""
import json, urllib.request, concurrent.futures, sys
from pathlib import Path
root=Path(__file__).resolve().parents[1]
products=json.loads((root/'js/products.js').read_text(encoding='utf-8').split('const catalogProducts = ',1)[1].rstrip(';\n'))
records=json.loads((root/'docs/reference-products.json').read_text(encoding='utf-8'))
urls={m['url']:m['fullUrl'].replace('w_500,h_500,q_90','w_1200,h_1200,q_85') for row in records for m in row['product']['media'] if m['mediaType']=='PHOTO'}
paths=sorted({p for product in products for p in product['gallery'] if p.startswith('products/') and ('--refresh' in sys.argv or not (root/'assets'/p).exists())})
def download(path):
    filename=Path(path).name
    assert path=='products/'+filename
    with urllib.request.urlopen(urls[filename],timeout=60) as response:
        assert response.headers.get_content_type().startswith('image/'), filename
        data=response.read()
    target=root/'assets'/path
    target.parent.mkdir(parents=True,exist_ok=True)
    temporary=target.with_suffix(target.suffix+'.tmp')
    temporary.write_bytes(data)
    temporary.replace(target)
    return path
if __name__=='__main__':
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        for i,path in enumerate(pool.map(download,paths),1): print(f'{i}/{len(paths)} {path}',flush=True)
