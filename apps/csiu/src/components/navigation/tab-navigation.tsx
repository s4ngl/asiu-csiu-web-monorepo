'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/composite/tabs"
import { ReactNode } from 'react'

interface TabNavigationProps {
    defaultValue: string
    children: ReactNode
    basePath: string
    validTabs: string[]
}

export function TabNavigation({ defaultValue, children, basePath, validTabs }: TabNavigationProps) {
    const router = useRouter()
    const pathname = usePathname()

    const handleTabChange = (value: string) => {
        if (value === defaultValue) {
            // Navigate to base path (e.g., /news, /events)
            router.push(basePath)
        } else {
            // Navigate to tab-specific path (e.g., /news/articles, /events/recent)
            router.push(`${basePath}/${value}`)
        }
    }

    return (
        <Tabs value={defaultValue} onValueChange={handleTabChange} className="w-full">
            {children}
        </Tabs>
    )
}
