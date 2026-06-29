# PacketPhreak Resume Site

Personal portfolio site for **Joshua C. McDonald / PacketPhreak**.

This site is a public-safe portfolio, resume, case-study archive, and technical storytelling space. It is designed to show real infrastructure, networking, identity, support, and troubleshooting experience without exposing confidential employer, customer, ticket, network, or security details.

## Live site

Primary domain:

```text
https://joshuacmcdonald.com
```

## Site sections

```text
index.html                  Main portfolio page
timeline.html               Career Time Capsule
case-study-pi-azure.html    Manufacturing PI / Azure connectivity case study
breachd.html                BreachD digital exposure helper
SECURITY.md                 Security policy
_headers                    Cloudflare Pages security headers
assets/                     CSS, JavaScript, images, resume files, and visual assets
```

## What this site is

This is not just a resume page.

This is the PacketPhreak command center:

- professional background
- searchable career timeline
- public-safe case studies
- technical archive material
- sanitized visuals and diagrams
- resume download
- BreachD digital identity awareness helper

## Public-safe rule

Do not commit confidential or internal material.

Keep the public repository free of:

- internal IP addresses
- usernames
- passwords
- API keys or secrets
- ticket numbers
- private screenshots
- confidential diagrams
- employer-sensitive details
- vendor/customer-specific information
- raw troubleshooting captures that have not been sanitized

<img src="assets/readme/new-v34-beast-breachd.svg" alt="New in v3.4 Current Merge... BEAST... BreachD" width="820">

- Merged BreachD into the current uploaded repo instead of overwriting live changes
- Preserved `SECURITY.md`, existing resume docs, education logos, case-study assets, and the Experience nav item
- Added `breachd.html`, `assets/js/breachd.js`, and `assets/img/breachd/breachd-blue-team-hero.png`
- Added a BreachD feature section to the homepage
- Added `_headers` starter security headers for Cloudflare Pages
- Removed the duplicate 3D heading `::before` rule if present
- Added client-side email validation and a confirmation modal before leaving PacketPhreak
- BreachD redirects visitors to Have I Been Pwned results without storing email addresses on this site

## BreachD

BreachD is PacketPhreak's blue-team cyber buddy.

It showed up at **9:42**, crawled out of the terminal, and decided to help visitors think about digital identity, breach exposure, password hygiene, MFA, suspicious QR codes, and the online footprint that follows people around.

BreachD is not here to scare people.

BreachD is here to remind them:

```text
No fear. Just facts.
Check your exposure.
Take the next right step.
```

## BreachD privacy note

The BreachD form does not store email addresses on PacketPhreak.

The form validates the email format in the browser and then opens Have I Been Pwned in a new tab after confirmation.

```text
PacketPhreak does not store the submitted email.
The visitor leaves PacketPhreak to view results securely.
```

<img src="assets/readme/archive-reminder-flicker.svg" alt="How to add archive material later reminder" width="700">

> Future PacketPhreak, do not commit the whole evidence locker like a raccoon with passwords, Git access and dinner.

When adding future archive material:

- Add public-safe project material only
- Redact internal names, IP addresses, ticket numbers, screenshots, and private notes
- Keep source material private until it has been cleaned
- Convert sensitive screenshots into redacted diagrams or recreated visuals
- Use case-study language that explains the technical shape of the work without exposing the organization
- Keep the resume sharp and let the Time Capsule carry the deeper story

## How to add a case study later

1. Create a new HTML page using the existing case-study layout as a template.
2. Add any public-safe visuals under:

```text
assets/img/case-studies/
```

3. Add a card or link from `index.html`.
4. Add a timeline link if the case belongs to a specific role.
5. Confirm no private/internal details are visible.
6. Commit with a clear message.

Example commit message:

```text
Add public-safe network outage case study
```

## How to add timeline archive material later

Timeline entries live in:

```text
assets/js/timeline-data.js
```

Keep entries concise and public-safe.

Recommended entry fields:

```text
period
role
org
location
type
summary
bullets
evidence
caseStudy
```

Use `caseStudy` only when the entry should link to a dedicated page.

## Local testing

Open the files directly in a browser, or use a simple local web server:

```bash
python -m http.server 8000
```

Then browse to:

```text
http://localhost:8000
```

Test these pages before committing:

```text
/
timeline.html
case-study-pi-azure.html
breachd.html
```

## Cloudflare Pages

This site is built as a static site.

Recommended Cloudflare Pages settings:

```text
Framework preset: None
Build command: blank
Build output directory: /
Root directory: /
```

## Security headers

The `_headers` file provides a starter set of public-site response headers for Cloudflare Pages:

```text
X-Content-Type-Options
Referrer-Policy
X-Frame-Options
Permissions-Policy
```

Do not add an aggressive Content Security Policy until the site layout, images, scripts, and future embeds are stable.

## Suggested commit messages

```text
Launch BreachD from current site
Update README archive reminder
Add public-safe case study visuals
Fix case study hero spacing
Update Time Capsule archive entries
```

## License / usage note

This repository is a personal portfolio project. Public-safe text, layout, and custom site material are maintained for Joshua C. McDonald / PacketPhreak.

Do not reuse personal branding, resume material, portfolio copy, or original case-study content without permission.


## New in v3.4.1 BreachD BEAST polish

- Rebuilt `breachd.html` into a full launch-style feature page
- Made BreachD and the command-room artwork the hero centerpiece
- Added a live-console style exposure check layout
- Tightened spacing and reduced dead zones on desktop
- Added hero Situation / Challenge / Outcome cards
- Added two CSS analog clocks showing 10:10:42
- Added a replayable Guardian Init terminal button
- Improved QR warning, first steps, promise, and final CTA sections


## New in v3.4.2 BreachD spacing pass

- Tightened vertical spacing across the BreachD page
- Cropped the hero artwork toward BreachD and the command room instead of showing the full embedded poster
- Reduced dead space between the hero, console, lore, terminal, and CTA sections
- Stopped the lore card from stretching into a tall empty rectangle
- Improved desktop rhythm while preserving mobile responsiveness


## New in v3.4.3 BreachD console polish

- Reworked the exposure form into a cleaner command-row layout
- Removed the decorative map box that created dead space
- Replaced it with compact guardian/status cards
- Pulled the console, lore, terminal, and CTA sections closer together
- Reduced the side clock card size and improved its visual weight


## New in v3.4.4 BreachD clock + QR polish

- Fixed clock-hand centering so both clocks visually land on 10:10:42
- Cleaned up the QR warning card with a more believable alert-style QR graphic
- Tightened lore-section spacing and right-column card alignment
- Reduced awkward gaps and improved card-to-card rhythm


## New in v3.5.0 BreachD Arcade

- Added Option 1: animated BreachD command room with hotspots, scanlines, fog, live badge, and dialog responses
- Added Option 2: interactive BreachD console app with boot/demo scan/QR caution workflows
- Added Option 3: Spot the Phish mini game with scoring and BreachD feedback
- Preserved the Have I Been Pwned handoff and no-local-storage privacy note
- Kept the 10:10:42 lore clock and BreachD command-room identity


## New in v3.5.1 Layout Fix

- Reduced unused vertical spacing on the main homepage hero before the About section
- Centered BreachD hero copy against the live-room panel
- Fixed the bottom-of-hero alignment issue around the buttons and feature cards
- Tightened Situation / Challenge / Outcome spacing under the BreachD hero
- Kept the BreachD Arcade features intact
