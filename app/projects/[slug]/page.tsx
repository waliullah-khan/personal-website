"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { use } from "react"

const projects = {
  "ecommerce-analytics": {
    title: "E-Commerce Analytics Dashboard",
    description: "Deep analysis of e-commerce data using Python and modern visualization libraries.",
    image: "/images/projects/ecommerce.jpg",
    techStack: ["Python", "Pandas", "Plotly", "Streamlit", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce-analytics",
    demo: "https://ecommerce-analytics-demo.com",
    content: `
      ## Overview
      A comprehensive analytics dashboard for e-commerce data analysis, providing insights into sales trends, customer behavior, and inventory management.

      ## Features
      - Real-time sales tracking
      - Customer segmentation analysis
      - Inventory optimization recommendations
      - Predictive analytics for future sales
    `
  },
  "music-mental-health": {
    title: "Music & Mental Health Analysis",
    description: "Analyzed relationship between music listening habits and mental health indicators using machine learning.",
    image: "/images/project-music.jpg",
    techStack: ["Python", "Databricks", "Spark", "scikit-learn", "Pandas"],
    github: "https://github.com/yourusername/music-mental-health",
    demo: "https://music-analysis-demo.com",
    content: `
      ## Overview
      A data science project exploring the correlation between music preferences and mental health indicators using machine learning techniques.

      ## Features
      - Data collection and preprocessing
      - Statistical analysis
      - Machine learning models
      - Interactive visualizations
      - Research findings and insights
    `
  },
  "healthcare-market": {
    title: "Healthcare Market Analysis",
    description: "Leveraged SafeGraph data to identify prime markets for specialty hospital investment.",
    image: "/images/project-healthcare.jpg",
    techStack: ["Python", "GIS", "Tableau", "SQL", "R"],
    github: "https://github.com/yourusername/healthcare-market",
    demo: "https://healthcare-analysis-demo.com",
    content: `
      ## Overview
      A comprehensive market analysis project using geospatial data to identify optimal locations for healthcare facilities.

      ## Features
      - Geospatial analysis
      - Market demand prediction
      - Competition analysis
      - ROI calculations
      - Interactive maps and dashboards
    `
  },
  "ai-agent-development": {
    title: "AI Agent Development",
    description: "Engineered AI agents that automated research processes, scaling marketplace operations.",
    image: "/images/project-ai.jpg",
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI", "Redis"],
    github: "https://github.com/yourusername/ai-agent-development",
    demo: "https://ai-agent-demo.com",
    content: `
      ## Overview
      Development of intelligent AI agents that automate complex research tasks and improve marketplace efficiency.

      ## Features
      - Natural language processing
      - Task automation
      - API integration
      - Scalable architecture
      - Performance monitoring
    `
  },
  "ml-image-classification": {
    title: "ML Image Classification",
    description: "Advanced image classification using deep learning and transfer learning techniques.",
    image: "/images/projects/ml-classification.jpg",
    techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "AWS"],
    github: "https://github.com/yourusername/ml-image-classification",
    demo: "https://ml-image-demo.com",
    content: `
      ## Overview
      A machine learning project focused on image classification using state-of-the-art deep learning models.

      ## Features
      - Multiple pre-trained model support
      - Real-time image classification
      - Model performance comparison
      - Custom model training pipeline
    `
  },
  "data-visualization-platform": {
    title: "Data Visualization Platform",
    description: "Interactive data visualization platform built with modern web technologies.",
    image: "/images/projects/data-viz.jpg",
    techStack: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/data-visualization",
    demo: "https://data-viz-demo.com",
    content: `
      ## Overview
      A web-based platform for creating and sharing interactive data visualizations.

      ## Features
      - Drag-and-drop visualization builder
      - Real-time data updates
      - Collaborative editing
      - Export to multiple formats
    `
  },
  "nlp-text-analysis": {
    title: "NLP Text Analysis Tool",
    description: "Natural Language Processing tool for advanced text analysis and sentiment detection.",
    image: "/images/projects/nlp-analysis.jpg",
    techStack: ["Python", "NLTK", "spaCy", "FastAPI", "Redis"],
    github: "https://github.com/yourusername/nlp-analysis",
    demo: "https://nlp-analysis-demo.com",
    content: `
      ## Overview
      A comprehensive NLP tool for analyzing text data, including sentiment analysis, entity recognition, and topic modeling.

      ## Features
      - Multi-language support
      - Real-time sentiment analysis
      - Named entity recognition
      - Topic modeling and clustering
    `
  },
  "time-series-forecasting": {
    title: "Time Series Forecasting",
    description: "Advanced time series analysis and forecasting using statistical and ML methods.",
    image: "/images/projects/time-series.jpg",
    techStack: ["Python", "Prophet", "Scikit-learn", "Docker", "PostgreSQL"],
    github: "https://github.com/yourusername/time-series",
    demo: "https://time-series-demo.com",
    content: `
      ## Overview
      A time series forecasting platform that combines traditional statistical methods with modern machine learning approaches.

      ## Features
      - Multiple forecasting models
      - Automated model selection
      - Anomaly detection
      - Interactive visualizations
    `
  },
  "recommendation-engine": {
    title: "Recommendation Engine",
    description: "Scalable recommendation system using collaborative filtering and deep learning.",
    image: "/images/projects/recommendations.jpg",
    techStack: ["Python", "TensorFlow", "FastAPI", "Redis", "AWS"],
    github: "https://github.com/yourusername/recommendation-engine",
    demo: "https://recommendations-demo.com",
    content: `
      ## Overview
      A recommendation engine that combines collaborative filtering with deep learning for personalized recommendations.

      ## Features
      - Hybrid recommendation system
      - Real-time personalization
      - A/B testing framework
      - Scalable architecture
    `
  }
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const project = projects[resolvedParams.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <Link
          href="/#projects"
          className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[40vh] mb-8 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center font-mono">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                View Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </div>

          <div className="prose prose-invert max-w-none">
            {project.content}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 