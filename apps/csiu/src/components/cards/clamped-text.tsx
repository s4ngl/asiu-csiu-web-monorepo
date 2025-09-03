"use client"

import React from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/composite/tooltip"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ClampedTextProps {
    text: string
    className?: string
    asChild?: boolean
    children?: React.ReactElement<any>
}

export function ClampedText({ text, className, asChild, children }: ClampedTextProps) {
    const textRef = useRef<HTMLParagraphElement>(null)
    const [isClamped, setIsClamped] = useState(false)

    // Check if text is clamped
    useEffect(() => {
        const checkClamped = (element: HTMLParagraphElement | null) => {
            if (!element) return false
            return element.scrollHeight > element.clientHeight
        }

        setIsClamped(checkClamped(textRef.current))
    }, [text])

    if (asChild && children) {
        // Clone the child element and add our ref and classes
        const childElement = children
        const childProps: any = {
            ...childElement.props,
            ref: textRef,
            className: cn(childElement.props.className, className),
            children: text
        }

        if (isClamped) {
            return (
                <Tooltip>
                    <TooltipTrigger asChild>
                        {React.cloneElement(childElement, {
                            ...childProps,
                            className: cn(childProps.className, "cursor-help")
                        })}
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="max-w-xs">{text}</p>
                    </TooltipContent>
                </Tooltip>
            )
        }

        return React.cloneElement(childElement, childProps)
    }

    if (isClamped) {
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    <p ref={textRef} className={cn(className, "cursor-help")}>
                        {text}
                    </p>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="max-w-xs">{text}</p>
                </TooltipContent>
            </Tooltip>
        )
    }

    return (
        <p ref={textRef} className={className}>
            {text}
        </p>
    )
}
