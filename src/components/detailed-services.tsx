"use client";

import React, { useMemo, useCallback } from "react";
import { BrainCircuit, CheckCircle, HeartHandshake, Stethoscope } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    category: "AI-Powered Support",
    icon: BrainCircuit,
    description: "Comprehensive AI-driven mental health tools and support systems for 24/7 emotional assistance.",
    images: [
      "/assets/Services/services5.webp",
      "/assets/Services/services7.webp"
    ],
    subcategories: [
      {
        title: "AI-Based Tools & Assessments",
        items: [
          "GeetCare AI Companion (24x7 emotional support chat)",
          "Mood & Emotional Tracking Tool",
          "Loop Thought Detector",
        ],
      },
      {
        title: "Therapy & Support Systems",
        items: [
          "Online Therapy Marketplace (Chat, Audio, Video)",
          "Trained Volunteer Listener Network",
          "Spouse Conflict & Emotional Legal Support",
          "Teen & Women-centric Emotional Circles",
        ],
      },
      {
        title: "Healing & Reflective Tools",
        items: [
          "Guided Journaling Studio",
          "CBT/ACT Self-Help Prompts",
          "Mindfulness & Breath Audio Kits",
          "Mood Rebalancing Exercises (Daily Reflections)",
        ],
      },
      {
        title: "Trauma & Crisis Response Modules",
        items: [
          "Sexual Abuse & Harassment Healing Kit",
          "How to Talk to Parents / Friends About Trauma",
          "Shame-Guilt Detox Prompts",
          "Emergency Red Flag Reporting Flow",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Wellness Products & Services",
    description: "Beyond mental health - comprehensive wellness solutions for lifestyle, family, and physical well-being.",
    icon: HeartHandshake,
    images: [
      "/assets/Services/services2.webp",
      "/assets/Services/services4.webp"
    ],
    subcategories: [
      {
        title: "Work-Life Balance & Lifestyle Wellness",
        items: [
          "Work-Life Balance Audit Tool",
          "Routine Builder (Energy Flow Mapping)",
          "Goal-Stress Tracker",
          "Declutter & Calm Circles for Professionals",
        ],
      },
      {
        title: "Child & Adolescent Wellness",
        items: [
          "Good Touch / Bad Touch Education Kit",
          "Emotional Literacy Cards & Child Journaling",
          "Teen SafeTalk AI Chatbot",
          "Parent Communication Scripts",
        ],
      },
      {
        title: "Physical & Sensory Wellness (Future Scope)",
        items: [
          "Aromatherapy Kits & Herbal Teas",
          "Sleep Sound Ritual Box",
          "Sensory-Safe Calmwear",
          "Offline Audio Wellness Sets",
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Support Ecosystem & Follow-Up Services",
    description: "Complete care continuity with professional connections, progress monitoring, and personalized support.",
    icon: Stethoscope,
    images: [
      "/assets/Services/services.webp",
      "/assets/Services/services9.webp"
    ],
    subcategories: [
      {
        title: "Doctor Connection & Therapy Continuity",
        items: [
          "Connect to Verified Psychologists / Psychiatrists",
          "Emergency Support Directory (Local + National)",
          "Session History Management for Ongoing Support",
        ],
      },
      {
        title: "Follow-Up & Progress Monitoring",
        items: [
          "AI-Based Follow-Up Reminders (Check-in Prompts)",
          "Weekly Progress Tracker (Mood, Sleep, Thought Loops)",
          "Care Companion Flow: 'How Are You Really Feeling Today?'",
        ],
      },
      {
        title: "Medicine Support & Accessibility",
        items: [
          "Smart Prescription Upload & Sync with Doctors",
          "Mental Health-Specific Medicine Delivery Partnership",
          "Rare / Regional Medicine Access Navigator",
          "Dosage Reminder Tool with Privacy-Safe Notifications",
        ],
      },
      {
        title: "Personalized Recommendations",
        items: [
          "Based on Symptoms, Journals & Triggers",
          "Suggest Tools (Audio, Prompts, Meditation) as per User State",
          "Recommend When to Seek In-Person Help",
          "Cross-Refer to Corporate or Family Wellness if Triggered by External Events",
        ],
      },
    ],
  },
];

// Optimized Service Item Component
const ServiceItem = React.memo(({ item }: { item: string }) => (
  <li className="flex items-start">
    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
    <span className="text-gray-600 leading-relaxed text-sm">
      {item}
    </span>
  </li>
));

ServiceItem.displayName = 'ServiceItem';

// Optimized Subcategory Section Component
const SubcategorySection = React.memo(({ subcategory }: { subcategory: any }) => (
  <div className="mb-8 last:mb-0">
    <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-emerald-500 pl-4">
      {subcategory.title}
    </h4>
    <ul className="space-y-3 ml-4">
      {subcategory.items.map((item: string, idx: number) => (
        <ServiceItem key={`${item}-${idx}`} item={item} />
      ))}
    </ul>
  </div>
));

SubcategorySection.displayName = 'SubcategorySection';

// Main Service Card Component
const MainServiceCard = React.memo(({ service, index }: {
  service: any;
  index: number;
}) => {
  const IconComponent = service.icon;
  const isEven = index % 2 === 0;

  return (
    <div 
      className="rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
      style={{backgroundColor: '#faf9f6'}}
    >
      <div className={`grid lg:grid-cols-5 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Image Section - Takes 2 columns */}
        <div className={`relative lg:col-span-2 ${!isEven ? 'lg:col-start-4' : ''}`}>
          <div className="h-64 lg:h-full min-h-[400px] p-4">
            {service.images ? (
              // Show 2 images in a grid layout
              <div className="grid grid-rows-2 gap-3 h-full">
                {service.images.map((image: string, imgIdx: number) => (
                  <div 
                    key={imgIdx}
                    className="relative overflow-hidden rounded-xl group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`${service.category} - Image ${imgIdx + 1}`}
                      fill
                      className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority={index < 2 && imgIdx === 0}
                      quality={85}
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            ) : (
              // Fallback for single image (backward compatibility)
              <div className="relative h-full rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src={service.image}
                  alt={service.category}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={index < 2}
                  quality={85}
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )}
          </div>
        </div>

        {/* Content Section - Takes 3 columns */}
        <div className={`lg:col-span-3 p-8 lg:p-12 ${!isEven ? 'lg:col-start-1 lg:col-end-4' : ''}`}>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6">
              <IconComponent className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <div className="w-12 h-1 bg-emerald-500 mb-2" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {service.category}
              </h2>
            </div>
          </div>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {service.description}
          </p>
          
          <div className="space-y-8">
            {service.subcategories.map((subcategory: any, idx: number) => (
              <SubcategorySection 
                key={`${subcategory.title}-${idx}`} 
                subcategory={subcategory} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

MainServiceCard.displayName = 'MainServiceCard';

export default function DetailedServicesSection() {
  return (
    <section className="py-20 lg:py-32" style={{backgroundColor: '#d6eff4'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block w-16 h-1 bg-emerald-500 mb-4"></span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Wellness Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive ecosystem of care designed to support your mental and emotional well-being through innovative technology and personalized approach.
          </p>
        </div>

        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <MainServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Begin Your Wellness Journey?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have found support, healing, and growth through our comprehensive mental health platform.
          </p>
          <div className="flex justify-center">
            <a href="/contact">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d6eff4] hover:text-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer border-2 border-transparent hover:border-emerald-600">
                Get Started Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
