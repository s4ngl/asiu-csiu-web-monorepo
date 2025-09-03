import Link from "next/link"
import { Button } from "@/components/ui/primitives/button"
import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { Home, ArrowLeft, Search } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "Sorry, the page you're looking for doesn't exist. Explore our science policy advocacy content, events, and opportunities to get involved with Advocates for Science @ IU.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. You might want to check out our latest news,
            upcoming events, or opportunities to get involved with Concerned Scientists @ IU.
          </p>

          <div className="space-y-4 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/">
                <Button className="w-full" variant="default">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button className="w-full" variant="outline">
                  <Search className="mr-2 h-4 w-4" />
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <Link href="/about" className="text-science-blue hover:underline">
                About Our Mission
              </Link>
              <Link href="/news" className="text-science-blue hover:underline">
                Latest News
              </Link>
              <Link href="/team" className="text-science-blue hover:underline">
                Our Team
              </Link>
              <Link href="/contact" className="text-science-blue hover:underline">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm text-gray-500">
              If you believe this is an error, please{" "}
              <Link href="/contact" className="text-science-blue hover:underline">
                contact our team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* 404 Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Page Not Found",
            "description": "The requested page could not be found on Concerned Scientists @ IU website",
            "url": "https://www.csiub.org/404",
            "mainEntity": {
              "@type": "Organization",
              "name": "Concerned Scientists @ IU",
              "url": "https://www.csiub.org"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.csiub.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </LayoutWrapper>
  )
}
