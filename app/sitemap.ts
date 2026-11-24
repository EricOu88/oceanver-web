import type { MetadataRoute } from 'next';
import { SITEMAP_ALLOWLIST } from './sitemap-allowlist';

import { isPhase2IndexingEnabled } from '@/lib/indexing-policy';

export const dynamic = 'force-dynamic';

const SITE_URL = 'https://oceanver.com';

// Phase 2 pilot: publish only the same two canonical URLs that proxy.ts permits.
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPhase2IndexingEnabled()) return [];
  return SITEMAP_ALLOWLIST.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
}
