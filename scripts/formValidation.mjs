export function initContactFormValidation() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  const fields = {
    fullName: form.querySelector("#full-name"),
    email: form.querySelector("#email"),
    phone: form.querySelector("#phone"),
    message: form.querySelector("#message"),
  };

  const submitBtn = form.querySelector('button[type="submit"]');
  let touched = false;

  const validators = {
    fullName: (value) => /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(value.trim()),

    email: (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(value.trim()),

    phone: (value) => {
      const cleaned = value.replace(/\s+/g, "");
      const digitOnly = cleaned.replace(/\D/g, "");

      // Don't validate until user has typed at least 10 digits
      if (digitOnly.length < 10) return true;

      const isValidFormat = /^\+?(\d{10,11})$/.test(cleaned);
      const isCorrectLength =
        digitOnly.length === 11 ||
        (cleaned.startsWith("+44") && digitOnly.length === 12);

      return isValidFormat && isCorrectLength;
    },

    message: (value) => {
      const cleaned = value.replace(/[^a-zA-Z\s]/g, "").trim();
      return cleaned.length >= 10 && /\b[a-zA-Z]{3,}\b/.test(cleaned);
    },
  };

  const errorMessages = {
    fullName: "Enter a valid name with capitalised words and no numbers.",
    email: "Enter a valid email address (e.g. name@example.com).",
    phone:
      "Enter a valid UK phone number with 11 digits and no letters or spaces.",
    message: "Please enter a meaningful message with real words.",
  };

  function showError(field, message) {
    clearError(field);
    field.classList.add("field-invalid");

    const errorEl = document.createElement("div");
    errorEl.className = "field-error";
    errorEl.textContent = message;
    field.insertAdjacentElement("afterend", errorEl);
  }

  function clearError(field) {
    field.classList.remove("field-invalid");
    const next = field.nextElementSibling;
    if (next && next.classList.contains("field-error")) {
      next.remove();
    }
  }

  function validateField(fieldName) {
    const field = fields[fieldName];
    const value = field.value;
    const isValid = validators[fieldName](value);

    if (!isValid) {
      showError(field, errorMessages[fieldName]);
    } else {
      clearError(field);
    }

    return isValid;
  }

  function validateAll() {
    const results = Object.keys(fields).map((name) =>
      validators[name](fields[name].value)
    );
    const allValid = results.every(Boolean);
    submitBtn.disabled = !allValid;
  }

  Object.entries(fields).forEach(([name, field]) => {
    field.addEventListener("focus", () => {
      if (!touched) {
        submitBtn.disabled = true;
        touched = true;
      }
    });

    field.addEventListener("input", () => {
      validateField(name); // only validate this field
      validateAll(); // update button state
    });

    field.addEventListener("blur", () => {
      validateField(name); // only validate this field
      validateAll(); // update button state
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateAll();

    if (!submitBtn.disabled) {
      form.submit();
    }
  });
}
