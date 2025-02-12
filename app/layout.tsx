import "./globals.css"
import { Montserrat } from "next/font/google"
import Header from "./components/Header"
import type React from "react"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Gana Syam Reddy Mandepudi - Portfolio",
  description: "Personal portfolio of Gana Syam Reddy Mandepudi, Data Scientist & Software Engineer",
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
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`} />
      </head>
      <body className={`${montserrat.className} bg-black text-white antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}



import './globals.css'