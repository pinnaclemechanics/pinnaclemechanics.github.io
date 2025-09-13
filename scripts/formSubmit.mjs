import { openModal } from "./modalFunctionality.mjs";

export function initContactFormSubmission() {
  const form = document.getElementById("contact-form");
  const endpoint = "https://formspree.io/f/xblabwgn";

  if (!form) return;
  console.log("📨 Binding form submission");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      console.log("✅ Formspree responded OK");
      form.reset();
      openModal();
    } else {
      console.log("❌ Formspree error");
      alert("Something went wrong. Please try again later.");
    }
  });
}
