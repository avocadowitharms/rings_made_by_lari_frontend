// Run: node tests/check_appearance.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync('js/app.js', 'utf8');
const themeCode = source.slice(source.indexOf('function setTheme('), source.indexOf('function setLanguage('));
const headerCode = source.slice(source.indexOf('function updateHeaderControls('), source.indexOf('function renderOldGallery('));
const saved = {};
const current = {};
const toggle = {setAttribute(k,v) {this[k]=v;}, getAttribute(k) {return this[k];}};
const classes = new Set(['nav-open']);
const menu = {setAttribute(k,v) {this[k]=v;}};
const context = vm.createContext({
  activeLanguage: 'fr', activeTheme: 'light', themeButtons: [],
  body: {dataset: {}, classList: {remove: key => classes.delete(key)}}, menuToggle: menu,
  localStorage: {setItem: (key,value) => saved[key] = value},
  document: {querySelector: selector => selector === '.language-current' ? current : toggle},
});
vm.runInContext(themeCode + headerCode, context);
vm.runInContext('setTheme("dark")', context);
assert.equal(context.body.dataset.theme, 'dark');
assert.equal(saved['lari-theme'], 'dark');
assert.equal(toggle['aria-label'], 'Activer le thème clair');
assert.equal(current.textContent, 'FR');
vm.runInContext('activeLanguage="de"; setTheme("light"); closeMobileMenu()', context);
assert.equal(toggle['aria-label'], 'Dunkles Design aktivieren');
assert.equal(context.body.dataset.theme, 'light');
assert.equal(menu['aria-expanded'], 'false');
assert.equal(classes.size, 0);
console.log('OK: theme persistence, localized toggle labels, and mobile menu dismissal.');
