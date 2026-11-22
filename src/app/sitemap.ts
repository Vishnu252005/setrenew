import { MetadataRoute } from 'next';
import { COMPARISONS } from '@/data/comparisons';
import { CITIES } from '@/data/cities';
import { FEATURES } from '@/data/features';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://setrenew.vihaya.app';
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  const comparisonPages: MetadataRoute.Sitemap = Object.keys(COMPARISONS).map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const cityPages: MetadataRoute.Sitemap = Object.keys(CITIES).map((city) => ({
    url: `${baseUrl}/cities/${city}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const featurePages: MetadataRoute.Sitemap = Object.keys(FEATURES).map((slug) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...featurePages, ...comparisonPages, ...cityPages];
}
