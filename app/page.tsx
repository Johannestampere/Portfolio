'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { JSX, useState } from 'react'

const projects = [
  {
    name: '136Notes',
    description: `Solo-developed a lightweight intuitive note-taking app for visual linear algebra learners with dynamic graphs and LaTeX`,
    skills: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Flask', 'OAuth', 'Three.js', 'MathJax', 'Mongoose'],
    link: '#',
  },
  {
    name: 'MindBloom',
    description: `Co-developed a collaborative brainstorming platform that helps hackathon teams and startups turn scattered thoughts into clear directions via dynamic mindmaps and AI-guided suggestions`,
    skills: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI API', 'Zustand', 'D3.js', 'Supabase', 'PostgreSQL'],
    link: '#',
  },
  {
    name: 'Real-time Arduino Emotion Detector',
    description: `Built a real-time emotion detection system that uses OpenCV and a pre-trained model to classify facial expressions, then maps them to LED colors on an Arduino board via PySerial and C++`,
    skills: ['Python', 'OpenCV', 'PySerial', 'C++', 'Arduino'],
    link: '#',
  },
  {
    name: 'Manual implementations of malloc() and free()',
    description: `Built custom versions of malloc() and fre) in C, gaining a deeper understanding of the C memory model, pointer arithmetic, and manual memory management techniques`,
    skills: ['C'],
    link: '#',
  },
  {
    name: 'Vim-based Note-taking App',
    description: `Lightweight Vim-based note-taking app that I built for myself to make note-taking in CS classes easier`,
    skills: ['C++', 'CSS'],
    link: '#',
  },
]

const skills = {
  'Languages': [
    'Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'Markdown', 'LaTeX', 'HTML5', 'CSS3'
  ],
  'Frameworks & Libraries': [
    'React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'FastAPI', 'Pandas', 'Numpy', 'Scikit-learn', 'Zustand', 'Supabase', 'Mongoose', 'OpenAI API'
  ],
  'Developer Tools': [
    'Git', 'MongoDB', 'VS Code', 'PySerial', 'Arduino', 'OAuth', 'Vim', 'Figma', 'Jupyter Notebook', 'AWS'
  ]
}

export default function Landing(): JSX.Element {
  const [currentProject, setCurrentProject] = useState(0)
  const totalProjects = projects.length
  const [isHoveredGithub, setisHoveredGithub] = useState(false)
  const [linkedinHovered, setLinkedinHovered] = useState(false)
  const [isHoveredLeetcode, setisHoveredLeetcode] = useState(false)

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects)
  }
  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % totalProjects)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-3 py-6 bg-gradient-to-br from-black via-[#18181b] to-black text-white relative">
      <div className="fixed top-4 right-6 z-50 flex gap-3 items-center">
        <a
          href="https://github.com/Johannestampere"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setisHoveredGithub(true)}
          onMouseLeave={() => setisHoveredGithub(false)}
          className="transition-transform duration-100 hover:scale-130"
        >
          <img
            height="28"
            width="28"
            src={`https://cdn.simpleicons.org/github/${isHoveredGithub ? 'fff' : 'bdbdbd'}`}
            alt="GitHub"
          />
        </a>
        <a
          href="https://leetcode.com/u/Johannestampere/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setisHoveredLeetcode(true)}
          onMouseLeave={() => setisHoveredLeetcode(false)}
          className="transition-transform duration-100 hover:scale-130"
        >
          <img
            height="28"
            width="28"
            src={`https://cdn.simpleicons.org/leetcode/${isHoveredLeetcode ? 'fff' : 'bdbdbd'}`}
            alt="LeetCode"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/johannestampere"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkedinHovered(true)}
          onMouseLeave={() => setLinkedinHovered(false)}
          className="transition-transform duration-100 hover:scale-130"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill={linkedinHovered ? '#fff' : '#bdbdbd'}
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
      </div>
      <div className="fixed top-4 left-6 z-50">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 bg-transparent text-white rounded-lg shadow hover:bg-[#bdbdbd] transition font-bold text-sm border border-white"
        >
          View Resume
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="max-w-5xl w-full flex flex-col gap-12 py-8"
      >
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300 cursor-pointer">
            <div className="w-[120px] h-[120px] mb-4">
              <Image
                src="/pic.jpg"
                alt="Johannes Tampere"
                width={120}
                height={120}
                className="rounded-full shadow-xl object-cover border-3 border-[#23242a]"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4 text-white">Johannes Tampere</h1>
            <p className="text-lg text-[#bdbdbd] mb-6">Honours Computer Science @ <a href="https://cs.uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="text-[#AF9164] hover:underline font-bold">University of Waterloo</a></p>
            <ul className="mb-8 space-y-3 text-left">
              <li className="flex items-center text-lg md:text-xl font-bold transition-all duration-200 hover:scale-110">
                <span className="inline-block w-4 h-4 rounded-full bg-white mr-3"></span>
                full-stack development
              </li>
              <li className="flex items-center text-lg md:text-xl font-bold transition-all duration-200 hover:scale-110">
                <span className="inline-block w-4 h-4 rounded-full bg-white mr-3"></span>
                prev data analysis intern @ Delfi
              </li>
              <li className="flex items-center text-lg md:text-xl font-bold transition-all duration-200 hover:scale-110">
                <span className="inline-block w-4 h-4 rounded-full bg-white mr-3"></span>
                enthusiastic about ML
              </li>
              <li className="flex items-center text-lg md:text-xl font-bold transition-all duration-200 hover:scale-110">
                <span className="inline-block w-4 h-4 rounded-full bg-white mr-3"></span>
                won DeltaHacks 2025
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center w-full transition-all duration-300 cursor-pointer">
            <h2 className="text-3xl font-extrabold mb-8 text-white text-center">Projects</h2>
            <div className="flex items-center justify-center w-full gap-6 flex-col md:flex-row">
              <button
                aria-label="Previous project"
                onClick={handlePrev}
                className="bg-black text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-0 transition text-3xl flex items-center justify-center border-2 border-white hover:border-gray-400 transition-transform duration-200 hover:scale-110 cursor-pointer"
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </button>
              <div className="mx-6 w-full flex justify-center mt-6">
                <div className="bg-black border-3 border-white rounded-2xl shadow-2xl p-6 w-[280px] md:w-[320px] min-h-[160px] flex flex-col items-center justify-center transition-all duration-200 hover:scale-105">
                  <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="text-xl font-extrabold text-white hover:underline mb-3 text-center">
                    {projects[currentProject].name}
                  </a>
                  <p className="text-[#bdbdbd] text-sm text-center mb-3">{projects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-1 justify-center mt-2">
                    {projects[currentProject].skills && projects[currentProject].skills.map((skill) => (
                      <span key={skill} className="bg-black text-white px-2 py-1 rounded-full text-xs font-bold shadow border border-[#fff]">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                aria-label="Next project"
                onClick={handleNext}
                className="bg-black text-white rounded-full p-4 shadow-lg focus:outline-none focus:ring-0 transition text-3xl flex items-center justify-center border-2 border-white hover:border-gray-400 transition-transform duration-200 hover:scale-110 cursor-pointer"
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-full mt-8 transition-all duration-300 cursor-pointer">
          <h2 className="text-3xl font-extrabold mb-4 text-white">Tech Stack</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-3 w-full">
              <h3 className="text-lg mb-2 text-gray-300">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <li key={skill} className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold shadow border border-[#fff] transition-all duration-200 hover:scale-130 hover:bg-[#18181b]">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}