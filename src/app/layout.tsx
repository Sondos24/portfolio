import type { Metadata } from "next";
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

const siteUrl = "https://sondosalqaisi.dev";
const title = "Sondos Alqaisi | XR & AI Developer | Unreal Engine Specialist";
const description =
  "Sondos Alqaisi is an XR, AI, and Unreal Engine specialist crafting immersive experiences, Meta Quest builds, and AI-driven game systems for clients and freelance platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Sondos Alqaisi",
    "XR developer",
    "AI developer",
    "Unreal Engine specialist",
    "Meta Quest",
    "Mixed Reality",
    "Game development",
    "Freelance XR",
    "Remote XR developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Sondos Alqaisi Portfolio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sondos Alqaisi | XR & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sondos Alqaisi",
  jobTitle: "XR & AI Developer | Unreal Engine Specialist",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    "https://github.com/Sondos24",
    "https://www.linkedin.com/in/sondos-alqaisi-091a442bb",
  ],
  knowsAbout: [
    "XR",
    "Mixed Reality",
    "Unreal Engine",
    "Meta Quest",
    "AI systems",
    "Game development",
    "Python",
    "C++",
    "Blender",
  ],
  description,
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
