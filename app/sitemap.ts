import type { MetadataRoute } from 'next';
// Phase 1: do not advertise any page while the mirror is under review.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
