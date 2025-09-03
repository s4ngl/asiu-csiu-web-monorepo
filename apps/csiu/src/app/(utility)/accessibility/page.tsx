import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("accessibility")

export default function AccessibilityPage() {
    return (
        <LayoutWrapper>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-heading text-4xl font-bold mb-8">Accessibility Statement</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-8">
                        Last updated: December 15, 2024
                    </p>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Our Commitment</h2>
                        <p className="text-gray-700 mb-4">
                            Advocates for Science @ IU is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Conformance Status</h2>
                        <p className="text-gray-700 mb-4">
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Our website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Accessibility Features</h2>
                        <p className="text-gray-700 mb-4">
                            Our website includes the following accessibility features:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Semantic HTML structure for proper screen reader navigation</li>
                            <li>Alternative text for images and graphics</li>
                            <li>Keyboard navigation support</li>
                            <li>High contrast color schemes</li>
                            <li>Resizable text (up to 200% without loss of functionality)</li>
                            <li>Clear and consistent navigation</li>
                            <li>Descriptive link text</li>
                            <li>Form labels and error messages</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Known Issues</h2>
                        <p className="text-gray-700 mb-4">
                            We are aware of the following accessibility issues and are working to resolve them:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Some third-party content may not be fully accessible</li>
                            <li>Complex data tables may need additional markup for screen readers</li>
                            <li>Some interactive elements may require additional keyboard navigation improvements</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Compatible Technologies</h2>
                        <p className="text-gray-700 mb-4">
                            Our website is designed to be compatible with the following assistive technologies:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                            <li>Screen magnification software</li>
                            <li>Speech recognition software</li>
                            <li>Keyboard-only navigation</li>
                            <li>High contrast mode</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Browser Compatibility</h2>
                        <p className="text-gray-700 mb-4">
                            Our website is compatible with the following browsers and their accessibility features:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Chrome (latest version)</li>
                            <li>Firefox (latest version)</li>
                            <li>Safari (latest version)</li>
                            <li>Edge (latest version)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Testing</h2>
                        <p className="text-gray-700 mb-4">
                            We test our website for accessibility using the following methods:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Automated accessibility testing tools</li>
                            <li>Manual testing with screen readers</li>
                            <li>Keyboard-only navigation testing</li>
                            <li>Color contrast analysis</li>
                            <li>User feedback and testing</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Feedback and Support</h2>
                        <p className="text-gray-700 mb-4">
                            We welcome your feedback on the accessibility of our website. If you experience accessibility barriers or have suggestions for improvement, please contact us:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <p className="text-gray-700">
                                <strong>Email:</strong> info@csiub.org<br />
                                <strong>Subject:</strong> Accessibility Feedback<br />
                                <strong>Response Time:</strong> We aim to respond within 2 business days
                            </p>
                        </div>
                        <p className="text-gray-700 mb-4">
                            When contacting us, please include:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Description of the accessibility issue</li>
                            <li>URL of the page where you encountered the issue</li>
                            <li>Browser and assistive technology you are using</li>
                            <li>Your contact information (optional)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Alternative Formats</h2>
                        <p className="text-gray-700 mb-4">
                            If you need information from our website in an alternative format, such as:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Large print</li>
                            <li>Audio format</li>
                            <li>Braille</li>
                            <li>Electronic text</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            Please contact us at info@csiub.org and we will work to provide the information in your preferred format.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Continuous Improvement</h2>
                        <p className="text-gray-700 mb-4">
                            We are committed to continuously improving the accessibility of our website. This includes:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Regular accessibility audits and testing</li>
                            <li>Training for content creators on accessibility best practices</li>
                            <li>Monitoring and addressing user feedback</li>
                            <li>Staying updated with accessibility standards and guidelines</li>
                            <li>Incorporating accessibility considerations in all new features and content</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Third-Party Content</h2>
                        <p className="text-gray-700 mb-4">
                            Our website may contain links to third-party websites or embed third-party content. We are not responsible for the accessibility of these external sites or content. If you encounter accessibility issues with third-party content, please contact the respective organization directly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Updates to This Statement</h2>
                        <p className="text-gray-700 mb-4">
                            We will update this accessibility statement as we make improvements to our website. The last update date is shown at the top of this page.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Contact Information</h2>
                        <p className="text-gray-700 mb-4">
                            For accessibility-related questions or concerns, please contact us:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">
                                <strong>Email:</strong> info@csiub.org<br />
                                <strong>Address:</strong> Indiana University Bloomington, Bloomington, IN 47405<br />
                                <strong>Response Time:</strong> 2 business days
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </LayoutWrapper>
    )
}
