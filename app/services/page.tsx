import { Metadata } from 'next'
import { Container } from '@/components/Container'
import { ServiceList } from '@/components/ServiceList'
import ServiceAreas from '@/components/ServiceAreas'
import { servicesData } from '@/data/services'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Comply Direct UK',
  description: 'Comprehensive fire protection, electrical, safety training, security, and ventilation services across the UK.'
}

interface Service {
  id: string
  name: string
  description: string
  features: string[]
  technical_details?: {
    standards?: string[]
    [key: string]: any
  }
}

interface Category {
  id: string
  name: string
  description: string
  services: Service[]
}

export default function ServicesPage() {
  // Get service categories with proper error handling
  const categories = servicesData.categories || []
  
  // Map of category IDs to their display names
  const categoryNames: Record<string, string> = {
    'fire-protection': 'Fire Protection',
    'electrical': 'Electrical Services',
    'safety-training': 'Safety Training',
    'ventilation': 'Ventilation Services',
    'security': 'Security Services'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <Container>
          <Breadcrumbs />
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Comprehensive fire protection, electrical, safety training, security, and ventilation services across the UK.
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-16 sm:mt-20">
        {categories.map((category) => (
          <section key={category.id} className="mb-16">
            <h2 className="text-3xl font-bold mb-6">{categoryNames[category.id] || category.name}</h2>
            <ServiceList 
              title={category.name}
              services={category.services}
              area="all"
              categoryId={category.id}
            />
          </section>
        ))}

        {/* Service Areas */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Available in Your Area</h2>
          <ServiceAreas />
        </section>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Waste Management Services Card */}
            <Link
              href="/waste-management"
              className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold group-hover:text-blue-600">
                Waste Management Services
              </h3>
              <p className="mt-2 text-gray-600">
                Comprehensive waste collection and management solutions for businesses.
                From commercial to specialized waste services.
              </p>
              <div className="mt-4 flex items-center text-blue-600">
                View all waste services
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
            {/* Other service cards can go here */}
          </div>
        </div>
      </Container>
    </div>
  )
} 