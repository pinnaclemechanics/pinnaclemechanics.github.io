document.addEventListener("DOMContentLoaded", async () => {
  try {
    await (async () => {
      const { initAccordion } = await import("./accordionToggle.mjs");
      const { initNavigationToggle } = await import("./navigationToggle.mjs");
      const { enableStickyNav } = await import("./stickyNavigation.mjs");
      const { initContactFormValidation } = await import(
        "./formValidation.mjs"
      );
      const { initContactFormSubmission } = await import("./formSubmit.mjs");
      const { initModalControl } = await import("./modalFunctionality.mjs");
      const { initBackToTopButton } = await import("./btttButton.mjs");

      initAccordion();
      initNavigationToggle();
      enableStickyNav();
      initContactFormValidation();
      initContactFormSubmission();
      initModalControl();
      initBackToTopButton();
    })();

    console.log("✅ Main functionality initialised.");
  } catch (err) {
    console.error("❌ Error during initialisation:", err);
  }
});
