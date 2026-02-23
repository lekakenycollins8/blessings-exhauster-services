# Blessing Movers & Exhauster Services - Deployment Guide

## Pre-Deployment Checklist

### 1. Update Contact Information
Before deploying, update the following files with actual business information:

**File: `src/lib/constants/contact.ts`**
- [ ] Confirm WhatsApp number (currently set to 0727 650 246)
- [ ] Add actual email addresses (currently placeholder)
- [ ] Add complete physical address

### 2. Optimize Images
The website has 18 images in `/public/images/`. Optimize them:

```bash
cd public/images

# Rename images to SEO-friendly names (recommended):
# - exhauster-service-kisii-1.jpg
# - septic-tank-cleaning-nyamira.jpg
# - moving-truck-migori.jpg
# - transport-service-homabay.jpg
# etc.

# Compress images (use tools like):
# - ImageOptim (Mac)
# - TinyPNG (Web)
# - Sharp (Node.js)
```

### 3. Create Social Media Images
Create optimized images for social sharing:
- **OG Image**: 1200x630px → `/public/images/og-image.jpg`
- **Twitter Card**: 1200x600px → `/public/images/twitter-card.jpg`
- **Logo**: Multiple sizes → `/public/images/logo.png`

### 4. Update Domain
Replace `blessingexhausters.co.ke` with your actual domain in:
- `src/app/layout.tsx` (metadataBase)
- `public/sitemap.xml`
- `public/robots.txt`

### 5. Add Google Analytics (Optional)
Add tracking code to `src/app/layout.tsx`:

```typescript
// In the <head> section
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## Testing Locally

### 1. Install Dependencies
```bash
cd blessings
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to test the website.

### 3. Test Checklist
- [ ] All sections load correctly
- [ ] Phone links work (click-to-call)
- [ ] WhatsApp links open correctly
- [ ] Email links work
- [ ] Contact form submits to WhatsApp
- [ ] Floating buttons are visible and functional
- [ ] All images load
- [ ] Mobile responsive on different screen sizes
- [ ] Smooth scrolling works
- [ ] All CTAs are clickable

### 4. Build for Production
```bash
npm run build
npm start
```

Test the production build at `http://localhost:3000`

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
cd blessings
vercel
```

3. **Follow prompts**:
   - Link to Vercel account
   - Set project name
   - Configure build settings (auto-detected)

4. **Custom Domain**:
   - Go to Vercel dashboard
   - Add custom domain: `blessingexhausters.co.ke`
   - Update DNS records as instructed

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Build the project**
```bash
npm run build
```

3. **Deploy**
```bash
netlify deploy --prod
```

4. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add custom domain in Netlify dashboard

### Option 3: Custom VPS/Hosting

1. **Build the project**
```bash
npm run build
```

2. **Install PM2**
```bash
npm i -g pm2
```

3. **Start with PM2**
```bash
pm2 start npm --name "blessing-exhauster" -- start
pm2 save
pm2 startup
```

4. **Configure Nginx** (example):
```nginx
server {
    listen 80;
    server_name blessingexhausters.co.ke;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **SSL Certificate** (Let's Encrypt):
```bash
sudo certbot --nginx -d blessingexhausters.co.ke
```

## Post-Deployment Tasks

### 1. Google Search Console
- Add property: `https://blessingexhausters.co.ke`
- Submit sitemap: `https://blessingexhausters.co.ke/sitemap.xml`
- Verify ownership

### 2. Google Business Profile
- Create/claim listing for each service area
- Add business information
- Upload fleet photos
- Add phone numbers and website
- Encourage customer reviews

### 3. Social Media Setup
- Create Facebook page
- Create Instagram account
- Create Twitter/X account
- Update social links in `src/lib/constants/contact.ts`

### 4. Monitor Performance
- Google Analytics
- Google Search Console
- PageSpeed Insights
- Core Web Vitals

### 5. Local SEO
- List on Kenya business directories
- Ensure NAP (Name, Address, Phone) consistency
- Build local citations
- Encourage customer reviews

## Environment Variables (if needed)

Create `.env.local` for sensitive data:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID

# Contact Form (if using email service)
SMTP_HOST=smtp.example.com
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# WhatsApp Business API (if integrating)
WHATSAPP_API_KEY=your-api-key
```

## Maintenance

### Regular Updates
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Update content as needed
- Add new testimonials
- Update service areas if expanding

### Backup
- Backup codebase regularly
- Backup images and assets
- Document any custom changes

## Support & Resources

### Documentation
- Next.js: https://nextjs.org/docs
- TailwindCSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com

### Performance Monitoring
- Vercel Analytics (if using Vercel)
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Image Issues
- Ensure images are in `/public/images/`
- Check file names match references
- Optimize large images

### SEO Issues
- Verify robots.txt is accessible
- Check sitemap.xml format
- Ensure meta tags are rendering
- Test structured data with Google Rich Results Test

## Success Metrics

Track these KPIs:
- Website traffic (Google Analytics)
- Phone call conversions
- WhatsApp message conversions
- Form submissions
- Local search rankings
- Page load speed
- Mobile usability score

## Next Steps After Deployment

1. Submit to search engines
2. Set up Google Business Profile
3. Create social media accounts
4. Start content marketing
5. Collect customer testimonials
6. Monitor and optimize SEO
7. A/B test CTAs
8. Add blog section (future)
9. Implement online booking (future)
10. Add customer reviews section (future)
