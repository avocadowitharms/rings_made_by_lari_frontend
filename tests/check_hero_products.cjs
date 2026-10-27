// Run: node tests/check_hero_products.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('js/app.js', 'utf8');
const track = {innerHTML: '', clientWidth: 360, scrollBy(options) { this.lastScroll = options; }};
let click;
let preview;
const products = Array.from({length: 16}, (_, id) => ({id: String(id), title: `Ring ${id}`, image: `ring-${id}.jpg`, category: id === 2 ? "necklaces" : "rings", available: id !== 0}));
products[1].image = '';
const context = {
  catalogProducts: products,
  document: {querySelector(selector) { return selector === '.hero-products' ? {addEventListener(type, handler) { click = handler; }} : track; }},
  asset: image => `assets/${image}`,
  escapeHtml: String,
  productTitle: item => item.title,
  handleProductGridClick: event => { preview = event; },
  window: {matchMedia: () => ({matches: true})},
};
vm.runInNewContext(source.slice(source.indexOf('function renderHeroProducts()'), source.indexOf('function productTitle(item)')), context);
context.renderHeroProducts();
assert.equal((track.innerHTML.match(/class="hero-product"/g) || []).length, 10);
assert.ok(!track.innerHTML.includes('data-preview-id="0"'));
assert.ok(!track.innerHTML.includes('data-preview-id="1"'));
assert.ok(!track.innerHTML.includes('data-preview-id="2"'));
assert.ok(track.innerHTML.includes('data-preview-id="3"'));
assert.ok(!track.innerHTML.includes('data-preview-id="13"'));
assert.ok(track.innerHTML.indexOf('<span>') < track.innerHTML.indexOf('<img'));
for (const direction of [-1, 1]) {
  click({target: {closest: () => ({dataset: {productDirection: direction}})}});
  assert.equal(track.lastScroll.left, direction * 360);
  assert.equal(track.lastScroll.behavior, 'instant');
}
const event = {target: {closest: () => null}};
click(event);
assert.equal(preview, event);
const copy = vm.runInNewContext(source.slice(source.indexOf('const newPageCopy ='), source.indexOf('function localizeNewContent()')) + ';newPageCopy');
for (const language of ['de', 'en', 'fr']) {
  for (const key of ['productSlideshow', 'previousProducts', 'nextProducts']) assert.ok(copy[language][key]);
}
console.log('OK: ten available rings with images, paging, reduced motion, preview delegation and DE/EN/FR labels.');
