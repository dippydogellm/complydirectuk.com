'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import locationsData from '@/data/locations.json'
import { mergedServicesData } from '@/data/merged-services'
import { Service, Category, ServicesData } from '@/types/services'
import { Container } from '@/components/Container'
import { PageHeader } from '@/components/PageHeader'
import { ContactCTA } from '@/components/ContactCTA'
import { ServiceList } from '@/components/ServiceList'

export function HomeContent() {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Extract all services from all categories
  const allServices = mergedServicesData.categories.flatMap((category: Category) => category.services)

  // Filter services based on search query
  const filteredServices = allServices.filter(service => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <Container className="py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Professional Services & Training Solutions
            </h1>
            <p className="text-xl mb-8">
              Comprehensive fire protection, electrical services, and safety training solutions across the UK. 
              Trusted by businesses nationwide for quality and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/training/construction-courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-lg transition-colors duration-300"
              >
                View Training Courses
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Search Section */}
      <Container>
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services and courses..."
                className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Quick Links */}
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/services"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">All Services</h3>
              <p className="text-gray-600 mb-4">Browse our comprehensive range of professional services</p>
              <div className="text-blue-600 font-medium">
                View Services →
              </div>
            </Link>

            <Link
              href="/training/construction-courses"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">Training Courses</h3>
              <p className="text-gray-600 mb-4">Professional construction and City & Guilds courses</p>
              <div className="text-blue-600 font-medium">
                View Courses →
              </div>
            </Link>

            <Link
              href="/service-areas"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">Service Areas</h3>
              <p className="text-gray-600 mb-4">Find services in your local area</p>
              <div className="text-blue-600 font-medium">
                View Areas →
              </div>
            </Link>
          </div>
        </div>

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

        {/* Popular Service Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Popular Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData.areas.slice(0, 6).map((area) => (
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

        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
            Our Services
          </h2>
          <ServiceList services={filteredServices} title="All Services" />
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </Container>
    </div>
  )
} 