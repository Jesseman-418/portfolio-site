import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
});

export const metadata: Metadata = {
  title: "Jesseman Devamirtham | Full-Stack Engineer & AI Builder",
  description:
    "Full-stack engineer building production web apps with Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB. AI/ML research published in IEEE. I build things that work.",
  keywords: [
    "full-stack engineer",
    "software engineer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React",
    "AI",
    "machine learning",
  ],
  openGraph: {
    title: "Jesseman Devamirtham | Full-Stack Engineer & AI Builder",
    description:
      "Full-stack engineer. AI builder. Ships production apps end-to-end.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesseman Devamirtham | Full-Stack Engineer & AI Builder",
    description:
      "Full-stack engineer. AI builder. Ships production apps end-to-end.",
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030303",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
