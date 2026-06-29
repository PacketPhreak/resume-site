
(function () {
  const form = document.querySelector("[data-breachd-form]");
  const replayButton = document.querySelector("[data-terminal-replay]");
  const terminalCode = document.querySelector(".beast-terminal code");

  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

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
        terminalCode.textContent += lines[index] + "\n";
        index += 1;
        if (index >= lines.length) {
          window.clearInterval(timer);
          replayButton.disabled = false;
        }
      }, 170);
    }

    replayButton.addEventListener("click", runReplay);
  }

  // Option 1: animated room hotspots
  const dialog = document.querySelector("[data-room-dialog]");
  document.querySelectorAll("[data-hotspot]").forEach(button => {
    button.addEventListener("click", () => {
      if (!dialog) return;
      const strong = dialog.querySelector("strong");
      if (strong) strong.textContent = button.dataset.hotspot || "BreachD is watching the signal.";
      dialog.classList.add("is-active");
      window.setTimeout(() => dialog.classList.remove("is-active"), 2200);
    });
  });

  // Option 2: interactive console app
  const arcadeTerminal = document.querySelector("[data-arcade-terminal]");
  const consoleState = document.querySelector("[data-console-state]");
  const actionButtons = document.querySelectorAll("[data-arcade-action]");

  const sequences = {
    boot: {
      state: "ONLINE",
      guardian: "active",
      mode: "blue team",
      risk: "watching",
      lines: [
        "packetphreak@portfolio:~$ ./breachd --init",
        "> waking guardian daemon",
        "> loading blue-team playbook",
        "> checking identity hygiene modules",
        "> starting live room animations",
        "> BreachD status: ACTIVE",
        "> message: you've got a guardian"
      ]
    },
    scan: {
      state: "SCANNING",
      guardian: "active",
      mode: "exposure",
      risk: "medium",
      lines: [
        "packetphreak@portfolio:~$ ./breachd --demo-scan",
        "> checking public breach awareness workflow",
        "> validating password reuse reminder",
        "> checking MFA recommendation",
        "> preparing Have I Been Pwned handoff",
        "> local storage: disabled",
        "> result: useful next steps ready"
      ]
    },
    qr: {
      state: "VERIFY",
      guardian: "active",
      mode: "qr caution",
      risk: "elevated",
      lines: [
        "packetphreak@portfolio:~$ ./breachd --qr-caution",
        "> unknown QR source detected",
        "> do not sign in from surprise links",
        "> open trusted sites directly",
        "> verify the source before entering credentials",
        "> BreachD says: slow is smooth, smooth is safe"
      ]
    },
    reset: {
      state: "STANDBY",
      guardian: "standby",
      mode: "idle",
      risk: "unknown",
      lines: [
        "packetphreak@portfolio:~$ ./breachd --standby",
        "> guardian daemon waiting",
        "> click BOOT BREACHD to begin"
      ]
    }
  };

  function playSequence(sequence) {
    if (!arcadeTerminal) return;
    actionButtons.forEach(btn => btn.disabled = true);
    if (consoleState) consoleState.textContent = sequence.state;
    setText("[data-status-guardian]", sequence.guardian);
    setText("[data-status-mode]", sequence.mode);
    setText("[data-status-risk]", sequence.risk);

    arcadeTerminal.textContent = "";
    let index = 0;
    const timer = window.setInterval(() => {
      arcadeTerminal.textContent += sequence.lines[index] + "\n";
      index += 1;
      if (index >= sequence.lines.length) {
        window.clearInterval(timer);
        actionButtons.forEach(btn => btn.disabled = false);
      }
    }, 160);
  }

  actionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sequence = sequences[button.dataset.arcadeAction] || sequences.boot;
      playSequence(sequence);
    });
  });

  // Option 3: mini game
  const gameCards = document.querySelectorAll("[data-phish]");
  const scoreEl = document.querySelector("[data-game-score]");
  const roundEl = document.querySelector("[data-game-round]");
  const statusEl = document.querySelector("[data-game-status]");
  const feedbackEl = document.querySelector("[data-game-feedback]");
  const resetGame = document.querySelector("[data-game-reset]");
  let score = 0;
  let clicked = 0;
  let round = 1;
  const badTotal = Array.from(gameCards).filter(card => card.dataset.phish === "bad").length;

  function updateGameStatus(text) {
    if (statusEl) statusEl.textContent = text;
    if (scoreEl) scoreEl.textContent = String(score);
    if (roundEl) roundEl.textContent = String(round);
  }

  function resetRound() {
    score = 0;
    clicked = 0;
    round += 1;
    gameCards.forEach(card => {
      card.disabled = false;
      card.classList.remove("is-correct", "is-wrong");
      card.removeAttribute("aria-pressed");
    });
    if (feedbackEl) {
      feedbackEl.textContent = "Fresh round. Click the suspicious cards. Leave the safe ones alone.";
    }
    updateGameStatus("ready");
  }

  gameCards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.disabled) return;
      clicked += 1;
      const isBad = card.dataset.phish === "bad";

      if (isBad) {
        score += 1;
        card.classList.add("is-correct");
        card.setAttribute("aria-pressed", "true");
        if (feedbackEl) feedbackEl.textContent = "Nice catch. " + (card.dataset.reason || "");
      } else {
        score = Math.max(0, score - 1);
        card.classList.add("is-wrong");
        if (feedbackEl) feedbackEl.textContent = "Careful. That one was safer. " + (card.dataset.reason || "");
      }

      card.disabled = true;

      if (score >= badTotal) {
        updateGameStatus("passed");
        if (feedbackEl) feedbackEl.textContent = "BreachD approves. You spotted the phish before it bit.";
      } else {
        updateGameStatus(clicked >= gameCards.length ? "complete" : "playing");
      }
    });
  });

  resetGame?.addEventListener("click", resetRound);
})();
