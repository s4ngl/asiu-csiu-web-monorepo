'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface VideoBackgroundProps {
  videoSrc?: string
  fallbackImage?: string
  className?: string
  overlayOpacity?: number
  children?: React.ReactNode
}

export function VideoBackground({
  videoSrc = "/videos/hero-bg.mp4", // Default video path
  fallbackImage = "/images/overlays/overlay-home.JPG", // Fallback for mobile/slow connections
  className = "",
  overlayOpacity = 0.4,
  children
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Check if we should show video (not on mobile for performance)
    const shouldShowVideo = window.innerWidth >= 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (shouldShowVideo) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true)
        setTimeout(() => setShowVideo(true), 100) // Small delay for smooth transition
      })

      video.addEventListener('error', () => {
        console.log('Video failed to load, using fallback image')
        setIsVideoLoaded(false)
      })

      // Attempt to load and play video
      video.load()
    }

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', () => {})
        video.removeEventListener('error', () => {})
      }
    }
  }, [])

  return (
    <div className={`relative w-full h-screen min-h-screen overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          showVideo && isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 1 }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Fallback Image */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
          showVideo && isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: 2 }}
      >
        <Image
          src={fallbackImage}
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-csiu-primary-dark"
        style={{ 
          opacity: overlayOpacity,
          zIndex: 3
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}