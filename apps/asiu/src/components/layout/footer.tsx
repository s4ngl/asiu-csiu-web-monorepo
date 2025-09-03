import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/primitives/button"
import { NewsletterSignup } from "@/components/forms/newsletter-signup"
import { Instagram, Mail, Facebook, Linkedin, Slack } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/icons/logo.svg"
                  alt="ASIU Logo"
                  width={32}
                  height={32}
                  className="w-full h-full relative z-10 brightness-0 invert"
                  priority
                  fetchPriority="high"
                />
              </div>
              <h3 className="font-heading text-xl font-bold">Advocates for Science @ IU</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based
              decision making in policy and society.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/advocates-for-science-at-iu/"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/asiu.indiana/"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61573877797290"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://join.slack.com/t/advocatesforscienceiu/shared_invite/zt-3bwj6o6j7-LW6FhQAr1lFWHkvT4pxnFA"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Slack"
              >
                <Slack className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:advocatesforscience.in@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-gray-300 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div suppressHydrationWarning>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for updates on advocacy efforts and events.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">© 2024 Advocates for Science @ IU. All rights reserved.</p>
            <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accessibility Statement
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button size="sm" className="bg-science-red" asChild>
              <a href="https://www.gofundme.com/f/support-advocates-for-science-iu/donate?source=btn_donate" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
