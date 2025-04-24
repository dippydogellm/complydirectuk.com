import { notFound } from 'next/navigation';
import locations from '@/data/locations.json';
import { Metadata } from 'next';
import { WasteManagementService } from '@/components/WasteManagementService';

type Props = {
  params: {
    area: string;
    service: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = locations.areas.find((a) => a.id === params.area);
  if (!area) return {};

  const service = params.service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title: `${service} in ${area.name} | Comply Direct UK`,
    description: `Professional ${service.toLowerCase()} services in ${area.name}. Expert waste management solutions tailored to your needs.`,
  };
}

export async function generateStaticParams() {
  const paths: { area: string; service: string }[] = [];
  
  locations.areas.forEach((area) => {
    if (area.waste_management) {
      const services = area.waste_management.services.map(service => ({
        area: area.id,
        service: service.toLowerCase().replace(/ /g, '-'),
      }));
      paths.push(...services);
    }
  });

  return paths;
}

export default function WasteManagementServicePage({ params }: Props) {
  const area = locations.areas.find((a) => a.id === params.area);
  if (!area || !area.waste_management) notFound();

  const service = params.service.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  const isValidService = area.waste_management.services.some(
    s => s.toLowerCase().replace(/ /g, '-') === params.service
  );

  if (!isValidService) notFound();

  return (
    <WasteManagementService
      area={area}
      service={service}
    />
  );
} 