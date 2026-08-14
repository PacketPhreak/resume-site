(() => {
  "use strict";

  /*
   * ADDING A DOWNLOAD
   * -----------------
   * 1. Copy one object in TOOLBOX_APPS.
   * 2. Change the title, description, categories, and release metadata.
   * 3. Put the release file in assets/downloads/ (or use a trusted release URL).
   * 4. Set downloadUrl, sha256, and available: true.
   *
   * The card, search index, filters, status, and download button update automatically.
   */
  const TOOLBOX_APPS = [
    {
      id: "packetphreak-flippa",
      title: "PacketPhreak Flippa",
      monogram: "PF",
      kicker: "Embedded systems / firmware",
      description: "My independently branded Flipper Zero firmware build, paired with WiFi Dev Board support, Marauder capability, BadUSB workflows, recovery notes, and a release process I can reproduce.",
      categories: ["Firmware", "Diagnostics"],
      chips: ["Flipper Zero", "ESP32-S2", "WiFi Dev Board", "BadUSB"],
      version: "1.0-RC2",
      packageType: "Release kit",
      integrity: "Hash at release",
      statusLabel: "Hardware validation next",
      statusTone: "amber",
      detailsUrl: "https://github.com/PacketPhreak",
      detailsLabel: "Project updates",
      downloadUrl: "",
      downloadLabel: "Download RC2",
      sha256: "",
      available: false,
      featured: true
    },
    {
      id: "project-raincloud",
      title: "Project RainCloud",
      monogram: "RC",
      kicker: "Windows / OneDrive recovery",
      description: "A focused OneDrive recovery utility for the days when sync state, cached identity, and reality stop agreeing with each other.",
      categories: ["Windows", "Diagnostics"],
      chips: ["Windows", ".NET", "OneDrive", "Repair workflow"],
      version: "In development",
      packageType: "Windows app",
      integrity: "Planned",
      statusLabel: "Build queued",
      statusTone: "neutral",
      detailsUrl: "https://github.com/PacketPhreak",
      detailsLabel: "Watch GitHub",
      downloadUrl: "",
      downloadLabel: "Download",
      sha256: "",
      available: false,
      featured: false
    },
    {
      id: "outlook-defibrillator",
      title: "Outlook Defibrillator",
      monogram: "OD",
      kicker: "Windows / mail repair",
      description: "A guided repair workflow for broken Outlook profiles, stale credentials, add-in trouble, and mail clients that need a controlled restart—not guesswork.",
      categories: ["Windows", "PowerShell"],
      chips: ["Windows", "Outlook", "Microsoft 365", "Repair"],
      version: "In development",
      packageType: "Support utility",
      integrity: "Planned",
      statusLabel: "On the bench",
      statusTone: "neutral",
      detailsUrl: "https://github.com/PacketPhreak",
      detailsLabel: "Watch GitHub",
      downloadUrl: "",
      downloadLabel: "Download",
      sha256: "",
      available: false,
      featured: false
    },
    {
      id: "identity-crisis",
      title: "Identity Crisis Command Center",
      monogram: "IC",
      kicker: "Identity / PowerShell",
      description: "A PowerShell-driven identity triage console for comparing the signals that matter across Active Directory, Entra ID, group state, and authentication symptoms.",
      categories: ["PowerShell", "Identity", "Diagnostics"],
      chips: ["PowerShell", "Active Directory", "Entra ID", "Triage"],
      version: "Roadmap",
      packageType: "Script bundle",
      integrity: "Planned",
      statusLabel: "Design phase",
      statusTone: "neutral",
      detailsUrl: "https://github.com/PacketPhreak",
      detailsLabel: "Watch GitHub",
      downloadUrl: "",
      downloadLabel: "Download",
      sha256: "",
      available: false,
      featured: false
    },
    {
      id: "the-interrogator",
      title: "The Interrogator",
      monogram: "TI",
      kicker: "Endpoint diagnostics",
      description: "A repeatable endpoint interrogation kit that gathers the useful facts first, keeps the output readable, and helps turn strange symptoms into a defensible next step.",
      categories: ["PowerShell", "Diagnostics", "Windows"],
      chips: ["PowerShell", "Endpoint", "Evidence", "Reporting"],
      version: "Roadmap",
      packageType: "Diagnostic kit",
      integrity: "Planned",
      statusLabel: "Design phase",
      statusTone: "neutral",
      detailsUrl: "https://github.com/PacketPhreak",
      detailsLabel: "Watch GitHub",
      downloadUrl: "",
      downloadLabel: "Download",
      sha256: "",
      available: false,
      featured: false
    }
  ];

  const FILTER_ORDER = ["All", "Firmware", "Windows", "PowerShell", "Identity", "Diagnostics"];
  const grid = document.querySelector("[data-tool-grid]");
  const filtersHost = document.querySelector("[data-tool-filters]");
  const searchInput = document.querySelector("[data-tool-search]");
  const count = document.querySelector("[data-tool-count]");
  const empty = document.querySelector("[data-tool-empty]");
  const reset = document.querySelector("[data-tool-reset]");

  if (!grid || !filtersHost || !searchInput || !count || !empty) return;

  let activeFilter = "All";
  let searchTerm = "";

  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  const createReleaseMeta = (app) => {
    const list = make("dl", "tool-release-grid");
    [
      ["Version", app.version],
      ["Package", app.packageType],
      ["Integrity", app.sha256 ? "SHA-256" : app.integrity]
    ].forEach(([label, value]) => {
      const item = document.createElement("div");
      item.append(make("dt", "", label), make("dd", "", value));
      list.append(item);
    });
    return list;
  };

  const createCard = (app) => {
    const card = make("article", `tool-card${app.featured ? " is-featured" : ""}`);
    card.dataset.toolId = app.id;

    const body = make("div", "tool-card-body");
    const top = make("div", "tool-card-top");
    const monogram = make("span", "tool-monogram", app.monogram);
    monogram.setAttribute("aria-hidden", "true");
    top.append(monogram, make("p", "tool-card-kicker", app.kicker));

    const title = make("h3", "tool-card-title", app.title);
    const description = make("p", "tool-card-description", app.description);
    const chips = make("ul", "tool-chip-list");
    app.chips.forEach((chip) => chips.append(make("li", "", chip)));
    body.append(top, title, description, chips, createReleaseMeta(app));

    const footer = make("div", "tool-card-footer");
    const status = make("span", "tool-status", app.statusLabel);
    status.dataset.tone = app.statusTone;

    const actions = make("div", "tool-card-actions");
    if (app.detailsUrl) {
      const details = make("a", "tool-card-link", app.detailsLabel);
      details.href = app.detailsUrl;
      details.target = "_blank";
      details.rel = "noopener noreferrer";
      actions.append(details);
    }

    if (app.available && app.downloadUrl) {
      const download = make("a", "tool-card-link is-download", app.downloadLabel);
      download.href = app.downloadUrl;
      download.setAttribute("download", "");
      if (app.sha256) download.title = `SHA-256: ${app.sha256}`;
      actions.append(download);
    } else {
      const pending = make("span", "tool-card-link", "Release queued");
      pending.setAttribute("aria-disabled", "true");
      pending.title = "The verified release file is not public yet";
      actions.append(pending);
    }

    footer.append(status, actions);
    card.append(body, footer);
    return card;
  };

  const matches = (app) => {
    const categoryMatch = activeFilter === "All" || app.categories.includes(activeFilter);
    const haystack = [
      app.title,
      app.kicker,
      app.description,
      app.version,
      ...app.categories,
      ...app.chips
    ].join(" ").toLowerCase();
    return categoryMatch && haystack.includes(searchTerm);
  };

  const render = () => {
    const visibleApps = TOOLBOX_APPS.filter(matches);
    grid.replaceChildren(...visibleApps.map(createCard));
    grid.hidden = visibleApps.length === 0;
    empty.hidden = visibleApps.length !== 0;
    count.textContent = `${visibleApps.length} ${visibleApps.length === 1 ? "tool" : "tools"} in signal range`;

    filtersHost.querySelectorAll("button").forEach((button) => {
      const selected = button.dataset.filter === activeFilter;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  };

  FILTER_ORDER.forEach((filter) => {
    const button = make("button", "toolbox-filter", filter);
    button.type = "button";
    button.dataset.filter = filter;
    button.addEventListener("click", () => {
      activeFilter = filter;
      render();
    });
    filtersHost.append(button);
  });

  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim().toLowerCase();
    render();
  });

  reset?.addEventListener("click", () => {
    activeFilter = "All";
    searchTerm = "";
    searchInput.value = "";
    render();
    searchInput.focus();
  });

  document.addEventListener("keydown", (event) => {
    const activeTag = document.activeElement?.tagName;
    const isTyping = activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT";
    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  render();
})();
