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
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-science-blue opacity-20">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-lg text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. But don't worry - there's plenty of ways to get involved in science policy advocacy!
            </p>
          </div>

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
            "name": "404 - Page Not Found",
            "description": "The requested page could not be found on Advocates for Science @ IU website",
            "url": "https://www.advocatesforscienceatiu.org/404",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Advocates for Science @ IU",
              "url": "https://www.advocatesforscienceatiu.org"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Advocates for Science @ IU",
              "url": "https://www.advocatesforscienceatiu.org"
            }
          })
        }}
      />
    </LayoutWrapper>
  )
}