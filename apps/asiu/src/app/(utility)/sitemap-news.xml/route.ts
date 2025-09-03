import { getPastEvents } from '@/lib/sanity'

export async function GET() {
  const baseUrl = 'https://www.advocatesforscienceatiu.org'
  
  try {
    // Get dynamic news content (if you have news posts)
    // For now, we'll include the main news page and any dynamic news routes
    const newsPages = [
      {
        url: `${baseUrl}/news`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      // Add dynamic news article URLs here when available
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsPages.map(page => `
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
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('Error generating news sitemap:', error)
    return new Response('Error generating sitemap', { status: 500 })
  }
}