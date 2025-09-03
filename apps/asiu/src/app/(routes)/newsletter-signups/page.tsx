import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { list } from '@vercel/blob'

export const metadata = {
    title: 'Newsletter Signups - Admin',
    description: 'Newsletter subscription data',
    robots: 'noindex, nofollow'
}

interface SubscriptionData {
    email: string
    timestamp: string
    source: string
    status: string
}

export default async function NewsletterSignupsPage() {
    let subscriptions: SubscriptionData[] = []

    try {
        // List all files in the newsletter-subscriptions folder
        const { blobs } = await list({
            prefix: 'newsletter-subscriptions/',
        })

        // Read each JSON file and extract the data
        const subscriptionPromises = blobs.map(async (blob) => {
            try {
                const response = await fetch(blob.url)
                const text = await response.text()
                const data: SubscriptionData = JSON.parse(text)
                return data
            } catch (error) {
                console.error(`Error reading blob ${blob.url}:`, error)
                return null
            }
        })

        const results = await Promise.all(subscriptionPromises)
        subscriptions = results.filter((result): result is SubscriptionData => result !== null)

        // Sort by timestamp (newest first)
        subscriptions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    } catch (error) {
        console.error('Error fetching newsletter subscriptions:', error)
    }

    return (
        <LayoutWrapper>
            <div className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-sm p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">Newsletter Signups</h1>

                        {subscriptions.length > 0 ? (
                            <div className="space-y-4">
                                {subscriptions.map((subscription, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                                        <span className="text-gray-900 font-medium">{subscription.email}</span>
                                        <span className="text-gray-500 text-sm">
                                            {new Date(subscription.timestamp).toLocaleString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No newsletter subscriptions found.</p>
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Total subscriptions: {subscriptions.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    )
}
