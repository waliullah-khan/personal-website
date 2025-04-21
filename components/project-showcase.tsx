"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full border-[#2a2a4a] hover:bg-[#1a1a3a] hover:text-[#00ffff] hover:border-[#00ffff]"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#00ffff]" : "bg-[#2a2a4a]"}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full border-[#2a2a4a] hover:bg-[#1a1a3a] hover:text-[#00ffff] hover:border-[#00ffff]"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="overflow-hidden" ref={constraintsRef}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group overflow-hidden rounded-xl border border-[#2a2a4a]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/20 to-[#ff00ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative aspect-video overflow-hidden rounded-xl"
                >
                  <Image
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="p-0">
                  <motion.h3
                    className="text-2xl font-bold mb-4 font-mono text-[#00ffff]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {projects[currentIndex].title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {projects[currentIndex].description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {projects[currentIndex].tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-[#1a1a3a] hover:bg-[#2a2a4a] border border-[#2a2a4a] transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link href={projects[currentIndex].link} target="_blank" rel="noreferrer">
                      <Button className="group bg-gradient-to-r from-[#00ffff] to-[#ff00ff] hover:from-[#00dddd] hover:to-[#dd00dd] text-black font-bold">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
