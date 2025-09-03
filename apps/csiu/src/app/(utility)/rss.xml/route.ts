import { getPastEvents, getUpcomingEvents } from '@/lib/sanity'
import { parseLocalDate } from '@/lib/utils'

export async function GET() {
  const baseUrl = 'https://www.advocatesforscienceatiu.org'
  const buildDate = new Date().toUTCString()

  try {
    // Get recent events and news
    const [pastEvents, upcomingEvents] = await Promise.all([
      getPastEvents(),
      getUpcomingEvents()
    ])

    // Combine and sort by date
    const allEvents = [...pastEvents, ...upcomingEvents]
      .sort((a, b) => {
        const dateA = parseLocalDate(a.date)
        const dateB = parseLocalDate(b.date)
        return dateB.getTime() - dateA.getTime()
      })
      .slice(0, 20) // Limit to 20 most recent items

    const rssItems = allEvents.map(event => {
      // Parse date as local date to avoid timezone shifts
      const eventDate = parseLocalDate(event.date)
      // Create UTC string at local midnight to preserve the intended date
      const localMidnight = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate())
      const eventDateUTC = localMidnight.toUTCString()

      const eventUrl = `${baseUrl}/get-involved` // Link to get involved page for now

      return `
    <item>
      <title><![CDATA[${event.title}]]></title>
      <description><![CDATA[${event.description || 'Join us for this exciting event!'}]]></description>
      <link>${eventUrl}</link>
      <guid isPermaLink="false">${event._id}</guid>
      <pubDate>${eventDateUTC}</pubDate>
      <category>Events</category>
      ${event.location ? `<category>${event.location}</category>` : ''}
    </item>`
    }).join('')

    const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Concerned Scientists @ IU - News &amp; Events</title>
    <description>Stay updated with the latest news, events, and advocacy efforts from Concerned Scientists @ IU</description>
    <link>https://www.csiub.org</link>
    <atom:link href="https://www.csiub.org/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>https://www.csiub.org/icons/logo.svg</url>
      <title>Concerned Scientists @ IU</title>
      <link>https://www.csiub.org</link>
      <width>1200</width>
      <height>630</height>
    </image>
    <copyright>© 2024 Concerned Scientists @ IU. All rights reserved.</copyright>
    <managingEditor>info@csiub.org (Concerned Scientists @ IU)</managingEditor>
    <webMaster>info@csiub.org (Concerned Scientists @ IU)</webMaster>
    ${rssItems}
  </channel>
</rss>`

    return new Response(rssContent, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
