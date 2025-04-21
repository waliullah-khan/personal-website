"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TechStackItem {
  name: string
  icon: string
  color: string
}

const techStack: TechStackItem[] = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
  { name: "PyTorch", icon: "🔥", color: "#EE4C2C" },
  { name: "Scikit-learn", icon: "🔬", color: "#F7931E" },
  { name: "Pandas", icon: "🐼", color: "#150458" },
  { name: "Node.js", icon: "📦", color: "#339933" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
]

export function TechStackCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-20 overflow-hidden my-8">
      <div className="absolute inset-0 flex items-center">
        <motion.div
          className="flex gap-8 px-4"
          animate={{
            x: [-1000, window.innerWidth],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 text-lg font-mono whitespace-nowrap"
              style={{ color: tech.color }}
            >
              <span className="text-2xl">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 