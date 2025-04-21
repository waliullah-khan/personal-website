"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
  demo?: string
}

export default function ProjectCard({ title, description, image, tags, link, github, demo }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (github) window.open(github, '_blank', 'noopener,noreferrer')
  }

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (demo) window.open(demo, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      className="group relative overflow-hidden rounded-md border border-neutral-800 bg-neutral-900/20 h-full card-hover"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={link} className="block h-full">
        <div className="relative h-48 overflow-hidden border-b border-neutral-800">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.7 : 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 font-mono tracking-tight group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-neutral-400 mb-4 text-sm line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-neutral-300 text-sm font-medium group-hover:text-white transition-colors">
              View Project
              <motion.span className="ml-2" animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                <ArrowRight size={14} />
              </motion.span>
            </div>

            <div className="flex items-center gap-2">
              {github && (
                <motion.button
                  onClick={handleGithubClick}
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                </motion.button>
              )}
              {demo && (
                <motion.button
                  onClick={handleDemoClick}
                  className="text-xs bg-blue-500 text-white px-2 py-1 rounded-sm hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
