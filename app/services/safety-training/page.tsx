import React from 'react';
import SafetyTrainingClient from './SafetyTrainingClient';

export const metadata = {
  title: 'Safety Training Courses | Fire Protection & Safety Training',
  description: 'Explore our comprehensive range of safety training courses including fire safety, first aid, and workplace safety training.',
};

export default function SafetyTrainingPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <SafetyTrainingClient />
    </main>
  );
} 