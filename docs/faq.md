# Frequently Asked Questions (FAQ)

This guide answers common questions and provides solutions to frequent issues when working with the ASIU-CSIU web monorepo.

## Getting Started

### Q: I'm new to programming. Can I contribute to this project?

**A:** Absolutely! This project is designed to be beginner-friendly. Start with our [Onboarding Guide](/docs/onboarding.md) and don't hesitate to ask questions. We have mentors available to help new contributors.

### Q: What programming languages do I need to know?

**A:** You'll primarily work with:
- **JavaScript/TypeScript** - Main programming language
- **HTML/CSS** - For structure and styling (though we use Tailwind CSS)
- **SQL** - For database queries (basic knowledge helpful)

Don't worry if you're not familiar with all of these - you can learn as you go!

### Q: How long does it take to set up the development environment?

**A:** Typically 30-60 minutes for first-time setup, including:
- Installing Node.js and Git (10-15 minutes)
- Cloning repository and installing dependencies (10-20 minutes)
- Setting up environment variables (15-30 minutes)

## Technical Issues

### Q: `npm install` is taking forever or failing

**A:** Try these solutions:

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and try again:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Use a different registry:**
   ```bash
   npm install --registry https://registry.npmjs.org/
   ```

4. **Check your Node.js version:**
   ```bash
   node --version
   # Should be 18.0.0 or higher
   ```

### Q: I'm getting "turbo: command not found" error

**A:** This means Turborepo isn't installed globally. Use npx instead:

```bash
# Instead of: turbo dev
npx turbo dev

# Or install globally:
npm install -g turbo
```

### Q: The development server won't start

**A:** Check these common issues:

1. **Port already in use:**
   ```bash
   # Kill process using port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Environment variables missing:**
   - Make sure you have `.env.local` files set up
   - See [Environment Setup Guide](/docs/env-setup.md)

3. **Dependencies not installed:**
   ```bash
   npm install
   ```

### Q: I'm getting TypeScript errors

**A:** Common TypeScript issues and solutions:

1. **"Cannot find module" errors:**
   ```bash
   # Restart TypeScript server in VS Code
   # Press Ctrl+Shift+P, then "TypeScript: Restart TS Server"
   ```

2. **Type errors in imported components:**
   ```bash
   # Build shared packages first
   npm run build --filter=@repo/ui
   ```

3. **Missing type definitions:**
   ```bash
   npm install @types/node @types/react
   ```

### Q: Database connection failed

**A:** Check these items:

1. **Database is running:**
   ```bash
   # If using Docker
   docker ps
   
   # If using local PostgreSQL
   pg_ctl status
   ```

2. **Environment variable is correct:**
   ```bash
   # Check your .env.local file
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   ```

3. **Database exists:**
   ```sql
   -- Connect to PostgreSQL and check
   \l  -- List databases
   ```

## Development Workflow

### Q: How do I create a new feature?

**A:** Follow this workflow:

1. **Create a new branch:**
   ```bash
   git checkout -b your-name/feature-description
   ```

2. **Make your changes**
3. **Test your changes:**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add: feature description"
   git push origin your-name/feature-description
   ```

5. **Create Pull Request on GitHub**

### Q: What should I name my branch?

**A:** Use this naming convention:
- `your-name/feature-description` (e.g., `john/add-event-calendar`)
- `your-name/fix-description` (e.g., `sarah/fix-login-button`)
- `your-name/update-description` (e.g., `alex/update-about-page`)

### Q: How do I test my changes?

**A:** Multiple ways to test:

1. **Run development server:**
   ```bash
   npm run dev:asiu  # For ASIU app
   npm run dev:csiu  # For CSIU app
   npm run dev:cms   # For CMS
   ```

2. **Check code quality:**
   ```bash
   npm run lint      # Check for code issues
   npm run format    # Auto-format code
   ```

