"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
}

interface AnimatedTimelineProps {
  experiences: Experience[]
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function AnimatedTimeline({ experiences, onMouseEnter, onMouseLeave }: AnimatedTimelineProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <div ref={containerRef} className="space-y-12" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="relative group"
        >
          <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:to-cyan-500 md:pl-12">
            <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 md:left-[-10px]" />
            <Card className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
