import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TUF+ | TakeUForward PLUS - Your ONE STOP Interview Prep Platform",
  description:
    "Master tech interviews with TakeUForward PLUS. Complete DSA, System Design, Aptitude, and Premium interview preparation in one platform. Join 50,000+ students who landed their dream jobs.",
  keywords:
    "interview preparation, coding interview, DSA, system design, FAANG, tech interviews, programming, algorithms, data structures",
  authors: [{ name: "TakeUForward" }],
  creator: "TakeUForward",
  publisher: "TakeUForward",
  robots: "index, follow",
  openGraph: {
    title: "TUF+ | TakeUForward PLUS - Your ONE STOP Interview Prep Platform",
    description:
      "Master tech interviews with our comprehensive platform. DSA, System Design, Aptitude & Premium prep all in one place.",
    url: "https://tuf-plus.vercel.app",
    siteName: "TakeUForward PLUS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TakeUForward PLUS - Interview Prep Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TUF+ | TakeUForward PLUS - Your ONE STOP Interview Prep Platform",
    description:
      "Master tech interviews with our comprehensive platform. DSA, System Design, Aptitude & Premium prep all in one place.",
    images: ["/og-image.png"],
    creator: "@takeUforward",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#ea580c" }],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ea580c",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ea580c" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        <meta name="theme-color" content="#ea580c" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
