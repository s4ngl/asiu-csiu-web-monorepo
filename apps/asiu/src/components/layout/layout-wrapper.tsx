import type React from "react"
import { Navigation } from "./navigation"
import { Footer } from "./footer"
import { ScrollIndicator } from "../sections/scroll-indicator"
import { PageTransition } from "./page-transition"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  )
}
