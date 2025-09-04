import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Clock, Zap, Phone, PenTool, Twitter, Facebook, Users } from "lucide-react"

export const metadata = getPageMetadata("how-much-time-do-you-have")

export default function HowMuchTimeDoYouHavePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="How Much Time Do You Have?"
        subtitle="A graduated guide to science advocacy based on your available time commitment"
        fallbackImage="/images/overlays/overlay-get-involved.JPG"
      />

      {/* Introduction */}
      <section className="py-16 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="csiu-heading-md mb-8">Every Action Matters</h2>
          <p className="csiu-body-lg">
            Whether you have just a few seconds or are ready to make a long-term commitment, 
            there are meaningful ways to support science advocacy and evidence-based policy making. 
            Choose the level of engagement that works for you.
          </p>
        </div>
      </section>

      {/* Tiered Engagement Options */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* 5 Seconds */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-8 border-green-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center mr-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="csiu-heading-md text-green-700">Got 5 Seconds?</h3>
                  <p className="csiu-body text-green-600">Quick actions with immediate impact</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Twitter className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h4 className="csiu-heading-xs mb-3">Retweet News</h4>
                  <p className="csiu-body mb-4 text-sm">
                    Share important science news and advocacy updates with your network. 
                    Every retweet amplifies our message.
                  </p>
                  <Button className="btn-csiu-secondary text-sm" asChild>
                    <a href="https://twitter.com/ConcernedScIU" target="_blank" rel="noopener noreferrer">
                      FOLLOW @ConcernedScIU
                    </a>
                  </Button>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Facebook className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h4 className="csiu-heading-xs mb-3">Follow on Facebook</h4>
                  <p className="csiu-body mb-4 text-sm">
                    Stay updated with our latest activities and share our posts to spread awareness 
                    about science advocacy.
                  </p>
                  <Button className="btn-csiu-secondary text-sm" asChild>
                    <a href="https://facebook.com/ConcernedScIU" target="_blank" rel="noopener noreferrer">
                      FOLLOW US
                    </a>
                  </Button>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h4 className="csiu-heading-xs mb-3">Join Our Listserv</h4>
                  <p className="csiu-body mb-4 text-sm">
                    Get the latest updates on science advocacy opportunities and stay informed 
                    about key policy issues.
                  </p>
                  <Button className="btn-csiu-secondary text-sm" asChild>
                    <a href="mailto:csatiub@gmail.com?subject=Subscribe to CSIU Listserv">
                      SUBSCRIBE
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* 10 Minutes */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-8 border-blue-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mr-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="csiu-heading-md text-blue-700">Got 10 Minutes?</h3>
                  <p className="csiu-body text-blue-600">Make a direct impact with your representatives</p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-8">
                <h4 className="csiu-heading-sm mb-4 text-blue-800">Call Your Congressperson</h4>
                <p className="csiu-body-lg mb-6 text-blue-700">
                  Calling is the most effective way to communicate with your representatives about the importance 
                  of science funding and evidence-based policy. Your voice as a constituent carries significant weight.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h5 className="csiu-heading-xs text-blue-800">Why Calling Works:</h5>
                    <ul className="space-y-2 text-blue-700">
                      <li className="csiu-body text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Direct impact on legislative decisions
                      </li>
                      <li className="csiu-body text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Personal connection with representatives
                      </li>
                      <li className="csiu-body text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Calls are tracked and reported to legislators
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Button className="btn-csiu-primary mb-4" asChild>
                      <Link href="/phoning-your-legislator">
                        GET CONTACT INFO & SCRIPT
                      </Link>
                    </Button>
                    <p className="csiu-body text-xs text-blue-600 text-center">
                      Includes phone numbers and sample script
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* More Time */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-8 border-purple-400">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-400 rounded-lg flex items-center justify-center mr-6">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="csiu-heading-md text-purple-700">Got More Time?</h3>
                  <p className="csiu-body text-purple-600">Make a lasting contribution to science advocacy</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="csiu-heading-sm mb-4 text-purple-800">Share Your Story</h4>
                  <p className="csiu-body mb-6 text-purple-700">
                    Write a blog post about how science has impacted your life, career, or community. 
                    Personal stories are powerful tools for advocacy and help the public understand 
                    the real-world importance of scientific research.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="csiu-body text-sm text-purple-700">Share your research journey</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="csiu-body text-sm text-purple-700">Highlight science's societal benefits</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="csiu-body text-sm text-purple-700">Connect research to policy</p>
                    </div>
                  </div>
                  
                  <Button className="btn-csiu-secondary text-sm" asChild>
                    <a href="mailto:csatiub@gmail.com?subject=Blog Post Submission">
                      SUBMIT YOUR STORY
                    </a>
                  </Button>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="csiu-heading-sm mb-4 text-purple-800">Join a Working Group</h4>
                  <p className="csiu-body mb-6 text-purple-700">
                    Make a regular difference by joining one of our four working groups. Whether your 
                    expertise is in policy, communication, education, or event planning, we have a 
                    place where you can contribute meaningfully.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="csiu-body text-sm text-purple-700">Legislative Advocacy</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="csiu-body text-sm text-purple-700">Education and Outreach</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="csiu-body text-sm text-purple-700">Communications</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="csiu-body text-sm text-purple-700">Events</p>
                    </div>
                  </div>
                  
                  <Button className="btn-csiu-primary text-sm" asChild>
                    <Link href="/working-groups">
                      EXPLORE WORKING GROUPS
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-csiu-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="csiu-heading-md text-white mb-8">Ready to Get Started?</h2>
          <p className="csiu-body-lg text-white opacity-90 mb-8">
            Every level of engagement matters in the fight for evidence-based policy and scientific integrity. 
            Start where you are, with the time you have available.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-csiu-primary" asChild>
              <a href="mailto:csatiub@gmail.com?subject=Getting Involved with CSIU">
                CONTACT US
              </a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-csiu-primary-dark" asChild>
              <Link href="/contact">
                LEARN MORE
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}