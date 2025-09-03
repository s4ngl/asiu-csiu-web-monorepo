"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/primitives/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-gray-900 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Navigation */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2" aria-label="Concerned Scientists @ IU Homepage">
                <div className="absolute -top-8 w-20 h-24 bg-white flex flex-col items-center justify-start pt-1">
                  <div className="w-18 h-22 bg-science-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs text-center leading-tight">CSIU</span>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white hover:text-red transition-colors duration-200 font-medium"
                    aria-label={`Navigate to ${item.label} page`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button size="sm" variant="outline" asChild>
                  <Link href="/get-involved" aria-label="Get involved with Concerned Scientists @ IU">Get Involved</Link>
                </Button>
                <Button size="sm" className="bg-science-red text-white" asChild>
                  <a
                    href="https://www.facebook.com/CSIUB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Concerned Scientists @ IU Facebook page (opens in new tab)"
                  >
                    Facebook
                  </a>
                </Button>
              </nav>
            </div>

            {/* Mobile buttons and menu */}
            <div className="md:hidden flex items-center space-x-2">
              <Button size="sm" className="bg-science-blue text-white text-xs px-2 py-1" asChild>
                <Link href="/get-involved" aria-label="Get involved">Get Involved</Link>
              </Button>
              <Button size="sm" className="bg-science-red text-white text-xs px-2 py-1" asChild>
                <a
                  href="https://www.facebook.com/CSIUB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate (opens in new tab)"
                >
                  Facebook
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white ml-2 relative"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-3 h-5">
                  <Menu
                    className={`-left-0.5 top-0.5 absolute inset-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 rotate-90 scale-150' : 'opacity-100 rotate-0 scale-175'
                      }`}
                  />
                  <X
                    className={`-left-0.5 top-0.5 absolute inset-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 rotate-0 scale-150' : 'opacity-0 -rotate-90 scale-175'
                      }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden fixed inset-0 bg-gray-900 transition-all duration-500 ease-in-out ${isOpen
            ? 'opacity-100 visible z-[60]'
            : 'opacity-0 invisible pointer-events-none z-[60]'
            }`}
          role="navigation"
          aria-label="Mobile navigation"
          id="mobile-menu"
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <div className={`flex justify-end p-4 transition-all duration-500 ease-out ${isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8'
              }`}
              style={{
                transitionDelay: isOpen ? '100ms' : '0ms'
              }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white"
                aria-label="Close navigation menu"
              >
                <X className="scale-150" />
              </Button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white text-2xl hover:text-gray-500 font-medium hover:text-science-blue transition-all duration-200 ease-out ${isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                    }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                  }}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${item.label} page`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile action buttons */}
              <div className={`flex flex-col space-y-4 mt-8 transition-all duration-500 ease-out ${isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isOpen ? `${navItems.length * 100 + 200}ms` : '0ms'
                }}
              >
                <Button size="lg" variant="outline" asChild>
                  <Link href="/get-involved" aria-label="Get involved with Concerned Scientists @ IU">Get Involved</Link>
                </Button>
                <Button size="lg" className="bg-science-red text-white" asChild>
                  <a
                    href="https://www.facebook.com/CSIUB/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Concerned Scientists @ IU Facebook page (opens in new tab)"
                  >
                    Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
