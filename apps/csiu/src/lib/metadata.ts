import type { Metadata } from "next"

// Base metadata configuration
export const baseMetadata: Metadata = {
  title: {
    default: "Concerned Scientists @ IU | Science Policy Advocacy",
    template: "%s | Concerned Scientists @ IU"
  },
  description: "Concerned Scientists @ IU (CSIU) is dedicated to promoting scientific integrity and evidence-based decision making in policy and society. Join our community of science advocates.",
  keywords: [
    "science policy",
    "advocacy",
    "Indiana University",
    "scientific integrity",
    "evidence-based policy",
    "science communication",
    "policy research",
    "climate policy",
    "environmental advocacy",
    "healthcare policy",
    "democracy",
    "CSIU",
    "Concerned Scientists",
    "Bloomington"
  ],
  authors: [{ name: "Concerned Scientists @ IU" }],
  creator: "Concerned Scientists @ IU",
  publisher: "Concerned Scientists @ IU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.csiub.org"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
      'en': '/'
    },
    types: {
      'application/rss+xml': [
        { url: '/rss.xml', title: 'Concerned Scientists @ IU RSS Feed' },
      ],
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.csiub.org",
    siteName: "Concerned Scientists @ IU",
    title: "Concerned Scientists @ IU | Science Policy Advocacy",
    description: "Concerned Scientists @ IU (CSIU) is dedicated to promoting scientific integrity and evidence-based decision making in policy and society.",
    images: [
      {
        url: "https://www.csiub.org/icons/logo.svg",
        width: 1200,
        height: 630,
        alt: "Concerned Scientists @ IU Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concerned Scientists @ IU | Science Policy Advocacy",
    description: "Concerned Scientists @ IU (CSIU) is dedicated to promoting scientific integrity and evidence-based decision making in policy and society.",
    images: ["https://www.csiub.org/icons/logo.svg"],
    creator: "@csiu_bloomington",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your actual Google Search Console verification code here
    // google: "your-actual-verification-code",
  },
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: "Concerned Scientists @ IU | Science Policy Advocacy",
    description: "Join Concerned Scientists @ IU (CSIU) in promoting scientific integrity and evidence-based decision making. Discover our latest advocacy efforts, events, and opportunities to get involved. Make a difference in science policy today!",
    keywords: [
      "science policy advocacy",
      "evidence-based decision making",
      "scientific integrity",
      "policy research",
      "science communication",
      "climate policy",
      "environmental advocacy",
      "healthcare policy",
      "democracy",
      "Indiana University",
      "Bloomington",
      "CSIU"
    ],
    openGraph: {
      title: "Concerned Scientists @ IU | Science Policy Advocacy",
      description: "Join Concerned Scientists @ IU (CSIU) in promoting scientific integrity and evidence-based decision making. Discover our latest advocacy efforts and opportunities.",
      url: "https://www.csiub.org",
      images: [
        {
          url: "https://www.csiub.org/icons/logo.svg",
          width: 1200,
          height: 630,
          alt: "Concerned Scientists @ IU Logo",
        },
      ],
    },
    twitter: {
      title: "Concerned Scientists @ IU | Science Policy Advocacy",
      description: "Join Concerned Scientists @ IU (CSIU) in promoting scientific integrity and evidence-based decision making.",
      images: ["https://www.csiub.org/icons/logo.svg"],
    },
  },
  about: {
    title: "About Us | Concerned Scientists @ IU",
    description: "Learn about Concerned Scientists @ IU (CSIU), our mission to promote scientific integrity, and our commitment to evidence-based policy making. Discover our story and values.",
    keywords: [
      "about CSIU",
      "Concerned Scientists @ IU",
      "mission statement",
      "scientific integrity",
      "evidence-based policy",
      "science advocacy",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "About Us | Concerned Scientists @ IU",
      description: "Learn about Concerned Scientists @ IU (CSIU), our mission to promote scientific integrity, and our commitment to evidence-based policy making.",
      url: "https://www.csiub.org/about",
      images: [
        {
          url: "https://www.csiub.org/images/overlays/overlay-about.JPG",
          width: 1200,
          height: 630,
          alt: "About Concerned Scientists @ IU",
        },
      ],
    },
    twitter: {
      title: "About Us | Concerned Scientists @ IU",
      description: "Learn about Concerned Scientists @ IU (CSIU), our mission to promote scientific integrity, and our commitment to evidence-based policy making.",
      images: ["https://www.csiub.org/images/overlays/overlay-about.JPG"],
    },
  },
  contact: {
    title: "Contact Us | Concerned Scientists @ IU",
    description: "Get in touch with Concerned Scientists @ IU (CSIU). Contact us for questions, collaboration opportunities, or to learn more about our science policy advocacy work.",
    keywords: [
      "contact CSIU",
      "Concerned Scientists @ IU",
      "get in touch",
      "collaboration",
      "science policy",
      "advocacy",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "Contact Us | Concerned Scientists @ IU",
      description: "Get in touch with Concerned Scientists @ IU (CSIU). Contact us for questions, collaboration opportunities, or to learn more about our work.",
      url: "https://www.csiub.org/contact",
      images: [
        {
          url: "https://www.csiub.org/images/overlays/overlay-contact.JPG",
          width: 1200,
          height: 630,
          alt: "Contact Concerned Scientists @ IU",
        },
      ],
    },
    twitter: {
      title: "Contact Us | Concerned Scientists @ IU",
      description: "Get in touch with Concerned Scientists @ IU (CSIU). Contact us for questions, collaboration opportunities, or to learn more about our work.",
      images: ["https://www.csiub.org/images/overlays/overlay-contact.JPG"],
    },
  },
  getInvolved: {
    title: "Get Involved | Concerned Scientists @ IU",
    description: "Join Concerned Scientists @ IU (CSIU) in our mission to promote scientific integrity and evidence-based policy making. Discover ways to get involved and make a difference.",
    keywords: [
      "get involved",
      "join CSIU",
      "Concerned Scientists @ IU",
      "volunteer",
      "science advocacy",
      "policy making",
      "scientific integrity",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "Get Involved | Concerned Scientists @ IU",
      description: "Join Concerned Scientists @ IU (CSIU) in our mission to promote scientific integrity and evidence-based policy making.",
      url: "https://www.csiub.org/get-involved",
      images: [
        {
          url: "https://www.csiub.org/images/overlays/overlay-get-involved.JPG",
          width: 1200,
          height: 630,
          alt: "Get Involved with Concerned Scientists @ IU",
        },
      ],
    },
    twitter: {
      title: "Get Involved | Concerned Scientists @ IU",
      description: "Join Concerned Scientists @ IU (CSIU) in our mission to promote scientific integrity and evidence-based policy making.",
      images: ["https://www.csiub.org/images/overlays/overlay-get-involved.JPG"],
    },
  },
  news: {
    title: "News & Events | Concerned Scientists @ IU",
    description: "Stay updated with the latest news, events, and activities from Concerned Scientists @ IU (CSIU). Discover our advocacy efforts and community initiatives.",
    keywords: [
      "CSIU news",
      "Concerned Scientists @ IU events",
      "science policy news",
      "advocacy events",
      "community initiatives",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "News & Events | Concerned Scientists @ IU",
      description: "Stay updated with the latest news, events, and activities from Concerned Scientists @ IU (CSIU).",
      url: "https://www.csiub.org/news",
      images: [
        {
          url: "https://www.csiub.org/images/overlays/overlay-news.JPG",
          width: 1200,
          height: 630,
          alt: "News & Events from Concerned Scientists @ IU",
        },
      ],
    },
    twitter: {
      title: "News & Events | Concerned Scientists @ IU",
      description: "Stay updated with the latest news, events, and activities from Concerned Scientists @ IU (CSIU).",
      images: ["https://www.csiub.org/images/overlays/overlay-news.JPG"],
    },
  },
  team: {
    title: "Our Team | Concerned Scientists @ IU",
    description: "Meet the dedicated team behind Concerned Scientists @ IU (CSIU). Learn about our leadership, committee members, and the people driving our science policy advocacy.",
    keywords: [
      "CSIU team",
      "Concerned Scientists @ IU leadership",
      "committee members",
      "science advocates",
      "policy experts",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "Our Team | Concerned Scientists @ IU",
      description: "Meet the dedicated team behind Concerned Scientists @ IU (CSIU). Learn about our leadership and committee members.",
      url: "https://www.csiub.org/team",
      images: [
        {
          url: "https://www.csiub.org/icons/logo.svg",
          width: 1200,
          height: 630,
          alt: "Concerned Scientists @ IU Team",
        },
      ],
    },
    twitter: {
      title: "Our Team | Concerned Scientists @ IU",
      description: "Meet the dedicated team behind Concerned Scientists @ IU (CSIU). Learn about our leadership and committee members.",
      images: ["https://www.csiub.org/icons/logo.svg"],
    },
  },
  newsletterSignups: {
    title: "Newsletter Signups | Concerned Scientists @ IU",
    description: "View newsletter signups and manage subscriptions for Concerned Scientists @ IU (CSIU). Stay connected with our latest updates and advocacy efforts.",
    keywords: [
      "newsletter signups",
      "CSIU subscriptions",
      "email updates",
      "science policy news",
      "advocacy updates",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "Newsletter Signups | Concerned Scientists @ IU",
      description: "View newsletter signups and manage subscriptions for Concerned Scientists @ IU (CSIU).",
      url: "https://www.csiub.org/newsletter-signups",
      images: [
        {
          url: "https://www.csiub.org/icons/logo.svg",
          width: 1200,
          height: 630,
          alt: "Concerned Scientists @ IU Newsletter",
        },
      ],
    },
    twitter: {
      title: "Newsletter Signups | Concerned Scientists @ IU",
      description: "View newsletter signups and manage subscriptions for Concerned Scientists @ IU (CSIU).",
      images: ["https://www.csiub.org/icons/logo.svg"],
    },
  },
  accessibility: {
    title: "Accessibility | Concerned Scientists @ IU",
    description: "Learn about Concerned Scientists @ IU (CSIU) commitment to accessibility and inclusive design. Ensuring our website and resources are accessible to all users.",
    keywords: [
      "accessibility",
      "inclusive design",
      "CSIU accessibility",
      "web accessibility",
      "inclusive technology",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "Accessibility | Concerned Scientists @ IU",
      description: "Learn about Concerned Scientists @ IU (CSIU) commitment to accessibility and inclusive design.",
      url: "https://www.csiub.org/accessibility",
      images: [
        {
          url: "https://www.csiub.org/icons/logo.svg",
          width: 1200,
          height: 630,
          alt: "Accessibility at Concerned Scientists @ IU",
        },
      ],
    },
    twitter: {
      title: "Accessibility | Concerned Scientists @ IU",
      description: "Learn about Concerned Scientists @ IU (CSIU) commitment to accessibility and inclusive design.",
      images: ["https://www.csiub.org/icons/logo.svg"],
    },
  },
  privacy: {
    title: "Privacy Policy | Concerned Scientists @ IU",
    description: "Read Concerned Scientists @ IU (CSIU) privacy policy to understand how we collect, use, and protect your personal information and data.",
    keywords: [
      "privacy policy",
      "data protection",
      "CSIU privacy",
      "personal information",
      "data security",
      "Indiana University",
      "Bloomington"
    ],
    openGraph: {
      title: "Privacy Policy | Concerned Scientists @ IU",
      description: "Read Concerned Scientists @ IU (CSIU) privacy policy to understand how we protect your personal information.",
      url: "https://www.csiub.org/privacy",
      images: [
        {
          url: "https://www.csiub.org/icons/logo.svg",
          width: 1200,
          height: 630,
          alt: "Privacy Policy for Concerned Scientists @ IU",
        },
      ],
    },
    twitter: {
      title: "Privacy Policy | Concerned Scientists @ IU",
      description: "Read Concerned Scientists @ IU (CSIU) privacy policy to understand how we protect your personal information.",
      images: ["https://www.csiub.org/icons/logo.svg"],
    },
  },
}

