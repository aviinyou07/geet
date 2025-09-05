"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact us", href: "/contact" },
  { name: "Blogs", href: "/blog" },
]

export default function SmoothScrollNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNavLogo, setShowNavLogo] = useState(false)
  const pathname = usePathname()

  // Check if we're on the home page
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state for blur effect
      setIsScrolled(window.scrollY > 20)
      
      // Show nav logo when scrolled past hero logo (approximately 400px)
      setShowNavLogo(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActivePath = (item: typeof navItems[0]) => {
    // Use pathname-based detection
    if (item.href === "/" && pathname === "/") return true
    if (item.href !== "/" && pathname.startsWith(item.href)) return true
    return false
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-md bg-background/90 shadow-lg" 
          : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo - conditional display based on page */}
          <div className="flex items-center">
            {isHomePage ? (
              /* Home page: Show logo with scroll-based transition */
              <div className={`transition-all duration-500 ease-in-out ${
                showNavLogo ? 'opacity-100 transform translate-x-0 blur-none' : 'opacity-0 transform -translate-x-4 blur-sm pointer-events-none'
              }`}>
                <Link href="/" className="flex items-center group">
                  <div className="relative mr-2 lg:mr-3">
                    <Image
                      src="/Geet_care_logo.png"
                      alt="GeetCare Logo"
                      width={100}
                      height={100}
                      className="w-18 h-18 lg:w-[90px] lg:h-[90px] transition-transform duration-300 group-hover:scale-110 object-contain"
                    />
                  </div>
                </Link>
              </div>
            ) : (
              /* Other pages: Show logo statically */
              <Link href="/" className="flex items-center group">
                <div className="relative mr-2 lg:mr-3">
                  <Image
                    src="/Geet_care_logo.png"
                    alt="GeetCare Logo"
                    width={100}
                    height={100}
                    className="w-18 h-18 lg:w-[90px] lg:h-[90px] transition-transform duration-300 group-hover:scale-110 object-contain"
                  />
                </div>
              </Link>
            )}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className={`flex items-baseline space-x-4 lg:space-x-8 ${
              showNavLogo ? 'justify-end pr-8' : 'justify-end pr-8'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {}}
                  className={`font-sans transition-all duration-300 px-2 lg:px-3 py-2 text-base lg:text-lg font-medium relative ${
                    isActivePath(item)
                      ? "text-emerald-600"
                      : "text-foreground/70 hover:text-emerald-600"
                  }`}
                >
                  {item.name}
                  {isActivePath(item) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-emerald-600 hover:bg-emerald-50/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-600 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 scale-[0.92] origin-top">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-sans block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                isActivePath(item)
                  ? "bg-emerald-50 text-emerald-600"
                  : "text-foreground/70 hover:bg-emerald-50/30 hover:text-emerald-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}