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
  title: "JSO Industries Inc. | Licensed General Contractor | NY, CT & NJ",
  description:
    "JSO Industries Inc. is a licensed general contractor and fully insured construction company in NY, CT and NJ, specializing in commercial, residential, and civil construction management.",
  keywords: [
    "construction",
    "commercial construction",
    "residential construction",
    "civil construction",
    "home improvement",
    "contractor",
    "general contractor",
    "construction management",
    "New York",
    "Westchester County",
    "Fairfield County",
    "Connecticut",
    "New Jersey",
    "licensed contractor",
    "general contractor New Jersey",
    "general contractor New York",
    "Hudson County contractor",
    "Bergen County contractor",
    "Westchester County contractor",
    "Five Boroughs contractor",
    "JSO Industries",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "JSO Industries Inc.",
    description:
      "Licensed general contractor serving Westchester County, Five Boroughs NY, Fairfield County, Hudson County NJ, and Bergen County NJ. Commercial, residential, civil construction, construction management, renovations, and specialty trades.",
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
    title: "JSO Industries Inc.",
    description:
      "Licensed general contractor serving Westchester County, Five Boroughs NY, Fairfield County, Hudson County NJ, and Bergen County NJ.",
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
              "@type": ["LocalBusiness", "GeneralContractor"],
              "name": "JSO Industries Inc.",
              "description": "Licensed general contractor and fully insured construction company serving NY, CT and NJ, specializing in commercial, residential, and civil construction management.",
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
                "name": "Construction Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Construction" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Construction" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Civil Construction" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renovations" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction Management" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Specialty Trades" } }
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
