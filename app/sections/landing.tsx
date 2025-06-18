'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { JSX, useState } from 'react'

const projects = [
  {
    name: '136Notes',
    description: `Lightweight visual note-taking app for linear algebra students with dynamic graphs and LaTeX`,
    skills: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Flask', 'OAuth', 'Three.js', 'MathJax', 'Mongoose'],
    link: '#',
  },
  {
    name: 'MindBloom',
    description: `Developer a collaborative brainstorming platform that helps hackathon teams and startups turn scattered thoughts into clear directions via dynamic mindmaps and AI-guided suggestions`,
    skills: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI API', 'Zustand', 'D3.js', 'Supabase', 'PostgreSQL'],
    link: '#',
  },
  {
    name: 'Real-time Arduino Emotion Detector',
    description: `Maps a person's specific emotion to specific LED lights on an Arduino board using a pre-trained detection model, OpenCV, and C++`,
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
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 bg-gradient-to-br from-black via-[#18181b] to-black text-white relative">
      <div className="fixed top-6 right-8 z-50 flex gap-5 items-center">
        <a
          href="https://github.com/Johannestampere"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setisHoveredGithub(true)}
          onMouseLeave={() => setisHoveredGithub(false)}
          className="transition-transform duration-200 hover:scale-110"
        >
          <img
            height="40"
            width="40"
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
          className="transition-transform duration-200 hover:scale-110"
        >
          <img
            height="40"
            width="40"
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
          className="transition-transform duration-200 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill={linkedinHovered ? '#fff' : '#bdbdbd'}
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
      </div>
      <div className="fixed top-6 left-8 z-50">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-white text-black rounded-lg shadow hover:bg-[#bdbdbd] transition font-bold text-base border border-white"
        >
          View Resume
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="max-w-7xl w-full flex flex-col gap-20 py-16"
      >
        <div className="flex flex-col md:flex-row gap-16 w-full">
          {/* Profile Section */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300 cursor-pointer">
            <div className="w-[180px] h-[180px] mb-6">
              <Image
                src="/pic.jpg"
                alt="Johannes Tampere"
                width={180}
                height={180}
                className="rounded-full shadow-xl object-cover border-4 border-[#23242a]"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">Johannes Tampere</h1>
            <p className="text-3xl text-[#bdbdbd] mb-8">Honours Computer Science @ <a href="https://cs.uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="text-[#AF9164] hover:underline font-bold">University of Waterloo</a></p>
            <ul className="mb-10 space-y-4 text-left">
              <li className="flex items-center text-2xl md:text-3xl font-bold">
                <span className="inline-block w-6 h-6 rounded-full bg-white mr-4"></span>
                full-stack development
              </li>
              <li className="flex items-center text-2xl md:text-3xl font-bold">
                <span className="inline-block w-6 h-6 rounded-full bg-white mr-4"></span>
                prev data analysis intern @&nbsp;
                <span className="text-[#0060bf]">Delfi</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center w-full transition-all duration-300 cursor-pointer">
            <h2 className="text-5xl font-extrabold mb-12 text-white text-center">Projects</h2>
            <div className="flex items-center justify-center w-full gap-8 flex-col md:flex-row">
              <button
                aria-label="Previous project"
                onClick={handlePrev}
                className="bg-black text-white rounded-full p-6 shadow-lg focus:outline-none focus:ring-0 transition text-5xl flex items-center justify-center border-2 border-white hover:border-gray-400"
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </button>
              <div className="mx-8 w-full flex justify-center mt-8">
                <div className="bg-black border-4 border-white rounded-3xl shadow-2xl p-10 w-[340px] md:w-[420px] min-h-[220px] flex flex-col items-center justify-center">
                  <a href={projects[currentProject].link} className="text-2xl font-extrabold text-white hover:underline mb-4 text-center">
                    {projects[currentProject].name}
                  </a>
                  <p className="text-[#bdbdbd] text-lg text-center mb-4">{projects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-2">
                    {projects[currentProject].skills && projects[currentProject].skills.map((skill) => (
                      <span key={skill} className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold shadow border-2 border-[#fff]">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                aria-label="Next project"
                onClick={handleNext}
                className="bg-black text-white rounded-full p-6 shadow-lg focus:outline-none focus:ring-0 transition text-5xl flex items-center justify-center border-2 border-white hover:border-gray-400"
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </button>
            </div>
            <div className="mt-6 flex justify-center w-full">
              <span className="text-[#bdbdbd] text-3xl font-bold">{currentProject + 1} / {totalProjects}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-full mt-10 transition-all duration-300 cursor-pointer">
          <h2 className="text-5xl font-extrabold mb-6 text-white">Tech Stack</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-4 w-full">
              <h3 className="text-2xl mb-2 text-gray-300">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <li key={skill} className="bg-black text-white px-4 py-2 rounded-full text-base font-bold shadow border-2 border-[#fff] transition-all duration-200 hover:scale-130 hover:bg-[#18181b]">
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
