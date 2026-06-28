
(function () {
  const form = document.querySelector("[data-breachd-form]");
  if (!form) return;

  const input = form.querySelector("[data-breachd-email]");
  const message = document.querySelector("[data-breachd-message]");
  const modal = document.querySelector("[data-breachd-modal]");
  const modalEmail = document.querySelector("[data-breachd-modal-email]");
  const confirmButton = document.querySelector("[data-breachd-confirm]");
  const cancelButtons = document.querySelectorAll("[data-breachd-cancel]");
  let pendingUrl = "";

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setMessage(text, isError) {
    if (!message) return;
    message.textContent = text;
    message.classList.toggle("is-error", Boolean(isError));
  }

  function openModal(email, url) {
    pendingUrl = url;
    if (modalEmail) modalEmail.textContent = email;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    confirmButton?.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    pendingUrl = "";
    input?.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = (input.value || "").trim();

    if (!email) {
      setMessage("BreachD needs an email address to check. Nothing is stored here.", true);
      input.focus();
      return;
    }

    if (!isValidEmail(email)) {
      setMessage("That does not look like a valid email address yet.", true);
      input.focus();
      return;
    }

    const url = "https://haveibeenpwned.com/account/" + encodeURIComponent(email);
    setMessage("Ready. You will leave PacketPhreak and view results securely on Have I Been Pwned.", false);
    openModal(email, url);
  });

  confirmButton?.addEventListener("click", function () {
    if (pendingUrl) {
      window.open(pendingUrl, "_blank", "noopener,noreferrer");
    }
    closeModal();
  });

  cancelButtons.forEach(button => button.addEventListener("click", closeModal));

  modal?.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal?.classList.contains("is-open")) closeModal();
  });
})();
