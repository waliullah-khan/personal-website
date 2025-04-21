import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MusicMentalHealthPage() {
  return (
    <div className="pt-28 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-mono tracking-tight">Music & Mental Health Analysis</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Python</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Scikit-learn</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">TensorFlow</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Databricks</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Spark</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">ML</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Data Processing</span>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-md overflow-hidden border border-neutral-800">
            <Image
              src="/images/project-music-detail.jpg"
              alt="Music & Mental Health Analysis"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Executive Summary</h2>
            <p>
              This project explores the relationship between music listening habits and mental health indicators using
              machine learning techniques. By analyzing patterns in music preferences and their correlation with mental
              health metrics, we aim to understand how music consumption patterns might reflect or influence mental
              well-being.
            </p>

            <h2>Key Findings</h2>
            <p>Project details and findings will be added here.</p>

            <h2>Conclusion</h2>
            <p>Project conclusion will be added here.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 