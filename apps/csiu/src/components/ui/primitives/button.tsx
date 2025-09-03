"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs btn-filled",
        destructive:
          "bg-destructive text-white shadow-xs btn-filled",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs btn-filled",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  const [particles, setParticles] = React.useState<Array<{
    id: number
    x: number
    y: number
    vx: number
    vy: number
    opacity: number
  }>>([])
  const [isHovered, setIsHovered] = React.useState(false)
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const particleIdRef = React.useRef(0)

  // Performance optimizations
  const animationFrameRef = React.useRef<number | undefined>(undefined)
  const spawnIntervalRef = React.useRef<NodeJS.Timeout | undefined>(undefined)
  const cachedColor = React.useRef<string>("currentColor")
  const lastColorCheck = React.useRef<number>(0)

  // Get particle color from the actual button element (with caching)
  const getParticleColor = () => {
    if (!buttonRef.current) return cachedColor.current

    const now = Date.now()
    // Cache color for 100ms to avoid excessive getComputedStyle calls
    if (now - lastColorCheck.current < 100) {
      return cachedColor.current
    }

    const computedStyle = window.getComputedStyle(buttonRef.current)
    const color = computedStyle.backgroundColor

    cachedColor.current = color
    lastColorCheck.current = now
    return color
  }

  // Spawn particles on hover (optimized)
  React.useEffect(() => {
    if (!isHovered || !buttonRef.current) {
      // Clear any existing spawn interval
      if (spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current)
        spawnIntervalRef.current = undefined
      }
      return
    }

    const spawnParticle = () => {
      if (!buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Random position around the button
      const angle = Math.random() * Math.PI * 2
      const distance = 40 + Math.random() * 40 // 60-100px from center
      const x = centerX + Math.cos(angle) * distance
      const y = centerY + Math.sin(angle) * distance

      // Velocity toward the button center
      const dx = centerX - x
      const dy = centerY - y
      const speed = 0.5 + Math.random() * 1 // 0.5-1.5 pixels per frame
      const magnitude = Math.sqrt(dx * dx + dy * dy)
      const vx = (dx / magnitude) * speed
      const vy = (dy / magnitude) * speed

      const newParticle = {
        id: particleIdRef.current++,
        x,
        y,
        vx,
        vy,
        opacity: 1,
      }

      setParticles(prev => {
        // Limit maximum particles to prevent performance issues
        const maxParticles = 20
        const newParticles = [...prev, newParticle]
        return newParticles.slice(-maxParticles)
      })

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id))
      }, 2000)
    }

    spawnIntervalRef.current = setInterval(spawnParticle, 50)

    return () => {
      if (spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current)
        spawnIntervalRef.current = undefined
      }
    }
  }, [isHovered])

  // Animate particles (optimized)
  React.useEffect(() => {
    const animate = () => {
      setParticles(prev => {
        if (prev.length === 0) return prev // Skip if no particles

        const newParticles: typeof prev = []

        prev.forEach(particle => {
          const newX = particle.x + particle.vx
          const newY = particle.y + particle.vy

          // Check if particle has passed the button center
          if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            // Calculate distance from center
            const distanceFromCenter = Math.sqrt(
              Math.pow(newX - centerX, 2) + Math.pow(newY - centerY, 2)
            )

            // If particle has passed the center (distance is decreasing), remove it
            const currentDistance = Math.sqrt(
              Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2)
            )

            if (distanceFromCenter < currentDistance && distanceFromCenter < 20) {
              return // Skip this particle (don't add to newParticles)
            }
          }

          newParticles.push({
            ...particle,
            x: newX,
            y: newY,
            vx: particle.vx * 1.05, // Accelerate
            vy: particle.vy * 1.05,
            opacity: 1, // Full opacity
          })
        })

        return newParticles
      })

      // Continue animation only if there are particles
      if (particles.length > 0) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    // Start animation if there are particles
    if (particles.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = undefined
      }
    }
  }, [particles.length]) // Only re-run when particle count changes

  // Cleanup particles when component unmounts
  React.useEffect(() => {
    return () => {
      if (spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Comp
        ref={buttonRef}
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}

        {...props}
      >
        {children}
      </Comp>

      {/* Particle container */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              backgroundColor: getParticleColor(),
              opacity: 1,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export { Button, buttonVariants }
