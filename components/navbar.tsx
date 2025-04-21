"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm py-4 border-b border-neutral-800/50" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-mono tracking-tighter font-bold">
            WALI.KHAN
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#about" className="text-neutral-400 hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#projects" className="text-neutral-400 hover:text-white transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#experience" className="text-neutral-400 hover:text-white transition-colors relative group">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#contact" className="text-neutral-400 hover:text-white transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="border border-neutral-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Resume
            </Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-8">
            <Link
              href="/#about"
              className="text-xl text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="text-xl text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-xl text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="text-xl text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="border border-neutral-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
