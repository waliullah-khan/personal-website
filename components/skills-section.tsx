"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

interface Skill {
  name: string
  level: "Expert" | "Advanced" | "Intermediate"
}

interface SkillGroup {
  category: string
  items: Skill[]
}

const skills: SkillGroup[] = [
  {
    category: "Programming & Data Science",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "R", level: "Advanced" },
      { name: "SQL", level: "Expert" },
      { name: "PySpark", level: "Advanced" },
      { name: "TensorFlow", level: "Intermediate" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "Pandas", level: "Expert" },
      { name: "NumPy", level: "Advanced" },
    ],
  },
  {
    category: "Data Engineering & Cloud",
    items: [
      { name: "AWS", level: "Advanced" },
      { name: "GCP", level: "Intermediate" },
      { name: "Azure", level: "Intermediate" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Airflow", level: "Intermediate" },
      { name: "Snowflake", level: "Advanced" },
      { name: "Databricks", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
    ],
  },
  {
    category: "Visualization & BI",
    items: [
      { name: "Tableau", level: "Expert" },
      { name: "PowerBI", level: "Advanced" },
      { name: "Plotly", level: "Advanced" },
      { name: "D3.js", level: "Intermediate" },
      { name: "Matplotlib", level: "Advanced" },
      { name: "Seaborn", level: "Advanced" },
    ],
  },
  {
    category: "Product & Business Analytics",
    items: [
      { name: "A/B Testing", level: "Advanced" },
      { name: "Product Analytics", level: "Expert" },
      { name: "Market Research", level: "Advanced" },
      { name: "GTM Strategy", level: "Advanced" },
      { name: "Digital Transformation", level: "Advanced" },
      { name: "Project Management", level: "Advanced" },
    ],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function SkillsSection() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {skills.map((skillGroup) => (
        <motion.div
          key={skillGroup.category}
          className="border border-neutral-800 rounded-md p-6 bg-neutral-900/20 card-hover"
          variants={itemVariants}
        >
          <h3 className="text-lg font-bold mb-4 font-mono tracking-tight">{skillGroup.category}</h3>
          <div className="space-y-3">
            {skillGroup.items.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                  <span className="text-xs text-neutral-500">{skill.level}</span>
                </div>
                <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.level === 'Expert' ? 100 : skill.level === 'Advanced' ? 85 : 70)}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
