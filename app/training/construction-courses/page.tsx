import { Metadata } from 'next'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { ContactCTA } from '@/components/ContactCTA'
import locationsData from '@/data/locations.json'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction & City & Guilds Courses | Comply Direct UK',
  description: 'Professional training courses and qualifications for the construction industry, including AM2, electrical installation, and more.',
}

export default function ConstructionCoursesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Construction & City & Guilds Courses"
        description="Professional training courses and qualifications for the construction industry"
      />

      <Container>
        {/* Available Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Available Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">AM2 Assessment</h3>
              <p className="text-gray-600 mb-4">The AM2 assessment is the final practical assessment for electrical installation apprentices.</p>
              <div className="space-y-2">
                <p><span className="font-semibold">Duration:</span> 3-4 days</p>
                <p><span className="font-semibold">Level:</span> Level 3</p>
                <p><span className="font-semibold">Certification:</span> City & Guilds AM2</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">City & Guilds 2365</h3>
              <p className="text-gray-600 mb-4">Level 2 & 3 Diploma in Electrical Installation</p>
              <div className="space-y-2">
                <p><span className="font-semibold">Duration:</span> 12-24 months</p>
                <p><span className="font-semibold">Level:</span> Level 2 & 3</p>
                <p><span className="font-semibold">Certification:</span> City & Guilds 2365</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">City & Guilds 2391</h3>
              <p className="text-gray-600 mb-4">Inspection and Testing of Electrical Installations</p>
              <div className="space-y-2">
                <p><span className="font-semibold">Duration:</span> 5 days</p>
                <p><span className="font-semibold">Level:</span> Level 3</p>
                <p><span className="font-semibold">Certification:</span> City & Guilds 2391</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">City & Guilds 2382</h3>
              <p className="text-gray-600 mb-4">18th Edition Wiring Regulations</p>
              <div className="space-y-2">
                <p><span className="font-semibold">Duration:</span> 3 days</p>
                <p><span className="font-semibold">Level:</span> Level 3</p>
                <p><span className="font-semibold">Certification:</span> City & Guilds 2382</p>
              </div>
            </div>
          </div>
        </div>

        {/* Training Locations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Training Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData.areas.map((area) => (
              <Link
                key={area.id}
                href={`/training/construction-courses/${area.id}`}
                className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.postcode}</p>
                <div className="text-blue-600 font-medium">
                  View Courses in {area.name} →
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