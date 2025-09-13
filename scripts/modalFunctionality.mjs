export function openModal() {
  const modal = document.getElementById("form-modal");
  if (modal) modal.style.display = "flex";
  console.log("Modal Opened!");
}

export function initModalControl() {
  const modal = document.getElementById("form-modal");
  const modalContent = modal?.querySelector(".modal-content");
  const closeModalBtn = document.getElementById("close-modal");
  const closeIconBtn = modal.querySelector(".close-btn");

  if (!modal || !modalContent || !closeModalBtn || !closeIconBtn) return;

  function closeModal() {
    modal.style.display = "none";
  }

  closeModalBtn.addEventListener("click", closeModal);
  closeIconBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}
