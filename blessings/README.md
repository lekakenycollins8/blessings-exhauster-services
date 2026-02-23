# Blessing Movers & Exhauster Services

A modern, SEO-optimized single-page website for Blessing Movers & Exhauster Services, providing professional exhauster and transport services across Kisii, Nyamira, Migori, and Homabay counties in Kenya.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with image-rich service cards
- 📞 Click-to-call and WhatsApp integration
- 🔍 SEO optimized with structured data (JSON-LD)
- ⚡ Fast loading with Next.js optimization
- 🎯 Floating contact buttons for easy access
- 🧭 Smooth scrolling navigation

## 📋 Website Sections

1. **Hero** - Eye-catching introduction with background image and county badges
2. **Services** - Alternating image/text layout showcasing 8 services
3. **Why Choose Us** - Company values and trust signals
4. **Contact** - Phone and WhatsApp contact cards
5. **Footer** - Quick links and social media
6. **Navbar** - Responsive navigation with smooth scrolling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📞 Contact Information

- **Phone**: 0727 650 246 | 0734 466 674
- **WhatsApp**: 0727 650 246
- **Service Areas**: Kisii, Nyamira, Migori, Homabay

## 🎨 Brand Colors

- Primary Green: `#00B050`
- Dark Green: `#008C3A`
- WhatsApp Green: `#25D366`

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Main page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── shared/            # Reusable components
│   │   ├── Navbar.tsx
│   │   └── FloatingContactButtons.tsx
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── constants/         # Business data
│   └── utils/             # Helper functions
└── types/                 # TypeScript interfaces
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 SEO Features

- Optimized meta tags for local search
- JSON-LD structured data (LocalBusiness, Service, Organization)
- Open Graph and Twitter Card tags
- Semantic HTML5 structure
- Mobile-responsive design
- Fast Core Web Vitals
- robots.txt and sitemap.xml

## 🚀 Deployment

The website is ready to deploy to:
- Vercel (recommended)
- Netlify
- Custom hosting

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

## 📄 License

© 2026 Blessing Movers & Exhauster. All rights reserved.
