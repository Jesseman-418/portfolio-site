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
  title: "Jesseman Devamirtham — Full-Stack Engineer",
  description:
    "Full-stack engineer in Chennai. I design and ship complete production systems — React/Next.js front ends, Node & FastAPI back ends, Postgres data layers, Web3 wallet flows. AI/ML research published in IEEE Xplore.",
  keywords: [
    "full-stack engineer",
    "Jesseman Devamirtham",
    "React developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "Web3",
    "ethers.js",
    "AI engineer",
    "IEEE researcher",
    "software engineer India",
  ],
  openGraph: {
    title: "Jesseman Devamirtham — Full-Stack Engineer",
    description:
      "I design and ship complete production systems. Front to back, schema to deploy. Web3 + AI-native.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesseman Devamirtham — Full-Stack Engineer",
    description:
      "I design and ship complete production systems. Front to back, schema to deploy. Web3 + AI-native.",
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
