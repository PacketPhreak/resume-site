# PacketPhreak Resume Site

Static resume/portfolio site for Joshua C. McDonald / PacketPhreak.

## New in v2

- Added current resume PDF/DOCX under `assets/docs/`
- Added `timeline.html` Career Time Capsule page
- Added searchable/filterable timeline data under `assets/js/timeline-data.js`
- Added resume, LinkedIn, GitHub, and email links

## Deploy target

Cloudflare Pages

## Cloudflare Pages settings

- Framework preset: None
- Build command: leave blank
- Build output directory: `/`
- Root directory: `/`

## How to add archive material later

- Add sanitized photos/files to `assets/img/timeline/` or `assets/docs/`
- Update each timeline entry in `assets/js/timeline-data.js`
- Never publish internal IPs, private screenshots, usernames, tickets, domain details, or employer-sensitive information


## v3 education update

This package adds a polished Education Path section to `timeline.html` and includes cleaned web-ready school logo assets in:

`assets/img/education/`

Use public-safe archive content only. Keep employer/internal screenshots, ticket numbers, IP addresses, usernames, and confidential details out of the public repository.


## v3.1 fix

This package forces a new CSS file (`assets/css/styles-v31.css`) so Cloudflare/browser cache cannot keep the old stylesheet. It also replaces the education logo canvases with tighter web-ready assets so they do not render as huge transparent images if CSS cache misbehaves.


## New in v3.2

- Added `case-study-pi-azure.html` public-safe case study page
- Added redacted SVG visuals for packet path, Azure topology, and flow validation
- Added a featured case study card on the home page
- Added a linked case study action to the current-role timeline card
