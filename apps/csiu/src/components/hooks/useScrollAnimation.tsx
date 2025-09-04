"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = true
}: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration = 600,
  distance = 50,
  direction = "up"
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)"
    
    switch (direction) {
      case "up":
        return `translate(0, ${distance}px)`
      case "down":
        return `translate(0, -${distance}px)`
      case "left":
        return `translate(${distance}px, 0)`
      case "right":
        return `translate(-${distance}px, 0)`
      default:
        return `translate(0, ${distance}px)`
    }
  }

  const animationStyle = {
    transform: getTransform(),
    opacity: isVisible ? 1 : 0,
    transition: `all ${duration}ms ease-out`,
    transitionDelay: `${delay}ms`,
  }

  return (
    <div
      ref={ref}
      className={className}
      style={animationStyle}
    >
      {children}
    </div>
  )
}