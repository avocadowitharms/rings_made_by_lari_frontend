// Run with node tests/check_stories.cjs; no dependencies.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.equal((html.match(/class="customer-story"/g) || []).length, 7);
for (let i = 1; i <= 7; i++) assert.ok(fs.statSync(path.join(root, `assets/customer-stories/story-${i}.png`)).size > 0);
const source = fs.readFileSync(path.join(root, 'js/app.js'), 'utf8');
const code = source.slice(source.indexOf('const proofDialog ='), source.indexOf('const contactForm ='));
let click, opened = 0, prevented = 0;
const image = {};
const link = {href: 'assets/customer-stories/story-1.png', querySelector: () => ({alt: 'Original customer story'}), addEventListener: (_, fn) => click = fn};
vm.runInNewContext(code, {document: {
  querySelector: () => ({querySelector: () => image, showModal: () => opened++}),
  querySelectorAll: () => [link],
}});
click({preventDefault: () => prevented++});
assert.equal(opened, 1); assert.equal(prevented, 1);
assert.equal(image.src, link.href); assert.equal(image.alt, 'Original customer story');
click({ctrlKey: true, preventDefault: () => prevented++});
assert.equal(opened, 1); assert.equal(prevented, 1);
console.log('OK: seven real stories, enlargement and modified-click behavior.');
