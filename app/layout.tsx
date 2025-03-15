import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Craig Pitcher - Senior Full Stack Engineer",
  description: "Portfolio of Craig Pitcher, a Senior Full Stack Engineer specializing in modern web technologies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}



import './globals.css'