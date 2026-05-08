import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    "JSO Industries is a real estate development and general contracting firm serving Westchester County, NYC, Fairfield County CT, and Bergen County NJ. We acquire, entitle, and build our own projects — and bring that same developer's eye to yours.",
  keywords: [
    "real estate development",
    "general contractor",
    "ground-up construction",
    "commercial construction",
    "residential construction",
    "construction management",
    "owner's representative",
    "Westchester County",
    "Fairfield County Connecticut",
    "Bergen County New Jersey",
    "New York developer",
    "JSO Industries",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "JSO Industries | Development & Contracting",
    description:
      "Real estate development and general contracting firm serving Westchester County, NYC, Fairfield County CT, and Bergen County NJ.",
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
      "Real estate development and general contracting firm serving the tri-state area.",
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
            __html: `if('scrollRestoration'in history){history.scrollRestoration='manual';}window.scrollTo(0,0);`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "RealEstateAgent"],
              name: "JSO Industries",
              description:
                "Real estate development and general contracting firm serving NY, CT and NJ.",
              url: "https://jsoindustries.com",
              email: "office@jsoindustries.com",
              logo: "https://jsoindustries.com/logo-company.jpeg",
              priceRange: "$$",
              sameAs: ["https://www.instagram.com/JSO_Industries"],
              address: {
                "@type": "PostalAddress",
                addressRegion: "NY",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Westchester County, NY" },
                { "@type": "AdministrativeArea", name: "New York City, NY" },
                { "@type": "AdministrativeArea", name: "Fairfield County, CT" },
                { "@type": "AdministrativeArea", name: "Bergen County, NJ" },
                { "@type": "AdministrativeArea", name: "Hudson County, NJ" },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
