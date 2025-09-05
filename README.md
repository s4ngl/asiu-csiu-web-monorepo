# ASIU-CSIU Web Monorepo

A comprehensive web platform serving the Alberta Students in Information Sciences (ASIU) and Computer Science Initiatives Unit (CSIU) communities. This monorepo contains three interconnected applications built with modern web technologies.

## 🌟 Overview

This project provides digital infrastructure for student organizations, featuring public websites for community engagement and a content management system for easy updates.

### Applications

- **🎓 ASIU Website** - Public site for Alberta Students in Information Sciences
- **💻 CSIU Website** - Academic-focused platform for Computer Science Initiatives Unit  
- **⚙️ CMS System** - Content management system for both websites

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download here](https://nodejs.org/))
- **Git** ([Download here](https://git-scm.com/downloads))
- **PostgreSQL** (for database)

### Getting Started

1. **Clone and setup:**
   ```bash
   git clone https://github.com/s4ngl/asiu-csiu-web-monorepo.git
   cd asiu-csiu-web-monorepo
   npm install
   ```

2. **Start development:**
   ```bash
   # Run ASIU website
   npm run dev:asiu

   # Run CSIU website  
   npm run dev:csiu

   # Run CMS
   npm run dev:cms

   # Run all applications
   npm run dev
   ```

3. **Open in browser:**
   - ASIU: `http://localhost:3000`
   - CSIU: `http://localhost:3001`
   - CMS: `http://localhost:3002`

## 📚 Documentation

**New to the project?** Start with our [Onboarding Guide](/docs/onboarding.md)

### For Contributors
- 📖 [Onboarding Guide](/docs/onboarding.md) - Step-by-step setup for new contributors
- 🤝 [Contributing Guidelines](/CONTRIBUTING.md) - How to contribute code
- ❓ [FAQ](/docs/faq.md) - Common questions and solutions
- 🏗️ [Architecture Guide](/docs/architecture.md) - Technical system overview

### For Maintainers  
- 👥 [Maintainers Guide](/MAINTAINERS.md) - Current team and contacts
- 🔧 [Admin Guide](/docs/admin-guide.md) - Infrastructure management
- 🚀 [Deployment Guide](/docs/deployment.md) - Deploy and manage releases
- 🌐 [Domain Configuration](/docs/domain-config.md) - DNS and domain setup
- ⚙️ [Environment Setup](/docs/env-setup.md) - Environment variables and config

### Project Information
- 📋 [Changelog](/docs/changelog.md) - Project updates and version history
- 📜 [Code of Conduct](/CODE_OF_CONDUCT.md) - Community guidelines
- ⚖️ [License](/LICENSE.md) - Project license

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library

### Backend & Infrastructure
- **Node.js** - Runtime environment
- **PostgreSQL** - Database
- **NextAuth.js** - Authentication
- **AWS S3** - File storage
- **Vercel** - Hosting and deployment

### Development Tools
- **Turborepo** - Monorepo management
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🏗️ Project Structure

```
asiu-csiu-web-monorepo/
├── apps/
│   ├── asiu/              # ASIU website
│   ├── csiu/              # CSIU website
│   └── cms/               # Content management system
├── packages/
│   ├── ui/                # Shared React components
│   ├── eslint-config/     # Shared ESLint configuration
│   └── typescript-config/ # Shared TypeScript configuration
├── docs/                  # Documentation
└── README.md              # This file
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start all apps in development mode
npm run dev:asiu         # Start ASIU website only
npm run dev:csiu         # Start CSIU website only  
npm run dev:cms          # Start CMS only

# Building
npm run build            # Build all applications
npm run build:asiu       # Build ASIU website only
npm run build:csiu       # Build CSIU website only
npm run build:cms        # Build CMS only

# Code Quality
npm run lint             # Run ESLint on all apps
npm run format           # Format code with Prettier
npm run check-types      # Run TypeScript type checking
```

## 🤝 Contributing

We welcome contributions from students and developers of all skill levels!

1. **Read our guides:**
   - [Onboarding Guide](/docs/onboarding.md) for setup instructions
   - [Contributing Guidelines](/CONTRIBUTING.md) for development workflow
   - [FAQ](/docs/faq.md) for common questions

2. **Find an issue to work on:**
   - Look for `good first issue` labels for beginners
   - Check `help wanted` labels for contribution opportunities

3. **Get help:**
   - Join our team communication channels [UPDATE MAINTAINERS: Add links]
   - Ask questions in GitHub issues
   - Contact mentors listed in [Maintainers](/MAINTAINERS.md)

## 🏫 About the Organizations

### ASIU (Alberta Students in Information Sciences)
A student organization supporting students across all information sciences disciplines, fostering community, professional development, and academic success.

### CSIU (Computer Science Initiatives Unit)  
An academic-focused group promoting computer science education, research collaboration, and career development within the university community.

## 📞 Support & Contact

- **Technical Issues:** Create a [GitHub Issue](https://github.com/s4ngl/asiu-csiu-web-monorepo/issues)
- **General Questions:** See our [FAQ](/docs/faq.md)
- **Team Contact:** Check [Maintainers Guide](/MAINTAINERS.md)
- **Security Issues:** Contact maintainers privately

## 📄 License

This project is licensed under the [MIT License](/LICENSE.md) - see the file for details.

## 🙏 Acknowledgments

- Built with [Turborepo](https://turborepo.com/) for monorepo management
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Hosted on [Vercel](https://vercel.com/) for reliable deployment
- Thanks to all [contributors](/MAINTAINERS.md) and community members

---

**Getting Started?** 👉 Check out our [Onboarding Guide](/docs/onboarding.md)  
**Need Help?** 👉 See our [FAQ](/docs/faq.md) or [create an issue](https://github.com/s4ngl/asiu-csiu-web-monorepo/issues)

---
*Last updated: [UPDATE DATE] | Maintained by [ASIU-CSIU Development Team](/MAINTAINERS.md)*
