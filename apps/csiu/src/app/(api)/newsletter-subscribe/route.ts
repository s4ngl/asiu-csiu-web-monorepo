import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create a unique filename using timestamp and email hash
    const timestamp = new Date().toISOString()
    const emailHash = Buffer.from(email).toString('base64').replace(/[^a-zA-Z0-9]/g, '')
    const filename = `newsletter-subscriptions/${timestamp}-${emailHash}.json`

    // Create subscription data
    const subscriptionData = {
      email,
      timestamp,
      source: 'website',
      status: 'pending'
    }

    // Store subscription request in Vercel Blob
    const { url } = await put(filename, JSON.stringify(subscriptionData, null, 2), {
      access: 'public',
      addRandomSuffix: false
    })

    console.log('Newsletter subscription stored:', { email, filename, url })

    return NextResponse.json(
      {
        message: 'Subscription request received successfully',
        subscriptionId: filename
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)

    return NextResponse.json(
      { message: 'Failed to process subscription request. Please try again later.' },
      { status: 500 }
    )
  }
}
