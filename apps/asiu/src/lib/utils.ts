import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { BulletinArticle } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseBulletinContent(content: string): BulletinArticle[] {
  if (!content) return []

  // Split by ␞ (group separator) to get individual articles
  const articles = content.split('␞').filter(article => article.trim())

  return articles.map(article => {
    // Split by ␟ (unit separator) to get individual fields
    const fields = article.split('␟')

    return {
      category: fields[0] || '',
      publisher: fields[1] || '',
      published: fields[2] || '',
      title: fields[3] || '',
      link: fields[4] || '',
      description: fields[5] || ''
    }
  })
}

export function formatPublicationDate(dateString: string): string {
  if (!dateString) return 'No date'

  const date = new Date(dateString + 'T00:00:00')
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${month}/${day}/${year}`
}

export function formatPublicationDateLong(dateString: string): string {
  if (!dateString) return 'No date'

  const date = new Date(dateString + 'T00:00:00')
  const year = date.getFullYear()
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  const day = date.getDate()

  return `${month} ${day}, ${year}`
}

export function createSlug(dateString: string): string {
  if (!dateString) return 'no-date'

  const date = new Date(dateString + 'T00:00:00')
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case 'global news':
      return 'bg-science-blue'
    case 'opinion & analysis':
      return 'bg-science-red'
    case 'regional news':
      return 'bg-science-green'
    case 'take action':
      return 'bg-science-black'
    default:
      return 'bg-gray-500'
  }
}

/**
 * Parse a date string (YYYY-MM-DD) as a local date to avoid timezone shifts
 * This prevents dates like "2025-09-02" from becoming "2025-09-01" due to UTC conversion
 */
export function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}

/**
 * Format a date string (YYYY-MM-DD) to a localized date string
 * Uses timezone-safe parsing to prevent date shifts
 */
export function formatLocalDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = parseLocalDate(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options
  })
}

/**
 * Get a date string (YYYY-MM-DD) formatted for calendar links (YYYYMMDD)
 * Uses timezone-safe parsing to prevent date shifts
 */
export function formatDateForCalendar(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number)
  return `${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}`
}

/**
 * Create an ISO string at local midnight to preserve the intended date
 * This prevents timezone-related date shifts when converting to ISO strings
 */
export function createLocalMidnightISO(dateString: string): string {
  const date = parseLocalDate(dateString)
  const localMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  return localMidnight.toISOString()
}
