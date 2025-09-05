# Domain Configuration Guide

This guide covers DNS setup, domain management, and SSL configuration for the ASIU-CSIU web monorepo using Porkbun as our domain registrar.

## Overview

We use Porkbun for domain registration and DNS management, with Vercel handling SSL certificates and hosting. This guide will help you configure domains properly for all three applications.

## Current Domain Setup

[UPDATE MAINTAINERS: Replace with actual domain information]

### Primary Domains
- **ASIU Website:** `asiu.example.com`
- **CSIU Website:** `csiu.example.com`
- **CMS System:** `cms.example.com`

### Development/Staging Domains
- **ASIU Staging:** `staging-asiu.example.com`
- **CSIU Staging:** `staging-csiu.example.com`
- **CMS Staging:** `staging-cms.example.com`

## Porkbun Account Setup

### Accessing Porkbun
1. **Login URL:** `https://porkbun.com/account/login`
2. **Account credentials:** [UPDATE MAINTAINERS: Add secure credential reference]
3. **Two-factor authentication:** Enabled (required for security)

### Account Security
- Use strong, unique password
- Enable 2FA with authenticator app
- Regularly review login history
- Add multiple admin contacts for redundancy

## DNS Configuration

### Basic DNS Records

#### A Records (for main domains)
```
Type: A
Name: asiu
Content: [Vercel IP - will be provided by Vercel]
TTL: 600 (10 minutes)

Type: A  
Name: csiu
Content: [Vercel IP - will be provided by Vercel]
TTL: 600

Type: A
Name: cms
Content: [Vercel IP - will be provided by Vercel]  
TTL: 600
```

#### CNAME Records (for subdomains)
```
Type: CNAME
Name: www.asiu
Content: asiu.example.com
TTL: 600

Type: CNAME
Name: www.csiu  
Content: csiu.example.com
TTL: 600

Type: CNAME
Name: staging-asiu
Content: [vercel-staging-url].vercel.app
TTL: 600
```

#### MX Records (for email, if needed)
```
Type: MX
Name: @
Content: [email-provider-mx-record]
Priority: 10
TTL: 3600
```

### Adding DNS Records in Porkbun

#### Step 1: Access DNS Management
1. Login to Porkbun dashboard
2. Click on your domain name
3. Navigate to "DNS" tab
4. Click "Edit" next to DNS Records

#### Step 2: Add A Record
1. Click "Add Record"
2. Select "A" from dropdown
3. Enter subdomain name (e.g., "asiu")
4. Enter IP address (get from Vercel)
5. Set TTL to 600 seconds
6. Click "Add"

#### Step 3: Add CNAME Record
1. Click "Add Record"
2. Select "CNAME" from dropdown
3. Enter subdomain name (e.g., "www.asiu")
4. Enter target domain (e.g., "asiu.example.com")
5. Set TTL to 600 seconds
6. Click "Add"

#### Step 4: Verify Records
1. Wait 5-10 minutes for propagation
2. Use online DNS checker tool
3. Test with command line:
   ```bash
   dig asiu.example.com
   nslookup asiu.example.com
   ```

## Vercel Domain Configuration

### Connecting Domains to Vercel

#### Step 1: Add Domain in Vercel
1. Go to Vercel dashboard
2. Select your project (asiu, csiu, or cms)
3. Go to "Settings" → "Domains"
4. Click "Add"
5. Enter your domain (e.g., asiu.example.com)

#### Step 2: Verify Domain Ownership
1. Vercel will provide DNS records to add
2. Add these records in Porkbun DNS management
3. Wait for verification (usually 5-10 minutes)
4. Click "Verify" in Vercel dashboard

#### Step 3: Configure SSL
1. SSL certificates are automatically provisioned
2. Wait for "SSL Certificate Provisioned" status
3. Verify HTTPS works by visiting your domain

### Multiple Domain Setup

For each application, repeat the process:

#### ASIU Application
- Domain: `asiu.example.com`
- Vercel Project: `asiu-website`
- DNS Records: A record pointing to Vercel IP

#### CSIU Application  
- Domain: `csiu.example.com`
- Vercel Project: `csiu-website`
- DNS Records: A record pointing to Vercel IP

#### CMS Application
- Domain: `cms.example.com`
- Vercel Project: `cms-system`
- DNS Records: A record pointing to Vercel IP

## SSL Certificate Management

### Automatic SSL with Vercel

Vercel automatically handles SSL certificates:
- **Let's Encrypt** certificates (free)
- **Automatic renewal** every 60 days
- **Wildcard support** for subdomains
- **HTTPS redirect** automatically configured

### Monitoring SSL Status

#### Check SSL Certificate Status:
1. Visit your domain in browser
2. Click lock icon in address bar
3. View certificate details
4. Check expiration date

