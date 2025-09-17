export function openModal() {
  const modal = document.querySelector("#form-modal");
  if (!modal) {
    console.warn("⏸️ Modal not found. Cannot open.");
    return;
  }
  modal.classList.remove("hidden");
}

export function initModalControl() {
  const modal = document.querySelector("#form-modal");
  const closeBtn = document.querySelector("#close-modal");

  if (!modal || !closeBtn) {
    console.warn("⏸️ Modal control skipped—elements missing.");
    return;
  }

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });

  console.log("✅ Modal control initialised.");
}
