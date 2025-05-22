'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 5000); // ascii text duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="w-screen h-screen bg-[#EEF0F2] text-[#7c7e77] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <AnimatePresence mode="wait">
        {showLanding ? (
          <motion.pre
            key="landing"
            className="text-[15px] md:text-xl leading-tight whitespace-pre-wrap text-center font-mono font-extrabold"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
        
            {`
_______       __                                      _______                                       
|   _   .-----|  |--.---.-.-----.-----.-----.-----.   |       .---.-.--------.-----.-----.----.-----.
|___|   |  _  |     |  _  |     |     |  -__|__ --|   |.|   | |  _  |        |  _  |  -__|   _|  -__|
|.  |   |_____|__|__|___._|__|__|__|__|_____|_____|    -|.  |-|___._|__|__|__|   __|_____|__| |_____|
|:  |   |                                               |:  |                |__|                    
|::.. . |                                               |::.|                                        
 -------                                                 ---                                        
            `}
          </motion.pre>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold">actual landing page</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
