import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Globe, MapPin, MessageCircle, ExternalLink, Users, Calendar } from "lucide-react"

export const metadata = getPageMetadata("weekly-news-bulletins")

export default function WeeklyNewsBulletinsPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Weekly News Bulletins"
        subtitle="Stay informed with the latest developments in science policy and advocacy"
        fallbackImage="/images/overlays/overlay-news.JPG"
      />

      {/* Latest Bulletin */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="csiu-heading-md mb-4">Latest Bulletin</h2>
            <p className="csiu-body-lg text-gray-600">July 28, 2025</p>
            <p className="csiu-body text-gray-600">Compiled by CSIU members Emma Broach and Elena Krueper</p>
          </div>

          <div className="space-y-12">
            {/* Global News Section */}
            <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="csiu-heading-sm text-blue-800">Global News</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">EPA Greenhouse Gas Regulations</h4>
                  <p className="csiu-body mb-4">
                    The Environmental Protection Agency announced a comprehensive plan to end greenhouse gas regulations 
                    that have been central to climate policy efforts. This development has significant implications for 
                    environmental science and climate research funding.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">UN Court Ruling on Environmental Rights</h4>
                  <p className="csiu-body mb-4">
                    A United Nations court has issued a landmark ruling recognizing a "clean, healthy and sustainable environment" 
                    as a fundamental human right. This decision may influence environmental policy and scientific research priorities 
                    globally.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">U.S. Withdrawal from UNESCO</h4>
                  <p className="csiu-body mb-4">
                    The United States has announced its withdrawal from UNESCO, raising concerns about international 
                    scientific collaboration and the role of science in diplomacy and global education initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Regional News Section */}
            <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-green-600 mr-4" />
                <h3 className="csiu-heading-sm text-green-800">Regional News</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">New Nature Preserve in Monroe County</h4>
                  <p className="csiu-body mb-4">
                    Monroe County has established a new nature preserve, highlighting local conservation efforts and 
                    providing new opportunities for ecological research and environmental education in the region.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Indiana Plant Pollution Regulation Extensions</h4>
                  <p className="csiu-body mb-4">
                    Two Indiana manufacturing plants have received extensions for pollution regulation compliance, 
                    raising questions about environmental monitoring and the enforcement of clean air standards 
                    in the state.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Advanced Nuclear Energy Legislation</h4>
                  <p className="csiu-body mb-4">
                    Indiana legislators are advancing bills to develop advanced nuclear energy infrastructure in the state, 
                    representing a significant investment in clean energy technology and nuclear science research.
                  </p>
                </div>
              </div>
            </div>

            {/* Opinion & Analysis Section */}
            <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-8 h-8 text-purple-600 mr-4" />
                <h3 className="csiu-heading-sm text-purple-800">Opinion & Analysis</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Defense of NOAA from Political Attacks</h4>
                  <p className="csiu-body mb-4">
                    Scientists and policy experts are increasingly vocal about defending the National Oceanic and 
                    Atmospheric Administration (NOAA) from political interference, emphasizing the critical role 
                    of independent scientific agencies in weather forecasting and climate research.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Public Trust in Scientific Institutions</h4>
                  <p className="csiu-body mb-4">
                    Recent analyses examine the ongoing challenges facing public trust in scientific institutions 
                    and explore strategies for rebuilding confidence in evidence-based research and policy making.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Role of DEI Initiatives in Science</h4>
                  <p className="csiu-body mb-4">
                    Discussions continue about the role of diversity, equity, and inclusion (DEI) initiatives in 
                    scientific research, with emphasis on how diverse perspectives strengthen scientific inquiry 
                    and innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Take Action & Resources Section */}
            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-orange-600 mr-4" />
                <h3 className="csiu-heading-sm text-orange-800">Take Action & Resources for Activists</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Support Science through Advocacy</h4>
                  <p className="csiu-body mb-4">
                    Current opportunities for science advocacy include contacting representatives about research funding, 
                    participating in local science policy discussions, and joining advocacy networks focused on 
                    evidence-based policy making.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Join the Science Network</h4>
                  <p className="csiu-body mb-4">
                    The Science Network provides resources for scientists and supporters to engage in policy advocacy. 
                    Members receive updates on policy developments, tools for effective communication, and opportunities 
                    to participate in collective action.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="csiu-heading-xs mb-3">Local Action Opportunities</h4>
                  <p className="csiu-body mb-4">
                    Local opportunities for science advocacy include attending town halls, participating in science cafes, 
                    supporting science education initiatives, and engaging with state and local representatives on 
                    science policy issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-csiu-primary-dark text-white rounded-lg p-8">
              <h3 className="csiu-heading-sm text-white mb-4">Stay Informed & Take Action</h3>
              <p className="csiu-body-lg text-white opacity-90 mb-8">
                These developments highlight the ongoing need for science advocacy and evidence-based policy making. 
                Your voice and participation can make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-csiu-primary" asChild>
                  <Link href="/how-much-time-do-you-have">
                    TAKE ACTION NOW
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-csiu-primary-dark" asChild>
                  <a href="mailto:csatiub@gmail.com?subject=Newsletter Subscription">
                    SUBSCRIBE TO UPDATES
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archives Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="csiu-heading-md mb-8">Looking for Past Bulletins?</h2>
          <p className="csiu-body-lg mb-8">
            Access our complete archive of weekly news bulletins to stay up-to-date with the ongoing 
            developments in science policy, advocacy, and research.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-csiu-secondary" asChild>
              <Link href="/bulletin-archives">
                <Calendar className="w-5 h-5 mr-2" />
                VIEW BULLETIN ARCHIVES
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/news">
                VIEW ALL NEWS
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}