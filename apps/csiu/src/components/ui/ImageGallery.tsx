"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/primitives/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageItem {
  src: string
  alt: string
  title: string
  description?: string
}

interface ImageGalleryProps {
  images?: ImageItem[]
  className?: string
}

const defaultImages: ImageItem[] = [
  {
    src: "https://via.placeholder.com/600x400.png?text=Science+Advocacy+Forum",
    alt: "Scientists and advocates gathered at a science policy forum discussing evidence-based decision making",
    title: "Science Advocacy Forum",
    description: "Community gathering focused on science policy and advocacy"
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Research+Presentation",
    alt: "Researcher presenting scientific findings to policymakers and community members",
    title: "Research Presentation",
    description: "Bridging the gap between research and policy"
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Community+Outreach",
    alt: "CSIU members engaging with community members at an educational outreach event",
    title: "Community Outreach",
    description: "Engaging with the public about science and policy"
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Legislative+Meeting",
    alt: "Science advocates meeting with legislators to discuss research funding and policy issues",
    title: "Legislative Meeting",
    description: "Advocating for science-based policy decisions"
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Student+Workshop",
    alt: "Students participating in a science communication and advocacy training workshop",
    title: "Student Workshop",
    description: "Training the next generation of science advocates"
  },
  {
    src: "https://via.placeholder.com/600x400.png?text=Climate+Action+Rally",
    alt: "Participants holding signs at a climate action rally promoting evidence-based environmental policy",
    title: "Climate Action Rally",
    description: "Standing up for climate science and environmental protection"
  }
]

export function ImageGallery({ images = defaultImages, className = "" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navigateImage('prev')
    if (e.key === 'ArrowRight') navigateImage('next')
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg bg-csiu-gray-light cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="csiu-heading-xs text-white mb-1">{image.title}</h3>
                  {image.description && (
                    <p className="csiu-body text-sm text-white opacity-90">{image.description}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 z-10"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 z-10"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="csiu-heading-sm text-white mb-2">{images[selectedImage].title}</h3>
              {images[selectedImage].description && (
                <p className="csiu-body text-white opacity-90">{images[selectedImage].description}</p>
              )}
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            <span className="csiu-body text-sm">
              {selectedImage + 1} of {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}