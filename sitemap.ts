import type { MetadataRoute } from 'next';
import { site, topics, articles } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/about`, lastModified: now, priority: 0.7 },
    { url: `${site.url}/articles`, lastModified: now, priority: 0.8 },
  ];
  const topicRoutes = topics.map((t) => ({
    url: `${site.url}${t.href}`,
    lastModified: now,
    priority: 0.8,
  }));
  const articleRoutes = articles.map((a) => ({
    url: `${site.url}/articles/${a.slug}`,
    lastModified: new Date(a.date),
    priority: 0.6,
  }));
  return [...staticRoutes, ...topicRoutes, ...articleRoutes];
}
