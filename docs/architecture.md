# Architecture Guide

This guide explains the system architecture, technology choices, and design decisions for the ASIU-CSIU web monorepo.

## Overview

Our monorepo contains three main web applications that work together to serve the Alberta Students in Information Sciences (ASIU) and Computer Science Initiatives Unit (CSIU) communities.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Traffic                              │
└─────────────────┬───────────────┬───────────────────────────┘
                  │               │
          ┌───────▼──────┐ ┌──────▼──────┐ ┌─────────────┐
          │ ASIU Website │ │ CSIU Website│ │ CMS Admin   │
          │(Public Site) │ │(Public Site)│ │(Content Mgmt)│
          └───────┬──────┘ └──────┬──────┘ └──────┬──────┘
                  │               │               │
                  └───────────────┼───────────────┘
                                  │
                  ┌───────────────▼───────────────┐
                  │        Shared Services        │
                  │ • Database (PostgreSQL)       │
                  │ • File Storage (AWS S3)       │
                  │ • Authentication (NextAuth)   │
                  │ • UI Components (@repo/ui)    │
                  └───────────────────────────────┘
```

## Technology Stack

### Frontend Technologies

#### Framework: Next.js 14
- **Why Next.js:** 
  - Server-side rendering for better SEO
  - Built-in optimization features
  - Excellent TypeScript support
  - Large community and documentation

#### UI Framework: React 18
- **Component-based architecture**
- **Hooks for state management**
- **Concurrent features for performance**

#### Styling: Tailwind CSS + shadcn/ui
- **Utility-first CSS framework**
- **Consistent design system**
- **Pre-built accessible components**
- **Easy to customize and extend**

#### Language: TypeScript
- **Type safety** prevents runtime errors
- **Better developer experience** with IntelliSense
- **Easier refactoring** and maintenance
- **Self-documenting code**

### Backend Technologies

#### Runtime: Node.js
- **JavaScript everywhere** (same language frontend/backend)
- **Large package ecosystem** (npm)
- **Good performance** for I/O operations
- **Excellent TypeScript support**

#### Database: PostgreSQL
- **ACID compliance** for data integrity
- **JSON support** for flexible data
- **Excellent performance** with proper indexing
- **Rich feature set** (full-text search, etc.)

#### Authentication: NextAuth.js
- **Multiple providers** (Google, Microsoft, etc.)
- **Secure by default**
- **Easy to configure**
- **Good TypeScript support**

#### File Storage: AWS S3
- **Scalable storage** for images and documents
- **CDN integration** for fast delivery
- **Reliable and secure**
- **Cost-effective**

### Development Tools

#### Package Manager: npm
- **Standard Node.js package manager**
- **Lockfile for reproducible builds**
- **Workspace support for monorepos**

#### Monorepo Management: Turborepo
- **Fast builds** with intelligent caching
- **Parallel task execution**
- **Easy workspace management**
- **Great developer experience**

#### Code Quality
- **ESLint:** Code linting and style enforcement
- **Prettier:** Automatic code formatting
- **TypeScript:** Static type checking
- **Husky:** Git hooks for quality gates

## Application Architecture

### ASIU Website (`apps/asiu`)

#### Purpose
Public website for Alberta Students in Information Sciences organization.

#### Key Features
- **Member information and profiles**
- **Event announcements and calendar**
- **News and blog posts**
- **Contact forms and inquiries**
- **Resource sharing and downloads**

#### Architecture Pattern: Hybrid SSR/SSG
```
Pages/
├── Home (SSG)              # Static homepage for fast loading
├── About (SSG)             # Static about page
├── Events (SSR)            # Server-rendered for real-time data
├── News/Blog (SSR)         # Server-rendered for SEO + fresh content
├── Members (SSR + Auth)    # Protected member directory
└── Contact (SSR)           # Form handling requires server
```

#### Data Flow
```
User Request → Next.js Router → Page Component → API Routes → Database
                                    ↓
                              Component renders with data
                                    ↓
                              HTML sent to browser
