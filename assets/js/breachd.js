
(function () {
  const form = document.querySelector("[data-breachd-form]");
  const replayButton = document.querySelector("[data-terminal-replay]");
  const terminalCode = document.querySelector(".beast-terminal code");

  if (form) {
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
      modal?.classList.add("is-open");
      modal?.setAttribute("aria-hidden", "false");
      confirmButton?.focus();
    }

    function closeModal() {
      modal?.classList.remove("is-open");
      modal?.setAttribute("aria-hidden", "true");
      pendingUrl = "";
      input?.focus();
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = (input.value || "").trim();

      if (!email) {
        setMessage("breachd@guardian:~$ email required. Nothing is stored here.", true);
        input.focus();
        return;
      }

      if (!isValidEmail(email)) {
        setMessage("breachd@guardian:~$ invalid email format. Try again.", true);
        input.focus();
        return;
      }

      const url = "https://haveibeenpwned.com/account/" + encodeURIComponent(email);
      setMessage("breachd@guardian:~$ ready. Opening Have I Been Pwned after confirmation.", false);
      openModal(email, url);
    });

    confirmButton?.addEventListener("click", function () {
      if (pendingUrl) window.open(pendingUrl, "_blank", "noopener,noreferrer");
      closeModal();
    });

    cancelButtons.forEach(button => button.addEventListener("click", closeModal));

    modal?.addEventListener("click", function (event) {
      if (event.target === modal) closeModal();
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal?.classList.contains("is-open")) closeModal();
    });
  }

  if (replayButton && terminalCode) {
    const lines = [
      "packetphreak@portfolio:~$ ./guardian --init",
      "> Initializing BreachD...",
      "> Spawning guardian process",
      "> Loading threat intel",
      "> Enabling blue team mode",
      "> You’ve got a guardian.",
      "",
      "BreachD status: ACTIVE",
      "Mode: defend / detect / respond / recover",
      "Message: No shame. No scare tactics. Just useful first steps."
    ];

    function runReplay() {
      replayButton.disabled = true;
      terminalCode.textContent = "";
      let index = 0;
      const timer = window.setInterval(function () {
        terminalCode.textContent += lines[index] + "\\n";
        index += 1;
        if (index >= lines.length) {
          window.clearInterval(timer);
          replayButton.disabled = false;
        }
      }, 170);
    }

    replayButton.addEventListener("click", runReplay);
  }
})();
