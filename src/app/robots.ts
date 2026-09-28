import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://rlpcompliance.com/sitemap.xml',
    host: 'https://rlpcompliance.com',
  };
}
