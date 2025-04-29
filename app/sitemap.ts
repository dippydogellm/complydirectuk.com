import { MetadataRoute } from 'next'
import locationsData from '@/data/locations.json'
import { mergedServicesData } from '@/data/merged-services'
import coursesData from '@/data/courses.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://complydirectuk.com'
  
  // Generate all area-service combinations
  const areaServiceUrls = locationsData.areas.flatMap(area => 
    mergedServicesData.categories.flatMap(category => 
      category.services.map(service => ({
        url: `${baseUrl}/search/${area.id}/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    )
  )

  // Generate area-specific course pages
  const areaCourseUrls = locationsData.areas.flatMap(area =>
    coursesData.courses.map(course => ({
      url: `${baseUrl}/training/${area.id}/${course.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  )

  // Generate service category pages
  const serviceCategoryUrls = mergedServicesData.categories.map(category => ({
    url: `${baseUrl}/services/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Generate individual service pages
  const serviceUrls = mergedServicesData.categories.flatMap(category =>
    category.services.map(service => ({
      url: `${baseUrl}/services/${category.id}/${service.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  // Generate course category pages
  const courseCategoryUrls = [
    {
      url: `${baseUrl}/training/electrical-courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/training/construction-courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/training/safety-courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ]

  // Generate individual course pages
  const courseUrls = coursesData.courses.map(course => ({
    url: `${baseUrl}/training/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Add other important pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/training`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    }
  ]

  return [
    ...staticPages,
    ...areaServiceUrls,
    ...areaCourseUrls,
    ...serviceCategoryUrls,
    ...serviceUrls,
    ...courseCategoryUrls,
    ...courseUrls
  ]
} 