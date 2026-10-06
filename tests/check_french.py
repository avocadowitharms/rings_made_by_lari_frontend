"""Run: python tests/check_french.py. No dependencies."""
from pathlib import Path
from html.parser import HTMLParser
import subprocess, json, re
root=Path(__file__).resolve().parents[1]
strings=set()
class Strings(HTMLParser):
    def handle_data(self, value):
        if value.strip(): strings.add(value.strip())
    def handle_starttag(self, tag, attrs):
        for key,value in attrs:
            if key in ('alt','aria-label','placeholder','title') and value: strings.add(value)
for page in root.glob('*.html'):
    source=page.read_text(encoding='utf-8')
    assert 'js/fr.js?' in source, page
    assert 'theme-switcher' not in source and 'admin-login' not in source, page
    Strings().feed(source)
runner="""
const fs=require('fs'),vm=require('vm');
const source=fs.readFileSync('js/catalog-fr.js','utf8')+fs.readFileSync('js/fr.js','utf8').split('// Keep source strings')[0];
const values=JSON.parse(fs.readFileSync(0,'utf8'));
const context=vm.createContext({values});
console.log(JSON.stringify(vm.runInContext(source+';values.map(x=>[x,translateFrench(x)])',context)));
"""
strings.update(['Ring 34 schmal & breit', 'Details zu Ring 43', 'Ring 43 view 1', '12 Produkte'])
result=json.loads(subprocess.check_output(['node','-e',runner],cwd=root,input=json.dumps(sorted(strings)),encoding='utf-8'))
unchanged=[]
for source,target in result:
    # Proper names, contact coordinates and words identical in both languages.
    if source!=target or not re.search(r'[A-Za-zÀ-ž]',source): continue
    if source in ['×','Galerie | Rings made by Lari','Adresse','Galerie','Facebook','Instagram','Rings','made by Lari','Rings made by Lari','Larissa Engeli','Berggasse 14','3283 Kallnach','Lari :)']: continue
    if source.startswith(('http','www.','rings_made_by_lari@','Instagram:')): continue
    unchanged.append(source)
assert not unchanged, '\n'.join(unchanged)
assert dict(result)['Ring 43 view 1'] == 'Bague 43, vue 1'
assert dict(result)['Details zu Ring 43'] == 'Détails de Bague 43'
assert dict(result)['12 Produkte'] == '12 produits'
assert dict(result)['Ringe | Rings made by Lari']=='Bagues | Rings made by Lari'
print(f'OK: {len(result)} static text and accessibility strings covered in French; header controls removed.')
