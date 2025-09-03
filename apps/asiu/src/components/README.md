# Hero Section Components

This directory contains reusable hero section components with animated backgrounds.

## Components

### HeroBackground
A standalone animated star field background component that can be used independently.

### HeroSection
A complete hero section component that includes the animated background, title, subtitle, buttons, and optional newsletter signup.

## Usage

### Basic HeroSection Usage

```tsx
import { HeroSection } from "@/components/hero-section"

export default function MyPage() {
  return (
    <LayoutWrapper>
      <HeroSection
        title="Your Page Title"
        subtitle="Your page description goes here"
        primaryButtonText="Get Started"
        primaryButtonLink="/get-started"
        secondaryButtonText="Learn More"
      />
      {/* Rest of your page content */}
    </LayoutWrapper>
  )
}
```

### Advanced HeroSection Configuration

```tsx
<HeroSection
  title="Custom <span class='text-science-blue'>Highlighted</span> Title"
  subtitle="Custom subtitle text"
  showLogo={false}
  showNewsletter={false}
  primaryButtonText="Custom Button"
  primaryButtonLink="/custom-link"
  secondaryButtonText=""
  backgroundGradient="from-purple-50 to-pink-50"
  starColor="#8B5CF6"
  starSize={2.5}
  starCount={200}
  starOpacity={70}
  className="py-20"
/>
```

### Standalone HeroBackground Usage

```tsx
import { HeroBackground } from "@/components/hero-background"

export default function CustomHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-green-50 py-32 overflow-hidden">
      <HeroBackground
        starColor="#3B82F6"
        starSize={2}
        starCount={150}
        className="opacity-60"
      />
      <div className="relative z-10">
        {/* Your hero content */}
      </div>
    </section>
  )
}
```

## Props

### HeroSection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Page title (supports HTML) |
| `subtitle` | `string` | Required | Page subtitle |
| `showLogo` | `boolean` | `true` | Whether to show the ASIU logo |
| `logoPath` | `string` | `"/logo.svg"` | Path to the logo image |
| `primaryButtonText` | `string` | `"Get Involved"` | Primary button text |
| `primaryButtonLink` | `string` | `"/get-involved"` | Primary button link |
| `secondaryButtonText` | `string` | `"Donate Now"` | Secondary button text |
| `secondaryButtonLink` | `string` | `"#"` | Secondary button link |
| `showNewsletter` | `boolean` | `true` | Whether to show newsletter signup |
| `backgroundGradient` | `string` | `"from-blue-50 to-green-50"` | Tailwind gradient classes |
| `starColor` | `string` | `"#3B82F6"` | Color of the animated stars |
| `starSize` | `number` | `2` | Size of the stars |
| `starCount` | `number` | `150` | Number of stars (auto-calculated if not provided) |
| `starOpacity` | `number` | `60` | Opacity of the star animation (0-100) |
| `className` | `string` | `""` | Additional CSS classes |

### HeroBackground Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `""` | Additional CSS classes |
| `starColor` | `string` | `"#fff"` | Color of the animated stars |
| `starSize` | `number` | `3` | Size of the stars |
| `starCount` | `number` | Auto-calculated | Number of stars |
| `starMinScale` | `number` | `0.2` | Minimum star scale |
| `overflowThreshold` | `number` | `50` | Overflow threshold for star recycling |

## Examples

### Home Page Hero
```tsx
<HeroSection
  title="Advocating for <span class='text-science-blue'>Evidence-Based</span> Policy"
  subtitle="Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society."
  primaryButtonText="Get Involved"
  primaryButtonLink="/get-involved"
  secondaryButtonText="Donate Now"
  starColor="#3B82F6"
  starSize={2}
  starCount={150}
  starOpacity={60}
/>
```

### About Page Hero
```tsx
<HeroSection
  title="About Our Mission"
  subtitle="We are a student-led organization dedicated to bridging the gap between scientific research and public policy, ensuring that evidence-based decision making guides our future."
  showLogo={false}
  showNewsletter={false}
  primaryButtonText="Learn More"
  secondaryButtonText=""
  backgroundGradient="from-blue-50 to-green-50"
  starColor="#1E40AF"
  starSize={1.5}
  starCount={100}
  starOpacity={40}
  className="py-16"
/>
```

### Contact Page Hero
```tsx
<HeroSection
  title="Contact Us"
  subtitle="Get in touch with our team, join our community, or learn more about our advocacy efforts. We'd love to hear from you!"
  showLogo={false}
  showNewsletter={false}
  primaryButtonText="Send Message"
  secondaryButtonText=""
  backgroundGradient="from-blue-50 to-green-50"
  starColor="#059669"
  starSize={1.8}
  starCount={120}
  starOpacity={50}
  className="py-16"
/>
```

## Customization Tips

1. **Star Colors**: Use your brand colors or create thematic variations
2. **Star Count**: More stars = more dense animation, fewer stars = lighter effect
3. **Star Size**: Larger stars are more prominent, smaller stars are more subtle
4. **Opacity**: Lower opacity makes the animation more subtle, higher opacity makes it more prominent
5. **Background Gradients**: Use Tailwind gradient classes to match your page theme
6. **HTML in Titles**: Use `<span class='text-science-blue'>highlighted text</span>` for colored text

## Performance Notes

- The animation uses `requestAnimationFrame` for smooth performance
- Stars are automatically recycled when they go out of bounds
- The component is responsive and adapts to window resizing
- Touch events are supported for mobile devices
- The animation automatically cleans up when the component unmounts
