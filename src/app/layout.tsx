import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSO Industries | Real Estate Development & General Contracting",
  description:
    "JSO Industries is a real estate development and contracting firm serving NY, CT and NJ. We acquire, entitle, and build our own projects — and bring that same developer's eye to yours.",
  keywords: [
    "real estate development",
    "real estate developer",
    "ground up construction",
    "commercial construction",
    "residential construction",
    "renovation",
    "value add real estate",
    "general contractor",
    "construction management",
    "New York",
    "Westchester County",
    "Fairfield County",
    "Connecticut",
    "New Jersey",
    "developer contractor",
    "real estate development New York",
    "JSO Industries",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "JSO Industries | Development & Contracting",
    description:
      "Real estate development and contracting firm serving Westchester County, NYC, Fairfield County CT, and Bergen County NJ.",
    url: "https://jsoindustries.com",
    siteName: "JSO Industries Inc.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jsoindustries.com/logo-company.jpeg",
        width: 1200,
        height: 630,
        alt: "JSO Industries Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSO Industries | Development & Contracting",
    description:
      "Real estate development and contracting firm serving Westchester County, NYC, Fairfield County CT, and Bergen County NJ.",
    images: ["https://jsoindustries.com/logo-company.jpeg"],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration'in history){history.scrollRestoration='manual';}if(window.location.hash){history.replaceState(null,'',window.location.pathname);}window.scrollTo(0,0);document.addEventListener('DOMContentLoaded',function(){window.scrollTo(0,0);});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "RealEstateAgent"],
              "name": "JSO Industries",
              "description": "Real estate development and general contracting firm serving NY, CT and NJ.",
              "url": "https://jsoindustries.com",
              "telephone": "+19144194449",
              "email": "office@jsoindustries.com",
              "logo": "https://jsoindustries.com/logo-company.jpeg",
              "image": "https://jsoindustries.com/logo-company.jpeg",
              "priceRange": "$$",
              "sameAs": ["https://www.instagram.com/JSO_Industries"],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Westchester County, NY" },
                { "@type": "AdministrativeArea", "name": "New York City, NY" },
                { "@type": "AdministrativeArea", "name": "Fairfield County, CT" },
                { "@type": "AdministrativeArea", "name": "Hudson County, NJ" },
                { "@type": "AdministrativeArea", "name": "Bergen County, NJ" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real Estate Development" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "General Contracting" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Management" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Project Management" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Buildouts" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction" } }
                ]
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
