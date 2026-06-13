const collections = [
  ["Rings size selectable", "Ringe grösse Frei wählbar", "collection-rings-size.html", "old-001.jpg"],
  ["Ready-made rings", "Ringe vorgefertigt", "collection-ready-rings.html", "old-002.jpg"],
  ["Ring size measurer", "Ringgrössenmesser", "collection-ring-size-measurer.html", "old-034.png"],
  ["Bracelets", "Armketten", "collection-bracelets.html", "old-003.jpg"],
  ["Necklaces", "Halsketten", "collection-necklaces.html", "old-004.jpg"],
  ["Brooches", "Broschen", "collection-brooches.html", "old-005.jpg"],
  ["Lucky charms", "Glücksbringer", "collection-lucky-charms.html", "old-006.jpg"],
  ["Cutlery", "Besteck", "collection-cutlery.html", "old-061.jpg"],
  ["Gifts", "Geschenke", "collection-gifts.html", "old-007.jpg"],
  ["Keychains", "Schlüsselanhänger", "collection-keychains.html", "old-008.webp"],
  ["Gift cards", "Geschenkkarten", "collection-gift-cards.html", "gift"],
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
  { title: "Ring 34 schmal & breit", price: "CHF 29.95", image: "old-site/old-002.jpg" },
  { title: "Ring 35", price: "CHF 29.95", image: "old-site/old-003.jpg" },
  { title: "Ring 38 mittel & breit", price: "CHF 29.95", image: "old-site/old-004.jpg" },
  { title: "Ring 40", price: "CHF 25.95", image: "old-site/old-005.jpg" },
  { title: "Ring 37", price: "CHF 29.95", image: "old-site/old-006.jpg" },
  { title: "Ring 18", price: "CHF 29.95", image: "old-site/old-007.jpg" },
  { title: "Ring 26 schmal & breit", price: "CHF 29.95", image: "old-site/old-009.jpg" },
  { title: "Ring 23", price: "CHF 29.95", image: "old-site/old-010.jpg" },
  { title: "Ring 42", price: "CHF 29.95", image: "old-site/old-014.jpg" },
  { title: "Ring 41 mittel & breit", price: "CHF 29.95", image: "old-site/old-015.jpg" },
  { title: "Ring 39 mittel & breit", price: "CHF 29.95", image: "old-site/old-016.jpg" },
];

const giftProducts = [
  {
    title: "Digital gift card",
    price: "CHF 25.00+",
    image: "",
    description: "A digital gift card delivered for flexible gifting across the shop.",
    descriptionDe: "Eine digitale Geschenkkarte für flexibles Schenken im Shop.",
  },
  {
    title: "Paper voucher",
    price: "CHF 25.00+",
    image: "",
    description: "A paper voucher prepared as a physical gift, ready to give.",
    descriptionDe: "Ein Papiergutschein als physisches Geschenk, bereit zum Verschenken.",
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
    price: "\u20ac28,00",
    image: "jewelry-6.jfif",
    description: "A slim silver band with a gentle twisted profile and polished highlights.",
  },
  {
    title: "Moonstone Ring",
    price: "\u20ac56,00",
    image: "jewelry-4.jfif",
    description: "A luminous silver ring set with a pale stone for a soft, milky glow.",
  },
  {
    title: "Dotted Band",
    price: "\u20ac32,00",
    image: "jewelry-1.jfif",
    description: "A narrow silver band finished with tiny raised details and a clean silhouette.",
  },
  {
    title: "Organic Signet Ring",
    price: "\u20ac52,00",
    image: "jewelry-2.jfif",
    description: "A rounded silver signet with a handmade surface and softened edges.",
  },
];

const detailPageCollection = collections.find((collection) => pageName() === collection.href);

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
  bag:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8.5h10l1 11H6l1-11Z"></path><path d="M9.2 8.5a2.8 2.8 0 0 1 5.6 0"></path></svg>',
  menu:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>',
  gift:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v8H4v-8"></path><path d="M2.5 8h19v4h-19z"></path><path d="M12 8v12"></path><path d="M12 8H8.2a2.1 2.1 0 1 1 2.1-2.1C10.3 7.1 12 8 12 8Z"></path><path d="M12 8h3.8a2.1 2.1 0 1 0-2.1-2.1C13.7 7.1 12 8 12 8Z"></path></svg>',
};

