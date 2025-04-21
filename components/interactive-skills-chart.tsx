"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"

interface Skill {
  name: string
  value: number
  category: string
  description: string
}

export default function InteractiveSkillsChart({
  onMouseEnter,
  onMouseLeave,
}: {
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Skills data
  const skills: Skill[] = [
    {
      name: "Machine Learning",
      value: 0.9,
      category: "AI & ML",
      description: "Experience with supervised and unsupervised learning algorithms, model evaluation, and deployment.",
    },
    {
      name: "Data Analysis",
      value: 0.95,
      category: "Data",
      description: "Proficient in exploratory data analysis, statistical testing, and deriving actionable insights.",
    },
    {
      name: "Python",
      value: 0.9,
      category: "Programming",
      description: "Expert in Python programming with extensive experience in data science libraries and frameworks.",
    },
    {
      name: "Deep Learning",
      value: 0.8,
      category: "AI & ML",
      description: "Experience with neural networks, CNNs, RNNs, and transformer models for various applications.",
    },
    {
      name: "SQL",
      value: 0.85,
      category: "Data",
      description: "Strong database skills with experience in complex queries, database design, and optimization.",
    },
    {
      name: "Data Visualization",
      value: 0.9,
      category: "Data",
      description: "Creating compelling visual narratives from data using various tools and libraries.",
    },
    {
      name: "Statistical Analysis",
      value: 0.85,
      category: "Data",
      description: "Applying statistical methods to extract meaningful patterns and test hypotheses.",
    },
    {
      name: "NLP",
      value: 0.75,
      category: "AI & ML",
      description: "Building systems that can understand, interpret, and generate human language.",
    },
  ]

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Chart configuration
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) - 60
    const angleStep = (Math.PI * 2) / skills.length

    // Draw radar background
    ctx.beginPath()
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(148, 163, 184, 0.1)"
    ctx.fill()
    ctx.strokeStyle = "rgba(148, 163, 184, 0.3)"
    ctx.stroke()

    // Draw inner circles
    for (let j = 0.2; j <= 1; j += 0.2) {
      ctx.beginPath()
      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + radius * j * Math.cos(angle)
        const y = centerY + radius * j * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = "rgba(148, 163, 184, 0.2)"
      ctx.stroke()
    }

    // Draw axes
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "rgba(148, 163, 184, 0.3)"
      ctx.stroke()

      // Draw skill labels
      const labelX = centerX + (radius + 20) * Math.cos(angle)
      const labelY = centerY + (radius + 20) * Math.sin(angle)

      ctx.fillStyle = i === hoveredIndex ? "rgba(168, 85, 247, 1)" : "rgba(100, 116, 139, 1)"
      ctx.font = i === hoveredIndex ? "bold 14px sans-serif" : "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(skills[i].name, labelX, labelY)
    }

    // Draw data points and connect them
    ctx.beginPath()
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = skills[i].value
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(168, 85, 247, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "rgba(168, 85, 247, 0.8)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = skills[i].value
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)

      ctx.beginPath()
      ctx.arc(x, y, i === hoveredIndex ? 6 : 4, 0, Math.PI * 2)
      ctx.fillStyle = i === hoveredIndex ? "rgba(168, 85, 247, 1)" : "rgba(168, 85, 247, 0.8)"
      ctx.fill()
    }

    // Handle mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left) * dpr
      const mouseY = (e.clientY - rect.top) * dpr

      let hoveredSkill = null
      let hoveredIdx = null

      for (let i = 0; i < skills.length; i++) {
        const angle = i * angleStep - Math.PI / 2
        const value = skills[i].value
        const x = centerX + radius * value * Math.cos(angle)
        const y = centerY + radius * value * Math.sin(angle)

        const distance = Math.sqrt((mouseX - x * dpr) ** 2 + (mouseY - y * dpr) ** 2)

        if (distance < 20 * dpr) {
          hoveredSkill = skills[i]
          hoveredIdx = i
          break
        }
      }

      setActiveSkill(hoveredSkill)
      setHoveredIndex(hoveredIdx)
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [skills, hoveredIndex])

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Card className="p-4 bg-background/50 backdrop-blur-sm">
        <canvas ref={canvasRef} className="w-full h-[500px]" />
      </Card>

      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 left-4 max-w-xs p-4 bg-background/90 backdrop-blur-md border rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <h4 className="font-bold">{activeSkill.name}</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-1">Category: {activeSkill.category}</p>
            <div className="w-full h-2 bg-muted rounded-full mb-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                style={{ width: `${activeSkill.value * 100}%` }}
              />
            </div>
            <p className="text-sm">{activeSkill.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
