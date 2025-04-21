import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AIAgentDevelopmentPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-mono tracking-tight">AI Agent Development</h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Python</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">OpenAI API</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">LangChain</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">FastAPI</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">PostgreSQL</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">AI</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">LLM</span>
            <span className="text-sm bg-neutral-800 text-neutral-400 px-3 py-1 rounded-sm">Automation</span>
          </div>

          <div className="relative w-full aspect-video mb-12 rounded-md overflow-hidden border border-neutral-800">
            <Image
              src="/images/project-ai-detail.jpg"
              alt="AI Agent Development"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Executive Summary</h2>
            <p>
              This project involved engineering AI agents that automated research processes, resulting in a 50x scaling
              of the marketplace from 3,500 to 175,000 active jobs. The system leverages advanced language models and
              automation techniques to streamline research workflows and improve efficiency.
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