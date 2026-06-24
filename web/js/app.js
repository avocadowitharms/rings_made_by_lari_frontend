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
    "old-034.png",
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
  image: image === "gift" ? "" : `old-site/${image}`,
  icon: image === "gift" ? "gift" : "",
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
    title: "Digital gift card",
    price: "CHF 25.00+",
    image: "",
    description:
      "A digital gift card delivered for flexible gifting across the shop.",
    descriptionDe:
      "Eine digitale Geschenkkarte für flexibles Schenken im Shop.",
  },
  {
    title: "Paper voucher",
    price: "CHF 25.00+",
    image: "",
    description: "A paper voucher prepared as a physical gift, ready to give.",
    descriptionDe:
      "Ein Papiergutschein als physisches Geschenk, bereit zum Verschenken.",
  },
];

const oldSiteMedia = Array.from({ length: 74 }, (_, index) => {
  const number = index + 1;
  const webp = new Set([8, 13, 17, 56, 57, 70]);
  const png = new Set([34, 35, 73, 74]);
  const extension = webp.has(number) ? "webp" : png.has(number) ? "png" : "jpg";
  return `assets/old-site/old-${String(number).padStart(3, "0")}.${extension}`;
});

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
let activePreviewItem = null;

let activeTheme = localStorage.getItem("lari-theme") || "light";
let activeLanguage = localStorage.getItem("lari-language") || "en";
let noticeTimer;
let heroIndex = 0;
let heroTimer;
let shopActiveCategories = [];
let shopSortMode = "featured";

const heroImages = [
  "jewelry-4.jfif",
  "jewelry-5.jfif",
  "jewelry-6.jfif",
  "old-site/old-001.jpg",
  "old-site/old-004.jpg",
];

