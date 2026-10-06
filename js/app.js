const collections = [
  [
    "Rings size selectable",
    "Ringe grösse Frei wählbar",
    "collection-rings-size.html",
    "old-001.jpg",
  ],
  [
    "Ready-made rings",
    "Ringe vorgefertigt",
    "collection-ready-rings.html",
    "old-002.jpg",
  ],
  [
    "Ring size measurer",
    "Ringgrössenmesser",
    "collection-ring-size-measurer.html",
    "measure",
  ],
  ["Bracelets", "Armketten", "collection-bracelets.html", "old-003.jpg"],
  ["Necklaces", "Halsketten", "collection-necklaces.html", "old-004.jpg"],
  ["Brooches", "Broschen", "collection-brooches.html", "old-005.jpg"],
  [
    "Lucky charms",
    "Glücksbringer",
    "collection-lucky-charms.html",
    "old-006.jpg",
  ],
  ["Cutlery", "Besteck", "collection-cutlery.html", "old-061.jpg"],
  ["Gifts", "Geschenke", "collection-gifts.html", "old-007.jpg"],
  [
    "Keychains",
    "Schlüsselanhänger",
    "collection-keychains.html",
    "old-008.webp",
  ],
  ["Gift cards", "Geschenkkarten", "collection-gift-cards.html", "gift"],
  [
    "Statement rings",
    "Statement-Ringe",
    "collection-ready-rings.html",
    "old-015.jpg",
  ],
  [
    "Vintage finds",
    "Vintage-Funde",
    "collection-cutlery.html",
    "old-022.jpg",
  ],
].map(([title, titleDe, href, image]) => ({
  title,
  titleDe,
  href,
  image: ["gift", "measure"].includes(image) ? "" : `old-site/${image}`,
  icon: ["gift", "measure"].includes(image) ? image : "",
  description: `${title} from Rings made by Lari, handmade in small batches from silver-toned old cutlery and selected accessories.`,
  descriptionDe: `${titleDe} von Rings made by Lari, handgemacht in kleinen Mengen aus silberfarbenem altem Besteck und ausgewählten Accessoires.`,
}));

const categories = collections.map((collection) => collection.title);

const collectionProducts = [
  { title: "Ring 43", price: "CHF 29.95", image: "old-site/old-001.jpg" },
  {
    title: "Ring 34 schmal & breit",
    price: "CHF 29.95",
    image: "old-site/old-002.jpg",
  },
  { title: "Ring 35", price: "CHF 29.95", image: "old-site/old-003.jpg" },
  {
    title: "Ring 38 mittel & breit",
    price: "CHF 29.95",
    image: "old-site/old-004.jpg",
  },
  { title: "Ring 40", price: "CHF 25.95", image: "old-site/old-005.jpg" },
  { title: "Ring 37", price: "CHF 29.95", image: "old-site/old-006.jpg" },
  { title: "Ring 18", price: "CHF 29.95", image: "old-site/old-007.jpg" },
  {
    title: "Ring 26 schmal & breit",
    price: "CHF 29.95",
    image: "old-site/old-009.jpg",
  },
  { title: "Ring 23", price: "CHF 29.95", image: "old-site/old-010.jpg" },
  { title: "Ring 42", price: "CHF 29.95", image: "old-site/old-014.jpg" },
  {
    title: "Ring 41 mittel & breit",
    price: "CHF 29.95",
    image: "old-site/old-015.jpg",
  },
  {
    title: "Ring 39 mittel & breit",
    price: "CHF 29.95",
    image: "old-site/old-016.jpg",
  },
];

const giftProducts = [
  {
    title: "Digital gift card", titleDe: "Digitale Geschenkkarte",
    price: "CHF 25.00+",
    image: "",
    description:
      "A digital gift card delivered for flexible gifting across the shop.",
    descriptionDe:
      "Eine digitale Geschenkkarte für flexibles Schenken im Shop.",
  },
  {
    title: "Paper voucher", titleDe: "Papiergutschein",
    price: "CHF 25.00+",
    image: "",
    description: "A paper voucher prepared as a physical gift, ready to give.",
    descriptionDe:
      "Ein Papiergutschein als physisches Geschenk, bereit zum Verschenken.",
  },
];

const oldSiteMedia = [
  "assets/old-site/old-001.jpg",
  "assets/old-site/old-002.jpg",
  "assets/old-site/old-003.jpg",
  "assets/old-site/old-004.jpg",
  "assets/old-site/old-005.jpg",
  "assets/old-site/old-006.jpg",
  "assets/old-site/old-007.jpg",
  "assets/old-site/old-008.webp",
  "assets/old-site/old-009.jpg",
  "assets/old-site/old-010.jpg",
  "assets/old-site/old-013.webp",
  "assets/old-site/old-014.jpg",
  "assets/old-site/old-015.jpg",
  "assets/old-site/old-016.jpg",
  "assets/old-site/old-017.webp",
  "assets/old-site/old-018.jpg",
  "assets/old-site/old-019.jpg",
  "assets/old-site/old-020.jpg",
  "assets/old-site/old-021.jpg",
  "assets/old-site/old-022.jpg",
  "assets/old-site/old-023.jpg",
  "assets/old-site/old-024.jpg",
  "assets/old-site/old-025.jpg",
  "assets/old-site/old-026.jpg",
  "assets/old-site/old-027.jpg",
  "assets/old-site/old-028.jpg",
  "assets/old-site/old-029.jpg",
  "assets/old-site/old-030.jpg",
  "assets/old-site/old-031.jpg",
  "assets/old-site/old-032.jpg",
  "assets/old-site/old-033.jpg",
  "assets/old-site/old-036.jpg",
  "assets/old-site/old-037.jpg",
  "assets/old-site/old-038.jpg",
  "assets/old-site/old-039.jpg",
  "assets/old-site/old-040.jpg",
  "assets/old-site/old-041.jpg",
  "assets/old-site/old-042.jpg",
  "assets/old-site/old-043.jpg",
  "assets/old-site/old-044.jpg",
  "assets/old-site/old-045.jpg",
  "assets/old-site/old-046.jpg",
  "assets/old-site/old-047.jpg",
  "assets/old-site/old-048.jpg",
  "assets/old-site/old-049.jpg",
  "assets/old-site/old-050.jpg",
  "assets/old-site/old-051.jpg",
  "assets/old-site/old-052.jpg",
  "assets/old-site/old-053.jpg",
  "assets/old-site/old-054.jpg",
  "assets/old-site/old-055.jpg",
  "assets/old-site/old-058.jpg",
  "assets/old-site/old-059.jpg",
  "assets/old-site/old-060.jpg",
  "assets/old-site/old-061.jpg",
  "assets/old-site/old-062.jpg",
  "assets/old-site/old-063.jpg",
  "assets/old-site/old-064.jpg",
  "assets/old-site/old-065.jpg",
  "assets/old-site/old-066.jpg",
  "assets/old-site/old-067.jpg",
  "assets/old-site/old-068.jpg",
  "assets/old-site/old-069.jpg",
  "assets/old-site/old-070.webp",
  "assets/old-site/old-071.jpg",
  "assets/old-site/old-072.jpg"
];

