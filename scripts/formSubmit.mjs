export function initContactFormSubmission() {
  const form = document.querySelector(".contact-form form");
  const modal = document.getElementById("form-modal");
  const closeBtn = document.getElementById("close-modal");

  if (!form || !modal || !closeBtn) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      modal.classList.remove("hidden");
      form.reset();
    } else {
      alert("Something went wrong. Please try again later.");
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}
