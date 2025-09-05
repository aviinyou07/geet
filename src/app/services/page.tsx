"use client";

import React from 'react';
import SmoothScrollNavigation from '@/components/smooth-scroll-navigation';
import DetailedServicesSection from '@/components/detailed-services';
import SoulfulFooter from '@/components/soulful-footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScrollNavigation />
      <div className="pt-16">
        <DetailedServicesSection />
      </div>
      <SoulfulFooter />
    </div>
  );
};

export default ServicesPage;
