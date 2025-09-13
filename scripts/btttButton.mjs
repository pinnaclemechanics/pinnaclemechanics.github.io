export function initBackToTopButton() {
  const button = document.getElementById("back-to-top");
  if (!button) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 300;
    button.classList.toggle("visible", scrolled);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
