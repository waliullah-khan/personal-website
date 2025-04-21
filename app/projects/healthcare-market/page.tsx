import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HealthcareMarketPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-mono tracking-tight">Healthcare Market Analysis</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Python</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Pandas</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">GeoPandas</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Plotly</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">GIS</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Market Analysis</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Predictive Analytics</span>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-md overflow-hidden border border-neutral-800">
            <Image
              src="/images/project-healthcare-detail.jpg"
              alt="Healthcare Market Analysis"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Executive Summary</h2>
            <p>
              This project leverages SafeGraph data to identify prime markets for specialty hospital investment. By
              analyzing demographic data, healthcare facility locations, and market demand indicators, we provide
              data-driven insights for strategic healthcare facility placement.
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