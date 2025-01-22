import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MoonDoge - To the Moon!",
  description: "The memecoin that's out of this world! Join the MoonDoge revolution today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/coin.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

