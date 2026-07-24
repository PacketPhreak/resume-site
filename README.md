<h1>
  <img src="assets/readme/readme-title.svg" alt="PacketPhreak Resume Site" width="760">
</h1>

Personal portfolio, public-safe career archive, case-study library, and technical playground for **Joshua C. McDonald / PacketPhreak**.

> **Called by curiosity. Guided by the light.**

<h2>
  <img src="assets/readme/live-site.svg" alt="Live site" width="520">
</h2>

```text
https://joshuacmcdonald.com
```

<h2>
  <img src="assets/readme/current-version.svg" alt="Current version" width="520">
</h2>

```text
v3.8.1 · Precision Alignment
```

This synchronized build starts from the current uploaded repository—the version containing the Open Graph, Twitter/X, favicon, manifest, and social-preview assets.

<h3>
  <img src="assets/readme/current-build.svg" alt="New in the current build" width="700">
</h3>

- Consolidated duplicate `<title>`, description, and theme-color tags
- Added consistent canonical, Open Graph, Twitter/X, icon, manifest, and robots metadata to every public HTML page
- Preserved all uploaded social-preview images and icon assets
- Restored the project README
- Preserved the original preview-kit notes as `PREVIEW_ASSETS.md`
- Added `PROJECT_STATE.md` and `CHANGELOG.md` for cleaner interchat handoffs
- Applied the BreachD activity naming and spacing polish to the current repository
- Replaced visible Option 1 / 2 / 3 labels with:
  - **Live Command Room**
  - **Guardian Console**
  - **Spot the Phish**

<h2>
  <img src="assets/readme/site-map.svg" alt="Site map" width="520">
</h2>

```text
index.html                  Main portfolio
timeline.html               Career Time Capsule
case-study-pi-azure.html    Public-safe PI / Azure connectivity case study
case-study-isilon-dr.html   Dell Isilon A300 storage and disaster-recovery case study
breachd.html                BreachD command room, console, and phishing activity
SECURITY.md                 Vulnerability reporting policy
PREVIEW_ASSETS.md           Social-preview asset deployment notes
PROJECT_STATE.md            Current handoff and continuation state
CHANGELOG.md                Version history
_headers                    Cloudflare Pages response headers
site.webmanifest            Installable-web metadata
assets/                     CSS, JavaScript, documents, images, and README art
icons/                      Favicons and app icons
```

<h2>
  <img src="assets/readme/breachd.svg" alt="BreachD" width="520">
</h2>

BreachD is PacketPhreak's blue-team cyber buddy and interactive visitor-safety area.

The page includes:

- **Live Command Room** — animated room, scanlines, fog, hotspots, and responsive dialogue
- **Guardian Console** — boot sequence, demo exposure workflow, QR caution mode, and the HIBP handoff
- **Spot the Phish** — a small phishing-awareness game with scoring and feedback
- the **10:10:42** clock and “One more thing...” homage

PacketPhreak does not store visitor email addresses. The exposure form validates locally and opens Have I Been Pwned after confirmation.

<h2>
  <img src="assets/readme/social-preview-assets.svg" alt="Social preview assets" width="700">
</h2>

```text
og-image.png                  1200 × 630 Open Graph preview
twitter-card.png              1200 × 675 Twitter/X card
social-square.png             1080 × 1080 square social image
wide-banner-1600x900.png      Wide banner artwork
icons/                        Favicon and application icons
site.webmanifest              Manifest metadata
```

Detailed deployment and cache notes are preserved in [`PREVIEW_ASSETS.md`](PREVIEW_ASSETS.md).

<h2>
  <img src="assets/readme/local-testing.svg" alt="Local testing" width="520">
</h2>

From the repository root:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Test at minimum:

```text
/
breachd.html
timeline.html
case-study-pi-azure.html
case-study-isilon-dr.html
```

<h2>
  <img src="assets/readme/cloudflare-pages.svg" alt="Cloudflare Pages" width="620">
</h2>

The site is a static project connected to the `PacketPhreak/resume-site` repository.

```text
Framework preset: None
Build command: blank
Build output directory: /
Root directory: /
```

<h2>
  <img src="assets/readme/public-safe-rule.svg" alt="Public-safe rule" width="620">
</h2>

Do not commit private infrastructure or employer information. Keep the repository free of:

- credentials, API keys, tokens, or secrets
- internal IP addresses, usernames, ticket numbers, and private hostnames
- confidential screenshots or diagrams
- unsanitized troubleshooting captures
- customer, employer, or vendor-sensitive material

<br>

<img src="assets/readme/archive-reminder-flicker.svg" alt="How to add archive material later" width="700">

> *Dear Future Self: do not commit the whole evidence locker like a raccoon with passwords, Git access, and dinner.*

<h2>
  <img src="assets/readme/continuity-rule.svg" alt="Continuity rule" width="620">
</h2>

The repository ZIP and `PROJECT_STATE.md` are the source of truth for code. Memory and prior chats provide intent and history, but must not replace the current files.

<h2>
  <img src="assets/readme/v354-polish.svg" alt="v3.5.4 Human-first polish" width="700">
</h2>

- Visible branding now leads with Joshua C. McDonald
- The homepage terminal includes a rotating Message of the Day and IT archive signal
- Case-study diagrams were rebuilt for desktop and mobile readability
- Internal authoring-instruction language was replaced with public-facing portfolio copy
- Global section spacing and card alignment were tightened


## v3.6.0 Education Pillars

- Redesigned the Time Capsule education section around four equal visual pillars
- Added floating school emblems and school-specific glow treatments
- Added accurate graduation years, locations, degrees, and institutional founding dates
- Added the time-passing quote and Confucius Institute memory
- Built responsive desktop, tablet, mobile, and reduced-motion behavior


## v3.7.0 Isilon DR Case Study

- Added the public-safe Dell Isilon A300 / PowerScale enterprise storage case study
- Added three architecture and recovery diagrams
- Added a six-photo installation and commissioning gallery
- Added the case study to the homepage and INLIVIAN Time Capsule entry
- Added a page-specific Open Graph image
- Preserved internal cluster names, addresses, share paths, and recovery identifiers outside the public site


## v3.8.0 Site Systems Polish

- Reworked the Time Capsule hero into a balanced two-column career signal
- Removed the black image boxes around the education emblems
- Replaced emoji flames with a cleaner CSS flame treatment
- Rebuilt all three Isilon diagrams with larger labels and simpler visual hierarchy
- Removed generic third-party language and made the case study reflect Joshua's actual project ownership
- Replaced the oversized commissioning-photo overlay with a subtle identifier redaction
- Added full-size diagram controls and a case-study reading-progress bar
- Tightened responsive alignment across desktop, tablet, and mobile


## v3.8.1 Precision Alignment

- Fixed every Time Capsule chapter-count display
- Removed the internal black matte surrounding all four education emblems
- Locked the education heading into an intentional two-line composition
- Anchored the animated flame directly over the word `fire`
- Forced the Isilon hero headline into three deliberate lines
- Rebuilt all three Isilon diagrams with sparse, collision-free labels
- Unified the BreachD hero, activity cards, command room, and status strip
- Preserved responsive desktop, tablet, mobile, and reduced-motion behavior
