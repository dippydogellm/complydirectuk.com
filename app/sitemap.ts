import { MetadataRoute } from 'next'
import locationsData from '@/data/locations.json'
import servicesData from '@/data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your site
  const baseUrl = 'https://complydirectuk.com'
  
  // Define static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Generate area routes
  const areaRoutes = locationsData.areas.map((area) => ({
    url: `${baseUrl}/areas/${area.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate service area routes
  const serviceAreaRoutes = locationsData.areas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate service category routes
  const serviceCategoryRoutes = servicesData.categories.map((category) => ({
    url: `${baseUrl}/services/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Generate individual service routes
  const serviceRoutes = servicesData.categories.flatMap((category) =>
    category.services.map((service) => ({
      url: `${baseUrl}/services/${category.id}/${service.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  )

  // Generate service-area-service routes
  const serviceAreaServiceRoutes = locationsData.areas.flatMap((area) =>
    servicesData.categories.flatMap((category) =>
      category.services.map((service) => ({
        url: `${baseUrl}/service-areas/${area.id}/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    )
  )

  // Combine all routes
  return [
    ...staticRoutes,
    ...areaRoutes,
    ...serviceAreaRoutes,
    ...serviceCategoryRoutes,
    ...serviceRoutes,
    ...serviceAreaServiceRoutes,
  ]
} 