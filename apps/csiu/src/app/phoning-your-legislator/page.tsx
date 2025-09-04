import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import { Phone, MapPin, ExternalLink } from "lucide-react"

export const metadata = getPageMetadata("phoning-your-legislator")

export default function PhoningYourLegislatorPage() {
  const legislators = [
    {
      name: "Senator Todd Young",
      office: "400 Russell Senate Office Building, Washington DC 20510",
      phone: "(202) 224-5623"
    },
    {
      name: "Senator Mike Braun",
      office: "374 Russell Senate Office Building, Washington DC 20510",
      phone: "(202) 224-4814"
    },
    {
      name: "Rep. Trey Hollingsworth",
      office: "1641 Longworth House Office Building, Washington, D.C. 20515",
      phone: "(202) 225-5315"
    }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Phoning Your Legislator"
        subtitle="Make your voice heard on science policy issues"
        fallbackImage="/images/overlays/overlay-contact.JPG"
      />

      {/* Main Content */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="csiu-heading-md mb-6">Contact Your Representatives</h2>
            <p className="csiu-body-lg mb-8">
              Calling your legislators is one of the most effective ways to make your voice heard on important 
              science policy issues. Below you'll find contact information for Indiana's 9th district federal 
              representatives and a sample script to help you communicate effectively.
            </p>
          </div>

          {/* Legislators Contact Table */}
          <div className="mb-16">
            <h3 className="csiu-heading-sm mb-8">Indiana 9th District Federal Legislators</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-csiu-gray-light">
                <thead>
                  <tr className="bg-csiu-gray-light">
                    <th className="border border-csiu-gray-light px-6 py-4 text-left csiu-heading-xs">Name</th>
                    <th className="border border-csiu-gray-light px-6 py-4 text-left csiu-heading-xs">Office Address</th>
                    <th className="border border-csiu-gray-light px-6 py-4 text-left csiu-heading-xs">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {legislators.map((legislator, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-csiu-gray-light px-6 py-4 csiu-body font-medium">
                        {legislator.name}
                      </td>
                      <td className="border border-csiu-gray-light px-6 py-4 csiu-body">
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-csiu-accent-primary mt-1 flex-shrink-0" />
                          <span>{legislator.office}</span>
                        </div>
                      </td>
                      <td className="border border-csiu-gray-light px-6 py-4 csiu-body">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-csiu-accent-primary" />
                          <a 
                            href={`tel:${legislator.phone}`} 
                            className="text-csiu-accent-primary hover:underline font-medium"
                          >
                            {legislator.phone}
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sample Script */}
          <div className="mb-12">
            <h3 className="csiu-heading-sm mb-8">Sample Phone Script</h3>
            <p className="csiu-body mb-6">
              Use this script as a guide when calling to express opposition to proposed budget cuts to scientific research:
            </p>
            
            <div className="bg-csiu-gray-light p-8 rounded-lg border-l-4 border-csiu-accent-primary">
              <div className="space-y-4">
                <p className="csiu-body">
                  <strong>"Hello, my name is [YOUR NAME] and I am a constituent from [YOUR CITY], Indiana."</strong>
                </p>
                
                <p className="csiu-body">
                  "I am calling to express my strong opposition to proposed budget cuts to scientific research agencies, 
                  including the EPA, NIH, and Department of Energy Office of Science."
                </p>
                
                <p className="csiu-body">
                  "Scientific research is crucial for maintaining America's economic competitiveness, national security, 
                  and public health. These proposed cuts would severely damage our nation's research capacity and 
                  put us at a significant disadvantage globally."
                </p>
                
                <p className="csiu-body">
                  "I urge [SENATOR/REPRESENTATIVE NAME] to support robust federal funding for scientific research 
                  and to oppose any measures that would politicize or undermine the scientific peer review process."
                </p>
                
                <p className="csiu-body">
                  "Thank you for your time and consideration. I hope I can count on [HIS/HER] support for 
                  evidence-based policy making."
                </p>
              </div>
            </div>
          </div>

          {/* Important Tips */}
          <div className="mb-12">
            <h3 className="csiu-heading-sm mb-6">Important Tips for Calling</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h4 className="csiu-heading-xs mb-3 text-blue-800">Be Prepared</h4>
                  <ul className="space-y-2 text-blue-700">
                    <li className="csiu-body">• Have your full name and address ready</li>
                    <li className="csiu-body">• Know which representative you're calling</li>
                    <li className="csiu-body">• Keep your message concise and clear</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h4 className="csiu-heading-xs mb-3 text-green-800">Leaving a Voicemail</h4>
                  <ul className="space-y-2 text-green-700">
                    <li className="csiu-body">• State your full street address</li>
                    <li className="csiu-body">• This ensures your call is properly tallied</li>
                    <li className="csiu-body">• Keep your message under 2 minutes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-csiu-primary-dark text-white p-8 rounded-lg text-center">
            <h3 className="csiu-heading-sm text-white mb-4">Ready to Make Your Voice Heard?</h3>
            <p className="csiu-body-lg text-white opacity-90 mb-8">
              Every call matters. Your representatives need to hear from constituents like you about the importance 
              of science funding and evidence-based policy making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-csiu-primary" asChild>
                <a href="mailto:csatiub@gmail.com">
                  GET SUPPORT
                </a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-csiu-primary-dark" asChild>
                <a href="/how-much-time-do-you-have">
                  OTHER WAYS TO HELP
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}