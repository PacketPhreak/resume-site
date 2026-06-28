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

## (var 404 = Sanity Check)

## How to add archive material later (404)

- Add sanitized photos/files to `assets/img/timeline/` or `assets/docs/`
- Update each timeline entry in `assets/js/timeline-data.js`
- Never publish internal IPs, private screenshots, usernames, tickets, domain details, or employer-sensitive information


## v3 education update

This package adds an Education Path section to `timeline.html` and includes cleaned web-ready (decent) school logo assets in:

`assets/img/education/`

- Use public-safe archive content only. Keep employer/internal screenshots, ticket numbers, IP addresses, usernames, and confidential details out of the public repository. (404)


## v3.1 fix

This package forces a new CSS file (`assets/css/styles-v31.css`) so Cloudflare/browser cache cannot keep the old stylesheet. It also replaces the education logo canvases with tighter web-ready assets so they do not render as huge transparent images if CSS cache misbehaves.


## New in v3.2

- Added `case-study-pi-azure.html` public-safe case study page
- Added redacted SVG visuals for packet path, Azure topology, and flow validation
- Added a featured case study card on the home page
- Added a linked case study action to the current-role timeline card


## New in v3.3

- Added toned-down metallic teal 3D gradient header treatment
- Applied upgraded hero headers across the homepage, Time Capsule, and PI/Azure case study page
- Added cache-busting stylesheet reference: `assets/css/styles-v31.css?v=3.3`
- Kept text selectable/searchable instead of rendering headers as images
- Added small card shadow/hover polish to match the new PacketPhreak visual direction


## New in v3.3.1

- Fixed the PI/Azure case-study hero title/card collision risk
- Reduced the case-study title max width slightly and improved desktop grid spacing
- Added responsive fallback so the mission card drops below the title before overlap happens
- Bumped stylesheet cache string to `?v=3.3.1`

## New in v3.3.2

- Added SECURITY.md 


## New in v3.4 Current Merge

- Merged BreachD into the current uploaded repo instead of overwriting live changes
- Preserved `SECURITY.md`, existing resume docs, education logos, case-study assets, and the Experience nav item
- Added `breachd.html`, `assets/js/breachd.js`, and `assets/img/breachd/breachd-blue-team-hero.png`
- Added a BreachD feature section to the homepage
- Added `_headers` starter security headers for Cloudflare Pages
- Removed the duplicate 3D heading `::before` rule if present
