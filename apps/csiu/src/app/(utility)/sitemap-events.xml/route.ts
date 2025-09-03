import { getPastEvents, getUpcomingEvents } from '@/lib/sanity'

export async function GET() {
  const baseUrl = 'https://www.advocatesforscienceatiu.org'
  
  try {
    // Get all events from Sanity CMS
    const [pastEvents, upcomingEvents] = await Promise.all([
      getPastEvents(),
      getUpcomingEvents()
    ])

    // Combine and format events for sitemap
    const allEvents = [...pastEvents, ...upcomingEvents]
    
    const eventPages = allEvents.map(event => ({
      url: `${baseUrl}/events/${event.slug}`, // Assuming you'll have event detail pages
      lastModified: event._updatedAt || new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

    // Add main events/get-involved page
    eventPages.unshift({
      url: `${baseUrl}/get-involved`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${eventPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=1800, s-maxage=1800', // Cache for 30 minutes (events change more frequently)
      },
    })
  } catch (error) {
    console.error('Error generating events sitemap:', error)
    return new Response('Error generating sitemap', { status: 500 })
  }
}