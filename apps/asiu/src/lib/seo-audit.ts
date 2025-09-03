/**
 * SEO Health Check Utility
 * This utility helps monitor and validate SEO implementation across the site
 */

export interface SEOAuditResult {
  score: number // 0-100
  issues: SEOIssue[]
  recommendations: string[]
  passedChecks: string[]
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: string
  recommendation: string
}

export function auditPageSEO(pageData: {
  title?: string
  description?: string
  keywords?: string[]
  headings?: { level: number; text: string }[]
  images?: { src: string; alt?: string }[]
  links?: { href: string; text: string; external?: boolean }[]
  url: string
}): SEOAuditResult {
  const issues: SEOIssue[] = []
  const passedChecks: string[] = []
  const recommendations: string[] = []

  // Title checks
  if (!pageData.title) {
    issues.push({
      type: 'error',
      message: 'Missing page title',
      element: '<title>',
      recommendation: 'Add a descriptive, keyword-rich title tag (50-60 characters)'
    })
  } else {
    if (pageData.title.length < 30) {
      issues.push({
        type: 'warning',
        message: 'Title too short',
        element: '<title>',
        recommendation: 'Expand title to 50-60 characters for better SEO'
      })
    } else if (pageData.title.length > 60) {
      issues.push({
        type: 'warning',
        message: 'Title too long (may be truncated)',
        element: '<title>',
        recommendation: 'Shorten title to under 60 characters'
      })
    } else {
      passedChecks.push('Title length is optimal')
    }
  }

  // Meta description checks
  if (!pageData.description) {
    issues.push({
      type: 'error',
      message: 'Missing meta description',
      element: '<meta name="description">',
      recommendation: 'Add a compelling meta description (120-160 characters)'
    })
  } else {
    if (pageData.description.length < 120) {
      issues.push({
        type: 'warning',
        message: 'Meta description too short',
        element: '<meta name="description">',
        recommendation: 'Expand description to 120-160 characters'
      })
    } else if (pageData.description.length > 160) {
      issues.push({
        type: 'warning',
        message: 'Meta description too long',
        element: '<meta name="description">',
        recommendation: 'Shorten description to under 160 characters'
      })
    } else {
      passedChecks.push('Meta description length is optimal')
    }
  }

  // Keywords check
  if (!pageData.keywords || pageData.keywords.length === 0) {
    issues.push({
      type: 'info',
      message: 'No keywords defined',
      element: '<meta name="keywords">',
      recommendation: 'Add relevant keywords for this page'
    })
  } else if (pageData.keywords.length > 10) {
    issues.push({
      type: 'warning',
      message: 'Too many keywords',
      element: '<meta name="keywords">',
      recommendation: 'Limit to 5-10 most relevant keywords'
    })
  } else {
    passedChecks.push('Keywords count is reasonable')
  }

  // Heading structure checks
  if (pageData.headings) {
    const h1Count = pageData.headings.filter(h => h.level === 1).length
    
    if (h1Count === 0) {
      issues.push({
        type: 'error',
        message: 'Missing H1 tag',
        element: '<h1>',
        recommendation: 'Add exactly one H1 tag per page'
      })
    } else if (h1Count > 1) {
      issues.push({
        type: 'error',
        message: 'Multiple H1 tags detected',
        element: '<h1>',
        recommendation: 'Use only one H1 tag per page'
      })
    } else {
      passedChecks.push('H1 structure is correct')
    }

    // Check heading hierarchy
    let previousLevel = 0
    let hierarchyError = false
    for (const heading of pageData.headings) {
      if (heading.level > previousLevel + 1 && previousLevel !== 0) {
        hierarchyError = true
        break
      }
      previousLevel = heading.level
    }

    if (hierarchyError) {
      issues.push({
        type: 'warning',
        message: 'Improper heading hierarchy',
        element: '<h1-h6>',
        recommendation: 'Maintain proper heading hierarchy (H1 > H2 > H3, etc.)'
      })
    } else if (pageData.headings.length > 0) {
      passedChecks.push('Heading hierarchy is proper')
    }
  }

  // Image alt text checks
  if (pageData.images) {
    const imagesWithoutAlt = pageData.images.filter(img => !img.alt || img.alt.trim() === '')
    
    if (imagesWithoutAlt.length > 0) {
      issues.push({
        type: 'error',
        message: `${imagesWithoutAlt.length} images missing alt text`,
        element: '<img>',
        recommendation: 'Add descriptive alt text to all images for accessibility and SEO'
      })
    } else if (pageData.images.length > 0) {
      passedChecks.push('All images have alt text')
    }

    // Check for overly long alt text
    const longAltImages = pageData.images.filter(img => img.alt && img.alt.length > 125)
    if (longAltImages.length > 0) {
      issues.push({
        type: 'warning',
        message: `${longAltImages.length} images have overly long alt text`,
        element: '<img>',
        recommendation: 'Keep alt text under 125 characters'
      })
    }
  }

  // URL structure check
  if (pageData.url) {
    if (pageData.url.length > 100) {
      issues.push({
        type: 'warning',
        message: 'URL is too long',
        element: 'URL',
        recommendation: 'Keep URLs under 100 characters when possible'
      })
    }

    if (!/^[a-z0-9\-\/]+$/.test(pageData.url.replace('https://www.advocatesforscienceatiu.org', ''))) {
      issues.push({
        type: 'warning',
        message: 'URL contains special characters',
        element: 'URL',
        recommendation: 'Use only lowercase letters, numbers, and hyphens in URLs'
      })
    } else {
      passedChecks.push('URL structure is SEO-friendly')
    }
  }

  // Internal linking check
  if (pageData.links) {
    const internalLinks = pageData.links.filter(link => !link.external)
    const externalLinks = pageData.links.filter(link => link.external)
    
    if (internalLinks.length < 3) {
      issues.push({
        type: 'info',
        message: 'Limited internal linking',
        element: '<a>',
        recommendation: 'Add more internal links to improve site navigation and SEO'
      })
    } else {
      passedChecks.push('Good internal linking structure')
    }

    // Check for external links without rel attributes
    const externalLinksNeedingRel = externalLinks.filter(link => 
      !link.href.includes('rel=') && 
      !link.href.includes('advocatesforscienceatiu.org')
    )
    
    if (externalLinksNeedingRel.length > 0) {
      issues.push({
        type: 'warning',
        message: 'External links missing rel attributes',
        element: '<a>',
        recommendation: 'Add rel="noopener noreferrer" to external links'
      })
    }
  }

  // Generate overall recommendations
  if (issues.length === 0) {
    recommendations.push('Excellent! This page follows SEO best practices.')
  } else {
    recommendations.push('Focus on fixing critical errors first, then address warnings.')
    
    if (issues.some(i => i.type === 'error')) {
      recommendations.push('Critical SEO issues detected - these should be fixed immediately.')
    }
    
    if (issues.filter(i => i.type === 'warning').length > 3) {
      recommendations.push('Multiple SEO warnings detected - consider a comprehensive SEO review.')
    }
  }

  // Calculate score
  const totalChecks = 10 // Total number of SEO factors we check
  const errors = issues.filter(i => i.type === 'error').length
  const warnings = issues.filter(i => i.type === 'warning').length
  
  let score = 100
  score -= errors * 15 // -15 points per error
  score -= warnings * 5 // -5 points per warning
  score = Math.max(0, score) // Don't go below 0

  return {
    score,
    issues,
    recommendations,
    passedChecks
  }
}

