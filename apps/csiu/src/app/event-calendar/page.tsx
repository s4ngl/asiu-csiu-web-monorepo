import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Calendar, Plus, Bell, ArrowUp } from "lucide-react"

export const metadata = getPageMetadata("event-calendar")

export default function EventCalendarPage() {
  return (
    <LayoutWrapper id="top">
      {/* Hero Section */}
      <HeroSection
        title="Event Calendar"
        subtitle="Stay informed about upcoming science advocacy events and opportunities"
        fallbackImage="/images/overlays/overlay-get-involved.JPG"
      />

      {/* Placeholder Content */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Calendar className="w-24 h-24 text-csiu-accent-primary mx-auto mb-8" />
            <h2 className="csiu-heading-md mb-8">Events Calendar Coming Soon</h2>
            <p className="csiu-body-lg mb-8">
              We're working on a comprehensive events calendar to help you stay informed about
              upcoming science advocacy opportunities, workshops, forums, and community events.
            </p>
            <p className="csiu-body text-gray-600">
              In the meantime, you can stay updated through our other channels and submit your own events
              for consideration.
            </p>
          </div>

          {/* Current Actions */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-csiu-gray-light rounded-lg p-8">
              <Plus className="w-12 h-12 text-csiu-accent-primary mx-auto mb-6" />
              <h3 className="csiu-heading-sm mb-4">Submit an Event</h3>
              <p className="csiu-body mb-6">
                Have an event related to science advocacy, policy, or education?
                Submit it for inclusion in our upcoming calendar.
              </p>
              <Button className="btn-csiu-primary" asChild>
                <Link href="/submit-news-and-events">
                  SUBMIT EVENT
                </Link>
              </Button>
            </div>

            <div className="bg-csiu-gray-light rounded-lg p-8">
              <Bell className="w-12 h-12 text-csiu-accent-primary mx-auto mb-6" />
              <h3 className="csiu-heading-sm mb-4">Stay Notified</h3>
              <p className="csiu-body mb-6">
                Get updates about new events and opportunities through our
                newsletter and social media channels.
              </p>
              <Button className="btn-csiu-secondary" asChild>
                <a href="mailto:csatiub@gmail.com?subject=Event Updates Subscription">
                  GET UPDATES
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="csiu-heading-sm">Explore Our Current Activities</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/news">
                  VIEW RECENT NEWS
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/working-groups">
                  JOIN A WORKING GROUP
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/how-much-time-do-you-have">
                  FIND WAYS TO HELP
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Back to Top */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="#top"
            className="inline-flex items-center px-4 py-2 text-csiu-accent-primary hover:text-csiu-primary-dark transition-colors"
          >
            <ArrowUp className="w-5 h-5 mr-2" />
            BACK TO TOP
          </a>
        </div>
      </section>
    </LayoutWrapper>
  )
}
