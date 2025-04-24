'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import locationsData from '@/data/locations.json'
import servicesData from '@/data/services.json'

// Define types for the data structures
type LocationArea = {
  id: string;
  name: string;
  postcode: string;
  description: string;
  coverage: {
    districts: string[];
    response_times: {
      emergency: string;
      standard: string;
      planned: string;
    };
  };
  key_industries: string[];
  local_regulations: string[];
};

type LocationsData = {
  areas: LocationArea[];
};

// Define a more flexible type for technical details
type TechnicalDetails = {
  [key: string]: any;
};

type Service = {
  id: string;
  name: string;
  description: string;
  features: string[];
  technical_details: TechnicalDetails;
  service_process: string[];
};

type Category = {
  id: string;
  name: string;
  description: string;
  services: Service[];
};

type ServicesData = {
  categories: Category[];
};

// Type assertions for the imported JSON
const typedLocationsData = locationsData as LocationsData;
const typedServicesData = servicesData as ServicesData;

export default function ServicePage() {
  const { area, service } = useParams()
  const areaData = typedLocationsData.areas.find(a => a.id === area)
  const serviceData = typedServicesData.categories
    .flatMap(category => category.services)
    .find(s => s.id === service)

  if (!areaData || !serviceData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container py-12">
          <Breadcrumbs />
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link href={`/service-areas/${area}`} className="btn-primary">
              View All Services in {areaData?.name || 'this area'}
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="container py-12">
          <Breadcrumbs />
          <h1 className="text-4xl font-bold mb-4">{serviceData.name} in {areaData.name}</h1>
          <p className="text-xl opacity-90">Professional {serviceData.name.toLowerCase()} installation, maintenance, and certification services in {areaData.name}</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Overview */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive {serviceData.name} Services</h2>
              <p className="text-gray-600 mb-6">{serviceData.description}</p>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Our Services Include:</h3>
                <ul className="space-y-3">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Delivery */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Delivery Process</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Initial Assessment</h3>
                    <p className="text-blue-800">Our expert technicians will conduct a thorough site assessment to determine your specific requirements and provide a detailed quote.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Same-Day Service</h3>
                    <p className="text-blue-800">We offer emergency same-day service for urgent requirements, ensuring your safety systems are operational when you need them most.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Installation & Testing</h3>
                    <p className="text-blue-800">Professional installation following BS 5839 standards, with comprehensive testing and certification upon completion.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Ongoing Support</h3>
                    <p className="text-blue-800">Regular maintenance packages and 24/7 emergency support to ensure your systems remain fully operational.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications & Standards</h2>
              <div className="space-y-6">
                <div className="prose max-w-none text-gray-600">
                  <p>All our {serviceData.name.toLowerCase()} services comply with the latest British Standards and regulations, including:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>BS 5839-1:2017 - Fire detection and alarm systems for buildings</li>
                    <li>BS EN 54 - Fire detection and fire alarm systems</li>
                    <li>Regulatory Reform (Fire Safety) Order 2005</li>
                    <li>Building Regulations Approved Document B (Fire Safety)</li>
                  </ul>
                  <p className="mt-6">Our technicians are fully qualified and regularly updated on the latest industry standards and best practices.</p>
                </div>
              </div>
            </div>

            {/* Service Areas & Coverage */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Coverage in {areaData.name}</h2>
              <div className="space-y-6">
                <p className="text-gray-600">We provide comprehensive coverage across {areaData.name} and surrounding areas, including:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Commercial Services</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Office Buildings</li>
                      <li>• Retail Premises</li>
                      <li>• Industrial Units</li>
                      <li>• Educational Facilities</li>
                      <li>• Healthcare Facilities</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Response Times</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Emergency: 1-2 hours</li>
                      <li>• Same-day service available</li>
                      <li>• Planned maintenance: Scheduled</li>
                      <li>• 24/7 emergency support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance & Support */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Maintenance & Support Services</h2>
              <div className="space-y-6">
                <p className="text-gray-600">We offer comprehensive maintenance packages to ensure your systems remain fully operational:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Basic Package</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Annual inspection</li>
                      <li>• Basic testing</li>
                      <li>• Compliance report</li>
                      <li>• Email support</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Standard Package</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Bi-annual inspection</li>
                      <li>• Comprehensive testing</li>
                      <li>• 24/7 phone support</li>
                      <li>• Priority response</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Premium Package</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Quarterly inspection</li>
                      <li>• Full system testing</li>
                      <li>• Emergency callouts</li>
                      <li>• Dedicated support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance & Certification */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Certification</h2>
              <div className="space-y-6">
                <p className="text-gray-600">We provide full documentation and certification for all our services:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Documentation Provided</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Installation certificates</li>
                      <li>• Maintenance records</li>
                      <li>• Test certificates</li>
                      <li>• Compliance reports</li>
                      <li>• Risk assessments</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• ISO 9001 certified</li>
                      <li>• BAFE registered</li>
                      <li>• Regular staff training</li>
                      <li>• Quality audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book This Service</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Service Area</h3>
                  <p className="text-gray-600">{areaData.name} ({areaData.postcode})</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Numbers</h3>
                  <p className="text-gray-600">07771055708</p>
                  <p className="text-gray-600">0161 4834416</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">Flat 8, 18 Mellalieu Street</p>
                  <p className="text-gray-600">Middleton, M24 5DN</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-600">24/7 Emergency Service Available</p>
                </div>
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center"
                >
                  Book Now
                </Link>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Same-day service available for urgent requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 