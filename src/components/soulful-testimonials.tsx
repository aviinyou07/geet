"use client";

import { motion } from "framer-motion";
import { memo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Testimonial data
const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Developer",
    location: "Bangalore, Karnataka",
    testimonial: "I was really struggling with panic attacks during work meetings. My hands would shake, and I'd feel like I couldn't breathe. The GeetCare counselor helped me understand what was happening and taught me breathing exercises that actually work. Now I can present to clients without that overwhelming fear.",
    rating: 5,
    category: "Anxiety Support"
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "CA Student",
    location: "Ahmedabad, Gujarat", 
    testimonial: "My CA finals were approaching and I was barely sleeping. The pressure from family and my own expectations was crushing me. When I called GeetCare at 1 AM crying, they didn't judge me at all. They listened and helped me create a study plan that didn't make me want to give up on everything.",
    rating: 5,
    category: "Student Support"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "School Teacher",
    location: "Hyderabad, Telangana",
    testimonial: "After my divorce, I felt like I had lost myself completely. Managing work, my kids, and the constant questions from relatives was exhausting. Through GeetCare, I learned that it's okay to put myself first sometimes. Small steps, but I'm finally sleeping better and my kids say I smile more now.",
    rating: 5,
    category: "Life Coaching"
  },
  {
    id: 4,
    name: "Rahul Gupta",
    role: "Small Business Owner",
    location: "Jaipur, Rajasthan",
    testimonial: "COVID hit my restaurant business hard. I was drinking too much, snapping at my staff, and my wife was worried about me. I never thought I'd talk to a therapist, but my brother convinced me to try GeetCare. They helped me see that asking for help isn't weakness - it's actually pretty brave.",
    rating: 5,
    category: "Stress Management"
  },
  {
    id: 5,
    name: "Kavya Nair",
    role: "Medical Student",
    location: "Kochi, Kerala",
    testimonial: "NEET preparation consumed my entire teenage years. Even after getting into medical college, I couldn't enjoy anything. I felt guilty for watching movies or hanging out with friends. My GeetCare counselor helped me understand that life is not just about achievements. I'm learning to be kind to myself.",
    rating: 5,
    category: "Academic Pressure"
  },
  {
    id: 6,
    name: "Vikash Kumar",
    role: "IT Professional",
    location: "Pune, Maharashtra",
    testimonial: "Night shifts and constant deadlines had me feeling like a robot. I was irritable with my parents, had no social life, and honestly didn't see the point in anything. The mindfulness techniques I learned through GeetCare sound simple, but they've made a real difference. I actually look forward to weekends now.",
    rating: 5,
    category: "Work-Life Balance"
  }
];

// Star rating component
const StarRating = memo(({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
));

StarRating.displayName = 'StarRating';

// Individual testimonial item - elegant design without boxes
const TestimonialItem = memo(({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.15 }}
    viewport={{ once: true }}
    className="group relative py-8 px-2"
  >
    {/* Quote mark */}
    <div className="mb-6 relative">
      <Quote 
        className="w-8 h-8 text-teal-400 opacity-60 group-hover:opacity-80 group-hover:text-teal-500 transition-all duration-500" 
        strokeWidth={1.5}
      />
    </div>

    {/* Category */}
    <div className="mb-4">
      <span className="text-xs font-medium text-teal-600 uppercase tracking-wider opacity-70 group-hover:opacity-90 transition-opacity duration-300">
        {testimonial.category}
      </span>
    </div>

    {/* Testimonial text */}
    <blockquote className="text-gray-700 text-lg lg:text-xl leading-relaxed mb-8 font-light group-hover:text-gray-900 transition-colors duration-500 relative">
      <span className="text-2xl text-teal-300 absolute -left-2 -top-2 opacity-50 font-serif">"</span>
      {testimonial.testimonial}
      <span className="text-2xl text-teal-300 opacity-50 font-serif">"</span>
    </blockquote>

    {/* Rating stars */}
    <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
      <StarRating rating={testimonial.rating} />
    </div>

    {/* Author section */}
    <div className="border-l-2 border-teal-200 pl-6 group-hover:border-teal-300 transition-colors duration-500">
      <h4 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-teal-800 transition-colors duration-300">
        {testimonial.name}
      </h4>
      <p className="text-gray-500 mb-1 group-hover:text-gray-600 transition-colors duration-300">
        {testimonial.role}
      </p>
      <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
        {testimonial.location}
      </p>
    </div>

    {/* Subtle hover background */}
    <div className="absolute inset-0 bg-gradient-to-br from-teal-50/0 via-transparent to-sage-50/0 group-hover:from-teal-50/20 group-hover:to-sage-50/10 transition-all duration-700 rounded-2xl -mx-4" />
    
    {/* Subtle side accent */}
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-teal-300 to-sage-300 opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-r-full" />
  </motion.div>
));

TestimonialItem.displayName = 'TestimonialItem';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const testimonialsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(TESTIMONIALS.length / testimonialsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentTestimonials = TESTIMONIALS.slice(
    currentSlide * testimonialsPerSlide,
    (currentSlide + 1) * testimonialsPerSlide
  );

  return (
    <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden scale-[0.92] lg:scale-100 origin-top">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 via-teal-50/30 to-white" />
      
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-24 lg:w-32 h-24 lg:h-32 bg-teal-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-36 lg:w-48 h-36 lg:h-48 bg-sage-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 lg:w-64 h-48 lg:h-64 bg-gradient-to-r from-teal-50 to-sage-50 rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Stories of{" "}
            <span className="bg-gradient-to-r from-teal-600 to-sage-600 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Real experiences from individuals who found their path to wellness through our compassionate care and support
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className={`${isMobile ? 'flex justify-center' : 'grid md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8 mb-10 lg:mb-12`}>
          {currentTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={isMobile ? 'w-full max-w-md' : ''}>
              <TestimonialItem
                testimonial={testimonial}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Navigation controls */}
        {totalSlides > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={prevSlide}
              className="p-3 bg-white/80 backdrop-blur-sm border border-teal-200 rounded-full hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-teal-600" />
            </button>

            {/* Slide indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-teal-500 w-8'
                      : 'bg-teal-200 hover:bg-teal-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white/80 backdrop-blur-sm border border-teal-200 rounded-full hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-teal-600" />
            </button>
          </motion.div>
        )}

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            Your story of healing could be next. Take the first step today. ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
