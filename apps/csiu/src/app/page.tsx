import { Button } from "@/components/ui/primitives/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { LatestNewsCard } from "@/components/cards/latest-news-card"
import { EventCard } from "@/components/cards/event-card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Megaphone, BookOpen, Calendar, ExternalLink, Quote, TrendingUp, Award, Target } from "lucide-react"
import { getPageMetadata, getStructuredData, getBreadcrumbData } from "@/lib/metadata"
import { getPastEvents, getUpcomingEvents } from "@/lib/sanity"
import type { Event } from "@/lib/types"
import { generateEventSchema, type EventSchemaData } from "@/lib/schema-generators"
import { createLocalMidnightISO } from "@/lib/utils"

export const metadata = getPageMetadata("home")

export default async function HomePage() {
  // Temporarily handle case where Sanity data might not be available
  let pastEvents: Event[] = []
  let upcomingEvents: Event[] = []

  try {
    pastEvents = await getPastEvents()
    upcomingEvents = await getUpcomingEvents()
  } catch (error) {
    console.warn('Could not fetch events data:', error)
    // Use empty arrays as fallback
  }

  // Generate event schema for featured upcoming events on home page
  const featuredEventSchemas = upcomingEvents.slice(0, 3).map((event: Event) => {
    const eventSchema: EventSchemaData = {
      name: event.title,
      description: event.description || `Join Concerned Scientists @ IU for ${event.title}`,
      startDate: createLocalMidnightISO(event.date),
      location: {
        name: event.location || "Indiana University Bloomington",
        address: {
          addressLocality: "Bloomington",
          addressRegion: "IN",
          addressCountry: "US",
          postalCode: "47405"
        }
      },
      organizer: {
        name: "Concerned Scientists @ IU",
        url: "https://www.csiub.org"
      }
    }
    return generateEventSchema(eventSchema)
  })

  return (
    <>
      {/* Temporarily disable structured data and event schemas */}
      {/*
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("home"))
        }}
      />
      {featuredEventSchemas.map((schema: any, index: number) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("organization"))
        }}
      />
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="Science at the Heart of Policy"
          subtitle="Join Concerned Scientists @ IU (CSIU) in promoting scientific integrity and evidence-based decision making. We bridge the gap between research and policy to create a better future for all."
          primaryButtonText="GET INVOLVED"
          primaryButtonLink="/get-involved"
          secondaryButtonText="LEARN MORE"
          secondaryButtonLink="/about"
          fallbackImage="/images/overlays/overlay-home.JPG"
        />

        {/* Latest News & Activities */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="csiu-heading-md">Latest News & Activities</h2>
            </div>

            <div className="flex overflow-x-auto gap-8 pb-6 scrollbar-hide">
              {pastEvents && pastEvents.length > 0 ? (
                pastEvents.slice(0, 5).map((event: Event) => (
                  <LatestNewsCard key={event._id} event={event} />
                ))
              ) : (
                <div className="text-center text-gray-500 py-16 w-full">
                  <p className="csiu-body">No past events available yet.</p>
                </div>
              )}
            </div>

            {/* View All News Button */}
            <div className="text-center mt-12">
              <Link href="/news">
                <Button className="btn-csiu-secondary group">
                  VIEW ALL NEWS & ACTIVITIES
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-24 bg-csiu-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="csiu-heading-md mb-8">Our Mission & Values</h2>
              <p className="csiu-body-lg max-w-4xl mx-auto">
                At Concerned Scientists @ IU (CSIU), we believe that science should be at the heart of policy decisions.
                Our mission is to promote scientific integrity and evidence-based decision making in policy and society.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Scientific Integrity */}
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-csiu-accent-primary flex items-center justify-center mb-8">
                  <Target className="w-10 h-10 text-csiu-white" />
                </div>
                <h3 className="csiu-heading-sm mb-6">Scientific Integrity</h3>
                <p className="csiu-body">
                  We advocate for policies that uphold the highest standards of scientific rigor and transparency.
                </p>
              </div>

              {/* Evidence-Based Policy */}
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-csiu-accent-primary flex items-center justify-center mb-8">
                  <BookOpen className="w-10 h-10 text-csiu-white" />
                </div>
                <h3 className="csiu-heading-sm mb-6">Evidence-Based Policy</h3>
                <p className="csiu-body">
                  We work to ensure that policy decisions are grounded in the best available scientific evidence.
                </p>
              </div>

              {/* Science Communication */}
              <div className="text-center">
                <div className="mx-auto w-20 h-20 bg-csiu-accent-primary flex items-center justify-center mb-8">
                  <Megaphone className="w-10 h-10 text-csiu-white" />
                </div>
                <h3 className="csiu-heading-sm mb-6">Science Communication</h3>
                <p className="csiu-body">
                  We bridge the gap between scientific research and public understanding through effective communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-24 bg-csiu-primary-dark text-csiu-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="csiu-heading-md text-csiu-white mb-8">Ready to Make a Difference?</h2>
            <p className="csiu-body-lg text-csiu-white mb-12 opacity-90">
              Join Concerned Scientists @ IU (CSIU) in our mission to promote scientific integrity and evidence-based policy making.
              Your voice matters in shaping the future of science policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/get-involved">
                <Button className="btn-csiu-primary">
                  GET INVOLVED TODAY
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="btn-csiu-secondary border-csiu-white text-csiu-white hover:bg-csiu-white hover:text-csiu-primary-dark">
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