oldSiteMedia.push(...[
  "assets/old-site/e5a4ea_011d764135874c309086c67ec43e62db~mv2.jpg",
  "assets/old-site/e5a4ea_0707ddf4e6964d269ec776533708f53b~mv2.jpg",
  "assets/old-site/e5a4ea_0bf196cfe92b480f9f20593142d8ff54~mv2.jpg",
  "assets/old-site/e5a4ea_166587f723fc415b825d46b9f68256db~mv2.jpg",
  "assets/old-site/e5a4ea_17e017059e2643abaa4d27e491f5dcde~mv2.jpg",
  "assets/old-site/e5a4ea_1883b90a556743ca857c9dd8455455e0~mv2.jpg",
  "assets/old-site/e5a4ea_1afa52c2c2654f5cbdb725f05f1a2e61~mv2.jpg",
  "assets/old-site/e5a4ea_1f95e77619d542ac81b5f2497cb81fb8~mv2.jpg",
  "assets/old-site/e5a4ea_221cc8cc012e42cea9db0ecba409d134~mv2.webp",
  "assets/old-site/e5a4ea_23e41685916f4314992b531e8a508fd4~mv2.jpg",
  "assets/old-site/e5a4ea_2867cde6964d4a02b41199f6801e4b76~mv2.jpg",
  "assets/old-site/e5a4ea_29e2c6cdd9c14725b563ec2ba70e1ae3~mv2.jpg",
  "assets/old-site/e5a4ea_2a6879b1075347ecbd86a8fdbfb1a6db~mv2.jpg",
  "assets/old-site/e5a4ea_2c4b333599b44506a00e6cd1709a5690~mv2.jpg",
  "assets/old-site/e5a4ea_2ced4182e2ef4a318a4926deff9d1432~mv2.jpg",
  "assets/old-site/e5a4ea_39813a6086d44ba19730b775bb5a0f86~mv2.jpg",
  "assets/old-site/e5a4ea_3bf6acdb25934aba9822694c37033606~mv2.jpg",
  "assets/old-site/e5a4ea_3c402a52c204480eaf7a282936e7a77f~mv2.jpg",
  "assets/old-site/e5a4ea_3e706843ccf14849843e03eeaf37ca32~mv2.jpg",
  "assets/old-site/e5a4ea_4134beae196f431596128f876971f97d~mv2.jpg",
  "assets/old-site/e5a4ea_48bbed8769ca434786be9e2ac32c2cc3~mv2.jpg",
  "assets/old-site/e5a4ea_50497680dccd44e38f029d746b5d0904~mv2.jpg",
  "assets/old-site/e5a4ea_5248291d61924a7faaa0f3fccd99b679~mv2.jpg",
  "assets/old-site/e5a4ea_52e5ff36722e439f94f2f270e50facd5~mv2.jpg",
  "assets/old-site/e5a4ea_537e2af930e442e1883148b2a39d997f~mv2.jpg",
  "assets/old-site/e5a4ea_621285ac3aa14048927c7711a6103334~mv2.jpg",
  "assets/old-site/e5a4ea_686e7b9efa4d4d608e7bfef77cfbbc14~mv2.jpg",
  "assets/old-site/e5a4ea_732abd7c086a4bbda76fc64d3f778758~mv2.jpg",
  "assets/old-site/e5a4ea_737703a4e97541d694c7917e58e3db1e~mv2.jpg",
  "assets/old-site/e5a4ea_74055da118f843369052acc534f39232~mv2.jpg",
  "assets/old-site/e5a4ea_77676a7c5ba84a17b4d25df169d27e4c~mv2.jpg",
  "assets/old-site/e5a4ea_80bd7c12072b45b586bb37351b854e60~mv2.jpg",
  "assets/old-site/e5a4ea_8700fdcfdc6542ce8283758af824964b~mv2.jpg",
  "assets/old-site/e5a4ea_8f037faa2394495bad3cc7dbfa78b92f~mv2.jpg",
  "assets/old-site/e5a4ea_91dbefb7c29841a29161417da8b9fc29~mv2.jpg",
  "assets/old-site/e5a4ea_94216fb0b1b448cbba5d50d7f976e694~mv2.jpg",
  "assets/old-site/e5a4ea_966e16b5de6743f89fc480c125cdfb2e~mv2.jpg",
  "assets/old-site/e5a4ea_9a3e6ead3efe4dc896bb4008ebe7e259~mv2.jpg",
  "assets/old-site/e5a4ea_a2995419bfcd411b81f641f28256da79~mv2.jpg",
  "assets/old-site/e5a4ea_ab17b054701541a09a076f239042e937~mv2.jpg",
  "assets/old-site/e5a4ea_b31acfb1d9fa45598026512b29a941db~mv2.jpg",
  "assets/old-site/e5a4ea_b691d83c4e47480589c0649cf5d3c867~mv2.jpg",
  "assets/old-site/e5a4ea_bb308997270f4ee09b3ad15aa955f50d~mv2.jpg",
  "assets/old-site/e5a4ea_c7f4e1b910f745fbac384173ce2e4be6~mv2.jpg",
  "assets/old-site/e5a4ea_d330f0a84de94beb9c8ffd776885e9c0~mv2.jpg",
  "assets/old-site/e5a4ea_d55392af89f44338a9e10ea0fb190344~mv2.jpg",
  "assets/old-site/e5a4ea_d5a80496a9b14b859a17bbb68d480fc2~mv2.jpg",
  "assets/old-site/e5a4ea_d9787632bc984fb497d439fd035fc631~mv2.jpg",
  "assets/old-site/e5a4ea_e35bf8d3668d494ba467f4348f93be68~mv2.jpg",
  "assets/old-site/e5a4ea_e45ff31146944ca3a0cc5cdbc4ee7aae~mv2.jpg",
  "assets/old-site/e5a4ea_e6017d5d3c75464abd520a8f33fa274a~mv2.jpg",
  "assets/old-site/e5a4ea_edef9e79d8d7488ca791142822b2c3b6~mv2.jpg",
  "assets/old-site/e5a4ea_eef1b99dac8941629f0fd2e73a567a3b~mv2.jpg",
  "assets/old-site/e5a4ea_f28916adaa7746b89ea323859cbaf8d2~mv2.jpg",
  "assets/old-site/e5a4ea_f4fc854bc13c45aa831111c739ab8c38~mv2.jpg",
  "assets/old-site/e5a4ea_f65758907a6342209899284a2ed1fbc9~mv2.jpg",
  "assets/old-site/e5a4ea_fae4593380f348a2ad6649391efc1d7a~mv2.jpg",
  "assets/old-site/e5a4ea_fb5d91f0b7084e269dc3cbcbc2be8543~mv2.jpg",
  "assets/old-site/e5a4ea_fefc2c59b94b41b798538316f51f7e24~mv2.jpg"
]);

const products = [
  {
    title: "Twist Ring",
    price: "CHF 28.00",
    image: "jewelry-6.jfif",
    description:
      "A slim silver band with a gentle twisted profile and polished highlights.",
    material: "Hand-twisted Sterling Silver (Upcycled)",
    materialDe: "Handgedrehtes Sterlingsilber (Upgecycelt)",
    tag: "NEW",
    tagDe: "NEU"
  },
  {
    title: "Moonstone Ring",
    price: "CHF 56.00",
    image: "jewelry-4.jfif",
    description:
      "A luminous silver ring set with a pale stone for a soft, milky glow.",
    material: "Sterling Silver & Moonstone (Upcycled)",
    materialDe: "Sterlingsilber & Mondstein (Upgecycelt)",
    tag: "LIMITED",
    tagDe: "LIMITIERT"
  },
  {
    title: "Dotted Band",
    price: "CHF 32.00",
    image: "jewelry-1.jfif",
    description:
      "A narrow silver band finished with tiny raised details and a clean silhouette.",
    material: "Sterling Silver (Upcycled)",
    materialDe: "Sterlingsilber (Upgecycelt)"
  },
  {
    title: "Organic Signet Ring",
    price: "CHF 52.00",
    image: "jewelry-2.jfif",
    description:
      "A rounded silver signet with a handmade surface and softened edges.",
    material: "Hand-carved Sterling Silver (Upcycled)",
    materialDe: "Handgeschnitztes Sterlingsilber (Upgecycelt)",
    tag: "LIMITED",
    tagDe: "LIMITIERT"
  },
  {
    title: "Spoon Ring Floral",
    price: "CHF 35.00",
    image: "old-site/old-001.jpg",
    description:
      "An artistic ring crafted from an antique spoon with elegant floral relief details.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)",
    tag: "NEW",
    tagDe: "NEU"
  },
  {
    title: "Silver Band Classic",
    price: "CHF 29.00",
    image: "old-site/old-002.jpg",
    description:
      "A classic polished band formed from the handle of an elegant vintage spoon.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)"
  },
  {
    title: "Spoon Ring Wide",
    price: "CHF 38.00",
    image: "old-site/old-004.jpg",
    description:
      "A wide statement ring featuring beautiful historical engravings.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)",
    tag: "NEW",
    tagDe: "NEU"
  },
  {
    title: "Minimalist Band",
    price: "CHF 30.00",
    image: "old-site/old-003.jpg",
    description:
      "A simple, clean band ring made for everyday comfort and layering.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)"
  },
  {
    title: "Vintage Signet Ring",
    price: "CHF 45.00",
    image: "old-site/old-005.jpg",
    description:
      "A handcrafted signet ring with delicate vintage textures from antique silverware.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)",
    tag: "LIMITED",
    tagDe: "LIMITIERT"
  },
  {
    title: "Engraved Spoon Ring",
    price: "CHF 39.00",
    image: "old-site/old-014.jpg",
    description:
      "A polished spoon ring with crisp vintage engraving and a rounded everyday fit.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)"
  },
  {
    title: "Floral Wide Band",
    price: "CHF 42.00",
    image: "old-site/old-015.jpg",
    description:
      "A wide floral band shaped from a found cutlery handle with soft polished edges.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)",
    tag: "LIMITED",
    tagDe: "LIMITIERT"
  },
  {
    title: "Classic Spoon Band",
    price: "CHF 34.00",
    image: "old-site/old-016.jpg",
    description:
      "A clean silver-toned band with subtle vintage patterning and a comfortable curve.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)"
  },
  {
    title: "Ornate Silver Ring",
    price: "CHF 44.00",
    image: "old-site/old-018.jpg",
    description:
      "A decorative ring with old-world texture, reshaped and finished by hand.",
    material: "Antique silver-plated cutlery (Upcycled)",
    materialDe: "Antikes versilbertes Besteck (Upgecycelt)",
    tag: "NEW",
    tagDe: "NEU"
  },
];

