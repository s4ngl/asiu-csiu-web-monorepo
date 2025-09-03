import Image from "next/image"
import { generateAltText } from "@/lib/seo-helpers"

interface SEOImageProps {
  src: string
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  context?: string
  generateSchema?: boolean
}

export function SEOImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  context,
  generateSchema = false,
  ...props
}: SEOImageProps) {
  // Generate alt text if not provided
  const optimizedAlt = alt || generateAltText(src, context)

  // Generate image schema if requested
  const imageSchema = generateSchema ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": src.startsWith('http') ? src : `https://www.advocatesforscienceatiu.org${src}`,
    "description": optimizedAlt,
    "width": width,
    "height": height,
    "encodingFormat": src.includes('.webp') ? 'image/webp' :
      src.includes('.avif') ? 'image/avif' :
        src.includes('.png') ? 'image/png' : 'image/jpeg',
    "author": {
      "@type": "Organization",
      "name": "Advocates for Science @ IU"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Advocates for Science @ IU"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Concerned Scientists @ IU"
    },
    "creator": {
      "@type": "Organization",
      "name": "Concerned Scientists @ IU"
    }
  } : null

  return (
    <>
      {imageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageSchema)
          }}
        />
      )}
      <Image
        src={src}
        alt={optimizedAlt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        fill={fill}
        sizes={sizes}
        {...props}
      />
    </>
  )
}

// Enhanced Image component with lazy loading and SEO optimization
interface LazyImageProps extends SEOImageProps {
  loading?: "lazy" | "eager"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function LazyImage({
  loading = "lazy",
  placeholder = "empty",
  ...props
}: LazyImageProps) {
  return (
    <SEOImage
      {...props}
      // Force lazy loading unless priority is set
      priority={props.priority || false}
      placeholder={placeholder}
    />
  )
}

// Gallery component with schema markup
interface ImageGalleryProps {
  images: Array<{
    src: string
    alt?: string
    caption?: string
    width?: number
    height?: number
  }>
  className?: string
  generateSchema?: boolean
}

export function ImageGallery({ images, className, generateSchema = true }: ImageGalleryProps) {
  const gallerySchema = generateSchema ? {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Concerned Scientists @ IU Image Gallery",
    "description": "Image gallery showcasing events and activities from Concerned Scientists @ IU",
    "publisher": {
      "@type": "Organization",
      "name": "Concerned Scientists @ IU"
    },
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": img.src.startsWith('http') ? img.src : `https://www.advocatesforscienceatiu.org${img.src}`,
      "description": img.alt || generateAltText(img.src),
      "width": img.width,
      "height": img.height,
      "caption": img.caption
    }))
  } : null

  return (
    <>
      {gallerySchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(gallerySchema)
          }}
        />
      )}
      <div className={`grid gap-4 ${className}`}>
        {images.map((image, index) => (
          <figure key={index} className="relative">
            <SEOImage
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg"
            />
            {image.caption && (
              <figcaption className="mt-2 text-sm text-gray-600 text-center">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </>
  )
}
