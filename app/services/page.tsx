import { Metadata } from 'next'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { ServiceList } from '@/components/ServiceList'
import { ContactCTA } from '@/components/ContactCTA'
import { mergedServicesData } from '@/data/merged-services'
import locationsData from '@/data/locations.json'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services | Comply Direct UK',
  description: 'Comprehensive fire protection, electrical services, and safety training solutions across the UK.',
}

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Our Services"
        description="Comprehensive solutions for fire protection, electrical services, and safety training"
      />

      <Container>
        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mergedServicesData.categories.map((category) => (
              <Link
                key={category.id}
                href={`/services/${category.id}`}
                className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-blue-600 font-medium">
                  View Services →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Training Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Training Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/training/construction-courses"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">Construction & City & Guilds Courses</h3>
              <p className="text-gray-600 mb-4">Professional training courses and qualifications for the construction industry</p>
              <div className="text-blue-600 font-medium">
                View Courses →
              </div>
            </Link>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData.areas.map((area) => (
              <Link
                key={area.id}
                href={`/service-areas/${area.id}`}
                className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.postcode}</p>
                <div className="text-blue-600 font-medium">
                  View Services in {area.name} →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </Container>
    </div>
  )
} 