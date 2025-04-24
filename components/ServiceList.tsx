import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Service } from '@/types/services'

interface ServiceListProps {
  title: string
  services: Service[]
  area?: string
  categoryId?: string
}

export function ServiceList({ title, services, area = 'all', categoryId }: ServiceListProps) {
  // Determine category ID from title if not provided
  if (!categoryId) {
    categoryId = title.toLowerCase().replace(/\s+/g, '-')
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <Link
          key={service.id}
          href={`/services/${categoryId}/${service.id}${area !== 'all' ? `?area=${area}` : ''}`}
          className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
              {service.name}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {service.description}
            </p>
            {service.features && service.features.length > 0 && (
              <div className="space-y-2 mb-4">
                {service.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <p className="text-sm text-gray-500">
                    +{service.features.length - 3} more features
                  </p>
                )}
              </div>
            )}
            <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
              Learn more
              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 