const shopCategoryOptions = [
  ["narrow-rings", "Narrow rings", "Schmale Ringe"],
  ["medium-rings", "Medium rings", "Mittlere Ringe"],
  ["wide-rings", "Wide rings", "Breite Ringe"],
  ["rings-size", "Rings, size selectable", "Ringe, Größe frei wählbar"],
  ["bracelets", "Bracelets", "Armketten"],
  ["cutlery", "Cutlery", "Besteck"],
  ["brooches", "Brooches", "Broschen"],
  ["gifts", "Gifts", "Geschenke"],
  ["lucky-charms", "Lucky charms", "Glücksbringer"],
  ["necklaces", "Necklaces", "Halsketten"],
  ["ready-rings", "Ready-made rings", "Ringe vorgefertigt"],
  ["ring-measurer", "Ring size measurer", "Ringgrößenmesser"],
].map(([id, label, labelDe]) => ({ id, label, labelDe }));

const shopProductCategories = [
  "wide-rings",
  "medium-rings",
  "wide-rings",
  "medium-rings",
  "rings-size",
  "ready-rings",
  "wide-rings",
  "narrow-rings",
  "brooches",
  "cutlery",
  "gifts",
  "lucky-charms",
  "necklaces",
];

const shopProducts = products.map((product, index) => ({
  ...product,
  category: shopProductCategories[index] || "ready-rings",
  isNewArrival: index === 0 || index === 4,
}));

const detailPageCollection = collections.find(
  (collection) => pageName() === collection.href,
);

const benefits = [
  ["Handmade", "Made by hand in small batches"],
  ["Quality materials", "Old silver-toned cutlery"],
  ["Limited releases", "New pieces follow found materials"],
  ["Gift ready", "Beautiful packaging, ready to give"],
];

const icons = {
  measure: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="10" r="7"></circle><path d="M5 21h14M5 19v4M19 19v4"></path></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>',
  account:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.4"></circle><path d="M5.8 20c1.1-3.2 3.2-5 6.2-5s5.1 1.8 6.2 5"></path></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8.5h10l1 11H6l1-11Z"></path><path d="M9.2 8.5a2.8 2.8 0 0 1 5.6 0"></path></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>',
  gift: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v8H4v-8"></path><path d="M2.5 8h19v4h-19z"></path><path d="M12 8v12"></path><path d="M12 8H8.2a2.1 2.1 0 1 1 2.1-2.1C10.3 7.1 12 8 12 8Z"></path><path d="M12 8h3.8a2.1 2.1 0 1 0-2.1-2.1C13.7 7.1 12 8 12 8Z"></path></svg>',
  settings:
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
  user: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>',
};

const body = document.body;
const heroSlider = document.querySelector("#hero-slider");
const heroDots = document.querySelector("#hero-dots");
const collectionsGrid = document.querySelector("#collections-grid");
const categoryList = document.querySelector("#category-list");
const newArrivalsGrid = document.querySelector("#new-arrivals-grid");
const productsGrid = document.querySelector("#bestsellers-grid");
const shopFilterForm = document.querySelector("#shop-filter-form");
const shopSortSelect = document.querySelector("#shop-sort-select");
const shopProductGrid = document.querySelector("#shop-product-grid");
const shopProductCount = document.querySelector("#shop-product-count");
const shopNewItems = document.querySelector("#shop-new-items");
const shopNewItemsRow = document.querySelector("#shop-new-items-row");
const shopNewItemsCount = document.querySelector("#shop-new-items-count");
const collectionProductsGrid = document.querySelector(
  "#collection-products-grid",
);
const benefitsRow = document.querySelector("#benefits");
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const notice = document.querySelector(".notice");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const previewDialog = document.querySelector("#preview-dialog");
const previewImage = document.querySelector("#preview-image");
const previewKicker = document.querySelector("#preview-kicker");
const previewTitle = document.querySelector("#preview-title");
const previewPrice = document.querySelector("#preview-price");
const previewDescription = document.querySelector("#preview-description");
const previewClose = document.querySelector(".preview-close");
const oldGallery = document.querySelector("#old-gallery");

let activeTheme = localStorage.getItem("lari-theme") || "light";
let activeLanguage = localStorage.getItem("lari-language-v2") === "en" ? "en" : "de";
let noticeTimer;
let heroIndex = 0;
let heroTimer;
let shopActiveCategories = [];
let shopSortMode = "featured";

const heroImages = ["old-site/e5a4ea_fefc2c59b94b41b798538316f51f7e24~mv2.jpg"];