// Helper function to format audit results for console output
export function formatAuditReport(audit: SEOAuditResult): string {
  let report = `\n🔍 SEO Audit Report - Score: ${audit.score}/100\n`
  report += `${'='.repeat(50)}\n\n`

  if (audit.issues.length === 0) {
    report += `✅ Excellent! No SEO issues detected.\n\n`
  } else {
    report += `📊 Issues Found: ${audit.issues.length}\n\n`

    const errors = audit.issues.filter(i => i.type === 'error')
    const warnings = audit.issues.filter(i => i.type === 'warning')
    const info = audit.issues.filter(i => i.type === 'info')

    if (errors.length > 0) {
      report += `❌ Critical Issues (${errors.length}):\n`
      errors.forEach(issue => {
        report += `   • ${issue.message}\n`
        report += `     💡 ${issue.recommendation}\n\n`
      })
    }

    if (warnings.length > 0) {
      report += `⚠️  Warnings (${warnings.length}):\n`
      warnings.forEach(issue => {
        report += `   • ${issue.message}\n`
        report += `     💡 ${issue.recommendation}\n\n`
      })
    }

    if (info.length > 0) {
      report += `ℹ️  Suggestions (${info.length}):\n`
      info.forEach(issue => {
        report += `   • ${issue.message}\n`
        report += `     💡 ${issue.recommendation}\n\n`
      })
    }
  }

  if (audit.passedChecks.length > 0) {
    report += `✅ Passed Checks (${audit.passedChecks.length}):\n`
    audit.passedChecks.forEach(check => {
      report += `   • ${check}\n`
    })
    report += '\n'
  }

  if (audit.recommendations.length > 0) {
    report += `🎯 Recommendations:\n`
    audit.recommendations.forEach(rec => {
      report += `   • ${rec}\n`
    })
  }

  return report
}