"use client"

import type React from "react"

import { forwardRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

const ParallaxSection = forwardRef<HTMLElement, ParallaxSectionProps>(({ children, className, id }, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} id={id} className={className}>
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </section>
  )
})

ParallaxSection.displayName = "ParallaxSection"

export default ParallaxSection
