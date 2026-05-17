import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE = 'https://garagedoorrepairpembrokepines.us'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    '',
    '/services',
    '/areas',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const services = [
    'spring-replacement',
    'opener-repair',
    'off-track-repair',
    'cable-replacement',
    'sensor-repair',
    'roller-replacement',
    'emergency-repair',
    'new-installation',
  ]

  const areas = [
    'silver-lakes',
    'chapel-trail',
    'pembroke-falls',
    'pembroke-isles',
    'grand-palms',
    'walnut-creek',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    ...services.map((slug) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...areas.map((slug) => ({
      url: `${BASE}/areas/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
