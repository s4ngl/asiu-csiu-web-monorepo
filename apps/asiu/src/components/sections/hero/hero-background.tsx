'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface HeroBackgroundProps {
    className?: string
    starColor?: string
    starSize?: number
    starCount?: number
    starMinScale?: number
    overflowThreshold?: number
    minVelocityMode?: boolean // New option: when true, minimum velocity is more than zero
    overlayImage?: string // Path to overlay image
    overlayOpacity?: number // Opacity of overlay (0-1)
}

export function HeroBackground({
    className = '',
    starColor = '#fff',
    starSize = 2,
    starCount,
    starMinScale = 0.2,
    overflowThreshold = 50,
    minVelocityMode = true,
    overlayImage,
    overlayOpacity = 0.3
}: HeroBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const animationRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const context = canvas.getContext('2d')
        if (!context) return

        let scale = 1 // device pixel ratio
        let width: number
        let height: number
        let stars: Array<{ x: number; y: number; z: number }> = []
        let pointerX: number | null = null
        let pointerY: number | null = null
        let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 }
        let touchInput = false

        // Set minimum velocity when minVelocityMode is enabled
        if (minVelocityMode) {
            velocity.z = 0.005 // Higher minimum velocity for more active animation
        }

        // Calculate star count based on window size if not provided
        const calculatedStarCount = starCount || Math.floor((window.innerWidth + window.innerHeight) / 8)

        function generate() {
            stars = []
            for (let i = 0; i < calculatedStarCount; i++) {
                stars.push({
                    x: 0,
                    y: 0,
                    z: starMinScale + Math.random() * (1 - starMinScale)
                })
            }
        }

        function placeStar(star: { x: number; y: number; z: number }) {
            star.x = Math.random() * width
            star.y = Math.random() * height
        }

        function recycleStar(star: { x: number; y: number; z: number }) {
            let direction = 'z'
            let vx = Math.abs(velocity.x)
            let vy = Math.abs(velocity.y)

            if (vx > 1 || vy > 1) {
                let axis
                if (vx > vy) {
                    axis = Math.random() < vx / (vx + vy) ? 'h' : 'v'
                } else {
                    axis = Math.random() < vy / (vx + vy) ? 'v' : 'h'
                }

                if (axis === 'h') {
                    direction = velocity.x > 0 ? 'l' : 'r'
                } else {
                    direction = velocity.y > 0 ? 't' : 'b'
                }
            }

            star.z = starMinScale + Math.random() * (1 - starMinScale)

            if (direction === 'z') {
                star.z = 0.1
                star.x = Math.random() * width
                star.y = Math.random() * height
            } else if (direction === 'l') {
                star.x = -overflowThreshold
                star.y = height * Math.random()
            } else if (direction === 'r') {
                star.x = width + overflowThreshold
                star.y = height * Math.random()
            } else if (direction === 't') {
                star.x = width * Math.random()
                star.y = -overflowThreshold
            } else if (direction === 'b') {
                star.x = width * Math.random()
                star.y = height + overflowThreshold
            }
        }

        function resize() {
            if (!canvas) return
            scale = window.devicePixelRatio || 1
            width = window.innerWidth * scale
            height = window.innerHeight * scale

            canvas.width = width
            canvas.height = height

            stars.forEach((star) => placeStar(star))
        }

        function update() {
            velocity.tx *= 0.96
            velocity.ty *= 0.96

            velocity.x += (velocity.tx - velocity.x) * 0.8
            velocity.y += (velocity.ty - velocity.y) * 0.8

            // Maintain minimum velocity when minVelocityMode is enabled
            if (minVelocityMode) {
                // Add subtle random movement when no user input
                if (Math.abs(velocity.x) < 0.1 && Math.abs(velocity.y) < 0.1) {
                    velocity.x += (Math.random() - 0.5) * 0.02
                    velocity.y += (Math.random() - 0.5) * 0.02
                }
            }

            stars.forEach((star) => {
                star.x += velocity.x * star.z
                star.y += velocity.y * star.z

                star.x += (star.x - width / 2) * velocity.z * star.z
                star.y += (star.y - height / 2) * velocity.z * star.z
                star.z += velocity.z

                // recycle when out of bounds
                if (
                    star.x < -overflowThreshold ||
                    star.x > width + overflowThreshold ||
                    star.y < -overflowThreshold ||
                    star.y > height + overflowThreshold
                ) {
                    recycleStar(star)
                }
            })
        }

        function render() {
            if (!context) return
            stars.forEach((star) => {
                context.beginPath()
                context.lineCap = 'round'
                context.lineWidth = starSize * star.z * scale
                context.globalAlpha = 0.5 + 0.5 * Math.random()
                context.strokeStyle = starColor

                context.beginPath()
                context.moveTo(star.x, star.y)

                let tailX = velocity.x * 2
                let tailY = velocity.y * 2

                // stroke() won't work on an invisible line
                if (Math.abs(tailX) < 0.1) tailX = 0.5
                if (Math.abs(tailY) < 0.1) tailY = 0.5

                context.lineTo(star.x + tailX, star.y + tailY)
                context.stroke()
            })
        }

        function step() {
            if (!context) return
            context.clearRect(0, 0, width, height)
            update()
            render()
            // Throttle animation for better performance
            animationRef.current = requestAnimationFrame(step)
        }

        function movePointer(x: number, y: number) {
            if (typeof pointerX === 'number' && typeof pointerY === 'number') {
                let ox = x - pointerX
                let oy = y - pointerY

                velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1)
                velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1)
            }

            pointerX = x
            pointerY = y
        }

        function onMouseMove(event: MouseEvent) {
            if (!container) return

            const rect = container.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            // Only respond if mouse is within the hero section
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                touchInput = false
                movePointer(event.clientX, event.clientY)
            }
        }

        function onTouchMove(event: TouchEvent) {
            if (!container) return

            const rect = container.getBoundingClientRect()
            const x = event.touches[0].clientX - rect.left
            const y = event.touches[0].clientY - rect.top

            // Only respond if touch is within the hero section
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                touchInput = true
                movePointer(event.touches[0].clientX, event.touches[0].clientY)
                // Don't prevent default to allow normal scrolling
                // The animation will still work but won't interfere with scrolling
            }
        }

        function onMouseLeave() {
            pointerX = null
            pointerY = null
        }

        // Initialize
        generate()
        resize()
        step()

        // Event listeners
        window.addEventListener('resize', resize)
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('touchmove', onTouchMove, { passive: false })
        document.addEventListener('touchend', onMouseLeave)
        document.addEventListener('mouseleave', onMouseLeave)

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            window.removeEventListener('resize', resize)
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('touchmove', onTouchMove)
            document.removeEventListener('touchend', onMouseLeave)
            document.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [starColor, starSize, starCount, starMinScale, overflowThreshold, minVelocityMode, overlayImage, overlayOpacity])

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            style={{ zIndex: 1 }}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), transparent), radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent)',
                    touchAction: 'pan-y' // Allow vertical scrolling on touch devices
                }}
            />

            {/* Overlay Image - Optimized for LCP */}
            {overlayImage && (
                <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                    <Image
                        src={overlayImage}
                        alt=""
                        fill
                        priority
                        className="object-cover"
                        style={{ opacity: overlayOpacity }}
                    />
                </div>
            )}

            {/* Gradient Background */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at top right, rgba(0, 0, 0, 0.13), transparent), radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.13), transparent)',
                    zIndex: 2
                }}
            />

            {/* Particle Effect Canvas (Overlay) */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    touchAction: 'pan-y', // Allow vertical scrolling on touch devices
                    zIndex: 3
                }}
            />
        </div>
    )
}
