"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface CursorFollowerProps {
  variant: string
  text: string
}

export default function CursorFollower({ variant, text }: CursorFollowerProps) {
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.addEventListener("mouseleave", handleMouseLeave)
    }
  }, [cursorX, cursorY])

  const cursorVariant = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(168, 85, 247, 0.5)",
      mixBlendMode: "difference" as const,
      zIndex: 999,
    },
    hover: {
      width: 32,
      height: 32,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
    button: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
    link: {
      width: 64,
      height: 64,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
    card: {
      width: 24,
      height: 24,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
    project: {
      width: 100,
      height: 100,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
    interactive: {
      width: 24,
      height: 24,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
    form: {
      width: 24,
      height: 24,
      backgroundColor: "rgba(168, 85, 247, 0.8)",
      mixBlendMode: "difference" as const,
    },
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={variant}
        variants={cursorVariant}
        transition={{ duration: 0.15 }}
      />

      {text && (
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center text-white text-xs font-medium hidden md:flex"
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            x: "-50%",
            y: "-50%",
            zIndex: 1000,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.div>
      )}
    </>
  )
}
