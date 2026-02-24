import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import FramerBackground from "@/components/FramerBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bikrambabu.com.np"),
  title: "Er. Bikram Babu KC | Civil Engineer & Vastu Shashtri",
  description:
    "Portfolio of Er. Bikram Babu KC, a multi-disciplinary civil engineering professional bridging ancient Vastu Shastra with modern structural engineering in Nepal.",
  keywords: [
    "Civil Engineer Nepal",
    "Vastu Shashtri Nepal",
    "Bikram Babu KC",
    "Structural Engineering Nepal",
    "Vastu Consultant Dang",
    "Life Coach Nepal",
    "PrimeFace Engineering",
  ],
  authors: [{ name: "Er. Bikram Babu KC", url: "https://bikrambabu.com.np" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-v2.ico", sizes: "any" },
      { url: "/favicon-v2-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-v2-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-v2.ico",
  },
  openGraph: {
    title: "Er. Bikram Babu KC | Civil Engineer & Vastu Shashtri",
    description:
      "Portfolio of Er. Bikram Babu KC, a multi-disciplinary civil engineering professional bridging ancient Vastu Shastra with modern structural engineering in Nepal.",
    url: "https://bikrambabu.com.np",
    siteName: "Er. Bikram Babu KC",
    images: [
      {
        url: "/bikramdailogo.png",
        width: 1024,
        height: 1024,
        alt: "Er. Bikram Babu KC — Civil Engineer & Vastu Shashtri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Er. Bikram Babu KC | Civil Engineer & Vastu Shashtri",
    description:
      "Portfolio of Er. Bikram Babu KC, bridging ancient Vastu Shastra with modern structural engineering in Nepal.",
    images: ["/bikramdailogo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Er. Bikram Babu KC",
  url: "https://bikrambabu.com.np",
  image: "https://bikrambabu.com.np/bikrambabu.jpeg",
  jobTitle: "Civil Engineer & Vastu Shashtri",
  description:
    "Civil Engineer and Vastu Shashtri bridging ancient Vastu Shastra with modern structural engineering in Nepal. Founder & CEO of PrimeFace Engineering Consultancy.",
  worksFor: {
    "@type": "Organization",
    name: "PrimeFace Engineering Consultancy Pvt. Ltd.",
    url: "https://www.theprimeface.com",
  },
  sameAs: ["https://www.theprimeface.com"],
  knowsAbout: [
    "Vastu Shastra",
    "Structural Engineering",
    "Civil Engineering",
    "Life Coaching",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dang",
    addressRegion: "Lumbini",
    addressCountry: "NP",
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
        className={`${inter.variable} antialiased selection:bg-neon selection:text-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <FramerBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
