'use client'

import { motion } from 'framer-motion'
import { Lato } from 'next/font/google';
import { JSX } from 'react'
import * as React from "react"

const latonormal = Lato({
  weight: '300',
  subsets: ["latin"]
})

const latobold = Lato({
  weight: '400',
  subsets: ["latin"]
})

export default function Landing(): JSX.Element {
  return (
    <div className='flex w-full min-h-screen flex-col items-center px-8'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className=' z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-md  md:w-3/4 lg:w-1/2'
      >
        <section className='flex flex-col gap-6'>
          <div className={`${latobold.className} text-base`}>Hey, I&#39;m Johannes.</div>
          <div className={`${latonormal.className}`}>I&#39;m a software engineer born in Estonia and currently located in Canada. At the moment, I&#39;m studying 2nd-year computer science at the University of Waterloo. I&#39;m into backend development, devops, and machine learning.</div>
          <div className={`${latonormal.className}`}>I love attending hackathons, working on cool impactful projects with cool people, talking to anyone with the same interests as me, and playing sports. Hit me up if you have any questions!</div>
        </section>

        <section className='flex flex-col gap-6 w-full'>
          <h1 className={`${latobold.className} text-xl`}>Projects</h1>
          <div className='flex w-full flex-col gap-2'>
            <a href='https://github.com/Johannestampere/Donor3' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>Donor3</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>June 2025 — Present</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Charity platform that revolutionizes donating using AI.</p>
              </div>
            </a>
            
            <a href='https://github.com/Johannestampere/mindmap' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>MindBloom</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>May 2025 — Present</p>
                <p className={`${latonormal.className} text-accent-foreground`}>AI-powered intelligent mindmapping platform.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/Portfolio' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>johannestampere.com</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>July 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Minimalistic portfolio website.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/GuardiaAI' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>GuardiaAI</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>June 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Chrome extension that protects the elderly from online fraud.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/ArduinoEmotionDetector' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>LED Emotion Mapper</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>April 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Real-time emotion detection with Arduino.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/CMalloc' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>Manual Memory Management</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>March 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Manual implementations of C malloc() and free() functions.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/136Notes' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>136Notes</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>February 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Lightweight note-taking web-app for linear algebra students.</p>
              </div>
            </a>

    
          </div>
        </section>

        <section className='flex flex-col w-full gap-4'>
          <h1 className={`${latobold.className} text-xl`}>Socials</h1>
          <div className='p-4 flex flex-row gap-6'>
            <a href='https://github.com/Johannestampere'>
              <p className={`${latonormal.className} text-accent-foreground`}>GitHub</p>
            </a>
            
            <a href='https://www.linkedin.com/in/johannes-tampere/'>
              <p className={`${latonormal.className} text-accent-foreground`}>LinkedIn</p>
            </a>
          
            <a href='mailto:jtampere@uwaterloo.ca'>
              <p className={`${latonormal.className} text-accent-foreground`}>Email</p>
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  )
}