# Contributing to ASIU-CSIU Web Monorepo

Thank you for your interest in contributing to the ASIU-CSIU web monorepo! This document provides guidelines and information for contributors of all skill levels.

## 🎯 Getting Started

### For New Contributors

If you're new to the project or programming in general:

1. **Start here:** Read our [Onboarding Guide](/docs/onboarding.md)
2. **Get familiar:** Explore the [Architecture Guide](/docs/architecture.md)
3. **Find help:** Check the [FAQ](/docs/faq.md) for common questions
4. **Look for mentors:** See [Maintainers](/MAINTAINERS.md) for contact information

### For Experienced Contributors

1. **Read this document** to understand our workflow
2. **Review the codebase** to understand current patterns
3. **Check open issues** for contribution opportunities
4. **Contact the team** if you have questions or ideas

## 🤝 How to Contribute

### Types of Contributions

We welcome all types of contributions:

- **🐛 Bug fixes** - Help us identify and fix issues
- **✨ New features** - Add functionality to improve the platform
- **📚 Documentation** - Improve guides, comments, and examples
- **🎨 UI/UX improvements** - Enhance user experience and design
- **🔧 Performance** - Optimize loading times and efficiency
- **🧪 Testing** - Add or improve test coverage
- **♿ Accessibility** - Make the platform more inclusive

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Create an issue** to discuss larger changes before implementing
3. **Fork the repository** and create a feature branch
4. **Read our coding standards** (outlined below)

## 🔧 Development Workflow

### Step 1: Set Up Your Environment

1. **Fork the repository** on GitHub
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/asiu-csiu-web-monorepo.git
   cd asiu-csiu-web-monorepo
   ```
3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/s4ngl/asiu-csiu-web-monorepo.git
   ```
4. **Install dependencies:**
   ```bash
   npm install
   ```
5. **Set up environment variables** (see [Environment Setup Guide](/docs/env-setup.md))

### Step 2: Create a Feature Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create and switch to a new branch
git checkout -b your-name/feature-description

# Examples:
git checkout -b john/add-event-calendar
git checkout -b sarah/fix-mobile-nav
git checkout -b alex/update-homepage
```

### Step 3: Make Your Changes

1. **Follow our coding standards** (see below)
2. **Test your changes locally:**
   ```bash
   npm run dev:asiu  # or dev:csiu, dev:cms
   ```
3. **Run quality checks:**
   ```bash
   npm run lint
   npm run format
   npm run build
   ```
4. **Test across multiple browsers** if making UI changes

### Step 4: Commit Your Changes

#### Commit Message Format

Use clear, descriptive commit messages:

```bash
# Format: Type: Brief description
# Examples:
git commit -m "Add: event calendar component"
git commit -m "Fix: mobile navigation menu collapse"
git commit -m "Update: homepage hero section design"
git commit -m "Docs: improve setup instructions"
```

#### Commit Types:
- **Add:** New features or functionality
- **Fix:** Bug fixes
- **Update:** Changes to existing features
- **Remove:** Deleting code or features
- **Docs:** Documentation changes
- **Style:** Code formatting, no logic changes
- **Refactor:** Code restructuring, no behavior changes
- **Test:** Adding or updating tests

### Step 5: Push and Create Pull Request

1. **Push your branch:**
   ```bash
   git push origin your-name/feature-description
   ```

2. **Create Pull Request** on GitHub:
   - Use a descriptive title
   - Reference any related issues
   - Describe what changes you made
   - Include screenshots for UI changes
   - Request review from maintainers

### Step 6: Respond to Feedback

- **Address review comments** promptly
- **Ask questions** if feedback is unclear
- **Make additional commits** to your branch as needed
- **Keep discussions professional** and constructive

## 📝 Coding Standards

### TypeScript Guidelines

- **Use TypeScript** for all new code
- **Define interfaces** for complex objects
- **Avoid `any` type** - use specific types instead
- **Use meaningful names** for variables and functions

```tsx
// Good
interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'user';
}

// Avoid
const userData: any = { /* ... */ };
```

### React Component Guidelines

- **Use functional components** with hooks
- **Follow component naming** conventions (PascalCase)
- **Keep components focused** - single responsibility
- **Use TypeScript props interfaces**

```tsx
// Good component structure
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ children, variant = 'primary', onClick, disabled }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### CSS and Styling Guidelines

- **Use Tailwind CSS** utility classes
- **Avoid custom CSS** unless absolutely necessary
- **Follow responsive design** principles
- **Ensure accessibility** (ARIA labels, semantic HTML)

```tsx
// Good: Using Tailwind utilities
<div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
  <h2 className="text-xl font-semibold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Action
  </button>
</div>

// Avoid: Custom CSS unless needed for complex styling
```

### File Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # Basic UI components
│   ├── forms/             # Form components
│   └── sections/          # Page sections
├── lib/                   # Utility functions
│   ├── utils.ts           # General utilities
│   ├── constants.ts       # App constants
│   └── types.ts           # TypeScript types
└── hooks/                 # Custom React hooks
```

### Import Organization

```tsx
// 1. External libraries
import React from 'react';
import { NextPage } from 'next';

// 2. Internal components (absolute imports)
import { Button } from '@/components/ui/button';
import { Header } from '@/components/sections/header';

// 3. Relative imports
import { validateForm } from '../utils/validation';

