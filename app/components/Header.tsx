"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-light tracking-widest">
          PORTFOLIO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest">
            HOME
          </Link>
          <Link href="#work" className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest">
            WORK
          </Link>
          <Link href="#about" className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest">
            ABOUT
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest">
            CONTACT
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-black bg-opacity-95 md:hidden">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link href="/" className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest">
                HOME
              </Link>
              <Link href="#work" className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest">
                WORK
              </Link>
              <Link href="#about" className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest">
                ABOUT
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-gray-300 transition-colors text-sm tracking-widest"
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