const body = document.body;
const heroSlider = document.querySelector("#hero-slider");
const heroDots = document.querySelector("#hero-dots");
const collectionsGrid = document.querySelector("#collections-grid");
const categoryList = document.querySelector("#category-list");
const productsGrid = document.querySelector("#bestsellers-grid");
const collectionProductsGrid = document.querySelector("#collection-products-grid");
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

const heroImages = [
  "jewelry-4.jfif",
  "jewelry-5.jfif",
  "jewelry-6.jfif",
  "old-site/old-001.jpg",
  "old-site/old-004.jpg",
];

const copy = {
  en: {
    nav: ["Shop", "Collections", "About", "Gallery", "Loyalty", "Contact"],
    light: "Light",
    dark: "Dark",
    homeTitle: "Little things,<br />made to last.",
    homeText: "Handmade rings and accessories from old silver-toned cutlery, shipped free within Switzerland.",
    shopButton: "Shop Collection",
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
    ],
    categoryNotice: "category selected.",
    productSaved: "saved",
    productRemoved: "removed",
  },
  de: {
    nav: ["Shop", "Kollektionen", "Über mich", "Galerie", "Treueprogramm", "Kontakt"],
    light: "Hell",
    dark: "Dunkel",
    homeTitle: "Kleine Dinge,<br />für dich gemacht.",
    homeText: "Handgefertigte Ringe und Accessoires aus altem silberfarbenem Besteck, gratis Versand innerhalb der Schweiz.",
    shopButton: "Kollektion shoppen",
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
      <span>${title}</span>
    </a>
  `;
}

function productCard(item) {
  const media = item.image
    ? `<img src="${asset(item.image)}" alt="${item.title} silver jewelry" />`
    : `<span class="collection-icon product-icon" aria-hidden="true">${icons.gift}</span>`;
  return `
    <article class="product-card">
      <button class="product-preview" type="button" data-preview-type="product" data-preview-title="${item.title}" aria-label="Preview ${item.title}">
        ${media}
      </button>
      <div class="card-copy">
        <div>
          <h3>${item.title}</h3>
          <p>${item.price}</p>
        </div>
        <button type="button" aria-label="Save ${item.title}" data-save="${item.title}">&#9825;</button>
      </div>
    </article>
  `;
}

function findPreviewItem(title, type) {
  const source = type === "product" ? [...products, ...collectionProducts, ...giftProducts] : collections;
  return source.find((item) => item.title === title);
}

function openPreview(item, type) {
  if (!previewDialog) return;
  activePreviewItem = item;
  const gallery = item.image
    ? [item.image, ...oldSiteMedia.slice(0, 5).map((file) => file.replace("assets/", ""))]
    : [];
  let thumbs = previewDialog.querySelector(".preview-thumbs");
  if (!thumbs) {
    previewImage.insertAdjacentHTML("afterend", '<div class="preview-thumbs" aria-label="Image gallery"></div>');
    thumbs = previewDialog.querySelector(".preview-thumbs");
  }
  let actions = previewDialog.querySelector(".preview-actions");
  if (!actions) {
    previewDescription.insertAdjacentHTML(
      "afterend",
      `<div class="preview-actions">
        <label>Qty <input type="number" min="1" value="1" aria-label="Quantity" /></label>
        <button class="button add-cart-button" type="button"></button>
      </div>`,
    );
    actions = previewDialog.querySelector(".preview-actions");
  }
  actions.querySelector(".add-cart-button").textContent = activeLanguage === "de" ? "In den Warenkorb" : "Add to cart";
  actions.querySelector("label").firstChild.textContent = activeLanguage === "de" ? "Anzahl " : "Qty ";
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
  previewKicker.textContent = type === "product" ? "Bestseller" : copy[activeLanguage].collections;
  previewTitle.textContent = item.title;
  previewPrice.textContent = item.price || "";
  previewPrice.hidden = !item.price;
  previewDescription.textContent =
    (activeLanguage === "de" && item.descriptionDe ? item.descriptionDe : item.description) ||
    "Handmade silver-toned piece from Rings made by Lari.";
  actions.querySelector("input").value = "1";
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
      if (isVideo) {
        return `<video src="${file}" controls muted playsinline aria-label="Old site video ${index + 1}"></video>`;
      }
      return `<img src="${file}" alt="Old site jewelry image ${index + 1}" loading="lazy" />`;
    })
    .join("");
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
    button.textContent = button.dataset.themeChoice === "light" ? t.light : t.dark;
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

  const heroTitle = document.querySelector("#hero-title");
  if (heroTitle) heroTitle.innerHTML = t.homeTitle;
  const heroText = document.querySelector(".hero-copy p");
  if (heroText) heroText.textContent = t.homeText;
  document.querySelectorAll(".button").forEach((button) => {
    if (button.getAttribute("href") === "#bestsellers") button.textContent = t.shopButton;
    if (button.getAttribute("href") === "#contact") button.textContent = t.ask;
  });
  const collectionsTitle = document.querySelector("#collections-title");
  if (collectionsTitle) collectionsTitle.textContent = t.collections;
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
    if (kicker) kicker.textContent = language === "de" ? "Kollektion" : "Collection";
    if (title) title.textContent = language === "de" ? detailPageCollection.titleDe : detailPageCollection.title;
    if (paragraph) {
      paragraph.textContent =
        language === "de" ? detailPageCollection.descriptionDe : detailPageCollection.description;
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
  if (collectionsGrid) collectionsGrid.innerHTML = collections.map(collectionCard).join("");
  if (categoryList) categoryList.innerHTML = categories.map(categoryLink).join("");
  if (productsGrid) productsGrid.innerHTML = products.map(productCard).join("");
  if (collectionProductsGrid) {
    const source = pageName() === "collection-gift-cards.html" ? giftProducts : collectionProducts;
    collectionProductsGrid.innerHTML = source.map(productCard).join("");
  }
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
}

function setLanguage(language) {
  activeLanguage = language;
  localStorage.setItem("lari-language", language);
  setPageText(language);
  renderCards();
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
  button.addEventListener("click", () => setLanguage(button.dataset.langChoice));
});

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const labels = {
      search: "Search is ready.",
      account: "Account area opened.",
      cart: "Your cart is empty.",
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
      const item = findPreviewItem(previewButton.dataset.previewTitle, previewButton.dataset.previewType);
      if (item) openPreview(item, previewButton.dataset.previewType);
      return;
    }

    const button = event.target.closest("[data-save]");
    if (!button) return;
    button.classList.toggle("saved");
    button.innerHTML = button.classList.contains("saved") ? "&#9829;" : "&#9825;";
    showNotice(
      `${button.dataset.save} ${
        button.classList.contains("saved") ? copy[activeLanguage].productSaved : copy[activeLanguage].productRemoved
      }.`,
    );
}

if (productsGrid) {
  productsGrid.addEventListener("click", handleProductGridClick);
}

if (collectionProductsGrid) {
  collectionProductsGrid.addEventListener("click", handleProductGridClick);
}

if (collectionsGrid) {
  collectionsGrid.addEventListener("click", (event) => {
    const previewButton = event.target.closest("[data-preview-title]");
    if (!previewButton) return;
    const item = findPreviewItem(previewButton.dataset.previewTitle, previewButton.dataset.previewType);
    if (item) openPreview(item, previewButton.dataset.previewType);
  });
}

if (categoryList) {
  categoryList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    showNotice(`${button.dataset.category} ${copy[activeLanguage].categoryNotice}`);
    document.querySelector("#bestsellers")?.scrollIntoView({ behavior: "smooth" });
  });
}

if (previewClose) previewClose.addEventListener("click", closePreview);

if (previewDialog) {
  previewDialog.addEventListener("click", (event) => {
    const thumb = event.target.closest("[data-preview-image]");
    if (thumb) {
      previewImage.src = asset(thumb.dataset.previewImage);
      previewDialog.querySelectorAll(".preview-thumbs button").forEach((button) => {
        button.classList.toggle("active", button === thumb);
      });
      return;
    }

    const addButton = event.target.closest(".add-cart-button");
    if (addButton) {
      const quantity = previewDialog.querySelector(".preview-actions input")?.value || "1";
      showNotice(`${quantity} x ${activePreviewItem?.title || "item"} added to cart.`);
      closePreview();
      return;
    }

    if (event.target === previewDialog) closePreview();
  });
}

setTheme(activeTheme);
setLanguage(activeLanguage);
