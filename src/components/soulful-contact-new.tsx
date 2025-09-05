"use client";

import { Mail, MapPin, Phone } from 'lucide-react';
import SimpleContactForm from '@/components/simple-contact-form';

export default function ContactSection() {
  return (
    <div className="w-full min-h-screen relative">
      {/* Light Green Header Section */}
      <section className="w-full relative" style={{ backgroundColor: '#dcfce7', paddingBottom: '200px' }}>
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl ml-8 lg:ml-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#374151' }}>Contact us!</h1>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Do you have any concerns or questions you would like to address? Get in touch with us and find answers you need.
            </p>
          </div>
        </div>
      </section>

      {/* Overlapping White Card Section */}
      <div className="relative">
        <div className="container mx-auto px-6">
          {/* White Card - Overlapping from Red Line Area */}
          <div 
            className="rounded-2xl shadow-xl mx-auto max-w-4xl border border-gray-100"
            style={{
              backgroundColor: '#ffffff', // Solid white background
              marginTop: '-150px', // Move card higher up into green area
              padding: '2.5rem 2rem 3rem 2rem', // Increased bottom padding for more space
              position: 'relative',
              zIndex: 10 // Ensures it sits above the green background
            }}
          >
            {/* Question Header */}
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-800">
                Have a question? <span className="text-orange-500">Talk to us.</span>
              </h2>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Email Card */}
              <div className="text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">EMAIL US AT</h3>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-gray-700 font-medium mb-2">support@geetcare.ai</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We'll get back to you in 24 hours
                  </p>
                </div>
              </div>

              {/* Visit Card */}
              <div className="text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">VISIT US AT</h3>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-gray-700 font-medium max-w-xs mx-auto leading-relaxed mb-2">
                    307, 3rd Floor, Lusa Tower,
                  </p>
                  <p className="text-gray-700 font-medium max-w-xs mx-auto leading-relaxed">
                    Azadpur, Delhi, 110033
                  </p>
                </div>
              </div>

              {/* Call Card */}
              <div className="text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">CALL US AT</h3>
                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-gray-700 font-medium mb-2">+91 8076 003 535</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Monday to Friday, 9:30 AM to 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section - No Cards/Containers */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-6">
          {/* Form Section - Direct on Background */}
          <div className="max-w-4xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">We'd love to hear from you!</h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
                Have a question or something to share? Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            {/* Contact Form - Direct on Background */}
            <SimpleContactForm />
          </div>
        </div>
      </section>

    </div>
  );
}
