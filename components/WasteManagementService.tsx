import React from 'react';
import { Container } from './Container';
import { PageHeader } from './PageHeader';
import { ContactCTA } from './ContactCTA';

type Area = {
  id: string;
  name: string;
  postcode: string;
  waste_management: {
    services: string[];
    collection_frequency: {
      standard: string;
      high_volume: string;
      low_volume: string;
    };
    waste_types: string[];
    compliance: string[];
    specialized_services: string[];
  };
};

type Props = {
  area: Area;
  service: string;
};

export function WasteManagementService({ area, service }: Props) {
  return (
    <div className="py-8">
      <PageHeader
        title={`${service} in ${area.name}`}
        description={`Professional ${service.toLowerCase()} services across ${area.name} and surrounding areas. Reliable, efficient, and compliant waste management solutions.`}
      />

      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="prose max-w-none">
              <h2>Our {service} Services in {area.name}</h2>
              <p>
                We provide comprehensive {service.toLowerCase()} services tailored to meet the specific needs
                of businesses in {area.name}. Our expert team ensures efficient waste management while
                maintaining full compliance with all relevant regulations.
              </p>

              <h3>Service Features</h3>
              <ul>
                <li>Professional waste collection and disposal</li>
                <li>Flexible scheduling options</li>
                <li>Environmental compliance guaranteed</li>
                <li>Detailed waste management documentation</li>
                <li>Expert consultation and support</li>
              </ul>

              <h3>Collection Frequency</h3>
              <ul>
                <li>Standard Service: {area.waste_management.collection_frequency.standard}</li>
                <li>High Volume: {area.waste_management.collection_frequency.high_volume}</li>
                <li>Low Volume: {area.waste_management.collection_frequency.low_volume}</li>
              </ul>

              <h3>Compliance and Regulations</h3>
              <p>
                Our services comply with all {area.name} local regulations and national standards. We ensure:
              </p>
              <ul>
                {area.waste_management.compliance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="prose max-w-none">
              <h2>Additional Services</h2>
              <ul>
                {area.waste_management.specialized_services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold">Waste Types We Handle</h3>
              <ul className="mt-4 space-y-2">
                {area.waste_management.waste_types.map((type) => (
                  <li key={type} className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold">Service Area</h3>
              <p className="mt-2 text-gray-600">
                We provide {service.toLowerCase()} services throughout {area.name} and surrounding areas.
                Postcode coverage: {area.postcode}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ContactCTA
            title={`Get Professional ${service} Services in ${area.name}`}
            description="Contact us today to discuss your waste management needs and get a customized solution for your business."
          />
        </div>
      </Container>
    </div>
  );
} 