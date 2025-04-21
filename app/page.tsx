"use client"

import React from 'react'
import Navbar from '@/app/components/Navbar'
import Skills from '@/app/components/Skills'
import Projects from '@/app/components/Projects'
import Resume from '@/app/components/Resume'
import Home from '@/app/components/Home'

export default function HomePage() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-scroll">
      <Navbar />
      <section id="home" className="snap-start h-screen">
        <Home />
      </section>
      <section id="skills" className="snap-start h-screen">
        <Skills />
      </section>
      <section id="projects" className="snap-start h-screen">
        <Projects />
      </section>
      <section id="resume" className="snap-start h-screen">
        <Resume />
      </section>
    </div>
  )
}