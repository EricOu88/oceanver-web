import type { MetadataRoute } from 'next';
import { SITEMAP_ALLOWLIST } from './sitemap-allowlist';

const SITE_URL = 'https://oceanver.com';

// Phase 2 pilot: publish only the same two canonical URLs that proxy.ts permits.
export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ALLOWLIST.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
}