const copy = {
  en: {
    instagramCta: "Follow me on Instagram",
    emailCta: "Send an email",
    phoneCta: "Call now",
    contactKicker: "Contact",
    contactTitle: "Your next piece starts here.",
    contactIntro: "I no longer run a traditional online shop. Browse my products online and enquire about your chosen pieces using the contact form.",
    contactDetails: "I review each enquiry personally and will get back to you to confirm availability and discuss the details of your order.",
    contactPayment: "Your order is only binding after payment.",
    contactSteps: "Explore products → Choose your pieces → Fill in your enquiry → Order personally",
    formTitle: "Enquire about your products here",
    formName: "Full name",
    formEmail: "Email address",
    formAddress: "Address",
    formMessage: "Your order or message",
    formPayment: "Preferred payment method",
    formSubmit: "Open enquiry in your email app",
    formNote: "This form opens a prepared email in your email app. Please send it from there. You can also email or call me directly.",

    socialFollow: "Follow me on",
    catalogButton: "Explore the products",
    introKicker: "OLD CUTLERY. NEW POSSIBILITIES.",
    introTitle: "Small pieces. Full of character.",
    introText: "Discover my unique, handmade jewelry. Every piece is made by hand, giving old cutlery a new life.",
    introNote: "Free shipping within Switzerland. Interested in a piece? Get in touch with me directly.",
    contactButton: "Contact Lari",
    galleryTitle: "A closer look",

    nav: ["Home", "Contact", "Products", "About me", "Gallery"],
    light: "Light",
    dark: "Dark",
    homeTitle: "Handmade jewelry.<br />A new story.",
    homeText:
      "Discover my unique, handmade jewelry. Every piece is made by hand.",
    shopButton: "Shop Collection",
    newArrivals: "New arrivals",
    collections: "Discover the collections",
    categories: "Product categories",
    bestsellers: "Bestsellers",
    viewAll: "View all",
    ask: "Ask about this piece",
    footerContact: "Contact",
    payments: "Payment methods: TWINT, Visa, Mastercard",
    legal: ["Datenschutz", "Geschäftsbedingungen", "Impressum"],
    page: {
      "shop.html": ["Products", "Handmade pieces from old cutlery."],
      "about.html": [
        "About",
        "Meet Lari.",
        [
          "My name is Larissa, but I prefer Lari. That is where rings_made_by_lari comes from.",
          "Making rings and accessories is a hobby of mine. I have always enjoyed working with my hands, so creating my own jewelry brings me a lot of joy.",
          "Whenever I have time, I look for old cutlery in second-hand shops or online. I then cut, sand, bend and polish each piece into shape by hand.",
          "Because this is my hobby, only a limited number of rings are available. I am always searching for more cutlery to turn into your next ring.",
          "Follow me on Instagram so you do not miss new rings. I share new pieces there as they become available. You can then enquire about your chosen piece directly with me.",
          "I look forward to your enquiry.",
          "Lari :)"
],
      ],
      "gallery.html": ["Gallery", "Silver-toned pieces in quiet detail."],
      "loyalty.html": ["Loyalty", "Collect points and receive rewards."],
      "privacy.html": ["Rechtliches", "Datenschutz"],
      "terms.html": ["Rechtliches", "Geschäftsbedingungen"],
      "imprint.html": ["Legal", "Impressum"],
    },
    collectionDescriptions: [
      "Silver rings with soft curves, quiet texture, and an easy everyday weight.",
      "Cool-toned silver necklaces made for simple layering and delicate shine.",
      "Minimal silver bracelets with subtle movement and a clean hand-finished feel.",
      "Small silver earrings designed to sit lightly and catch a soft edge of light.",
    ],
    productDescriptions: [
      "A slim silver band with a gentle twisted profile and polished highlights.",
      "A luminous silver ring set with a pale stone for a soft, milky glow.",
      "A narrow silver band finished with tiny raised details and a clean silhouette.",
      "A rounded silver signet with a handmade surface and softened edges.",
      "An artistic ring crafted from an antique spoon with elegant floral relief details.",
      "A classic polished band formed from the handle of an elegant vintage spoon.",
      "A wide statement ring featuring beautiful historical engravings.",
      "A simple, clean band ring made for everyday comfort and layering.",
      "A handcrafted signet ring with delicate vintage textures from antique silverware."
    ],
    categoryNotice: "category selected.",
    productSaved: "saved",
    productRemoved: "removed",
  },
  de: {
    instagramCta: "Folge mir auf Instagram",
    emailCta: "E-Mail schreiben",
    phoneCta: "Jetzt anrufen",
    contactKicker: "Kontakt",
    contactTitle: "Dein Wunschstück beginnt hier.",
    contactIntro: "Neu habe ich keinen klassischen Onlineshop mehr. Du kannst dir meine Produkte ganz einfach online anschauen und deine gewünschten Artikel anschliessend über das Kontaktformular bei mir anfragen.",
    contactDetails: "Ich prüfe deine Anfrage persönlich und melde mich anschliessend bei dir, um dir die Verfügbarkeit zu bestätigen und alle weiteren Details zu deiner Bestellung zu klären.",
    contactPayment: "Deine Bestellung ist erst nach deiner Bezahlung verbindlich.",
    contactSteps: "Produkte entdecken → Wunschprodukte auswählen → Anfrage ausfüllen → Persönlich bestellen",
    formTitle: "Frage deine Produkte hier an",
    formName: "Vor- und Nachname",
    formEmail: "E-Mail-Adresse",
    formAddress: "Adresse",
    formMessage: "Deine Bestellung oder Nachricht",
    formPayment: "Gewünschte Bezahlung",
    formSubmit: "Anfrage im E-Mail-Programm öffnen",
    formNote: "Das Formular öffnet eine vorbereitete E-Mail in deinem E-Mail-Programm. Bitte sende sie dort ab. Alternativ kannst du mir direkt schreiben oder anrufen.",

    benefits: [["Handgemacht", "Von Hand in kleinen Mengen gefertigt"], ["Ausgewählte Materialien", "Altes silberfarbenes Besteck"], ["Limitierte Stücke", "Jedes Fundstück inspiriert neue Kreationen"], ["Bereit zum Verschenken", "Liebevoll verpackt, bereit zum Schenken"]],
    socialFollow: "Folge mir auf",
    catalogButton: "Zum Produktekatalog",
    introKicker: "ALTES BESTECK. NEUE MÖGLICHKEITEN.",
    introTitle: "Kleine Stücke. Voller Charakter.",
    introText: "Entdecke meine einzigartigen, handgefertigten Schmuckstücke. Garantiert handgefertigt! Aus altem Besteck entsteht etwas Neues.",
    introNote: "Kostenloser Versand innerhalb der Schweiz. Du interessierst dich für ein Schmuckstück? Melde dich direkt bei mir.",
    contactButton: "Kontakt aufnehmen",
    galleryTitle: "Ein genauerer Blick",

    nav: ["Start", "Kontakt", "Produkte", "Über mich", "Galerie"],
    light: "Hell",
    dark: "Dunkel",
    homeTitle: "Handgemachter<br />Schmuck.",
    homeText:
      "Entdecke meine einzigartigen, handgefertigten Schmuckstücke. Garantiert handgefertigt!",
    shopButton: "Kollektionen entdecken",
    newArrivals: "Neu eingetroffen",
    collections: "Kollektionen entdecken",
    categories: "Produktkategorien",
    bestsellers: "Bestseller",
    viewAll: "Alle ansehen",
    ask: "Anfragen",
    footerContact: "Kontakt",
    payments: "Zahlungsmethoden: TWINT, Visa, Mastercard",
    legal: ["Datenschutz", "Geschäftsbedingungen", "Impressum"],
    page: {
      "shop.html": ["Produkte", "Handgemachte Schmuckstücke aus altem Besteck."],
      "about.html": [
        "Über mich",
        "Lerne Lari kennen.",
        [
          "Mein Name ist Larissa, werde aber am liebsten Lari genannt. Daher der Name rings_made_by_lari.",
          "Das Herstellen der Ringe und Accessoires ist ein Hobby von mir. Da ich schon immer handwerklich begabt war, freut es mich sehr, nun eigene Schmuckstücke herzustellen.",
          "Wann immer ich Zeit habe, suche ich in Brockenhäusern oder online nach altem Besteck. Dieses schneide, schleife, biege und poliere ich dann von Hand in die richtige Form.",
          "Da ich dies als Hobby mache, gibt es immer nur eine limitierte Anzahl an Ringen. Ich suche aber laufend neues Besteck für deinen Ring.",
          "Damit du keine neuen Ringe verpasst, folgst du mir am besten auf Instagram. Dort zeige ich dir, wenn neue Schmuckstücke verfügbar sind. Dein Wunschstück kannst du anschliessend direkt bei mir anfragen.",
          "Ich freue mich auf deine Anfrage.",
          "Lari :)"
],
      ],
      "gallery.html": ["Galerie", "Handgefertigte Ringe und Accessoires."],
      "loyalty.html": ["Treueprogramm", "Punkte sammeln und Prämien erhalten."],
      "privacy.html": ["Rechtliches", "Datenschutz"],
      "terms.html": ["Rechtliches", "Geschäftsbedingungen"],
      "imprint.html": ["Rechtliches", "Impressum"],
    },
    collectionDescriptions: [
      "Silberfarbene Ringe mit weichen Formen, ruhiger Struktur und angenehmem Alltagsgewicht.",
      "Kühle, silberfarbene Halsketten für schlichtes Layering und feinen Glanz.",
      "Minimale silberfarbene Armketten mit dezenter Bewegung und handgemachtem Finish.",
      "Kleine silberfarbene Ohrringe, leicht zu tragen und mit sanftem Lichtspiel.",
    ],
    productDescriptions: [
      "Ein schmaler silberfarbener Ring mit sanft gedrehter Form und polierten Kanten.",
      "Ein leuchtender silberfarbener Ring mit hellem Stein und weichem Schimmer.",
      "Ein schmaler Ring mit kleinen erhabenen Details und klarer Silhouette.",
      "Ein runder Signet-Ring mit handgemachter Oberfläche und weichen Kanten.",
      "Ein kunstvoller Ring aus einem antiken Löffel mit eleganten floralen Reliefs.",
      "Ein klassischer polierter Bandring, geformt aus dem Griff eines Vintage-Löffels.",
      "Ein breiter Statement-Ring mit wunderschönen historischen Gravuren.",
      "Ein schlichter, sauberer Bandring für täglichen Tragekomfort und Layering.",
      "Ein handgefertigter Siegelring mit zarten Mustern aus antikem Tafelsilber.",
      "Ein polierter Löffelring mit klaren Gravuren und einer angenehmen runden Form.",
      "Ein breiter Blumenring aus einem Besteckgriff mit weich polierten Kanten.",
      "Ein schlichter silberfarbener Ring mit dezentem Vintage-Muster.",
      "Ein dekorativer Ring mit historischen Mustern, von Hand geformt und poliert."
    ],
    categoryNotice: "Kategorie ausgewählt.",
    productSaved: "gespeichert",
    productRemoved: "entfernt",
  },
};

function asset(fileName) {
  return `assets/${fileName}`;
}

function renderHeroSlider() {
  if (!heroSlider || !heroDots) return;

  const slides = heroImages.slice(0, 5);

  heroSlider.innerHTML = slides
    .map(
      (image, index) => `
        <img
          class="hero-slide ${index === heroIndex ? "active" : ""}"
          src="${asset(image)}"
          alt=""
          decoding="async"
          ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
        />
      `,
    )
    .join("");

  heroDots.innerHTML = slides
    .map(
      (_, index) => `
        <button
          class="hero-dot ${index === heroIndex ? "active" : ""}"
          type="button"
          data-hero-index="${index}"
          aria-label="Show hero image ${index + 1}"
        ></button>
      `,
    )
    .join("");

  if (slides.length < 2) {
    heroDots.hidden = true;
    return;
  }

  heroDots.hidden = false;
  startHeroTimer();
}

function showHeroSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");

  if (!slides.length) return;

  heroIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === heroIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === heroIndex);
  });
}

function startHeroTimer() {
  clearInterval(heroTimer);

  heroTimer = setInterval(() => {
    showHeroSlide(heroIndex + 1);
  }, 6500);
}

function showNotice(message) {
  if (!notice) return;
  notice.textContent = message;
  notice.hidden = false;
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    notice.hidden = true;
  }, 2200);
}

