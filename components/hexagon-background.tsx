"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function HexagonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Hexagon class
    class Hexagon {
      x: number
      y: number
      size: number
      color: string
      opacity: number
      rotationSpeed: number
      rotation: number

      constructor(x: number, y: number, size: number) {
        this.x = x
        this.y = y
        this.size = size
        this.color = Math.random() > 0.5 ? "#00ffff" : "#ff00ff"
        this.opacity = Math.random() * 0.2 + 0.05
        this.rotationSpeed = (Math.random() - 0.5) * 0.01
        this.rotation = Math.random() * Math.PI * 2
      }

      update() {
        this.rotation += this.rotationSpeed
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.beginPath()

        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i
          const x = this.size * Math.cos(angle)
          const y = this.size * Math.sin(angle)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.closePath()
        ctx.strokeStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      }
    }

    // Create hexagons
    const hexagons: Hexagon[] = []
    const hexagonCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 40000))

    for (let i = 0; i < hexagonCount; i++) {
      const size = Math.random() * 30 + 20
      const x = (Math.random() * canvas.width) / window.devicePixelRatio
      const y = (Math.random() * canvas.height) / window.devicePixelRatio
      hexagons.push(new Hexagon(x, y, size))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw hexagons
      for (const hexagon of hexagons) {
        hexagon.update()
        hexagon.draw(ctx)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
