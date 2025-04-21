"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, MapPin } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string[]
  skills?: string[]
}

const experiences: Experience[] = [
  {
    title: "Product Analyst",
    company: "Parallel",
    period: "May 2024 - Present",
    location: "New York, NY",
    description: [
      "Engineered AI agents that automated research and discovery processes, scaling marketplace 50x from 3,500 to 175,000 active jobs",
      "Developed and deployed an LLM-as-a-judge framework for comparative analysis of prompt performance across various LLMs",
      "Developed scalable Clickhouse ingestion pipelines to streamline data flow for critical reporting and analytics functions",
      "Created comprehensive dashboards (Ops, Marketing, Finance) to enhance data visibility and decision-making",
    ],
    skills: ["AI/ML", "Data Engineering", "Analytics", "Product Management"],
  },
  {
    title: "Digital Transformation Executive",
    company: "Center for Wellness and Pain Care",
    period: "August 2023 - August 2024",
    location: "Las Vegas, NV",
    description: [
      "Implemented and supervised data migration to an ERP for records spanning over 15 years across 5 sites",
      "Automated manual processes to optimize workplace efficiency and improved customer satisfaction to 4.3/5",
      "Deployed a CRM and established social media presence, helping win Best of Las Vegas for 2023",
    ],
    skills: ["Digital Transformation", "ERP", "CRM", "Process Automation"],
  },
  {
    title: "Media Investment Analyst",
    company: "Alibaba Group - Daraz",
    period: "October 2023 - March 2024",
    location: "Karachi, Pakistan",
    description: [
      "Liaised with multiple internal departments to optimize media investment for client portfolio",
      "Planned and executed media-led creative content production for various funnel stages",
      "Maintained strong relationships with 11 clients across various industries",
      "Acquired and onboarded 8 new accounts and increased MOM revenue by 23%",
    ],
    skills: ["Media Planning", "Client Management", "Revenue Growth", "Content Strategy"],
  },
  {
    title: "Digital Marketing Associate",
    company: "RepStack",
    period: "January 2023 - November 2023",
    location: "Wilmington, DE",
    description: [
      "Managed and developed content for social media platforms and inbound marketing",
      "Developed and launched paid advertisement campaigns on Meta, Google, and TikTok",
      "Set up and managed funnels, marketing automations, and cold outreach campaigns",
      "Developed websites, landing pages, and email marketing campaigns",
    ],
    skills: ["Digital Marketing", "Social Media", "Paid Advertising", "Marketing Automation"],
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="mb-16 last:mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <motion.div
                className="border border-neutral-800 rounded-md p-4 bg-neutral-900/20 card-hover"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold text-lg font-mono tracking-tight text-white">{experience.title}</h3>
                <div className="flex items-center gap-2 text-white/80 mt-2">
                  <Building2 size={14} />
                  <p>{experience.company}</p>
                </div>
                <div className="flex items-center gap-2 text-neutral-500 text-sm mt-2">
                  <Calendar size={14} />
                  <p>{experience.period}</p>
                </div>
                <div className="flex items-center gap-2 text-neutral-500 text-sm">
                  <MapPin size={14} />
                  <p>{experience.location}</p>
                </div>

                {experience.skills && (
                  <div className="mt-4 pt-4 border-t border-neutral-800">
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-sm"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="md:w-2/3">
              <ul className="space-y-3">
                {experience.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <span className="text-neutral-600 mr-2 mt-1 group-hover:text-blue-500 transition-colors">▹</span>
                    <span className="text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
