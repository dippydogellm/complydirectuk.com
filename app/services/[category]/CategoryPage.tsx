'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { ContactCTA } from '@/components/ContactCTA'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Category } from '@/types/services'
import { Area } from '@/types/services'

interface CategoryPageProps {
  category: Category
  areas: Area[]
}

export function CategoryPage({ category, areas }: CategoryPageProps) {
  return (
    <>
      <div className="bg-blue-600 text-white py-12">
        <Container>
          <Breadcrumbs />
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {category.name} Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              {category.description}
            </p>
          </div>
        </Container>
      </div>

      <Container className="mt-16 sm:mt-20">
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Professional {category.name} Services</h2>
          <p>
            Comply Direct UK provides comprehensive {category.name.toLowerCase()} services across the United Kingdom. 
            Our team of certified professionals specializes in delivering high-quality solutions that meet all regulatory 
            requirements and industry standards.
          </p>
          <p>
            With over 15 years of experience in the fire safety industry, we have established ourselves as a trusted 
            provider of {category.name.toLowerCase()} services. Our commitment to excellence ensures that your business 
            receives the highest standard of service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {category.services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
              <p className="mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-blue-600">+ {service.features.length - 3} more features</li>
                )}
              </ul>
              <div className="space-y-2">
                <Link
                  href={`/services/${category.id}/${service.id}`}
                  className="block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
                <div className="text-sm text-gray-500 mt-2">Available in:</div>
                <div className="flex flex-wrap gap-2">
                  {areas.slice(0, 3).map((area) => (
                    <Link
                      key={area.id}
                      href={`/services/${category.id}/${service.id}?area=Fire%20Protection%20Services%20in%20${area.name}%20|%20Comply%20Direct%20UK`}
                      className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
                    >
                      {area.name}
                    </Link>
                  ))}
                  {areas.length > 3 && (
                    <Link
                      href={`/service-areas`}
                      className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full"
                    >
                      +{areas.length - 3} more
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Areas Section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Available in Your Area</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link 
                key={area.id}
                href={`/service-areas/${area.id}`} 
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                <p className="text-gray-600">{area.postcode}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <ContactCTA />
    </>
  )
} 