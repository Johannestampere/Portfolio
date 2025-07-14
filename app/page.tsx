'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { JSX, useState } from 'react'

const projects = [
  {
    name: "Donor3",
    description: "Built Donor3, an AI-powered charity platform that revolutionizes donating by making it as easy as texting a friend (submission for SolutionHacks 2025)",
    skills: ['Next.js', 'TypeScript', 'Django', 'SQLite', 'Gemini API'],
    link: 'https://github.com/Johannestampere/Donor3',
    image: '/donor3.png',
  },
  {
    name: "GuardiaAI",
    description: "Led development of GuardiaAI, a Chrome Extension that protects the elderly from potential online scams and fraud in real-time (submission for SpurHacks 2025)",
    skills: ['React.js', 'Gemini API', 'Node.js', "Express.js", "Google TTS API"],
    link: "https://github.com/Johannestampere/GuardiaAI",
    image: "/guardia.png"
  },
  {
    name: '136Notes',
    description: `Solo-developed a lightweight intuitive note-taking app for visual linear algebra learners with dynamic graphs and LaTeX equations`,
    skills: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Flask', 'OAuth', 'Three.js', 'MathJax', 'Mongoose'],
    link: 'https://github.com/Johannestampere/136Notes',
    image: "/136notes.png"
  },
  {
    name: 'MindBloom',
    description: `Co-developed a collaborative brainstorming platform that helps hackathon teams and startups turn scattered thoughts into clear directions via dynamic mindmaps and AI-guided suggestions`,
    skills: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI API', 'Zustand', 'D3.js', 'Supabase', 'PostgreSQL'],
    link: 'https://github.com/Johannestampere/mindmap',
  },
  {
    name: 'Real-time Arduino Emotion Detector',
    description: `Built a real-time emotion detection system that uses OpenCV and a pre-trained model to classify facial expressions, then maps them to LED colors on an Arduino board via PySerial and C++`,
    skills: ['Python', 'OpenCV', 'PySerial', 'C++', 'Arduino'],
    link: 'https://github.com/Johannestampere/ArduinoEmotionDetector',
  },
  {
    name: 'Manual implementations of malloc() and free()',
    description: `Built custom versions of malloc() and free() in C, gaining a deeper understanding of the C memory model, pointer arithmetic, and manual memory management techniques`,
    skills: ['C'],
    link: 'https://github.com/Johannestampere/Cmalloc',
  },
  {
    name: 'Vim-based Note-taking App',
    description: `Lightweight Vim-based note-taking app that I built for myself to make note-taking in CS classes easier`,
    skills: ['C++', 'CSS'],
    link: 'https://github.com/Johannestampere/VimCSNotes',
  },
]

const skills = {
  'Languages': [
    'Python', 'TypeScript', 'JavaScript', 'C', 'C++', 'HTML', 'CSS'
  ],
  'Frameworks & Libraries': [
    'React', 'Next.js', 'Node', 'Express.js', 'FastAPI', 'Django', 'Flask', 'Pandas', 'Numpy', 'Zustand'
  ],
  'Technologies': [
    'Git', 'MySQL', 'MongoDB', 'NPM', 'Supabase', 'AWS', 'Docker', 'REST APIs', 'Jira', 'Github Actions'
  ]
}

/* Themes array - commented out for future use
const themes = [
  {
    name: 'Default',
    bg: 'linear-gradient(135deg, #000000 0%, #18181b 50%, #000000 100%)',
    text: '#fff',
    cardBg: '#18181b',
    cardText: '#fff',
    border: '#fff',
    accent: '#AF9164',
    isDefault: true,
  },
  {
    name: 'Blue & Platinum',
    bg: '#EAEAEA',
    text: '#463696',
    cardBg: '#463696',
    cardText: '#EAEAEA',
    border: '#463696',
    accent: '#463696',
  },
  {
    name: 'Indigo & Orange',
    bg: '#2E294E',
    text: '#F46036',
    cardBg: '#F46036',
    cardText: '#2E294E',
    border: '#2E294E',
    accent: '#F46036',
  },
  {
    name: 'Peach & Sage',
    bg: '#FCD0A1',
    text: '#7A8B5A',
    cardBg: '#7A8B5A',
    cardText: '#FCD0A1',
    border: '#7A8B5A',
    accent: '#7A8B5A',
  },
  {
    name: 'Ivory & Red',
    bg: '#F7F7FF',
    text: '#C03221',
    cardBg: '#C03221',
    cardText: '#F7F7FF',
    border: '#C03221',
    accent: '#C03221',
  },
]
*/

