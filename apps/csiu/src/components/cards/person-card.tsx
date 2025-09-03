import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { ClampedText } from "@/components/cards/clamped-text"
import { Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { CommitteeChair } from "@/lib/types"

interface PersonCardProps {
  person: CommitteeChair
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Card key={person._id} className="min-h-[400px]">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-science-green rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
          <Image
            src={person.image || "/images/placeholders/placeholder-user.jpg"}
            alt={`${person.name}, ${person.role} at Concerned Scientists @ IU`}
            width={120}
            height={120}
            className="rounded-full object-cover"
            priority
          />
        </div>
        <CardTitle>{person.name}</CardTitle>
        <CardDescription className="text-science-green font-medium">{person.role}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <ClampedText
          text={person.bio}
          className="text-gray-600 text-sm mb-3 line-clamp-6"
        />
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {person.tags && person.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <div className="flex justify-center space-x-2">
          {person.email && (
            <Button size="sm" variant="outline" asChild>
              <a href={`mailto:${person.email}`} aria-label={`Email ${person.name}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
          {person.socialLinks && person.socialLinks.map((link, index) => (
            <Button key={index} size="sm" variant="outline" asChild>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${person.name}'s social media profile`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
