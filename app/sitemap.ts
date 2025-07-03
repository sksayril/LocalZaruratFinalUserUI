import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://localzarurat.com'
  
  // List all your static routes
  const routes = [
    '',
    '/wedding',
    '/beautyspa',
    '/contractors',
    '/courierservice',
    '/dentists',
    '/drivingschools',
    '/education',
    '/estateagent',
    '/eventorganisers',
    '/gym',
    '/homedecor',
    '/hospitals',
    '/hotels',
    '/loans',
    '/packersmovers',
    '/petshops',
    '/pghostels',
    '/quickbites',
    '/renthire',
    '/restaurants',
    '/sweettooth',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 