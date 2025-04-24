import { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import servicesData from '@/data/services.json'
import { ServicePage } from './ServicePage'
import { Category, Service, ServicesData } from '@/types/services'

interface ServicePageProps {
  params: {
    category: string
    service: string
  }
  searchParams: {
    area?: string
  }
}

// Map URL slugs to category IDs
const categoryAliases: Record<string, string> = {
  'life-safety-systems': 'fire-protection',
  'electrical-services': 'electrical',
  'safety-training': 'training'
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { category, service } = params
  const categoryId = categoryAliases[category] || category
  const categoryData = (servicesData as ServicesData).categories.find(c => c.id === categoryId)
  const serviceData = categoryData?.services.find(s => s.id === service)

  if (!serviceData) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    }
  }

  return {
    title: `${serviceData.name} | Comply Direct UK`,
    description: serviceData.description
  }
}

export const viewport: Viewport = {
  themeColor: '#2563eb', // Blue-600
  width: 'device-width',
  initialScale: 1,
}

export async function generateStaticParams() {
  const paths = (servicesData as ServicesData).categories.flatMap(category => 
    category.services.map(service => ({
      category: category.id,
      service: service.id
    }))
  )

  // Add paths for aliases
  const aliasPaths = Object.entries(categoryAliases).flatMap(([alias, categoryId]) => {
    const category = (servicesData as ServicesData).categories.find(c => c.id === categoryId)
    if (!category) return []
    
    return category.services.map(service => ({
      category: alias,
      service: service.id
    }))
  })

  return [...paths, ...aliasPaths]
}

export default function Page({ params, searchParams }: ServicePageProps) {
  const { category, service } = params
  const categoryId = categoryAliases[category] || category
  const categoryData = (servicesData as ServicesData).categories.find(c => c.id === categoryId)
  const serviceData = categoryData?.services.find(s => s.id === service)

  if (!serviceData || !categoryData) {
    notFound()
  }

  return <ServicePage 
    service={serviceData} 
    category={categoryData} 
    area={searchParams.area}
  />
} 