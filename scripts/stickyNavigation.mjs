export function enableStickyNav() {
  const nav = document.querySelector(".nav-container");
  if (!nav) return console.error("StickyNav: .nav-container not found!");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 0;

    nav.style.position = isScrolled ? "fixed" : "";
    nav.style.top = isScrolled ? "0" : "";
    nav.style.left = isScrolled ? "0" : "";
    nav.style.zIndex = isScrolled ? "1000" : "";
    nav.style.boxShadow = isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.2)" : "";
  });
}