3. **Build for production:**
   ```bash
   npm run build     # Make sure it builds successfully
   ```

### Q: My Pull Request has merge conflicts

**A:** Here's how to resolve them:

1. **Update your branch with latest main:**
   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch-name
   git merge main
   ```

2. **Resolve conflicts in VS Code:**
   - Open conflicted files
   - Choose which changes to keep
   - Remove conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)

3. **Commit the resolution:**
   ```bash
   git add .
   git commit -m "Resolve merge conflicts"
   git push origin your-branch-name
   ```

## Project Structure

### Q: Which app should I work on?

**A:** Depends on what you want to build:

- **ASIU app** (`apps/asiu`): General student organization features
- **CSIU app** (`apps/csiu`): Academic/course-related features  
- **CMS** (`apps/cms`): Content management for both sites
- **Shared UI** (`packages/ui`): Components used by all apps

### Q: Where do I put shared components?

**A:** Components used by multiple apps go in `packages/ui/src/components/`. App-specific components go in the respective app's `src/components/` folder.

### Q: How do I add a new page?

**A:** In Next.js App Router:

1. **Create file in app directory:**
   ```bash
   # For ASIU app
   apps/asiu/src/app/your-page/page.tsx
   ```

2. **Basic page structure:**
   ```tsx
   export default function YourPage() {
     return (
       <div>
         <h1>Your Page Title</h1>
         <p>Your page content...</p>
       </div>
     );
   }
   ```

3. **The page is automatically available at `/your-page`**

### Q: How do I add environment variables?

**A:** See [Environment Setup Guide](/docs/env-setup.md), but quick steps:

1. **Add to `.env.example`:**
   ```bash
   NEW_VARIABLE=example-value
   ```

2. **Add to your `.env.local`:**
   ```bash
   NEW_VARIABLE=your-actual-value
   ```

3. **Add to Vercel for production** (in dashboard)

## Styling and UI

### Q: How do I style components?

**A:** We use Tailwind CSS:

```tsx
// Good: Use Tailwind classes
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Content here
</div>

// Avoid: Writing custom CSS unless necessary
```

### Q: Where can I find available UI components?

**A:** Check `packages/ui/src/components/` for shared components, or look at existing pages for examples. Common components include:
- Buttons, forms, cards
- Navigation, breadcrumbs
- Modals, alerts, loading states

### Q: How do I add icons?

**A:** We use Lucide React icons:

```tsx
import { Star, Calendar, User } from 'lucide-react';

function MyComponent() {
  return (
    <div>
      <Star className="w-5 h-5 text-yellow-500" />
      <Calendar className="w-4 h-4" />
      <User size={24} />
    </div>
  );
}
```

## Deployment and Production

### Q: When are my changes deployed?

**A:** 
- **Preview deployment:** Automatically when you create/update a Pull Request
- **Production deployment:** When your PR is merged to main branch

### Q: How can I see my changes before they go live?

**A:** Every Pull Request gets a preview URL where you can test your changes. Look for the Vercel bot comment on your PR with the preview link.

### Q: Something is broken in production. What do I do?

**A:** 
1. **Report immediately** to maintainers (see [Maintainers](/MAINTAINERS.md))
2. **Don't try to fix it** yourself unless you're experienced
3. **Document the issue** with screenshots and steps to reproduce

### Q: Can I test with production data?

**A:** **No**, never use production data for testing. Always use:
- Local development database with test data
- Preview deployments with safe test data
- Your own test accounts and content

## Getting Help

### Q: I'm stuck and need help. What should I do?

**A:** Here's the best order to get help:

1. **Check this FAQ** for your specific issue
2. **Search GitHub issues** for similar problems
3. **Ask in team chat** [UPDATE MAINTAINERS: Add chat platform]
4. **Create GitHub issue** with detailed description
5. **Contact mentors** directly (see [Maintainers](/MAINTAINERS.md))

### Q: How do I report a bug?

**A:** Create a GitHub issue with:

1. **Clear title** describing the problem
2. **Steps to reproduce** the issue
3. **Expected behavior** vs actual behavior
4. **Screenshots** if applicable
5. **Environment info** (browser, OS, etc.)

### Q: I want to suggest a new feature

**A:** Great! Please:

1. **Check existing issues** to avoid duplicates
2. **Create GitHub issue** with "Feature Request" label
3. **Describe the problem** you're trying to solve
4. **Explain your proposed solution**
5. **Consider the scope** - start small and iterate

### Q: How do I find good first issues to work on?

**A:** Look for GitHub issues labeled:
- `good first issue` - Perfect for beginners
- `help wanted` - Need contributors
- `documentation` - Often easier for new contributors
- `bug` - Clear problem to solve

## Best Practices

### Q: What coding standards should I follow?

**A:** See our [Contributing Guide](/CONTRIBUTING.md), but key points:

- **Use TypeScript** for type safety
- **Follow ESLint rules** (run `npm run lint`)
- **Write descriptive commit messages**
- **Test your changes** before submitting
- **Keep Pull Requests small** and focused

### Q: How do I write good commit messages?

**A:** Follow this format:

```bash
# Good examples
git commit -m "Add: user profile editing functionality"
git commit -m "Fix: login button not responding on mobile"
git commit -m "Update: improve homepage loading performance"

