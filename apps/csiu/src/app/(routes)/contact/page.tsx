"use client"

import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Button } from "@/components/ui/primitives/button"
import { Mail, MapPin, Users, Megaphone, GraduationCap, MessageSquare, Calendar, Twitter, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const workingGroups = [
    {
      name: "Legislative Advocacy",
      icon: Megaphone,
      description: "Identifying and documenting proposals for coordinated action on key legislative issues",
      contacts: ["pmadetzk@indiana.edu", "vigdor@indiana.edu"]
    },
    {
      name: "Education and Outreach",
      icon: GraduationCap,
      description: "Outreach to community organizations, schools, and campus student groups",
      contacts: ["tlonderg@indiana.edu", "juhbauer@iu.edu"]
    },
    {
      name: "Communications",
      icon: MessageSquare,
      description: "External communications and media support for all CSIU activities",
      contacts: ["irnewton@indiana.edu", "mbdelval@iu.edu"]
    },
    {
      name: "Events",
      icon: Calendar,
      description: "Planning and coordinating both high-frequency and special events",
      contacts: ["kellerab@indiana.edu", "hamburg@indiana.edu"]
    }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with Concerned Scientists @ IU and connect with our working groups"
        fallbackImage="/images/overlays/overlay-contact.JPG"
      />

      {/* General Contact Information */}
      <section className="py-16 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="csiu-heading-md mb-8">General Contact</h2>
            <p className="csiu-body-lg mb-8">
              While our members are scattered across the campus of Indiana University, we are open to 
              in-person meetings by appointment via email.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-csiu-gray-light">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-csiu-accent-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="csiu-body-lg mb-2">
                  <a href="mailto:csatiub@gmail.com" className="text-csiu-accent-primary hover:underline">
                    csatiub@gmail.com
                  </a>
                </p>
                <p className="csiu-body text-gray-600">
                  General inquiries and meeting requests
                </p>
              </CardContent>
            </Card>

            <Card className="border-csiu-gray-light">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-csiu-accent-primary" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="csiu-body-lg mb-2">Indiana University</p>
                <p className="csiu-body mb-4">Bloomington, IN 47405</p>
                <p className="csiu-body text-gray-600">
                  Campus-wide organization with members across departments
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div className="text-center mb-16">
            <h3 className="csiu-heading-sm mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://twitter.com/ConcernedScIU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-csiu-accent-primary hover:text-csiu-primary-dark transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="csiu-body">@ConcernedScIU</span>
              </a>
              <a
                href="https://facebook.com/ConcernedScIU"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-csiu-accent-primary hover:text-csiu-primary-dark transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="csiu-body">@ConcernedScIU</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Working Groups Contact */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="csiu-heading-md mb-8">Working Group Contacts</h2>
            <p className="csiu-body-lg">
              Each of our working groups has dedicated contacts for specific areas of our mission. 
              Reach out directly to get involved with the work that interests you most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workingGroups.map((group) => {
              const IconComponent = group.icon
              return (
                <Card key={group.name} className="border-csiu-gray-light hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-csiu-accent-primary rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="csiu-heading-sm">{group.name}</span>
                    </CardTitle>
                    <CardDescription className="csiu-body">
                      {group.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="csiu-heading-xs">Contact:</h4>
                      {group.contacts.map((email, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-csiu-accent-primary" />
                          <a 
                            href={`mailto:${email}`}
                            className="csiu-body text-csiu-accent-primary hover:underline"
                          >
                            {email}
                          </a>
                        </div>
                      ))}
                      <div className="pt-4">
                        <Button className="btn-csiu-secondary text-sm" asChild>
                          <a href={`mailto:${group.contacts[0]}?subject=Interest in ${group.name} Working Group`}>
                            GET INVOLVED
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="csiu-heading-md mb-8">Ready to Get Involved?</h2>
          <p className="csiu-body-lg mb-12">
            Whether you're interested in advocacy, education, communication, or events, there's a place 
            for you in our community of scientists and supporters working for evidence-based policy.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-csiu-gray-light rounded-lg p-6">
              <Users className="w-12 h-12 text-csiu-accent-primary mx-auto mb-4" />
              <h3 className="csiu-heading-sm mb-4">Join a Working Group</h3>
              <p className="csiu-body mb-6">
                Connect directly with one of our four working groups based on your interests and expertise.
              </p>
              <Button className="btn-csiu-secondary" asChild>
                <Link href="/working-groups">
                  EXPLORE GROUPS
                </Link>
              </Button>
            </div>

            <div className="bg-csiu-gray-light rounded-lg p-6">
              <Mail className="w-12 h-12 text-csiu-accent-primary mx-auto mb-4" />
              <h3 className="csiu-heading-sm mb-4">General Inquiry</h3>
              <p className="csiu-body mb-6">
                Have questions or want to learn more about our organization and mission?
              </p>
              <Button className="btn-csiu-primary" asChild>
                <a href="mailto:csatiub@gmail.com?subject=General Inquiry">
                  CONTACT US
                </a>
              </Button>
            </div>

            <div className="bg-csiu-gray-light rounded-lg p-6">
              <Calendar className="w-12 h-12 text-csiu-accent-primary mx-auto mb-4" />
              <h3 className="csiu-heading-sm mb-4">Schedule a Meeting</h3>
              <p className="csiu-body mb-6">
                Interested in an in-person meeting? We're happy to arrange a time to chat.
              </p>
              <Button className="btn-csiu-secondary" asChild>
                <a href="mailto:csatiub@gmail.com?subject=Meeting Request">
                  SCHEDULE MEETING
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
