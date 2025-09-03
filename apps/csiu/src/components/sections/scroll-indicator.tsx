"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

// Custom hook to detect mobile menu state
function useMobileMenuState() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleMenuStateChange = () => {
            const mobileMenu = document.getElementById('mobile-menu')
            if (mobileMenu) {
                const isVisible = mobileMenu.classList.contains('visible')
                setIsMobileMenuOpen(isVisible)
            }
        }

        // Create a MutationObserver to watch for class changes on the mobile menu
        const observer = new MutationObserver(handleMenuStateChange)
        const mobileMenu = document.getElementById('mobile-menu')

        if (mobileMenu) {
            observer.observe(mobileMenu, { attributes: true, attributeFilter: ['class'] })
            handleMenuStateChange() // Check initial state
        }

        return () => observer.disconnect()
    }, [])

    return isMobileMenuOpen
}

export function ScrollIndicator() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [hasInitialized, setHasInitialized] = useState(false)
    const isMobileMenuOpen = useMobileMenuState()

    useEffect(() => {
        setIsMounted(true)

        const handleScroll = () => {
            if (typeof window === 'undefined') return

            const scrollTop = window.scrollY
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollPercentage = (scrollTop + windowHeight) / documentHeight

            // Hide indicator when user is near the bottom (last 10% of the page)
            setIsVisible(scrollPercentage < 0.9)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", handleScroll)

            // Add a small delay before showing the indicator on page load
            const timer = setTimeout(() => {
                setIsVisible(true)
                // Now start listening to scroll changes
                handleScroll()
            }, 2000) // 1 second delay

            return () => {
                window.removeEventListener("scroll", handleScroll)
                clearTimeout(timer)
            }
        }
    }, [])

    // Don't render anything until component is mounted on client
    if (!isMounted) return null

    // Hide scroll indicator when mobile menu is open
    if (isMobileMenuOpen) return null

    return (
        <div
            className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
        >
            {/* Curved outcrop with gradient */}
            <div className="relative">
                <div className="w-20 h-10 bg-gray-900 rounded-t-full shadow-lg"></div>

                {/* Animated arrows pointing down */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {/* Animated arrows */}
                    <div className="-space-y-6">
                        <ChevronDown className="w-8 h-8 text-white" style={{ animation: "arrowBounce 2s infinite" }} />
                        {/* <ChevronDown className="w-8 h-8 text-white" style={{ animation: "arrowBounce 2s infinite", animationDelay: "0.1s" }} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
