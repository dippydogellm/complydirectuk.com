'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  areaId: string
  className?: string
}

export default function ServiceCard({ service, areaId, className = '' }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`service-card transform transition-all duration-300 hover:-translate-y-1 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">{service.name}</h3>
          <p className="mb-4 text-gray-600">{service.description}</p>
          <ul className="space-y-2 mb-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link
              href={`/service-areas/${areaId}/${service.id}`}
              className={`inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 ${
                isHovered ? 'transform translate-x-1' : ''
              }`}
            >
              Learn More
              <svg
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                  isHovered ? 'translate-x-1' : ''
                }`}
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
            </Link>
          </div>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform transition-transform duration-300 ${
            isHovered ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </div>
    </div>
  )
} 