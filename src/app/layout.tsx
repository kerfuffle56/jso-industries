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
    "JSO Industries Inc. is a licensed home improvement contractor and fully insured construction company in New York, specializing in commercial and residential construction.",
  keywords: [
    "construction",
    "commercial construction",
    "residential construction",
    "home improvement",
    "contractor",
    "New York",
    "licensed contractor",
    "JSO Industries",
  ],
  icons: {
    icon: "/logo-instagram.png",
    apple: "/logo-instagram.png",
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
