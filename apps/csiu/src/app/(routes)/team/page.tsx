import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Mail, Linkedin, Twitter, Users, Award, BookOpen, Heart } from "lucide-react"
import { getPageMetadata, getStructuredData } from "@/lib/metadata"
import { getCommitteeChairs, getFacultyAdvisors } from "@/lib/sanity"
import { PersonCard } from "@/components/cards/person-card"
import type { CommitteeChair, FacultyAdvisor } from "@/lib/types"
import Link from "next/link"

export const metadata = getPageMetadata("team")

export default async function TeamPage() {
  const chairs = await getCommitteeChairs()
  const advisors = await getFacultyAdvisors()

  // Sort chairs so that Co-Presidents appear first
  const sortedChairs = chairs.sort((a: CommitteeChair, b: CommitteeChair) => {
    // Check if either chair has the role "Co-President"
    const aIsCoPresident = a.role.toLowerCase().includes('co-president')
    const bIsCoPresident = b.role.toLowerCase().includes('co-president')

    if (aIsCoPresident && !bIsCoPresident) return -1
    if (!aIsCoPresident && bIsCoPresident) return 1
    return 0
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData("organization"))
        }}
      />
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="Our Team"
          subtitle="Meet the dedicated team behind Concerned Scientists @ IU (CSIU). Our diverse team brings together expertise from various disciplines to drive meaningful change in science policy."
          showLogo={false}
          showNewsletter={false}
          primaryButtonText="Get Involved"
          primaryButtonLink="/get-involved"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
          className="py-16"
          overlayImage="/images/overlays/overlay-about.JPG"
          showPageOutcrop={true}
        />

        {/* Leadership Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-science-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">AM</span>
                  </div>
                  <CardTitle className="text-xl">Alex Martinez</CardTitle>
                  <CardDescription className="text-science-blue font-medium">Co-President</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Graduate student in Environmental Science with a focus on climate policy. Alex leads our legislative
                    advocacy efforts and coordinates with state representatives on environmental legislation.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge variant="secondary">Climate Policy</Badge>
                    <Badge variant="secondary">Legislative Advocacy</Badge>
                    <Badge variant="secondary">Environmental Science</Badge>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-science-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">SP</span>
                  </div>
                  <CardTitle className="text-xl">Sarah Patel</CardTitle>
                  <CardDescription className="text-science-red font-medium">Co-President</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Undergraduate in Public Policy and Biology. Sarah specializes in science communication and leads our
                    education and outreach initiatives, making complex scientific concepts accessible to all.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge variant="secondary">Science Communication</Badge>
                    <Badge variant="secondary">Public Policy</Badge>
                    <Badge variant="secondary">Education</Badge>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Committee Chairs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Committee Chairs</h2>
            {sortedChairs && sortedChairs.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-8">
                {sortedChairs.map((chair: CommitteeChair) => (
                  <div key={chair._id} className="w-full md:w-96 lg:w-85">
                    <PersonCard person={chair} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Committee chair information will be available soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* Faculty Advisor */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Faculty Advisor</h2>
            <Card className="max-w-2xl mx-auto hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">DR</span>
                </div>
                <CardTitle className="text-2xl">Dr. Rebecca Foster</CardTitle>
                <CardDescription className="text-gray-700 font-medium text-lg">Faculty Advisor</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professor of Environmental Policy and Director of the Science Policy Institute at IU. Dr. Foster brings
                  over 15 years of experience in science policy research and has advised numerous student advocacy
                  organizations. Her research focuses on the intersection of scientific evidence and democratic
                  decision-making.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Badge variant="secondary">Environmental Policy</Badge>
                  <Badge variant="secondary">Science Policy Research</Badge>
                  <Badge variant="secondary">Democratic Governance</Badge>
                  <Badge variant="secondary">Student Mentorship</Badge>
                </div>
                <div className="flex justify-center space-x-4">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Research
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Spotlight */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Team Spotlight</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-science-blue rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-science-blue">Collaborative Leadership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Our co-president model ensures diverse perspectives and shared responsibility in guiding the
                    organization's mission and activities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-science-red rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-science-red">Expertise & Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Our team brings together students from diverse academic backgrounds, creating a rich foundation of
                    knowledge and skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-science-green rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-science-green">Passion for Change</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Every team member is driven by a shared commitment to ensuring science guides policy decisions for a
                    better future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join the Team CTA */}
        <section className="py-16 bg-science-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-heading text-3xl font-bold mb-6">Want to Join Our Leadership Team?</h3>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for passionate students to take on leadership roles and help guide our advocacy
              efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-science-blue hover:bg-gray-100" asChild>
                <Link href="/get-involved">Learn About Leadership Opportunities</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-science-blue bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Leadership Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
