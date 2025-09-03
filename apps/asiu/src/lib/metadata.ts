import type { Metadata } from "next"

// Base metadata configuration
export const baseMetadata: Metadata = {
  title: {
    default: "Advocates for Science @ IU | Science Policy Advocacy",
    template: "%s | Advocates for Science @ IU"
  },
  description: "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society. Join our community of science advocates.",
  keywords: [
    "science policy",
    "advocacy",
    "Indiana University",
    "student organization",
    "scientific integrity",
    "evidence-based policy",
    "science communication",
    "policy research",
    "climate policy",
    "environmental advocacy",
    "healthcare policy",
    "democracy",
    "ASIU",
    "Concerned Scientists"
  ],
  authors: [{ name: "Advocates for Science @ IU" }],
  creator: "Advocates for Science @ IU",
  publisher: "Advocates for Science @ IU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.advocatesforscienceatiu.org"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/',
      'en': '/'
    },
    types: {
      'application/rss+xml': [
        { url: '/rss.xml', title: 'Advocates for Science @ IU RSS Feed' },
      ],
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.advocatesforscienceatiu.org",
    siteName: "Advocates for Science @ IU",
    title: "Advocates for Science @ IU | Science Policy Advocacy",
    description: "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.",
    images: [
      {
        url: "https://www.advocatesforscienceatiu.org/icons/logo.svg",
        width: 1200,
        height: 630,
        alt: "Advocates for Science @ IU Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocates for Science @ IU | Science Policy Advocacy",
    description: "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.",
    images: ["https://www.advocatesforscienceatiu.org/icons/logo.svg"],
    creator: "@asiu_indiana",
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
    title: "Advocates for Science @ IU | Science Policy Advocacy",
    description: "Join Advocates for Science @ IU in promoting scientific integrity and evidence-based decision making. Discover our latest advocacy efforts, events, and opportunities to get involved. Make a difference in science policy today!",
    keywords: [
      "science policy advocacy",
      "evidence-based decision making",
      "scientific integrity",
      "student advocacy",
      "policy research",
      "science communication",
      "climate policy",
      "environmental advocacy",
      "healthcare policy",
      "democracy",
      "Indiana University",
      "ASIU"
    ],
    openGraph: {
      title: "Science at the Heart of Policy | Advocates for Science @ IU",
      description: "Join us in promoting scientific integrity and evidence-based decision making. Get involved today!",
    },
    twitter: {
      title: "Science at the Heart of Policy | Advocates for Science @ IU",
      description: "Join us in promoting scientific integrity and evidence-based decision making. Get involved today!",
    },
    alternates: {
      canonical: "/",
    },
    other: {
      link: [
        {
          rel: "preload",
          href: "/images/overlays/overlay-home.JPG",
          as: "image",
          type: "image/jpeg"
        }
      ]
    },
  },
  about: {
    title: "About Our Mission",
    description: "Learn about Advocates for Science @ IU's mission to bridge the gap between scientific research and public policy. Discover our values, leadership team, and commitment to evidence-based advocacy. Join our mission today!",
    keywords: [
      "ASIU mission",
      "science policy mission",
      "evidence-based advocacy",
      "scientific integrity",
      "policy research",
      "student leadership",
      "committee chairs",
      "faculty advisors",
      "science communication",
      "advocacy values",
      "Indiana University",
      "Concerned Scientists"
    ],
    openGraph: {
      title: "About Our Mission | Advocates for Science @ IU",
      description: "Learn about our mission to bridge the gap between scientific research and public policy. Join us!",
    },
    twitter: {
      title: "About Our Mission | Advocates for Science @ IU",
      description: "Learn about our mission to bridge the gap between scientific research and public policy. Join us!",
    },
    alternates: {
      canonical: "/about",
    },
    other: {
      link: [
        {
          rel: "preload",
          href: "/images/overlays/overlay-about.JPG",
          as: "image",
          type: "image/jpeg"
        }
      ]
    },
  },
  contact: {
    title: "Contact Us",
    description: "Get in touch with Advocates for Science @ IU today! Connect with our leadership team, join our community, or learn more about our advocacy efforts. We welcome questions and collaboration opportunities. Reach out now!",
    keywords: [
      "contact ASIU",
      "get in touch",
      "leadership team contact",
      "join ASIU",
      "collaboration opportunities",
      "science policy contact",
      "advocacy questions",
      "Indiana University contact",
      "student organization contact",
      "policy research contact"
    ],
    openGraph: {
      title: "Contact Us | Advocates for Science @ IU",
      description: "Get in touch with our leadership team and learn how to get involved. Contact us today!",
    },
    twitter: {
      title: "Contact Us | Advocates for Science @ IU",
      description: "Get in touch with our leadership team and learn how to get involved. Contact us today!",
    },
    alternates: {
      canonical: "/contact",
    },
    other: {
      link: [
        {
          rel: "preload",
          href: "/images/overlays/overlay-contact.JPG",
          as: "image",
          type: "image/jpeg"
        }
      ]
    },
  },
  getInvolved: {
    title: "Get Involved",
    description: "Join Advocates for Science @ IU and make a real difference in science policy! Discover upcoming events, volunteer opportunities, and ways to contribute to evidence-based advocacy efforts. Start making an impact today!",
    keywords: [
      "join ASIU",
      "get involved",
      "volunteer opportunities",
      "upcoming events",
      "science policy events",
      "advocacy training",
      "community engagement",
      "student involvement",
      "policy research opportunities",
      "science communication events",
      "Indiana University events"
    ],
    openGraph: {
      title: "Get Involved | Advocates for Science @ IU",
      description: "Join us and make a difference in science policy. Discover events and opportunities today!",
    },
    twitter: {
      title: "Get Involved | Advocates for Science @ IU",
      description: "Join us and make a difference in science policy. Discover events and opportunities today!",
    },
    alternates: {
      canonical: "/get-involved",
    },
    other: {
      link: [
        {
          rel: "preload",
          href: "/images/overlays/overlay-get-involved.JPG",
          as: "image",
          type: "image/jpeg"
        }
      ]
    },
  },
  team: {
    title: "Our Team",
    description: "Meet the dedicated students and faculty who lead Advocates for Science @ IU's advocacy efforts. Learn about our leadership team, committee chairs, and faculty advisors driving meaningful change in science policy.",
    keywords: [
      "ASIU team",
      "leadership team",
      "committee chairs",
      "faculty advisors",
      "science policy leaders",
      "student leadership",
      "advocacy team",
      "policy research team",
      "science communication team",
      "Indiana University leadership"
    ],
    openGraph: {
      title: "Our Team | Advocates for Science @ IU",
      description: "Meet our dedicated leadership team driving meaningful change in science policy.",
    },
    twitter: {
      title: "Our Team | Advocates for Science @ IU",
      description: "Meet our dedicated leadership team driving meaningful change in science policy.",
    },
    alternates: {
      canonical: "/team",
    },
  },
  news: {
    title: "News",
    description: "Stay updated with Advocates for Science @ IU's latest news bulletins, articles, and educational content. Read about our advocacy efforts, events, and science policy initiatives.",
    keywords: [
      "ASIU news",
      "science policy news",
      "advocacy updates",
      "news bulletins",
      "science communication",
      "policy research",
      "student advocacy news",
      "Indiana University",
      "science policy articles"
    ],
    openGraph: {
      title: "News | Advocates for Science @ IU",
      description: "Stay updated with our latest news bulletins, articles, and educational content about science policy and advocacy.",
    },
    twitter: {
      title: "News | Advocates for Science @ IU",
      description: "Stay updated with our latest news bulletins, articles, and educational content.",
    },
    alternates: {
      canonical: "/news",
    },
    other: {
      link: [
        {
          rel: "preload",
          href: "/images/overlays/overlay-news.JPG",
          as: "image",
          type: "image/jpeg"
        }
      ]
    },
  },
  privacy: {
    title: "Privacy Policy",
    description: "Learn about Advocates for Science @ IU's privacy practices and how we protect your personal information. Read our comprehensive privacy policy covering data collection, use, and protection.",
    keywords: [
      "privacy policy",
      "data protection",
      "personal information",
      "cookies",
      "data security",
      "privacy practices",
      "ASIU privacy",
      "student organization privacy"
    ],
    openGraph: {
      title: "Privacy Policy | Advocates for Science @ IU",
      description: "Learn about our privacy practices and how we protect your personal information.",
    },
    twitter: {
      title: "Privacy Policy | Advocates for Science @ IU",
      description: "Learn about our privacy practices and how we protect your personal information.",
    },
    alternates: {
      canonical: "/privacy",
    },
    other: {
      link: [
        {
          rel: "preload",
          href: "/images/overlays/overlay-privacy.JPG",
          as: "image",
          type: "image/jpeg"
        }
      ]
    },
  },
  accessibility: {
    title: "Accessibility Statement",
    description: "Learn about Advocates for Science @ IU's commitment to digital accessibility. Read our accessibility statement covering WCAG compliance, features, and how we ensure an inclusive experience for all users.",
    keywords: [
      "accessibility statement",
      "WCAG compliance",
      "digital accessibility",
      "screen reader support",
      "keyboard navigation",
      "accessibility features",
      "inclusive design",
      "ASIU accessibility"
    ],
    openGraph: {
      title: "Accessibility Statement | Advocates for Science @ IU",
      description: "Learn about our commitment to digital accessibility and inclusive design.",
    },
    twitter: {
      title: "Accessibility Statement | Advocates for Science @ IU",
      description: "Learn about our commitment to digital accessibility and inclusive design.",
    },
    alternates: {
      canonical: "/accessibility",
    },
    other: {
      link: [
        {
          rel: "preload",
          href: "/images/overlays/overlay-accessibility.JPG",
          as: "image",
          type: "image/jpeg"
        }
      ]
    },
  },
}

// Structured data configurations
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "name": "Advocates for Science @ IU",
    "alternateName": "ASIU",
    "description": "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.",
    "url": "https://www.advocatesforscienceatiu.org",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.advocatesforscienceatiu.org/icons/logo.svg",
      "width": 400,
      "height": 400
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://www.advocatesforscienceatiu.org/icons/logo.svg",
      "width": 1200,
      "height": 630
    },
    "sameAs": [
      "https://www.instagram.com/asiu.indiana",
      "https://www.facebook.com/profile.php?id=61573877797290",
      "https://twitter.com/asiu_indiana"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bloomington",
      "addressRegion": "IN",
      "addressCountry": "US",
      "postalCode": "47405"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "general",
        "email": "asiu@indiana.edu",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "contactType": "public relations",
        "email": "asiu@indiana.edu",
        "availableLanguage": "English"
      }
    ],
    "foundingDate": "2024",
    "memberOf": {
      "@type": "Organization",
      "name": "Concerned Scientists @ IU",
      "url": "https://concernedscientists.iu.edu/"
    },
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "Indiana University Bloomington",
      "url": "https://www.indiana.edu/"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Indiana",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.1637",
        "longitude": "-86.5264"
      }
    },
    "knowsAbout": [
      "Science Policy",
      "Evidence-based Decision Making",
      "Scientific Integrity",
      "Climate Policy",
      "Environmental Advocacy",
      "Healthcare Policy",
      "Science Communication"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Science Policy Advocacy Training",
          "description": "Training and workshops on effective science policy advocacy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Science Communication Workshops",
          "description": "Workshops on communicating science to policymakers and the public"
        }
      }
    ]
  },
  home: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advocates for Science @ IU - Home",
    "description": "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society.",
    "url": "https://www.advocatesforscienceatiu.org",
    "mainEntity": {
      "@type": "Organization",
      "name": "Advocates for Science @ IU",
      "description": "Student affiliate of Concerned Scientists @ IU"
    },
    "potentialAction": [
      {
        "@type": "JoinAction",
        "target": "https://www.advocatesforscienceatiu.org/get-involved",
        "description": "Join Advocates for Science @ IU"
      },
      {
        "@type": "DonateAction",
        "target": "https://www.gofundme.com/f/support-advocates-for-science-iu",
        "description": "Donate to Advocates for Science @ IU"
      }
    ]
  },
  about: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About - Advocates for Science @ IU",
    "description": "Learn about our mission to bridge the gap between scientific research and public policy",
    "url": "https://www.advocatesforscienceatiu.org/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Advocates for Science @ IU",
      "description": "Student affiliate of Concerned Scientists @ IU",
      "foundingDate": "2024",
      "mission": "To promote scientific integrity and evidence-based decision making in policy and society"
    }
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact - Advocates for Science @ IU",
    "description": "Get in touch with our leadership team and learn how to get involved",
    "url": "https://www.advocatesforscienceatiu.org/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Advocates for Science @ IU",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "general",
        "email": "asiu@indiana.edu",
        "availableLanguage": "English"
      }
    }
  },
  getInvolved: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Get Involved - Advocates for Science @ IU",
    "description": "Join us and make a difference in science policy",
    "url": "https://www.advocatesforscienceatiu.org/get-involved",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Upcoming Events",
      "description": "Events and opportunities to get involved with Advocates for Science @ IU",
      "itemListElement": [
        {
          "@type": "Event",
          "name": "Science Communication Workshop",
          "description": "Learn effective strategies for communicating with policymakers",
          "startDate": "2025-01-15T18:00:00-05:00",
          "endDate": "2025-01-15T21:00:00-05:00",
          "location": {
            "@type": "Place",
            "name": "Wells Library, Conference Room A",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bloomington",
              "addressRegion": "IN"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Advocates for Science @ IU"
          }
        },
        {
          "@type": "Event",
          "name": "Climate Action Town Hall",
          "description": "Community discussion on local climate policy initiatives",
          "startDate": "2025-01-22T19:00:00-05:00",
          "endDate": "2025-01-22T20:30:00-05:00",
          "location": {
            "@type": "Place",
            "name": "Monroe County Public Library",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bloomington",
              "addressRegion": "IN"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Advocates for Science @ IU"
          }
        }
      ]
    }
  },
  team: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Team - Advocates for Science @ IU",
    "description": "Meet our dedicated leadership team driving meaningful change in science policy",
    "url": "https://www.advocatesforscienceatiu.org/team",
    "mainEntity": {
      "@type": "Organization",
      "name": "Advocates for Science @ IU",
      "description": "Student affiliate of Concerned Scientists @ IU",
      "employee": [
        {
          "@type": "Person",
          "name": "Alex Martinez",
          "jobTitle": "Co-President",
          "description": "Graduate student in Environmental Science with a focus on climate policy"
        },
        {
          "@type": "Person",
          "name": "Sarah Patel",
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
    }
  },
  news: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "News - Advocates for Science @ IU",
    "description": "Stay updated with our latest news bulletins, articles, and educational content about science policy and advocacy.",
    "url": "https://www.advocatesforscienceatiu.org/news",
    "mainEntity": {
      "@type": "ItemList",
      "name": "News Articles",
      "description": "Latest news and articles from Advocates for Science @ IU",
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
              "name": "Advocates for Science @ IU"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Advocates for Science @ IU",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.advocatesforscienceatiu.org/logo.svg"
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
      "target": "https://www.advocatesforscienceatiu.org/news",
      "description": "Subscribe to our news updates"
    }
  },
  privacy: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Advocates for Science @ IU",
    "description": "Learn about our privacy practices and how we protect your personal information",
    "url": "https://www.advocatesforscienceatiu.org/privacy",
    "mainEntity": {
      "@type": "WebPage",
      "name": "Privacy Policy",
      "description": "Privacy policy for Advocates for Science @ IU"
    }
  },
  accessibility: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Accessibility Statement - Advocates for Science @ IU",
    "description": "Learn about our commitment to digital accessibility and inclusive design",
    "url": "https://www.advocatesforscienceatiu.org/accessibility",
    "mainEntity": {
      "@type": "WebPage",
      "name": "Accessibility Statement",
      "description": "Accessibility statement for Advocates for Science @ IU"
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
      url: `https://www.advocatesforscienceatiu.org${pageMeta.alternates.canonical}`,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageMeta.twitter.title,
      description: pageMeta.twitter.description,
    },
    alternates: pageMeta.alternates,
  }
}

// Helper function to get breadcrumb structured data
export function getBreadcrumbData(path: string, title: string) {
  const baseUrl = "https://www.advocatesforscienceatiu.org"
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
