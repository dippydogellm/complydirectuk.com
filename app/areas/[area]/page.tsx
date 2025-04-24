import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'
import locationsData from '@/data/locations.json'
import servicesData from '@/data/services.json'
import areaContent from '@/data/area-content.json'

export async function generateStaticParams() {
  return locationsData.areas.map((area) => ({
    area: area.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { area: string }
}): Promise<Metadata> {
  const area = areaContent.areas[params.area]
  if (!area) {
    return {
      title: 'Area Not Found',
      description: 'The requested area could not be found.',
    }
  }

  return {
    title: area.title,
    description: area.description,
    keywords: `fire protection, safety training, fire alarms, fire risk assessments, emergency lighting, fire doors, fire extinguishers, ${params.area}, same-day service`,
  }
}

export default function AreaPage({
  params,
}: {
  params: { area: string }
}) {
  const area = locationsData.areas.find((a) => a.id === params.area)
  const areaSpecificContent = areaContent.areas[params.area]

  if (!area || !areaSpecificContent) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{area.name}</h1>
          <p className="text-xl">{area.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Area Introduction */}
        <section className="mb-12">
          <div className="prose max-w-none">
            <p className="text-lg mb-6">{areaSpecificContent.content.intro}</p>
            <p className="text-lg mb-6">{areaSpecificContent.content.local_expertise}</p>
            <p className="text-lg mb-6">{areaSpecificContent.content.services_highlight}</p>
          </div>
        </section>

        {/* Fire Protection Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Fire Protection Services in {area.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.categories[0].services.map((service) => (
              <div key={service.id} className="service-card">
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/fire-protection/${service.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Training Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Safety Training in {area.name}</h2>
          <div className="prose max-w-none mb-8">
            <p className="text-lg">{areaSpecificContent.content.training_services}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.categories[1].services.map((service) => (
              <div key={service.id} className="service-card">
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/safety-training/${service.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Fire Safety Compliance in {area.name}</h2>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">{areaSpecificContent.content.compliance}</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our {area.name} Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areaSpecificContent.content.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                <p className="font-semibold text-gray-700">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us in this Area */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Comply Direct UK in {area.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Local Expertise</h3>
              <p>We have extensive experience serving businesses in {area.name} and surrounding areas.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p>Our local presence means we can respond quickly to your fire safety needs.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Same-Day Service</h3>
              <p>We offer same-day service for all our fire protection and training needs in {area.name}.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 