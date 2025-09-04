import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/primitives/button"
import { NewsletterSignup } from "@/components/forms/newsletter-signup"
import { Instagram, Mail, Facebook, Linkedin, Slack } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-csiu-primary-dark text-csiu-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-csiu-white mb-6">Concerned Scientists @ IU</h3>
            <p className="text-csiu-white opacity-80 max-w-md mb-8 leading-relaxed">
              Dedicated to promoting scientific integrity and evidence-based decision making in policy and society.
              Join our community of science advocates working for a better future.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/CSIUB/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-csiu-white hover:text-csiu-accent-primary transition-colors duration-300"
                aria-label="Visit our Facebook page (opens in new tab)"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/csiu_bloomington/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-csiu-white hover:text-csiu-accent-primary transition-colors duration-300"
                aria-label="Visit our Instagram page (opens in new tab)"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-csiu-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-csiu-white hover:text-csiu-accent-primary transition-colors duration-300 text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-csiu-white hover:text-csiu-accent-primary transition-colors duration-300 text-lg">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-csiu-white hover:text-csiu-accent-primary transition-colors duration-300 text-lg">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-csiu-white hover:text-csiu-accent-primary transition-colors duration-300 text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold text-csiu-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <p className="text-csiu-white opacity-80">
                Indiana University<br />
                Bloomington, IN 47405
              </p>
              <p className="text-csiu-white opacity-80">
                <a href="mailto:info@csiub.org" className="hover:text-csiu-accent-primary transition-colors duration-300">
                  info@csiub.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-csiu-white opacity-20 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-csiu-white opacity-60 text-sm">© 2024 Concerned Scientists @ IU. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="text-csiu-white hover:text-csiu-accent-primary text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="text-csiu-white hover:text-csiu-accent-primary text-sm transition-colors duration-300">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
