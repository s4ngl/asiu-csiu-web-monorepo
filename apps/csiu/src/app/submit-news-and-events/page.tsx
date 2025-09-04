import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Button } from "@/components/ui/primitives/button"
import { getPageMetadata } from "@/lib/metadata"
import { Send, Info, Calendar, Newspaper, MessageSquare } from "lucide-react"

export const metadata = getPageMetadata("submit-news-and-events")

export default function SubmitNewsAndEventsPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <HeroSection
        title="Submit News and Events"
        subtitle="Help us share important science advocacy news and events with our community"
        fallbackImage="/images/overlays/overlay-contact.JPG"
      />

      {/* Introduction */}
      <section className="py-16 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="csiu-heading-md mb-8">Share Your News</h2>
          <p className="csiu-body-lg mb-8">
            We rely on our community to help us stay informed about important developments in science advocacy, 
            policy, and education. Submit news items, events, or other relevant content that you think our 
            network should know about.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="csiu-body text-blue-800">
                  <strong>Submission Guidelines:</strong> Please keep descriptions under 180 characters for optimal 
                  sharing across our platforms. Include a web link when available for additional context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-8">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block csiu-heading-xs mb-3">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-csiu-gray-light rounded-lg focus:ring-2 focus:ring-csiu-accent-primary focus:border-transparent outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block csiu-heading-xs mb-3">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-csiu-gray-light rounded-lg focus:ring-2 focus:ring-csiu-accent-primary focus:border-transparent outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Title Field */}
              <div>
                <label htmlFor="title" className="block csiu-heading-xs mb-3">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-3 border border-csiu-gray-light rounded-lg focus:ring-2 focus:ring-csiu-accent-primary focus:border-transparent outline-none"
                  placeholder="Brief title for your submission"
                />
              </div>

              {/* Content Field */}
              <div>
                <label htmlFor="content" className="block csiu-heading-xs mb-3">
                  Content <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="content"
                    name="content"
                    required
                    maxLength={180}
                    rows={4}
                    className="w-full px-4 py-3 border border-csiu-gray-light rounded-lg focus:ring-2 focus:ring-csiu-accent-primary focus:border-transparent outline-none resize-none"
                    placeholder="Brief description of your submission (less than 180 characters)"
                  />
                  <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                    <span id="charCount">0</span>/180
                  </div>
                </div>
                <p className="csiu-body text-sm text-gray-600 mt-2">
                  Keep your description concise for optimal sharing across our platforms.
                </p>
              </div>

              {/* Submission Type - Required Checkbox */}
              <div>
                <label className="block csiu-heading-xs mb-4">
                  Submission Type <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="submissionType"
                      value="news"
                      required
                      className="w-4 h-4 text-csiu-accent-primary border-csiu-gray-light focus:ring-csiu-accent-primary"
                    />
                    <div className="flex items-center space-x-2">
                      <Newspaper className="w-5 h-5 text-csiu-accent-primary" />
                      <span className="csiu-body">News Feed</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="submissionType"
                      value="events"
                      required
                      className="w-4 h-4 text-csiu-accent-primary border-csiu-gray-light focus:ring-csiu-accent-primary"
                    />
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-csiu-accent-primary" />
                      <span className="csiu-body">Events Calendar</span>
                    </div>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="submissionType"
                      value="other"
                      required
                      className="w-4 h-4 text-csiu-accent-primary border-csiu-gray-light focus:ring-csiu-accent-primary"
                    />
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 text-csiu-accent-primary" />
                      <span className="csiu-body">Other</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Web Link Field - Optional */}
              <div>
                <label htmlFor="webLink" className="block csiu-heading-xs mb-3">
                  Web Link <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="url"
                  id="webLink"
                  name="webLink"
                  className="w-full px-4 py-3 border border-csiu-gray-light rounded-lg focus:ring-2 focus:ring-csiu-accent-primary focus:border-transparent outline-none"
                  placeholder="https://example.com (if applicable)"
                />
                <p className="csiu-body text-sm text-gray-600 mt-2">
                  Include a relevant link for additional context or details.
                </p>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" className="btn-csiu-primary px-8 py-4">
                  <Send className="w-5 h-5 mr-2" />
                  SUBMIT FOR REVIEW
                </Button>
                <p className="csiu-body text-sm text-gray-600 mt-4">
                  All submissions are reviewed before publication. We'll contact you if we need additional information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-24 bg-csiu-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="csiu-heading-md mb-8 text-center">Submission Guidelines</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="csiu-heading-sm text-green-800 mb-4">What We're Looking For</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-green-700">Science policy developments</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-green-700">Educational events and workshops</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-green-700">Science advocacy opportunities</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-green-700">Research funding announcements</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-green-700">Community science initiatives</p>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="csiu-heading-sm text-blue-800 mb-4">Review Process</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-blue-700">All submissions reviewed within 2-3 business days</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-blue-700">Priority given to time-sensitive content</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-blue-700">We may edit for clarity and length</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-blue-700">Submitters notified of publication decisions</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="csiu-body text-blue-700">Content shared across our platforms</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="csiu-body-lg mb-6">
              Have questions about your submission or our review process?
            </p>
            <Button className="btn-csiu-secondary" asChild>
              <a href="mailto:csatiub@gmail.com?subject=Submission Question">
                CONTACT US
              </a>
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}