const copy = {
  en: {
    nav: ["Shop", "About", "Gallery", "Loyalty", "Contact"],
    light: "Light",
    dark: "Dark",
    homeTitle: "Little things,<br />made to last.",
    homeText:
      "Handmade rings and accessories from old silver-toned cutlery, shipped free within Switzerland.",
    shopButton: "Shop Collection",
    newArrivals: "New arrivals",
    collections: "Shop by collection",
    categories: "Shop categories",
    bestsellers: "Bestsellers",
    viewAll: "View all",
    ask: "Ask about this piece",
    footerContact: "Contact",
    payments: "Payment methods: TWINT, Visa, Mastercard",
    legal: ["Datenschutz", "Geschäftsbedingungen", "Impressum"],
    page: {
      "shop.html": ["Shop", "Handmade pieces from old cutlery."],
      "about.html": [
        "About",
        "Meet Lari.",
        [
          "My name is Larissa, but I prefer Lari. That is where rings_made_by_lari comes from.",
          "I make rings and accessories as a handcraft hobby. I search second-hand shops and online places for old cutlery, then cut, sand, bend, and polish each piece by hand into a new form.",
          "Because every release depends on the old cutlery I find, quantities are limited. Instagram is the best place to follow along when new rings arrive in the online shop.",
        ],
      ],
      "gallery.html": ["Gallery", "Silver-toned pieces in quiet detail."],
      "loyalty.html": ["Loyalty", "Collect points and receive rewards."],
      "privacy.html": [
        "Legal",
        "Datenschutz",
        [
          "This page is reserved for privacy information about customer, order, contact, and website usage data for Rings made by Lari.",
          "For production, replace this placeholder with the complete legally reviewed privacy policy.",
        ],
      ],
      "terms.html": [
        "Legal",
        "Geschäftsbedingungen",
        [
          "This page is reserved for shop terms including orders, payment, free shipping within Switzerland, handmade availability, returns, and product variation notes.",
          "For production, replace this placeholder with the complete legally reviewed terms and conditions.",
        ],
      ],
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
    nav: [
      "Shop",
      "Über mich",
      "Galerie",
      "Treueprogramm",
      "Kontakt",
    ],
    light: "Hell",
    dark: "Dunkel",
    homeTitle: "Kleine Dinge,<br />für dich gemacht.",
    homeText:
      "Handgefertigte Ringe und Accessoires aus altem silberfarbenem Besteck, gratis Versand innerhalb der Schweiz.",
    shopButton: "Kollektion shoppen",
    newArrivals: "Neu eingetroffen",
    collections: "Nach Kollektion shoppen",
    categories: "Shop Kategorien",
    bestsellers: "Bestseller",
    viewAll: "Alle ansehen",
    ask: "Anfragen",
    footerContact: "Kontakt",
    payments: "Zahlungsmethoden: TWINT, Visa, Mastercard",
    legal: ["Datenschutz", "Geschäftsbedingungen", "Impressum"],
    page: {
      "shop.html": ["Shop", "Handgemachte Schmuckstücke aus altem Besteck."],
      "about.html": [
        "Über mich",
        "Lerne Lari kennen.",
        [
          "Mein Name ist Larissa, werde aber am liebsten Lari genannt. Daher kommt rings_made_by_lari.",
          "Das Herstellen der Ringe und Accessoires ist ein Hobby von mir. Ich suche in Brockenhäusern oder online nach altem Besteck, schneide, schleife, biege und poliere jedes Stück von Hand in seine neue Form.",
          "Da jedes Sortiment vom gefundenen Besteck abhängt, gibt es immer nur eine limitierte Anzahl. Auf Instagram erfährst du am schnellsten, wenn neue Ringe im Onlineshop verfügbar sind.",
        ],
      ],
      "gallery.html": ["Galerie", "Handgefertigte Ringe und Accessoires."],
      "loyalty.html": ["Treueprogramm", "Punkte sammeln und Prämien erhalten."],
      "privacy.html": [
        "Rechtliches",
        "Datenschutz",
        [
          "Diese Seite ist für Informationen zum Umgang mit Kunden-, Bestell-, Kontakt- und Websitedaten von Rings made by Lari vorgesehen.",
          "Für die Veröffentlichung sollte hier die vollständig rechtlich geprüfte Datenschutzerklärung eingefügt werden.",
        ],
      ],
      "terms.html": [
        "Rechtliches",
        "Geschäftsbedingungen",
        [
          "Diese Seite ist für Geschäftsbedingungen zu Bestellung, Zahlung, kostenlosem Versand innerhalb der Schweiz, handgemachter Verfügbarkeit, Rückgaben und Produktabweichungen vorgesehen.",
          "Für die Veröffentlichung sollten hier die vollständig rechtlich geprüften Geschäftsbedingungen eingefügt werden.",
        ],
      ],
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
      "Ein handgefertigter Siegelring mit zarten Mustern aus antikem Tafelsilber."
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
    : `<img src="${asset(item.image)}" alt="${item.title} silver jewelry" />`;
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

function productCard(item) {
  const media = item.image
    ? `<img src="${asset(item.image)}" alt="${item.title} silver jewelry" />`
    : `<span class="collection-icon product-icon" aria-hidden="true">${icons.gift}</span>`;

  const tagText = item.tag ? (activeLanguage === "de" ? item.tagDe : item.tag) : "";
  const tagBadge = tagText
    ? `<span class="product-card-tag">${tagText}</span>`
    : "";

  const materialText = item.material ? (activeLanguage === "de" ? item.materialDe : item.material) : "";
  const materialHtml = materialText ? `<span class="product-card-material">${materialText}</span>` : "";

  return `
    <article class="product-card">
      <button class="product-preview" type="button" data-preview-type="product" data-preview-title="${item.title}" aria-label="Preview ${item.title}">
        ${tagBadge}
        ${media}
      </button>
      <div class="card-copy">
        <div class="card-copy-details">
          <h3>${item.title}</h3>
          ${materialHtml}
          <p class="product-card-price">${item.price}</p>
        </div>
        <button type="button" aria-label="Save ${item.title}" data-save="${item.title}">&#9825;</button>
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
      <button class="shop-product-preview" type="button" data-preview-type="product" data-preview-title="${item.title}" aria-label="Preview ${item.title}">
        ${tagBadge}
        <img src="${asset(item.image)}" alt="${item.title} silver jewelry" loading="lazy" />
      </button>
      <div class="shop-product-copy">
        <p>${categoryText}</p>
        <h3>${item.title}</h3>
        <span>${item.price}</span>
        <button type="button" data-shop-add="${item.title}">${activeLanguage === "de" ? "In den Warenkorb" : "Add to cart"}</button>
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
  if (kicker) kicker.textContent = activeLanguage === "de" ? "Shop" : "Shop";
  if (description) {
    description.textContent =
      activeLanguage === "de"
        ? "Entdecke Ringe, Besteckstücke, Halsketten, Geschenke und Accessoires, handgefertigt von Lari."
        : "Browse rings, cutlery pieces, necklaces, gifts, and accessories handmade by Lari.";
  }
  if (serviceNote) {
    serviceNote.textContent =
      activeLanguage === "de"
        ? "Dein Schweizer Onlineshop für handgefertigte Ringe und Accessoires aus altem Besteck - Gratis Versand innerhalb der Schweiz"
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
  activePreviewItem = item;
  const gallery = item.image
    ? [
        item.image,
        ...oldSiteMedia.slice(0, 5).map((file) => file.replace("assets/", "")),
      ]
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

  // Dynamic Size & Qty Selectors container and button
  let actions = previewDialog.querySelector(".preview-actions");
  if (!actions) {
    previewDescription.insertAdjacentHTML(
      "afterend",
      `<div class="preview-actions"></div>`,
    );
    actions = previewDialog.querySelector(".preview-actions");
  }

  const titleLower = item.title.toLowerCase();
  const isRing = titleLower.includes("ring") || titleLower.includes("band");

  const sizeLabel = activeLanguage === "de" ? "GRÖSSE (EU)" : "SIZE (EU)";
  const sizeOptions = [50, 52, 54, 56, 58, 60, 62]
    .map((size) => {
      const mmMap = {
        50: "15.9mm",
        52: "16.5mm",
        54: "17.2mm",
        56: "17.8mm",
        58: "18.5mm",
        60: "19.1mm",
        62: "19.7mm",
      };
      const selected = size === 56 ? "selected" : "";
      return `<option value="${size}" ${selected}>${size} — ${mmMap[size]}</option>`;
    })
    .join("");

  const sizeHtml = isRing
    ? `
    <div class="selector-wrapper size-selector-wrapper">
      <label for="preview-size-select">${sizeLabel}</label>
      <div class="select-container">
        <select id="preview-size-select">
          ${sizeOptions}
        </select>
      </div>
    </div>
  `
    : "";

  const qtyLabel = activeLanguage === "de" ? "ANZAHL" : "QUANTITY";
  const qtyOptions = [1, 2, 3, 4, 5]
    .map((qty) => {
      const qtyStr = String(qty).padStart(2, "0");
      return `<option value="${qty}">${qtyStr}</option>`;
    })
    .join("");

  const qtyHtml = `
    <div class="selector-wrapper qty-selector-wrapper">
      <label for="preview-qty-select">${qtyLabel}</label>
      <div class="select-container">
        <select id="preview-qty-select">
          ${qtyOptions}
        </select>
      </div>
    </div>
  `;

  const selectorsHtml = `
    <div class="preview-selectors ${isRing ? "" : "no-size"}">
      ${sizeHtml}
      ${qtyHtml}
    </div>
  `;

  const buttonText =
    activeLanguage === "de" ? "IN DEN WARENKORB" : "ADD TO BAG";
  const buttonHtml = `<button class="button add-cart-button" type="button">${buttonText}</button>`;

  actions.innerHTML = `
    ${selectorsHtml}
    ${buttonHtml}
  `;

  // Dynamic Shipping & Returns Accordion
  let shippingEl = previewDialog.querySelector(".preview-shipping");
  if (!shippingEl) {
    const previewCopy = previewDialog.querySelector(".preview-copy");
    previewCopy.insertAdjacentHTML(
      "beforeend",
      `<details class="preview-shipping">
        <summary>
          <span></span>
          <span class="chevron">+</span>
        </summary>
        <div class="shipping-content">
          <p></p>
        </div>
      </details>`,
    );
    shippingEl = previewDialog.querySelector(".preview-shipping");
  }
  const summarySpan = shippingEl.querySelector("summary span:first-child");
  summarySpan.textContent =
    activeLanguage === "de" ? "VERSAND & RÜCKGABE" : "SHIPPING & RETURNS";

  const shippingText =
    activeLanguage === "de"
      ? "Gratis Versand innerhalb der Schweiz. Da jedes Stück auf Bestellung handgefertigt wird, rechne bitte mit 3-5 Werktagen für die Herstellung vor dem Versand. Rückgaben werden innerhalb von 14 Tagen nach Erhalt für ungetragene Artikel akzeptiert."
      : "Free shipping within Switzerland. Since each piece is handmade to order, please allow 3-5 business days for production before dispatch. Returns are accepted within 14 days of receipt for unworn items.";
  shippingEl.querySelector(".shipping-content p").textContent = shippingText;

  // Set image source and alt
  if (item.image) {
    previewImage.hidden = false;
    previewImage.src = asset(item.image);
    previewImage.alt = `${item.title} silver jewelry`;
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
    type === "product" ? "Bestseller" : copy[activeLanguage].collections;
  previewTitle.textContent = item.title;
  previewPrice.textContent = item.price || "";
  previewPrice.hidden = !item.price;
  previewDescription.textContent =
    (activeLanguage === "de" && item.descriptionDe
      ? item.descriptionDe
      : item.description) ||
    "Handmade silver-toned piece from Rings made by Lari.";

  previewDialog.setAttribute("open", "");
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
      `<div class="language-switcher" role="group" aria-label="Language">
        <button type="button" data-lang-choice="en">EN</button>
        <button type="button" data-lang-choice="de">DE</button>
      </div>`,
    );
  });
}

function renderOldGallery() {
  if (!oldGallery) return;
  oldGallery.innerHTML = oldSiteMedia
    .map((file, index) => {
      const isVideo = /\.(mp4|webm|mov)$/i.test(file);
      const media = isVideo
        ? `<video src="${file}" muted playsinline></video>`
        : `<img src="${file}" alt="Old site jewelry image ${index + 1}" loading="lazy" />`;
      return `
        <button class="gallery-item-btn" type="button" data-index="${index}" aria-label="Open view ${index + 1}">
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
  document.querySelectorAll(".nav a").forEach((link, index) => {
    if (t.nav[index]) link.textContent = t.nav[index];
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
      <a href="https://wa.me/41795630129" target="_blank" aria-label="WhatsApp" class="social-link">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
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

  const cartTitle = document.querySelector(".cart-title");
  if (cartTitle) {
    cartTitle.textContent = language === "de" ? "Warenkorb" : "Cart";
  }
  const subtotalLabel = document.querySelector(".subtotal-label");
  if (subtotalLabel) {
    subtotalLabel.textContent = language === "de" ? "Zwischensumme" : "Subtotal";
  }
  const shippingLabel = document.querySelector(".shipping-label");
  if (shippingLabel) {
    shippingLabel.textContent = language === "de" ? "Versand" : "Shipping";
  }
  const shippingValue = document.querySelector(".shipping-value");
  if (shippingValue) {
    shippingValue.textContent = language === "de" ? "Kostenlos" : "Free";
  }
  const checkoutBtn = document.querySelector(".checkout-button");
  if (checkoutBtn) {
    checkoutBtn.textContent = language === "de" ? "Zur Kasse" : "Checkout";
  }

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
  if (benefitsRow) benefitsRow.innerHTML = benefits.map(benefitItem).join("");
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
  localStorage.setItem("lari-language", language);
  renderCartDrawerMarkup();
  injectSectionDividers();
  setPageText(language);
  renderCards();
  updateBrandLogo();
  updateFavicon();
  renderHeaderSettings();
  updateSettingsMenuState();
  updateSectionDescriptions();
  renderCartDrawer();
  updateCartBadge();
}

function updateBrandLogo() {
  const brand = document.querySelector(".brand");
  if (brand) {
    brand.innerHTML = `<img src="assets/old-site/logo_scaled.webp" alt="Rings made by Lari" class="logo-image" />`;
    brand.setAttribute("aria-label", "Rings made by Lari home");
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
    const cartButton = tools.querySelector(".cart");
    const settingsButtonHtml = `
      <button class="settings-toggle" type="button" aria-label="Settings" data-action="settings">
        ${icons.settings}
      </button>
    `;
    if (cartButton) {
      cartButton.insertAdjacentHTML("beforebegin", settingsButtonHtml);
    } else {
      tools.insertAdjacentHTML("beforeend", settingsButtonHtml);
    }

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
      <h2 id="collections-title">${activeLanguage === "de" ? "Nach Kollektion shoppen" : "Shop by collection"}</h2>
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
      <h2 id="shop-categories-title">${activeLanguage === "de" ? "Shop Kategorien" : "Shop categories"}</h2>
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
    if (button.dataset.action === "cart") {
      openCartDrawer();
      return;
    }
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
  const addButton = event.target.closest("[data-shop-add]");
  if (addButton) {
    showNotice(`${addButton.dataset.shopAdd} ${activeLanguage === "de" ? "wurde hinzugefügt" : "added to cart"}.`);
    return;
  }
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

    const addButton = event.target.closest(".add-cart-button");
    if (addButton) {
      const qtySelect = previewDialog.querySelector("#preview-qty-select");
      const quantity = qtySelect ? parseInt(qtySelect.value, 10) : 1;

      const sizeSelect = previewDialog.querySelector("#preview-size-select");
      const size = sizeSelect ? sizeSelect.value : null;

      if (activePreviewItem) {
        addToCart(activePreviewItem, size, quantity);
      }
      closePreview();
      return;
    }

    if (event.target === previewDialog) closePreview();
  });
}

// Cart engine
let cart = JSON.parse(localStorage.getItem("lari-cart")) || [];

function saveCart() {
  localStorage.setItem("lari-cart", JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart span").forEach((span) => {
    span.textContent = totalCount;
  });
  const cartBtn = document.querySelector(".cart");
  if (cartBtn) {
    const label = activeLanguage === "de" 
      ? `Warenkorb, ${totalCount} Artikel` 
      : `Cart, ${totalCount} items`;
    cartBtn.setAttribute("aria-label", label);
  }
}

function openCartDrawer() {
  document.body.classList.add("cart-open");
}

function closeCartDrawer() {
  document.body.classList.remove("cart-open");
}

function renderCartDrawer() {
  const itemsContainer = document.querySelector(".cart-drawer-items");
  const subtotalVal = document.querySelector(".subtotal-value");
  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `<p class="cart-empty-message">${
      activeLanguage === "de" ? "Ihr Warenkorb ist leer." : "Your cart is empty."
    }</p>`;
    if (subtotalVal) subtotalVal.textContent = "CHF 0.00";
    return;
  }

  itemsContainer.innerHTML = cart
    .map((item, index) => {
      const sizeText = item.size ? `<span class="cart-item-size">${activeLanguage === "de" ? "Grösse" : "Size"}: ${item.size}</span>` : "";
      return `
        <div class="cart-item">
          <img src="${item.image || 'assets/jewelry-1.jfif'}" alt="${item.title}" class="cart-item-image" />
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            ${sizeText}
            <div class="cart-item-qty-price">
              <div class="cart-item-qty">
                <button type="button" class="qty-btn" data-action="decrease" data-index="${index}">&minus;</button>
                <span>${item.quantity}</span>
                <button type="button" class="qty-btn" data-action="increase" data-index="${index}">&plus;</button>
              </div>
              <span class="cart-item-price">${item.price}</span>
            </div>
            <button type="button" class="cart-item-remove" data-index="${index}">${
              activeLanguage === "de" ? "Entfernen" : "Remove"
            }</button>
          </div>
        </div>
      `;
    })
    .join("");

  let subtotal = 0;
  cart.forEach((item) => {
    const numericStr = item.price.replace(/[^\d.]/g, "");
    const priceVal = parseFloat(numericStr) || 0;
    subtotal += priceVal * item.quantity;
  });

  if (subtotalVal) {
    subtotalVal.textContent = `CHF ${subtotal.toFixed(2)}`;
  }
}

function addToCart(item, size, quantity) {
  const parsedQty = parseInt(quantity, 10) || 1;
  const existingItemIndex = cart.findIndex(
    (cItem) => cItem.title === item.title && cItem.size === size,
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += parsedQty;
  } else {
    let imagePath = item.image;
    if (imagePath && !imagePath.startsWith("assets/")) {
      imagePath = `assets/${imagePath}`;
    }
    cart.push({
      title: item.title,
      price: item.price,
      image: imagePath,
      size: size,
      quantity: parsedQty,
    });
  }

  saveCart();
  renderCartDrawer();
  openCartDrawer();
}

function renderCartDrawerMarkup() {
  if (document.querySelector(".cart-drawer")) return;

  const markup = `
    <div class="cart-drawer-overlay" id="cart-drawer-overlay"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-drawer-header">
        <h3 class="cart-title">Cart</h3>
        <button class="cart-drawer-close" aria-label="Close cart">&times;</button>
      </div>
      <div class="cart-drawer-items"></div>
      <div class="cart-drawer-footer">
        <div class="cart-summary-line">
          <span class="subtotal-label">Subtotal</span>
          <span class="subtotal-value">CHF 0.00</span>
        </div>
        <div class="cart-summary-line">
          <span class="shipping-label">Shipping</span>
          <span class="shipping-value">Free</span>
        </div>
        <button class="button checkout-button" type="button">Checkout</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", markup);

  const overlay = document.getElementById("cart-drawer-overlay");
  const closeBtn = document.querySelector(".cart-drawer-close");
  const checkoutBtn = document.querySelector(".checkout-button");

  if (overlay) overlay.addEventListener("click", closeCartDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeCartDrawer);
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const msg = activeLanguage === "de"
        ? "Vielen Dank für Ihre Bestellung! Dies ist eine Demonstration."
        : "Thank you for your order! This is a demonstration.";
      alert(msg);
      cart = [];
      saveCart();
      renderCartDrawer();
      closeCartDrawer();
    });
  }

  const itemsContainer = document.querySelector(".cart-drawer-items");
  if (itemsContainer) {
    itemsContainer.addEventListener("click", (e) => {
      const idx = parseInt(e.target.dataset.index, 10);
      if (isNaN(idx)) return;

      if (e.target.classList.contains("cart-item-remove")) {
        cart.splice(idx, 1);
        saveCart();
        renderCartDrawer();
      } else if (e.target.closest(".qty-btn")) {
        const btn = e.target.closest(".qty-btn");
        const action = btn.dataset.action;
        if (action === "increase") {
          cart[idx].quantity += 1;
        } else if (action === "decrease") {
          cart[idx].quantity -= 1;
          if (cart[idx].quantity <= 0) {
            cart.splice(idx, 1);
          }
        }
        saveCart();
        renderCartDrawer();
      }
    });
  }
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
    content.innerHTML = `<img src="${file}" alt="Gallery image ${index + 1}" />`;
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
      <button class="lightbox-close" type="button" aria-label="Close">&times;</button>
      <button class="lightbox-prev" type="button" aria-label="Previous">&lsaquo;</button>
      <div class="lightbox-content"></div>
      <button class="lightbox-next" type="button" aria-label="Next">&rsaquo;</button>
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

  addDividerAfter(document.querySelector(".hero, .page-hero"));

  const sections = document.querySelectorAll(".content-section, .editorial-section");
  sections.forEach((section, index) => {
    if (index > 0) addDividerBefore(section);
  });

  addDividerAfter(document.querySelector("#bestsellers"));
}

setTheme(activeTheme);
setLanguage(activeLanguage);
