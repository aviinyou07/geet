// ============================================================================
// GEETCARE WEBSITE CONSTANTS - CENTRALIZED CONFIGURATION
// ============================================================================

export const SITE_CONFIG = {
  name: 'GeetCare',
  title: 'GeetCare - Mental Wellness Platform',
  description: 'Compassionate 24/7 mental health support and personalized wellness services',
  url: 'https://geetcare.com',
  author: 'GeetCare Team',
  keywords: ['mental health', 'therapy', 'wellness', 'counseling', 'self-care'],
} as const;

// Hero Section Configuration
export const HERO_CONFIG = {
  images: [
    {
      src: '/assets/optimized/heroSlider1.webp',
      alt: 'Mental wellness journey begins - peaceful meditation scene',
    },
    {
      src: '/assets/optimized/HeroSlider2.webp', 
      alt: 'Compassionate care and support - helping hands together',
    },
    {
      src: '/assets/optimized/heroSlide3.webp',
      alt: 'Healing environment - serene nature and wellness',
    },
  ],
  rotationInterval: 3000, // 3 seconds
  title: 'Your 24×7 Wellness Partner',
  description: 'Discover gentle pathways to emotional balance and lasting mental wellness through compassionate, personalized support.',
  logo: {
    src: '/Geet_care_logo.png',
    alt: 'GeetCare Logo',
    width: 306,
    height: 306,
  },
} as const;

// Services Configuration
export const SERVICES_CONFIG = [
  {
    id: 'wellness-products',
    title: 'Wellness Products & Services (Beyond Mental Health)',
    image: '/assets/Services/services2.webp',
    brief: [
      'Work-Life Balance & Lifestyle Wellness',
      'Child & Adolescent Wellness',
      'Physical & Sensory Wellness (Future Scope)'
    ]
  },
  {
    id: 'ai-support',
    title: 'AI-Powered Support',
    image: '/assets/Services/services5.webp',
    brief: [
      'AI-Based Tools & Assessments',
      'Therapy & Support Systems',
      'Healing & Reflective Tools',
      'Trauma & Crisis Response Modules'
    ]
  },
  {
    id: 'support-ecosystem',
    title: 'Support Ecosystem & Follow-Up Services',
    image: '/assets/Services/services7.webp',
    brief: [
      'Doctor Connection & Therapy Continuity',
      'Follow-Up & Progress Monitoring',
      'Medicine Support & Accessibility',
      'Personalized Recommendations'
    ]
  }
] as const;

