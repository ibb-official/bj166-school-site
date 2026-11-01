import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: 'https://bj166zx.cn/sitemap.xml',
    host: 'https://bj166zx.cn'
  };
}
