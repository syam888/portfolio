import { Github, Instagram, Linkedin, Code2 } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin className="h-6 w-6" />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/yourusername",
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: <Instagram className="h-6 w-6" />,
    },
  ]

  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Gana Syam Reddy Mandepudi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

