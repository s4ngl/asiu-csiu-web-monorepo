import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Target, Heart, Users, Award, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { getCommitteeChairs, getFacultyAdvisors } from "@/lib/sanity"
import { PersonCard } from "@/components/cards/person-card"
import type { CommitteeChair, FacultyAdvisor } from "@/lib/types"
import { getPageMetadata, getStructuredData, getBreadcrumbData } from "@/lib/metadata"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/navigation/breadcrumb"

export const revalidate = 3600

export const metadata = getPageMetadata("about")

export default async function AboutPage() {
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
          __html: JSON.stringify(getStructuredData("about"))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbData("/about", "About"))
        }}
      />
      <LayoutWrapper>
        {/* Hero Section */}
        <HeroSection
          title="About Our Mission"
          subtitle="We are a student-led organization dedicated to bridging the gap between scientific research and public policy, ensuring that evidence-based decision making guides our future."
          showLogo={false}
          showNewsletter={false}
          primaryButtonText=""
          secondaryButtonText=""
          className="py-16"
          overlayImage="/images/overlays/overlay-about.JPG"
          showPageOutcrop={true}
          breadcrumbItems={[{ label: "About Our Mission" }]}
        />

        {/* Mission Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Concerned Scientists @ IU (CSIU) is dedicated to promoting scientific integrity and evidence-based
                  decision making in policy and society. We believe that science should be at the heart of policy decisions,
                  and we work to bridge the gap between scientific research and public policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-science-blue" />
                    <span>Scientific Integrity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe in the importance of rigorous, unbiased scientific research and the responsible
                    communication of scientific findings to the public and policymakers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-science-red" />
                    <span>Inclusive Advocacy</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We strive to amplify diverse voices in science and ensure that all communities have access to the
                    benefits of scientific progress and evidence-based policy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-science-green" />
                    <span>Collaborative Action</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We work collaboratively with students, faculty, researchers, and community members to create
                    meaningful change through collective action and shared expertise.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-6 w-6 text-gray-700" />
                    <span>Effective Communication</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We are committed to translating complex scientific concepts into accessible information that empowers
                    informed decision-making at all levels of society.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Committee Chairs */}
        <section className="py-16 bg-white">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Faculty Advisors</h2>
            {advisors && advisors.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-8">
                {advisors.map((advisor: CommitteeChair) => (
                  <div key={advisor._id} className="w-full md:w-96 lg:w-80">
                    <PersonCard person={advisor} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Faculty advisor information will be available soon.</p>
              </div>
            )}
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

        {/* Partnerships */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Partners</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-science-blue">Concerned Scientists @ IU</CardTitle>
                  <CardDescription>Parent Organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Our parent organization providing guidance, resources, and expertise in science policy advocacy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-science-red">IU Environmental Science</CardTitle>
                  <CardDescription>Academic Partnership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Collaborating on climate science communication and environmental policy research initiatives.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-science-green">Local Community Groups</CardTitle>
                  <CardDescription>Community Engagement</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Working with local organizations to ensure science-based solutions reach all community members.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Partner Logos */}
            <div className="text-center pt-6">
              <h3 className="text-gray-500 mb-8">Working with Leading Organizations</h3>
              <div className="flex flex-wrap justify-center items-center gap-x-7">
                <Image
                  src="/images/partners/partner-logosArtboard-1.png"
                  alt="Partner Organization 1"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-2.png"
                  alt="Partner Organization 2"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-3.png"
                  alt="Partner Organization 3"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-4.png"
                  alt="Partner Organization 4"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-5.png"
                  alt="Partner Organization 5"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-6.png"
                  alt="Partner Organization 6"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-7.png"
                  alt="Partner Organization 7"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
                <Image
                  src="/images/partners/partner-logosArtboard-10.png"
                  alt="Partner Organization 8"
                  width={120}
                  height={80}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  )
}
