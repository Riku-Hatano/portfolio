import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior: "smooth"}}>
      <title>Riku's Portfolio</title>
      <body className={inter.className}>{children}</body>
    </html>
  )
}