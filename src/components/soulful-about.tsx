"use client";

import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutUsSectionProps {
  showAllTeam?: boolean;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ showAllTeam = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamStories = [
  {
    name: "Nitish Garg",
    role: "Founder",
    story: "Nitish Garg is a Fellow Chartered Accountant from the Institute of chartered accountants of India (ICAI). He did his CA in 2014. He is also a diploma holder in International Taxation from ICAI. Nitish Garg is the visionary founder of Geet Nirvana Health & Education Foundation. With a professional background in finance, taxation, Accounting, Auditing & Assurance. Nitish brings structured planning, operational clarity, and an impact-focused mindset to the mental health space.",
    quote: "Structured planning and operational clarity drive meaningful impact in mental health.",
    image: "/People/Nitish Garg.webp",
    linkedin: "https://linkedin.com/in/ca-nitish-garg-mr-garg-95a401120"
  },
  {
    name: "Priyanka Bhardwaj",
    role: "Co-Founder",
    story: "A qualified Chartered Accountant with over 8 years of professional experience in taxation, audit, and statutory compliance. Priyanka brings deep domain knowledge in handling legal frameworks, tax optimization, and audit process — which adds stability and legal precision to Geet Care's operations.",
    quote: "Legal precision and stability form the foundation of sustainable mental health services.",
    image: "/People/Priyanka Bhardwaj.webp",
    linkedin: "https://www.linkedin.com/in/priyanka-bhardwaj-2aa73ab3/"
  },
  {
    name: "Hitashita Varmani",
    role: "Clinical Head",
    story: "Hitashita is passionate about helping people and bringing meaningful change in their lives. With a Master's in Psychotherapy and an Advanced Diploma in Child Guidance and Counselling, Hitashita brings both deep compassion and professional expertise to her work. Trained across various domains of mental health, Hitashita is especially drawn towards trauma-informed care and healing practices. She believes that every individual must be empowered to reach their fullest potential in this precious gift called life.",
    quote: "Every individual must be empowered to reach their fullest potential in this precious gift called life.",
    image: "/People/Hitashita Varmani.webp",
    linkedin: "https://www.linkedin.com/in/hitaishita-v-39514b208/"
  },
  {
    name: "Rishika Rastogi",
    role: "Digital Marketing Head",
    story: "With over 6 years of experience in digital strategy, branding, and audience engagement, Rishika leads the digital presence of Geet Care with purpose and passion. She specializes in mental health communication, ensuring that every campaign speaks with compassion, clarity, and impact. Her vision is to make mental wellness accessible to all—one post, reel, and click at a time.",
    quote: "Making mental wellness accessible to all—one post, reel, and click at a time.",
    image: "/People/Rishika.webp",
    linkedin: "https://www.linkedin.com/in/rishikarastogi/"
  },
  {
    name: "Manish Mishra",
    role: "Digital Marketing Executive",
    story: "Manish is a Digital Marketing Executive with 1 year of experience, currently in his learning phase. At Geet Care, he brings fresh ideas, enthusiasm, and a keen interest in exploring new strategies. With strong potential and a growth mindset, he's steadily becoming a valuable part of the team.",
    quote: "Fresh ideas and enthusiasm drive innovation in mental health outreach.",
    image: "/People/Manish Mishra .webp",
    linkedin: "https://www.linkedin.com/in/manish-mishra-aa167417a/"
  },
  {
    name: "Bharat",
    role: "Creative Executive",
    story: "Bharat is a skilled designer at Geet Care, known for his creative thinking, eye for detail, and strong editing skills. With a flair for turning concepts into compelling visuals, he consistently brings fresh and impactful designs to the table. Whether it's social media creatives, video edits, or branding materials, Bharat's work adds value and visual strength to every campaign.",
    quote: "Creativity and innovation transform concepts into compelling visual stories.",
    image: "/People/Bharat.jpeg.webp"
  }];


  return (
    <section className="relative overflow-hidden py-20" style={{backgroundColor: '#faf9f6'}}>
      {/* Geometric background with textured circles */}
      <div className="absolute inset-0">
        {/* Large sand gradient circle - partially cut off from left */}
        <div 
          className="absolute -top-20 -left-40 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 40%, #f5f0e8, #ede7dc, #e8dcc6)',
            backgroundImage: `
              radial-gradient(circle at 25% 60%, rgba(255,255,255,0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 30%, rgba(139,116,93,0.2) 1.5px, transparent 1.5px),
              radial-gradient(circle at 50% 80%, rgba(205,180,152,0.15) 1px, transparent 1px),
              radial-gradient(circle at 40% 20%, rgba(160,130,98,0.08) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '20px 20px, 15px 15px, 12px 12px, 8px 8px',
            border: '3px solid rgba(16,185,129,0.3)',
            boxShadow: '0 0 20px rgba(16,185,129,0.15)'
          }}
        />
        
        {/* Medium mint circle - top right */}
        <div 
          className="absolute top-32 -right-16 w-48 h-48 rounded-full"
          style={{
            backgroundColor: '#a7f3d0',
            backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 1px, transparent 1px),
              radial-gradient(circle at 70% 30%, rgba(0,0,0,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px, 6px 6px'
          }}
        />
        
        {/* Small textured circles scattered */}
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full"
          style={{
            backgroundColor: '#99f6e4',
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '8px 8px'
          }}
        />
        
        
        {/* Additional geometric circles extending toward bottom */}
        <div 
          className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full"
          style={{
            backgroundColor: '#ccfbf1',
            backgroundImage: `radial-gradient(circle at 60% 40%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '6px 6px'
          }}
        />
        
        <div 
          className="absolute bottom-32 right-1/6 w-16 h-16 rounded-full"
          style={{
            backgroundColor: '#a7f3d0',
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '5px 5px'
          }}
        />
        
        {/* Curved dotted lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-px" 
               style={{
                 background: 'repeating-linear-gradient(to right, transparent 0px, transparent 8px, #0d9488 8px, #0d9488 12px)',
                 opacity: 0.3,
                 transform: 'rotate(-8deg) translateY(-80px)'
               }} />
          <div className="absolute bottom-1/4 left-0 w-full h-px" 
               style={{
                 background: 'repeating-linear-gradient(to right, transparent 0px, transparent 8px, #0d9488 8px, #0d9488 12px)',
                 opacity: 0.25,
                 transform: 'rotate(12deg) translateY(60px)'
               }} />
          <div className="absolute bottom-10 left-0 w-full h-px" 
               style={{
                 background: 'repeating-linear-gradient(to right, transparent 0px, transparent 6px, #0d9488 6px, #0d9488 10px)',
                 opacity: 0.2,
                 transform: 'rotate(-5deg) translateY(30px)'
               }} />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Hero Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
          }>

          <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6">
            Our Story Begins With 
            <span className="text-emerald-600"> Listening</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering Individuals with mental health focus, GeetCare was born from 
            hearts that refused to ignore silent suffering anymore.
          </p>
        </div>

        {/* Mission Statement */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
          }>

          <div className="relative max-w-4xl mx-auto">
            <Quote className="absolute -top-4 -left-4 h-8 w-8 text-emerald-200" />
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-emerald-100">
              <p className="text-lg text-gray-700 leading-loose text-center !opacity-100">
                We don't just provide mental health services—we walk alongside you as a 
                friend who remembers what it's like to feel lost. Every intervention, 
                every conversation, every moment of support is crafted by people who've 
                stood where you stand now.
              </p>
            </div>
            <Quote className="absolute -bottom-4 -right-4 h-8 w-8 text-emerald-200 rotate-180" />
          </div>
        </div>

        {/* Personal Stories - Conditional rendering */}
        {showAllTeam ? (
          /* Full team details for About page */
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {teamStories.map((story, index) =>
              <div
                key={story.name}
                className={`transition-all duration-700 delay-${index * 200} transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
                }>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 relative">
                  {/* LinkedIn icon */}
                  {story.linkedin && (
                    <a href={story.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-blue-500 hover:text-blue-700 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                      </svg>
                    </a>
                  )}
                  <div className="flex items-start mb-4">
                    <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="rounded-full object-cover border-2 border-emerald-200"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-xl mb-1">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>
                  <div className="border-l-2 border-emerald-300 pl-4">
                    <p className="text-sm italic text-gray-600">"{story.quote}"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}
        {/* Inspired CTA Section */}
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-500 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
          }
        >
          {/* Left side - Content */}
          <div className="space-y-4 lg:space-y-6 lg:col-span-1">
            <div>
              <p className="text-teal-600 font-medium text-base lg:text-lg mb-1 lg:mb-2 scale-[0.92] lg:scale-100 origin-left">
                You're Not Alone —
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 leading-tight scale-[0.92] lg:scale-100 origin-left">
                We're Holding Your Hand Through This Journey.
              </h2>
            </div>
            
            <div className="space-y-3 lg:space-y-4 text-gray-600 scale-[0.92] lg:scale-100 origin-left">
              <p className="leading-relaxed text-sm lg:text-base">
                Geet Care is developing a Three-Layer Solution with Artificial Intelligence (AI) and Emotional Intelligence 
                (EI). Powered by an internal team of Trained Professionals and Onboarding Experts like Psychiatrists, 
                Psychologists, Pediatricians, Neurologists, and Neurosurgeons.
              </p>
              
              <p className="leading-relaxed text-sm lg:text-base">
                Your observations matter, and together, we'll provide your child with support that's backed by Science and 
                real medical experts.
              </p>
            </div>
            
            <div className="pt-3 lg:pt-4 scale-[0.92] lg:scale-100 origin-left">
              <Link href="/contact">
                <button className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-sm lg:text-base">
                  <span className="underline decoration-2 underline-offset-4">Yes, Let's Do It</span>
                </button>
              </Link>
            </div>
          </div>
          
          {/* Right side - Logo (Hidden on mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="w-[28rem] h-[28rem] flex items-center justify-center -mt-12">
              <Image
                src="/Geet_care_logo.png"
                alt="GeetCare Logo"
                width={392}
                height={392}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

    </section>);

};

export default AboutUsSection;