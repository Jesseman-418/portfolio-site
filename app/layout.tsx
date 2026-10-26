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
  title: "Jesseman Devamirtham N — Full-Stack Software Engineer",
  description: "Jesseman Devamirtham N is a 2026 VIT Chennai Computer Science graduate with experience in secure Node.js services, Python automation, full-stack applications, and industrial telemetry. Based in Chennai and open to opportunities in Tokyo.",
  keywords: ["Jesseman Devamirtham", "full-stack software engineer", "backend engineer", "Python", "TypeScript", "Node.js", "React", "VIT Chennai"],
  openGraph: {
    title: "Jesseman Devamirtham N — Full-Stack Software Engineer",
    description: "Secure APIs, full-stack applications, practical automation, and industrial telemetry.",
    type: "website", locale: "en_US",
  },
  twitter: { card: "summary", title: "Jesseman Devamirtham N — Full-Stack Engineer", description: "Secure APIs, full-stack applications, and practical automation. Chennai, India; open to Tokyo." },
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
