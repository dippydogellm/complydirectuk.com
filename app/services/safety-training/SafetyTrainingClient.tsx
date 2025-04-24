'use client'

import React from 'react';
import { ServiceList } from '@/components/ServiceList';
import ServiceAreas from '@/components/ServiceAreas';
import Breadcrumbs from '@/components/Breadcrumbs';
import servicesData from '@/data/services.json';
import { ServicesData } from '@/types/services';

export default function SafetyTrainingClient() {
  const safetyTrainingServices = (servicesData as ServicesData).categories.find(cat => cat.id === 'safety-training')?.services || [];

  return (
    <div className="max-w-7xl mx-auto">
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
      <section>
        <h2 className="text-3xl font-bold mb-6">Available in These Areas</h2>
        <ServiceAreas />
      </section>
    </div>
  );
} 