function closePreview() {
  if (!previewDialog) return;
  previewDialog.close();
  body.classList.remove("sheet-open");
}

function collectionCard(item) {
  const title = activeLanguage === "de" ? item.titleDe : item.title;
  const media = item.icon
    ? `<span class="collection-icon" aria-hidden="true">${icons[item.icon]}</span>`
    : `<img src="${asset(item.image)}" alt="${productTitle(item)}" />`;
  return `
    <a class="collection-card" href="${item.href}" aria-label="${title}">
      ${media}
      <span>
        ${title}
        <svg class="collection-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </span>
    </a>
  `;
}

function productTitle(item) {
  if (activeLanguage !== "de") return item.title;
  return item.titleDe || ["Gedrehter Ring", "Mondsteinring", "Ring mit Punktmuster", "Organischer Siegelring", "Löffelring mit Blumenmuster", "Klassischer Silberring", "Breiter Löffelring", "Schlichter Bandring", "Vintage-Siegelring", "Gravierter Löffelring", "Breiter Blumenring", "Klassischer Löffelring", "Verzierter Silberring"][products.findIndex((product) => product.title === item.title)] || item.title;
}

function productCard(item) {
  const media = item.image
    ? `<img src="${asset(item.image)}" alt="${productTitle(item)}" />`
    : `<span class="collection-icon product-icon" aria-hidden="true">${icons.gift}</span>`;

  const tagText = item.tag ? (activeLanguage === "de" ? item.tagDe : item.tag) : "";
  const tagBadge = tagText
    ? `<span class="product-card-tag">${tagText}</span>`
    : "";

  const materialText = item.material ? (activeLanguage === "de" ? item.materialDe : item.material) : "";
  const materialHtml = materialText ? `<span class="product-card-material">${materialText}</span>` : "";

  return `
    <article class="product-card">
      <button class="product-preview" type="button" data-preview-type="product" data-preview-title="${item.title}" aria-label="${activeLanguage === "de" ? "Details zu" : "Preview"} ${productTitle(item)}">
        ${tagBadge}
        ${media}
      </button>
      <div class="card-copy">
        <div class="card-copy-details">
          <h3>${productTitle(item)}</h3>
          ${materialHtml}
          <p class="product-card-price">${item.price}</p>
        </div>
        <button type="button" aria-label="${activeLanguage === "de" ? "Merken:" : "Save"} ${productTitle(item)}" data-save="${item.title}">&#9825;</button>
      </div>
    </article>
  `;
}

function priceNumber(item) {
  const match = String(item.price || "").match(/[\d.]+/);
  return match ? Number(match[0]) : 0;
}

function shopLabel(option) {
  return activeLanguage === "de" ? option.labelDe : option.label;
}

function shopProductCard(item) {
  const tagText = item.tag ? (activeLanguage === "de" ? item.tagDe : item.tag) : "";
  const tagBadge = tagText
    ? `<span class="product-card-tag">${tagText}</span>`
    : "";
  const category = shopCategoryOptions.find((option) => option.id === item.category);
  const categoryText = category ? shopLabel(category) : "";

  return `
    <article class="shop-product-card">
      <button class="shop-product-preview" type="button" data-preview-type="product" data-preview-title="${item.title}" aria-label="${activeLanguage === "de" ? "Details zu" : "Preview"} ${productTitle(item)}">
        ${tagBadge}
        <img src="${asset(item.image)}" alt="${productTitle(item)}" loading="lazy" />
      </button>
      <div class="shop-product-copy">
        <p>${categoryText}</p>
        <h3>${productTitle(item)}</h3>
        <span>${item.price}</span>
        <button type="button" data-preview-type="product" data-preview-title="${item.title}">${activeLanguage === "de" ? "Details ansehen" : "View details"}</button>
      </div>
    </article>
  `;
}

function sortedShopProducts(items) {
  const sorted = [...items];
  if (shopSortMode === "new") {
    sorted.sort((a, b) => Number(b.isNewArrival) - Number(a.isNewArrival));
  }
  if (shopSortMode === "price-low") {
    sorted.sort((a, b) => priceNumber(a) - priceNumber(b));
  }
  if (shopSortMode === "price-high") {
    sorted.sort((a, b) => priceNumber(b) - priceNumber(a));
  }
  return sorted;
}

function renderShopCatalog() {
  if (!shopProductGrid) return;

  if (shopFilterForm) {
    shopFilterForm.innerHTML = `
      <fieldset>
        <legend>${activeLanguage === "de" ? "Produktart" : "Product type"}</legend>
        ${shopCategoryOptions
          .map(
            (option) => `
              <label>
                <input type="checkbox" value="${option.id}" ${shopActiveCategories.includes(option.id) ? "checked" : ""} />
                <span>${shopLabel(option)}</span>
              </label>
            `,
          )
          .join("")}
      </fieldset>
    `;
  }

  const heading = document.querySelector("#shop-catalog-title");
  const kicker = document.querySelector(".shop-kicker");
  const description = document.querySelector("#shop-catalog-description");
  const serviceNote = document.querySelector(".shop-service-note");
  const newTitle = document.querySelector("#shop-new-items-title");
  const sortLabel = document.querySelector(".shop-sort span");
  const sortOptions = shopSortSelect?.querySelectorAll("option");

  if (heading) heading.textContent = activeLanguage === "de" ? "Alle Produkte" : "All products";
  if (kicker) kicker.textContent = activeLanguage === "de" ? "Produkte" : "Products";
  if (description) {
    description.textContent =
      activeLanguage === "de"
        ? "Entdecke Ringe, Besteckstücke, Halsketten, Geschenke und Accessoires, handgefertigt von Lari."
        : "Browse rings, cutlery pieces, necklaces, gifts, and accessories handmade by Lari.";
  }
  if (serviceNote) {
    serviceNote.textContent =
      activeLanguage === "de"
        ? "Handgefertigte Ringe und Accessoires aus altem Besteck - Gratis Versand innerhalb der Schweiz"
        : "Handmade rings and accessories from vintage silver cutlery - free shipping within Switzerland";
  }
  if (newTitle) newTitle.textContent = activeLanguage === "de" ? "Neu eingetroffen" : "New arrivals";
  if (sortLabel) sortLabel.textContent = activeLanguage === "de" ? "Sortieren nach" : "Sort by";
  if (sortOptions?.length) {
    const labels =
      activeLanguage === "de"
        ? ["Empfohlen", "Neueste", "Preis aufsteigend", "Preis absteigend"]
        : ["Featured", "Newest", "Price low to high", "Price high to low"];
    sortOptions.forEach((option, index) => {
      if (labels[index]) option.textContent = labels[index];
    });
  }

  const filtered = shopActiveCategories.length
    ? shopProducts.filter((item) => shopActiveCategories.includes(item.category))
    : shopProducts;
  const renderedProducts = sortedShopProducts(filtered);
  const newItems = shopProducts.filter((item) => item.isNewArrival).slice(0, 2);

  if (shopNewItems) {
    shopNewItems.hidden = newItems.length === 0;
  }
  if (shopNewItemsRow) {
    shopNewItemsRow.innerHTML = newItems.map(shopProductCard).join("");
  }
  if (shopNewItemsCount) {
    shopNewItemsCount.textContent =
      newItems.length === 1
        ? activeLanguage === "de"
          ? "1 Produkt"
          : "1 product"
        : `${newItems.length} ${activeLanguage === "de" ? "Produkte" : "products"}`;
  }
  if (shopProductCount) {
    const countText = activeLanguage === "de" ? "Produkte" : "products";
    shopProductCount.textContent = `${renderedProducts.length} ${countText}`;
  }
  shopProductGrid.innerHTML = renderedProducts.map(shopProductCard).join("");
}

function findPreviewItem(title, type) {
  const source =
    type === "product"
      ? [...shopProducts, ...products, ...collectionProducts, ...giftProducts]
      : collections;
  return source.find((item) => item.title === title);
}

