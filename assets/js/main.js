const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}


const motdTitle = document.querySelector("[data-motd-title]");
const motdCopy = document.querySelector("[data-motd-copy]");
const motdHistory = document.querySelector("[data-motd-history]");
const motdDate = document.querySelector("[data-motd-date]");

if (motdTitle && motdCopy && motdHistory) {
  const messages = [
    {
      title: "Curiosity found the fault domain.",
      copy: "The answer usually appears after the assumptions are forced to explain themselves."
    },
    {
      title: "Trust the packet path, not the rumor.",
      copy: "A green check at one boundary does not prove the return trip survived the next one."
    },
    {
      title: "Document the weird part.",
      copy: "Today's impossible symptom is tomorrow's five-minute fix—provided somebody wrote down what actually happened."
    },
    {
      title: "DNS remembers everything except your deadline.",
      copy: "When the application looks haunted, verify the name, the record, the resolver, and the path before blaming the ghost."
    },
    {
      title: "The business impact is part of the topology.",
      copy: "Technical clarity matters most when it helps people understand what broke, why it mattered, and what happens next."
    },
    {
      title: "Packets do not care about organizational charts.",
      copy: "The failure can cross identity, switching, firewalls, cloud routing, and vendor boundaries without asking permission."
    },
    {
      title: "Temporary workarounds age in dog years.",
      copy: "Label them, document them, and schedule their retirement before they become permanent infrastructure."
    }
  ];

  const archiveSignals = [
    "The first ARPANET message stopped at “LO” when the remote system failed before LOGIN completed.",
    "DNS replaced a centrally maintained host list as network growth made one shared file impossible to scale.",
    "ARPANET's transition to TCP/IP helped establish the protocol foundation of the modern internet.",
    "The first website explained the World Wide Web project and how people could create and navigate web pages.",
    "The 1988 Morris worm helped accelerate organized computer-incident response and the creation of CERT/CC.",
    "Ethernet began as experimental packet networking work and became one of the foundations of local-area networking.",
    "A moth recorded in a computer logbook became one of computing history's most famous debugging stories."
  ];

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayNumber = Math.floor((now - startOfYear) / 86400000);
  let messageIndex = dayNumber % messages.length;

  const renderMotd = () => {
    const message = messages[messageIndex % messages.length];
    motdTitle.textContent = message.title;
    motdCopy.textContent = message.copy;
    motdHistory.textContent = archiveSignals[(dayNumber + messageIndex) % archiveSignals.length];
  };

  if (motdDate) {
    motdDate.textContent = new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(now);
  }

  renderMotd();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion) {
    window.setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length;
      const panel = motdTitle.closest(".motd-panel");
      panel?.classList.add("is-changing");
      window.setTimeout(() => {
        renderMotd();
        panel?.classList.remove("is-changing");
      }, 220);
    }, 14000);
  }
}


const readingProgress = document.querySelector("[data-reading-progress]");

if (readingProgress) {
  const updateReadingProgress = () => {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0
      ? Math.min(1, Math.max(0, window.scrollY / documentHeight))
      : 0;

    readingProgress.style.transform = `scaleX(${progress})`;
  };

  updateReadingProgress();
  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
}
