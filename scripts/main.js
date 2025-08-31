import { initAccordion } from "./accordionToggle.mjs";
import { initNavigationToggle } from "./navigationToggle.mjs";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ main.js loaded");
  initAccordion();
  initNavigationToggle();
});
