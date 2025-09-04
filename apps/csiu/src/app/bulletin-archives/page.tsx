import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Archive, Calendar, ArrowLeft } from "lucide-react"

export const metadata = getPageMetadata("bulletin-archives")

export default function BulletinArchivesPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Weekly News Bulletin Archives"
        subtitle="Access past bulletins and track the development of science policy issues over time"
        fallbackImage="/images/overlays/overlay-news.JPG"
      />

      {/* Placeholder Content */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Archive className="w-24 h-24 text-csiu-accent-primary mx-auto mb-8" />
            <h2 className="csiu-heading-md mb-8">Archive Coming Soon</h2>
            <p className="csiu-body-lg mb-8">
              We're organizing our complete archive of weekly news bulletins to provide you with 
              comprehensive access to historical science policy developments and advocacy opportunities.
            </p>
            <p className="csiu-body text-gray-600 mb-8">
              This archive will allow you to track trends in science policy, research funding decisions, 
              and advocacy efforts over time.
            </p>
          </div>

          {/* Current Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-csiu-gray-light rounded-lg p-8">
              <Calendar className="w-12 h-12 text-csiu-accent-primary mx-auto mb-6" />
              <h3 className="csiu-heading-sm mb-4">Latest Bulletin</h3>
              <p className="csiu-body mb-6">
                Read our most recent weekly news bulletin with current developments 
                in science policy and advocacy opportunities.
              </p>
              <Button className="btn-csiu-primary" asChild>
                <Link href="/weekly-news-bulletins">
                  VIEW LATEST BULLETIN
                </Link>
              </Button>
            </div>

            <div className="bg-csiu-gray-light rounded-lg p-8">
              <Archive className="w-12 h-12 text-csiu-accent-primary mx-auto mb-6" />
              <h3 className="csiu-heading-sm mb-4">Historical News</h3>
              <p className="csiu-body mb-6">
                Browse our comprehensive news archive for past letters, 
                announcements, and advocacy actions.
              </p>
              <Button className="btn-csiu-secondary" asChild>
                <Link href="/news">
                  VIEW NEWS ARCHIVE
                </Link>
              </Button>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="space-y-6">
            <Button variant="outline" asChild>
              <Link href="/weekly-news-bulletins">
                <ArrowLeft className="w-5 h-5 mr-2" />
                BACK TO CURRENT BULLETIN
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}