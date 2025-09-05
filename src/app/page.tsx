"use client"

import SmoothScrollNavigation from '@/components/smooth-scroll-navigation'
import SoulfulHero from '@/components/soulful-hero'
import SoulfulAbout from '@/components/soulful-about'
import SoulfulServices from '@/components/soulful-services'
import SoulfulTestimonials from '@/components/soulful-testimonials'
import SoulfulFooter from '@/components/soulful-footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScrollNavigation />
      
      <main className="flex flex-col">
        <section id="home">
          <SoulfulHero />
        </section>
        
        <section id="about">
          <SoulfulAbout />
        </section>
        
        <section id="services">
          <SoulfulServices />
        </section>
        
        <section id="testimonials">
          <SoulfulTestimonials />
        </section>
      </main>
      
      <SoulfulFooter />
    </div>
  );
}