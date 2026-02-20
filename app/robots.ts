import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '',
      allow: '/',
      disallow: ['/feed/', '/tag/', '/embed/', '/?*'],
    },
    sitemap: 'https://baymediastar.com/sitemap.xml',
  }
}
