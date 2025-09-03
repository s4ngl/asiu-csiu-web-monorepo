'use client'

import { useState } from "react"
import { Button } from "@/components/ui/primitives/button"
import { Input } from "@/components/ui/primitives/input"
import { Mail } from "lucide-react"
import { useToast } from "@/components/ui/feedback/toast"

interface NewsletterSignupProps {
    className?: string
    placeholder?: string
    buttonText?: string
}

export function NewsletterSignup({
    className = "",
    placeholder = "johndoe@example.com",
    buttonText = "Subscribe"
}: NewsletterSignupProps) {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { showToast } = useToast()

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleSubscribe = async () => {
        // Validate email
        if (!email.trim()) {
            showToast("Please enter an email address", "error")
            return
        }

        if (!validateEmail(email)) {
            showToast("Please enter a valid email address", "error")
            return
        }

        setIsLoading(true)

        try {
            // Send subscription email
            const response = await fetch('/newsletter-subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            if (response.ok) {
                const result = await response.json()
                showToast("Thank you! Your subscription request has been received.", "success")
                setEmail("")
            } else {
                const error = await response.json()
                showToast(error.message || "Failed to subscribe. Please try again.", "error")
            }
        } catch (error) {
            showToast("Network error. Please check your connection and try again.", "error")
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubscribe()
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSubscribe()
            }}
            className={`flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto ${className}`}
            aria-label="Newsletter subscription form"
            suppressHydrationWarning
        >
            <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                disabled={isLoading}
                aria-label="Email address for newsletter subscription"
                aria-describedby="email-help"
                aria-invalid={email && !validateEmail(email) ? "true" : "false"}
                required
                suppressHydrationWarning
            />
            <Button
                type="submit"
                disabled={isLoading}
                className="bg-science-blue text-white"
                aria-label={isLoading ? "Subscribing to newsletter..." : `Subscribe to newsletter with email: ${email}`}
            >
                {isLoading ? (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                        <span>Subscribing...</span>
                    </div>
                ) : (
                    <>
                        <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span>{buttonText}</span>
                    </>
                )}
            </Button>
            <div id="email-help" className="sr-only">
                Enter your email address to subscribe to our newsletter
            </div>
        </form>
    )
}
