# CSIU Website Complete Visual Refactor - GitHub Copilot Agent Instructions

## CRITICAL CONSTRAINTS
- **ONLY** modify files within the `apps/csiu/` folder
- **DO NOT** touch any backend connections to Sanity CMS
- **PRESERVE** all data fetching logic and CMS integration code
- **ONLY** modify the visual presentation layer (styles, layouts, component structure)

## PROJECT OVERVIEW
You are tasked with completely refactoring the visual design and user experience of the Concerned Scientists at Indiana University (CSIU) website. The website should be transformed from its current appearance to a modern, impactful environmental/scientific advocacy design inspired by leading conservation organizations.

## COLOR PALETTE (STRICTLY ENFORCE)
```css
--color-white: #FFFFFF;
--color-primary-dark: #2a2a2a; /* Main text and dark elements */
--color-accent-primary: #1BA298; /* Primary accent - teal/turquoise */
--color-accent-secondary: #9DBB8A; /* Secondary accent - sage green */
```

## DESIGN INSPIRATION ANALYSIS

### Key Design Elements from Reference Sites:
1. **Full-Screen Video Heroes**
   - Autoplay background videos with environmental footage
   - Large, bold typography overlaid on video
   - Minimal UI elements to not distract from the video
   - Subtle dark overlay for text readability

