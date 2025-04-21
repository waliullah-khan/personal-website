"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function FloatingParticles() {
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

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      alphaSpeed: number

      constructor() {
        this.x = (Math.random() * canvas.width) / window.devicePixelRatio
        this.y = (Math.random() * canvas.height) / window.devicePixelRatio
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = Math.random() > 0.5 ? "#00ffff" : "#ff00ff"
        this.alpha = Math.random() * 0.5 + 0.1
        this.alphaSpeed = Math.random() * 0.01 + 0.005
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.alpha += Math.sin(this.alphaSpeed) * 0.01

        if (this.x < 0 || this.x > canvas.width / window.devicePixelRatio) {
          this.speedX = -this.speedX
        }

        if (this.y < 0 || this.y > canvas.height / window.devicePixelRatio) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        ctx.globalAlpha = Math.abs(this.alpha)
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 40000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
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
