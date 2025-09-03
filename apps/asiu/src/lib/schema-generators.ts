// FAQ Schema generation helper
export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Event Schema generation helper
export interface EventSchemaData {
  name: string
  description: string
  startDate: string
  endDate?: string
  location: {
    name: string
    address: {
      streetAddress?: string
      addressLocality: string
      addressRegion: string
      postalCode?: string
      addressCountry: string
    }
  }
  organizer: {
    name: string
    url?: string
  }
  image?: string
  offers?: {
    price: string
    priceCurrency: string
    availability: string
    url?: string
  }
}

export function generateEventSchema(event: EventSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.location.name,
      "address": {
        "@type": "PostalAddress",
        ...event.location.address
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": event.organizer.name,
      "url": event.organizer.url || "https://www.advocatesforscienceatiu.org"
    },
    ...(event.image && {
      "image": {
        "@type": "ImageObject",
        "url": event.image
      }
    }),
    ...(event.offers && {
      "offers": {
        "@type": "Offer",
        "price": event.offers.price,
        "priceCurrency": event.offers.priceCurrency,
        "availability": event.offers.availability,
        "url": event.offers.url
      }
    })
  }
}

// Article Schema generation helper
export interface ArticleSchemaData {
  headline: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  wordCount?: number
}

export function generateArticleSchema(article: ArticleSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://www.advocatesforscienceatiu.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Advocates for Science @ IU",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.advocatesforscienceatiu.org/icons/logo.svg"
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "url": article.url,
    ...(article.image && {
      "image": {
        "@type": "ImageObject",
        "url": article.image
      }
    }),
    ...(article.wordCount && {
      "wordCount": article.wordCount
    }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  }
}