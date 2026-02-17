document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("load", () => {
  if (window.location.hash) {
    const el = document.querySelector(window.location.hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
