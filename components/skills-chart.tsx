"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export default function SkillsChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Skills data
    const skills = [
      { name: "Machine Learning", value: 0.9 },
      { name: "Data Analysis", value: 0.95 },
      { name: "Python", value: 0.9 },
      { name: "Deep Learning", value: 0.8 },
      { name: "SQL", value: 0.85 },
      { name: "Data Visualization", value: 0.9 },
      { name: "Statistical Analysis", value: 0.85 },
      { name: "NLP", value: 0.75 },
    ]

    // Chart configuration
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) - 40
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

      ctx.fillStyle = "rgba(100, 116, 139, 1)"
      ctx.font = "12px sans-serif"
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
    ctx.fillStyle = "rgba(79, 70, 229, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "rgba(79, 70, 229, 0.8)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = skills[i].value
      const x = centerX + radius * value * Math.cos(angle)
      const y = centerY + radius * value * Math.sin(angle)

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(79, 70, 229, 1)"
      ctx.fill()
    }
  }, [])

  return (
    <Card className="p-4">
      <canvas ref={canvasRef} className="w-full h-[400px]" style={{ maxWidth: "100%" }} />
    </Card>
  )
}
