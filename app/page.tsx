'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import locationsData from '@/data/locations.json'
import servicesData from '@/data/services.json'
import { Service, Category, ServicesData } from '@/types/services'

export default function Home() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-blue-600 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Professional Fire Protection & Safety Training Services
            </h1>
            <p className="text-xl mb-8">
              Same-day service available across Manchester, Stockport, Cheshire, and Oldham
            </p>
            <div className="space-x-4">
              <Link href="/services" className="btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Comply Direct UK</h2>
          <p className="text-lg mb-6">
            Comply Direct UK is your trusted partner for comprehensive fire protection and safety training services across the United Kingdom. With over 15 years of experience, we specialize in delivering high-quality solutions that meet all regulatory requirements and industry standards.
          </p>
          <p className="text-lg mb-8">
            Our team of certified professionals is dedicated to ensuring your business remains compliant with fire safety regulations while providing peace of mind through reliable protection systems and expert training.
          </p>
          <div className="flex justify-center">
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(servicesData as ServicesData).categories.map((category: Category) => {
              // Get the first service to show ACR information
              const firstService = category.services[0]
              const hasACR = firstService?.technical_details?.standards?.some((standard: string) => 
                standard.toLowerCase().includes('acr')
              )
              
              return (
                <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    {/* ACR Information */}
                    {hasACR && (
                      <div className="mb-4 p-3 bg-blue-50 rounded-md">
                        <div className="flex items-center text-blue-700">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">ACR Accredited Services Available</span>
                        </div>
                      </div>
                    )}
                    
                    <ul className="space-y-2 mb-6">
                      {category.services.slice(0, 5).map((service: Service) => (
                        <li key={service.id} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600">{service.name}</span>
                        </li>
                      ))}
                      {category.services.length > 5 && (
                        <li className="text-sm text-gray-500">
                          +{category.services.length - 5} more services
                        </li>
                      )}
                    </ul>
                    <Link
                      href={`/services/${category.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View all {category.name}
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationsData.areas.map((area) => (
              <Link
                key={area.id}
                href={`/service-areas/${area.id}`}
                className="area-card"
              >
                <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.postcode}</p>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{area.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center">
                  View Coverage
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/service-areas" className="btn-primary">
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Comply Direct UK?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Same-Day Service</h3>
            <p>We understand the urgency of fire safety. That's why we offer same-day service for all our fire protection needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Expert Team</h3>
            <p>Our team consists of fully qualified and experienced professionals in fire safety and training.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Local Service</h3>
            <p>We provide comprehensive coverage across Manchester, Stockport, Cheshire, and Oldham.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ensure Your Fire Safety Compliance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for our fire protection and safety training services.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/services" className="btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 