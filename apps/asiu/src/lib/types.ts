

export interface BulletinArticle {
  category: string
  publisher: string
  published: string
  title: string
  link: string
  description: string
}

export interface NewsBulletin {
  _id: string
  publication: string
  content: string
  articles?: BulletinArticle[]
}

export interface Event {
  _id: string
  title: string
  subtitle: string
  description: string
  image?: any
  imageUrl?: string
  date: string
  startTime: string
  endTime: string
  location: string
  locationUrl: string
  audience: string[]
  participantCount?: number
  tags: string[]
  btnText: string
  btnUrl: string
}

export interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  likes: number
  comments: number
  timestamp: string
  permalink: string
}

export interface NewsletterSubscription {
  email: string
  timestamp: string
  source: string
  status: string
}

export interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  _type: string
}

// Update existing interfaces to use proper image typing
export interface CommitteeChair {
  _id: string
  name: string
  role: string
  bio: string
  email?: string
  tags?: string[]
  socialLinks?: string[]
  image?: SanityImage
  imageUrl?: string
}

export interface FacultyAdvisor {
  _id: string
  name: string
  role: string
  bio: string
  email?: string
  tags?: string[]
  socialLinks?: string[]
  image?: SanityImage
  imageUrl?: string
}
