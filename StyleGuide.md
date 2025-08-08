# JW Technologies Style Guide

## Design Philosophy

**Core Principles:**
- Clean, minimalist design that prioritizes content readability
- Professional yet approachable aesthetic suitable for technical professionals
- Focus on knowledge sharing and expertise demonstration
- Mobile-first responsive design
- Fast-loading, performance-optimized interface

**Target Audience:**
- IT professionals and technical managers
- Technology enthusiasts seeking best practices
- Potential clients looking for technical expertise
- Industry peers and networking connections

## Color Palette

### Primary Colors
```css
--primary-dark: #1a1a1a        /* Main backgrounds, headers */
--primary-light: #ffffff       /* Content backgrounds, text on dark */
--accent-blue: #0066cc         /* Links, call-to-actions, highlights */
--accent-blue-hover: #0052a3   /* Hover states for blue elements */
```

### Supporting Colors
```css
--text-primary: #333333        /* Main body text */
--text-secondary: #666666      /* Secondary text, metadata */
--text-muted: #999999          /* Captions, less important info */
--border-light: #e0e0e0        /* Subtle borders, dividers */
--background-gray: #f8f9fa     /* Section backgrounds, cards */
--success-green: #28a745       /* Success messages, positive indicators */
--warning-orange: #fd7e14      /* Alerts, important notices */
```

## Typography

### Font Stack
```css
/* Primary font for all text */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;

/* Monospace for code examples */
font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, 
             Courier, monospace;
```

### Type Scale
```css
/* Headings */
h1: 2.5rem (40px) / 700 weight   /* Page titles, main headers */
h2: 2rem (32px) / 600 weight     /* Section headers */
h3: 1.5rem (24px) / 600 weight   /* Subsection headers */
h4: 1.25rem (20px) / 600 weight  /* Card titles, minor headers */

/* Body Text */
body: 1rem (16px) / 400 weight   /* Main content */
large: 1.125rem (18px) / 400     /* Intro paragraphs, emphasis */
small: 0.875rem (14px) / 400     /* Metadata, captions */
code: 0.875rem (14px) / 400      /* Inline code, technical text */
```

### Line Heights
```css
--line-height-tight: 1.25     /* Headlines */
--line-height-normal: 1.5     /* Body text */
--line-height-relaxed: 1.75   /* Long-form content */
```

## Layout & Grid System

### Container Widths
```css
--container-sm: 576px    /* Small devices */
--container-md: 768px    /* Tablets */
--container-lg: 992px    /* Desktops */
--container-xl: 1200px   /* Large screens */
--container-max: 1400px  /* Maximum width */
```

### Spacing Scale
```css
--space-xs: 0.5rem (8px)
--space-sm: 1rem (16px)
--space-md: 1.5rem (24px)
--space-lg: 2rem (32px)
--space-xl: 3rem (48px)
--space-2xl: 4rem (64px)
```

## Component Library

### Navigation
```css
.navbar {
  background: var(--primary-light);
  border-bottom: 1px solid var(--border-light);
  padding: var(--space-sm) 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-brand {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  padding: var(--space-xs) var(--space-sm);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--accent-blue);
}
```

### Content Cards
```css
.content-card {
  background: var(--primary-light);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card-title {
  margin-bottom: var(--space-sm);
  color: var(--text-primary);
}

.card-meta {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--space-sm);
}
```

### Buttons & Links
```css
.btn-primary {
  background: var(--accent-blue);
  color: white;
  padding: var(--space-sm) var(--space-lg);
  border: none;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background: var(--accent-blue-hover);
}

.link-inline {
  color: var(--accent-blue);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: text-decoration-color 0.2s ease;
}

.link-inline:hover {
  text-decoration-color: var(--accent-blue);
}
```

### Code Blocks
```css
.code-inline {
  background: var(--background-gray);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.875em;
}

.code-block {
  background: var(--primary-dark);
  color: var(--primary-light);
  padding: var(--space-lg);
  border-radius: 8px;
  overflow-x: auto;
  font-family: var(--font-mono);
  line-height: var(--line-height-normal);
}
```

## Content Patterns

### Blog Post Layout
```html
<article class="blog-post">
  <header class="post-header">
    <h1 class="post-title">Article Title</h1>
    <div class="post-meta">
      <time datetime="2024-01-01">January 1, 2024</time>
      <span class="post-category">Category</span>
    </div>
  </header>
  
  <div class="post-content">
    <!-- Article content -->
  </div>
  
  <footer class="post-footer">
    <div class="post-tags">
      <span class="tag">Tag 1</span>
      <span class="tag">Tag 2</span>
    </div>
    <div class="post-share">
      <!-- Social sharing buttons -->
    </div>
  </footer>
</article>
```

### Profile Section
```html
<section class="author-bio">
  <div class="bio-content">
    <h2>About Jeremiah</h2>
    <p>Technologist and Technical Program Manager with extensive 
       hands-on experience in networking, Linux administration, 
       database administration, and technical management.</p>
    <div class="bio-links">
      <a href="https://twitter.com/jw_tech" class="social-link">
        @JW_TECH
      </a>
    </div>
  </div>
</section>
```

## Content Voice & Tone

### Writing Style
- **Professional but accessible** - Technical expertise without jargon overload
- **Conversational tone** - "We want to share" rather than formal corporate speak
- **Knowledge-focused** - Emphasis on sharing lessons learned and best practices
- **Community-oriented** - Engaging with peers and building professional relationships

### Content Types
1. **Technical tutorials** - Step-by-step guides and how-tos
2. **Industry insights** - Current trends and analysis
3. **Lessons learned** - Personal experiences and case studies
4. **Best practices** - Recommendations and methodologies
5. **Tool reviews** - Software and technology evaluations

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 576px) { /* Small tablets */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 992px) { /* Desktops */ }
@media (min-width: 1200px) { /* Large desktops */ }
```

### Mobile Optimizations
- Simplified navigation with hamburger menu
- Single-column layout for content
- Larger touch targets (minimum 44px)
- Optimized font sizes for readability

## Performance Guidelines

### Loading Standards
- **Page load time**: Under 3 seconds
- **First Contentful Paint**: Under 1.5 seconds
- **Image optimization**: WebP format when possible
- **Minified assets**: CSS and JavaScript compression

### Technical SEO
```html
<!-- Meta tags for blog posts -->
<meta name="description" content="Concise article summary">
<meta property="og:title" content="Article Title | JW Technologies">
<meta property="og:description" content="Article summary">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@JW_TECH">
```

## Implementation Examples

### CSS Custom Properties Setup
```css
:root {
  /* Color palette */
  --primary-dark: #1a1a1a;
  --primary-light: #ffffff;
  --accent-blue: #0066cc;
  --text-primary: #333333;
  --border-light: #e0e0e0;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'SFMono-Regular', Consolas, monospace;
  
  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
}
```

### Component Example
```css
.tech-article {
  max-width: 800px;
  margin: 0 auto;
  padding: var(--space-lg);
  background: var(--primary-light);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.tech-article h2 {
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 2px solid var(--accent-blue);
}

.tech-article code {
  background: var(--background-gray);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: var(--font-mono);
}
```

This style guide captures the clean, professional aesthetic of JW Technologies while providing flexibility for technical content presentation and community engagement.