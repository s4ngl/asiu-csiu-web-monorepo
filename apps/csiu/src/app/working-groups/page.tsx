import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { Mail, Users, Megaphone, Calendar, GraduationCap, MessageSquare } from "lucide-react"

export const metadata = getPageMetadata("working-groups")

export default function WorkingGroupsPage() {
  const workingGroups = [
    {
      name: "Legislative Advocacy",
      icon: Megaphone,
      description: "This group is responsible for identifying, documenting, and presenting proposals for coordinated action on key legislative issues. It often collaborates with larger organizations like the Union of Concerned Scientists and the American Association for the Advancement of Science (AAAS) to align its priorities and plan candidate forums.",
      contacts: ["pmadetzk@indiana.edu", "vigdor@indiana.edu"]
    },
    {
      name: "Education and Outreach",
      icon: GraduationCap,
      description: "This group focuses on outreach to community organizations, including schools and religious communities, as well as campus student groups. Its activities include speaking at science clubs, outreach to schools and community organizations, participation in teacher-training workshops, and organizing high-profile science events.",
      contacts: ["tlonderg@indiana.edu", "juhbauer@iu.edu"]
    },
    {
      name: "Communications",
      icon: MessageSquare,
      description: "This group develops and manages external communications and media support for all CSIU activities. It is responsible for maintaining the organization's website, social media presence, and coordinating press releases, letters to the editor, and other media initiatives.",
      contacts: ["irnewton@indiana.edu", "mbdelval@iu.edu"]
    },
    {
      name: "Events",
      icon: Calendar,
      description: "This group is responsible for planning and coordinating both high-frequency events, such as tabling at a farmers market, and 'low-frequency' special events, including all-hands meetings and forums. These events are often collaborations with other campus organizations and departments.",
      contacts: ["kellerab@indiana.edu", "hamburg@indiana.edu"]
    }
  ]

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Working Groups"
        subtitle="Join one of our four active working groups and contribute your expertise to advance science advocacy"
        fallbackImage="/images/overlays/overlay-about.JPG"
      />

      {/* Introduction Section */}
      <section className="py-16 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="csiu-heading-md mb-8">Get Involved</h2>
          <p className="csiu-body-lg mb-8">
            Our working groups are the primary units for member engagement at Concerned Scientists @ IU. 
            Each group focuses on a specific aspect of our mission, providing opportunities for both 
            new and experienced advocates to contribute meaningfully to science policy.
          </p>
          <p className="csiu-body">
            Whether you have a few hours a month or can commit to regular involvement, there's a place 
            for you in our collaborative, decentralized organization.
          </p>
        </div>
      </section>

      {/* Working Groups Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {workingGroups.map((group, index) => {
              const IconComponent = group.icon
              return (
                <div key={group.name} className={`flex flex-col lg:flex-row gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Icon and Title */}
                  <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-20 h-20 bg-csiu-accent-primary rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="csiu-heading-sm mb-4">{group.name}</h3>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <div className="bg-white rounded-lg p-8 shadow-sm border border-csiu-gray-light">
                      <p className="csiu-body mb-8 leading-relaxed">
                        {group.description}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="csiu-heading-xs">Get in Touch</h4>
                        <div className="flex flex-col space-y-3">
                          {group.contacts.map((email, emailIndex) => (
                            <div key={emailIndex} className="flex items-center space-x-3">
                              <Mail className="w-5 h-5 text-csiu-accent-primary" />
                              <a 
                                href={`mailto:${email}`}
                                className="csiu-body text-csiu-accent-primary hover:underline"
                              >
                                {email}
                              </a>
                            </div>
                          ))}
                        </div>
                        
                        <div className="pt-4">
                          <Button className="btn-csiu-secondary" asChild>
                            <a href={`mailto:${group.contacts[0]}?subject=Interest in ${group.name} Working Group`}>
                              JOIN THIS GROUP
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* General Contact Section */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="csiu-heading-md mb-8">Not Sure Which Group to Join?</h2>
          <p className="csiu-body-lg mb-8">
            Our members are scattered across the campus of Indiana University, but we're always open to 
            in-person meetings by appointment. Reach out to our general contact for guidance on where 
            your skills and interests might be the best fit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-csiu-primary" asChild>
              <a href="mailto:csatiub@gmail.com?subject=Interest in CSIU Working Groups">
                CONTACT US
              </a>
            </Button>
            <Button className="btn-csiu-secondary" asChild>
              <Link href="/how-much-time-do-you-have">
                EXPLORE OTHER WAYS TO HELP
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}