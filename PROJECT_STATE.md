# PacketPhreak Portfolio — Project State

## Current version

```text
v3.5.5-readme-flicker-fix
```

## Source of truth

This version was built from the repository ZIP uploaded on **2026-07-12**, after the Open Graph, Twitter/X, icon, manifest, and social-preview assets were added.

## Deployment

```text
Repository: PacketPhreak/resume-site
Platform: Cloudflare Pages
Primary domain: joshuacmcdonald.com
Secondary domain: www.joshuacmcdonald.com
```

## Known-good features

- Main portfolio and navigation
- Career Time Capsule
- PI / Azure public-safe case study
- BreachD Live Command Room
- BreachD Guardian Console
- Spot the Phish activity
- HIBP handoff with confirmation and no local email storage
- Open Graph and Twitter/X preview assets
- Favicons, Apple touch icon, and web manifest
- Cloudflare security headers

## Changes in this state

- Fixed README section headers by giving each heading its own SVG asset
- Kept BreachD red with an independent flicker animation

- Changed the visible header brand to Joshua C. McDonald first, with PacketPhreak as the technical identity
- Added a rotating IRC-style Message of the Day and archive signal to the homepage terminal
- Removed placeholder contact links
- Rewrote case-study copy that sounded like private authoring instructions
- Rebuilt all three case-study SVG diagrams for readability
- Standardized case-study panel alignment and added full-size diagram links
- Tightened desktop and mobile spacing across the site

## Preserve these files

```text
og-image.png
twitter-card.png
social-square.png
wide-banner-1600x900.png
site.webmanifest
icons/
SECURITY.md
_headers
assets/docs/
assets/img/case-studies/
assets/img/education/
```

## Next polish targets

- Review the live desktop and mobile render after Cloudflare deploys
- Confirm the preferred public contact email before adding an email button
- Continue adding public-safe case studies and project-ecosystem links
- Collect a larger analytics sample before performance tuning

## Continuation instruction

Continue from the repository containing this file. Do not reconstruct the site from an older chat package or an earlier BreachD branch.
