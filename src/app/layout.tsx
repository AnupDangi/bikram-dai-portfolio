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
  title: "Er. Bikram Babu KC | Civil Engineer & Vastu Shashtri",
  description: "Portfolio of Er. Bikram Babu KC, a multi-disciplinary civil engineering professional bridging ancient Vastu Shastra with modern structural engineering in Nepal.",
  keywords: ["Civil Engineer", "Vastu Shashtri", "Nepal", "Bikram Babu KC", "Structural Engineering", "Life Coach"],
  authors: [{ name: "Er. Bikram Babu KC" }],
  icons: {
    icon: "/bikramdailogo.png",
    shortcut: "/bikramdailogo.png",
    apple: "/bikramdailogo.png",
  },
  openGraph: {
    title: "Er. Bikram Babu KC | Civil Engineer & Vastu Shashtri",
    description: "Portfolio of Er. Bikram Babu KC, a multi-disciplinary civil engineering professional bridging ancient Vastu Shastra with modern structural engineering in Nepal.",
    url: "https://bikrambabu.com.np",
    siteName: "Er. Bikram Babu KC Portfolio",
    images: [
      {
        url: "/bikramdailogo.png",
        width: 800,
        height: 600,
        alt: "Er. Bikram Babu KC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased selection:bg-neon selection:text-black`}>
        <Providers>
          <FramerBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
