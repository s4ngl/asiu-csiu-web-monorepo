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
  const pastEvents = await getPastEvents()
  const upcomingEvents = await getUpcomingEvents()

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("home"))
        }}
      />
      {/* Featured Event Schemas */}
      {featuredEventSchemas.map((schema: any, index: number) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="Science at the Heart of Policy"
          subtitle="Join Concerned Scientists @ IU (CSIU) in promoting scientific integrity and evidence-based decision making. We bridge the gap between research and policy to create a better future for all."
          showLogo={true}
          showNewsletter={true}
          primaryButtonText="Get Involved"
          primaryButtonLink="/get-involved"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/about"
          className="py-16"
          overlayImage="/images/overlays/overlay-home.JPG"
          showPageOutcrop={true}
        />

        {/* Latest News & Activities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold">Latest News & Activities</h2>
              {/* <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest advocacy efforts and community initiatives.
              </p> */}
            </div>

            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {pastEvents && pastEvents.length > 0 ? (
                pastEvents.slice(0, 5).map((event: Event) => (
                  <LatestNewsCard key={event._id} event={event} />
                ))
              ) : (
                <div className="text-center text-gray-500 py-12 w-full">
                  <p>No past events available yet.</p>
                </div>
              )}
            </div>

            {/* View All News Button */}
            <div className="text-center mt-8">
              <Link href="/news">
                <Button variant="outline" className="group">
                  View All News & Activities
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Concerned Scientists @ IU (CSIU), we believe that science should be at the heart of policy decisions.
                Our mission is to promote scientific integrity and evidence-based decision making in policy and society.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Scientific Integrity */}
              <Card className="text-center p-6 border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Scientific Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We advocate for policies that uphold the highest standards of scientific rigor and transparency.
                  </p>
                </CardContent>
              </Card>

              {/* Evidence-Based Policy */}
              <Card className="text-center p-6 border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Evidence-Based Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We work to ensure that policy decisions are grounded in the best available scientific evidence.
                  </p>
                </CardContent>
              </Card>

              {/* Science Communication */}
              <Card className="text-center p-6 border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Megaphone className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Science Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We bridge the gap between scientific research and public understanding through effective communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join Concerned Scientists @ IU (CSIU) in our mission to promote scientific integrity and evidence-based policy making.
              Your voice matters in shaping the future of science policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Involved Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
