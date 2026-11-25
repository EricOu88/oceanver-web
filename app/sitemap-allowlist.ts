// Phase 2-C: six reviewed canonical diagnostic pages.
// Shared by sitemap and proxy; all other pages remain noindex.
export const PHASE2_SECOND_BATCH_CANDIDATES = [
  '/',
  '/bill-optimization',
  '/cellphone/diagnosis',
  '/internet/diagnosis',
] as const;

export const SITEMAP_ALLOWLIST = [
  '/internet/price-hike',
  '/cellphone/price-hike',
  ...PHASE2_SECOND_BATCH_CANDIDATES,
] as const;
