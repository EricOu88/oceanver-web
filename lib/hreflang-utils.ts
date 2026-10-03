/**
 * Phase 1 keeps canonical URLs but does not declare language alternates.
 * The existing /en pages are BayMediaStar content, not Oceanver translations.
 */

const CANONICAL_BASE_URL = 'https://oceanver.com'

function getCanonicalUrl(path: string): string {
  const normalizedPath = path.replace(/^\/+|\/+$/g, '')
  return normalizedPath ? `${CANONICAL_BASE_URL}/${normalizedPath}` : `${CANONICAL_BASE_URL}/`
}

export function getHreflangAlternates(path: string, canonicalUrl?: string): { canonical: string } {
  return { canonical: canonicalUrl || getCanonicalUrl(path) }
}

export function getSmartHreflangAlternates(path: string, canonicalUrl?: string): { canonical: string } {
  return { canonical: canonicalUrl || getCanonicalUrl(path) }
}
