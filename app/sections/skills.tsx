'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'

const skills = [
  {
    name: 'Python',
    src: 'https://cdn.simpleicons.org/python/[ffde57]',
    bullets: [
      'Built an ML model for churn prediction',
      'Used NumPy and pandas for data analysis',
      'Used for competitive programming',
    ],
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.simpleicons.org/javascript/[#ede851]',
    bullets: [
      'Built interactive UIs in the browser',
      'Used with React and Next.js for frontend logic',
      'Used for backend logic in Node.js/Express',
    ],
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.simpleicons.org/typescript/[#007ACC]',
    bullets: [
    ],
  },
  {
    name: 'C',
    src: 'https://cdn.simpleicons.org/c/00599C',
    bullets: [
    ],
  },
  {
    name: 'C++',
    src: 'https://cdn.simpleicons.org/cplusplus/[#007ACC]',
    bullets: [
    ],
  },
  {
    name: 'HTML5',
    src: 'https://cdn.simpleicons.org/html5/[#007ACC]',
    bullets: [
    ],
  },
  {
    name: 'CSS3',
    src: 'https://cdn.simpleicons.org/css3/[#007ACC]',
    bullets: [
    ],
  },
  {
    name: 'React',
    src: 'https://cdn.simpleicons.org/react/[#007ACC]',
    bullets: [

    ],
  },
  {
    name: 'Next.js',
    src: 'https://cdn.simpleicons.org/nextdotjs/[#007ACC]',
    bullets: [
    ],
  },
  {
    name: 'Tailwind',
    src: 'https://cdn.simpleicons.org/tailwindcss/[#007ACC]',
    bullets: [
    ],
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.simpleicons.org/mongodb/[#007ACC]',
    bullets: [
    ],
  },
  {
    name: 'Pandas',
    src: 'https://cdn.simpleicons.org/pandas/[#007ACC]',
    bullets: [
      'Used for data manipulation and analysis in Python',
      'Used Pandas to clean and analyze user data to create a churn prediction model',
    ],
  },
  {
    name: 'Git',
    src: 'https://cdn.simpleicons.org/git/[#007ACC]',
    bullets: [
      'Used to collab on multiple projects'
    ],
  },
  {
    name: 'NumPy',
    src: 'https://cdn.simpleicons.org/numpy/[#007ACC]',
    bullets: [
    ],
  },

]

export default function Skills(): JSX.Element {
  return (
    <div className="h-full w-full flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center max-w-6xl"
      >
        <h1 className="text-6xl font-bold mb-16 py-20">so far I've worked with...</h1>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-7 gap-14">
          {skills.map(({ name, src, bullets }) => (
            <div
              key={name}
              className="group relative flex flex-col items-center hover:scale-120 transition-transform duration-100"
            >
              <div className="bg-white rounded-xl p-4 shadow-md">
                <img height="120" width="120" src={src} alt={name} />
              </div>

              <div className="absolute z-10 bottom-full mb-2 w-40 h-10 flex items-center justify-center p-1 rounded-xl bg-[#b6b8ba] text-[#4c4c4d] font-mono text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-100 pointer-events-none">
                <div className="font-semibold text-white">{name}</div>
              </div>

            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