// 4. Type imports (separate from value imports)
import type { UserProfile } from '@/lib/types';
```

## 🧪 Testing Guidelines

### Manual Testing

Before submitting a PR:

1. **Test your changes** in multiple browsers
2. **Check responsive design** on different screen sizes
3. **Verify accessibility** using screen readers or tools
4. **Test edge cases** and error scenarios

### Automated Testing

When adding tests:

1. **Write meaningful test descriptions**
2. **Test both happy path and edge cases**
3. **Mock external dependencies** properly
4. **Keep tests focused** and independent

## 📚 Documentation Guidelines

### Code Documentation

- **Comment complex logic** with clear explanations
- **Document function parameters** and return values
- **Explain business logic** and design decisions
- **Keep comments up-to-date** with code changes

```tsx
/**
 * Validates user input for the contact form
 * @param formData - Object containing form field values
 * @returns Object with validation results and error messages
 */
function validateContactForm(formData: ContactFormData): ValidationResult {
  // Implementation...
}
```

### Markdown Documentation

- **Use clear headings** for organization
- **Include code examples** where helpful
- **Add links** to related documentation
- **Keep language simple** and beginner-friendly

## 🐛 Bug Reports

### How to Report Bugs

1. **Search existing issues** first
2. **Use the bug report template**
3. **Include steps to reproduce**
4. **Provide screenshots** if applicable
5. **Include environment details** (browser, OS, etc.)

### Bug Report Template

```markdown
**Describe the Bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- Browser: [e.g., Chrome 91]
- OS: [e.g., Windows 10]
- Device: [e.g., Desktop, iPhone 12]
```

## 💡 Feature Requests

### Proposing New Features

1. **Check if it already exists** in issues or discussions
2. **Create a detailed proposal** explaining:
   - What problem it solves
   - How it should work
   - Why it's important
   - Potential implementation approach

3. **Discuss with maintainers** before starting implementation
4. **Start with a minimal version** and iterate

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature you'd like to see.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Screenshots, mockups, or examples that help explain.
```

## 🔍 Code Review Process

### For Contributors

- **Respond to feedback** constructively
- **Ask for clarification** if comments are unclear
- **Make requested changes** promptly
- **Test changes** after addressing feedback

### Review Guidelines

Reviews focus on:

- **Functionality** - Does it work as intended?
- **Code quality** - Is it readable and maintainable?
- **Performance** - Does it impact loading times?
- **Security** - Are there any security concerns?
- **Accessibility** - Is it accessible to all users?
- **Documentation** - Is it properly documented?

## 📋 Pull Request Guidelines

### PR Title Format

Use descriptive titles that explain the change:

```
Add event calendar to ASIU homepage
Fix mobile navigation menu not closing
Update user profile editing interface
```

### PR Description Template

```markdown
## Summary
Brief description of what this PR does.

## Changes Made
- List of specific changes
- Use bullet points
- Be descriptive but concise

## Testing
- [ ] Tested locally on all affected apps
- [ ] Checked responsive design
- [ ] Verified accessibility
- [ ] Ran lint and build checks

## Screenshots (if applicable)
Include before/after screenshots for UI changes.

## Related Issues
Fixes #123
Relates to #456
```

### PR Checklist

Before submitting:

- [ ] Code follows project conventions
- [ ] All tests pass locally
- [ ] Documentation is updated if needed
- [ ] Commit messages are clear and descriptive
- [ ] PR description explains the changes
- [ ] Screenshots included for UI changes

## 🏷️ Issue Labels

Understanding our label system:

### Priority Labels
- `critical` - Urgent fixes needed immediately
- `high` - Important issues to address soon
- `medium` - Standard priority
- `low` - Nice to have, not urgent

### Type Labels
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation improvements
- `question` - Further information is requested

### Difficulty Labels
- `good first issue` - Perfect for newcomers
- `help wanted` - Extra attention needed
- `easy` - Simple fixes, good for beginners
- `hard` - Complex issues requiring experience

### Component Labels
- `asiu` - ASIU website specific
- `csiu` - CSIU website specific
- `cms` - CMS system specific
- `ui` - Shared UI components
- `infrastructure` - Build, deployment, tools

## 🎉 Recognition

### Contributing Recognition

We appreciate all contributions and recognize contributors through:

- **Contributor list** in README
- **Release notes** mentioning significant contributions
- **Social media** highlights for major features
- **Mentorship opportunities** for active contributors

### Becoming a Maintainer

Active contributors may be invited to become maintainers based on:

- **Consistent quality contributions**
- **Helpful code reviews**
- **Community support** and mentoring
- **Technical expertise** in relevant areas

## 📞 Getting Help

### Where to Ask Questions

1. **GitHub Issues** - For bugs and feature requests
2. **GitHub Discussions** - For general questions and ideas
3. **Team Communication** - [UPDATE MAINTAINERS: Add communication channels]
4. **Direct Contact** - See [Maintainers](/MAINTAINERS.md) for contact info

### What Information to Include

When asking for help:

- **Describe your goal** clearly
- **Show what you've tried** already
- **Include error messages** if any
- **Provide context** about your environment
- **Be specific** about where you're stuck

## 🙏 Thank You

Your contributions help make this project better for everyone in the ASIU and CSIU communities. Whether you're fixing a typo, adding a new feature, or helping other contributors, every contribution matters.

We're committed to maintaining a welcoming, inclusive environment where everyone can learn and contribute successfully.

---

## Quick Links

- 📖 [Onboarding Guide](/docs/onboarding.md)
- ❓ [FAQ](/docs/faq.md)
- 🏗️ [Architecture Guide](/docs/architecture.md)
- ⚙️ [Environment Setup](/docs/env-setup.md)
- 👥 [Maintainers](/MAINTAINERS.md)
- 📜 [Code of Conduct](/CODE_OF_CONDUCT.md)

---
**Last Updated:** [UPDATE DATE] | **Maintained by:** [UPDATE MAINTAINERS HERE]