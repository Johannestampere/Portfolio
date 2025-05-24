'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'

export default function Landing(): JSX.Element {
  return (
    <div className="h-full w-full flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-6xl font-bold mb-6">Hello, I'm Johannes!</h1>
        <p className="text-xl leading-relaxed">
          I'm a second-year Honours Computer Science student at the University of Waterloo.
          I have experience in full-stack development, data analysis, and machine learning.
        </p>
      </motion.div>
    </div>
  )
}
