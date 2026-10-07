import type { MetadataRoute } from 'next';

import { SITEMAP_ALLOWLIST } from './sitemap-allowlist';
import { isPhase2IndexingEnabled } from '@/lib/indexing-policy';

const SITE_URL = 'https://oceanver.com';
const LAST_REVIEWED = new Date('2026-10-07T00:00:00-07:00');

// Phase 1: return an empty sitemap.
// Phase 2: advertise only the reviewed first-batch allowlist.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPhase2IndexingEnabled()) {
    return [];
  }

  return SITEMAP_ALLOWLIST.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: LAST_REVIEWED,
    changeFrequency: 'monthly' as const,
    priority: path === '/bill-optimization' || path.endsWith('/price-hike') ? 0.9 : 0.8,
  }));
}
