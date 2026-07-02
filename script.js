/* ===== Data (from limonkebap.lovable.app — unchanged) ===== */
const MENU = {
  "Sandwich": [
    { name: "Sandwich Menü", desc: "Sandwich nach Wahl + Pommes + Getränk", price: "9,90", tag: "Menü" },
    { name: "Sandwich Hühner", price: "5,90" },
    { name: "Sandwich Kalb", price: "6,90" },
    { name: "Sandwich Gemischt", price: "6,90" },
    { name: "Sandwich Schnitzel", price: "6,90" },
    { name: "Sandwich Falafel", price: "5,90", tag: "vegan" },
  ],
  "Dürüm": [
    { name: "Dürüm Menü", desc: "Dürüm nach Wahl + Pommes + Getränk", price: "11,90", tag: "Menü" },
    { name: "Dürüm Hühner", price: "7,20" },
    { name: "Dürüm Kalb", price: "8,20" },
    { name: "Dürüm Gemischt", price: "8,20" },
    { name: "Dürüm Schnitzel", price: "8,20" },
    { name: "Dürüm Falafel", price: "7,20", tag: "vegan" },
  ],
  "Bowl": [
    { name: "Bowl Hühner", price: "7,50" },
    { name: "Bowl Kalb", price: "8,50" },
    { name: "Bowl Gemischt", price: "8,50" },
    { name: "Bowl Schnitzel", price: "8,50" },
    { name: "Bowl Falafel", price: "7,50", tag: "vegan" },
  ],
  "Teller": [
    { name: "Teller Hühner", price: "11,90" },
    { name: "Teller Kalb", price: "12,90" },
    { name: "Teller Gemischt", price: "12,90" },
    { name: "Teller Schnitzel", price: "12,90" },
    { name: "Teller Falafel", price: "11,90", tag: "vegan" },
  ],
  "Suppen & Lahmacun": [
    { name: "Hühnersuppe", price: "5,90" },
    { name: "Linsensuppe", price: "4,90", tag: "vegan" },
    { name: "Lahmacun", desc: "Dünner Teig, würzige Hackfleisch-Auflage", price: "6,90" },
  ],
  "Pizza": [
    { name: "Margherita", desc: "Single 8,90 € / Familien 14,90 €", price: "8,90" },
    { name: "Funghi", desc: "Single 9,90 € / Familien 16,90 €", price: "9,90" },
    { name: "Tonno", desc: "Single 9,90 € / Familien 16,90 €", price: "9,90" },
    { name: "Cardinale", desc: "Single 9,90 € / Familien 16,90 €", price: "9,90" },
    { name: "Salami", desc: "Single 9,90 € / Familien 16,90 €", price: "9,90" },
    { name: "Spinat", desc: "Single 9,90 € / Familien 16,90 €", price: "9,90" },
    { name: "Melenzani Pizza", desc: "Single 9,90 € / Familien 16,90 €", price: "9,90" },
    { name: "Kebap Pizza", desc: "Single 11,90 € / Familien 18,90 €", price: "11,90", tag: "beliebt" },
    { name: "Extra Beilage", desc: "Single +1,00 € / Familien +2,00 €. Kalb +2,00 €.", price: "1,00" },
  ],
};

const HOURS = [
  { day: "Montag", time: "09:00 – 22:00" },
  { day: "Dienstag", time: "09:00 – 22:00" },
  { day: "Mittwoch", time: "09:00 – 22:00" },
  { day: "Donnerstag", time: "09:00 – 22:00" },
  { day: "Freitag", time: "09:00 – 22:00" },
  { day: "Samstag", time: "09:00 – 22:00" },
  { day: "Sonntag", time: "09:00 – 22:00" },
];

const REVIEWS = [
  { text: "Das Fleisch ist wirklich saftig und gut gewürzt — man merkt, dass hier täglich frisch mariniert wird. Kein Vergleich zu den üblichen Läden.", author: "M. K.", role: "Stammgast aus Aspern" },
  { text: "Das Brot kommt warm und knusprig direkt aus dem Ofen. Kleiner Laden, große Sorgfalt. Für mich der beste Kebap im 22.", author: "S. B.", role: "Nachbarin" },
  { text: "Schneller, freundlicher Service. Extrawünsche sind kein Problem, sogar bei viel Betrieb bleibt das Team ruhig.", author: "A. Ö.", role: "Mittagspause" },
  { text: "Fair im Preis, ehrlich in der Portion. Der Schanigarten ist im Sommer Gold wert.", author: "T. R.", role: "Familie aus Hirschstetten" },
  { text: "Wir haben für 12 Personen bestellt — alles pünktlich, alles heiß, alles ordentlich beschriftet. Wiederholungstäter.", author: "J. W.", role: "Büro-Bestellung" },
  { text: "Der Çay am Ende ist so eine kleine Geste, die den Unterschied macht. Fühlt sich einfach nach Familie an.", author: "L. D.", role: "Abendgast" },
];

