import { MetadataRoute } from 'next'
import locations from '@/data/locations.json'
import servicesData from '@/data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL of your site
  const baseUrl = 'https://complydirectuk.com'
  
  // Define static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
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
      url: `${baseUrl}/waste-management`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sitemap.html`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.2,
    },
  ]

  // Generate service area routes
  const serviceAreaRoutes = locations.areas.map((area) => ({
    url: `${baseUrl}/${area.id}`,
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
  const serviceAreaServiceRoutes = locations.areas.flatMap((area) =>
    servicesData.categories.flatMap((category) =>
      category.services.map((service) => ({
        url: `${baseUrl}/service-areas/${area.id}/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    )
  )

  // Dynamic routes for waste management in each area
  const wasteManagementRoutes = locations.areas.flatMap((area) => {
    if (!area.waste_management) return [];
    
    // Area waste management index page
    const areaWasteManagementRoute = {
      url: `${baseUrl}/${area.id}/waste-management`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };

    // Individual waste management service pages
    const serviceRoutes = area.waste_management.services.map((service) => ({
      url: `${baseUrl}/${area.id}/waste-management/${service.toLowerCase().replace(/ /g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [areaWasteManagementRoute, ...serviceRoutes];
  });

  // Combine all routes
  return [
    ...staticRoutes,
    ...serviceAreaRoutes,
    ...serviceCategoryRoutes,
    ...serviceRoutes,
    ...serviceAreaServiceRoutes,
    ...wasteManagementRoutes,
  ]
} 