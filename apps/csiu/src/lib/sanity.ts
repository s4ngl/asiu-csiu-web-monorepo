import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const client = createClient({
  projectId: 'e1212ave',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)

// Query to fetch committee chairs
export const getCommitteeChairs = async () => {
  const query = `*[_type == "committeeChair"] {
    _id,
    name,
    role,
    bio,
    email,
    tags,
    socialLinks,
    "imageUrl": image.asset->url
  } | order(name asc)`

  return await client.fetch(query)
}

export const getFacultyAdvisors = async () => {
    const query = `*[_type == "facultyAdvisor"] {
      _id,
      name,
      role,
      bio,
      email,
      tags,
      socialLinks,
      "imageUrl": image.asset->url
    } | order(name asc)`

    return await client.fetch(query)
  }

// Query to fetch news bulletins
export const getNewsBulletins = async () => {
  const query = `*[_type == "newsBulletin"] {
    _id,
    publication,
    content
  } | order(publication desc)`

  return await client.fetch(query)
}

// Query to fetch testimonials
export const getTestimonials = async () => {
  const query = `*[_type == "testimonial"] {
    _id,
    quote,
    author,
    role
  } | order(_createdAt desc)`

  return await client.fetch(query)
}

// Query to fetch external links
export const getExternalLinks = async () => {
  const query = `*[_type == "externalLink"] {
    _id,
    title,
    url,
    description
  } | order(title asc)`

  return await client.fetch(query)
}

// Query to fetch committees
export const getCommittees = async () => {
  const query = `*[_type == "committee"] {
    _id,
    name,
    description
  } | order(name asc)`

  return await client.fetch(query)
}

// Query to fetch news articles
export const getNewsArticles = async () => {
  const query = `*[_type == "newsArticle"] {
    _id,
    title,
    content,
    publishedAt
  } | order(publishedAt desc)`

  return await client.fetch(query)
}

// Query to fetch events
export const getEvents = async () => {
  const query = `*[_type == "event"] {
    _id,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl
  } | order(date asc)`

  return await client.fetch(query)
}

// Query to fetch past events (events with date before today)
export const getPastEvents = async () => {
  const today = new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
  const query = `*[_type == "event" && date < "${today}"] {
    _id,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl
  } | order(date desc)`

  return await client.fetch(query)
}

// Query to fetch upcoming events (events with date today or in the future)
export const getUpcomingEvents = async () => {
  const today = new Date().toISOString().split('T')[0] // Format: YYYY-MM-DD
  const query = `*[_type == "event" && date >= "${today}"] {
    _id,
    title,
    subtitle,
    description,
    "imageUrl": image.asset->url,
    date,
    startTime,
    endTime,
    location,
    locationUrl,
    audience,
    participantCount,
    tags,
    btnText,
    btnUrl
  } | order(date asc)`

  return await client.fetch(query)
}
