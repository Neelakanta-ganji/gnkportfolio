import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neelakanta-ganji.dev"),
  title: "Neelakanta Ganji | Full-Stack Web Developer & App Developer",
  description:
    "Building modern web applications, mobile experiences, backend systems, APIs and complete digital products. Portfolio of Neelakanta Ganji.",
  keywords: [
    "Neelakanta Ganji",
    "Full-Stack Developer",
    "App Developer",
    "Next.js",
    "React",
    "Java Spring Boot",
    "Python",
    "Cassandra",
    "PostgreSQL",
    "Microservices",
  ],
  authors: [{ name: "Neelakanta Ganji" }],
  creator: "Neelakanta Ganji",
  openGraph: {
    title: "Neelakanta Ganji | Full-Stack Web Developer & App Developer",
    description:
      "Building modern web applications, mobile experiences, backend systems, APIs and complete digital products.",
    url: "https://neelakanta-ganji.dev",
    siteName: "Neelakanta Ganji Portfolio",
    images: [
      {
        url: "/neelakanta-ganji.jpg",
        width: 1200,
        height: 630,
        alt: "Neelakanta Ganji - Full-Stack Web Developer & App Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neelakanta Ganji | Full-Stack Web Developer & App Developer",
    description:
      "Building modern web applications, mobile experiences, backend systems, APIs and complete digital products.",
    images: ["/neelakanta-ganji.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030508] text-[#f1f5f9] selection:bg-cyan-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
