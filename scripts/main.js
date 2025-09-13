import { initAccordion } from "./accordionToggle.mjs";
import { initNavigationToggle } from "./navigationToggle.mjs";
import { enableStickyNav } from "./stickyNavigation.mjs";
import { initContactFormValidation } from "./formValidation.mjs";
import { initContactFormSubmission } from "./formSubmit.mjs";

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ main.js loaded");
  initAccordion();
  initNavigationToggle();
  enableStickyNav();
  initContactFormValidation();
  initContactFormSubmission();
});
