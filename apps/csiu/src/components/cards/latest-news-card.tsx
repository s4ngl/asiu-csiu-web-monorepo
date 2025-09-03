import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Users } from "lucide-react"
import Image from "next/image"
import type { Event } from "@/lib/types"
import { formatLocalDate } from "@/lib/utils"
import { ClampedText } from "./clamped-text"

interface LatestNewsCardProps {
    event: Event
}

export function LatestNewsCard({ event }: LatestNewsCardProps) {
    // Format date - use timezone-safe parsing to prevent date shifts
    const formatDate = (dateString: string) => {
        return formatLocalDate(dateString, {
            year: 'numeric',
            month: 'short'
        })
    }

    // Get badge color based on first tag
    const getBadgeColor = (tags: string[]) => {
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('climate') || firstTag.includes('environment')) return 'bg-science-blue'
        if (firstTag.includes('healthcare') || firstTag.includes('medical')) return 'bg-science-green'
        if (firstTag.includes('democracy') || firstTag.includes('policy')) return 'bg-science-red'
        if (firstTag.includes('education') || firstTag.includes('training')) return 'bg-science-green'
        return 'bg-science-blue'
    }

    // Get button color based on first tag
    const getButtonColor = (tags: string[]) => {
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('climate') || firstTag.includes('environment')) return 'text-science-blue border-science-blue hover:bg-science-blue hover:text-white'
        if (firstTag.includes('healthcare') || firstTag.includes('medical')) return 'text-science-green border-science-green hover:bg-science-green hover:text-white'
        if (firstTag.includes('democracy') || firstTag.includes('policy')) return 'text-science-red border-science-red hover:bg-science-red hover:text-white'
        if (firstTag.includes('education') || firstTag.includes('training')) return 'text-science-green border-science-green hover:bg-science-green hover:text-white'
        return 'text-science-blue border-science-blue hover:bg-science-blue hover:text-white'
    }

    // Get participant count text
    const getParticipantText = (count?: number) => {
        if (count) {
            return `${count} participants`
        }
        return `${event.audience.join(', ')}`
    }

    const badgeColor = getBadgeColor(event.tags)
    const buttonColor = getButtonColor(event.tags)
    const participantText = getParticipantText(event.participantCount)

    return (
        <Card className="w-[360px] flex-shrink-0 overflow-hidden p-0 pb-6 gap-0" role="article" aria-labelledby={`event-title-${event._id}`}>
            <div className="relative h-40 w-full">
                <Image
                    src={event.imageUrl || "/images/placeholders/placeholder.jpg"}
                    alt={`Image for ${event.title}`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardHeader className="pb-3 pt-4 px-6">
                <div className="flex items-center justify-between mb-2">
                    <Badge className={badgeColor}>{event.tags[0] || 'Event'}</Badge>
                    <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
                </div>
                <ClampedText
                    text={event.title}
                    className="text-lg line-clamp-3"
                    asChild
                >
                    <CardTitle id={`event-title-${event._id}`} />
                </ClampedText>
                <ClampedText
                    text={event.subtitle}
                    className="text-sm text-muted-foreground line-clamp-2"
                    asChild
                >
                    <CardDescription />
                </ClampedText>
            </CardHeader>
            <CardContent className="pt-0 px-6">
                <ClampedText
                    text={event.description}
                    className="text-gray-600 text-sm mb-4 line-clamp-3"
                />
                <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{participantText}</span>
                    </div>
                    <Button
                        size="sm"
                        variant="outline"
                        className={`${buttonColor} w-full`}
                        asChild
                    >
                        <a
                            href={event.btnUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${event.btnText} for ${event.title} (opens in new tab)`}
                        >
                            {event.btnText}
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
