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
  title: "JSO Industries Inc. | Commercial & Residential Construction | New York",
  description:
    "JSO Industries Inc. is a licensed home improvement contractor and fully insured construction company in NY and CT, specializing in commercial and residential construction.",
  keywords: [
    "construction",
    "commercial construction",
    "residential construction",
    "civil construction",
    "home improvement",
    "contractor",
    "New York",
    "Westchester County",
    "Fairfield County",
    "Connecticut",
    "licensed contractor",
    "JSO Industries",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "JSO Industries Inc. | Commercial & Residential Construction",
    description:
      "Licensed and fully insured construction company serving Westchester County, Fairfield County, and New York. Commercial, residential, civil construction, renovations, and specialty trades.",
    url: "https://jsoindustries.com",
    siteName: "JSO Industries Inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSO Industries Inc. | Commercial & Residential Construction",
    description:
      "Licensed and fully insured construction company serving Westchester County, Fairfield County, and New York.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
