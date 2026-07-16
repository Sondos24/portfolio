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
const title =
  "Sondos Alqaisi | AI & XR Engineer | Unreal Engine · Computer Vision";
const description =
  "Sondos Alqaisi is an AI and XR engineer specializing in Unreal Engine, Unity, computer vision, deep learning, and AI agent systems. Building intelligent immersive experiences across gaming, healthcare, and engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Sondos Alqaisi",
    "AI engineer",
    "XR developer",
    "VR developer",
    "Unreal Engine developer",
    "Unity developer",
    "Computer vision",
    "Deep learning",
    "Machine learning",
    "AI agents",
    "LangChain",
    "OpenCV",
    "YOLO",
    "MediaPipe",
    "Mixed reality",
    "Game development",
    "Medical simulation",
    "Python developer",
    "C# developer",
    "Firebase",
    "Freelance AI developer",
    "Jordan AI developer",
  ],
  authors: [{ name: "Sondos Alqaisi" }],
  creator: "Sondos Alqaisi",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Sondos Alqaisi Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sondos Alqaisi | AI & XR Engineer Portfolio",
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
  jobTitle: "AI & XR Engineer",
  url: siteUrl,
  email: "sondosalqaisi323@gmail.com",
  image: `${siteUrl}/og-image.png`,
  sameAs: [
    "https://github.com/Sondos24",
    "https://www.linkedin.com/in/sondos-alqaisi-091a442bb",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Al-Zarqa University",
    },
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
    "Unreal Engine",
    "Unity",
    "XR",
    "VR",
    "Mixed Reality",
    "AI Agents",
    "LangChain",
    "Python",
    "C#",
    "OpenCV",
    "YOLO",
    "Firebase",
    "Game Development",
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
