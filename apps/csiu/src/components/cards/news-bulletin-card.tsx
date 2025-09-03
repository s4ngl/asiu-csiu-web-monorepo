'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { FileText } from "lucide-react"
import { useRouter } from "next/navigation"
import type { NewsBulletin } from "@/lib/types"
import { formatPublicationDateLong, parseBulletinContent, createSlug, getCategoryColor } from "@/lib/utils"

interface NewsBulletinCardProps {
    bulletin: NewsBulletin
}

export function NewsBulletinCard({ bulletin }: NewsBulletinCardProps) {
    const router = useRouter()
    const articles = parseBulletinContent(bulletin.content)
    const formattedDate = formatPublicationDateLong(bulletin.publication)
    const slug = createSlug(bulletin.publication)

    // Get unique publishers
    const publishers = [...new Set(articles.map(article => article.publisher).filter(p => p))]

    // Get unique categories with counts
    const categoryCounts = articles.reduce((acc, article) => {
        if (article.category) {
            acc[article.category] = (acc[article.category] || 0) + 1
        }
        return acc
    }, {} as Record<string, number>)

    const categories = Object.keys(categoryCounts)

    const handleClick = () => {
        router.push(`/news/bulletin/${slug}`)
    }

    return (
        <Card
            className="border-l-4 border-l-science-blue hover:shadow-lg transition-shadow cursor-pointer"
            onClick={handleClick}
        >
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                            <Badge key={index} className={getCategoryColor(category)}>
                                {category} ({categoryCounts[category]})
                            </Badge>
                        ))}
                    </div>
                    <span className="text-sm text-gray-500">{articles.length} article{articles.length !== 1 ? 's' : ''}</span>
                </div>
                <CardTitle className="text-xl">
                    {formattedDate} — News Bulletin
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {publishers.join(', ')}
                </p>
                <Button size="sm" variant="outline" onClick={(e) => {
                    e.stopPropagation()
                    handleClick()
                }}>
                    <FileText className="mr-2 h-4 w-4" />
                    Read Bulletin ({articles.length} articles)
                </Button>
            </CardContent>
        </Card>
    )
}
