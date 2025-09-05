"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState, useCallback, memo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HERO_CONFIG } from "@/lib/constants";

const HeroSection = memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageCount = HERO_CONFIG.images.length;
  const isResettingRef = useRef(false);

  // Memoized image rotation function
  const rotateImage = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const nextIndex = prev + 1;
      
      // When we reach the duplicate (imageCount), we need to reset seamlessly
      if (nextIndex > imageCount) {
        isResettingRef.current = true;
        
        // Instantly jump to position 1 (second image) after the transition completes
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = 'none';
            setCurrentImageIndex(1);
            
            // Re-enable transitions after a frame
            requestAnimationFrame(() => {
              if (containerRef.current) {
                containerRef.current.style.transition = 'transform 1000ms ease-in-out';
                isResettingRef.current = false;
              }
            });
          }
        }, 1000);
        
        return imageCount; // Show duplicate first image
      }
      
      return nextIndex;
    });
  }, [imageCount]);

  // Simple interval with proper cleanup
  useEffect(() => {
    const interval = setInterval(rotateImage, HERO_CONFIG.rotationInterval);
    return () => clearInterval(interval);
  }, [rotateImage]);

  // Visibility animation with delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Image Carousel - Seamless Sliding Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={containerRef}
          className="flex h-full seamless-slide-container"
          style={{
            width: `${(imageCount + 1) * 100}%`,
            transform: `translateX(-${currentImageIndex * (100 / (imageCount + 1))}%)`,
            transition: 'transform 1000ms ease-in-out'
          }}
        >
          {/* Original images */}
          {HERO_CONFIG.images.map((image, index) => (
            <div
              key={image.src}
              className="relative flex-shrink-0 w-full h-full"
              style={{ width: `${100 / (imageCount + 1)}%` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={75}
                className="object-cover"
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          ))}
          {/* Duplicate first image for seamless loop */}
          <div
            key="duplicate-first"
            className="relative flex-shrink-0 w-full h-full"
            style={{ width: `${100 / (imageCount + 1)}%` }}
          >
            <Image
              src={HERO_CONFIG.images[0].src}
              alt={HERO_CONFIG.images[0].alt}
              fill
              priority={false}
              quality={75}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content - Mobile optimized with 8% size reduction */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6 lg:space-y-8 scale-[0.92] lg:scale-100 origin-center">
            {/* Logo */}
            <div className="mb-6 lg:mb-8 mt-24 lg:mt-32">
              <div className={`flex justify-center mb-4 lg:mb-6 transition-all duration-1200 ease-out ${
                isVisible ? 'opacity-100 blur-none scale-100' : 'opacity-0 blur-sm scale-95'
              }`}>
                <Image
                  src={HERO_CONFIG.logo.src}
                  alt={HERO_CONFIG.logo.alt}
                  width={HERO_CONFIG.logo.width}
                  height={HERO_CONFIG.logo.height}
                  priority
                  className="max-w-[278px] max-h-[278px] lg:max-w-[340px] lg:max-h-[340px]"
                />
              </div>
              
              {/* Title - Mobile responsive */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
                <span 
                  className={`block font-bold transition-all duration-800 ease-out delay-300 ${
                    isVisible ? 'opacity-100 blur-none translate-y-0' : 'opacity-0 blur-sm translate-y-5'
                  }`}
                  style={{
                    color: 'white',
                    textShadow: '2px 4px 8px rgba(0,0,0,0.8)'
                  }}
                >
                  {HERO_CONFIG.title}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p 
              className={`text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-medium transition-all duration-800 ease-out delay-600 px-2 sm:px-0 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{
                color: 'white',
                textShadow: '1px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              {HERO_CONFIG.description}
            </p>

            {/* Buttons - Mobile responsive */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 lg:pt-8 transition-all duration-800 ease-out delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="px-6 py-3 lg:px-9 lg:py-4 rounded-full text-base lg:text-lg font-medium shadow-lg border-0 cursor-pointer hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto"
                  style={{ backgroundColor: 'black', color: 'white' }}
                  aria-label="Begin your wellness journey - Get Started"
                >
                  Begin Your Journey
                </Button>
              </Link>
              
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/60 text-white hover:bg-white hover:text-emerald-700 hover:border-white px-6 py-3 lg:px-9 lg:py-4 rounded-full text-base lg:text-lg font-medium transition-all duration-300 hover:shadow-lg backdrop-blur-sm cursor-pointer w-full sm:w-auto"
                  aria-label="Learn more about GeetCare - Explore Services"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
