import type { MetadataRoute } from 'next';

import { isPhase2IndexingEnabled } from '@/lib/indexing-policy';

export const dynamic = 'force-dynamic';

export default function robots(): MetadataRoute.Robots {
  return {
    ...(isPhase2IndexingEnabled() ? { sitemap: 'https://oceanver.com/sitemap.xml' } : {}),
    rules: {
      userAgent: '*',
      allow: '/',
    },
  }
}
