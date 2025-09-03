import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Users } from "lucide-react"
import Image from "next/image"

interface NewsActivityCardProps {
    image: string
    imageAlt: string
    badge: string
    badgeColor: "science-blue" | "science-green" | "science-red"
    date: string
    title: string
    subtitle: string
    description: string
    participants: string
    buttonText?: string
    buttonColor?: "science-blue" | "science-green" | "science-red"
    borderColor: "science-blue" | "science-green" | "science-red"
}

export function NewsActivityCard({
    image,
    imageAlt,
    badge,
    badgeColor,
    date,
    title,
    subtitle,
    description,
    participants,
    buttonText = "Learn More",
    buttonColor = "science-blue",
    borderColor
}: NewsActivityCardProps) {
    const getButtonClasses = (color: string) => {
        switch (color) {
            case "science-blue":
                return "text-science-blue border-science-blue hover:bg-science-blue hover:text-white"
            case "science-green":
                return "text-science-green border-science-green hover:bg-science-green hover:text-white"
            case "science-red":
                return "text-science-red border-science-red hover:bg-science-red hover:text-white"
            default:
                return "text-science-blue border-science-blue hover:bg-science-blue hover:text-white"
        }
    }

    const getBadgeClasses = (color: string) => {
        switch (color) {
            case "science-blue":
                return "bg-science-blue"
            case "science-green":
                return "bg-science-green"
            case "science-red":
                return "bg-science-red"
            default:
                return "bg-science-blue"
        }
    }
    return (
        // border-l-4 border-l-${borderColor}
        <Card className={`w-[360px] flex-shrink-0 overflow-hidden p-0 pb-6 gap-0`}>
            <div className="relative h-40 w-full">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardHeader className="pb-3 pt-4 px-6">
                <div className="flex items-center justify-between mb-2">
                    <Badge className={getBadgeClasses(badgeColor)}>{badge}</Badge>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
                <CardTitle className="text-lg line-clamp-3">{title}</CardTitle>
                <CardDescription className="line-clamp-3">{subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {description}
                </p>
                <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{participants}</span>
                    </div>
                    <Button
                        size="sm"
                        variant="outline"
                        className={`${getButtonClasses(buttonColor)} w-full`}
                    >
                        {buttonText}
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
