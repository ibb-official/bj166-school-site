import type { MetadataRoute } from 'next';
import { newsList } from '@/data/news';

const BASE = 'https://bj166zx.cn';

export default function sitemap(): MetadataRoute.Sitemap {
  const checkedAt = '2026-11-01T00:00:00+08:00';
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/news', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/culture', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/history', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/photos', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/wechat', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/policy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/disclosure', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/sources', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.3, changeFrequency: 'yearly' as const }
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE}${route.path}`,
      lastModified: new Date(checkedAt),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
    ...newsList.map((item) => ({
      url: `${BASE}/news/${item.id}`,
      lastModified: new Date(`${item.date}T00:00:00+08:00`),
      changeFrequency: 'yearly' as const,
      priority: 0.6
    }))
  ];
}
