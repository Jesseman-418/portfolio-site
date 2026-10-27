import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Manrope } from "next/font/google";
import PointerField from "@/components/PointerField";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Jesseman Devamirtham — Software Engineer & Founder",
  description: "Jesseman Devamirtham is a software engineer and Meridius AI founder building secure backend systems, full-stack products, and applied AI tools. Based in Chennai, India.",
  keywords: ["Jesseman Devamirtham", "software engineer", "founder", "Meridius AI", "backend engineer", "VIT Chennai"],
  openGraph: {
    title: "Jesseman Devamirtham — Software Engineer & Founder",
    description: "Secure backend systems, full-stack products, and applied AI. Based in Chennai, India.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Jesseman Devamirtham — Software Engineer & Founder",
    description: "Secure backend systems, full-stack products, and applied AI.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111210",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <PointerField />
        {children}
      </body>
    </html>
  );
}
