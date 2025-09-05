"use client";

import React from 'react';
import SmoothScrollNavigation from '@/components/smooth-scroll-navigation';
import ContactSection from '@/components/soulful-contact-new';
import SoulfulFooter from '@/components/soulful-footer';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen">
      <SmoothScrollNavigation />
      <div className="pt-16">
        <ContactSection />
      </div>
      <SoulfulFooter />
    </div>
  );
};

export default ContactUsPage;
