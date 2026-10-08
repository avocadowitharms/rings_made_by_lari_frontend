const collections = [
  [
    "Rings",
    "Ringe",
    "collection-ready-rings.html",
    "old-002.jpg",
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

const collectionProducts = catalogProducts.filter(item => item.categories.includes("rings"));

const giftProducts = [];

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

const products = [];

const shopCategoryOptions = [
  ["narrow-rings", "Narrow rings", "Schmale Ringe"],
  ["medium-rings", "Medium rings", "Mittlere Ringe"],
  ["wide-rings", "Wide rings", "Breite Ringe"],
  ["rings", "Rings", "Ringe"],
  ["bracelets", "Bracelets", "Armketten"],
  ["cutlery", "Cutlery", "Besteck"],
  ["brooches", "Brooches", "Broschen"],
  ["gifts", "Gifts", "Geschenke"],
  ["lucky-charms", "Lucky charms", "Glücksbringer"],
  ["necklaces", "Necklaces", "Halsketten"],
  ["accessories", "Accessories", "Zubehör"],
].map(([id, label, labelDe]) => ({ id, label, labelDe }));

const shopProducts = catalogProducts;
function collectionItems(page) {
  const category = page.replace("collection-", "").replace(".html", "");
  if (["ready-rings", "rings-size"].includes(category)) return collectionProducts;
  if (category === "ring-size-measurer") return catalogProducts.filter(item => item.categories.includes("accessories"));
  if (category === "gift-cards") return catalogProducts.filter(item => item.title.startsWith("Gutschein"));
  if (category === "keychains") return catalogProducts.filter(item => item.title.includes("Schlüsselanhänger"));
  return catalogProducts.filter(item => item.categories.includes(category));
}
collections.forEach(collection => {
  const first = collectionItems(collection.href)[0];
  if (first) collection.image = first.image;
});

const detailPageCollection = collections.find(
  (collection) => (pageName() === "collection-rings-size.html" ? "collection-ready-rings.html" : pageName()) === collection.href,
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

let activeTheme = localStorage.getItem("lari-theme") === "dark" ? "dark" : "light";
let activeLanguage = ["de", "en", "fr"].includes(localStorage.getItem("lari-language-v2")) ? localStorage.getItem("lari-language-v2") : "de";
let noticeTimer;
let heroIndex = 0;
let heroTimer;
let shopActiveCategories = [];
let shopSortMode = "featured";

const heroImages = ["old-site/e5a4ea_fefc2c59b94b41b798538316f51f7e24~mv2.jpg"];

const copy = {
  en: {
    story1: "In their new home",
    story2: "A creative companion",
    story3: "A personal commission",
    story4: "Working from home",
    story5: "By the sea",
    story6: "Your favourite ring",
    story7: "10 out of 10 – your feedback",

    proofKicker: "FROM OUR COMMUNITY",
    proofTitle: "Worn by you. Loved by you.",
    proofText: "Your photos, reposts and feedback make these pieces even more special. I collect your moments in the Instagram highlight “KUNDEN”.",
    proofCta: "See feedback on Instagram",
    proofOpen: "Open highlight ↗",

    mobileContact: "Contact form",
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
    introNote: "Interested in a piece? Get in touch with me directly.",
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
    story1: "Im neuen Zuhause",
    story2: "Beim Kreativtag",
    story3: "Ein persönlicher Spezialauftrag",
    story4: "Im Homeoffice",
    story5: "Begleiter am Meer",
    story6: "Euer Lieblingsring",
    story7: "10 von 10 – euer Feedback",

    proofKicker: "AUS EURER COMMUNITY",
    proofTitle: "Von euch getragen. Von euch geliebt.",
    proofText: "Eure Bilder, Reposts und Rückmeldungen machen meine Schmuckstücke noch besonderer. Im Instagram-Highlight «KUNDEN» sammle ich eure Momente.",
    proofCta: "Feedback auf Instagram ansehen",
    proofOpen: "Highlight öffnen ↗",

    mobileContact: "Kontaktformular",
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
    introNote: "Du interessierst dich für ein Schmuckstück? Melde dich direkt bei mir.",
    contactButton: "Kontakt aufnehmen",
    galleryTitle: "Ein genauerer Blick",

    nav: ["Start", "Kontakt", "Produkte", "Über mich", "Galerie"],
    light: "Hell",
    dark: "Dunkel",
    homeTitle: "Handgemachter<br />Schmuck aus<br />altem Besteck.",
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

copy.fr = copy.de;

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
  const title = activeLanguage !== "en" ? item.titleDe : item.title;
  const media = item.icon
    ? `<span class="collection-icon" aria-hidden="true">${icons[item.icon]}</span>`
    : `<img src="${asset(item.image)}" alt="${escapeHtml(productTitle(item))}" loading="lazy" decoding="async" />`;
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
  return activeLanguage === "en" ? item.titleEn || item.title : item.titleDe || item.title;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"}[char]));
}
function productPrice(item) {
  return `${item.available === false ? (activeLanguage === "en" ? "Sold out · " : "Ausverkauft · ") : ""}${item.originalPrice ? `<del>CHF ${item.originalPrice.toFixed(2)}</del> ` : ""}${item.price}`;
}

function productCard(item) {
  const media = item.image
    ? `<img src="${asset(item.image)}" alt="${escapeHtml(productTitle(item))}" loading="lazy" decoding="async" />`
    : `<span class="collection-icon product-icon" aria-hidden="true">${icons.gift}</span>`;

  const tagText = item.tag ? (activeLanguage !== "en" ? item.tagDe : item.tag) : "";
  const tagBadge = tagText
    ? `<span class="product-card-tag">${escapeHtml(tagText)}</span>`
    : "";

  const materialText = item.material ? (activeLanguage !== "en" ? item.materialDe : item.material) : "";
  const materialHtml = materialText ? `<span class="product-card-material">${materialText}</span>` : "";

  return `
    <article class="product-card">
      <button class="product-preview" type="button" data-preview-type="product" data-preview-id="${item.id || item.title}" aria-label="${activeLanguage !== "en" ? "Details zu" : "Preview"} ${escapeHtml(productTitle(item))}">
        ${tagBadge}
        ${media}
      </button>
      <div class="card-copy">
        <div class="card-copy-details">
          <h3>${escapeHtml(productTitle(item))}</h3>
          ${materialHtml}
          <p class="product-card-price">${productPrice(item)}</p>
        </div>
        <button type="button" aria-label="${activeLanguage !== "en" ? "Merken:" : "Save"} ${escapeHtml(productTitle(item))}" data-save="${item.id}">&#9825;</button>
      </div>
    </article>
  `;
}

function priceNumber(item) {
  const match = String(item.price || "").match(/[\d.]+/);
  return match ? Number(match[0]) : 0;
}

function shopLabel(option) {
  return activeLanguage !== "en" ? option.labelDe : option.label;
}

function shopProductCard(item) {
  const tagText = item.tag ? (activeLanguage !== "en" ? item.tagDe : item.tag) : "";
  const tagBadge = tagText
    ? `<span class="product-card-tag">${escapeHtml(tagText)}</span>`
    : "";
  const category = shopCategoryOptions.find((option) => option.id === item.category);
  const categoryText = category ? shopLabel(category) : "";

  return `
    <article class="shop-product-card">
      <button class="shop-product-preview" type="button" data-preview-type="product" data-preview-id="${item.id || item.title}" aria-label="${activeLanguage !== "en" ? "Details zu" : "Preview"} ${escapeHtml(productTitle(item))}">
        ${tagBadge}
        <img src="${asset(item.image)}" alt="${escapeHtml(productTitle(item))}" loading="lazy" />
      </button>
      <div class="shop-product-copy">
        <p>${categoryText}</p>
        <h3>${escapeHtml(productTitle(item))}</h3>
        <span>${productPrice(item)}</span>
        <button type="button" data-preview-type="product" data-preview-id="${item.id || item.title}">${activeLanguage !== "en" ? "Details ansehen" : "View details"}</button>
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
        <legend>${activeLanguage !== "en" ? "Produktart" : "Product type"}</legend>
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

  document.querySelector("#shop-filter-title").textContent = activeLanguage === "en" ? "Filter by" : "Filtern nach";
  const heading = document.querySelector("#shop-catalog-title");
  const kicker = document.querySelector(".shop-kicker");
  const description = document.querySelector("#shop-catalog-description");
  const serviceNote = document.querySelector(".shop-service-note");
  const newTitle = document.querySelector("#shop-new-items-title");
  const sortLabel = document.querySelector(".shop-sort span");
  const sortOptions = shopSortSelect?.querySelectorAll("option");

  if (heading) heading.textContent = activeLanguage !== "en" ? "Alle Produkte" : "All products";
  if (kicker) kicker.textContent = activeLanguage !== "en" ? "Produkte" : "Products";
  if (description) {
    description.textContent =
      activeLanguage !== "en"
        ? "Entdecke Ringe, Besteckstücke, Halsketten, Geschenke und Accessoires, handgefertigt von Lari."
        : "Browse rings, cutlery pieces, necklaces, gifts, and accessories handmade by Lari.";
  }
  if (serviceNote) {
    serviceNote.textContent =
      activeLanguage !== "en"
        ? "Handgefertigte Ringe und Accessoires aus altem Besteck"
        : "Handmade rings and accessories from vintage silver cutlery";
  }
  if (newTitle) newTitle.textContent = activeLanguage !== "en" ? "Neu eingetroffen" : "New arrivals";
  if (sortLabel) sortLabel.textContent = activeLanguage !== "en" ? "Sortieren nach" : "Sort by";
  if (sortOptions?.length) {
    const labels =
      activeLanguage !== "en"
        ? ["Empfohlen", "Neueste", "Preis aufsteigend", "Preis absteigend"]
        : ["Featured", "Newest", "Price low to high", "Price high to low"];
    sortOptions.forEach((option, index) => {
      if (labels[index]) option.textContent = labels[index];
    });
  }

  const filtered = shopActiveCategories.length
    ? shopProducts.filter((item) => item.categories.some(category => shopActiveCategories.includes(category)))
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
        ? activeLanguage !== "en"
          ? "1 Produkt"
          : "1 product"
        : `${newItems.length} ${activeLanguage !== "en" ? "Produkte" : "products"}`;
  }
  if (shopProductCount) {
    const countText = activeLanguage !== "en" ? "Produkte" : "products";
    shopProductCount.textContent = `${renderedProducts.length} ${countText}`;
  }
  shopProductGrid.innerHTML = renderedProducts.map(shopProductCard).join("");
}

function findPreviewItem(title, type) {
  const source =
    type === "product"
      ? [...shopProducts, ...products, ...collectionProducts, ...giftProducts]
      : collections;
  return source.find((item) => (item.id || item.title) === title);
}

function openPreview(item, type) {
  if (!previewDialog) return;
  const gallery = item.gallery || (item.image ? [item.image] : []);
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
    activeLanguage !== "en"
      ? item.materialDe || ""
      : item.material || "";
  materialEl.querySelector("h3").textContent =
    activeLanguage !== "en" ? "MATERIAL" : "MATERIAL";
  materialEl.querySelector("p").textContent = materialText;
  materialEl.hidden = !materialText;

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
    activeLanguage !== "en" ? "BESCHREIBUNG" : "DESCRIPTION";

  const actions = previewDialog.querySelector(".preview-actions");
  actions.innerHTML = `<a class="button" href="contact.html?product=${encodeURIComponent(productTitle(item))}&reference=${encodeURIComponent(item.source || "")}">${copy[activeLanguage].ask}</a>`;

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
          <img src="${asset(image)}" alt="${escapeHtml(productTitle(item))} view ${index + 1}" />
        </button>`,
    )
    .join("");

  previewKicker.textContent =
    type === "product" ? (activeLanguage !== "en" ? "Handgemacht von Lari" : "Handmade by Lari") : copy[activeLanguage].collections;
  previewTitle.textContent = productTitle(item);
  previewPrice.innerHTML = item.price ? productPrice(item) : "";
  previewPrice.hidden = !item.price;
  previewDescription.textContent = (activeLanguage !== "en" ? item.descriptionDe : item.description) || "";
  previewDescription.hidden = descLabel.hidden = !previewDescription.textContent;
  previewDialog.querySelector(".preview-options")?.remove();
  if (item.optionGroups?.length) {
    const options = document.createElement("div");
    options.className = "preview-options";
    item.optionGroups.forEach(group => {
      const heading = document.createElement("h3");
      heading.textContent = group.title;
      const choices = document.createElement("p");
      choices.textContent = group.choices.join(" · ");
      options.append(heading, choices);
    });
    if (item.variants.length) {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = activeLanguage === "en" ? "Variants & prices" : "Ausführungen & Preise";
      details.append(summary);
      item.variants.forEach(variant => {
        const row = document.createElement("p");
        row.textContent = `${variant.label} — CHF ${variant.price.toFixed(2)}${variant.available ? "" : activeLanguage === "en" ? " (Sold out)" : " (Ausverkauft)"}`;
        details.append(row);
      });
      options.append(details);
    }
    previewDescription.after(options);
  }

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
  const label = activeLanguage !== "en" ? collection.titleDe : collection.title;
  return `<a href="${collection.href}">${label}</a>`;
}

function renderLanguageSwitcher() {
  const tools = document.querySelector(".header-tools");
  if (!tools) return;
  tools.innerHTML = `
    <details class="language-menu">
      <summary aria-label="Sprache"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg><span class="language-current"></span><svg class="language-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></summary>
      <div class="language-options" role="group" aria-label="Sprache">
        <button type="button" data-lang-choice="de" lang="de"><span>Deutsch</span><small>DE</small></button>
        <button type="button" data-lang-choice="fr" lang="fr"><span>Français</span><small>FR</small></button>
        <button type="button" data-lang-choice="en" lang="en"><span>English</span><small>EN</small></button>
      </div>
    </details>
    <button class="theme-toggle" type="button">
      <svg class="sun-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
      <svg class="moon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 13.5A9 9 0 0 1 10.5 3 9 9 0 1 0 20.5 13.5Z"/></svg>
    </button>`;
  tools.querySelector(".theme-toggle").addEventListener("click", () => setTheme(activeTheme === "dark" ? "light" : "dark"));
  tools.querySelector("details").addEventListener("toggle", event => {
    if (event.target.open) closeMobileMenu();
  });
}

function updateHeaderControls() {
  const current = document.querySelector(".language-current");
  if (current) current.textContent = activeLanguage.toUpperCase();
  const toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;
  const labels = {de: ["Helles Design aktivieren", "Dunkles Design aktivieren"], fr: ["Activer le thème clair", "Activer le thème sombre"], en: ["Use light theme", "Use dark theme"]};
  toggle.setAttribute("aria-label", labels[activeLanguage][activeTheme === "dark" ? 0 : 1]);
  toggle.title = toggle.getAttribute("aria-label");
}

function closeMobileMenu() {
  body.classList.remove("nav-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function renderOldGallery() {
  if (!oldGallery) return;
  oldGallery.innerHTML = oldSiteMedia.slice(0, Number(oldGallery.dataset.limit) || oldSiteMedia.length)
    .map((file, index) => {
      const isVideo = /\.(mp4|webm|mov)$/i.test(file);
      const media = isVideo
        ? `<video src="${file}" muted playsinline></video>`
        : `<img src="${file}" alt="${activeLanguage !== "en" ? "Schmuckdetail" : "Jewelry detail"} ${index + 1}" loading="lazy" />`;
      return `
        <button class="gallery-item-btn" type="button" data-index="${index}" aria-label="${activeLanguage !== "en" ? "Bild öffnen" : "Open view"} ${index + 1}">
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
  const t = copy[language === "fr" ? "de" : language];
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
      kicker.textContent = language !== "en" ? "Kollektion" : "Collection";
    if (title)
      title.textContent =
        language !== "en"
          ? detailPageCollection.titleDe
          : detailPageCollection.title;
    if (paragraph) {
      paragraph.textContent =
        language !== "en"
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
    const source = collectionItems(pageName());
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
  updateHeaderControls();
}

function setLanguage(language) {
  restoreFrench();
  activeLanguage = language;
  localStorage.setItem("lari-language-v2", language);
  injectSectionDividers();
  setPageText(language);
  renderCards();
  updateBrandLogo();
  updateFavicon();
  updateSectionDescriptions();
  updateHeaderControls();
  localizeNewContent();
  applyFrench();
}

function updateBrandLogo() {
  const brand = document.querySelector(".brand");
  if (brand) {
    brand.innerHTML = `<img src="assets/old-site/logo_scaled.webp" alt="Rings made by Lari" class="logo-image" />`;
    brand.setAttribute("aria-label", activeLanguage !== "en" ? "Rings made by Lari – Startseite" : "Rings made by Lari home");
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

function updateSectionDescriptions() {
  const newArrivalsHead = document.querySelector("#new-arrivals .section-head");
  if (newArrivalsHead) {
    newArrivalsHead.innerHTML = `
      <h2 id="new-arrivals-title">${activeLanguage !== "en" ? "Neu eingetroffen" : "New arrivals"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage !== "en" ? "Frisch eingetroffene Einzelstücke und neue handgeformte Silberringe." : "Fresh one-of-a-kind pieces and newly finished hand-shaped silver rings."}</p>
      <a href="#new-arrivals-grid" class="outline-button">
        ${activeLanguage !== "en" ? "NEUHEITEN ANSEHEN" : "VIEW NEW ARRIVALS"}
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;
  }

  const collectionsHead = document.querySelector("#collections .section-head");
  if (collectionsHead) {
    collectionsHead.innerHTML = `
      <h2 id="collections-title">${activeLanguage !== "en" ? "Kollektionen entdecken" : "Discover the collections"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage !== "en" ? "Entdecke unsere einzigartigen Schmuckkollektionen, handgefertigt aus ausgewähltem Vintage-Silberbesteck." : "Explore our unique jewelry collections hand-crafted from selected vintage silver cutlery."}</p>
      <a href="shop.html" class="outline-button">
        ${activeLanguage !== "en" ? "ALLE KOLLEKTIONEN ANSEHEN" : "VIEW ALL COLLECTIONS"}
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;
  }

  const bestsellersHead = document.querySelector("#bestsellers .section-head");
  if (bestsellersHead) {
    bestsellersHead.innerHTML = `
      <span class="section-subtitle">${activeLanguage !== "en" ? "UNSERE BESTSELLER" : "OUR BESTSELLERS"}</span>
      <h2 id="bestsellers-title">${activeLanguage !== "en" ? "Bestseller" : "Bestsellers"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage !== "en" ? "Stöbere in den beliebtesten Schmuckstücken und handgeformten Silberringen unserer Kunden." : "Browse our customer favorites and most popular hand-shaped silver rings."}</p>
      <a href="shop.html" class="outline-button">
        ${activeLanguage !== "en" ? "ALLE PRODUKTE ANSEHEN" : "VIEW ALL PRODUCTS"}
        <svg class="button-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:14px; height:14px;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;
  }

  const categoriesHead = document.querySelector("#shop-categories .section-head");
  if (categoriesHead) {
    categoriesHead.innerHTML = `
      <span class="section-subtitle">${activeLanguage !== "en" ? "KATEGORIEN ENTDECKEN" : "EXPLORE CATEGORIES"}</span>
      <h2 id="shop-categories-title">${activeLanguage !== "en" ? "Produktkategorien" : "Product categories"}</h2>
      <span class="section-title-rule"></span>
      <p class="section-description">${activeLanguage !== "en" ? "Durchsuche Schmuck und Accessoires nach Produktkategorie." : "Browse jewelry and accessories by product type."}</p>
      <a href="shop.html" class="outline-button">
        ${activeLanguage !== "en" ? "ALLE KATEGORIEN ANSEHEN" : "VIEW ALL CATEGORIES"}
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
  button.addEventListener("click", () => {
    setLanguage(button.dataset.langChoice);
    const menu = button.closest("details");
    menu.open = false;
    menu.querySelector("summary").focus();
  });
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
    document.querySelector(".language-menu").open = false;
    const isOpen = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("click", event => {
  if (!event.target.closest(".language-menu")) document.querySelector(".language-menu").open = false;
  if (!event.target.closest(".nav, .menu-toggle")) closeMobileMenu();
});
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  const languages = document.querySelector(".language-menu");
  if (languages.open) { languages.open = false; languages.querySelector("summary").focus(); }
  if (body.classList.contains("nav-open")) { closeMobileMenu(); menuToggle.focus(); }
});

if (nav) {
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function handleProductGridClick(event) {
  const previewButton = event.target.closest("[data-preview-id]");
  if (previewButton) {
    const item = findPreviewItem(
      previewButton.dataset.previewId,
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
    `${productTitle(findPreviewItem(button.dataset.save, "product"))} ${
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
    const previewButton = event.target.closest("[data-preview-id]");
    if (!previewButton) return;
    const item = findPreviewItem(
      previewButton.dataset.previewId,
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
    content.innerHTML = `<img src="${file}" alt="${activeLanguage !== "en" ? "Galeriebild" : "Gallery image"} ${index + 1}" />`;
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

document.body.insertAdjacentHTML("beforeend", `
  <nav class="mobile-contact-nav" aria-label="Kontakt-Schnellzugriff">
    <a href="mailto:rings_made_by_lari@hotmail.com">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
      <span>Mail</span>
    </a>
    <a href="https://www.instagram.com/rings_made_by_lari" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
      <span>Insta</span>
    </a>
    <a href="${pageName() === "contact.html" ? "#contact-form" : "contact.html#contact-form"}" class="mobile-contact-primary">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-2 2V11.5a9.5 9.5 0 0 1 19 0Z"/><path d="M7 9h10M7 13h7"/></svg>
      <span data-copy="mobileContact">Kontaktformular</span>
    </a>
  </nav>
`);

const newPageCopy = {
  "de": {
    "intro1": "Auf meiner Seite findest du eine grosse Auswahl an einzigartigen Ringen und Accessoires, die aus Besteck hergestellt werden.",
    "intro2": "Die Ringe werden erst nach deiner Bestellung individuell für dich angefertigt – natürlich in deiner gewünschten Ringgrösse. Eine Ausnahme bilden die Ringe aus der Rubrik „Vorgefertigte Ringe“.",
    "intro3": "Neben Ringen findest du bei mir auch eine vielfältige Auswahl an Geschenken, Broschen, Halsketten und weiteren besonderen Einzelstücken – alles hergestellt mit oder aus Besteck.",
    "intro4": "Hast du etwas auf meiner Seite entdeckt, das dir gefällt? Oder möchtest du mehr über ein bestimmtes Stück erfahren?",
    "intro5": "Dann kontaktiere mich gerne unverbindlich über das Kontaktformular. Ich freue mich auf deine Nachricht!",
    "questionStart": "Hast du einen",
    "concept": "Concept Store",
    "questionOr": "oder einen",
    "flowers": "Blumenladen?",
    "question": "Hast du einen Concept Store oder einen Blumenladen?",
    "partnerIntro": "Du möchtest dein Sortiment mit besonderen, handgefertigten Accessoires erweitern?",
    "partnerDetail": "Meine Ringe aus altem Besteck und weitere liebevoll gefertigte Einzelstücke suchen ihren Platz in schönen Läden.",
    "partnerContact": "Melde dich bei mir",
    "collaboration": "Zusammenarbeit",
    "partnerInvite": "Erzähl mir von deinem Laden und deinen Ideen für eine Zusammenarbeit. Ich freue mich auf deine Nachricht!",
    "directEmail": "Direkt per E-Mail schreiben",
    "formHeading": "Lass uns zusammenarbeiten",
    "person": "Kontaktperson",
    "email": "E-Mail-Adresse",
    "store": "Name deines Ladens",
    "storeType": "Art deines Ladens",
    "location": "Ort deines Ladens",
    "website": "Website oder Instagram (optional)",
    "message": "Deine Ideen und Wünsche",
    "submit": "Zusammenarbeit anfragen",
    "formNote": "Das Formular öffnet eine vorbereitete E-Mail in deinem E-Mail-Programm. Bitte sende sie dort ab. Du kannst mir auch direkt per E-Mail schreiben.",
    "example": "Zum Beispiel Concept Store oder Blumenladen"
  },
  "en": {
    "intro1": "On my website you’ll find a wide selection of unique rings and accessories made from cutlery.",
    "intro2": "Each ring is made especially for you after you place your order, in your chosen ring size. The rings in the “Ready-made rings” category are the exception.",
    "intro3": "Alongside rings, you’ll find a varied selection of gifts, brooches, necklaces and other special one-of-a-kind pieces, all made with or from cutlery.",
    "intro4": "Have you spotted something you like on my website? Or would you like to know more about a particular piece?",
    "intro5": "Feel free to get in touch through the contact form, with no obligation. I look forward to hearing from you!",
    "questionStart": "Do you have a",
    "concept": "concept store",
    "questionOr": "or a",
    "flowers": "flower shop?",
    "question": "Do you have a concept store or a flower shop?",
    "partnerIntro": "Would you like to expand your range with distinctive handmade accessories?",
    "partnerDetail": "My rings made from old cutlery and other lovingly crafted one-of-a-kind pieces are looking for a home in lovely shops.",
    "partnerContact": "Get in touch",
    "collaboration": "Collaboration",
    "partnerInvite": "Tell me about your shop and your ideas for working together. I look forward to hearing from you!",
    "directEmail": "Email me directly",
    "formHeading": "Let’s work together",
    "person": "Contact person",
    "email": "Email address",
    "store": "Shop name",
    "storeType": "Type of shop",
    "location": "Shop location",
    "website": "Website or Instagram (optional)",
    "message": "Your ideas and wishes",
    "submit": "Enquire about collaboration",
    "formNote": "This form opens a prepared email in your email app. Please send it from there. You can also email me directly.",
    "example": "For example, a concept store or flower shop"
  },
  "fr": {
    "intro1": "Sur mon site, tu trouveras un grand choix de bagues et d’accessoires uniques fabriqués à partir de couverts.",
    "intro2": "Les bagues sont fabriquées spécialement pour toi après ta commande, bien sûr à la taille souhaitée. Seules les bagues de la rubrique « Bagues prêtes à porter » font exception.",
    "intro3": "En plus des bagues, tu trouveras un choix varié de cadeaux, de broches, de colliers et d’autres pièces uniques, tous réalisés avec ou à partir de couverts.",
    "intro4": "Tu as repéré quelque chose qui te plaît sur mon site ? Ou tu aimerais en savoir plus sur une pièce en particulier ?",
    "intro5": "Contacte-moi sans engagement via le formulaire de contact. Je me réjouis de recevoir ton message !",
    "questionStart": "Tu as un",
    "concept": "concept store",
    "questionOr": "ou une",
    "flowers": "boutique de fleurs ?",
    "question": "Tu as un concept store ou une boutique de fleurs ?",
    "partnerIntro": "Tu souhaites enrichir ton assortiment avec des accessoires uniques faits main ?",
    "partnerDetail": "Mes bagues réalisées à partir de couverts anciens et mes autres pièces uniques créées avec soin cherchent leur place dans de jolies boutiques.",
    "partnerContact": "Contacte-moi",
    "collaboration": "Collaboration",
    "partnerInvite": "Parle-moi de ta boutique et de tes idées de collaboration. Je me réjouis de recevoir ton message !",
    "directEmail": "Écris-moi directement par e-mail",
    "formHeading": "Collaborons ensemble",
    "person": "Personne de contact",
    "email": "Adresse e-mail",
    "store": "Nom de ta boutique",
    "storeType": "Type de boutique",
    "location": "Lieu de ta boutique",
    "website": "Site web ou Instagram (facultatif)",
    "message": "Tes idées et tes souhaits",
    "submit": "Proposer une collaboration",
    "formNote": "Ce formulaire ouvre un e-mail prérempli dans ta messagerie. Envoie-le depuis celle-ci. Tu peux aussi m’écrire directement par e-mail.",
    "example": "Par exemple, concept store ou boutique de fleurs"
  }
};
function localizeNewContent() {
  const copy = newPageCopy[activeLanguage];
  document.querySelectorAll('[data-local-copy]').forEach(el => { el.textContent = copy[el.dataset.localCopy]; });
  document.querySelectorAll('[data-local-placeholder]').forEach(el => { el.placeholder = copy[el.dataset.localPlaceholder]; });
  if (document.querySelector('#collaboration-form')) document.title = copy.collaboration + ' | Rings made by Lari';
  const hero = document.querySelector('#hero-title');
  if (hero) hero.innerHTML = {de:'Handgemachter<br />Schmuck aus<br />altem Besteck.',en:'Handmade jewelry<br />from old cutlery.',fr:'Bijoux faits main<br />à partir de<br />couverts anciens.'}[activeLanguage];
}

body.dataset.theme = activeTheme;
setLanguage(activeLanguage);

// Native dialog provides keyboard dismissal, focus trapping and focus return.
const proofDialog = document.querySelector("#proof-dialog");
document.querySelectorAll(".customer-story").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const image = proofDialog.querySelector("img");
    image.src = link.href;
    image.alt = link.querySelector("img").alt;
    proofDialog.showModal();
  });
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  const selectedProduct = new URLSearchParams(window.location.search).get("product");
  const reference = new URLSearchParams(window.location.search).get("reference");
  if (selectedProduct) contactForm.elements.message.value = (activeLanguage === "fr" ? translateFrench(selectedProduct) : selectedProduct) + (reference?.startsWith("https://ringsmadebylari.wixsite.com/dein-onlineshop-f/product-page/") ? "\n" + reference : "");
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const message = [
      `${activeLanguage === "fr" ? "Nom" : "Name"}: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `Adresse: ${data.get("address")}`,
      `${activeLanguage === "fr" ? "Mode de paiement souhaité" : "Gewünschte Bezahlung"}: ${data.get("payment")}`,
      "", data.get("message"),
    ].join("\n");
    // ponytail: GitHub Pages has no form backend; use email drafts until a delivery service is configured.
    window.location.href = `mailto:rings_made_by_lari@hotmail.com?subject=${encodeURIComponent(activeLanguage === "fr" ? "Demande – Rings made by Lari" : "Anfrage – Rings made by Lari")}&body=${encodeURIComponent(message)}`;
  });
}

// Collaboration enquiries use the site's email-draft submission flow.
const collaborationForm = document.querySelector("#collaboration-form");
if (collaborationForm) {
  collaborationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(collaborationForm);
    const copy = newPageCopy[activeLanguage];
    const message = [
      `${copy.person}: ${data.get("name")}`,
      `E-Mail: ${data.get("email")}`,
      `${copy.store}: ${data.get("store")}`,
      `${copy.storeType}: ${data.get("storeType")}`,
      `${copy.location}: ${data.get("location")}`,
      `${copy.website}: ${data.get("website")}`,
      "", data.get("message"),
    ].join("\n");
    window.location.href = `mailto:rings_made_by_lari@hotmail.com?subject=${encodeURIComponent(copy.collaboration + " – " + data.get("store"))}&body=${encodeURIComponent(message)}`;
  });
}
