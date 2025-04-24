import { Metadata } from 'next';
import Link from 'next/link';
import locations from '@/data/locations.json';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Waste Management Services | Comply Direct UK',
  description: 'Professional waste management and collection services across the UK. Comprehensive waste solutions for businesses including commercial, industrial, and specialized waste services.',
};

export default function WasteManagementPage() {
  const areasWithWasteManagement = locations.areas.filter(area => area.waste_management);

  return (
    <div className="py-8">
      <PageHeader
        title="Waste Management Services"
        description="Professional waste collection and management solutions for businesses across the UK."
      />

      <Container>
        <div className="prose max-w-none mb-12">
          <h2>Our Waste Management Solutions</h2>
          <p>
            We provide comprehensive waste management services tailored to meet the specific
            needs of businesses across various industries. Our solutions ensure compliance
            with local and national regulations while promoting environmental sustainability.
          </p>

          <h3>Core Services</h3>
          <ul>
            <li>Commercial Waste Collection</li>
            <li>Industrial Waste Management</li>
            <li>Recycling Services</li>
            <li>Hazardous Waste Disposal</li>
            <li>Waste Management Consulting</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Service Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areasWithWasteManagement.map((area) => (
              <Link
                key={area.id}
                href={`/${area.id}/waste-management`}
                className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-600">
                  {area.name}
                </h3>
                <p className="mt-2 text-gray-600">
                  Waste management services covering {area.postcode}
                </p>
                <div className="mt-4">
                  <span className="text-sm text-gray-500">Available Services:</span>
                  <ul className="mt-2 space-y-1">
                    {area.waste_management.services.slice(0, 3).map((service) => (
                      <li key={service} className="text-sm text-gray-600">
                        • {service}
                      </li>
                    ))}
                    {area.waste_management.services.length > 3 && (
                      <li className="text-sm text-blue-600">
                        + {area.waste_management.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                </div>
                <div className="mt-4 flex items-center text-blue-600">
                  View all services
                  <svg
                    className="ml-2 h-4 w-4"
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
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <div className="prose max-w-none">
            <h2>Why Choose Our Waste Management Services?</h2>
            <ul>
              <li>Tailored solutions for your specific industry and needs</li>
              <li>Flexible collection schedules</li>
              <li>Full compliance with local and national regulations</li>
              <li>Environmental sustainability focus</li>
              <li>Expert consultation and support</li>
              <li>Comprehensive waste documentation and reporting</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
} 