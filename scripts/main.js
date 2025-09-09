import { initAccordion } from "./accordionToggle.mjs";
import { initNavigationToggle } from "./navigationToggle.mjs";
import { enableStickyNav } from "./stickyNavigation.mjs";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ main.js loaded");
  initAccordion();
  initNavigationToggle();
  enableStickyNav();
});
