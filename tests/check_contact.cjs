// Run: node tests/check_contact.cjs. No browser, network or email is opened.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8');
const contactCode = source.slice(source.indexOf('const contactForm ='));
const values = new Map([
  ['name', 'Lari & Ava'], ['email', 'test@example.com'],
  ['address', 'Strasse 1\nBern'], ['payment', 'TWINT'],
  ['message', 'Ring 43? Grösse 56 & Geschenk'],
]);
let submit;
const form = {
  elements: {message: {value: ''}},
  addEventListener(type, handler) { assert.equal(type, 'submit'); submit = handler; },
};
const window = {location: {search: '?product=Ring%2043%20%26%20Gr%C3%B6sse%2056', href: ''}};
vm.runInNewContext(contactCode, {
  document: {querySelector: () => form}, window, URLSearchParams, activeLanguage: "de",
  FormData: class { get(key) { return values.get(key); } },
});
assert.equal(form.elements.message.value, 'Ring 43 & Grösse 56');
let prevented = false;
submit({preventDefault() { prevented = true; }});
assert.ok(prevented);
const email = new URL(window.location.href);
assert.equal(email.protocol, 'mailto:');
assert.equal(email.pathname, 'rings_made_by_lari@hotmail.com');
assert.equal(email.searchParams.get('subject'), 'Anfrage – Rings made by Lari');
for (const value of values.values()) assert.ok(email.searchParams.get('body').includes(value));
assert.equal([...email.searchParams].length, 2);
console.log('OK: contact product prefill and email encoding, without sending.');

vm.runInNewContext(contactCode, {
  document: {querySelector: () => form}, window, URLSearchParams, activeLanguage: "fr",
  translateFrench: value => value.replace("Ring", "Bague"),
  FormData: class { get(key) { return values.get(key); } },
});
assert.equal(form.elements.message.value, 'Bague 43 & Grösse 56');
submit({preventDefault() {}});
const frenchEmail = new URL(window.location.href);
assert.equal(frenchEmail.searchParams.get('subject'), 'Demande – Rings made by Lari');
assert.ok(frenchEmail.searchParams.get('body').includes('Mode de paiement souhaité: TWINT'));
for (const value of values.values()) assert.ok(frenchEmail.searchParams.get('body').includes(value));
console.log('OK: French email labels and subject; user input remains unchanged.');
