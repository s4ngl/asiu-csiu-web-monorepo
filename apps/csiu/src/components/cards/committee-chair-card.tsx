import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Mail, ExternalLink } from "lucide-react"
import type { CommitteeChair } from "@/lib/types"

interface PersonCardProps {
    person: CommitteeChair
}

export function PersonCard({ person }: PersonCardProps) {
    return (
        <Card key={person._id}>
            <CardHeader className="text-center">
                <div className="w-16 h-16 bg-science-green rounded-full flex items-center justify-center mx-auto mb-4">
                    {person.imageUrl ? (
                        <img
                            src={person.imageUrl}
                            alt={person.name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <span className="text-white font-bold">
                            {person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    )}
                </div>
                <CardTitle>{person.name}</CardTitle>
                <CardDescription className="text-science-green font-medium">{person.role}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-gray-600 text-sm mb-3">{person.bio}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {person.tags && person.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <div className="flex justify-center space-x-2">
                    {person.email && (
                        <Button size="sm" variant="outline" asChild>
                            <a href={`mailto:${person.email}`}>
                                <Mail className="h-4 w-4" />
                            </a>
                        </Button>
                    )}
                    {person.socialLinks && person.socialLinks.map((link, index) => (
                        <Button key={index} size="sm" variant="outline" asChild>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
