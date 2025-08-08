# JW Technologies Website

A professional technical blog and portfolio website showcasing expertise in networking, Linux administration, database management, and technical program management.

## 🚀 Live Site

- **Production**: [https://jwtech-web-prd-64f15.web.app](https://jwtech-web-prd-64f15.web.app)

## 🛠 Technology Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5.9.2
- **Styling**: Tailwind CSS 4.1.11 + Custom CSS Variables
- **Deployment**: Firebase Hosting
- **Build**: Static Site Generation (SSG)

## 📁 Project Structure

```
jwtech-web/
├── src/
│   └── app/
│       ├── globals.css          # Global styles with design system
│       ├── layout.tsx           # Root layout with SEO metadata
│       └── page.tsx             # Homepage component
├── public/                      # Static assets
├── StyleGuide.md               # Complete design system documentation
├── firebase.json               # Firebase hosting configuration
├── .firebaserc                 # Firebase project configuration
├── next.config.ts              # Next.js configuration for static export
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

The site follows a comprehensive design system defined in `StyleGuide.md`:

### Color Palette
- **Primary**: `#1a1a1a` (dark) / `#ffffff` (light)
- **Accent**: `#0066cc` (blue) with hover state `#0052a3`
- **Text**: `#333333` (primary) / `#666666` (secondary) / `#999999` (muted)

### Typography
- **Font Stack**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Scale**: h1 (2.5rem) → h4 (1.25rem), body (1rem)
- **Weights**: 700 (headings) / 600 (subheadings) / 400 (body)

### Components
- Navigation with sticky positioning
- Content cards with subtle shadows
- Professional buttons and link styling
- Responsive grid layouts
- Mobile-first design approach

## 📄 Content Structure

### Homepage Sections
1. **Navigation Bar** - Site branding and main navigation
2. **Hero Section** - Professional introduction and value proposition
3. **Featured Articles** - Sample technical content showcase
4. **About Section** - Professional background and expertise metrics
5. **Technical Expertise** - Four core competency areas
6. **Footer** - Contact links and social media

### Content Focus Areas
- **Network Administration** - Enterprise networking and infrastructure
- **Linux Systems** - Server administration and automation
- **Database Management** - Design, optimization, and security
- **Technical Leadership** - Program management and strategy

## 🚀 Development

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Firebase CLI

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd jwtech-web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev       # Start development server with Turbopack
npm run build     # Build for production
npm run export    # Build and export static files to /out
npm run start     # Start production server
npm run lint      # Run ESLint
npm run deploy    # Build and deploy to Firebase
```

## 🚀 Firebase Deployment

### Initial Setup
1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase (if not already done)**
   ```bash
   firebase init hosting
   # Choose jwtech-web-prd-64f15 as project
   # Set public directory to: out
   # Configure as SPA: Yes
   # GitHub Actions: No
   ```

### Deployment Process
```bash
# Build the application
npm run export

# Deploy to Firebase
firebase deploy

# Or use the combined script
npm run deploy
```

### Firebase Configuration

The project includes optimized Firebase hosting configuration:

**firebase.json**:
- Public directory: `out` (Next.js static export)
- SPA rewrites for client-side routing
- Optimized caching headers for static assets

**Build Output**:
- Static HTML, CSS, and JavaScript files
- Optimized bundle size (~103 kB total)
- Pre-rendered pages for fast loading

## 📊 Performance

- **Bundle Size**: 103 kB First Load JS
- **Build Time**: <1 second compilation
- **Export**: 3 static pages generated
- **Optimization**: Static site generation with Next.js 15

## 🔧 Configuration Files

### Next.js Configuration (`next.config.ts`)
```typescript
{
  output: 'export',           // Static site generation
  trailingSlash: true,        // Firebase hosting compatibility
  images: { unoptimized: true } // Static export compatibility
}
```

### Package.json Scripts
- Custom deploy script combining build and Firebase deploy
- Turbopack enabled for faster development builds

## 📱 Responsive Design

- **Mobile-first** approach with progressive enhancement
- **Breakpoints**: 576px, 768px, 992px, 1200px
- **Flexible layouts** with CSS Grid and Flexbox
- **Touch-friendly** navigation and interactions

## 🔍 SEO Optimization

### Meta Tags
- Comprehensive Open Graph tags
- Twitter Card optimization
- Structured metadata for search engines
- Professional descriptions and keywords

### Performance
- Static site generation for fast loading
- Optimized images and assets
- Proper caching headers
- Mobile-friendly design

## 🤝 Contributing

1. Follow the established design system in `StyleGuide.md`
2. Use TypeScript for type safety
3. Maintain mobile-first responsive design
4. Test deployment before committing

## 📝 License

© 2024 JW Technologies. All rights reserved.

---

**Contact**: [@JW_TECH](https://twitter.com/JW_TECH) | [jjenkins@jwtechnologies.biz](mailto:jjenkins@jwtechnologies.biz)
