'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { JSX } from 'react'

export default function Landing(): JSX.Element {
  return (
    <div className="h-full w-full flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-center md:items-start gap-20 max-w-5xl"
      >
        <div className="w-[160px] h-[160px] flex-shrink-0">
          <Image
            src="/pic.jpg"
            alt="Johannes Tampere"
            width={160}
            height={160}
            className="rounded-full shadow-lg object-cover"
          />
        </div>

        <div className="text-center md:text-left max-w-xl">
            <h1 className="text-5xl md:text-6xl mb-6">
                <span className="font-light">hey, I'm </span>
                <span className="font-bold">Johannes</span>!
            </h1>
            <p className="text-xl leading-relaxed">
                I'm a second-year Honours Computer Science student @ the University of Waterloo with experience in{' '}
                <span className="font-bold">full-stack development</span>,{' '}
                <span className="font-bold">data analysis</span>, and{' '}
                <span className="font-bold">machine learning</span>.
            </p>
            <p className="text-lg mt-4 text-[#555]">
                scroll down to learn more about me and ask the Chatbot tell you anything you wanna
                know about my LeetCode solutions &#128513;
            </p>
        </div>




      </motion.div>
    </div>
  )
}
