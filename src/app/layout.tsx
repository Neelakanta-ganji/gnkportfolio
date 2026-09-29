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
  metadataBase: new URL("https://ganjineelakanta.vercel.app"),
  title: {
    default: "Neelakanta Ganji | Full-Stack Web Developer & App Developer",
    template: "%s | Neelakanta Ganji (Ganji Neelakanta)",
  },
  description:
    "Official portfolio of Neelakanta Ganji (Ganji Neelakanta). Full-Stack Web Developer and App Developer specializing in Next.js, React, Node.js, Supabase, PostgreSQL, and scalable digital products.",
  keywords: [
    "Ganji Neelakanta",
    "Neelakanta Ganji",
    "Neelakanta",
    "ganjineelakanta",
    "ganjineelakanta.vercel.app",
    "Ganji Neelakanta portfolio",
    "Neelakanta Ganji developer",
    "Neelakanta web developer",
    "Full-Stack Web Developer",
    "App Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Supabase Developer",
    "Software Engineer Portfolio",
    "B.Tech Computer Science Engineering",
  ],
  authors: [{ name: "Neelakanta Ganji", url: "https://ganjineelakanta.vercel.app" }],
  creator: "Neelakanta Ganji",
  publisher: "Neelakanta Ganji",
  alternates: {
    canonical: "https://ganjineelakanta.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Neelakanta Ganji (Ganji Neelakanta) | Full-Stack Web Developer & App Developer",
    description:
      "Explore the portfolio of Neelakanta Ganji (Ganji Neelakanta) - building high-performance modern web apps, mobile experiences, and scalable backend systems.",
    url: "https://ganjineelakanta.vercel.app",
    siteName: "Neelakanta Ganji Portfolio",
    images: [
      {
        url: "/neelakanta-hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Neelakanta Ganji (Ganji Neelakanta) - Full-Stack Web Developer & App Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neelakanta Ganji (Ganji Neelakanta) | Full-Stack Web & App Developer",
    description:
      "Full-Stack Web Developer & App Developer building modern digital products, APIs, and mobile experiences.",
    images: ["/neelakanta-hero-portrait.jpg"],
    creator: "@ganjineelakanta",
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
  verification: {
    google: "google85b4e3439debdc33",
  },
};

export const viewport: Viewport = {
  themeColor: "#030508",
  width: "device-width",
  initialScale: 1,
};

// Google Schema.org Structured Data for Knowledge Graph ranking #1
const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ganjineelakanta.vercel.app/#person",
      name: "Neelakanta Ganji",
      alternateName: [
        "Ganji Neelakanta",
        "Neelakanta",
        "ganjineelakanta",
        "G Neelakanta",
      ],
      url: "https://ganjineelakanta.vercel.app",
      image: "https://ganjineelakanta.vercel.app/neelakanta-hero-portrait.jpg",
      jobTitle: "Full-Stack Web Developer & App Developer",
      description:
        "Neelakanta Ganji (Ganji Neelakanta) is a Full-Stack Web Developer and App Developer specializing in Next.js, React, Node.js, Supabase, and distributed systems.",
      sameAs: [
        "https://github.com/Neelakanta-ganji",
        "https://linkedin.com/in/ganjineelakanta",
      ],
      email: "ganjineelakanta0@gmail.com",
      telephone: "+919392799404",
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Computer Science & Engineering",
      },
      knowsAbout: [
        "Web Development",
        "Mobile App Development",
        "Next.js",
        "React",
        "Node.js",
        "Supabase",
        "PostgreSQL",
        "JavaScript",
        "TypeScript",
        "Cloud Architecture",
        "Cybersecurity",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ganjineelakanta.vercel.app/#website",
      url: "https://ganjineelakanta.vercel.app",
      name: "Neelakanta Ganji (Ganji Neelakanta) - Portfolio",
      alternateName: "Ganji Neelakanta Developer Portfolio",
      description:
        "Official developer portfolio of Neelakanta Ganji (Ganji Neelakanta).",
      publisher: {
        "@id": "https://ganjineelakanta.vercel.app/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://ganjineelakanta.vercel.app/#webpage",
      url: "https://ganjineelakanta.vercel.app",
      name: "Neelakanta Ganji | Full-Stack Web Developer & App Developer",
      isPartOf: {
        "@id": "https://ganjineelakanta.vercel.app/#website",
      },
      about: {
        "@id": "https://ganjineelakanta.vercel.app/#person",
      },
      mainEntity: {
        "@id": "https://ganjineelakanta.vercel.app/#person",
      },
    },
  ],
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
      <head>
        {/* Google Knowledge Graph JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030508] text-[#f1f5f9] selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