function openPreview(item, type) {
  if (!previewDialog) return;
  const gallery = item.image
    ? [item.image]
    : [];
  let thumbs = previewDialog.querySelector(".preview-thumbs");
  if (!thumbs) {
    previewImage.insertAdjacentHTML(
      "afterend",
      '<div class="preview-thumbs" aria-label="Image gallery"></div>',
    );
    thumbs = previewDialog.querySelector(".preview-thumbs");
  }

  // Dynamic Material Section
  let materialEl = previewDialog.querySelector(".preview-material");
  if (!materialEl) {
    previewPrice.insertAdjacentHTML(
      "afterend",
      `<div class="preview-material">
        <h3>MATERIAL</h3>
        <p></p>
      </div>`,
    );
    materialEl = previewDialog.querySelector(".preview-material");
  }
  const materialText =
    activeLanguage === "de"
      ? item.materialDe || "Versilbertes Vintage-Besteck"
      : item.material || "Silver-plated Vintage Cutlery";
  materialEl.querySelector("h3").textContent =
    activeLanguage === "de" ? "MATERIAL" : "MATERIAL";
  materialEl.querySelector("p").textContent = materialText;

  // Dynamic Description Header
  let descLabel = previewDialog.querySelector(".preview-desc-label");
  if (!descLabel) {
    previewDescription.insertAdjacentHTML(
      "beforebegin",
      `<h3 class="preview-desc-label"></h3>`,
    );
    descLabel = previewDialog.querySelector(".preview-desc-label");
  }
  descLabel.textContent =
    activeLanguage === "de" ? "BESCHREIBUNG" : "DESCRIPTION";

  const actions = previewDialog.querySelector(".preview-actions");
  actions.innerHTML = `<a class="button" href="contact.html?product=${encodeURIComponent(productTitle(item))}">${copy[activeLanguage].ask}</a>`;

  // Set image source and alt
  if (item.image) {
    previewImage.hidden = false;
    previewImage.src = asset(item.image);
    previewImage.alt = productTitle(item);
  } else {
    previewImage.hidden = true;
    previewImage.removeAttribute("src");
    previewImage.alt = "";
  }

  thumbs.hidden = gallery.length <= 1;
  thumbs.innerHTML = gallery
    .map(
      (image, index) =>
        `<button type="button" class="${index === 0 ? "active" : ""}" data-preview-image="${image}">
          <img src="${asset(image)}" alt="${item.title} view ${index + 1}" />
        </button>`,
    )
    .join("");

  previewKicker.textContent =
    type === "product" ? (activeLanguage === "de" ? "Handgemacht von Lari" : "Handmade by Lari") : copy[activeLanguage].collections;
  previewTitle.textContent = productTitle(item);
  previewPrice.textContent = item.price || "";
  previewPrice.hidden = !item.price;
  previewDescription.textContent =
    (activeLanguage === "de"
      ? item.descriptionDe || copy.de.productDescriptions[products.findIndex((product) => product.title === item.title)]
      : item.description) ||
    (activeLanguage === "de" ? "Handgefertigtes silberfarbenes Schmuckstück von Rings made by Lari." : "Handmade silver-toned piece from Rings made by Lari.");

  previewDialog.showModal();
  body.classList.add("sheet-open");
}

function benefitItem([title, text]) {
  return `
    <div class="benefit">
      <strong>${title}</strong>
      <p>${text}</p>
    </div>
  `;
}

function categoryLink(title) {
  const collection = collections.find((item) => item.title === title);
  const label = activeLanguage === "de" ? collection.titleDe : collection.title;
  return `<a href="${collection.href}">${label}</a>`;
}

function renderLanguageSwitcher() {
  document.querySelectorAll(".header-tools").forEach((tools) => {
    if (tools.querySelector(".language-switcher")) return;
    tools.insertAdjacentHTML(
      "afterbegin",
      `<div class="language-switcher" role="group" aria-label="Sprache">
        <button type="button" data-lang-choice="en">EN</button>
        <button type="button" data-lang-choice="de">DE</button>
      </div>`,
    );
  });
}

function renderOldGallery() {
  if (!oldGallery) return;
  oldGallery.innerHTML = oldSiteMedia.slice(0, Number(oldGallery.dataset.limit) || oldSiteMedia.length)
    .map((file, index) => {
      const isVideo = /\.(mp4|webm|mov)$/i.test(file);
      const media = isVideo
        ? `<video src="${file}" muted playsinline></video>`
        : `<img src="${file}" alt="${activeLanguage === "de" ? "Schmuckdetail" : "Jewelry detail"} ${index + 1}" loading="lazy" />`;
      return `
        <button class="gallery-item-btn" type="button" data-index="${index}" aria-label="${activeLanguage === "de" ? "Bild öffnen" : "Open view"} ${index + 1}">
          ${media}
        </button>
      `;
    })
    .join("");

  renderGalleryLightboxMarkup();
}

