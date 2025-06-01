'use client'

import React, { JSX, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Landing from './sections/landing'
import Skills from './sections/skills'
import Projects from './sections/projects'
import About from './sections/about'
import Navbar from './sections/navbar'

const asciiLines = `
._______       __                                      _______                                       
|   _   .-----|  |--.---.-.-----.-----.-----.-----.   |       .---.-.--------.-----.-----.----.-----.
|___|   |  _  |     |  _  |     |     |  -__|__ --|   |.|   | |  _  |        |  _  |  -__|   _|  -__|
|.  |   |_____|__|__|___._|__|__|__|__|_____|_____|    -|.  |-|___._|__|__|__|   __|_____|__| |_____|
|:  |   |                                               |:  |                |__|                    
|::.. . |                                               |::.|                                        
 -------                                                 ---                                        
`.trim().split('\n')

export default function HomePage(): JSX.Element {
  const [showLanding, setShowLanding] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setShowLanding(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight - container.clientHeight
      const ratio = scrollTop / scrollHeight
      setProgress(ratio)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="w-screen h-screen bg-[#EEF0F2] text-[#7c7e77] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {!showLanding && (
        <div className="absolute right-4 top-0 h-full w- bg-gray-300/30 rounded-full overflow-hidden z-50">
          <div
            className="bg-[#7c7e77] w-full rounded-full transition-all duration-200"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      )}
      {!showLanding && <Navbar />}

      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="ascii"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit="exit"
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="h-screen flex items-center justify-center"
          >
            <motion.div
              className="font-mono font-extrabold text-left whitespace-pre text-sm md:text-base leading-snug"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
                hidden: {},
                exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {asciiLines.map((line, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                    exit: { opacity: 0, x: 100, transition: { duration: 0.6 } },
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-transparent"
          >

            <section id="landing" className="h-screen snap-start"><Landing /></section>
            <section id="skills" className="h-screen snap-start"><Skills /></section>
            <section id="projects" className="h-screen snap-start"><Projects /></section>
            <section id="about" className="h-screen snap-start"><About /></section>
          </motion.main>
        )}
      </AnimatePresence>
    </motion.div>
  )
}