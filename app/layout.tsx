import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jesseman Devamirtham — Frontend Engineer",
  description:
    "Frontend engineer building high-performance React and Next.js interfaces — Web3 wallet integrations, real-time dashboards, type-safe systems. Based in Chennai.",
  keywords: [
    "frontend engineer",
    "Jesseman Devamirtham",
    "React developer",
    "Next.js",
    "TypeScript",
    "Web3 frontend",
    "wallet integration",
    "Solana",
    "ethers.js",
    "software engineer India",
  ],
  openGraph: {
    title: "Jesseman Devamirtham — Frontend Engineer",
    description:
      "High-performance React and Next.js interfaces. Web3 wallet flows, real-time dashboards, type-safe systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesseman Devamirtham — Frontend Engineer",
    description:
      "High-performance React and Next.js interfaces. Web3 wallet flows, real-time dashboards, type-safe systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-paper text-ink">{children}</body>
    </html>
  );
}
