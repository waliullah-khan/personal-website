import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-neutral-800/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-mono tracking-tighter font-bold">
              WALI.KHAN
            </Link>
            <p className="text-neutral-500 mt-2 text-sm">Product Analyst & Data Professional</p>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="https://github.com/waliullah-khan"
              target="_blank"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/waliullah-khan"
              target="_blank"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="mailto:khan636@purdue.edu"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-800/50 mt-8 pt-8 text-center">
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Wali Ullah Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
