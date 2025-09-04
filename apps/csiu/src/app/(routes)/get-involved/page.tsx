import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/composite/tabs"
import Link from "next/link"
import {
  Clock,
  MapPin,
  Users,
  ExternalLink,
  Instagram,
  Facebook,
  FileText,
  Megaphone,
  BookOpen,
  Award,
  Calendar,
  Slack,
  Settings,
  DollarSign,
  ArrowRight,
  Vote,
  Monitor,
  PenTool,
  CalendarDays,
} from "lucide-react"
import { getPageMetadata, getStructuredData } from "@/lib/metadata"
import { getEvents } from "@/lib/sanity"
import { EventCard } from "@/components/cards/event-card"
import type { Event } from "@/lib/types"
import { generateEventSchema, type EventSchemaData } from "@/lib/schema-generators"
import { Breadcrumb } from "@/components/navigation/breadcrumb"
import { parseLocalDate, createLocalMidnightISO } from "@/lib/utils"

export const revalidate = 3600

export const metadata = getPageMetadata("getInvolved")

export default async function GetInvolvedPage() {
  const events = await getEvents()

  // Sort events into upcoming, same-day, and past
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const upcomingEvents: Event[] = []
  const pastEvents: Event[] = []

  events.forEach((event: Event) => {
    // Parse date as local date to avoid timezone shifts
    const eventDate = parseLocalDate(event.date)
    const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())

    if (eventDateOnly >= today) {
      upcomingEvents.push(event)
    } else {
      pastEvents.push(event)
    }
  })

  // Sort upcoming events by date (earliest first) - timezone-safe
  upcomingEvents.sort((a, b) => {
    const dateA = parseLocalDate(a.date)
    const dateB = parseLocalDate(b.date)
    return dateA.getTime() - dateB.getTime()
  })

  // Sort past events by date (most recent first) - timezone-safe
  pastEvents.sort((a, b) => {
    const dateA = parseLocalDate(a.date)
    const dateB = parseLocalDate(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  // Generate event schema for featured upcoming events
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
          __html: JSON.stringify(getStructuredData("organization"))
        }}
      />
      {/* Event Schemas */}
      {featuredEventSchemas.map((schema, index) => (
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
          title="Get Involved"
          subtitle="Join Concerned Scientists @ IU (CSIU) and make a difference in science policy. Discover upcoming events, join working groups, and contribute to evidence-based advocacy efforts."
          showLogo={false}
          showNewsletter={false}
          primaryButtonText="Contact Us"
          primaryButtonLink="/contact"
          secondaryButtonText="Learn More"
          secondaryButtonLink="/about"
          className="py-16"
          overlayImage="/images/overlays/overlay-get-involved.JPG"
          showPageOutcrop={true}
          breadcrumbItems={[{ label: "Get Involved" }]}
        />

        {/* Content Tabs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past-events">Past Events</TabsTrigger>
                <TabsTrigger value="working-groups">Join Committees</TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Upcoming Events</h2>
                  <p className="text-gray-600">Join us for advocacy training, public forums, and community engagement opportunities</p>
                </div>

                {upcomingEvents.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-8">
                    {upcomingEvents.map((event: Event) => (
                      <div key={event._id} className="w-full md:w-96 lg:w-80">
                        <EventCard event={event} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No upcoming events scheduled at this time.</p>
                    <p className="text-gray-400 mt-2">Check back soon for new events!</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past-events" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Past Events</h2>
                  <p className="text-gray-600">Check out our recent advocacy training, public forums, and community engagement events</p>
                </div>

                {pastEvents.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-8">
                    {pastEvents.map((event: Event) => (
                      <div key={event._id} className="w-full md:w-96 lg:w-80">
                        <EventCard event={event} isPast={true} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No past events to display at this time.</p>
                    <p className="text-gray-400 mt-2">Check back soon for event updates!</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="working-groups" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">Join Our Committees</h2>
                  <p className="text-gray-600">Choose a specialized committee focused on different aspects of our advocacy work and contribute your skills</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-science-blue">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-science-blue clip-hexagon flex items-center justify-center">
                          <div className="h-10 w-11 flex items-center justify-center">
                            <Vote className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-science-blue">Policy & Government Relations</CardTitle>
                          <CardDescription>Direct engagement with policymakers and legislative processes</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Work directly with elected officials, track legislation, develop policy positions on key
                        science issues, and coordinate political action campaigns.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">12 active members</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Meets bi-weekly</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">3-5 hours/week commitment</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-science-blue">
                        <Slack className="h-4 w-4 mr-0.5" />
                        Join Slack
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-science-green">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-science-green clip-hexagon flex items-center justify-center">
                          <div className="h-10 w-11 flex items-center justify-center">
                            <Monitor className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-science-green">Digital Media & Communications</CardTitle>
                          <CardDescription>Digital presence, media relations, and content strategy</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Manage social media accounts, create digital content, develop communication strategies, and
                        build relationships with media outlets to amplify our advocacy messages.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">8 active members</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Meets weekly</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">2-4 hours/week commitment</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-science-green">
                        <Slack className="h-4 w-4 mr-0.5" />
                        Join Slack
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-science-red">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-science-red clip-hexagon flex items-center justify-center">
                          <div className="h-10 w-11 flex items-center justify-center">
                            <PenTool className="ml-0.5 mt-0.5 h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-science-red">Written Journalism</CardTitle>
                          <CardDescription>Content creation, editorial work, and written advocacy</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Write articles, op-eds, policy briefs, and other written content to advance science advocacy
                        and communicate complex issues to diverse audiences.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">6 active members</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Meets bi-weekly</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">2-3 hours/week commitment</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-science-red">
                        <Slack className="h-4 w-4 mr-0.5" />
                        Join Slack
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-600">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-purple-600 clip-hexagon flex items-center justify-center">
                          <div className="h-10 w-11 flex items-center justify-center">
                            <CalendarDays className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-purple-600">Event Planning</CardTitle>
                          <CardDescription>Planning and coordinating advocacy events and activities</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        Plan and execute advocacy training sessions, public forums, workshops, and community engagement
                        events throughout the year.
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">5 active members</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Meets weekly</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">2-3 hours/week commitment</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-purple-600">
                        <Slack className="h-4 w-4 mr-0.5" />
                        Join Slack
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-science-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our community of science advocates and help ensure that evidence-based decision making guides our
              future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100" asChild>
                <Link href="/news">Attend a Meeting</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
