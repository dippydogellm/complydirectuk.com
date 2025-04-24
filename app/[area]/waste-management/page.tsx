import { notFound } from 'next/navigation';
import locations from '@/data/locations.json';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

type Props = {
  params: {
    area: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = locations.areas.find((a) => a.id === params.area);
  if (!area) return {};

  return {
    title: `Waste Management Services in ${area.name} | Comply Direct UK`,
    description: `Professional waste management and collection services in ${area.name}. Comprehensive waste solutions for businesses including commercial, industrial, and specialized waste services.`,
  };
}

export async function generateStaticParams() {
  return locations.areas.map((area) => ({
    area: area.id,
  }));
}

export default function WasteManagementIndexPage({ params }: Props) {
  const area = locations.areas.find((a) => a.id === params.area);
  if (!area || !area.waste_management) notFound();

  return (
    <div className="py-8">
      <PageHeader
        title={`Waste Management Services in ${area.name}`}
        description={`Comprehensive waste management solutions for businesses in ${area.name} and surrounding areas.`}
      />

      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {area.waste_management.services.map((service) => {
            const serviceSlug = service.toLowerCase().replace(/ /g, '-');
            return (
              <Link
                key={service}
                href={`/${area.id}/waste-management/${serviceSlug}`}
                className="group relative rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold group-hover:text-blue-600">
                  {service}
                </h3>
                <p className="mt-2 text-gray-600">
                  Professional {service.toLowerCase()} services tailored for businesses in {area.name}.
                </p>
                <div className="mt-4 flex items-center text-blue-600">
                  Learn more
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
            );
          })}
        </div>

        <div className="mt-12 space-y-6">
          <section className="prose max-w-none">
            <h2>Our Waste Management Services</h2>
            <p>
              We provide comprehensive waste management solutions across {area.name},
              helping businesses maintain compliance while reducing their environmental impact.
              Our services are tailored to meet the specific needs of your industry and location.
            </p>

            <h3>Collection Frequencies Available</h3>
            <ul>
              <li>Standard Service: {area.waste_management.collection_frequency.standard}</li>
              <li>High Volume: {area.waste_management.collection_frequency.high_volume}</li>
              <li>Low Volume: {area.waste_management.collection_frequency.low_volume}</li>
            </ul>

            <h3>Types of Waste We Handle</h3>
            <ul>
              {area.waste_management.waste_types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </section>

          <section className="prose max-w-none">
            <h2>Compliance and Regulations</h2>
            <p>
              All our waste management services in {area.name} comply with local and national regulations:
            </p>
            <ul>
              {area.waste_management.compliance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
} 