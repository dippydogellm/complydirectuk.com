'use client'

import React from 'react';
import { Container } from '@/components/Container';
import ServiceAreas from '@/components/ServiceAreas';
import Breadcrumbs from '@/components/Breadcrumbs';
import { mergedServicesData } from '@/data/merged-services';
import { ServicesData } from '@/types/services';
import { ServiceList } from '@/components/ServiceList';

export default function SafetyTrainingClient() {
  const safetyTrainingCategory = mergedServicesData.categories.find(cat => cat.id === 'safety-training');
  const safetyTrainingServices = safetyTrainingCategory?.services || [];

  const tradeTrainingCourses = [
    {
      id: 'electrical-safety',
      name: 'Electrical Safety Training',
      courses: [
        'Basic Electrical Safety Awareness',
        'Electrical Safety for Non-Electricians',
        'High Voltage Safety Training',
        'Electrical Risk Assessment',
        'Electrical Maintenance Safety',
        'Portable Appliance Testing (PAT) Training'
      ]
    },
    {
      id: 'construction-safety',
      name: 'Construction Safety Training',
      courses: [
        'Site Safety Awareness',
        'Working at Height Training',
        'Scaffolding Safety',
        'Excavation Safety',
        'Confined Spaces Training',
        'Construction Site Management'
      ]
    },
    {
      id: 'mechanical-safety',
      name: 'Mechanical Safety Training',
      courses: [
        'Machine Safety Awareness',
        'Lifting Operations Safety',
        'Pressure Systems Safety',
        'Mechanical Maintenance Safety',
        'Forklift Safety Training',
        'Crane Operations Safety'
      ]
    },
    {
      id: 'chemical-safety',
      name: 'Chemical Safety Training',
      courses: [
        'COSHH Awareness',
        'Chemical Handling Safety',
        'Hazardous Substances Training',
        'Chemical Spill Response',
        'Laboratory Safety',
        'Chemical Storage Safety'
      ]
    },
    {
      id: 'health-safety',
      name: 'Health & Safety Training',
      courses: [
        'Health & Safety Awareness',
        'Risk Assessment Training',
        'Manual Handling Training',
        'Fire Safety Training',
        'First Aid Training',
        'Health & Safety Management'
      ]
    }
  ];

  return (
    <Container>
      <Breadcrumbs className="mb-8" />
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Safety Training Courses</h1>
        <p className="mt-4 text-lg text-gray-600">
          Comprehensive safety training programs designed to meet your workplace safety requirements
        </p>
      </div>

      {/* Safety Training Services */}
      <section className="mb-16">
        <ServiceList 
          title="Available Training Courses" 
          services={safetyTrainingServices} 
          area="UK" 
          categoryId="safety-training"
        />
      </section>

      {/* Service Areas */}
      <section className="mb-16">
        <ServiceAreas />
      </section>
    </Container>
  );
} 