"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background_image-1.jpg-IWmhuQdyhKmcoLSErPCrc50p9s0KhD.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1
            className={`text-5xl md:text-7xl font-light mb-6 transition-all duration-1000 transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            GANA SYAM
            <span className="block">REDDY MANDEPUDI</span>
          </h1>
          <p
            className={`text-xl md:text-2xl font-light mb-4 transition-all duration-1000 delay-300 transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Data Scientist & Software Engineer
          </p>
          <p
            className={`text-gray-300 mb-8 transition-all duration-1000 delay-300 transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            MS in Data Science @ University at Buffalo
          </p>
          <div
            className={`flex space-x-4 transition-all duration-1000 delay-500 transform
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Link href="mailto:ganasyam@buffalo.edu">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </Link>
            <Link href="https://github.com/yourusername" target="_blank">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-none">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 rounded-none">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-16 bg-white/50 relative">
          <div className="absolute w-full h-1/3 bg-white animate-scroll-down"></div>
        </div>
      </div>
    </section>
  )
}

