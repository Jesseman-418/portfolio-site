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
  title: "Jesseman Devamirtham N — Software Engineer",
  description: "Software engineer in Chennai building backend services, full-stack applications, and AI automation. VIT Chennai graduate, former Hyundai Motor India intern, and IEEE Xplore first author.",
  keywords: ["Jesseman Devamirtham", "software engineer", "backend", "full-stack", "AI applications", "Python", "Node.js", "React", "Chennai"],
  openGraph: {
    title: "Jesseman Devamirtham N — Software Engineer",
    description: "Backend, full-stack & AI applications. Explore API security, identity, document retrieval, and web projects.",
    type: "website", locale: "en_US",
  },
  twitter: { card: "summary", title: "Jesseman Devamirtham N — Software Engineer", description: "Backend, full-stack & AI applications. Chennai, India." },
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
