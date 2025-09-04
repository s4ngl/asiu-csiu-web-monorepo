import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("what-we-do")

export default function WhatWeDoPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Our Mission"
        subtitle="Concerned Scientists at Indiana University, Bloomington"
        fallbackImage="/images/overlays/overlay-about.JPG"
      />

      {/* Mission Content */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="csiu-body-lg mb-8">
              Concerned Scientists at Indiana University, Bloomington is a coalition of scientists and their supporters 
              that was formed as a direct response to attacks on science in the current political climate.
            </p>
            
            <p className="csiu-body-lg mb-12">
              Our overarching mission is to strengthen the essential role of science and evidence-based decision-making 
              at all levels, from individual and community actions to state, federal, and international policy.
            </p>

            <h2 className="csiu-heading-sm mb-8">Our Four Core Aims</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-csiu-accent-primary pl-6">
                <h3 className="csiu-heading-xs mb-4">1. Promote the accurate representation of science</h3>
                <p className="csiu-body">
                  We work to ensure accurate representation of science in the media, in education, and in the design of legislation.
                </p>
              </div>

              <div className="border-l-4 border-csiu-accent-primary pl-6">
                <h3 className="csiu-heading-xs mb-4">2. Engage with the public</h3>
                <p className="csiu-body">
                  We communicate science to the public, especially as it relates to core issues influenced by public policy.
                </p>
              </div>

              <div className="border-l-4 border-csiu-accent-primary pl-6">
                <h3 className="csiu-heading-xs mb-4">3. Promote the participation of scientists</h3>
                <p className="csiu-body">
                  We encourage and facilitate the participation of scientists in policy-making processes.
                </p>
              </div>

              <div className="border-l-4 border-csiu-accent-primary pl-6">
                <h3 className="csiu-heading-xs mb-4">4. Support continued federal funding</h3>
                <p className="csiu-body">
                  We advocate for continued federal funding for independent scientific research and defend research from politically motivated attacks.
                </p>
              </div>
            </div>

            <div className="mt-16 p-8 bg-csiu-gray-light rounded-lg">
              <p className="csiu-body-lg text-center">
                Science is essential for making informed decisions that affect our communities, our nation, and our world. 
                Join us in promoting the vital role of science in policy and society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}