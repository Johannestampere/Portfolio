'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'

export default function Skills(): JSX.Element {
  return (
    <div className="h-full w-full flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false}}
        className="text-center max-w-3xl"
      >
        <h1 className="text-6xl font-bold mb-6">Skills</h1>
        <div>
          <img height="32" width="32" src="https://cdn.simpleicons.org/python/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/javascript/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/typescript/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/react/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/next.js/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/node.js/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/git/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/html5/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/mongodb/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/pandas/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/numpy/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/css3/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/tailwindcss/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/c/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/cplusplus/black" />
          <img height="32" width="32" src="https://cdn.simpleicons.org/racket/black" />
        </div>
        
      </motion.div>
    </div>
  )
}