#### Command Line Check:
```bash
# Check SSL certificate
openssl s_client -connect asiu.example.com:443 -servername asiu.example.com

# Check certificate expiration
echo | openssl s_client -connect asiu.example.com:443 2>/dev/null | openssl x509 -noout -dates
```

### SSL Troubleshooting

| Issue | Symptoms | Solution |
|-------|----------|----------|
| Certificate not trusted | Browser security warning | Wait for propagation, check DNS |
| Mixed content warnings | Some resources over HTTP | Update all links to use HTTPS |
| Certificate mismatch | Wrong domain on certificate | Verify domain configuration |

## Domain Renewal Management

### Renewal Schedule

[UPDATE MAINTAINERS: Add actual renewal dates]
- **asiu.example.com:** Expires [DATE]
- **csiu.example.com:** Expires [DATE]  
- **cms.example.com:** Expires [DATE]

### Setting Up Auto-Renewal

#### In Porkbun:
1. Go to "My Account" → "Auto Renew"
2. Enable auto-renewal for each domain
3. Set renewal period (1-5 years)
4. Verify payment method is current
5. Set up renewal notifications

#### Manual Renewal Process:
1. Login to Porkbun 60 days before expiration
2. Go to domain management
3. Click "Renew" next to domain
4. Select renewal period
5. Complete payment
6. Verify renewal confirmation

### Renewal Notifications

Set up multiple notification methods:
- **Email alerts** 90, 60, 30, and 7 days before expiration
- **Calendar reminders** for domain renewal dates
- **Team notifications** in project communication channels

## Email Configuration (Optional)

If you need email for your domains:

### Google Workspace Setup
1. Add MX records in Porkbun:
   ```
   Type: MX
   Name: @
   Content: aspmx.l.google.com
   Priority: 1
   ```

2. Add additional MX records as provided by Google

3. Add TXT record for domain verification:
   ```
   Type: TXT
   Name: @
   Content: google-site-verification=[verification-code]
   ```

### Custom Email Provider
Follow your email provider's DNS setup instructions, typically involving:
- MX records for mail routing
- SPF record for sender authentication
- DKIM record for email signing
- DMARC record for email security

## Testing and Validation

### DNS Propagation Testing

Use these tools to verify DNS changes:
- **whatsmydns.net** - Global DNS propagation checker
- **dnschecker.org** - Multiple location DNS lookup
- **dig** command - Local DNS testing

### Domain Testing Checklist

- [ ] Domain resolves to correct IP address
- [ ] WWW subdomain redirects properly
- [ ] HTTPS certificate is valid and trusted
- [ ] All redirects work correctly
- [ ] Email (if configured) is working
- [ ] Staging domains are properly configured

### Performance Testing

After domain setup:
1. **Speed test** using GTmetrix or PageSpeed Insights
2. **SSL test** using SSL Labs
3. **DNS performance** using DNS Speed Test
4. **Uptime monitoring** setup

## Troubleshooting Common Issues

### Domain Not Resolving

1. **Check DNS propagation** (can take up to 48 hours)
2. **Verify DNS records** are correctly entered
3. **Check TTL values** (lower = faster propagation)
4. **Clear local DNS cache**:
   ```bash
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemctl restart systemd-resolved
   ```

### SSL Certificate Issues

1. **Wait for automatic provisioning** (up to 24 hours)
2. **Check domain ownership verification**
3. **Verify DNS records point to Vercel**
4. **Contact Vercel support** if issues persist

### Performance Issues

1. **Check DNS response times**
2. **Verify CDN configuration**
3. **Review TTL settings**
4. **Consider using Cloudflare** for additional optimization

## Security Best Practices

### DNS Security
- Enable **DNS Security Extensions (DNSSEC)** if supported
- Use **strong passwords** for registrar accounts
- Enable **two-factor authentication**
- Regularly **audit DNS changes**

### Domain Security
- Set up **domain monitoring** for unauthorized changes
- Configure **registrar lock** to prevent transfers
- Keep **contact information** up to date
- Use **privacy protection** for WHOIS data

### Monitoring and Alerts
- **Uptime monitoring** for all domains
- **SSL certificate expiration** alerts
- **Domain renewal** reminders
- **DNS change** notifications

## Emergency Procedures

### Domain Hijacking Response
1. **Immediately contact** Porkbun support
2. **Document** all unauthorized changes
3. **Reset** all account passwords
4. **Review** access logs
5. **Notify** team and users

### DNS Outage Response
1. **Switch to backup DNS** if available
2. **Contact** Porkbun support
3. **Monitor** restoration progress
4. **Communicate** status to stakeholders

---
**Last Updated:** [UPDATE DATE] | **Maintainer:** [UPDATE MAINTAINERS HERE]