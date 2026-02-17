// Footer year (safe)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Quand on clique un lien avec data-scroll, on mémorise la cible
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-scroll]");
  if (!link) return;
  sessionStorage.setItem("scrollTarget", link.dataset.scroll);
});

// Au chargement, on scroll soit vers le hash (#watch), soit vers scrollTarget
window.addEventListener("load", () => {
  const hash = window.location.hash;
  const targetFromHash = hash ? document.querySelector(hash) : null;

  const scrollTarget = sessionStorage.getItem("scrollTarget");
  const targetFromStorage = scrollTarget ? document.getElementById(scrollTarget) : null;

  const target = targetFromHash || targetFromStorage;
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // On nettoie
  if (scrollTarget) sessionStorage.removeItem("scrollTarget");
});
