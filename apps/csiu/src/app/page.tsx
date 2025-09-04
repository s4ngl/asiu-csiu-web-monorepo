import { Button } from "@/components/ui/primitives/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { LatestNewsCard } from "@/components/cards/latest-news-card"
import { EventCard } from "@/components/cards/event-card"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { ScrollAnimation } from "@/components/hooks/useScrollAnimation"
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
          title="We promote the scientific enterprise, in Indiana and across the globe"
          subtitle="Providing the latest news on science advocacy in Indiana. Join Concerned Scientists @ IU (CSIU) and Advocates for Science @ IU (ASIU) in promoting scientific integrity and evidence-based decision making."
          primaryButtonText="TAKE ACTION"
          primaryButtonLink="/how-much-time-do-you-have"
          secondaryButtonText="LEARN MORE"
          secondaryButtonLink="/what-we-do"
          fallbackImage="/images/overlays/overlay-home.JPG"
        />

        {/* Image Gallery Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation className="text-center mb-16">
              <h2 className="csiu-heading-md mb-8">Science Advocacy in Action</h2>
              <p className="csiu-body-lg max-w-3xl mx-auto">
                Explore moments from our ongoing work to promote scientific integrity and evidence-based policy making. 
                From community forums to legislative meetings, see how we're making a difference.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <ImageGallery />
            </ScrollAnimation>
          </div>
        </section>

        {/* News Highlights Section */}
        <section className="py-24 bg-csiu-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="csiu-heading-md">Latest News & Activities</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Stand Up for Science Rally */}
              <div className="bg-white border border-csiu-gray-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Megaphone className="w-6 h-6 text-csiu-accent-primary mr-3" />
                  <span className="text-sm font-medium text-csiu-accent-primary uppercase tracking-wider">Event</span>
                </div>
                <h3 className="csiu-heading-xs mb-3">Stand Up for Science Rally</h3>
                <p className="csiu-body mb-4">
                  Co-hosted by Concerned Scientists at Indiana University (CSIU) and Advocates for Science at IU (ASIU). 
                  Join us in advocating for scientific integrity and evidence-based policy.
                </p>
                <Link href="/event-calendar" className="text-csiu-accent-primary hover:underline csiu-body font-medium">
                  Learn More →
                </Link>
              </div>

              {/* RFK Jr. Opposition Letter */}
              <div className="bg-white border border-csiu-gray-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="w-6 h-6 text-csiu-accent-primary mr-3" />
                  <span className="text-sm font-medium text-csiu-accent-primary uppercase tracking-wider">Letter</span>
                </div>
                <h3 className="csiu-heading-xs mb-3">Opposition to RFK Jr. Nomination</h3>
                <p className="csiu-body mb-4">
                  Letter to Senators Todd Young and Jim Banks expressing strong opposition to the nomination of 
                  Robert F. Kennedy, Jr. as Secretary of Health and Human Services.
                </p>
                <Link href="/news" className="text-csiu-accent-primary hover:underline csiu-body font-medium">
                  Read Letter →
                </Link>
              </div>

              {/* IU Leadership Letter */}
              <div className="bg-white border border-csiu-gray-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-csiu-accent-primary mr-3" />
                  <span className="text-sm font-medium text-csiu-accent-primary uppercase tracking-wider">Advocacy</span>
                </div>
                <h3 className="csiu-heading-xs mb-3">Letter to IU Leadership</h3>
                <p className="csiu-body mb-4">
                  Letter to IU President Pamela Whitten and Provost Rahul Srivastav urging public support 
                  for the scientific community and evidence-based decision making.
                </p>
                <Link href="/news" className="text-csiu-accent-primary hover:underline csiu-body font-medium">
                  View Details →
                </Link>
              </div>

              {/* Higher Education Changes */}
              <div className="bg-white border border-csiu-gray-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-6 h-6 text-csiu-accent-primary mr-3" />
                  <span className="text-sm font-medium text-csiu-accent-primary uppercase tracking-wider">Policy</span>
                </div>
                <h3 className="csiu-heading-xs mb-3">Higher Education Policy</h3>
                <p className="csiu-body mb-4">
                  Open letter to Indiana legislators regarding proposed higher education changes that could 
                  impact scientific research and academic freedom.
                </p>
                <Link href="/news" className="text-csiu-accent-primary hover:underline csiu-body font-medium">
                  Read More →
                </Link>
              </div>

              {/* Abortion Access Letter */}
              <div className="bg-white border border-csiu-gray-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-csiu-accent-primary mr-3" />
                  <span className="text-sm font-medium text-csiu-accent-primary uppercase tracking-wider">Healthcare</span>
                </div>
                <h3 className="csiu-heading-xs mb-3">Healthcare Access Advocacy</h3>
                <p className="csiu-body mb-4">
                  Letter addressing proposed restrictions on abortion access, emphasizing the importance of 
                  evidence-based healthcare policy.
                </p>
                <Link href="/news" className="text-csiu-accent-primary hover:underline csiu-body font-medium">
                  View Statement →
                </Link>
              </div>

              {/* Climate Action */}
              <div className="bg-white border border-csiu-gray-light rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-csiu-accent-primary mr-3" />
                  <span className="text-sm font-medium text-csiu-accent-primary uppercase tracking-wider">Climate</span>
                </div>
                <h3 className="csiu-heading-xs mb-3">Climate Action Initiative</h3>
                <p className="csiu-body mb-4">
                  Ongoing efforts to promote climate science and advocate for evidence-based environmental 
                  policies at the university and state level.
                </p>
                <Link href="/news" className="text-csiu-accent-primary hover:underline csiu-body font-medium">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-csiu-gray-light rounded-lg">
                <h3 className="csiu-heading-sm mb-4">About</h3>
                <p className="csiu-body mb-6">
                  Learn more about our mission and the coalition of scientists working for evidence-based policy.
                </p>
                <Button className="btn-csiu-secondary" asChild>
                  <Link href="/what-we-do">LEARN MORE</Link>
                </Button>
              </div>

              <div className="text-center p-8 bg-csiu-gray-light rounded-lg">
                <h3 className="csiu-heading-sm mb-4">Take Action</h3>
                <p className="csiu-body mb-6">
                  Volunteer your time and make a difference in science advocacy and policy making.
                </p>
                <Button className="btn-csiu-primary" asChild>
                  <Link href="/how-much-time-do-you-have">GET INVOLVED</Link>
                </Button>
              </div>

              <div className="text-center p-8 bg-csiu-gray-light rounded-lg">
                <h3 className="csiu-heading-sm mb-4">Join a Working Group</h3>
                <p className="csiu-body mb-6">
                  Join one of our four working groups and contribute your expertise to our mission.
                </p>
                <Button className="btn-csiu-secondary" asChild>
                  <Link href="/working-groups">JOIN NOW</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Events Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="csiu-heading-md">Recent Events & Activities</h2>
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
            <ScrollAnimation className="text-center mb-20">
              <h2 className="csiu-heading-md mb-8">Our Mission & Core Aims</h2>
              <p className="csiu-body-lg max-w-4xl mx-auto">
                Concerned Scientists at Indiana University, Bloomington is a coalition of scientists and their supporters 
                formed in response to attacks on science. Our mission is to strengthen the essential role of science and 
                evidence-based decision-making at all levels.
              </p>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Accurate Representation */}
              <ScrollAnimation delay={100}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-csiu-accent-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-csiu-white" />
                  </div>
                  <div>
                    <h3 className="csiu-heading-sm mb-4">Promote Accurate Representation</h3>
                    <p className="csiu-body">
                      We work to promote the accurate representation of science in the media, in education, 
                      and in the design of legislation.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Public Engagement */}
              <ScrollAnimation delay={200}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-csiu-accent-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-csiu-white" />
                  </div>
                  <div>
                    <h3 className="csiu-heading-sm mb-4">Engage with the Public</h3>
                    <p className="csiu-body">
                      We communicate science to the public, especially as it relates to core issues 
                      influenced by public policy.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Scientist Participation */}
              <ScrollAnimation delay={300}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-csiu-accent-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-8 h-8 text-csiu-white" />
                  </div>
                  <div>
                    <h3 className="csiu-heading-sm mb-4">Promote Scientist Participation</h3>
                    <p className="csiu-body">
                      We encourage and facilitate the participation of scientists in policy-making processes 
                      at all levels of government.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Federal Funding */}
              <ScrollAnimation delay={400}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-csiu-accent-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-csiu-white" />
                  </div>
                  <div>
                    <h3 className="csiu-heading-sm mb-4">Support Federal Funding</h3>
                    <p className="csiu-body">
                      We advocate for continued federal funding for independent scientific research and 
                      defend research from politically motivated attacks.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="py-24 bg-csiu-primary-dark text-csiu-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="csiu-heading-md text-csiu-white mb-8">Ready to Strengthen Science and Policy?</h2>
            <p className="csiu-body-lg text-csiu-white mb-12 opacity-90">
              Join our coalition of scientists and supporters working to promote scientific integrity and evidence-based 
              decision making. From 5-second actions to long-term commitment, find the right way to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/how-much-time-do-you-have">
                <Button className="btn-csiu-primary">
                  TAKE ACTION TODAY
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/working-groups">
                <Button className="btn-csiu-secondary border-csiu-white text-csiu-white hover:bg-csiu-white hover:text-csiu-primary-dark">
                  JOIN A WORKING GROUP
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
