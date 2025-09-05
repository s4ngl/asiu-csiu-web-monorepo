# Admin Guide

This guide covers administrative tasks for managing the ASIU-CSIU web monorepo infrastructure. This is intended for project maintainers and senior team members.

## Overview

As an admin, you'll be responsible for:
- Managing domains and DNS settings
- Overseeing hosting and deployments
- Managing GitHub organization settings
- Handling security and access controls

## Domain Management

### Current Domains

[UPDATE MAINTAINERS: Add actual domain information]
- **ASIU Website:** `[asiu-domain.com]`
- **CSIU Website:** `[csiu-domain.com]` 
- **CMS:** `[cms-domain.com]`

### DNS Provider: Porkbun

We use Porkbun for domain registration and DNS management. See [Domain Configuration Guide](/docs/domain-config.md) for detailed setup instructions.

#### Accessing Porkbun
1. Login credentials are stored in [UPDATE MAINTAINERS: Add password manager info]
2. URL: `https://porkbun.com/account/login`
3. Enable 2FA for additional security

#### Common DNS Tasks
- **Adding subdomains:** See domain-config.md
- **SSL certificate renewal:** Handled automatically by Vercel
- **Domain transfers:** Contact current maintainers first

## Hosting & Deployment

### Vercel Hosting

All three applications are hosted on Vercel:

#### Accessing Vercel
1. Login: [UPDATE MAINTAINERS: Add Vercel team login info]
2. Team: [UPDATE MAINTAINERS: Add team name]
3. Projects:
   - `asiu-website`
   - `csiu-website` 
   - `cms-system`

#### Deployment Management
1. **Automatic deployments** happen when code is merged to main branch
2. **Preview deployments** are created for every Pull Request
3. **Production rollbacks** can be done through Vercel dashboard

#### Environment Variables
- Managed through Vercel dashboard for each project
- See [Environment Setup Guide](/docs/env-setup.md) for complete list
- **Never commit secrets to Git!**

### Monitoring Deployments

Check deployment status:
1. Go to Vercel dashboard
2. Select the project
3. View "Deployments" tab
4. Check for any failed builds

Common deployment issues:
- Build failures: Check build logs in Vercel
- Environment variable issues: Verify all required vars are set
- Domain issues: Check DNS settings in Porkbun

## GitHub Organization Management

### Repository Settings

#### Branch Protection
Main branch protection rules:
- Require pull request reviews (minimum 2)
- Require status checks to pass
- Require branches to be up to date
- Include administrators in restrictions

#### Access Control
- **Admins:** [UPDATE MAINTAINERS HERE]
- **Maintainers:** [UPDATE MAINTAINERS HERE]
- **Contributors:** All verified students

#### Adding New Contributors
1. Verify student status
2. Add to GitHub team
3. Send them to [Onboarding Guide](/docs/onboarding.md)
4. Assign a mentor for first contribution

### Security Settings

#### Required Checks
- All CI/CD workflows must pass
- ESLint checks must pass
- TypeScript compilation must succeed
- No security vulnerabilities in dependencies

#### Secrets Management
- GitHub secrets are used for deployment keys
- Vercel integration handles most deployment secrets
- Never store credentials in repository files

## Content Management System (CMS)

### Admin Access

[UPDATE MAINTAINERS: Add CMS admin details]
- **CMS URL:** `[cms-url.com]`
- **Admin Login:** See password manager
- **Admin Panel:** `/admin`

### Content Workflow
1. **Content creators** use CMS to create/edit content
2. **Content reviewers** approve changes
3. **Auto-sync** updates live websites
4. **Manual sync** available for urgent updates

### Backup Procedures
- **Automatic backups:** Daily at 2 AM UTC
- **Manual backups:** Available through CMS admin panel
- **Restore process:** Contact hosting provider if needed

## Monitoring & Maintenance

### Regular Tasks (Weekly)

1. **Check deployment status** for all three sites
2. **Review security alerts** on GitHub
3. **Update dependencies** if security patches available
4. **Monitor domain expiration dates**
5. **Check SSL certificate status**

### Regular Tasks (Monthly)

1. **Review access logs** for unusual activity
2. **Backup verification** - test restore process
3. **Performance audit** using Lighthouse
4. **Dependency updates** for non-security patches
5. **Review and rotate access keys**

### Emergency Procedures

#### Site Down
1. Check Vercel status page
2. Verify DNS settings in Porkbun
3. Check for recent deployments that might have caused issues
4. Rollback to last known good deployment if needed
5. Communicate status to team

#### Security Incident
1. **Immediately** revoke compromised access
2. Change all related passwords/keys
3. Review access logs for unauthorized activity
4. Document incident and response
5. Update security procedures if needed

#### Domain Issues
1. Check domain expiration in Porkbun
2. Verify DNS propagation using `dig` or online tools
3. Contact Porkbun support if needed
4. Update team on estimated resolution time

## Team Communication

### Regular Updates
- **Weekly status updates** on project progress
- **Monthly infrastructure reviews**
- **Quarterly security audits**

### Contact Information
[UPDATE MAINTAINERS: Add current contact details]
- **Lead Maintainer:** [Name, Email, Discord]
- **Infrastructure Lead:** [Name, Email, Discord]
- **Security Contact:** [Name, Email, Discord]

### Documentation Maintenance
- Review this guide quarterly
- Update contact information when team changes
- Add new procedures as infrastructure evolves

## Troubleshooting

### Common Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| Build failures | Red status on GitHub | Check build logs, fix code issues |
| DNS not resolving | Site not accessible | Check Porkbun DNS settings |
| SSL errors | Browser security warnings | Check Vercel SSL settings |
| Slow performance | High load times | Review Lighthouse report |

### Getting Help
- **Vercel Support:** Available through dashboard
- **Porkbun Support:** Email or ticket system
- **GitHub Support:** Available for organization accounts
- **Team Resources:** See [Maintainers Guide](/MAINTAINERS.md)

---
**Last Updated:** [UPDATE DATE] | **Maintainer:** [UPDATE MAINTAINERS HERE]