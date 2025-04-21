"use client"

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[60vh] w-[60vh] rounded-full border border-neutral-500/30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-[35vw] bg-gradient-to-r from-neutral-500/30 to-transparent"
            style={{
              left: 0,
              top: `${15 + i * 10}%`,
            }}
            animate={{
              x: ["0%", "100%", "0%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}; 