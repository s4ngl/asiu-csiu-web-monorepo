'use client'

import { Button } from "@/components/ui/primitives/button"
import { NewsletterSignup } from "@/components/forms/newsletter-signup"
import { HeroBackground } from "@/components/sections/hero/hero-background"
import { PageOutcrop } from "@/components/features/page-outcrop"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href?: string
}

interface HeroSectionProps {
    title: string
    subtitle: string
    showLogo?: boolean
    logoPath?: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    secondaryButtonLink?: string
    showNewsletter?: boolean
    backgroundGradient?: string
    className?: string
    overlayImage?: string
    overlayOpacity?: number
    showPageOutcrop?: boolean
    breadcrumbItems?: BreadcrumbItem[]
}

export function HeroSection({
    title,
    subtitle,
    showLogo = true,
    logoPath = "/icons/logo.svg",
    primaryButtonText = "Get Involved",
    primaryButtonLink = "/get-involved",
    secondaryButtonText = "Donate Now",
    secondaryButtonLink = "#",
    showNewsletter = true,
    backgroundGradient = "from-blue-50 to-red-50",
    className = "",
    overlayImage,
    overlayOpacity = 1,
    showPageOutcrop = false,
    breadcrumbItems
}: HeroSectionProps) {
    return (
        <section className={`relative bg-gradient-to-r ${backgroundGradient} pt-36 pb-32 overflow-hidden min-h-[200px] ${className}`}>
            <HeroBackground
                starColor="#FFFFFF"
                starSize={2}
                starCount={30}
                className="opacity-100"
                overlayImage={overlayImage}
                overlayOpacity={overlayOpacity}
            />
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center min-h-[200px]">
                {/* {showLogo && (
                    <div className="mb-8">
                        <div className="w-48 h-48 mx-auto relative">
                            <Image
                                src={logoPath}
                                alt="ASIU Logo"
                                width={108}
                                height={108}
                                className="w-full h-full relative z-10"
                                priority
                            />
                        </div>
                    </div>
                )} */}

                <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8" dangerouslySetInnerHTML={{ __html: title }} />

                <p className="text-xl text-white max-w-3xl mx-auto">
                    {subtitle}
                </p>

                {(primaryButtonText || secondaryButtonText) && (<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 mt-10">
                    {primaryButtonText && (
                        <Link href={primaryButtonLink}>
                            <Button size="lg" className="bg-science-blue text-white">
                                {primaryButtonText}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    )}

                    {secondaryButtonText && (
                        secondaryButtonLink?.startsWith('http') ? (
                            <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer">
                                <Button
                                    size="lg"
                                    className="border-science-green text-science-green bg-white hover:text-science-green"
                                >
                                    {secondaryButtonText}
                                </Button>
                            </a>
                        ) : (
                            <Link href={secondaryButtonLink || "#"}>
                                <Button
                                    size="lg"
                                    className="border-science-green text-science-green bg-white hover:text-science-green"
                                >
                                    {secondaryButtonText}
                                </Button>
                            </Link>
                        )
                    )}
                </div>)}

                {/* {showNewsletter && <NewsletterSignup />} */}
            </div>

            {/* Page Outcrop with optional breadcrumbs */}
            {showPageOutcrop && (
                <PageOutcrop
                    breadcrumbItems={breadcrumbItems}
                    showAffiliateText={!breadcrumbItems || breadcrumbItems.length === 0}
                />
            )}
        </section>
    )
}
