'use client'

import { Metadata } from 'next'
import { useParams, notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { ServiceList } from '@/components/ServiceList'
import { ContactCTA } from '@/components/ContactCTA'
import { AreaMap } from '@/components/AreaMap'
import { AreaTestimonials } from '@/components/AreaTestimonials'
import { AreaFAQ } from '@/components/AreaFAQ'
import areaContent from '@/data/area-content.json'
import { mergedServicesData } from '@/data/merged-services'
import locationsData from '@/data/locations.json'
import { AreaContent, Area, LocationsData } from '@/types'
import { Service } from '@/types/services'

export default function ServiceAreaPage() {
  const params = useParams()
  const areaId = params.area as string
  const area = areaContent.areas[areaId as keyof typeof areaContent.areas] as AreaContent
  const locationData = (locationsData as LocationsData).areas.find(a => a.id === areaId)

  if (!area || !locationData) {
    return (
      <Container>
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Area Not Found
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The requested service area could not be found.
          </p>
        </div>
      </Container>
    )
  }

  // Extract area name from title (e.g., "Fire Protection Services in Manchester" -> "Manchester")
  const areaName = area.title.split(' in ')[1] || areaId

  // Get all service categories
  const categories = (mergedServicesData as ServicesData).categories

  return (
    <>
      <PageHeader
        title={`Professional Services in ${areaName}`}
        description={`Comprehensive fire protection, electrical services, and safety training in ${areaName}. Same-day service available with comprehensive coverage across ${locationData.coverage.districts.slice(0, 3).join(', ')}, and more.`}
      />

      <Container className="mt-16 sm:mt-20">
        {/* Area Overview Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Professional Services in {areaName}
              </h2>
              <div className="prose prose-lg">
                <p>
                  Comply Direct UK provides comprehensive fire protection, electrical services, and safety training throughout {areaName} and surrounding areas. 
                  Our team of certified professionals specializes in delivering high-quality solutions that meet all regulatory requirements and industry standards.
                </p>
                <p>
                  With over 15 years of experience in the industry, we have established ourselves as a trusted provider of professional services in {areaName}. 
                  Our commitment to excellence, combined with our local expertise, ensures that your business receives the highest standard of service.
                </p>
                <h3>Coverage Areas</h3>
                <p>
                  We offer our services across all districts in {areaName}, including {locationData.coverage.districts.slice(0, 5).join(', ')}, and more. 
                  Our local team understands the specific requirements and regulations for professional services in this region.
                </p>
                <h3>Response Times</h3>
                <ul>
                  <li>Emergency: {locationData.coverage.response_times.emergency}</li>
                  <li>Standard: {locationData.coverage.response_times.standard}</li>
                  <li>Planned: {locationData.coverage.response_times.planned}</li>
                </ul>
                <h3>Industries Served</h3>
                <p>
                  We serve a wide range of industries in {areaName}, including:
                </p>
                <ul>
                  {locationData.key_industries.map((industry, index) => (
                    <li key={index}>{industry}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:sticky lg:top-4 lg:h-fit">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">
                  Get in touch with our {areaName} team for a free consultation and quote.
                </p>
                <a
                  href="tel:07771055708"
                  className="block w-full text-center bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors mb-2"
                >
                  Call 07771055708
                </a>
                <Link
                  href={`/contact?area=${areaId}`}
                  className="block w-full text-center bg-white text-blue-600 border border-blue-600 py-3 px-4 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Our Services in {areaName}
          </h2>
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <ServiceList 
                title={category.name} 
                services={category.services} 
                area={areaId}
              />
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Coverage in {areaName}
          </h2>
          <AreaMap area={area} />
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            What Our {areaName} Clients Say
          </h2>
          <AreaTestimonials area={areaName} />
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <AreaFAQ area={areaName} />
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <ContactCTA />
        </div>
      </Container>
    </>
  )
} 