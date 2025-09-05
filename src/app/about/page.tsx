"use client";

import React from 'react';
import SmoothScrollNavigation from '@/components/smooth-scroll-navigation';
import AboutUsSection from '@/components/soulful-about';
import SoulfulFooter from '@/components/soulful-footer';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScrollNavigation />
      <div className="pt-16">
        <AboutUsSection showAllTeam={true} />
      </div>
      <SoulfulFooter />
    </div>
  );
};

export default AboutUsPage;

