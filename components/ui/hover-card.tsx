"use client"

import React from 'react';
import { motion } from 'framer-motion';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export const HoverCard = ({ children, className = '' }: HoverCardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg bg-neutral-900/50 backdrop-blur-sm ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neutral-900/10 to-neutral-900/5"
        style={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      {children}
    </motion.div>
  );
};
