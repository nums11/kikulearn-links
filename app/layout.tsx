import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kiku - Learn Languages from Social Media',
  description: 'Transform social media videos into language learning opportunities. Get transcriptions, translations, and flashcards instantly.',
  keywords: ['language', 'learning', 'social media', 'TikTok', 'Instagram', 'YouTube', 'transcription', 'flashcards', 'AI'],
  authors: [{ name: 'Kiku Team' }],
  openGraph: {
    title: 'Kiku - Learn Languages from Social Media',
    description: 'Transform social media videos into language learning opportunities. Get transcriptions, translations, and flashcards instantly.',
    type: 'website',
    siteName: 'Kiku',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiku - Learn Languages from Social Media',
    description: 'Transform social media videos into language learning opportunities.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