```

### CSIU Website (`apps/csiu`)

#### Purpose
Academic-focused website for Computer Science Initiatives Unit.

#### Key Features
- **Course information and schedules**
- **Academic resources and tutorials**
- **Research project showcases**
- **Student achievement recognition**
- **University integration**

#### Architecture Pattern: SSR with ISR
```
Pages/
├── Course Catalog (ISR)    # Incremental Static Regeneration
├── Resources (SSG)         # Static resource pages
├── Projects (SSR)          # Real-time project data
├── Calendar (SSR)          # Live academic calendar
└── Admin Panel (SSR + Auth) # Protected administrative functions
```

#### University Integration
```
CSIU App ←→ University API ←→ Course Management System
         ←→ Student Information System
         ←→ Academic Calendar System
```

### CMS Application (`apps/cms`)

#### Purpose
Content management system for both ASIU and CSIU websites.

#### Key Features
- **Content creation and editing**
- **Media management**
- **User and permission management**
- **Content review and approval workflow**
- **API for content delivery**

#### Architecture Pattern: SPA with API
```
CMS Frontend (React SPA)
           ↓
      API Routes (/api/*)
           ↓
    Database Operations
           ↓
    Content Updates
           ↓
    Webhook Triggers
           ↓
  Website Regeneration
```

## Shared Architecture Components

### UI Component Library (`packages/ui`)

#### Purpose
Shared React components used across all applications.

#### Component Categories
- **Layout:** Headers, footers, navigation
- **Forms:** Input fields, buttons, validation
- **Data Display:** Cards, tables, lists
- **Feedback:** Alerts, modals, loading states
- **Navigation:** Breadcrumbs, pagination, tabs

#### Design System
```
Theme Configuration
├── Colors (primary, secondary, accent)
├── Typography (fonts, sizes, weights)
├── Spacing (margins, padding, gaps)
├── Breakpoints (mobile, tablet, desktop)
└── Animations (transitions, transforms)
```

### Configuration Packages

#### ESLint Config (`packages/eslint-config`)
- **Shared linting rules** across all apps
- **TypeScript-specific rules**
- **React best practices**
- **Accessibility guidelines**

#### TypeScript Config (`packages/typescript-config`)
- **Base TypeScript configuration**
- **Strict type checking**
- **Path mapping for imports**
- **Build optimization settings**

## Data Architecture

### Database Design

#### Core Entities
```sql
-- Users (shared across applications)
Users
├── id (primary key)
├── email (unique)
├── name
├── role (admin, member, user)
├── created_at
└── updated_at

-- Content (managed through CMS)
Content
├── id (primary key)
├── title
├── body (rich text)
├── type (post, page, event)
├── status (draft, published, archived)
├── author_id (foreign key to Users)
├── published_at
└── metadata (JSON)

-- Files (uploaded media)
Files
├── id (primary key)
├── filename
├── url (S3 URL)
├── type (image, document, video)
├── size
└── uploaded_by (foreign key to Users)
```

#### Relationships
```
Users ──one-to-many──→ Content
Users ──one-to-many──→ Files
Content ──many-to-many──→ Files (through content_files table)
```

### API Design

#### REST API Patterns
```
GET    /api/content           # List content
GET    /api/content/:id       # Get specific content
POST   /api/content           # Create new content
PUT    /api/content/:id       # Update content
DELETE /api/content/:id       # Delete content
```

#### Authentication Flow
```
1. User logs in → NextAuth creates session
2. Session stored in encrypted cookie
3. API routes validate session
4. Database queries include user context
5. Response includes only authorized data
```

## Deployment Architecture

### Hosting: Vercel

#### Why Vercel
- **Optimized for Next.js** applications
- **Automatic deployments** from Git
- **Edge computing** for global performance
- **Built-in monitoring** and analytics

#### Deployment Flow
```
Git Push → GitHub → Vercel Build → Edge Deployment
                                         ↓
                                  Global CDN
                                         ↓
                               User Traffic Routed
```

### Environment Separation
```
Development (localhost:3000+)
     ↓
Preview (Vercel preview URLs)
     ↓
Production (custom domains)
```

### Scaling Strategy

#### Current Scale
- **Traffic:** ~1000 monthly active users per app
- **Data:** ~100MB database, ~1GB file storage
- **Performance:** <3 second page loads

#### Scaling Approach
1. **Vertical scaling:** Increase Vercel plan limits
2. **Database scaling:** Use read replicas
3. **CDN optimization:** Cloudflare integration
4. **Caching layers:** Redis for session storage

## Security Architecture

### Security Layers

#### Frontend Security
- **Content Security Policy** (CSP) headers
- **XSS protection** through React's built-in escaping
- **CSRF protection** via SameSite cookies
- **HTTPS enforcement** for all traffic

#### API Security
- **Authentication required** for sensitive endpoints
- **Input validation** on all user data
- **Rate limiting** to prevent abuse
- **SQL injection prevention** through parameterized queries

#### Infrastructure Security
- **Environment variable** security (Vercel secrets)
- **Database access** restricted to application only
- **File upload** validation and scanning
- **Regular dependency** security updates

### Data Protection

#### Personal Information
- **Minimal data collection** principle
- **Encrypted data transmission** (HTTPS)
- **Secure session management**
- **GDPR compliance** considerations

#### Content Security
- **Version control** for all content changes
- **Backup and recovery** procedures
- **Access logging** for audit trails

## Performance Architecture

### Frontend Performance

#### Optimization Strategies
- **Code splitting** by page and feature
- **Image optimization** with Next.js Image component
- **Static generation** where possible
- **Client-side caching** for API responses

#### Monitoring
- **Core Web Vitals** tracking
- **Real User Monitoring** (RUM)
- **Performance budgets** for bundle size
- **Lighthouse CI** in deployment pipeline

### Backend Performance

#### Database Optimization
- **Proper indexing** on frequently queried fields
- **Query optimization** and monitoring
- **Connection pooling** for efficiency
- **Database query caching**

#### API Performance
- **Response caching** with appropriate headers
- **Pagination** for large data sets
- **Background job processing** for heavy tasks
- **API response compression**

## Development Workflow

### Code Organization

#### Monorepo Structure Benefits
- **Shared code** reduces duplication
- **Consistent tooling** across all apps
- **Atomic commits** across multiple apps
- **Simplified dependency management**

#### File Organization
```
apps/[app-name]/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # App-specific components
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript definitions
├── public/                  # Static assets
└── package.json             # App dependencies
```

### Development Process

#### Feature Development
1. **Create feature branch** from main
2. **Develop with hot reload** using dev servers
3. **Write tests** for new functionality
4. **Run quality checks** (lint, type-check, build)
5. **Create pull request** with preview deployment
6. **Code review** by team members
7. **Merge to main** triggers production deployment

#### Quality Assurance
- **Automated testing** in CI/CD pipeline
- **Manual testing** on preview deployments
- **Accessibility testing** with automated tools
- **Performance testing** with Lighthouse

## Future Architecture Considerations

### Potential Improvements

#### Performance Enhancements
- **Service Worker** for offline functionality
- **Progressive Web App** features
- **Advanced caching strategies**
- **GraphQL** for more efficient data fetching

#### Scalability Improvements
- **Microservices** if individual apps need different scaling
- **Serverless functions** for background tasks
- **Message queues** for async processing
- **Multi-region deployment**

#### Developer Experience
- **Hot reload** improvements
- **Better debugging tools**
- **Automated testing** expansion
- **Documentation generation**

### Technology Evolution

#### Staying Current
- **Regular dependency updates**
- **Framework version upgrades**
- **Security patch application**
- **Performance optimization reviews**

#### Migration Planning
- **Gradual migration** approach for major changes
- **Feature flags** for testing new functionality
- **Rollback procedures** for failed deployments
- **Documentation updates** for architecture changes

---
**Last Updated:** [UPDATE DATE] | **Maintainer:** [UPDATE MAINTAINERS HERE]