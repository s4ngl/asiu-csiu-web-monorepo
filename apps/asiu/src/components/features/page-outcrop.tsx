'use client'

import { Breadcrumb } from "@/components/navigation/breadcrumb"

interface BreadcrumbItem {
    label: string
    href?: string
}

interface PageOutcropProps {
    className?: string
    breadcrumbItems?: BreadcrumbItem[]
    showAffiliateText?: boolean
}

export function PageOutcrop({ className = "", breadcrumbItems, showAffiliateText = true }: PageOutcropProps) {
    return (
        <div className={`absolute bottom-0 right-0 z-30 ${className}`}>
            {/* Main white outcrop container */}
            <div className="relative bg-white shadow-lg rounded-l-lg">
                {/* Sigmoid curve on the left side */}
                <div className="absolute -left-3 top-0 w-6 h-full">
                    <svg
                        width="24"
                        height="100%"
                        viewBox="0 0 24 100"
                        className="h-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 100
       C 24 100, 0 10, 24 0
       L24 100"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.5"
                        />
                    </svg>
                </div>

                {/* Content container */}
                <div className="pl-5 pr-6 pt-2 pb-1">
                    {/* Breadcrumb navigation */}
                    {breadcrumbItems && breadcrumbItems.length > 0 && (
                        <Breadcrumb items={breadcrumbItems} />
                    )}

                    {/* Affiliate text (optional) */}
                    {showAffiliateText && (
                        <p className="text-sm text-gray-600 whitespace-nowrap">
                            Backed by Leading Researchers at Indiana University
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