# Bad examples  
git commit -m "changes"
git commit -m "fix stuff"
git commit -m "WIP"
```

### Q: Should I update dependencies?

**A:** Generally, no - leave dependency updates to maintainers unless:
- You're fixing a specific security vulnerability
- A dependency update is required for your feature
- You've discussed it with the team first

## Common Error Messages

### Q: "Module not found" errors

**A:** Usually means:
1. **Package not installed:** Run `npm install`
2. **Wrong import path:** Check file path and spelling
3. **Missing dependency:** Add to package.json

### Q: "Permission denied" errors

**A:** Usually means:
1. **File permissions:** Check if you have write access
2. **Port in use:** Another process is using the port
3. **Environment setup:** Missing required credentials

### Q: Build errors about missing types

**A:** Usually means:
1. **Shared packages not built:** Run `npm run build --filter=@repo/ui`
2. **Missing type definitions:** Install missing @types packages
3. **TypeScript configuration:** Check tsconfig.json files

## Project-Specific Questions

### Q: What's the difference between ASIU and CSIU?

**A:** 
- **ASIU (Alberta Students in Information Sciences):** Broader student organization covering all information sciences
- **CSIU (Computer Science Initiatives Unit):** More focused on computer science academic activities

Both share similar technology but serve different communities with different content and features.

### Q: Why do we use a monorepo?

**A:** Benefits include:
- **Shared code** between similar applications
- **Consistent tooling** and configuration
- **Easier dependency management**
- **Atomic changes** across multiple apps
- **Better collaboration** among team members

### Q: Can I work on multiple apps at once?

**A:** Yes! You can run multiple development servers:

```bash
# Terminal 1
npm run dev:asiu

# Terminal 2  
npm run dev:csiu

# Terminal 3
npm run dev:cms
```

Each will run on a different port (3000, 3001, 3002).

---

## Still Need Help?

If your question isn't answered here:

1. **Search GitHub issues** for similar questions
2. **Check our other documentation:**
   - [Onboarding Guide](/docs/onboarding.md) - Getting started
   - [Contributing Guide](/CONTRIBUTING.md) - Development workflow
   - [Architecture Guide](/docs/architecture.md) - Technical details
3. **Contact the team** (see [Maintainers](/MAINTAINERS.md))

Remember: There are no stupid questions! Everyone was a beginner once, and we're here to help you learn and contribute successfully.

---
**Last Updated:** [UPDATE DATE] | **Maintainer:** [UPDATE MAINTAINERS HERE]