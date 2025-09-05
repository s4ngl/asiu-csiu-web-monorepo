# Onboarding Guide

This guide helps new students get started with the ASIU-CSIU web monorepo project. Follow these step-by-step instructions to set up your development environment and make your first contribution.

## Prerequisites

Before you begin, make sure you have these tools installed on your computer:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/downloads)
- **Visual Studio Code** (recommended) - [Download here](https://code.visualstudio.com/)

## Step 1: Clone the Repository

1. Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux)
2. Navigate to where you want to store the project:
   ```bash
   cd Desktop
   # or wherever you keep your projects
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/s4ngl/asiu-csiu-web-monorepo.git
   cd asiu-csiu-web-monorepo
   ```

## Step 2: Install Dependencies

1. Make sure you're in the project root directory
2. Install all required packages:
   ```bash
   npm install
   ```
   
   This might take a few minutes the first time. You'll see a lot of text scroll by - this is normal!

## Step 3: Understand the Project Structure

Our monorepo contains three main websites:

```
asiu-csiu-web-monorepo/
├── apps/
│   ├── asiu/          # ASIU website
│   ├── csiu/          # CSIU website  
│   └── cms/           # Content Management System
├── packages/
│   ├── ui/            # Shared components
│   └── eslint-config/ # Code style rules
└── docs/              # Documentation (you're reading this!)
```

## Step 4: Run Your First Development Server

1. Start the ASIU website:
   ```bash
   npm run dev:asiu
   ```
   
2. Open your web browser and go to `http://localhost:3000`
3. You should see the ASIU website running locally!

To stop the server, press `Ctrl+C` in your terminal.

## Step 5: Try Running Other Apps

- For CSIU website: `npm run dev:csiu`
- For CMS: `npm run dev:cms`
- For all apps at once: `npm run dev`

## Step 6: Make Your First Change

1. Open the project in Visual Studio Code:
   ```bash
   code .
   ```

2. Navigate to `apps/asiu/src/app/page.tsx`
3. Find some text and change it slightly
4. Save the file (`Ctrl+S` or `Cmd+S`)
5. Look at your browser - the change should appear automatically!

## Step 7: Check Code Quality

Before submitting changes, always run these commands:

1. Check for code style issues:
   ```bash
   npm run lint
   ```

2. Format your code:
   ```bash
   npm run format
   ```

3. Build the project to check for errors:
   ```bash
   npm run build
   ```

## Step 8: Create Your First Pull Request

1. Create a new branch for your changes:
   ```bash
   git checkout -b your-name/your-feature-description
   ```

2. Add your changes:
   ```bash
   git add .
   git commit -m "Describe what you changed"
   ```

3. Push your branch:
   ```bash
   git push origin your-name/your-feature-description
   ```

4. Go to GitHub and create a Pull Request

## Getting Help

- **Stuck?** Check our [FAQ](/docs/faq.md) for common issues
- **Need help with environment setup?** See [Environment Setup Guide](/docs/env-setup.md)
- **Want to understand the project better?** Read our [Architecture Guide](/docs/architecture.md)
- **Ready to contribute?** Check our [Contributing Guidelines](/CONTRIBUTING.md)

## Important Commands Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies |
| `npm run dev:asiu` | Run ASIU website locally |
| `npm run dev:csiu` | Run CSIU website locally |
| `npm run dev:cms` | Run CMS locally |
| `npm run build` | Build all projects |
| `npm run lint` | Check code style |
| `npm run format` | Auto-format code |

## Next Steps

1. Read through our [Contributing Guidelines](/CONTRIBUTING.md)
2. Look at open issues on GitHub to find something to work on
3. Join our communication channels [UPDATE MAINTAINERS: Add Discord/Slack info]
4. Attend our weekly meetings [UPDATE MAINTAINERS: Add meeting schedule]

Welcome to the team! 🎉

---
**Last Updated:** [UPDATE DATE] | **Maintainer:** [UPDATE MAINTAINERS HERE]