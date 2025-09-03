import { LayoutWrapper } from "@/components/layout/layout-wrapper"
import { HeroSection } from "@/components/sections/hero/hero-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { ArrowLeft, ExternalLink, Calendar, User } from "lucide-react"
import Link from "next/link"
import { getNewsBulletins } from "@/lib/sanity"
import { parseBulletinContent, formatPublicationDateLong, getCategoryColor } from "@/lib/utils"
import type { NewsBulletin } from "@/lib/types"

// Generate static params for build-time optimization
export async function generateStaticParams() {
    try {
        const bulletins = await getNewsBulletins()
        return bulletins.map((bulletin) => ({
            slug: bulletin.publication,
        }))
    } catch (error) {
        console.error('Failed to generate static params:', error)
        return []
    }
}

interface BulletinPageProps {
    params: {
        slug: string
    }
}

export default async function BulletinPage({ params }: BulletinPageProps) {
    const { slug } = params

    // Convert slug back to date format (YYYY-MM-DD)
    const dateMatch = slug.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (!dateMatch) {
        return (
            <LayoutWrapper>
                <div className="text-center py-16">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Bulletin</h1>
                    <p className="text-gray-600">The requested bulletin could not be found.</p>
                    <Link href="/news" className="text-science-blue hover:underline mt-4 inline-block">
                        Back to News
                    </Link>
                </div>
            </LayoutWrapper>
        )
    }

    const [_, year, month, day] = dateMatch
    const publicationDate = `${year}-${month}-${day}`

    let bulletins: NewsBulletin[] = []

    try {
        bulletins = await getNewsBulletins()
    } catch (error) {
        console.error('Failed to fetch news bulletins:', error)
    }

    const bulletin = bulletins.find(b => b.publication === publicationDate)

    if (!bulletin) {
        return (
            <LayoutWrapper>
                <div className="text-center py-16">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Bulletin Not Found</h1>
                    <p className="text-gray-600">No bulletin found for {formatPublicationDateLong(publicationDate)}.</p>
                    <Link href="/news" className="text-science-blue hover:underline mt-4 inline-block">
                        Back to News
                    </Link>
                </div>
            </LayoutWrapper>
        )
    }

    const articles = parseBulletinContent(bulletin.content)
    const formattedDate = formatPublicationDateLong(bulletin.publication)

    return (
        <LayoutWrapper>
            {/* Hero Section */}
            <HeroSection
                title={`News Bulletin: ${formattedDate}`}
                subtitle="Stay updated with our latest news bulletins and organizational updates."
                showLogo={false}
                showNewsletter={false}
                primaryButtonText=""
                secondaryButtonText=""
                className="py-16"
                backgroundGradient="from-blue-50 to-green-50"
                showPageOutcrop={true}
                breadcrumbItems={[
                    { label: "News", href: "/news" },
                    { label: `Bulletin: ${formattedDate}` }
                ]}
            />

            {/* Articles */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {articles.map((article, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge className={getCategoryColor(article.category)}>{article.category}</Badge>
                                        <span className="text-sm text-gray-500">{article.published}</span>
                                    </div>
                                    <CardTitle className="text-xl">{article.title}</CardTitle>
                                    <CardDescription className="text-base">
                                        Published by {article.publisher}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {article.description}
                                    </p>
                                    {article.link && (
                                        <Button size="sm" variant="outline" asChild>
                                            <a
                                                href={article.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Read Full Article
                                            </a>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </LayoutWrapper>
    )
}
