# Deployment Guide

This guide explains how our deployment system works and how to manage deployments for the ASIU-CSIU web monorepo.

## Overview

Our deployment system uses Vercel for hosting and GitHub Actions for continuous integration. Every time code is pushed to the main branch, it automatically deploys to production.

## Deployment Architecture

```
GitHub Repository
      ↓
GitHub Actions (CI/CD)
      ↓  
Vercel Hosting
      ↓
Live Websites
```

### Applications & URLs

[UPDATE MAINTAINERS: Add actual URLs]
- **ASIU Production:** `https://[asiu-domain.com]`
- **CSIU Production:** `https://[csiu-domain.com]`
- **CMS Production:** `https://[cms-domain.com]`

## How Deployments Work

### Automatic Deployments

1. **Push to main branch** triggers deployment
2. **GitHub Actions** run tests and builds
3. **Vercel** automatically deploys if tests pass
4. **Live site** updates within 2-3 minutes

### Preview Deployments

Every Pull Request gets its own preview URL:
- Automatically created when PR is opened
- Updated when new commits are pushed
- Perfect for reviewing changes before merging

## Environment Variables

### Production Environment Variables

Each app requires specific environment variables to function. These are configured in Vercel dashboard.

#### ASIU App Environment Variables
```bash
# Database
DATABASE_URL=postgresql://[connection-string]
DATABASE_POOL_MAX=10

# Authentication
NEXTAUTH_URL=https://[asiu-domain.com]
NEXTAUTH_SECRET=[generated-secret]

# CMS Integration
CMS_API_URL=https://[cms-domain.com]/api
CMS_API_KEY=[api-key]

# Analytics (optional)
GOOGLE_ANALYTICS_ID=[ga-id]
```

#### CSIU App Environment Variables
```bash
# Database
DATABASE_URL=postgresql://[connection-string]
DATABASE_POOL_MAX=10

# Authentication
NEXTAUTH_URL=https://[csiu-domain.com]
NEXTAUTH_SECRET=[generated-secret]

# CMS Integration
CMS_API_URL=https://[cms-domain.com]/api
CMS_API_KEY=[api-key]

# Analytics (optional)
GOOGLE_ANALYTICS_ID=[ga-id]
```

#### CMS Environment Variables
```bash
# Database
DATABASE_URL=postgresql://[connection-string]

# File Storage
AWS_S3_BUCKET=[bucket-name]
AWS_ACCESS_KEY_ID=[access-key]
AWS_SECRET_ACCESS_KEY=[secret-key]
AWS_REGION=[region]

# Admin Access
ADMIN_EMAIL=[admin-email]
ADMIN_PASSWORD=[secure-password]

# API Security
JWT_SECRET=[generated-secret]
API_RATE_LIMIT=100
```

### Setting Environment Variables

#### In Vercel Dashboard:
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add key-value pairs
4. Select environments (Production, Preview, Development)
5. Save changes

#### For Local Development:
Create `.env.local` files in each app directory:
```bash
# apps/asiu/.env.local
DATABASE_URL=postgresql://localhost:5432/asiu_dev
NEXTAUTH_SECRET=local-development-secret
# ... other variables
```

See [Environment Setup Guide](/docs/env-setup.md) for complete `.env.example` files.

## Deployment Process

### Step 1: Code Changes
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test locally: `npm run dev:asiu` (or appropriate app)
4. Run tests: `npm run lint && npm run build`

### Step 2: Pull Request
1. Push branch: `git push origin feature/your-feature`
2. Create Pull Request on GitHub
3. **Preview deployment** automatically created
4. Review changes using preview URL
5. Request code review from maintainers

### Step 3: Review Process
1. Code review by 2+ maintainers
2. All CI checks must pass:
   - ESLint (code style)
   - TypeScript compilation
   - Build process
   - Automated tests (if any)
3. Preview deployment must be working

### Step 4: Production Deployment
1. Merge Pull Request to main branch
2. **Automatic deployment** starts immediately
3. Monitor deployment in Vercel dashboard
4. Verify live site is working correctly