// Team Members Configuration
export const TEAM_CONFIG = [
  {
    name: 'Nitish Garg',
    role: 'Founder',
    story: 'Nitish Garg is a Fellow Chartered Accountant from the Institute of chartered accountants of India (ICAI). He did his CA in 2014. He is also a diploma holder in International Taxation from ICAI. Nitish Garg is the visionary founder of Geet Nirvana Health & Education Foundation. With a professional background in finance, taxation, Accounting, Auditing & Assurance. Nitish brings structured planning, operational clarity, and an impact-focused mindset to the mental health space.',
    quote: 'Structured planning and operational clarity drive meaningful impact in mental health.',
    image: '/People/Nitish Garg.webp',
    linkedin: 'https://linkedin.com/in/ca-nitish-garg-mr-garg-95a401120'
  },
  {
    name: 'Priyanka Bhardwaj',
    role: 'Co-Founder',
    story: 'A qualified Chartered Accountant with over 8 years of professional experience in taxation, audit, and statutory compliance. Priyanka brings deep domain knowledge in handling legal frameworks, tax optimization, and audit process — which adds stability and legal precision to Geet Care\'s operations.',
    quote: 'Legal precision and stability form the foundation of sustainable mental health services.',
    image: '/People/Priyanka Bhardwaj.webp',
    linkedin: 'https://www.linkedin.com/in/priyanka-bhardwaj-2aa73ab3/'
  },
  {
    name: 'Hitashita Varmani',
    role: 'Clinical Head',
    story: 'Hitashita is passionate about helping people and bringing meaningful change in their lives. With a Master\'s in Psychotherapy and an Advanced Diploma in Child Guidance and Counselling, Hitashita brings both deep compassion and professional expertise to her work. Trained across various domains of mental health, Hitashita is especially drawn towards trauma-informed care and healing practices. She believes that every individual must be empowered to reach their fullest potential in this precious gift called life.',
    quote: 'Every individual must be empowered to reach their fullest potential in this precious gift called life.',
    image: '/People/Hitashita Varmani.webp',
    linkedin: 'https://www.linkedin.com/in/hitaishita-v-39514b208/'
  },
  {
    name: 'Rishika Rastogi',
    role: 'Digital Marketing Head',
    story: 'With over 6 years of experience in digital strategy, branding, and audience engagement, Rishika leads the digital presence of Geet Care with purpose and passion. She specializes in mental health communication, ensuring that every campaign speaks with compassion, clarity, and impact. Her vision is to make mental wellness accessible to all—one post, reel, and click at a time.',
    quote: 'Making mental wellness accessible to all—one post, reel, and click at a time.',
    image: '/People/Rishika.webp',
    linkedin: 'https://www.linkedin.com/in/rishikarastogi/'
  },
  {
    name: 'Manish Mishra',
    role: 'Digital Marketing Executive',
    story: 'Manish is a Digital Marketing Executive with 1 year of experience, currently in his learning phase. At Geet Care, he brings fresh ideas, enthusiasm, and a keen interest in exploring new strategies. With strong potential and a growth mindset, he\'s steadily becoming a valuable part of the team.',
    quote: 'Fresh ideas and enthusiasm drive innovation in mental health outreach.',
    image: '/People/Manish Mishra .webp',
    linkedin: 'https://www.linkedin.com/in/manish-mishra-aa167417a/'
  },
  {
    name: 'Bharat',
    role: 'Creative Executive',
    story: 'Bharat is a skilled designer at Geet Care, known for his creative thinking, eye for detail, and strong editing skills. With a flair for turning concepts into compelling visuals, he consistently brings fresh and impactful designs to the table. Whether it\'s social media creatives, video edits, or branding materials, Bharat\'s work adds value and visual strength to every campaign.',
    quote: 'Creativity and innovation transform concepts into compelling visual stories.',
    image: '/People/Bharat.jpeg.webp'
  }
] as const;

// Contact Information
export const CONTACT_CONFIG = {
  phone: '+91 123 456 7890',
  email: 'hello@mindfulcare.com',
  supportEmail: 'support@geetcare.com',
  address: 'New Delhi, India',
  crisisHotline: '988',
  socialMedia: {
    facebook: '#',
    twitter: '#',
    instagram: '#', 
    linkedin: '#'
  }
} as const;

// Navigation Configuration
export const NAVIGATION_CONFIG = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
] as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
  },
  easing: {
    smooth: [0.25, 0.46, 0.45, 0.94],
    bounce: [0.68, -0.55, 0.265, 1.55],
    elastic: [0.175, 0.885, 0.32, 1.275],
  },
  stagger: {
    children: 0.1,
    items: 0.05,
  }
} as const;

// Theme Colors (matching globals.css)
export const THEME_COLORS = {
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  sage: {
    50: '#f6f7f6',
    100: '#e3e7e3',
    200: '#c8d2c8',
    300: '#a3b5a3',
    400: '#7a947a',
    500: '#5d7a5d',
    600: '#4a634a',
    700: '#3d523d',
    800: '#344234',
    900: '#2c372c',
  }
} as const;

// Performance Configuration
export const PERFORMANCE_CONFIG = {
  imageOptimization: {
    quality: 85,
    formats: ['avif', 'webp'] as const,
    sizes: {
      hero: '100vw',
      card: '(max-width: 768px) 100vw, 33vw',
      avatar: '(max-width: 768px) 64px, 128px',
      logo: '(max-width: 768px) 200px, 306px',
    }
  },
  intersection: {
    threshold: 0.1,
    rootMargin: '50px',
  }
} as const;
