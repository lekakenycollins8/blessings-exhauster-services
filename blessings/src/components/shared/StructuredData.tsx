import { COMPANY_INFO } from '@/lib/constants/company';
import { CONTACT_INFO } from '@/lib/constants/contact';
import { SERVICE_AREAS } from '@/lib/constants/locations';

export function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_INFO.name,
    "image": "/images/WhatsApp Image 2026-02-21 at 13.25.34.jpeg",
    "description": COMPANY_INFO.tagline,
    "telephone": [
      CONTACT_INFO.phones.primary.international,
      CONTACT_INFO.phones.secondary.international,
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": CONTACT_INFO.address.city,
      "addressRegion": CONTACT_INFO.address.county,
      "addressCountry": CONTACT_INFO.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-0.6817",
      "longitude": "34.7680",
    },
    "areaServed": SERVICE_AREAS.map(area => ({
      "@type": "City",
      "name": area.name,
    })),
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "url": "https://blessingexhausters.co.ke",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Exhauster and Transport Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": COMPANY_INFO.name,
    },
    "areaServed": SERVICE_AREAS.map(area => area.name),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Exhauster and Transport Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Septic Tank Emptying",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grease Trap Cleaning",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pit Latrine Emptying",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Moving Services",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Transport Services",
          },
        },
      ],
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "url": "https://blessingexhausters.co.ke",
    "logo": "/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT_INFO.phones.primary.international,
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["English", "Swahili"],
    },
    "sameAs": [
      "https://facebook.com/blessingexhausters",
      "https://instagram.com/blessingexhausters",
      "https://twitter.com/blessingexhaust",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
