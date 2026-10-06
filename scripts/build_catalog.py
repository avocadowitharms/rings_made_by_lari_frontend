"""Build the static catalog from the saved original product records; no network."""
import json, html, re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
CATEGORY={'schmale Ringe':'narrow-rings','mittlere Ringe':'medium-rings','breite Ringe':'wide-rings','Ringe, Grösse frei wählbar':'rings','Ringe vorgefertigt':'rings','Armketten':'bracelets','Besteck':'cutlery','Broschen':'brooches','Geschenke':'gifts','Glücksbringer':'lucky-charms','Halsketten':'necklaces','Ringgrössenmesser':'accessories'}
def clean(text):
    return '\n'.join(line.strip() for line in html.unescape(text).replace('\\t','').replace('\\"','"').replace('\u00a0',' ').splitlines()).strip()
def rich(text):
    if not text:return ''
    value=json.loads(text)
    def walk(node):
        if node.get('type')=='TEXT':return node.get('textData',{}).get('text','')
        result=''.join(walk(n) for n in node.get('nodes',[]))
        return result+ ('\n' if node.get('type') in ['PARAGRAPH','LIST_ITEM','HEADING'] else '')
    return clean(walk(value))
def build(records):
    manifest=json.loads((ROOT/'docs/reference-images.json').read_text(encoding='utf-8'))
    assets={x['source'].split('/media/')[-1]:x['file'].removeprefix('assets/') for x in manifest}
    result=[]
    for row in records:
        p=row['product']; categories=list(dict.fromkeys(CATEGORY[c['name']] for c in p['categories'] if c['name'] in CATEGORY))
        if any(c.endswith('rings') for c in categories) and 'rings' not in categories: categories.append('rings')
        primary=next((c for c in ['rings','gifts','necklaces','bracelets','brooches','cutlery','lucky-charms','accessories'] if c in categories),None)
        assert primary,p['name']
        media=[m for m in p['media'] if m['mediaType']=='PHOTO']
        gallery=[assets.get(m['url'],'products/'+m['url']) for m in media]
        desc=rich(p['description'])
        sections=[clean(x['title'])+'\n'+rich(x['description']) for x in p['additionalInfo'] if rich(x['description'])]
        notes=[('Ringgrössen: '+clean(f['title']).split('Grössen ')[1]) if 'Grössen ' in f['title'] else clean(f['title']) for f in p['customTextFields']]
        description='\n\n'.join(x for x in [desc,*sections,*notes] if x)
        options={s['id']:clean(s['description'] or s['value']) for o in p['options'] for s in o['selections']}
        variants=[{'label':' / '.join(options[x] for x in v['optionsSelections']), 'price':v['comparePrice'] if v['hasDiscount'] else v['price'], 'available':v['inventory']['status']=='in_stock'} for v in p['productItems'] if v.get('isVisible',True) and v['optionsSelections']]
        result.append({'id':p['id'],'available':p['isInStock'],'title':clean(p['name']),'price':f"CHF {p['discountedPrice']:.2f}",'priceValue':p['discountedPrice'],'originalPrice':p['price'] if p['price']>p['discountedPrice'] else None,'image':gallery[0], 'gallery':gallery,'descriptionDe':description,'description':description,'categories':categories,'category':primary,'variants':variants,'optionGroups':[{'title':clean(o['title']),'choices':[clean(v['description'] or v['value']) for v in o['selections']]} for o in p['options']],'tag':p['ribbon'] or '', 'tagDe':p['ribbon'] or '', 'isNewArrival':p['ribbon']=='NEU','source':row['source']})
    return result
if __name__=='__main__':
    records=json.loads((ROOT/'docs/reference-products.json').read_text(encoding='utf-8'))
    assert len(records)==71 and all(p.get('product') for p in records),'Complete the import first.'
    order={p['url']:i for i,p in enumerate(json.loads((ROOT/'docs/catalog-links.json').read_text(encoding='utf-8')))}
    records.sort(key=lambda p:order[p['source']])
    products=build(records)
    (ROOT/'js/products.js').write_text('// Imported from the original product pages; regenerate with scripts/build_catalog.py.\nconst catalogProducts = '+json.dumps(products,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
    print(f'Built {len(products)} products.')
