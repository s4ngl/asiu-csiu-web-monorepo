"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/primitives/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for transparent/solid background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/news", label: "NEWS" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-csiu-primary-dark shadow-lg' : 'bg-transparent'
      }`} 
      style={{ height: '80px' }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Concerned Scientists @ IU Homepage">
            <div className="flex items-center justify-center bg-csiu-white px-4 py-2" style={{ maxHeight: '40px' }}>
              <span className="text-csiu-primary-dark font-bold text-lg tracking-wider">CSIU</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-csiu-white hover:text-csiu-accent-primary transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="btn-csiu-primary" asChild>
              <Link href="/get-involved" aria-label="Get involved with Concerned Scientists @ IU">
                GET INVOLVED
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-csiu-white hover:bg-transparent p-2"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <nav
          className={`md:hidden fixed inset-0 bg-csiu-primary-dark transition-all duration-500 ease-in-out ${
            isOpen
              ? 'opacity-100 visible z-[60]'
              : 'opacity-0 invisible pointer-events-none z-[60]'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
          id="mobile-menu"
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className={`flex justify-end p-6 transition-all duration-500 ease-out ${
              isOpen
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
            style={{
              transitionDelay: isOpen ? '100ms' : '0ms'
            }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-csiu-white hover:bg-transparent p-3"
                aria-label="Close navigation menu"
              >
                <X className="w-8 h-8" />
              </Button>
            </div>

            {/* Navigation items - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-12 px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-csiu-white text-4xl font-medium uppercase tracking-wider hover:text-csiu-accent-primary transition-all duration-300 ease-out ${
                    isOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms'
                  }}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${item.label} page`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile action button */}
              <div className={`mt-16 transition-all duration-500 ease-out ${
                isOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isOpen ? `${navItems.length * 100 + 400}ms` : '0ms'
              }}
              >
                <Button className="btn-csiu-primary text-lg px-8 py-4" asChild>
                  <Link href="/get-involved" aria-label="Get involved with Concerned Scientists @ IU">
                    GET INVOLVED
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
