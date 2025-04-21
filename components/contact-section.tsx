"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, MapPin, Send, Github, Twitter } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="text-lg text-neutral-400">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 font-mono tracking-tight">Contact Information</h3>

          <div className="space-y-6">
            <motion.div
              className="flex items-start group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="border border-neutral-800 p-3 rounded-md mr-4 group-hover:border-neutral-700 transition-colors">
                <Mail size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-medium mb-1 text-sm">Email</h4>
                <a
                  href="mailto:khan636@purdue.edu"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  khan636@purdue.edu
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="border border-neutral-800 p-3 rounded-md mr-4 group-hover:border-neutral-700 transition-colors">
                <Linkedin size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-medium mb-1 text-sm">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/waliullah-khan"
                  target="_blank"
                  className="text-neutral-300 hover:text-white transition-colors"
                  rel="noreferrer"
                >
                  linkedin.com/in/waliullah-khan
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="border border-neutral-800 p-3 rounded-md mr-4 group-hover:border-neutral-700 transition-colors">
                <Github size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-medium mb-1 text-sm">GitHub</h4>
                <a
                  href="https://github.com/waliullah-khan"
                  target="_blank"
                  className="text-neutral-300 hover:text-white transition-colors"
                  rel="noreferrer"
                >
                  github.com/waliullah-khan
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="border border-neutral-800 p-3 rounded-md mr-4 group-hover:border-neutral-700 transition-colors">
                <MapPin size={18} className="text-neutral-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="font-medium mb-1 text-sm">Location</h4>
                <p className="text-neutral-300">Brooklyn, New York, United States</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 font-mono tracking-tight">Send a Message</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-300">
                Name
              </label>
              <input
                id="name"
                {...register("name")}
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 transition-colors"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 transition-colors"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-300">
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={5}
                className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:border-neutral-600 transition-colors"
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full border border-neutral-700 bg-neutral-800/50 hover:bg-neutral-800 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.span
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Sending...
                  </motion.span>
                ) : isSubmitted ? (
                  <motion.span
                    key="submitted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Message Sent!
                  </motion.span>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
