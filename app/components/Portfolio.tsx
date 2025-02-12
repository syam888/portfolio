"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Modern Minimalism",
    description: "A journey through contemporary design",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-31%20151736-TOgjHhlKshox6V9r4NveQD13wjbpgb.png",
  },
  // Add more projects as needed
]

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <section id="work" className="min-h-screen bg-black">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left Panel - Image */}
        <div className="relative h-[50vh] md:h-screen">
          <Image
            src={projects[activeProject].image || "/placeholder.svg"}
            alt={projects[activeProject].title}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Panel - Content */}
        <div className="flex items-center p-8 md:p-16 bg-[#111]">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-light mb-6"
            >
              My
              <span className="block">Portfolio</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-[1px] bg-white mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-400 mb-8 font-light"
            >
              {projects[activeProject].description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

