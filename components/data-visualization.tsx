"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function DataVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = 400 * dpr
      canvas.height = 400 * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()

    // Data points
    const dataPoints = [
      { label: "Data Point 1", value: 85 },
      { label: "Data Point 2", value: 65 },
      { label: "Data Point 3", value: 92 },
      { label: "Data Point 4", value: 78 },
      { label: "Data Point 5", value: 45 },
      { label: "Data Point 6", value: 72 },
      { label: "Data Point 7", value: 58 },
      { label: "Data Point 8", value: 81 },
    ]

    // Colors
    const colors = ["#00ffff", "#ff00ff", "#00ccff", "#cc00ff", "#00ffcc", "#ff00cc", "#00cccc", "#cc00cc"]

    // Animation variables
    let animationFrame: number
    let angle = 0

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw circular graph
      const centerX = canvas.width / (2 * window.devicePixelRatio)
      const centerY = canvas.height / (2 * window.devicePixelRatio)
      const radius = 150

      // Draw outer circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw inner circles
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius * (i / 4), 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw data points
      const angleStep = (Math.PI * 2) / dataPoints.length

      for (let i = 0; i < dataPoints.length; i++) {
        const dataAngle = i * angleStep + angle
        const value = dataPoints[i].value / 100
        const x = centerX + Math.cos(dataAngle) * radius * value
        const y = centerY + Math.sin(dataAngle) * radius * value

        // Draw line from center
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.strokeStyle = `${colors[i]}50`
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw point
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = colors[i]
        ctx.fill()

        // Draw pulsating effect
        const pulseSize = 10 + Math.sin(angle * 5 + i) * 5
        ctx.beginPath()
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `${colors[i]}30`
        ctx.fill()

        // Draw label
        const labelX = centerX + Math.cos(dataAngle) * (radius + 30)
        const labelY = centerY + Math.sin(dataAngle) * (radius + 30)

        ctx.font = "12px monospace"
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(dataPoints[i].label, labelX, labelY)
      }

      // Draw connecting lines
      ctx.beginPath()
      for (let i = 0; i < dataPoints.length; i++) {
        const dataAngle = i * angleStep + angle
        const value = dataPoints[i].value / 100
        const x = centerX + Math.cos(dataAngle) * radius * value
        const y = centerY + Math.sin(dataAngle) * radius * value

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()
      ctx.fillStyle = "rgba(0, 255, 255, 0.1)"
      ctx.fill()
      ctx.strokeStyle = "rgba(255, 0, 255, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Update angle for animation
      angle += 0.002

      // Request next frame
      animationFrame = requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-[400px] h-[400px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
