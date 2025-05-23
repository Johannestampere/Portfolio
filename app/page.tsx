'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const asciiLines = `
 _______       __                                      _______                                       
|   _   .-----|  |--.---.-.-----.-----.-----.-----.   |       .---.-.--------.-----.-----.----.-----.
|___|   |  _  |     |  _  |     |     |  -__|__ --|   |.|   | |  _  |        |  _  |  -__|   _|  -__|
|.  |   |_____|__|__|___._|__|__|__|__|_____|_____|    -|.  |-|___._|__|__|__|   __|_____|__| |_____|
|:  |   |                                               |:  |                |__|                    
|::.. . |                                               |::.|                                        
 -------                                                 ---                                        
`.trim().split('\n')

export default function HomePage() {
  const [showLanding, setShowLanding] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 4000); // Show for 4 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="w-screen h-screen bg-[#EEF0F2] text-[#7c7e77] flex items-center justify-center overflow-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.div
            key="ascii"
            className="font-mono font-extrabold text-left whitespace-pre text-sm md:text-base leading-snug"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
              hidden: {},
              exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } }
            }}
          >
            {asciiLines.map((line, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 0 },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, x: 100, transition: { duration: 0.4 } }
                }}
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-6xl font-bold">actual landing page</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
