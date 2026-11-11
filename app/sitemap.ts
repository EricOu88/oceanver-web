import type { MetadataRoute } from 'next';

// Phase 1 stays noindex in proxy.ts. Do not advertise Phase 2 URLs until
// a separately reviewed release changes both index headers and sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
