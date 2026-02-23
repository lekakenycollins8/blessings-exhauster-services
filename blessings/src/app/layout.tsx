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
  title: "Exhauster & Moving Services | Kisii, Nyamira, Migori, Homabay | Blessing Movers",
  description: "Professional exhauster & transport services in Kisii, Nyamira, Migori & Homabay. 24/7 septic tank emptying, grease trap cleaning, moving services. Call 0727 650 246 today!",
  keywords: [
    "exhauster services kisii",
    "septic tank emptying nyamira",
    "moving services migori",
    "transport services homabay",
    "grease trap cleaning kisii",
    "pit latrine emptying",
    "exhauster kisii town",
    "24/7 exhauster services",
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
