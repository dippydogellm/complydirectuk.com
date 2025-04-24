import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import locations from '@/data/locations.json';
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
    title: `${area.name} Services | Comply Direct UK`,
    description: `Professional services in ${area.name}. Expert solutions for businesses including waste management, compliance, and specialized services.`,
  };
}

export async function generateStaticParams() {
  return locations.areas.map((area) => ({
    area: area.id,
  }));
}

export default function AreaPage({ params }: Props) {
  const area = locations.areas.find((a) => a.id === params.area);
  if (!area) notFound();

  return (
    <div className="py-8">
      <PageHeader
        title={`Professional Services in ${area.name}`}
        description={`Comprehensive business solutions and services across ${area.name} and surrounding areas.`}
      />

      <Container>
        <div className="prose max-w-none mb-12">
          <h2>About {area.name}</h2>
          <p>{area.description}</p>

          <h3>Coverage Areas</h3>
          <ul>
            {area.coverage.districts.map((district) => (
              <li key={district}>{district}</li>
            ))}
          </ul>

          <h3>Key Industries</h3>
          <ul>
            {area.key_industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Our Services in {area.name}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Waste Management Services Card */}
            {area.waste_management && (
              <Link
                href={`/${area.id}/waste-management`}
                className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold group-hover:text-blue-600">
                  Waste Management Services
                </h3>
                <p className="mt-2 text-gray-600">
                  Professional waste collection and management solutions for businesses in {area.name}.
                  From commercial to specialized waste services.
                </p>
                <div className="mt-4 flex items-center text-blue-600">
                  View all waste services
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
            )}
            {/* Other service cards can go here */}
          </div>
        </div>

        <div className="mt-12">
          <section className="prose max-w-none">
            <h2>Local Regulations and Compliance</h2>
            <ul>
              {area.local_regulations.map((regulation) => (
                <li key={regulation}>{regulation}</li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
} 