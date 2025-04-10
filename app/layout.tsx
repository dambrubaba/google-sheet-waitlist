import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Everything for Prompts - Join Our Waitlist",
  description: "The ultimate platform for prompt engineers and AI enthusiasts. Join our waitlist to get early access to powerful prompt engineering tools and resources.",
  metadataBase: new URL('https://prompt-waitlist.vercel.app/'),
  openGraph: {
    title: "Everything for Prompts - Join Our Waitlist",
    description: "The ultimate platform for prompt engineers and AI enthusiasts. Join our waitlist to get early access to powerful prompt engineering tools and resources.",
    url: 'https://prompt-waitlist.vercel.app/',
    siteName: 'Everything for Prompts',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Everything for Prompts - Join Our Waitlist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everything for Prompts - Join Our Waitlist',
    description: 'The ultimate platform for prompt engineers and AI enthusiasts. Join our waitlist to get early access to powerful prompt engineering tools and resources.',
    images: ['/og-image.png'],
    creator: '@scionofshiv',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'