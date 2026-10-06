// Run: node tests/check_catalog.cjs (no dependencies).
const fs = require('fs'), vm = require('vm'), assert = require('assert/strict');
const context = vm.createContext({pageName: () => 'index.html'});
const app = fs.readFileSync('js/app.js', 'utf8');
vm.runInContext(fs.readFileSync('js/products.js', 'utf8') + app.split('const benefits =')[0], context);
const products = vm.runInContext('catalogProducts', context);
const originals = JSON.parse(fs.readFileSync('docs/reference-products.json', 'utf8'));
assert.equal(products.length, 71);
assert.equal(new Set(products.map(p => p.id)).size, 71);
for (const item of products) {
  const source = originals.find(row => row.source === item.source).product;
  assert.equal(item.id, source.id);
  assert.equal(item.priceValue, source.discountedPrice, item.title);
  assert.equal(item.available, source.isInStock, item.title);
  assert.equal(item.gallery.length, source.media.filter(m => m.mediaType === 'PHOTO').length, item.title);
  for (const image of item.gallery) assert(fs.existsSync('assets/' + image), image);
  assert.equal(item.optionGroups.length, source.options.length);
}
vm.runInContext(app.slice(app.indexOf('function findPreviewItem('), app.indexOf('function openPreview(')), context);
for (const item of products) {
  context.id = item.id;
  assert.equal(vm.runInContext('findPreviewItem(id, "product").source', context), item.source);
}
assert.equal(vm.runInContext('collectionItems("collection-necklaces.html").length', context), 8);
assert.equal(vm.runInContext('collectionItems("collection-bracelets.html").length', context), 1);
assert.equal(vm.runInContext('collectionItems("collection-ready-rings.html").length', context), products.filter(p => p.categories.includes('rings')).length);
const shop = fs.readFileSync('shop.html', 'utf8');
assert.match(shop, /<details class="shop-filter-panel">/);
assert(!/<details class="shop-filter-panel"[^>]*\bopen\b/.test(shop));
vm.runInContext(fs.readFileSync('js/catalog-fr.js', 'utf8') + fs.readFileSync('js/fr.js', 'utf8').split('// Keep source strings')[0], context);
const strings = new Set(['Ausführungen & Preise', 'Ausverkauft', 'Zubehör']);
for (const item of products) {
  [item.title, item.tag, ...item.description.split('\n'), ...item.optionGroups.flatMap(g => [g.title, ...g.choices])].forEach(s => strings.add(s));
}
const untranslated = [];
for (const source of strings) {
  if (!source.trim() || !/[a-zäöü]/i.test(source) || /^[\d.]+ CHF$/.test(source)) continue;
  context.value = source;
  const translated = vm.runInContext('translateFrench(value)', context);
  if (source === translated) untranslated.push(source);
}
assert.deepEqual(untranslated, [], 'Missing French catalog translations');
console.log(`OK: ${products.length} original products, prices, galleries, unique detail routing, collections, French copy and collapsed filter.`);
