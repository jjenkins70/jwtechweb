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
  title: "JW Technologies | Technical Expertise & Best Practices",
  description: "Professional technical insights, best practices, and expertise from Jeremiah Jenkins. Specializing in networking, Linux administration, database management, and technical program management.",
  keywords: "technology, networking, Linux, database administration, technical program management, best practices, IT consulting",
  authors: [{ name: "Jeremiah Jenkins" }],
  creator: "Jeremiah Jenkins",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jwtech.dev",
    title: "JW Technologies | Technical Expertise & Best Practices",
    description: "Professional technical insights, best practices, and expertise from Jeremiah Jenkins.",
    siteName: "JW Technologies",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JW_TECH",
    creator: "@JW_TECH",
    title: "JW Technologies | Technical Expertise & Best Practices",
    description: "Professional technical insights, best practices, and expertise from Jeremiah Jenkins.",
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
