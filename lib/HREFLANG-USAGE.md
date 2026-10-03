# Oceanver language alternates

Oceanver Phase 1 does not publish `hreflang` or `alternates.languages` values.
The existing `/en` routes contain BayMediaStar content and are not Oceanver
translations. Keep canonical URLs on Oceanver; add language alternates only
after a page has a genuine same-site translation.

The compatibility helpers in `hreflang-utils.ts` currently return canonical
metadata only.