2. **Navigation Behavior**
   - Transparent navigation on initial load
   - Smooth transition to solid background (#2a2a2a) on scroll
   - Minimal logo and clean navigation links
   - No rounded corners - sharp, angular design

3. **Typography**
   - Bold, impactful headlines (600-900 font weight)
   - Clean, modern sans-serif fonts
   - Large font sizes for headlines (48px-72px on desktop)
   - High contrast text on backgrounds

4. **Layout Patterns**
   - Full-width sections with no container constraints on heroes
   - Asymmetric layouts with large imagery
   - Grid-based content sections
   - Generous whitespace and padding

5. **Interactive Elements**
   - Sharp, rectangular buttons with no border radius
   - Hover effects with color transitions
   - Subtle animations on scroll
   - Call-to-action buttons with strong contrast

## DETAILED COMPONENT SPECIFICATIONS

### 1. Navigation Component
```
Structure:
- Fixed position header
- Initial state: transparent background with white text
- Scrolled state: solid #2a2a2a background
- Height: 80px desktop, 60px mobile
- Z-index: 1000

Elements:
- Logo: Left aligned, max-height 40px
- Menu items: Right aligned, uppercase, letter-spacing: 1px
- Mobile menu: Full-screen overlay with centered links
- No rounded corners on any elements

Interactions:
- Smooth background transition on scroll (0.3s ease)
- Menu items: color transition from white to #1BA298 on hover
- Mobile menu: slide in from right
```

### 2. Hero Section
```
Structure:
- 100vh height minimum
- Full-width video background
- Dark overlay (rgba(42, 42, 42, 0.4))
- Centered content with text-align: left

Content:
- Headline: 64px desktop / 36px mobile, font-weight: 700
- Subheadline: 24px desktop / 18px mobile, font-weight: 300
- CTA Button: 16px uppercase, padding: 16px 40px
- All text in white (#FFFFFF)

Video Requirements:
- Autoplay, muted, loop
- Environmental/scientific footage
- Fallback image for mobile/slow connections
```

### 3. Content Sections

#### Impact Section
```
Layout:
- Alternating image/text rows
- 60/40 split on desktop, stacked on mobile
- Full-bleed images extending to viewport edge
- Text content with max-width: 600px

Typography:
- Section headlines: 48px, color: #2a2a2a
- Body text: 18px, line-height: 1.8
- Accent elements using #1BA298
```

#### Mission Statement
```
Design:
- Centered text with max-width: 800px
- Large quote marks using #1BA298
- Background: subtle gradient from white to #f5f5f5
- Padding: 120px vertical
```

#### Team/Scientists Grid
```
Layout:
- 3-column grid desktop, 1-column mobile
- Square aspect ratio images
- Hover effect: color overlay with #1BA298 at 0.8 opacity
- Name and title revealed on hover
```

#### News/Updates Section
```
Structure:
- Card-based layout
- No rounded corners
- Box-shadow: 0 4px 20px rgba(42, 42, 42, 0.1)
- Image aspect ratio: 16:9
- Hover: translateY(-4px) with transition
```

### 4. Call-to-Action Components
```
Primary CTA:
- Background: #1BA298
- Text: #FFFFFF
- Padding: 16px 40px
- Text-transform: uppercase
- Letter-spacing: 1px
- Hover: background #9DBB8A

Secondary CTA:
- Border: 2px solid #1BA298
- Text: #1BA298
- Background: transparent
- Hover: background #1BA298, text #FFFFFF
```

### 5. Footer
```
Structure:
- Background: #2a2a2a
- Text: #FFFFFF
- Padding: 80px vertical
- Multi-column layout

Content:
- Organization info
- Quick links
- Contact information
- Social media icons
- Newsletter signup

Elements:
- Links: color #FFFFFF, hover #1BA298
- Divider lines: 1px solid rgba(255, 255, 255, 0.2)
```

## ORGANIZATION CONTENT

### About CSIU
Concerned Scientists at Indiana University (CSIU) is a coalition of university faculty, staff, and students dedicated to strengthening the essential role of science and evidence-based decision making at both state and national levels.

### Mission Statement
"We are committed to promoting the accurate representation of science in the media, in education, and in the design of legislation. We engage with the public to communicate science, especially as it relates to current policy issues."

### Core Objectives
1. **Promote Scientific Accuracy**: Ensure accurate representation of science in media, education, and legislation
2. **Public Engagement**: Communicate science effectively to the public and policymakers
3. **Policy Advocacy**: Strengthen science's role in evidence-based policy making
4. **Community Building**: Unite scientists, educators, and advocates across Indiana University

### Key Initiatives
- Science advocacy forums and town halls
- Educational workshops on science communication
- Policy briefs and position statements
- Collaboration with student group "Advocates for Science @ IU"
- Public lectures and Science Café events

## TECHNICAL IMPLEMENTATION GUIDELINES

### CSS Framework
- Use CSS custom properties for all colors
- Implement CSS Grid and Flexbox for layouts
- Use CSS transitions for all animations
- Mobile-first responsive design
- No CSS frameworks unless already in use

### Performance
- Lazy load images and videos
- Use srcset for responsive images
- Optimize video files for web
- Implement intersection observer for scroll animations

### Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels where needed

### Animation Guidelines
- Subtle fade-in on scroll (0.6s ease-out)
- Transform animations for hover states
- No excessive or distracting animations
- Respect prefers-reduced-motion

## FILE STRUCTURE MODIFICATIONS

### Expected Changes
```
apps/csiu/
├── components/
│   ├── Navigation.jsx [MODIFY - complete redesign]
│   ├── Hero.jsx [MODIFY - add video background]
│   ├── Footer.jsx [MODIFY - new multi-column layout]
│   ├── CTAButton.jsx [CREATE - new component]
│   ├── VideoBackground.jsx [CREATE - new component]
│   └── [other components] [MODIFY - update styles only]
├── styles/
│   ├── globals.css [MODIFY - new color scheme]
│   ├── components/ [MODIFY - all component styles]
│   └── utilities.css [CREATE - utility classes]
└── pages/
    └── [all pages] [MODIFY - layout and styling only]
```

## RESPONSIVE BREAKPOINTS
```css
/* Mobile First Approach */
/* Base: 0-767px */
/* Tablet: 768px-1023px */
/* Desktop: 1024px-1439px */
/* Large Desktop: 1440px+ */

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

## SPECIFIC TRANSFORMATION TASKS

### Phase 1: Foundation
1. Update global color scheme to new palette
2. Remove ALL border-radius properties (sharp corners only)
3. Implement new typography scale
4. Create utility classes for common patterns

### Phase 2: Navigation
1. Convert navigation to transparent/solid scroll behavior
2. Redesign mobile menu as full-screen overlay
3. Update logo placement and sizing
4. Implement hover states with new colors

### Phase 3: Hero Section
1. Implement full-screen video background
2. Add overlay and centered content
3. Create bold headline treatment
4. Add primary CTA button

### Phase 4: Content Sections
1. Redesign all content sections with new layouts
2. Implement alternating image/text patterns
3. Create hover effects for interactive elements
4. Add scroll-triggered animations

### Phase 5: Footer & Final Polish
1. Redesign footer with multi-column layout
2. Update all remaining components
3. Ensure consistency across all pages
4. Performance optimization

## DO NOT MODIFY
- Any API calls to Sanity CMS
- Data fetching logic
- Backend integration code
- Environment variables
- Build configuration
- Package dependencies (unless adding animation libraries)

## VALIDATION CHECKLIST
Before completing the refactor, ensure:
- [ ] All components use the specified color palette
- [ ] No rounded corners exist anywhere
- [ ] Video backgrounds are implemented
- [ ] Navigation has scroll-based transparency
- [ ] All text is readable with proper contrast
- [ ] Mobile responsiveness is maintained
- [ ] Sanity CMS connections are intact
- [ ] Performance metrics are acceptable
- [ ] Accessibility standards are met

## EXAMPLE CODE PATTERNS

### Navigation Scroll Effect
```javascript
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Video Background Component
```jsx
<div className="hero-video-container">
  <video autoPlay muted loop playsInline className="hero-video">
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
  </video>
  <div className="hero-overlay" />
  <div className="hero-content">
    {/* Content */}
  </div>
</div>
```

### Sharp Button Styles
```css
.btn-primary {
  background: var(--color-accent-primary);
  color: var(--color-white);
  padding: 16px 40px;
  border: none;
  border-radius: 0; /* Sharp corners */
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
```

This refactor should transform the CSIU website into a modern, impactful platform that effectively communicates the organization's mission while maintaining all backend functionality.
