import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b5998",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hackcsi.vercel.app"),
  title: {
    default: "HackCSI 2026 | CUNY College of Staten Island Hackathon",
    template: "%s | HackCSI 2026",
  },
  description:
    "Join HackCSI 2026 - A 24-hour hackathon at the City University of New York, College of Staten Island. Build, learn, and connect with fellow innovators. Open to all skill levels!",
  keywords: [
    "hackathon",
    "HackCSI",
    "CUNY",
    "College of Staten Island",
    "CSI",
    "coding",
    "programming",
    "technology",
    "innovation",
    "student hackathon",
    "NYC hackathon",
  ],
  authors: [{ name: "HackCSI Team" }],
  creator: "HackCSI",
  publisher: "City University of New York, College of Staten Island",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hackcsi.vercel.app",
    siteName: "HackCSI 2026",
    title: "HackCSI 2026 | CUNY College of Staten Island Hackathon",
    description:
      "Join HackCSI 2026 - A 24-hour hackathon at the City University of New York, College of Staten Island. Build, learn, and connect with fellow innovators.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HackCSI 2026 - College of Staten Island Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackCSI 2026 | CUNY College of Staten Island Hackathon",
    description:
      "Join HackCSI 2026 - A 24-hour hackathon at CUNY College of Staten Island. Build, learn, and connect!",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://hackcsi.vercel.app",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