function pageName() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function setPageText(language) {
  const t = copy[language];
  document.documentElement.lang = language;
  document.querySelectorAll("[data-copy]").forEach((element) => { element.textContent = t[element.dataset.copy]; });
  document.querySelectorAll(".nav a").forEach((link, index) => {
    if (t.nav[index]) link.textContent = t.nav[index];
    if (link.getAttribute("href") === pageName()) link.setAttribute("aria-current", "page");
  });
  themeButtons.forEach((button) => {
    button.textContent =
      button.dataset.themeChoice === "light" ? t.light : t.dark;
  });
  document.querySelectorAll("[data-lang-choice]").forEach((button) => {
    const isActive = button.dataset.langChoice === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll(".legal-links a").forEach((link, index) => {
    if (t.legal[index]) link.textContent = t.legal[index];
  });
  document.querySelectorAll("address strong").forEach((label) => {
    label.textContent = t.footerContact;
  });
  document.querySelectorAll(".payments").forEach((label) => {
    label.textContent = t.payments;
  });

  // Dynamic Social Links injection
  document.querySelectorAll(".footer-info").forEach((footerInfo) => {
    let socials = footerInfo.querySelector(".footer-socials");
    if (!socials) {
      socials = document.createElement("div");
      socials.className = "footer-socials";
      const address = footerInfo.querySelector("address");
      if (address) {
        address.insertAdjacentElement("afterend", socials);
      } else {
        footerInfo.insertAdjacentElement("afterbegin", socials);
      }
    }
    socials.innerHTML = `
      <a href="https://instagram.com/rings_made_by_lari" target="_blank" aria-label="Instagram" class="social-link">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a href="https://www.facebook.com/rings_made_by_lari" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-link">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9z"/></svg>
      </a>
    `;
  });

  const heroTitle = document.querySelector("#hero-title");
  if (heroTitle) heroTitle.innerHTML = t.homeTitle;
  const heroText = document.querySelector(".hero-copy p");
  if (heroText) heroText.textContent = t.homeText;
  document.querySelectorAll(".button").forEach((button) => {
    if (button.getAttribute("href") === "#bestsellers")
      button.textContent = t.shopButton;
    if (button.getAttribute("href") === "#contact") button.textContent = t.ask;
  });
  const collectionsTitle = document.querySelector("#collections-title");
  if (collectionsTitle) collectionsTitle.textContent = t.collections;
  const newArrivalsTitle = document.querySelector("#new-arrivals-title");
  if (newArrivalsTitle) newArrivalsTitle.textContent = t.newArrivals;
  const categoryTitle = document.querySelector("#shop-categories-title");
  if (categoryTitle) categoryTitle.textContent = t.categories;
  const bestsellersTitle = document.querySelector("#bestsellers-title");
  if (bestsellersTitle) bestsellersTitle.textContent = t.bestsellers;
  document.querySelectorAll(".section-head a").forEach((link) => {
    link.firstChild.textContent = `${t.viewAll} `;
  });

  const page = t.page[pageName()];
  const pageHero = document.querySelector(".page-hero");
  if (detailPageCollection && pageHero) {
    const kicker = pageHero.querySelector(":scope > p");
    const title = pageHero.querySelector("h1");
    const paragraph = pageHero.querySelector(".page-copy p");
    if (kicker)
      kicker.textContent = language === "de" ? "Kollektion" : "Collection";
    if (title)
      title.textContent =
        language === "de"
          ? detailPageCollection.titleDe
          : detailPageCollection.title;
    if (paragraph) {
      paragraph.textContent =
        language === "de"
          ? detailPageCollection.descriptionDe
          : detailPageCollection.description;
    }
  } else if (page && pageHero) {
    const kicker = pageHero.querySelector(":scope > p");
    const title = pageHero.querySelector("h1");
    if (kicker) kicker.textContent = page[0];
    if (title) title.textContent = page[1];
    if (page[2]) {
      const paragraphs = pageHero.querySelectorAll(".page-copy p");
      page[2].forEach((text, index) => {
        if (paragraphs[index]) paragraphs[index].textContent = text;
      });
    }
  }
}

function renderCards() {
  collections.forEach((item, index) => {
    if (copy[activeLanguage].collectionDescriptions[index]) {
      item.description = copy[activeLanguage].collectionDescriptions[index];
    }
  });
  products.forEach((item, index) => {
    item.description = copy[activeLanguage].productDescriptions[index];
  });
  if (collectionsGrid)
    collectionsGrid.innerHTML = collections.slice(0, 12).map(collectionCard).join("");
  if (categoryList)
    categoryList.innerHTML = categories.map(categoryLink).join("");
  if (newArrivalsGrid) {
    const newItems = shopProducts.filter((item) => item.isNewArrival).slice(0, 2);
    const newSection = document.querySelector("#new-arrivals");
    if (newSection) newSection.hidden = newItems.length === 0;
    newArrivalsGrid.innerHTML = newItems.map(shopProductCard).join("");
  }
  if (productsGrid) {
    const selectedBestsellers = shopProducts.slice(0, 8);
    productsGrid.innerHTML = selectedBestsellers.map(shopProductCard).join("");
  }
  if (collectionProductsGrid) {
    const source =
      pageName() === "collection-gift-cards.html"
        ? giftProducts
        : collectionProducts;
    collectionProductsGrid.innerHTML = source.map(productCard).join("");
  }
  renderShopCatalog();
  if (benefitsRow) benefitsRow.innerHTML = (copy[activeLanguage].benefits || benefits).map(benefitItem).join("");
  renderOldGallery();
}

function setTheme(theme) {
  activeTheme = theme;
  localStorage.setItem("lari-theme", theme);
  body.dataset.theme = theme;
  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeChoice === theme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderCards();
  updateSettingsMenuState();
}

function setLanguage(language) {
  activeLanguage = language;
  localStorage.setItem("lari-language-v2", language);
  injectSectionDividers();
  setPageText(language);
  renderCards();
  updateBrandLogo();
  updateFavicon();
  renderHeaderSettings();
  updateSettingsMenuState();
  updateSectionDescriptions();
}

function updateBrandLogo() {
  const brand = document.querySelector(".brand");
  if (brand) {
    brand.innerHTML = `<img src="assets/old-site/logo_scaled.webp" alt="Rings made by Lari" class="logo-image" />`;
    brand.setAttribute("aria-label", activeLanguage === "de" ? "Rings made by Lari – Startseite" : "Rings made by Lari home");
    brand.style.display = "flex";
    brand.style.alignItems = "center";
  }
}

function updateFavicon() {
  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/webp";
    document.head.appendChild(favicon);
  }
  favicon.href = "assets/old-site/logo.webp";
}

function renderHeaderSettings() {
  const tools = document.querySelector(".header-tools");
  if (!tools) return;

  // Insert settings toggle button if it doesn't exist
  if (!tools.querySelector(".settings-toggle")) {
    const settingsButtonHtml = `
      <button class="settings-toggle" type="button" aria-label="Einstellungen" data-action="settings">
        ${icons.settings}
      </button>
    `;
    tools.insertAdjacentHTML("beforeend", settingsButtonHtml);

    // Set up click listener for settings menu toggle
    const toggle = tools.querySelector(".settings-toggle");
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = document.querySelector(".settings-menu");
      if (menu) {
        const isOpen = !menu.hidden;
        menu.hidden = isOpen;
        toggle.classList.toggle("active", !isOpen);
      }
    });
  }

  // Insert settings menu overlay if it doesn't exist
  let settingsMenu = document.querySelector(".settings-menu");
  if (!settingsMenu) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="settings-menu" id="settings-menu" hidden>
        <div class="settings-section">
          <h4 class="lang-title">Language</h4>
          <div class="settings-buttons">
            <button type="button" data-lang-set="en">EN</button>
            <button type="button" data-lang-set="de">DE</button>
          </div>
        </div>
        <div class="settings-section">
          <h4 class="theme-title">Theme</h4>
          <div class="settings-buttons">
            <button type="button" data-theme-set="light">Light</button>
            <button type="button" data-theme-set="dark">Dark</button>
          </div>
        </div>
        <div class="settings-section admin-section">
          <button type="button" class="admin-login-button">
            <span class="admin-icon">${icons.user}</span>
            <div class="admin-label">
              <strong>Admin Portal</strong>
              <small>Login placeholder</small>
            </div>
          </button>
        </div>
      </div>`,
    );
    settingsMenu = document.querySelector(".settings-menu");

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      const toggle = document.querySelector(".settings-toggle");
      if (settingsMenu && !settingsMenu.hidden) {
        if (
          !settingsMenu.contains(e.target) &&
          (!toggle || !toggle.contains(e.target))
        ) {
          settingsMenu.hidden = true;
          toggle?.classList.remove("active");
        }
      }
    });

    // Menu settings interaction click listeners
    settingsMenu.addEventListener("click", (e) => {
      const langBtn = e.target.closest("[data-lang-set]");
      if (langBtn) {
        setLanguage(langBtn.dataset.langSet);
      }
      const themeBtn = e.target.closest("[data-theme-set]");
      if (themeBtn) {
        setTheme(themeBtn.dataset.themeSet);
      }
      const adminBtn = e.target.closest(".admin-login-button");
      if (adminBtn) {
        showNotice(
          activeLanguage === "de"
            ? "Admin-Login folgt in Kürze."
            : "Admin portal login coming soon.",
        );
        settingsMenu.hidden = true;
        const toggle = document.querySelector(".settings-toggle");
        toggle?.classList.remove("active");
      }
    });
  }
}

function updateSettingsMenuState() {
  const settingsMenu = document.querySelector(".settings-menu");
  if (!settingsMenu) return;

  // Set active language button style state
  settingsMenu.querySelectorAll("[data-lang-set]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langSet === activeLanguage);
  });

  // Set active theme button style state
  settingsMenu.querySelectorAll("[data-theme-set]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.themeSet === activeTheme);
  });

  // Localize text variables inside settings menu
  const langTitle = settingsMenu.querySelector(".lang-title");
  if (langTitle) {
    langTitle.textContent = activeLanguage === "de" ? "Sprache" : "Language";
  }
  const themeTitle = settingsMenu.querySelector(".theme-title");
  if (themeTitle) {
    themeTitle.textContent = activeLanguage === "de" ? "Modus" : "Theme";
  }
  const lightBtn = settingsMenu.querySelector('[data-theme-set="light"]');
  if (lightBtn) {
    lightBtn.textContent = activeLanguage === "de" ? "Hell" : "Light";
  }
  const darkBtn = settingsMenu.querySelector('[data-theme-set="dark"]');
  if (darkBtn) {
    darkBtn.textContent = activeLanguage === "de" ? "Dunkel" : "Dark";
  }
  const adminTitle = settingsMenu.querySelector(".admin-label strong");
  if (adminTitle) {
    adminTitle.textContent =
      activeLanguage === "de" ? "Admin-Bereich" : "Admin Portal";
  }
  const adminSubtitle = settingsMenu.querySelector(".admin-label small");
  if (adminSubtitle) {
    adminSubtitle.textContent =
      activeLanguage === "de" ? "Platzhalter Login" : "Login placeholder";
  }
}

function updateSectionDescriptions() {
  const newArrivalsHead = document.querySelector("#new-arrivals .section-head");
  if (newArrivalsHead) {
    newArrivalsHead.innerHTML = `
      <h2 id="new-arrivals-title">${activeLanguage === "de" ? "Neu eingetroffen" : "New arrivals"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage === "de" ? "Frisch eingetroffene Einzelstücke und neue handgeformte Silberringe." : "Fresh one-of-a-kind pieces and newly finished hand-shaped silver rings."}</p>
      <a href="#new-arrivals-grid" class="outline-button">
        ${activeLanguage === "de" ? "NEUHEITEN ANSEHEN" : "VIEW NEW ARRIVALS"}
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;
  }

  const collectionsHead = document.querySelector("#collections .section-head");
  if (collectionsHead) {
    collectionsHead.innerHTML = `
      <h2 id="collections-title">${activeLanguage === "de" ? "Kollektionen entdecken" : "Discover the collections"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage === "de" ? "Entdecke unsere einzigartigen Schmuckkollektionen, handgefertigt aus ausgewähltem Vintage-Silberbesteck." : "Explore our unique jewelry collections hand-crafted from selected vintage silver cutlery."}</p>
      <a href="shop.html" class="outline-button">
        ${activeLanguage === "de" ? "ALLE KOLLEKTIONEN ANSEHEN" : "VIEW ALL COLLECTIONS"}
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;
  }

  const bestsellersHead = document.querySelector("#bestsellers .section-head");
  if (bestsellersHead) {
    bestsellersHead.innerHTML = `
      <span class="section-subtitle">${activeLanguage === "de" ? "UNSERE BESTSELLER" : "OUR BESTSELLERS"}</span>
      <h2 id="bestsellers-title">${activeLanguage === "de" ? "Bestseller" : "Bestsellers"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage === "de" ? "Stöbere in den beliebtesten Schmuckstücken und handgeformten Silberringen unserer Kunden." : "Browse our customer favorites and most popular hand-shaped silver rings."}</p>
      <a href="shop.html" class="outline-button">
        ${activeLanguage === "de" ? "ALLE PRODUKTE ANSEHEN" : "VIEW ALL PRODUCTS"}
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;
  }

  const categoriesHead = document.querySelector("#shop-categories .section-head");
  if (categoriesHead) {
    categoriesHead.innerHTML = `
      <span class="section-subtitle">${activeLanguage === "de" ? "KATEGORIEN ENTDECKEN" : "EXPLORE CATEGORIES"}</span>
      <h2 id="shop-categories-title">${activeLanguage === "de" ? "Produktkategorien" : "Product categories"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage === "de" ? "Durchsuche Schmuck und Accessoires nach Produktkategorie." : "Browse jewelry and accessories by product type."}</p>
      <a href="shop.html" class="outline-button">
        ${activeLanguage === "de" ? "ALLE KATEGORIEN ANSEHEN" : "VIEW ALL CATEGORIES"}
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;
  }
}

document.querySelectorAll("[data-icon]").forEach((button) => {
  button.insertAdjacentHTML("afterbegin", icons[button.dataset.icon]);
});

renderLanguageSwitcher();
renderHeroSlider();

if (heroDots) {
  heroDots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-hero-index]");
    if (!dot) return;

    showHeroSlide(Number(dot.dataset.heroIndex));
    startHeroTimer();
  });
}

document.querySelectorAll("[data-lang-choice]").forEach((button) => {
  button.addEventListener("click", () =>
    setLanguage(button.dataset.langChoice),
  );
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const labels = {
      search: "Search is ready.",
      account: "Account area opened.",
    };
    showNotice(labels[button.dataset.action]);
  });
});

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (nav) {
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function handleProductGridClick(event) {
  const previewButton = event.target.closest("[data-preview-title]");
  if (previewButton) {
    const item = findPreviewItem(
      previewButton.dataset.previewTitle,
      previewButton.dataset.previewType,
    );
    if (item) openPreview(item, previewButton.dataset.previewType);
    return;
  }

  const button = event.target.closest("[data-save]");
  if (!button) return;
  button.classList.toggle("saved");
  button.innerHTML = button.classList.contains("saved") ? "&#9829;" : "&#9825;";
  showNotice(
    `${button.dataset.save} ${
      button.classList.contains("saved")
        ? copy[activeLanguage].productSaved
        : copy[activeLanguage].productRemoved
    }.`,
  );
}

if (productsGrid) {
  productsGrid.addEventListener("click", handleShopProductClick);
}

if (newArrivalsGrid) {
  newArrivalsGrid.addEventListener("click", handleShopProductClick);
}

if (collectionProductsGrid) {
  collectionProductsGrid.addEventListener("click", handleProductGridClick);
}

if (shopProductGrid) {
  shopProductGrid.addEventListener("click", handleShopProductClick);
}

function handleShopProductClick(event) {
  handleProductGridClick(event);
}

if (shopNewItemsRow) {
  shopNewItemsRow.addEventListener("click", handleShopProductClick);
}

if (shopFilterForm) {
  shopFilterForm.addEventListener("change", () => {
    shopActiveCategories = Array.from(
      shopFilterForm.querySelectorAll("input:checked"),
      (input) => input.value,
    );
    renderShopCatalog();
  });
}

if (shopSortSelect) {
  shopSortSelect.addEventListener("change", () => {
    shopSortMode = shopSortSelect.value;
    renderShopCatalog();
  });
}

if (collectionsGrid) {
  collectionsGrid.addEventListener("click", (event) => {
    const previewButton = event.target.closest("[data-preview-title]");
    if (!previewButton) return;
    const item = findPreviewItem(
      previewButton.dataset.previewTitle,
      previewButton.dataset.previewType,
    );
    if (item) openPreview(item, previewButton.dataset.previewType);
  });
}

if (oldGallery) {
  oldGallery.addEventListener("click", (event) => {
    const btn = event.target.closest(".gallery-item-btn");
    if (btn) {
      const index = parseInt(btn.dataset.index, 10);
      if (!isNaN(index)) openLightbox(index);
    }
  });
}

if (categoryList) {
  categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    showNotice(
      `${button.dataset.category} ${copy[activeLanguage].categoryNotice}`,
    );
    document
      .querySelector("#bestsellers")
      ?.scrollIntoView({ behavior: "smooth" });
  });
}

if (previewClose) previewClose.addEventListener("click", closePreview);

if (previewDialog) {
  previewDialog.addEventListener("close", () => body.classList.remove("sheet-open"));
  previewDialog.addEventListener("click", (event) => {
    const thumb = event.target.closest("[data-preview-image]");
    if (thumb) {
      previewImage.src = asset(thumb.dataset.previewImage);
      previewDialog
        .querySelectorAll(".preview-thumbs button")
        .forEach((button) => {
          button.classList.toggle("active", button === thumb);
        });
      return;
    }

    if (event.target === previewDialog) closePreview();
  });
}

// Gallery Lightbox engine
let activeGalleryIndex = -1;

function openLightbox(index) {
  const lightbox = document.getElementById("gallery-lightbox");
  const content = lightbox?.querySelector(".lightbox-content");
  if (!lightbox || !content) return;

  activeGalleryIndex = index;
  const file = oldSiteMedia[index];
  const isVideo = /\.(mp4|webm|mov)$/i.test(file);

  if (isVideo) {
    content.innerHTML = `<video src="${file}" controls autoplay loop muted playsinline></video>`;
  } else {
    content.innerHTML = `<img src="${file}" alt="${activeLanguage === "de" ? "Galeriebild" : "Gallery image"} ${index + 1}" />`;
  }

  lightbox.hidden = false;
  document.body.classList.add("sheet-open");
}

function closeLightbox() {
  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.classList.remove("sheet-open");
  const content = lightbox.querySelector(".lightbox-content");
  if (content) content.innerHTML = "";
}

function navigateLightbox(direction) {
  if (activeGalleryIndex === -1) return;
  let nextIndex = activeGalleryIndex + direction;
  if (nextIndex < 0) nextIndex = oldSiteMedia.length - 1;
  if (nextIndex >= oldSiteMedia.length) nextIndex = 0;
  openLightbox(nextIndex);
}

function renderGalleryLightboxMarkup() {
  if (document.querySelector(".gallery-lightbox")) return;
  const markup = `
    <div class="gallery-lightbox" id="gallery-lightbox" hidden>
      <button class="lightbox-close" type="button" aria-label="Schliessen">&times;</button>
      <button class="lightbox-prev" type="button" aria-label="Vorheriges Bild">&lsaquo;</button>
      <div class="lightbox-content"></div>
      <button class="lightbox-next" type="button" aria-label="Nächstes Bild">&rsaquo;</button>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", markup);

  const lightbox = document.getElementById("gallery-lightbox");
  if (!lightbox) return;

  lightbox.addEventListener("click", (e) => {
    if (e.target.closest(".lightbox-close") || e.target === lightbox) {
      closeLightbox();
    }
  });

  const prevBtn = lightbox.querySelector(".lightbox-prev");
  const nextBtn = lightbox.querySelector(".lightbox-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(-1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateLightbox(1);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function injectSectionDividers() {
  const addDividerBefore = (element) => {
    if (element && !element.previousElementSibling?.classList.contains("section-divider")) {
      const divider = document.createElement("div");
      divider.className = "section-divider";
      divider.setAttribute("aria-hidden", "true");
      element.parentNode.insertBefore(divider, element);
    }
  };

  const addDividerAfter = (element) => {
    if (element && !element.nextElementSibling?.classList.contains("section-divider")) {
      const divider = document.createElement("div");
      divider.className = "section-divider";
      divider.setAttribute("aria-hidden", "true");
      element.parentNode.insertBefore(divider, element.nextElementSibling);
    }
  };

  const sections = document.querySelectorAll(".content-section, .editorial-section");
  sections.forEach((section, index) => {
    if (index > 0) addDividerBefore(section);
  });

  addDividerAfter(document.querySelector("#bestsellers"));
}

setTheme(activeTheme);
setLanguage(activeLanguage);

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  const selectedProduct = new URLSearchParams(window.location.search).get("product");
  if (selectedProduct) contactForm.elements.message.value = selectedProduct;
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const message = [
      `Name: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Adresse: ${data.get("address")}`,
      `Gewünschte Bezahlung: ${data.get("payment")}`,
      "", data.get("message"),
    ].join("\n");
    // ponytail: GitHub Pages has no form backend; use email drafts until a delivery service is configured.
    window.location.href = `mailto:rings_made_by_lari@hotmail.com?subject=${encodeURIComponent("Anfrage – Rings made by Lari")}&body=${encodeURIComponent(message)}`;
  });
}
