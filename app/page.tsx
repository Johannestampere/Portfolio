'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { JSX, useState, useEffect } from 'react'

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
    description: `Built custom versions of malloc() and free() in C, gaining a deeper understanding of the C memory model, pointer arithmetic, and manual memory management techniques`,
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
    text: '#B1B695',
    cardBg: '#B1B695',
    cardText: '#FCD0A1',
    border: '#B1B695',
    accent: '#B1B695',
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

export default function Landing(): JSX.Element {
  const [currentProject, setCurrentProject] = useState(0)
  const totalProjects = projects.length
  const [isHoveredGithub, setisHoveredGithub] = useState(false)
  const [linkedinHovered, setLinkedinHovered] = useState(false)
  const [isHoveredLeetcode, setisHoveredLeetcode] = useState(false)
  const [themeIndex, setThemeIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const theme = themes[themeIndex]
    if (theme.isDefault) {
      document.body.style.background = ''
      document.body.style.color = ''
    } else {
      document.body.style.background = theme.bg
      document.body.style.color = theme.text
    }
  }, [themeIndex])

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + totalProjects) % totalProjects)
  }
  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % totalProjects)
  }

  const theme = themes[themeIndex]

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
            src={`https://cdn.simpleicons.org/github/${theme.name === 'Indigo & Orange' ? 'F46036' : (isHoveredGithub ? (theme.text.replace('#', '') || 'fff') : (theme.border.replace('#', '') || 'bdbdbd'))}`}
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
            src={`https://cdn.simpleicons.org/leetcode/${theme.name === 'Indigo & Orange' ? 'F46036' : (isHoveredLeetcode ? (theme.text.replace('#', '') || 'fff') : (theme.border.replace('#', '') || 'bdbdbd'))}`}
            alt="LeetCode"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/johannestampere"
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
            fill={theme.name === 'Indigo & Orange' ? '#F46036' : (linkedinHovered ? theme.text : theme.border)}
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
          className={`inline-block px-3 py-1 bg-transparent rounded-lg shadow font-bold text-sm border transition hover:scale-110 ${theme.text} border-${theme.border} hover:bg-${theme.border} hover:text-${theme.text}`}
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
                className={`rounded-full shadow-xl object-cover border-3 ${theme.border}`}
              />
            </div>
            <h1 className={`text-3xl md:text-5xl font-extrabold mt-3 mb-4 ${theme.text}`}>Johannes Tampere</h1>
            <p className={`text-lg mb-6 ${theme.text}`}>Honours Computer Science @ <a href="https://cs.uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className={`hover:underline font-bold ${theme.accent}`}>University of Waterloo</a></p>
            <ul className="mb-8 space-y-3 text-left">
              <li className={`flex items-center text-lg md:text-xl transition-all duration-100 hover:scale-110 ${theme.text} hover:text-${theme.accent}`}> <span className={`inline-block w-4 h-4 rounded-full mr-3`} style={{ background: theme.text }}></span> full-stack development </li>
              <li className={`flex items-center text-lg md:text-xl transition-all duration-100 hover:scale-110 ${theme.text} hover:text-${theme.accent}`}> <span className={`inline-block w-4 h-4 rounded-full mr-3`} style={{ background: theme.text }}></span> prev data analysis intern @ Delfi </li>
              <li className={`flex items-center text-lg md:text-xl transition-all duration-100 hover:scale-110 ${theme.text} hover:text-${theme.accent}`}> <span className={`inline-block w-4 h-4 rounded-full mr-3`} style={{ background: theme.text }}></span> enthusiastic about ML </li>
              <li className={`flex items-center text-lg md:text-xl transition-all duration-100 hover:scale-110 ${theme.text} hover:text-${theme.accent}`}> <span className={`inline-block w-4 h-4 rounded-full mr-3`} style={{ background: theme.text }}></span> won DeltaHacks 2025 </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col items-center w-full transition-all duration-300 cursor-pointer">
            <h2 className={`text-3xl font-extrabold mb-8 text-center ${theme.text}`}>Projects</h2>
            <div className="flex items-center justify-center w-full gap-6 flex-col md:flex-row">
              <button
                aria-label="Previous project"
                onClick={handlePrev}
                className={`rounded-full p-4 shadow-lg focus:outline-none focus:ring-0 transition text-3xl flex items-center justify-center border-2 transition-transform duration-100 hover:scale-110 cursor-pointer ${theme.text} border-${theme.border} hover:bg-${theme.border} hover:text-${theme.text} hover:border-${theme.border}`}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </button>
              <div className="mx-6 w-full flex justify-center mt-6">
                <div className={`rounded-2xl shadow-2xl p-6 w-[280px] md:w-[320px] min-h-[160px] flex flex-col items-center justify-center transition-all duration-200 hover:scale-105 border-3 ${theme.text} border-${theme.border}`}>
                  <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className={`text-xl font-extrabold mb-3 text-center hover:underline ${theme.text} hover:text-${theme.accent}`}>
                    {projects[currentProject].name}
                  </a>
                  <p className={`text-sm text-center mb-3 ${theme.text}`}>{projects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-1 justify-center mt-2">
                    {projects[currentProject].skills && projects[currentProject].skills.map((skill) => (
                      <span key={skill} className={`px-2 py-1 rounded-full text-xs font-bold shadow border transition ${theme.text} border-${theme.border} hover:bg-${theme.accent} hover:text-${theme.accent}`}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <button
                aria-label="Next project"
                onClick={handleNext}
                className={`rounded-full p-4 shadow-lg focus:outline-none focus:ring-0 transition text-3xl flex items-center justify-center border-2 transition-transform duration-100 hover:scale-110 cursor-pointer ${theme.text} border-${theme.border} hover:bg-${theme.border} hover:text-${theme.text} hover:border-${theme.border}`}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-full mt-8 transition-all duration-300 cursor-pointer">
          <h2 className={`text-3xl font-extrabold mb-4 ${theme.text}`}>Tech Stack</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-3 w-full">
              <h3 className={`text-lg mb-2 ${theme.text}`}>{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <li key={skill} className={`px-2 py-0.5 rounded-full text-xs font-bold shadow border transition-all duration-200 hover:scale-130 ${theme.text} border-${theme.border} hover:bg-${theme.accent} hover:text-${theme.accent}`}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <button
          className="rounded-full shadow-lg px-3 py-2 border-2 transition-colors duration-200 text-sm font-bold flex items-center justify-center"
          style={{ background: theme.name === 'Default' ? '#000' : theme.accent, color: theme.name === 'Default' ? '#fff' : theme.cardText, borderColor: theme.name === 'Default' ? '#fff' : theme.accent }}
          aria-label="Open Theme Menu"
        >
          Themes
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'} w-48 bg-white rounded-xl shadow-lg mt-2`} style={{boxShadow: '0 8px 32px rgba(0,0,0,0.18)'}}>
          {themes.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => { setThemeIndex(idx); setMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-150 ${themeIndex === idx ? 'font-bold' : ''}`}
              style={{ background: t.bg, color: t.text, borderBottom: idx !== themes.length-1 ? '1px solid #eee' : 'none' }}
            >
              <span className="w-4 h-4 rounded-full border mr-2" style={{ background: t.cardBg, borderColor: t.border, display: 'inline-block' }}></span>
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}