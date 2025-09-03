import Link from "next/link"
import { ExternalLink as ExternalLinkIcon } from "lucide-react"

interface SEOLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
  title?: string
  target?: string
  rel?: string
  trackClick?: boolean
  eventName?: string
}

export function SEOLink({ 
  href, 
  children, 
  className, 
  external = false, 
  title,
  target,
  rel,
  trackClick = false,
  eventName,
  ...props 
}: SEOLinkProps) {
  // Determine if link is external
  const isExternal = external || 
    (href.startsWith('http') && !href.includes('advocatesforscienceatiu.org')) ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')

  // Set appropriate rel attributes for external links
  const relAttributes = isExternal 
    ? rel || "noopener noreferrer"
    : rel

  // Set target for external links
  const linkTarget = isExternal 
    ? target || "_blank"
    : target

  // Click tracking handler
  const handleClick = (e: React.MouseEvent) => {
    if (trackClick && eventName) {
      // Send analytics event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click', {
          event_category: 'outbound',
          event_label: href,
          transport_type: 'beacon'
        })
      }
    }
  }

  // Internal link
  if (!isExternal) {
    return (
      <Link
        href={href}
        className={className}
        title={title}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    )
  }

  // External link
  return (
    <a
      href={href}
      className={className}
      title={title}
      target={linkTarget}
      rel={relAttributes}
      onClick={handleClick}
      {...props}
    >
      {children}
      {isExternal && !href.startsWith('mailto:') && !href.startsWith('tel:') && (
        <ExternalLinkIcon className="inline w-3 h-3 ml-1" aria-hidden="true" />
      )}
    </a>
  )
}

// Specialized components for common link types
interface EmailLinkProps {
  email: string
  subject?: string
  body?: string
  children?: React.ReactNode
  className?: string
}

export function EmailLink({ email, subject, body, children, className }: EmailLinkProps) {
  const params = new URLSearchParams()
  if (subject) params.append('subject', subject)
  if (body) params.append('body', body)
  
  const href = `mailto:${email}${params.toString() ? '?' + params.toString() : ''}`
  
  return (
    <SEOLink
      href={href}
      className={className}
      title={`Send email to ${email}`}
      trackClick={true}
      eventName="email_click"
    >
      {children || email}
    </SEOLink>
  )
}

interface PhoneLinkProps {
  phone: string
  children?: React.ReactNode
  className?: string
}

export function PhoneLink({ phone, children, className }: PhoneLinkProps) {
  const href = `tel:${phone.replace(/[^\d+]/g, '')}`
  
  return (
    <SEOLink
      href={href}
      className={className}
      title={`Call ${phone}`}
      trackClick={true}
      eventName="phone_click"
    >
      {children || phone}
    </SEOLink>
  )
}

interface SocialLinkProps {
  platform: 'instagram' | 'facebook' | 'twitter' | 'linkedin' | 'youtube'
  username?: string
  url?: string
  children?: React.ReactNode
  className?: string
}

export function SocialLink({ platform, username, url, children, className }: SocialLinkProps) {
  const platformUrls = {
    instagram: `https://instagram.com/${username}`,
    facebook: `https://facebook.com/${username}`,
    twitter: `https://twitter.com/${username}`,
    linkedin: `https://linkedin.com/in/${username}`,
    youtube: `https://youtube.com/@${username}`
  }
  
  const href = url || (username ? platformUrls[platform] : '#')
  const title = `Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}`
  
  return (
    <SEOLink
      href={href}
      external={true}
      className={className}
      title={title}
      trackClick={true}
      eventName={`${platform}_click`}
    >
      {children}
    </SEOLink>
  )
}

// Button-styled link component
interface LinkButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  disabled?: boolean
}

export function LinkButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  external = false,
  disabled = false,
  ...props 
}: LinkButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  }
  
  const sizeClasses = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg'
  }
  
  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  if (disabled) {
    return (
      <span className={`${combinedClassName} cursor-not-allowed opacity-50`}>
        {children}
      </span>
    )
  }
  
  return (
    <SEOLink
      href={href}
      external={external}
      className={combinedClassName}
      trackClick={true}
      eventName="button_click"
      {...props}
    >
      {children}
    </SEOLink>
  )
}