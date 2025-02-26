import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ],
  preload: true,
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Fix-IT - AI-Powered Study Assistant",
  description: "Transform your learning journey with our magical AI study assistant. Get personalized quizzes and watch your knowledge bloom.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
