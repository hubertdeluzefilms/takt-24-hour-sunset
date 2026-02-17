// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Force la nav vers #watch depuis l'accueil (même si le hash se perd)
const cta = document.getElementById("cta-watch");
if (cta) {
  cta.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "film.html#watch";
  });
}

// Si on arrive avec un #hash, on scroll après chargement (utile avec iframe YouTube)
window.addEventListener("load", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