## Managing Deployments

### Monitoring Deployments

#### Using Vercel Dashboard:
1. Login to Vercel
2. Select project (asiu, csiu, or cms)
3. View "Deployments" tab
4. Check status: Building, Ready, Error

#### Using GitHub Actions:
1. Go to repository on GitHub
2. Click "Actions" tab
3. View workflow runs
4. Check for any failed jobs

### Rollback Procedures

If a deployment causes issues:

#### Quick Rollback (Vercel):
1. Go to Vercel project dashboard
2. Find previous successful deployment
3. Click "..." menu → "Promote to Production"
4. Confirm rollback

#### Git Rollback (for major issues):
1. Identify last good commit:
   ```bash
   git log --oneline
   ```
2. Create revert commit:
   ```bash
   git revert [bad-commit-hash]
   ```
3. Push revert:
   ```bash
   git push origin main
   ```

### Hotfix Deployments

For urgent fixes:

1. Create hotfix branch from main:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/urgent-fix
   ```

2. Make minimal fix
3. Test quickly but thoroughly
4. Create PR with "HOTFIX" label
5. Get expedited review
6. Deploy immediately after merge

## Build Process

### Understanding the Build

Each app builds independently but shares common packages:

```bash
# Install dependencies
npm install

# Build shared packages first
npm run build --filter=@repo/ui
npm run build --filter=@repo/eslint-config

# Build specific app
npm run build:asiu
# or
npm run build:csiu
# or  
npm run build:cms
```

### Build Optimization

Our builds are optimized for:
- **Fast loading** with code splitting
- **SEO** with static generation
- **Performance** with image optimization
- **Security** with environment variable validation

### Common Build Issues

| Error | Cause | Solution |
|-------|-------|----------|
| TypeScript errors | Type mismatches | Fix type issues before deploying |
| Missing env vars | Undefined variables | Add to Vercel settings |
| Import errors | Wrong file paths | Check import statements |
| Build timeout | Large dependencies | Optimize bundle size |

## Database Deployments

### Database Migrations

When database schema changes:

1. **Create migration** in development
2. **Test migration** thoroughly
3. **Backup production database**
4. **Apply migration** during low-traffic hours
5. **Verify** application still works

### Migration Process

```bash
# Create migration
npm run migrate:create --name="add_new_table"

# Test locally
npm run migrate:up

# Apply to production (via admin panel or CLI)
npm run migrate:prod
```

## Security Considerations

### Environment Variable Security
- Never commit secrets to Git
- Use different secrets for different environments
- Rotate secrets regularly
- Use strong, generated passwords

### Deployment Security
- All deployments use HTTPS
- Environment variables are encrypted
- Access logs are monitored
- Dependencies are scanned for vulnerabilities

## Performance Monitoring

### Metrics to Watch
- **Page load times** (< 3 seconds)
- **Build times** (< 10 minutes)
- **Deployment frequency** (weekly average)
- **Failure rate** (< 5%)

### Tools for Monitoring
- **Vercel Analytics** for performance metrics
- **Google Lighthouse** for performance audits
- **GitHub Actions** for build metrics
- **Uptime monitoring** (external service)

## Troubleshooting

### Deployment Stuck or Failed

1. **Check Vercel logs**:
   - Go to deployment in dashboard
   - View "Build Logs" and "Function Logs"
   - Look for error messages

2. **Check environment variables**:
   - Verify all required vars are set
   - Check for typos in variable names
   - Ensure secrets are correctly formatted

3. **Check dependencies**:
   - Look for version conflicts
   - Verify all packages are properly installed
   - Check for deprecated packages

### Getting Help

- **Build issues:** Check build logs in Vercel dashboard
- **Code issues:** Create issue on GitHub with error details
- **Infrastructure issues:** Contact admin team (see [Admin Guide](/docs/admin-guide.md))
- **Emergency:** Use emergency contact (see [Maintainers](/MAINTAINERS.md))

---
**Last Updated:** [UPDATE DATE] | **Maintainer:** [UPDATE MAINTAINERS HERE]