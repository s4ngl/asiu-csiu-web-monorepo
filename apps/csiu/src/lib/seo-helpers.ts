import type { Metadata } from 'next'

// Helper function to generate consistent meta tags across pages
export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonical?: string
  noIndex?: boolean
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function generateSEO(config: SEOConfig): Metadata {
  const baseUrl = 'https://www.advocatesforscienceatiu.org'
  const canonicalUrl = config.canonical ? `${baseUrl}${config.canonical}` : baseUrl
  const imageUrl = config.image || `${baseUrl}/icons/logo.svg`

  // Ensure description is between 120-160 characters for optimal SEO
  const optimizedDescription = config.description.length > 160
    ? config.description.substring(0, 157) + '...'
    : config.description

  return {
    title: config.title,
    description: optimizedDescription,
    keywords: config.keywords || [],

    // Open Graph
    openGraph: {
      type: config.type || 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'Concerned Scientists @ IU',
      title: config.title,
      description: optimizedDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      ...(config.type === 'article' && {
        publishedTime: config.publishedTime,
        modifiedTime: config.modifiedTime,
        authors: config.author ? [config.author] : ['Concerned Scientists @ IU'],
        section: config.section || 'Science Policy',
      }),
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: optimizedDescription,
      images: [imageUrl],
      creator: '@asiu_indiana',
      site: '@asiu_indiana',
    },

    // Canonical URL
    alternates: {
      canonical: config.canonical || '/',
    },

    // Robots
    robots: {
      index: !config.noIndex,
      follow: true,
      googleBot: {
        index: !config.noIndex,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Helper function to create article-specific SEO
export function generateArticleSEO(config: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  author?: string
  image?: string
  canonical: string
  keywords?: string[]
}): Metadata {
  return generateSEO({
    ...config,
    type: 'article',
    modifiedTime: config.modifiedTime || config.publishedTime,
    author: config.author || 'Concerned Scientists @ IU',
  })
}

// Helper function to create breadcrumb JSON-LD
export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.advocatesforscienceatiu.org',
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.name,
      ...(item.url && { item: `https://www.advocatesforscienceatiu.org${item.url}` }),
    })),
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  }
}

// Helper function to validate meta description length
export function validateMetaDescription(description: string): {
  isValid: boolean
  length: number
  recommendation: string
} {
  const length = description.length

  if (length < 120) {
    return {
      isValid: false,
      length,
      recommendation: 'Meta description is too short. Aim for 120-160 characters for better SEO.',
    }
  }

  if (length > 160) {
    return {
      isValid: false,
      length,
      recommendation: 'Meta description is too long. Keep it under 160 characters to avoid truncation.',
    }
  }

  return {
    isValid: true,
    length,
    recommendation: 'Meta description length is optimal for SEO.',
  }
}

// Helper function to generate keyword-rich alt text
export function generateAltText(imageName: string, context?: string): string {
  const baseAlt = imageName
    .replace(/\.(jpg|jpeg|png|webp|svg)$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  if (context) {
    return `${baseAlt} - ${context} | Concerned Scientists @ IU`
  }

  return `${baseAlt} | Concerned Scientists @ IU`
}
