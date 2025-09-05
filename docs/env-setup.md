# Environment Setup Guide

This guide explains how to set up environment variables and configuration for local development and deployment of the ASIU-CSIU web monorepo.

## Overview

Environment variables store sensitive configuration data like database connections, API keys, and secrets. We use different environment files for different stages of development.

## Environment Files Structure

```
asiu-csiu-web-monorepo/
├── apps/
│   ├── asiu/
│   │   ├── .env.example          # Template for ASIU app
│   │   ├── .env.local            # Your local development (not committed)
│   │   └── .env.production       # Production config (not committed)
│   ├── csiu/
│   │   ├── .env.example          # Template for CSIU app  
│   │   ├── .env.local            # Your local development (not committed)
│   │   └── .env.production       # Production config (not committed)
│   └── cms/
│       ├── .env.example          # Template for CMS
│       ├── .env.local            # Your local development (not committed)
│       └── .env.production       # Production config (not committed)
```

## Environment Variable Types

### Database Variables
- `DATABASE_URL`: PostgreSQL connection string
- `DATABASE_POOL_MAX`: Maximum database connections

### Authentication Variables  
- `NEXTAUTH_URL`: Your app's URL
- `NEXTAUTH_SECRET`: Random secret for session encryption
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

### API Variables
- `CMS_API_URL`: Content Management System API endpoint
- `CMS_API_KEY`: API key for CMS access

### External Services
- `AWS_ACCESS_KEY_ID`: AWS S3 access key
- `AWS_SECRET_ACCESS_KEY`: AWS S3 secret key
- `AWS_S3_BUCKET`: S3 bucket name for file storage

## Setting Up Local Development

### Step 1: Copy Example Files

For each app you want to develop:

```bash
# For ASIU app
cd apps/asiu
cp .env.example .env.local

# For CSIU app  
cd apps/csiu
cp .env.example .env.local

# For CMS
cd apps/cms
cp .env.example .env.local
```

### Step 2: Fill in Your Values

Edit each `.env.local` file with your development values:

```bash
# Edit with your preferred editor
code apps/asiu/.env.local
```

### Step 3: Generate Required Secrets

Some variables need randomly generated values:

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate JWT_SECRET  
openssl rand -base64 64

# Generate API keys (use online generator or)
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## ASIU App Environment Variables

### .env.example for ASIU

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/asiu_dev"
DATABASE_POOL_MAX=10

# Authentication (NextAuth.js)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# Google OAuth (optional for login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# CMS Integration
CMS_API_URL="http://localhost:3002/api"
CMS_API_KEY="your-cms-api-key"

# File Upload (AWS S3)
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_S3_BUCKET="asiu-dev-uploads"
AWS_REGION="us-west-2"

# Email Configuration (optional)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Analytics (optional)
GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"

# Development Settings
NODE_ENV="development"
NEXT_DEBUG=true
```

### Required vs Optional Variables

#### Required for Basic Functionality:
- `DATABASE_URL`
- `NEXTAUTH_URL`  
- `NEXTAUTH_SECRET`

#### Optional for Enhanced Features:
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` (Google login)
- `AWS_*` variables (file uploads)
- `SMTP_*` variables (email sending)
- `GOOGLE_ANALYTICS_ID` (analytics)

## CSIU App Environment Variables

### .env.example for CSIU

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/csiu_dev"
DATABASE_POOL_MAX=10

# Authentication (NextAuth.js)
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# Microsoft OAuth (for institutional login)
MICROSOFT_CLIENT_ID="your-microsoft-client-id"
MICROSOFT_CLIENT_SECRET="your-microsoft-client-secret"
MICROSOFT_TENANT_ID="your-university-tenant-id"

# CMS Integration
CMS_API_URL="http://localhost:3002/api"
CMS_API_KEY="your-cms-api-key"

# File Upload (AWS S3)
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"  
AWS_S3_BUCKET="csiu-dev-uploads"
AWS_REGION="us-west-2"

# University Integration
UNIVERSITY_API_URL="https://api.university.edu"
UNIVERSITY_API_KEY="your-university-api-key"

# Course Management
COURSE_CATALOG_API="https://courses.university.edu/api"

# Event Calendar
CALENDAR_API_URL="https://calendar.university.edu/api"

# Development Settings
NODE_ENV="development"
NEXT_DEBUG=true
```

## CMS Environment Variables

### .env.example for CMS

```bash
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/cms_dev"

# Admin Authentication
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="secure-admin-password"
JWT_SECRET="your-jwt-secret-here"

# File Storage (AWS S3)
AWS_ACCESS_KEY_ID="your-aws-access-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret-key"
AWS_S3_BUCKET="cms-dev-storage"
AWS_REGION="us-west-2"

# Image Processing
CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
CLOUDINARY_API_KEY="your-cloudinary-key"
CLOUDINARY_API_SECRET="your-cloudinary-secret"

# API Configuration
API_RATE_LIMIT=100
API_TIMEOUT=30000

# Email Notifications
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="cms@example.com"
SMTP_PASS="your-app-password"

# Content Backup
BACKUP_SCHEDULE="0 2 * * *"  # Daily at 2 AM
BACKUP_RETENTION_DAYS=30

