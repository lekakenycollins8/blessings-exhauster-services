import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/shared/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exhauster & Moving Services | 0727 650 246 | 0734 466 674 |Kisii, Nyamira, Migori, Homabay | Blessing Movers",
  description: "Professional exhauster & transport services in Kisii, Nyamira, Migori & Homabay. 24/7 septic tank emptying, grease trap cleaning, moving services. Call 0727 650 246 today!",
  keywords: [
    "exhauster services kisii",
    "exhauster services nyamira",
    "exhauster services migori",
    "exhauster services homabay",
    "septic tank emptying kisii",
    "septic tank emptying nyamira",
    "septic tank emptying migori",
    "septic tank emptying homabay",
    "moving services kisii",
    "moving services nyamira",
    "moving services migori",
    "moving services homabay",
    "transport services kisii",
    "transport services nyamira",
    "transport services migori",
    "transport services homabay",
    "grease trap cleaning kisii",
    "grease trap cleaning nyamira",
    "grease trap cleaning migori",
    "grease trap cleaning homabay",
    "pit latrine emptying kisii",
    "pit latrine emptying nyamira",
    "pit latrine emptying migori",
    "pit latrine emptying homabay",
    "exhauster kisii town",
    "exhauster nyamira town",
    "exhauster migori town",
    "exhauster homabay town",
    "24/7 exhauster services kisii",
    "24/7 exhauster services nyamira",
    "24/7 exhauster services migori",
    "24/7 exhauster services homabay",
    "professional moving services kenya",
    "blessing movers exhauster",
  ],
  authors: [{ name: "Blessing Movers & Exhauster" }],
  creator: "Blessing Movers & Exhauster",
  publisher: "Blessing Movers & Exhauster",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blessingexhausters.co.ke"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blessing Movers & Exhauster - Top Services in Kisii, Nyamira, Migori & Homabay",
    description: "Dedicated to delivering top tier exhauster and transport services with focus on innovation, sustainability, and customer satisfaction.",
    url: "https://blessingexhausters.co.ke",
    siteName: "Blessing Movers & Exhauster",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blessing Movers & Exhauster Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessing Movers & Exhauster Services",
    description: "Professional exhauster & transport services in Kisii, Nyamira, Migori & Homabay",
    images: ["/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
