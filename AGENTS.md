# Repository development rules

## Mandatory all-device responsive acceptance — V1.0

Applies to every new or changed public page and shared UI component. This is a release hard gate, not merely a design recommendation.

- Test CSS viewport widths 320, 390, 768, 1024, 1366, 1920 and 2560 px; include portrait and landscape tablet/mobile where relevant, and browser zoom at 200%.
- Layouts, columns, typography, spacing and element sizes must adapt fluidly. Constrain reading width on large screens. No page-level horizontal scrolling, clipped content, overlapping elements or unreadable text. Permit headings to wrap on narrow screens.
- Prefer reusable responsive components and CSS; do not hide overflow to conceal layout defects. Images and logos must scale proportionally. Tables must remain fully readable, with local horizontal scrolling or responsive cards when necessary.
- Primary consultation controls must have at least 44×44 CSS px touch targets. Navigation and interactive controls must work with touch, mouse and keyboard, with visible focus and no hover-only essential functionality.
- Dialogs (including WeChat QR dialogs) must fit small screens, support scrolling if needed and be closable. Sticky contact bars must not obscure content or controls.
- Preserve approved brand colors, content, prices, business links and CTA colors unless explicitly authorized. Shared technical standards do not authorize mixing site identities, contact details, business scope, SEO/GEO strategies or cross-site links.
- Before release: inspect affected source and shared components, run build and relevant functional tests, deploy a preview, test actual rendered pages at all specified widths and zoom, and record routes, viewport, pass/fail, defects and evidence. For shared layout changes, cover all affected routes or document exclusions and obtain approval. After authorized release, verify production again.
- A successful build or source scan alone is not responsive acceptance. Unverified checks must be marked NOT TESTED; unresolved failures or missing required evidence block release. Do not claim acceptance or merge for production until the gate passes and release authorization is obtained.

