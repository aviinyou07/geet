"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Facebook, Instagram, Linkedin, Phone, Mail, Youtube } from "lucide-react";
import { motion } from "framer-motion";

// Custom Pinterest, Threads and WhatsApp icons as SVG components
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-3 lg:h-4 w-3 lg:w-4"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.162-1.508-.703-2.454-2.893-2.454-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-3 lg:h-4 w-3 lg:w-4"} viewBox="0 0 16 16" fill="currentColor">
    <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-3 lg:h-4 w-3 lg:w-4"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
  </svg>
);

export default function GeetCareFooter() {
  return (
    <footer className="relative scale-[0.92] lg:scale-100 origin-bottom">
      {/* Dark Green Footer Content */}
      <div style={{ backgroundColor: '#134a51' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section - Compassionate Care */}
          <div className="space-y-3 lg:space-y-4">
            <h4 className="text-xs lg:text-sm font-semibold uppercase tracking-wide" style={{ color: '#ffffff', opacity: 0.8 }}>
              About us
            </h4>
            <p className="text-xs lg:text-sm leading-relaxed" style={{ color: '#ffffff' }}>
              Geet Care is India's first culturally rooted emotion-tech company, blending AI and emotional intelligence (EI) to deliver affordable, context-aware mental health & wellness solutions. Our platform offers tools for individual users, children, women, schools, and workplaces — designed with a deep understanding of Indian emotional and relational realities.
            </p>
          </div>

          {/* Emergency Support - Connect with Care */}
          <div>
            <h4 className="text-xs lg:text-sm font-semibold uppercase tracking-wide mb-3 lg:mb-4" style={{ color: '#ffffff', opacity: 0.8 }}>
              Support
            </h4>
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-3 lg:h-4 w-3 lg:w-4 text-coral-600" />
                <span className="text-xs lg:text-sm" style={{ color: '#ffffff' }}>Contact support: +91 8076 003 535</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3 lg:h-4 w-3 lg:w-4 text-coral-600" />
                <Link 
                  href="mailto:support@geetcare.ai"
                  className="text-xs lg:text-sm hover:text-teal-300 transition-colors"
                  style={{ color: '#ffffff' }}
                >
                  support@geetcare.ai
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xs lg:text-sm font-semibold uppercase tracking-wide mb-3 lg:mb-4" style={{ color: '#ffffff', opacity: 0.8 }}>
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2 lg:gap-3 mb-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/geetcare", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/geet_care/", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/geet-care/", label: "LinkedIn" },
                { Icon: Youtube, href: "https://www.youtube.com/@GeetCare", label: "YouTube" },
                { Icon: WhatsAppIcon, href: "https://wa.me/+918076003535", label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="p-1.5 lg:p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 hover:bg-teal-100 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-3 lg:h-4 w-3 lg:w-4 text-teal-600" />
                </motion.a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { Icon: PinterestIcon, href: "https://in.pinterest.com/geet_care/", label: "Pinterest" },
                { Icon: ThreadsIcon, href: "https://www.threads.net/@geet_care", label: "Threads" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="p-1.5 lg:p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80 hover:bg-teal-100 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-3 lg:h-4 w-3 lg:w-4 text-teal-600" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-teal-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs lg:text-sm tracking-wide px-4" style={{ color: '#ffffff' }}>
            © 2025 GeetCare.
          </p>
          <p className="tracking-wide px-4 mt-4" style={{ color: '#ffffff', opacity: 0.7, fontSize: '8px' }}>
            Designed & Developed By{' '}
            <Link 
              href="https://thebuytech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors underline"
              style={{ color: '#ffffff' }}
            >
              TheBuyTech
            </Link>
          </p>
        </motion.div>
        </div>
      </div>
    </footer>
  );
}
