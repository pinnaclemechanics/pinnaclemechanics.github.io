export function initAccordion() {
  console.log("✅ initAccordion called");

  const toggles = document.querySelectorAll(".accordion-toggle");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      console.log("👉 accordion clicked:", toggle.textContent.trim());
      toggle.classList.toggle("open");
      const content = toggle.nextElementSibling;
      if (content) {
        content.classList.toggle("open");
      }
    });
  });
}
