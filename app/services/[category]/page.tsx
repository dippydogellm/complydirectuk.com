import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CategoryPage } from './CategoryPage'
import { servicesData } from '@/data/services'
import locationsData from '@/data/locations.json'

interface CategoryPageProps {
  params: {
    category: string
  }
}

// Map URL slugs to category IDs
const categoryAliases: Record<string, string> = {
  'life-safety-systems': 'fire-protection',
  'electrical-services': 'electrical',
  'safety-training': 'training'
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryId = categoryAliases[params.category] || params.category
  const category = servicesData.categories.find(c => c.id === categoryId)
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.'
    }
  }

  return {
    title: `${category.name} Services | Comply Direct UK`,
    description: category.description
  }
}

export function generateStaticParams() {
  const params = servicesData.categories.map((category) => ({
    category: category.id,
  }))
  
  // Add aliases to static params
  Object.entries(categoryAliases).forEach(([alias, categoryId]) => {
    if (!params.some(p => p.category === alias)) {
      params.push({ category: alias })
    }
  })
  
  return params
}

export default function Page({ params }: CategoryPageProps) {
  const categoryId = categoryAliases[params.category] || params.category
  const category = servicesData.categories.find(c => c.id === categoryId)
  
  if (!category) {
    notFound()
  }

  return <CategoryPage category={category} areas={locationsData.areas} />
} 