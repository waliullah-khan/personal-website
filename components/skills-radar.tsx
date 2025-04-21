"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface Skill {
  name: string
  value: number
  category: string
}

export default function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)

  // Skills data
  const skills: Skill[] = [
    { name: "Machine Learning", value: 0.9, category: "AI & ML" },
    { name: "Data Analysis", value: 0.95, category: "Data" },
    { name: "Python", value: 0.9, category: "Programming" },
    { name: "Deep Learning", value: 0.8, category: "AI & ML" },
    { name: "SQL", value: 0.85, category: "Data" },
    { name: "Data Visualization", value: 0.9, category: "Data" },
    { name: "Statistical Analysis", value: 0.85, category: "Data" },
    { name: "NLP", value: 0.75, category: "AI & ML" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

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

    // Animation variables
    let angle = 0
    let animationFrame: number

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw radar background
      ctx.beginPath()
      for (let i = 0; i < skills.length; i++) {
        const currentAngle = i * angleStep - Math.PI / 2
        const x = centerX + radius * Math.cos(currentAngle)
        const y = centerY + radius * Math.sin(currentAngle)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.fillStyle = "rgba(26, 26, 58, 0.3)"
      ctx.fill()
      ctx.strokeStyle = "rgba(42, 42, 74, 0.5)"
      ctx.stroke()

      // Draw inner circles
      for (let j = 0.2; j <= 1; j += 0.2) {
        ctx.beginPath()
        for (let i = 0; i < skills.length; i++) {
          const currentAngle = i * angleStep - Math.PI / 2
          const x = centerX + radius * j * Math.cos(currentAngle)
          const y = centerY + radius * j * Math.sin(currentAngle)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.strokeStyle = "rgba(42, 42, 74, 0.3)"
        ctx.stroke()
      }

      // Draw axes
      for (let i = 0; i < skills.length; i++) {
        const currentAngle = i * angleStep - Math.PI / 2
        const x = centerX + radius * Math.cos(currentAngle)
        const y = centerY + radius * Math.sin(currentAngle)

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.strokeStyle = "rgba(42, 42, 74, 0.5)"
        ctx.stroke()

        // Draw skill labels
        const labelX = centerX + (radius + 20) * Math.cos(currentAngle)
        const labelY = centerY + (radius + 20) * Math.sin(currentAngle)

        ctx.fillStyle = hoveredSkill?.name === skills[i].name ? "#00ffff" : "rgba(255, 255, 255, 0.7)"
        ctx.font = hoveredSkill?.name === skills[i].name ? "bold 12px monospace" : "12px monospace"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(skills[i].name, labelX, labelY)
      }

      // Draw data points and connect them
      ctx.beginPath()
      for (let i = 0; i < skills.length; i++) {
        const currentAngle = i * angleStep - Math.PI / 2 + angle
        const value = skills[i].value
        const x = centerX + radius * value * Math.cos(currentAngle)
        const y = centerY + radius * value * Math.sin(currentAngle)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.fillStyle = "rgba(0, 255, 255, 0.2)"
      ctx.fill()
      ctx.strokeStyle = "rgba(255, 0, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw data points
      for (let i = 0; i < skills.length; i++) {
        const currentAngle = i * angleStep - Math.PI / 2 + angle
        const value = skills[i].value
        const x = centerX + radius * value * Math.cos(currentAngle)
        const y = centerY + radius * value * Math.sin(currentAngle)

        ctx.beginPath()
        ctx.arc(x, y, hoveredSkill?.name === skills[i].name ? 6 : 4, 0, Math.PI * 2)
        ctx.fillStyle = hoveredSkill?.name === skills[i].name ? "#ff00ff" : "#00ffff"
        ctx.fill()

        // Draw pulsating effect
        const pulseSize = 8 + Math.sin(angle * 10) * 2
        ctx.beginPath()
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 255, 255, 0.2)"
        ctx.fill()
      }

      // Update angle for subtle animation
      angle += 0.001

      // Request next frame
      animationFrame = requestAnimationFrame(draw)
    }

    // Handle mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left) * dpr
      const mouseY = (e.clientY - rect.top) * dpr

      let hoveredSkillTemp = null

      for (let i = 0; i < skills.length; i++) {
        const currentAngle = i * angleStep - Math.PI / 2 + angle
        const value = skills[i].value
        const x = centerX + radius * value * Math.cos(currentAngle)
        const y = centerY + radius * value * Math.sin(currentAngle)

        const distance = Math.sqrt((mouseX - x * dpr) ** 2 + (mouseY - y * dpr) ** 2)

        if (distance < 20 * dpr) {
          hoveredSkillTemp = skills[i]
          break
        }
      }

      setHoveredSkill(hoveredSkillTemp)
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Start animation
    draw()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [skills, hoveredSkill])

  return (
    <div className="relative">
      <Card className="p-4 border border-[#2a2a4a] bg-[#0a0a25]/50 backdrop-blur-sm">
        <canvas ref={canvasRef} className="w-full h-[500px]" />
      </Card>

      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-4 left-4 max-w-xs p-4 bg-[#0a0a25]/90 backdrop-blur-md border border-[#2a2a4a] rounded-lg shadow-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#00ffff]" />
            <h4 className="font-bold font-mono">{hoveredSkill.name}</h4>
          </div>
          <p className="text-xs text-gray-400 mb-1">Category: {hoveredSkill.category}</p>
          <div className="w-full h-2 bg-[#1a1a3a] rounded-full mb-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"
              style={{ width: `${hoveredSkill.value * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-300">Proficiency: {hoveredSkill.value * 100}%</p>
        </motion.div>
      )}
    </div>
  )
}
