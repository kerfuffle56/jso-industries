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
    "JSO Industries",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "JSO Industries Inc.",
    description:
      "Licensed general contractor serving Westchester County, Fairfield County, New York, and New Jersey. Commercial, residential, civil construction, construction management, renovations, and specialty trades.",
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
      "Licensed general contractor serving Westchester County, Fairfield County, New York, and New Jersey.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
