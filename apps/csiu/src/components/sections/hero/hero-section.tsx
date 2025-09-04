'use client'

import { Button } from "@/components/ui/primitives/button"
import { VideoBackground } from "@/components/sections/hero/video-background"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href?: string
}

interface HeroSectionProps {
    title: string
    subtitle: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
    className?: string
    videoSrc?: string
    fallbackImage?: string
    overlayOpacity?: number
}

export function HeroSection({
    title,
    subtitle,
    primaryButtonText = "GET INVOLVED",
    primaryButtonLink = "/get-involved",
    secondaryButtonText = "LEARN MORE",
    secondaryButtonLink = "/about",
    className = "",
    videoSrc,
    fallbackImage = "/images/overlays/overlay-home.JPG",
    overlayOpacity = 0.4
}: HeroSectionProps) {
    return (
        <section className={`relative ${className}`}>
            <VideoBackground
                videoSrc={videoSrc}
                fallbackImage={fallbackImage}
                overlayOpacity={overlayOpacity}
            >
                <div className="flex items-center justify-start h-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-4xl">
                            {/* Headline */}
                            <h1 className="csiu-heading-lg text-csiu-white mb-6 text-left">
                                {title}
                            </h1>

                            {/* Subheadline */}
                            <p className="csiu-body-lg text-csiu-white mb-10 max-w-2xl text-left">
                                {subtitle}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6">
                                {primaryButtonText && (
                                    <Link href={primaryButtonLink}>
                                        <Button className="btn-csiu-primary">
                                            {primaryButtonText}
                                        </Button>
                                    </Link>
                                )}

                                {secondaryButtonText && (
                                    <Link href={secondaryButtonLink}>
                                        <Button className="btn-csiu-secondary">
                                            {secondaryButtonText}
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </VideoBackground>
        </section>
    )
}
