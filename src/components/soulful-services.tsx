"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { memo } from "react";
import Image from "next/image";
import { SERVICES_CONFIG } from "@/lib/constants";

// Clean service card with white text and hover blur effect
const ServiceCard = memo(({ service }: { service: typeof SERVICES_CONFIG[number] }) => {
  return (
    <Link href="/services" className="block group">
      <div className="relative rounded-2xl h-96 overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
        {/* Background image with blur on hover */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.title} - Service illustration`}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:blur-sm group-hover:scale-115 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={85}
          />
        </div>
        
        {/* Dark overlay for text readability with enhanced gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/40 group-hover:from-black/60 group-hover:via-black/70 group-hover:to-emerald-900/30 transition-all duration-700" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-4 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:text-emerald-100" style={{ color: '#ffffff' }}>
            {service.title}
          </h3>
          
          {/* Service details - hidden by default, shown on hover */}
          <div className="opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
            <ul className="space-y-2">
              {service.brief.map((point, i) => (
                <li key={i} className="flex items-start text-sm" style={{ color: '#ffffff' }}>
                  <span className="w-2 h-2 bg-teal-400 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 scale-[0.92] lg:scale-100 origin-top" style={{backgroundColor: '#d6eff4'}}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Wellness Services
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            More than services—these are gentle invitations to heal, grow, and reconnect with your most authentic self
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {SERVICES_CONFIG.map((service, idx) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-gray-500 text-xs lg:text-sm px-4">
            Every journey is unique. Choose what resonates with your heart today. ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