const GALLERY = [
  { img: "images/gallery-1.jpg", title: "Hausgemachtes Fladenbrot", label: "Backstube", tall: true },
  { img: "images/gallery-2.jpg", title: "Gemütlich sitzen", label: "Ambiente" },
  { img: "images/gallery-3.jpg", title: "Vom Teller bis zum Dürüm", label: "Küche" },
  { img: "images/about.jpg", title: "Frisch gewickelt", label: "Dürüm" },
  { img: "images/hero.jpg", title: "Frisch vom Spieß", label: "Grill" },
];

/* ===== Render menu ===== */
const tabsEl = document.getElementById("menuTabs");
const listEl = document.getElementById("menuList");
const cats = Object.keys(MENU);
let activeCat = cats[0];

function renderTabs() {
  tabsEl.innerHTML = cats.map(c =>
    `<button class="menu-tab${c === activeCat ? " active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
}
function renderList() {
  listEl.innerHTML = MENU[activeCat].map(item => {
    const tagClass = (item.tag === "beliebt" || item.tag === "Menü") ? " hot" : "";
    const tag = item.tag ? `<span class="menu-tag${tagClass}">${item.tag}</span>` : "";
    const desc = item.desc ? `<p class="menu-item-desc">${item.desc}</p>` : "";
    return `<li class="menu-item">
      <div class="menu-item-main">
        <div class="menu-item-name"><h3>${item.name}</h3>${tag}</div>
        ${desc}
      </div>
      <div class="menu-item-price">${item.price} €</div>
    </li>`;
  }).join("");
}
tabsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".menu-tab");
  if (!btn) return;
  activeCat = btn.dataset.cat;
  renderTabs();
  renderList();
});
renderTabs();
renderList();

/* ===== Render reviews ===== */
document.getElementById("reviews").innerHTML = REVIEWS.map(r =>
  `<div class="review">
    <div class="review-stars" aria-label="5 von 5 Sternen">★★★★★</div>
    <p class="review-text">„${r.text}“</p>
    <div class="review-author"><b>${r.author}</b><span>${r.role}</span></div>
  </div>`
).join("");

/* ===== Render gallery ===== */
document.getElementById("gallery").innerHTML = GALLERY.map(g =>
  `<a href="#galerie" class="gallery-item${g.tall ? " tall" : ""} placeholder" data-label="Foto: ${g.label}">
    <img src="${g.img}" alt="${g.title}" loading="lazy" onload="this.parentElement.classList.remove('placeholder')" onerror="this.remove()">
    <div class="gallery-cap"><strong>${g.title}</strong><span>${g.label}</span></div>
  </a>`
).join("");

/* ===== Render hours ===== */
const todayIdx = (new Date().getDay() + 6) % 7;
document.getElementById("hoursList").innerHTML = HOURS.map((h, i) =>
  `<li class="${i === todayIdx ? "today" : ""}"><span>${h.day}${i === todayIdx ? " · heute" : ""}</span><span>${h.time}</span></li>`
).join("");

/* ===== Year ===== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== Nav ===== */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

/* ===== Scroll: progress + nav shrink + parallax ===== */
const progress = document.getElementById("scrollProgress");
const heroImg = document.getElementById("heroImg");
const heroGlow = document.getElementById("heroGlow");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function onScroll() {
  const y = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + "%";
  nav.classList.toggle("scrolled", y > 20);
  if (!reduce && y < window.innerHeight) {
    if (heroImg) heroImg.style.transform = `translateY(calc(-50% + ${y * 0.12}px))`;
    if (heroGlow) heroGlow.style.transform = `translate(0, calc(-50% + ${y * 0.06}px))`;
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ===== Reveal on scroll (with stagger) ===== */
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 5) * 70}ms`;
  io.observe(el);
});

/* ===== Hero image load ===== */
if (heroImg) {
  if (heroImg.complete && heroImg.naturalWidth > 0) heroImg.classList.add("loaded");
  heroImg.addEventListener("load", () => heroImg.classList.add("loaded"));
}

/* ===== Preloader / body loaded ===== */
function reveal() {
  document.body.classList.add("loaded");
  document.getElementById("preloader").classList.add("done");
}
window.addEventListener("load", () => setTimeout(reveal, 400));
setTimeout(reveal, 2200); // safety fallback
