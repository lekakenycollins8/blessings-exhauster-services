# Blessing Movers & Exhauster Services - Project Structure

## Overview
A modern, SEO-optimized single-page website for Blessing Movers & Exhauster Services, operating in Kisii, Nyamira, Migori, and Homabay counties in Kenya.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
blessings/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main homepage
│   │   ├── globals.css         # Global styles and animations
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── sections/           # Main page sections
│   │   │   ├── Hero.tsx        # Hero section with CTAs
│   │   │   ├── Services.tsx    # Exhauster & Transport services
│   │   │   ├── ServiceAreas.tsx # 4 counties coverage
│   │   │   ├── WhyChooseUs.tsx # Company values
│   │   │   ├── Contact.tsx     # Contact info & form
│   │   │   └── Footer.tsx      # Footer with links
│   │   │
│   │   ├── shared/             # Reusable components
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── LocationCard.tsx
│   │   │   ├── ValueCard.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── FloatingContactButtons.tsx
│   │   │   └── StructuredData.tsx # JSON-LD for SEO
│   │   │
│   │   └── ui/                 # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── select.tsx
│   │       └── label.tsx
│   │
│   ├── lib/
│   │   ├── constants/          # Business data
│   │   │   ├── contact.ts      # Phone, email, address
│   │   │   ├── services.ts     # Service definitions
│   │   │   ├── locations.ts    # Service areas
│   │   │   └── company.ts      # Company info & values
│   │   │
│   │   ├── utils/
│   │   │   ├── utils.ts        # General utilities
│   │   │   └── whatsapp.ts     # WhatsApp URL helpers
│   │   │
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts            # TypeScript interfaces
│
├── public/
│   ├── images/                 # 18 fleet photos
│   ├── robots.txt              # SEO robots file
│   └── sitemap.xml             # SEO sitemap
│
└── plan/                       # Planning documents
    └── (planning files in .windsurf/plans/)
```

## Key Features Implemented

### 1. Hero Section
- Eye-catching gradient background with fleet image overlay
- Business name and tagline
- Service area badges (Kisii, Nyamira, Migori, Homabay)
- 3 prominent CTAs: Call Now, WhatsApp, Get Quote
- Emergency services notice
- Smooth scroll indicator

### 2. Services Section
- **Exhauster Services** (4 cards):
  - Septic Tank Emptying
  - Grease Trap Cleaning
  - Pit Latrine Emptying
  - Emergency Services (24/7)
  
- **Transport Services** (4 cards):
  - Residential Moving
  - Commercial Moving
  - Furniture Transport
  - Cargo Transport

- Each card includes features list and icons
- CTA section for immediate contact

### 3. Service Areas Section
- 4 detailed location cards (Kisii, Nyamira, Migori, Homabay)
- Coverage areas listed for each county
- Available services per location
- Highlights/benefits per area
- WhatsApp CTA for area inquiries

### 4. Why Choose Us Section
- 8 value cards:
  - Innovation
  - Sustainability
  - Customer Satisfaction
  - Professional Team
  - Modern Fleet
  - Competitive Pricing
  - 24/7 Availability
  - Local Expertise

- Trust signals section with 8 badges

### 5. Contact Section
- **Contact Information Cards**:
  - Phone numbers (2 lines)
  - WhatsApp
  - Email
  - Physical location
  - Business hours

- **Quote Request Form**:
  - Name, Phone, Email
  - Service selection dropdown
  - Location/County selection
  - Message textarea
  - Preferred contact method (radio)
  - Submits via WhatsApp

### 6. Floating Contact Buttons
- Fixed position (bottom-right)
- 3 buttons: WhatsApp, Phone, Email
- Hover tooltips
- Mobile-responsive sizing
- Smooth animations

### 7. Footer
- Company info with social links
- Services list
- Service areas
- Contact information
- Quick links
- Copyright notice

## SEO Implementation

### Meta Tags (layout.tsx)
- Optimized title with location keywords
- Comprehensive description
- Keywords array for all 4 counties
- Open Graph tags for social sharing
- Twitter Card tags
- Robots meta configuration

### Structured Data (JSON-LD)
- LocalBusiness schema
- Service schema with offer catalog
- Organization schema
- All 4 service areas included

### Technical SEO
- robots.txt configured
- sitemap.xml with all sections
- Semantic HTML5 structure
- Mobile-responsive design
- Fast loading with Next.js optimization

## Contact Information

### Phone Numbers
- Primary: 0727 650 246 (+254727650246)
- Secondary: 0734 466 674 (+254734466674)

### WhatsApp
- Number: 0727 650 246
- Pre-filled messages for different contexts

### Email
- General: info@blessingexhausters.co.ke
- Quotes: quotes@blessingexhausters.co.ke

### Location
- City: Kisii
- County: Kisii County
- Country: Kenya

## Brand Colors
- Primary Green: #00B050
- Dark Green: #008C3A
- Light Green: #E6F7ED
- WhatsApp Green: #25D366

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints: 640px, 768px, 1024px, 1280px

## Accessibility Features
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text on images (to be added)
- Color contrast meets WCAG AA standards

## Performance Optimizations
- Next.js Image component (ready for use)
- Lazy loading for images
- Code splitting
- CSS optimization
- Fast page load times

## Future Enhancements
- Image optimization (rename and compress existing 18 images)
- Add actual business email addresses
- Add physical address details
- Google Analytics integration
- Google Business Profile integration
- Customer testimonials section
- Before/after photo gallery
- Online booking system
- Multi-language support (Swahili)

## Deployment
Ready to deploy to:
- Vercel (recommended for Next.js)
- Netlify
- Custom hosting

## Notes
- All contact links are functional (tel:, mailto:, WhatsApp)
- Form submissions redirect to WhatsApp with formatted message
- Floating buttons visible on all pages
- Smooth scrolling for anchor links
- All sections are mobile-responsive
