"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/myphoto.JPG-p5mHDwP5VyeDHi8KhTYOKA0JIyPTH9.jpeg"
                alt="Profile Photo"
                fill
                className="object-cover rounded-lg"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-white rounded-lg"></div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-white rounded-lg"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-light">About Me</h2>
            <div className="w-16 h-[1px] bg-white"></div>
            <p className="text-gray-300 leading-relaxed">
              Software Engineer and Data Scientist with experience at Tata Consultancy Services, specializing in cloud
              technologies and machine learning implementations. Currently pursuing MS in Data Science at University at
              Buffalo with a GPA of 3.75/4.0.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div>
                <h3 className="text-xl font-light mb-2">Technical Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Python / JavaScript / Java</li>
                  <li>React / Node.js / Spring Boot</li>
                  <li>AWS / Azure</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-2">Expertise</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Full Stack Development</li>
                  <li>Data Science</li>
                  <li>Cloud Architecture</li>
                  <li>Database Management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

