export function initNavigationToggle() {
  console.log("✅ initNavigationToggle called");

  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector(".nav-list");

  if (!menuBtn || !navList) {
    console.warn("⚠️ menuBtn or navList not found");
    return;
  }

  menuBtn.addEventListener("click", () => {
    console.log("👉 menu button hovered");
    navList.classList.toggle("open");
    console.log("nav-list classes:", navList.className);
  });
}