// Structured data for different page types
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "name": "Concerned Scientists @ IU",
    "alternateName": "CSIU",
    "description": "Concerned Scientists @ IU (CSIU) is dedicated to promoting scientific integrity and evidence-based decision making in policy and society.",
    "url": "https://www.csiub.org",
    "logo": "https://www.csiub.org/icons/logo.svg",
    "image": "https://www.csiub.org/icons/logo.svg",
    "sameAs": [
      "https://www.facebook.com/CSIUB/",
      "https://www.instagram.com/csiu_bloomington/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bloomington",
      "addressRegion": "IN",
      "addressCountry": "US",
      "postalCode": "47405"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "general",
      "email": "info@csiub.org"
    },
    "foundingDate": "2024",
    "location": {
      "@type": "Place",
      "name": "Indiana University Bloomington",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bloomington",
        "addressRegion": "IN",
        "addressCountry": "US",
        "postalCode": "47405"
      }
    },
    "member": [
      {
        "@type": "Person",
        "name": "Dr. Sarah Patel",
        "jobTitle": "Co-President",
        "description": "Undergraduate in Public Policy and Biology specializing in science communication"
      },
      {
        "@type": "Person",
        "name": "Dr. Rebecca Foster",
        "jobTitle": "Faculty Advisor",
        "description": "Professor of Environmental Policy and Director of the Science Policy Institute at IU"
      }
    ]
  },
  news: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "News - Concerned Scientists @ IU",
    "description": "Stay updated with our latest news bulletins, articles, and educational content about science policy and advocacy.",
    "url": "https://www.csiub.org/news",
    "mainEntity": {
      "@type": "ItemList",
      "name": "News Articles",
      "description": "Latest news and articles from Concerned Scientists @ IU",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "headline": "Science Policy Updates",
            "description": "Latest developments in science policy and advocacy",
            "author": {
              "@type": "Organization",
              "name": "Concerned Scientists @ IU"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Concerned Scientists @ IU",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.csiub.org/logo.svg"
              }
            },
            "datePublished": "2024-12-15",
            "dateModified": "2024-12-15"
          }
        }
      ]
    },
    "potentialAction": {
      "@type": "SubscribeAction",
      "target": "https://www.csiub.org/news",
      "description": "Subscribe to our news updates"
    }
  },
  privacy: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Concerned Scientists @ IU",
    "description": "Learn about our privacy practices and how we protect your personal information",
    "url": "https://www.csiub.org/privacy",
    "mainEntity": {
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Privacy policy for Concerned Scientists @ IU"
    }
  },
  accessibility: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Accessibility Statement - Concerned Scientists @ IU",
    "description": "Learn about our commitment to digital accessibility and inclusive design",
    "url": "https://www.csiub.org/accessibility",
    "mainEntity": {
      "@type": "WebPage",
      "name": "Accessibility Statement",
      "description": "Accessibility statement for Concerned Scientists @ IU"
    }
  }
}

// Helper function to merge base metadata with page-specific metadata
export function getPageMetadata(page: keyof typeof pageMetadata): Metadata {
  const pageMeta = pageMetadata[page]
  return {
    ...baseMetadata,
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: [...baseMetadata.keywords!, ...pageMeta.keywords],
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageMeta.openGraph.title,
      description: pageMeta.openGraph.description,
      url: pageMeta.openGraph.url || baseMetadata.openGraph?.url,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageMeta.twitter.title,
      description: pageMeta.twitter.description,
    },
  }
}

// Helper function to get breadcrumb structured data
export function getBreadcrumbData(path: string, title: string) {
  const baseUrl = "https://www.csiub.org"
  const pathSegments = path.split('/').filter(Boolean)

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    }
  ]

  let currentPath = ""
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const position = index + 2
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

    breadcrumbItems.push({
      "@type": "ListItem",
      "position": position,
      "name": name,
      "item": `${baseUrl}${currentPath}`
    })
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  }
}

// Helper function to get structured data for a page
export function getStructuredData(page: keyof typeof structuredData) {
  return structuredData[page]
}
