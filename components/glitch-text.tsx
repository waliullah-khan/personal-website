"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)

      setTimeout(() => {
        setIsGlitching(false)
      }, 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <motion.h1
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {text}

      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 w-full h-full text-[#00ffff] opacity-70 animate-glitch-1">{text}</span>
          <span className="absolute top-0 left-0 w-full h-full text-[#ff00ff] opacity-70 animate-glitch-2">{text}</span>
        </>
      )}
    </motion.h1>
  )
}
