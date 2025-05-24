'use client'

import React, { useState } from 'react'

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [isHoveredGithub, setisHoveredGithub] = useState(false)
  const [linkedinHovered, setLinkedinHovered] = useState(false)
  const [isHoveredLeetcode, setisHoveredLeetcode] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 flex items-center justify-between text-[#7c7e77] z-50 bg-transparent">
      
      <button
        onClick={() => scrollToSection('landing')}
        className="text-lg md:text-xl font-bold rounded-md px-3 py-1 transition-all duration-200 hover:bg-[#d2d4d6] hover:scale-105"
      >
        Johannes Tampere
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        {['Skills', 'Projects', 'About'].map((name) => (
          <button
            key={name}
            onClick={() => scrollToSection(name.toLowerCase())}
            className="text-sm md:text-base font-medium rounded-md px-3 py-1 transition-all duration-200 hover:bg-[#d2d4d6] hover:scale-105"
          >
            {name}
          </button>
        ))}
      </div>

      <div className="flex gap-3 items-center">
        <a
          href="https://github.com/Johannestampere"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setisHoveredGithub(true)}
          onMouseLeave={() => setisHoveredGithub(false)}
          className="transition-transform duration-200 hover:scale-110"
        >
          <img
            height="32"
            width="32"
            src={`https://cdn.simpleicons.org/github/${isHoveredGithub ? 'AAA694' : '7c7e77'}`}
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
            height="32"
            width="32"
            src={`https://cdn.simpleicons.org/leetcode/${isHoveredLeetcode ? '476A6F' : '7c7e77'}`}
            alt="GitHub"
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
    width="32"
    height="32"
    fill={linkedinHovered ? '#673C4F' : '#7c7e77'}
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
  </svg>
</a>


      </div>
    </nav>
  )
}
