import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
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
  title: "Jesseman Devamirtham N — Full-Stack Software Engineer",
  description: "Jesseman Devamirtham N is a VIT Chennai Computer Science graduate building secure APIs, full-stack applications, and practical automation. Based in Chennai, India.",
  keywords: ["Jesseman Devamirtham", "full-stack software engineer", "backend engineer", "Python", "TypeScript", "Node.js", "React", "VIT Chennai", "Chennai"],
  openGraph: {
    title: "Jesseman Devamirtham N — Full-Stack Software Engineer",
    description: "Secure APIs, full-stack applications, practical automation, and applied AI. Based in Chennai, India.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Jesseman Devamirtham N — Full-Stack Engineer",
    description: "Secure APIs, full-stack applications, and practical automation. Based in Chennai, India.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
