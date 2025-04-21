"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

interface CursorTrackerProps {
  cursorPosition: { x: number; y: number }
}

export default function CursorTracker({ cursorPosition }: CursorTrackerProps) {
  const [isVisible, setIsVisible] = useState(false)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(cursorPosition.x, springConfig)
  const cursorY = useSpring(cursorPosition.y, springConfig)

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Set initial visibility
    setIsVisible(true)

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    cursorX.set(cursorPosition.x)
    cursorY.set(cursorPosition.y)
  }, [cursorPosition, cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#00ffff] pointer-events-none z-50 hidden md:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#ff00ff] pointer-events-none z-50 hidden md:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}
