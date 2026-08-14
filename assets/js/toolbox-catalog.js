(() => {
  "use strict";

  /*
   * Th3 t00lB0x catalog
   * ------------------
   * Public catalog entries live in TOOLBOX_APPS.
   *
   * Redacted slots intentionally preserve the visible catalog structure
   * without publishing project identities, descriptions, implementation
   * details, platform clues, release metadata, or links.
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
      featured: true,
      redacted: false
    },

    // The following four slots intentionally remain in the catalog layout.
    // Their original public-facing identities and metadata are not present
    // in this source file.
    {
      id: "redacted-slot-01",
      title: "REDACTED PROJECT",
      monogram: "██",
      kicker: "Public details withheld",
      description: "Project details intentionally withheld from public view. This catalog position remains only to preserve the original visual structure.",
      categories: ["Redacted"],
      chips: ["WITHHELD", "WITHHELD", "WITHHELD"],
      version: "REDACTED",
      packageType: "WITHHELD",
      integrity: "WITHHELD",
      statusLabel: "PUBLIC DATA REDACTED",
      statusTone: "neutral",
      detailsUrl: "",
      detailsLabel: "",
      downloadUrl: "",
      downloadLabel: "",
      sha256: "",
      available: false,
      featured: false,
      redacted: true
    },
    {
      id: "redacted-slot-02",
      title: "REDACTED PROJECT",
      monogram: "██",
      kicker: "Public details withheld",
      description: "Project details intentionally withheld from public view. This catalog position remains only to preserve the original visual structure.",
      categories: ["Redacted"],
      chips: ["WITHHELD", "WITHHELD", "WITHHELD"],
      version: "REDACTED",
      packageType: "WITHHELD",
      integrity: "WITHHELD",
      statusLabel: "PUBLIC DATA REDACTED",
      statusTone: "neutral",
      detailsUrl: "",
      detailsLabel: "",
      downloadUrl: "",
      downloadLabel: "",
      sha256: "",
      available: false,
      featured: false,
      redacted: true
    },
    {
      id: "redacted-slot-03",
      title: "REDACTED PROJECT",
      monogram: "██",
      kicker: "Public details withheld",
      description: "Project details intentionally withheld from public view. This catalog position remains only to preserve the original visual structure.",
      categories: ["Redacted"],
      chips: ["WITHHELD", "WITHHELD", "WITHHELD"],
      version: "REDACTED",
      packageType: "WITHHELD",
      integrity: "WITHHELD",
      statusLabel: "PUBLIC DATA REDACTED",
      statusTone: "neutral",
      detailsUrl: "",
      detailsLabel: "",
      downloadUrl: "",
      downloadLabel: "",
      sha256: "",
      available: false,
      featured: false,
      redacted: true
    },
    {
      id: "redacted-slot-04",
      title: "REDACTED PROJECT",
      monogram: "██",
      kicker: "Public details withheld",
      description: "Project details intentionally withheld from public view. This catalog position remains only to preserve the original visual structure.",
      categories: ["Redacted"],
      chips: ["WITHHELD", "WITHHELD", "WITHHELD"],
      version: "REDACTED",
      packageType: "WITHHELD",
      integrity: "WITHHELD",
      statusLabel: "PUBLIC DATA REDACTED",
      statusTone: "neutral",
      detailsUrl: "",
      detailsLabel: "",
      downloadUrl: "",
      downloadLabel: "",
      sha256: "",
      available: false,
      featured: false,
      redacted: true
    }
  ];

  const FILTER_ORDER = ["All", "Firmware", "Diagnostics", "Redacted"];

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

  /*
   * The redaction treatment is injected here so this remains a one-file
   * replacement. No toolbox.html or toolbox.css changes are required.
   */
  const installRedactionStyles = () => {
    if (document.getElementById("toolbox-redaction-styles")) return;

    const style = document.createElement("style");
    style.id = "toolbox-redaction-styles";
    style.textContent = `
      .tool-card.is-redacted {
        position: relative;
        overflow: hidden;
        isolation: isolate;
        min-height: 100%;
        user-select: none;
      }

      .tool-card.is-redacted .tool-card-body,
      .tool-card.is-redacted .tool-card-footer {
        filter: blur(7px);
        opacity: .52;
        transform: scale(1.015);
        transform-origin: center;
        pointer-events: none;
      }

      .tool-card.is-redacted::before,
      .tool-card.is-redacted::after {
        content: "";
        position: absolute;
        z-index: 3;
        left: 7%;
        right: 7%;
        height: 18px;
        background: rgba(0, 0, 0, .92);
        border: 1px solid rgba(255, 255, 255, .04);
        box-shadow: 0 7px 22px rgba(0, 0, 0, .32);
        transform: rotate(-1.5deg);
        pointer-events: none;
      }

      .tool-card.is-redacted::before {
        top: 32%;
      }

      .tool-card.is-redacted::after {
        top: 53%;
        transform: rotate(1deg);
      }

      .tool-redaction-overlay {
        position: absolute;
        z-index: 5;
        inset: 0;
        display: grid;
        place-items: center;
        padding: 24px;
        pointer-events: none;
        background:
          repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, .012) 0,
            rgba(255, 255, 255, .012) 8px,
            transparent 8px,
            transparent 18px
          ),
          rgba(2, 7, 13, .12);
        backdrop-filter: blur(1.5px);
      }

      .tool-redaction-stamp {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        max-width: calc(100% - 28px);
        padding: .7rem 1rem;
        border: 1px solid rgba(102, 227, 255, .35);
        border-radius: 8px;
        background: rgba(2, 7, 13, .90);
        box-shadow:
          0 14px 38px rgba(0, 0, 0, .48),
          inset 0 1px rgba(255, 255, 255, .04);
        color: #b9d7e6;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
        font-size: .72rem;
        font-weight: 900;
        letter-spacing: .15em;
        line-height: 1.4;
        text-align: center;
        text-transform: uppercase;
      }

      .tool-card.is-redacted:hover {
        transform: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .tool-card.is-redacted,
        .tool-card.is-redacted * {
          transition: none !important;
          animation: none !important;
        }
      }
    `;

    document.head.append(style);
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
    const classes = [
      "tool-card",
      app.featured ? "is-featured" : "",
      app.redacted ? "is-redacted" : ""
    ].filter(Boolean).join(" ");

    const card = make("article", classes);
    card.dataset.toolId = app.id;

    if (app.redacted) {
      card.setAttribute("aria-label", "Redacted project. Public details withheld.");
    }

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
      const pendingLabel = app.redacted ? "WITHHELD" : "Release queued";
      const pending = make("span", "tool-card-link", pendingLabel);
      pending.setAttribute("aria-disabled", "true");
      if (!app.redacted) {
        pending.title = "The verified release file is not public yet";
      }
      actions.append(pending);
    }

    footer.append(status, actions);
    card.append(body, footer);

    if (app.redacted) {
      body.setAttribute("aria-hidden", "true");
      footer.setAttribute("aria-hidden", "true");

      const overlay = make("div", "tool-redaction-overlay");
      overlay.setAttribute("aria-hidden", "true");
      overlay.append(
        make(
          "span",
          "tool-redaction-stamp",
          "REDACTED // PUBLIC DETAILS WITHHELD"
        )
      );
      card.append(overlay);
    }

    return card;
  };

  const matches = (app) => {
    const categoryMatch =
      activeFilter === "All" || app.categories.includes(activeFilter);

    const haystack = [
      app.title,
      app.kicker,
      app.description,
      app.version,
      ...app.categories,
      ...app.chips
    ]
      .join(" ")
      .toLowerCase();

    return categoryMatch && haystack.includes(searchTerm);
  };

  const render = () => {
    const visibleApps = TOOLBOX_APPS.filter(matches);

    grid.replaceChildren(...visibleApps.map(createCard));
    grid.hidden = visibleApps.length === 0;
    empty.hidden = visibleApps.length !== 0;

    count.textContent =
      `${visibleApps.length} ${visibleApps.length === 1 ? "tool" : "tools"} in signal range`;

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
    const isTyping =
      activeTag === "INPUT" ||
      activeTag === "TEXTAREA" ||
      activeTag === "SELECT";

    if (event.key === "/" && !isTyping) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  installRedactionStyles();
  render();
})();
