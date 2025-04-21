"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillsSection from "@/components/skills-section"
import ExperienceTimeline from "@/components/experience-timeline"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-10" />
          <Image src="/images/hero-bg.jpg" alt="Background" fill className="object-cover opacity-20" priority />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="inline-block px-3 py-1 mb-4 text-xs font-mono rounded-md border border-neutral-800 text-neutral-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Product Analyst @ Parallel
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-mono tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span className="text-white">Wali Ullah Khan</span>
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl text-neutral-400 mb-6 font-mono tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Data-Driven Product Analyst
              </motion.h2>

              <motion.p
                className="text-lg text-neutral-400 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transforming data into actionable insights and building scalable analytics solutions to drive business
                growth.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  href="#projects"
                  className="border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
                >
                  View Projects <ArrowRight size={16} />
                </Link>
                <Link
                  href="#contact"
                  className="border border-neutral-700 text-white px-6 py-3 rounded-md font-medium hover:bg-white/5 transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="relative hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
                <div className="absolute inset-0 border border-neutral-800 rounded-md -m-3 -rotate-3"></div>
                <div className="absolute inset-0 border border-neutral-800 rounded-md -m-6 rotate-3"></div>
                <div className="relative overflow-hidden rounded-md border border-neutral-800">
                  <Image src="/images/profile.jpg" alt="Wali Ullah Khan" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900/20" ref={targetRef}>
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto mb-16" style={{ opacity, scale }}>
            <h2 className="section-heading">About Me</h2>
            <p className="text-lg text-neutral-400 mb-8">
              I'm a Product Analyst at Parallel with expertise in data science, analytics, and digital transformation.
              With a background spanning both technical and strategic roles, I specialize in leveraging data to drive
              business decisions and product development.
            </p>
            <p className="text-lg text-neutral-400">
              Currently pursuing my MS in Business Analytics and Information Management at Purdue University, I combine
              academic knowledge with practical experience in building scalable data solutions, optimizing analytics
              pipelines, and translating complex data into actionable insights.
            </p>
          </motion.div>

          <SkillsSection />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-heading">Featured Projects</h2>
            <p className="text-lg text-neutral-400">
              A selection of my data science and analytics projects showcasing my technical skills and problem-solving
              approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Analytics"
              description="Deep analysis of Brazilian E-Commerce data to uncover sales patterns, customer behavior, and logistics efficiency."
              image="/images/project-ecommerce.jpg"
              tags={["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Data Analysis", "Visualization"]}
              link="/projects/ecommerce-analytics"
              github="https://github.com/waliullah-khan/ecommerce-analytics"
              demo="https://ecommerce-analytics-demo.vercel.app"
            />

            <ProjectCard
              title="Music & Mental Health"
              description="Analyzed relationship between music listening habits and mental health indicators using machine learning."
              image="/images/project-music.jpg"
              tags={["Python", "Scikit-learn", "TensorFlow", "Databricks", "Spark", "ML", "Data Processing"]}
              link="/projects/music-mental-health"
              github="https://github.com/waliullah-khan/music-mental-health"
            />

            <ProjectCard
              title="Healthcare Market Analysis"
              description="Leveraged SafeGraph data to identify prime markets for specialty hospital investment."
              image="/images/project-healthcare.jpg"
              tags={["Python", "Pandas", "GeoPandas", "Plotly", "GIS", "Market Analysis", "Predictive Analytics"]}
              link="/projects/healthcare-market"
              github="https://github.com/waliullah-khan/healthcare-market"
            />

            <ProjectCard
              title="AI Agent Development"
              description="Engineered AI agents that automated research processes, scaling marketplace 50x from 3,500 to 175,000 active jobs."
              image="/images/project-ai.jpg"
              tags={["Python", "OpenAI API", "LangChain", "FastAPI", "PostgreSQL", "AI", "LLM", "Automation"]}
              link="/projects/ai-agent-development"
              github="https://github.com/waliullah-khan/ai-agent-development"
              demo="https://ai-agent-demo.vercel.app"
            />

            <ProjectCard
              title="Pricing Strategy Analysis"
              description="Developed pricing optimization models to counter private label competition while maintaining profitability."
              image="/images/project-pricing.jpg"
              tags={["Python", "Pandas", "Scikit-learn", "Tableau", "Excel", "Pricing Analytics", "Market Research"]}
              link="/projects/pricing-strategy"
              github="https://github.com/waliullah-khan/pricing-strategy"
            />

            <ProjectCard
              title="MongoDB Query Analysis"
              description="Implemented complex MongoDB queries to extract insights from film database for business intelligence."
              image="/images/project-mongodb.jpg"
              tags={["MongoDB", "Python", "PyMongo", "Pandas", "NoSQL", "Data Mining", "Business Intelligence"]}
              link="/projects/mongodb-analysis"
              github="https://github.com/waliullah-khan/mongodb-analysis"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://github.com/waliullah-khan"
              target="_blank"
              className="inline-flex items-center gap-2 text-white border border-neutral-700 px-6 py-3 rounded-md font-medium hover:bg-white/5 transition-colors"
            >
              View More on GitHub <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-neutral-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="section-heading">Professional Experience</h2>
            <p className="text-lg text-neutral-400">
              My journey through data science, product analytics, and digital transformation.
            </p>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <ContactSection />
      </section>
    </div>
  )
}