export default function Landing(): JSX.Element {
  const [isHoveredGithub, setisHoveredGithub] = useState(false)
  const [linkedinHovered, setLinkedinHovered] = useState(false)
  const [isHoveredLeetcode, setisHoveredLeetcode] = useState(false)

  // Peach & Sage theme as default
  const theme = {
    name: 'Peach & Sage',
    bg: '#FCD0A1',
    text: '#7A8B5A',
    cardBg: '#7A8B5A',
    cardText: '#FCD0A1',
    border: '#7A8B5A',
    accent: '#7A8B5A',
  }

  return (
    <div className={`min-h-screen w-full flex items-center justify-center px-3 py-6 relative`} style={{ background: theme.bg, color: theme.text }}>
      <div className="fixed top-4 right-6 z-50 flex gap-3 items-center">
        <a
          href="https://github.com/Johannestampere"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setisHoveredGithub(true)}
          onMouseLeave={() => setisHoveredGithub(false)}
          className={`transition-transform duration-100 hover:scale-130`}
        >
          <img
            height="28"
            width="28"
            src={`https://cdn.simpleicons.org/github/${isHoveredGithub ? '7A8B5A' : '7A8B5A'}`}
            alt="GitHub"
          />
        </a>
        <a
          href="https://leetcode.com/u/Johannestampere/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setisHoveredLeetcode(true)}
          onMouseLeave={() => setisHoveredLeetcode(false)}
          className={`transition-transform duration-100 hover:scale-130`}
        >
          <img
            height="28"
            width="28"
            src={`https://cdn.simpleicons.org/leetcode/${isHoveredLeetcode ? '7A8B5A' : '7A8B5A'}`}
            alt="LeetCode"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/johannes-tampere/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setLinkedinHovered(true)}
          onMouseLeave={() => setLinkedinHovered(false)}
          className={`transition-transform duration-100 hover:scale-130`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill={linkedinHovered ? theme.text : theme.border}
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
          className={`inline-block px-3 py-1 bg-transparent rounded-lg shadow font-bold text-sm border transition hover:scale-110`}
          style={{ color: theme.text, borderColor: theme.border }}
        >
          View Resume
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="max-w-5xl w-full flex flex-col gap-12 py-8 mt-16"
      >
        <div className="flex flex-col md:flex-row gap-20 w-full">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300 cursor-pointer">
            <div className="w-[150px] h-[150px] mb-4">
              <Image
                src="/pic.jpg"
                alt="Johannes Tampere"
                width={150}
                height={150}
                className="rounded-full shadow-xl object-cover border-3"
                style={{ borderColor: theme.border }}
              />
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold mt-3 mb-5" style={{ color: theme.text }}>Johannes Tampere</h1>

            <ul className="mb-8 space-y-3 text-left">
            <li className="flex items-center text-lg md:text-[12pt] transition-all duration-100 hover:scale-110" style={{ color: theme.text }}> <span className="inline-block w-4 h-4 rounded-full mr-3" style={{ background: theme.text }}></span>honours CS @ UWaterloo</li>
              <li className="flex items-center text-lg md:text-[12pt] transition-all duration-100 hover:scale-110" style={{ color: theme.text }}> <span className="inline-block w-4 h-4 rounded-full mr-3" style={{ background: theme.text }}></span> full-stack developer & builder </li>
              <li className="flex items-center text-lg md:text-[12pt] transition-all duration-100 hover:scale-110" style={{ color: theme.text }}> <span className="inline-block w-4 h-4 rounded-full mr-3" style={{ background: theme.text }}></span> prev data analysis intern @ Delfi </li>
              <li className="flex items-center text-lg md:text-[12pt] transition-all duration-100 hover:scale-110" style={{ color: theme.text }}> <span className="inline-block w-4 h-4 rounded-full mr-3" style={{ background: theme.text }}></span> ambitious about ML, cloud, and devops </li>
              <li className="flex items-center text-lg md:text-[12pt] transition-all duration-100 hover:scale-110" style={{ color: theme.text }}> <span className="inline-block w-4 h-4 rounded-full mr-3" style={{ background: theme.text }}></span> love the gym and basketball </li>
              
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full transition-all duration-300 cursor-pointer">
            <h2 className="text-3xl font-extrabold mb-4 mt-45" style={{ color: theme.text }}>Tech Stack</h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="mb-3 w-full">
                <h3 className="text-lg mb-2" style={{ color: theme.text }}>{category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="px-2 py-0.5 rounded-full text-xs font-bold shadow border transition-all duration-100 hover:scale-115" style={{ color: theme.text, borderColor: theme.border }}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-full transition-all duration-300 cursor-pointer">
          <h2 className="text-4xl font-extrabold mb-8 mt-10 text-center" style={{ color: theme.text }}>Projects</h2>
          <div className="w-full space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="rounded-[5px] shadow-2xl p-8 w-full transition-all duration-200 hover:scale-105 border-1 flex gap-8 min-h-48" style={{ color: theme.text, borderColor: theme.border }}>
                <div className="flex-1">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-extrabold mb-6 block hover:underline" style={{ color: theme.text }}>
                    {project.name}
                  </a>
                  <p className="text-base mb-6" style={{ color: theme.text }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills && project.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full text-sm font-bold shadow border transition" style={{ color: theme.text, borderColor: theme.border }}>{skill}</span>
                    ))}
                  </div>
                </div>
                {project.image && (
                  <div className="w-80 h-48 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      width={256}
                      height={160}
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}