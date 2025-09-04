import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { AlertTriangle, Users, DollarSign, Shield } from "lucide-react"

export const metadata = getPageMetadata("why-should-you-care")

export default function WhyShouldYouCarePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Why Should You Care?"
        subtitle="Understanding the threats to science and why it matters to everyone"
        fallbackImage="/images/overlays/overlay-about.JPG"
      />

      {/* Main Content */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* For Scientists Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Shield className="w-8 h-8 text-csiu-accent-primary mr-4" />
              <h2 className="csiu-heading-md">For Scientists</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="csiu-body-lg mb-8">
                The scientific community faces unprecedented challenges that threaten the foundation of research and discovery.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <h3 className="csiu-heading-xs mb-4 text-red-800">Proposed Draconian Funding Cuts</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="csiu-body"><strong>Environmental Protection Agency:</strong> 31% budget reduction</li>
                  <li className="csiu-body"><strong>National Institutes of Health:</strong> 18% budget reduction</li>
                  <li className="csiu-body"><strong>Department of Energy Office of Science:</strong> 17% budget reduction</li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-csiu-accent-primary pl-6">
                  <h4 className="csiu-heading-xs mb-3">Climate Change Dismissal</h4>
                  <p className="csiu-body">
                    Political dismissal of climate change research undermines decades of scientific consensus 
                    and threatens our ability to address one of the most pressing challenges of our time.
                  </p>
                </div>

                <div className="border-l-4 border-csiu-accent-primary pl-6">
                  <h4 className="csiu-heading-xs mb-3">Threat to Scientific Peer Review</h4>
                  <p className="csiu-body">
                    Proposals that would allow the government to dictate scientific review criteria, rather than 
                    scientists themselves, could fundamentally undermine the integrity of scientific research.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="csiu-body-lg text-yellow-800">
                  <strong>These policies could cripple U.S. research and the economy for decades to come.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* For the Public Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Users className="w-8 h-8 text-csiu-accent-primary mr-4" />
              <h2 className="csiu-heading-md">For the Public</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="csiu-body-lg mb-8">
                Science affects every aspect of our daily lives, from the medicines we take to the technology we use. 
                Here's why these issues matter to you:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-csiu-gray-light p-6 rounded-lg">
                  <DollarSign className="w-8 h-8 text-csiu-accent-primary mb-4" />
                  <h4 className="csiu-heading-xs mb-3">Economic Impact</h4>
                  <p className="csiu-body">
                    Scientific research is a major driver for job creation, technological innovation, 
                    and economic growth. Strong science policy means a stronger economy.
                  </p>
                </div>

                <div className="bg-csiu-gray-light p-6 rounded-lg">
                  <AlertTriangle className="w-8 h-8 text-csiu-accent-primary mb-4" />
                  <h4 className="csiu-heading-xs mb-3">Health & Safety</h4>
                  <p className="csiu-body">
                    From developing new treatments to ensuring clean air and water, 
                    science protects public health and safety.
                  </p>
                </div>
              </div>

              <div className="bg-csiu-accent-primary text-white p-8 rounded-lg mb-8">
                <h3 className="csiu-heading-sm text-white mb-4">The Scientific Method</h3>
                <p className="csiu-body-lg text-white opacity-90">
                  Science provides a proven, self-correcting approach for establishing real, 
                  as opposed to "alternative," facts. This rigorous method of inquiry is essential 
                  for making informed decisions about complex issues.
                </p>
              </div>

              <h3 className="csiu-heading-sm mb-6">How Science Drives Progress</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-csiu-accent-primary rounded-full mt-3"></div>
                  <p className="csiu-body">
                    <strong>Health improvements:</strong> From vaccines to cancer treatments, medical research saves millions of lives
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-csiu-accent-primary rounded-full mt-3"></div>
                  <p className="csiu-body">
                    <strong>Technological advancement:</strong> Scientific discoveries lead to innovations that improve quality of life
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-csiu-accent-primary rounded-full mt-3"></div>
                  <p className="csiu-body">
                    <strong>National security:</strong> Research strengthens our defense capabilities and competitiveness
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-csiu-accent-primary rounded-full mt-3"></div>
                  <p className="csiu-body">
                    <strong>Environmental protection:</strong> Understanding climate and ecosystems helps preserve our planet
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-csiu-primary-dark text-white p-8 rounded-lg text-center">
            <h3 className="csiu-heading-sm text-white mb-6">What You Can Do</h3>
            <div className="space-y-4 mb-8">
              <p className="csiu-body text-white opacity-90">
                • Communicate your support for robust federal funding for scientific research
              </p>
              <p className="csiu-body text-white opacity-90">
                • Defend the integrity of scientific peer review processes
              </p>
              <p className="csiu-body text-white opacity-90">
                • Emphasize the critical link between American jobs and strong science policy
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-csiu-primary" asChild>
                <Link href="/how-much-time-do-you-have">
                  TAKE ACTION NOW
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-csiu-primary-dark" asChild>
                <Link href="/phoning-your-legislator">
                  CONTACT LEGISLATORS
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}