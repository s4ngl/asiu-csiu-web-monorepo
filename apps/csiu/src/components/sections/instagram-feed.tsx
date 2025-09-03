'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/composite/card"
import { Button } from "@/components/ui/primitives/button"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

interface InstagramPost {
    id: string
    imageUrl: string
    caption: string
    likes: number
    comments: number
    timestamp: string
    permalink: string
}

// Mock Instagram posts data - in a real implementation, this would come from Instagram API
const mockInstagramPosts: InstagramPost[] = [
    {
        id: '1',
        imageUrl: '/images/placeholders/placeholder.jpg',
        caption: 'Excited to share our latest science policy workshop! Students learned effective communication strategies for engaging with policymakers. #SciencePolicy #Advocacy #IU',
        likes: 45,
        comments: 12,
        timestamp: '2024-12-15T10:30:00Z',
        permalink: 'https://www.instagram.com/p/example1/'
    },
    {
        id: '2',
        imageUrl: '/images/placeholders/placeholder.jpg',
        caption: 'Our climate action forum brought together experts, students, and community members to discuss evidence-based solutions. Science should guide our policy decisions! 🌱 #ClimateAction #SciencePolicy',
        likes: 78,
        comments: 23,
        timestamp: '2024-12-10T14:15:00Z',
        permalink: 'https://www.instagram.com/p/example2/'
    },
    {
        id: '3',
        imageUrl: '/images/placeholders/placeholder.jpg',
        caption: 'Behind the scenes of our advocacy training session. Teaching students how to effectively communicate complex scientific concepts to diverse audiences. 📚 #ScienceCommunication #Training',
        likes: 34,
        comments: 8,
        timestamp: '2024-12-05T16:45:00Z',
        permalink: 'https://www.instagram.com/p/example3/'
    }
]

export function InstagramFeed() {
    const [posts, setPosts] = useState<InstagramPost[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Simulate API call with loading state
        const loadPosts = async () => {
            try {
                setIsLoading(true)
                // In a real implementation, this would be an API call to Instagram
                // For now, we'll use mock data with a delay to simulate loading
                await new Promise(resolve => setTimeout(resolve, 1000))

                // Simulate potential API failure
                if (Math.random() < 0.1) { // 10% chance of failure for testing
                    throw new Error('Failed to load Instagram posts')
                }

                setPosts(mockInstagramPosts)
                setError(null)
            } catch (err) {
                setError('Unable to load Instagram posts at this time')
                console.error('Instagram feed error:', err)
            } finally {
                setIsLoading(false)
            }
        }

        loadPosts()
    }, [])

    const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp)
        const now = new Date()
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

        if (diffInHours < 1) return 'Just now'
        if (diffInHours < 24) return `${diffInHours}h ago`
        if (diffInHours < 48) return '1d ago'
        return date.toLocaleDateString()
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-science-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading Instagram posts...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                    <Instagram className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram Feed Unavailable</h3>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <Button
                        variant="outline"
                        className="border-science-blue text-science-blue hover:bg-science-blue hover:text-white"
                        asChild
                    >
                        <a
                            href="https://www.instagram.com/asiu.indiana"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="h-4 w-4 mr-2" />
                            Visit Instagram
                        </a>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative aspect-square">
                            <Image
                                src={post.imageUrl}
                                alt={post.caption}
                                fill
                                className="object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <CardContent className="p-4">
                            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                {post.caption}
                            </p>
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <Heart className="h-3 w-3" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <MessageCircle className="h-3 w-3" />
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                                <span>{formatTimestamp(post.timestamp)}</span>
                            </div>
                            <Button
                                size="sm"
                                variant="outline"
                                className="w-full border-science-blue text-science-blue hover:bg-science-blue hover:text-white"
                                asChild
                            >
                                <a
                                    href={post.permalink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    View Post
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center pt-6">
                <Button
                    variant="outline"
                    className="border-science-blue text-science-blue hover:bg-science-blue hover:text-white"
                    asChild
                >
                    <a
                        href="https://www.instagram.com/asiu.indiana"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram className="h-4 w-4 mr-2" />
                        Follow @asiu.indiana on Instagram
                    </a>
                </Button>
            </div>
        </div>
    )
}
