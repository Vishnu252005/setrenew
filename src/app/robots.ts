import { MetadataRoute } from 'next';

const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'cohere-ai',
  'Amazonbot',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'GrokBot',
  'YouBot',
  'Bytespider',
  'DuckAssistBot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://setrenew.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image'],
        disallow: ['/api/'],
      },
      ...AI_CRAWLERS.map((crawler) => ({
        userAgent: crawler,
        allow: ['/'],
        disallow: ['/api/'],
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
