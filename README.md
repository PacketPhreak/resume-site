# PacketPhreak - Joshua C. McDonald Preview Asset Kit

Domain: `joshuacmcdonald.com`

## Files

- `og-image.png` — 1200x630 preview image for iMessage/RCS/Open Graph.
- `twitter-card.png` — 1200x675 Twitter/X large card image.
- `social-square.png` — 1080x1080 square social image.
- `wide-banner-1600x900.png` — wide hero/banner version.
- `icons/favicon.ico` — browser favicon.
- `icons/favicon-16x16.png`
- `icons/favicon-32x32.png`
- `icons/favicon-48x48.png`
- `icons/favicon-64x64.png`
- `icons/apple-touch-icon.png` — 180x180.
- `icons/icon-192x192.png`
- `icons/icon-512x512.png`
- `site.webmanifest`
- `meta-tags.html` — copy/paste into your `<head>`.

## Deployment

Put the image files at the website root, and put the icon files inside `/icons/`.

Then paste the contents of `meta-tags.html` into the `<head>` section of the site.

## Cache note

Text-message previews cache aggressively. After uploading, send yourself a new URL with a cache-buster once:

`https://joshuacmcdonald.com/?v=preview1`

Some platforms may take time to refresh the preview even after the site is correct.
