# PacketPhreak Portfolio — Project State

## Current version

```text
v3.5.3-meta-layout-sync
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

- Duplicate homepage metadata consolidated
- Per-page canonical and social metadata synchronized
- Main repository README restored
- Preview-kit README preserved as `PREVIEW_ASSETS.md`
- BreachD activity names and hero spacing synchronized onto the current repository

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

- Review BreachD hero and activity alignment after live deployment
- Review homepage hero-to-About spacing on desktop and mobile
- Collect more Cloudflare Web Analytics samples before performance tuning
- Continue building public-safe case studies and project ecosystem links

## Continuation instruction

Continue from the repository containing this file. Do not reconstruct the site from an older chat package or an earlier BreachD branch.