# Development Settings
NODE_ENV="development"
DEBUG_MODE=true
```

## Production Environment Setup

### Vercel Environment Variables

For production deployment, set environment variables in Vercel dashboard:

#### Step 1: Access Environment Variables
1. Go to Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"

#### Step 2: Add Variables
1. Click "Add New"
2. Enter variable name (e.g., `DATABASE_URL`)
3. Enter variable value
4. Select environments: Production, Preview, Development
5. Click "Save"

#### Step 3: Secure Variables
- Use **Vercel's secret management** for sensitive data
- Never commit production values to Git
- Use different secrets for production vs development

### Production-Specific Variables

```bash
# Production Database (managed service)
DATABASE_URL="postgresql://prod-user:password@prod-host:5432/prod_db"

# Production URLs
NEXTAUTH_URL="https://asiu.example.com"
CMS_API_URL="https://cms.example.com/api"

# Production file storage
AWS_S3_BUCKET="asiu-production-uploads"

# Production email
SMTP_HOST="smtp.sendgrid.net"
SMTP_USER="apikey"
SMTP_PASS="your-sendgrid-api-key"
```

## Database Setup

### Local Development Database

#### Option 1: Docker (Recommended)
```bash
# Run PostgreSQL in Docker
docker run --name postgres-dev \
  -e POSTGRES_DB=asiu_dev \
  -e POSTGRES_USER=dev_user \
  -e POSTGRES_PASSWORD=dev_password \
  -p 5432:5432 \
  -d postgres:15

# Connection string
DATABASE_URL="postgresql://dev_user:dev_password@localhost:5432/asiu_dev"
```

#### Option 2: Local Installation
1. Install PostgreSQL locally
2. Create development database:
   ```sql
   CREATE DATABASE asiu_dev;
   CREATE USER dev_user WITH PASSWORD 'dev_password';
   GRANT ALL PRIVILEGES ON DATABASE asiu_dev TO dev_user;
   ```

### Production Database

[UPDATE MAINTAINERS: Add production database information]
- **Provider:** [e.g., Supabase, PlanetScale, AWS RDS]
- **Connection details:** Stored securely in Vercel
- **Backup schedule:** [e.g., Daily automated backups]

## External Service Setup

### AWS S3 Setup

#### Step 1: Create S3 Bucket
1. Login to AWS Console
2. Go to S3 service
3. Create new bucket (e.g., `asiu-dev-uploads`)
4. Set permissions for public read (for uploaded images)

#### Step 2: Create IAM User
1. Go to IAM service
2. Create new user for application
3. Attach S3 permissions policy
4. Generate access keys

#### Step 3: Configure CORS
Add CORS policy to your S3 bucket:
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "POST", "PUT", "DELETE"],
    "AllowedOrigins": ["http://localhost:3000", "https://your-domain.com"],
    "ExposeHeaders": []
  }
]
```

### Google OAuth Setup

#### Step 1: Create Google Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable Google+ API

#### Step 2: Create OAuth Credentials
1. Go to "Credentials" section
2. Create "OAuth 2.0 Client ID"
3. Set authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://your-domain.com/api/auth/callback/google`

#### Step 3: Add to Environment
```bash
GOOGLE_CLIENT_ID="your-client-id.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

## Validation and Testing

### Environment Variable Validation

Create a validation script to check required variables:

```javascript
// scripts/validate-env.js
const requiredVars = [
  'DATABASE_URL',
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET'
];

for (const varName of requiredVars) {
  if (!process.env[varName]) {
    console.error(`❌ Missing required environment variable: ${varName}`);
    process.exit(1);
  }
}

console.log('✅ All required environment variables are set');
```

Run validation:
```bash
node scripts/validate-env.js
```

### Testing Environment Setup

```bash
# Test database connection
npm run db:test

# Test external APIs
npm run test:apis

# Test file upload
npm run test:uploads

# Run full environment test
npm run test:env
```

## Security Best Practices

### Environment Variable Security

1. **Never commit** `.env.local` or production env files
2. **Use strong secrets** (minimum 32 characters)
3. **Rotate secrets** regularly (quarterly)
4. **Limit permissions** for API keys
5. **Use different values** for development vs production

### .gitignore Configuration

Ensure these files are ignored:
```gitignore
# Environment files
.env.local
.env.production
.env

# Exception: example files should be committed
!.env.example
```

### Secret Management

- **Development:** Use `.env.local` files
- **Production:** Use Vercel environment variables
- **Team sharing:** Use secure password manager
- **Documentation:** Never include actual secrets in docs

## Troubleshooting

### Common Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| Database connection failed | App won't start | Check DATABASE_URL format |
| NextAuth error | Login not working | Verify NEXTAUTH_SECRET is set |
| File upload failing | Upload errors | Check AWS credentials and bucket |
| API calls failing | Network errors | Verify API URLs and keys |

### Debug Environment Issues

```bash
# Check which variables are loaded
npm run env:check

# Test database connection
npm run db:ping

# Validate all required variables
npm run env:validate

# Show environment (without secrets)
npm run env:show
```

### Getting Help

- **Database issues:** Check [Database Guide] (if exists)
- **Deployment issues:** See [Deployment Guide](/docs/deployment.md)
- **General setup:** Refer to [Onboarding Guide](/docs/onboarding.md)
- **Contact maintainers:** See [Maintainers](/MAINTAINERS.md)

---
**Last Updated:** [UPDATE DATE] | **Maintainer:** [UPDATE MAINTAINERS HERE]