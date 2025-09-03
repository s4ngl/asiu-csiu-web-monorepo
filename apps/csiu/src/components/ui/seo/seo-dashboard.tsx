"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Progress } from "@/components/ui/primitives/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/composite/tabs"
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Info, 
  RefreshCw, 
  TrendingUp, 
  Search, 
  Image as ImageIcon,
  Link as LinkIcon,
  FileText,
  Globe
} from "lucide-react"
import { auditPageSEO, formatAuditReport, type SEOAuditResult } from "@/lib/seo-audit"
import { validateMetaDescription } from "@/lib/seo-helpers"

interface SEODashboardProps {
  currentPage?: string
  showFullReport?: boolean
}

export function SEODashboard({ currentPage = "/", showFullReport = false }: SEODashboardProps) {
  const [auditResult, setAuditResult] = useState<SEOAuditResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  // Function to extract page data for audit
  const extractPageData = () => {
    const title = document.title
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content')?.split(',') || []
    
    // Extract headings
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
      level: parseInt(h.tagName.substring(1)),
      text: h.textContent || ''
    }))
    
    // Extract images
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt
    }))
    
    // Extract links
    const links = Array.from(document.querySelectorAll('a')).map(link => ({
      href: link.href,
      text: link.textContent || '',
      external: link.hostname !== window.location.hostname
    }))

    return {
      title,
      description: metaDesc,
      keywords,
      headings,
      images,
      links,
      url: window.location.pathname
    }
  }

  // Run SEO audit
  const runAudit = async () => {
    setIsLoading(true)
    try {
      const pageData = extractPageData()
      const result = auditPageSEO(pageData)
      setAuditResult(result)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error running SEO audit:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Run audit on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      runAudit()
    }
  }, [currentPage])

  // Get color for score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  // Get badge variant for issue type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'error': return 'destructive'
      case 'warning': return 'default'
      case 'info': return 'secondary'
      default: return 'default'
    }
  }

  if (!auditResult) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            SEO Health Check
          </CardTitle>
          <CardDescription>
            Analyzing page SEO...
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-8">
            <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Overall Score */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                SEO Score
              </CardTitle>
              <CardDescription>
                Overall SEO health for this page
              </CardDescription>
            </div>
            <Button 
              onClick={runAudit} 
              disabled={isLoading}
              size="sm"
              variant="outline"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className={`text-4xl font-bold ${getScoreColor(auditResult.score)}`}>
                {auditResult.score}
              </div>
              <div className="flex-1">
                <Progress value={auditResult.score} className="h-3" />
                <p className="text-sm text-gray-600 mt-1">
                  {auditResult.score >= 90 ? 'Excellent!' : 
                   auditResult.score >= 70 ? 'Good, but room for improvement' : 
                   'Needs attention'}
                </p>
              </div>
            </div>
            
            {lastUpdated && (
              <p className="text-xs text-gray-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Issues Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="font-semibold text-red-600">
                  {auditResult.issues.filter(i => i.type === 'error').length}
                </p>
                <p className="text-sm text-gray-600">Critical Issues</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="font-semibold text-yellow-600">
                  {auditResult.issues.filter(i => i.type === 'warning').length}
                </p>
                <p className="text-sm text-gray-600">Warnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-semibold text-green-600">
                  {auditResult.passedChecks.length}
                </p>
                <p className="text-sm text-gray-600">Passed Checks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Results */}
      <Tabs defaultValue="issues" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="passed">Passed Checks</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="issues" className="space-y-4">
          {auditResult.issues.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-green-600">No Issues Found!</p>
                <p className="text-gray-600">This page follows SEO best practices.</p>
              </CardContent>
            </Card>
          ) : (
            auditResult.issues.map((issue, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      {issue.type === 'error' && <XCircle className="h-5 w-5 text-red-500" />}
                      {issue.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                      {issue.type === 'info' && <Info className="h-5 w-5 text-blue-500" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{issue.message}</h4>
                        <Badge variant={getBadgeVariant(issue.type)}>
                          {issue.type}
                        </Badge>
                      </div>
                      {issue.element && (
                        <p className="text-sm text-gray-600 mb-2">
                          Element: <code className="bg-gray-100 px-1 rounded">{issue.element}</code>
                        </p>
                      )}
                      <p className="text-sm text-gray-700">
                        💡 {issue.recommendation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
        
        <TabsContent value="passed" className="space-y-2">
          {auditResult.passedChecks.map((check, index) => (
            <div key={index} className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-green-800">{check}</span>
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="recommendations" className="space-y-2">
          {auditResult.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
              <Info className="h-4 w-4 text-blue-500 mt-0.5" />
              <span className="text-sm text-blue-800">{rec}</span>
            </div>
          ))}
        </TabsContent>
      </Tabs>

      {/* Console Report */}
      {showFullReport && (
        <Card>
          <CardHeader>
            <CardTitle>Console Report</CardTitle>
            <CardDescription>
              Copy this report for development purposes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="text-xs bg-gray-100 p-4 rounded-lg overflow-auto max-h-96">
              {formatAuditReport(auditResult)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}