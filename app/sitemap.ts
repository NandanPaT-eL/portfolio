import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://nandanpatel.dev', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ]
}
