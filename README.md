# PacketPhreak Resume Site

Personal portfolio, public-safe career archive, case-study library, and technical playground for **Joshua C. McDonald / PacketPhreak**.

> **Called by curiosity. Guided by the light.**

## Live site

```text
https://joshuacmcdonald.com
```

## Current version

```text
v3.5.4-human-first-polish
```

This synchronized build starts from the current uploaded repository—the version containing the new Open Graph, Twitter/X, favicon, manifest, and social-preview assets.

### New in the current build

- Consolidated duplicate `<title>`, description, and theme-color tags
- Added consistent canonical, Open Graph, Twitter/X, icon, manifest, and robots metadata to every public HTML page
- Preserved all uploaded social-preview images and icon assets
- Restored this project README
- Preserved the original preview-kit notes as `PREVIEW_ASSETS.md`
- Added `PROJECT_STATE.md` and `CHANGELOG.md` for cleaner interchat handoffs
- Applied the BreachD activity naming and spacing polish to the current repository
- Replaced visible Option 1 / 2 / 3 labels with:
  - **Live Command Room**
  - **Guardian Console**
  - **Spot the Phish**

## Site map

```text
index.html                  Main portfolio
timeline.html               Career Time Capsule
case-study-pi-azure.html    Public-safe PI / Azure connectivity case study
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

## BreachD

BreachD is PacketPhreak's blue-team cyber buddy and interactive visitor-safety area.

The page includes:

- **Live Command Room** — animated room, scanlines, fog, hotspots, and responsive dialogue
- **Guardian Console** — boot sequence, demo exposure workflow, QR caution mode, and the HIBP handoff
- **Spot the Phish** — a small phishing-awareness game with scoring and feedback
- the **10:10:42** clock and “One more thing...” homage

PacketPhreak does not store visitor email addresses. The exposure form validates locally and opens Have I Been Pwned after confirmation.

## Social preview assets

```text
og-image.png                  1200 × 630 Open Graph preview
twitter-card.png              1200 × 675 Twitter/X card
social-square.png             1080 × 1080 square social image
wide-banner-1600x900.png      wide banner artwork
icons/                        favicon and application icons
site.webmanifest              manifest metadata
```

Detailed deployment and cache notes are preserved in [`PREVIEW_ASSETS.md`](PREVIEW_ASSETS.md).

## Local testing

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
```

## Cloudflare Pages

The site is a static project connected to the `PacketPhreak/resume-site` repository.

```text
Framework preset: None
Build command: blank
Build output directory: /
Root directory: /
```

## Public-safe rule

Do not commit private infrastructure or employer information. Keep the repository free of:

- credentials, API keys, tokens, or secrets
- internal IP addresses, usernames, ticket numbers, and private hostnames
- confidential screenshots or diagrams
- unsanitized troubleshooting captures
- customer, employer, or vendor-sensitive material

<img src="assets/readme/archive-reminder-flicker.svg" alt="How to add archive material later reminder" width="700">

> Future PacketPhreak, do not commit the whole evidence locker like a raccoon with passwords, Git access and dinner.

## Continuity rule

The repository ZIP and `PROJECT_STATE.md` are the source of truth for code. Memory and prior chats provide intent and history, but must not replace the current files.


## v3.5.4 Human-first polish

- Visible branding now leads with Joshua C. McDonald
- The homepage terminal includes a rotating Message of the Day and IT archive signal
- Case-study diagrams were rebuilt for desktop and mobile readability
- Internal authoring-instruction language was replaced with public-facing portfolio copy
- Global section spacing and card alignment were tightened
