'use client'

import { useState } from 'react'
import Link from 'next/link'
import servicesData from '@/data/services.json'

export default function FeaturedServices() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.categories.map((category) => (
          <div
            key={category.id}
            className="service-card"
            onMouseEnter={() => setIsHovered(category.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <h3 className="text-xl font-bold mb-4">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <ul className="space-y-2 mb-4">
              {category.services.slice(0, 3).map((service) => (
                <li key={service.id} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {service.name}
                </li>
              ))}
              {category.services.length > 3 && (
                <li className="text-blue-600">+ {category.services.length - 3} more services</li>
              )}
            </ul>
            <Link
              href={`/services/${category.id}`}
              className={`text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors duration-300 ${
                isHovered === category.id ? 'transform translate-x-1' : ''
              }`}
            >
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    </section>
  )
} 