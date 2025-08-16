import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DreamWatch - שעונים דיגיטליים מתקדמים',
  description: 'שעונים דיגיטליים עם שליטה מתקדמת וטכנולוגיה חדשנית - איכות מעולה במחיר נגיש',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-hebrew" dir="rtl">{children}</body>
    </html>
  )
}
