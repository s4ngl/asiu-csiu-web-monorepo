import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("privacy")

export default function PrivacyPage() {
    return (
        <LayoutWrapper>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-8">
                        Last updated: December 15, 2024
                    </p>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Introduction</h2>
                        <p className="text-gray-700 mb-4">
                            Advocates for Science @ IU ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our organization.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Information We Collect</h2>
                        <h3 className="font-heading text-xl font-semibold mb-3">Personal Information</h3>
                        <p className="text-gray-700 mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Sign up for our newsletter</li>
                            <li>Contact us through our website</li>
                            <li>Register for events or workshops</li>
                            <li>Join our organization</li>
                            <li>Participate in our advocacy efforts</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            This information may include your name, email address, phone number, university affiliation, and any other information you choose to provide.
                        </p>

                        <h3 className="font-heading text-xl font-semibold mb-3">Automatically Collected Information</h3>
                        <p className="text-gray-700 mb-4">
                            When you visit our website, we automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Operating system</li>
                            <li>Pages visited and time spent on each page</li>
                            <li>Referring website</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">How We Use Your Information</h2>
                        <p className="text-gray-700 mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Provide and maintain our services</li>
                            <li>Send you newsletters and updates about our advocacy efforts</li>
                            <li>Organize and coordinate events and activities</li>
                            <li>Respond to your inquiries and provide support</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Sharing Your Information</h2>
                        <p className="text-gray-700 mb-4">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>With your explicit consent</li>
                            <li>To comply with legal obligations</li>
                            <li>To protect our rights and safety</li>
                            <li>With service providers who assist us in operating our website and conducting our activities (these providers are bound by confidentiality agreements)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Data Security</h2>
                        <p className="text-gray-700 mb-4">
                            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Your Rights</h2>
                        <p className="text-gray-700 mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Withdraw consent for data processing</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            To exercise these rights, please contact us at asiu@indiana.edu.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Cookies and Tracking</h2>
                        <p className="text-gray-700 mb-4">
                            Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Third-Party Links</h2>
                        <p className="text-gray-700 mb-4">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Children's Privacy</h2>
                        <p className="text-gray-700 mb-4">
                            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Changes to This Policy</h2>
                        <p className="text-gray-700 mb-4">
                            We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. We encourage you to review this Privacy Policy periodically.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-heading text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="text-gray-700 mb-4">
                            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-700">
                                <strong>Email:</strong> asiu@indiana.edu<br />
                                <strong>Address:</strong> Indiana University Bloomington, Bloomington, IN 47405
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </LayoutWrapper>
    )
}
