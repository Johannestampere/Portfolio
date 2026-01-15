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
        className=' z-50 flex w-full flex-col items-start gap-8 px-4 pt-16 pb-48 text-md  md:w-3/4 lg:w-1/2'
      >

        <section className='flex flex-col w-full items-center'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <a href='https://cs.uwatering.com/#https://johannestampere.com?nav=prev'>←</a>
                    <a href='https://cs.uwatering.com/#https://johannestampere.com' target='_blank'>
                        <img
                            src='https://cs.uwatering.com/icon.black.svg'
                            alt='CS Webring'
                            style={{ width: '24px', height: 'auto', opacity: 0.8 }}
                        />
                    </a>
                    <a href='https://cs.uwatering.com/#https://johannestampere.com?nav=next'>→</a>
                  </div>
        </section>

        <section className='flex flex-col gap-6 pt-16'>
          <div className={`${latobold.className} text-base text-xl`}>Hey, I&#39;m Johannes!</div>
          <div className={`${latonormal.className}`}>I&#39;m an undergraduate Computer Science student at the <span className={`${latobold.className}`}>University of Waterloo</span>, and a full-stack engineer at <span className={`${latobold.className}`}>ScamGuardian.ai</span>, where I&#39;m creating scalable anti-scam software.</div>
          <div className={`${latonormal.className}`}>My mainly used languages are Python, C/C++, TypeScript/JavaScript, Ruby, and SQL.</div>
          <div className={`${latonormal.className}`}>My favorite technologies & tools include React, Next.js, Node.js, FastAPI, PostgreSQL, Redis, Docker, AWS, REST APIs, WebSockets, Tailwind CSS, Postman.</div>
          <div className={`${latonormal.className}`}>I love creating stuff that&#39;s fun and has real-world impact.</div>
        </section>

        <section className='flex flex-col gap-6 w-full my-8'>
          <h1 className={`${latobold.className} text-xl`}>Most recent projects</h1>
          <div className='flex w-full flex-col gap-2'>

          <a href='https://github.com/Johannestampere/uw-hot-takes' 
            className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
            <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
              <h2 className={`${latobold.className} text-accent-foreground font-bold`}>UW Hot Takes</h2>
              <p className={`${latonormal.className} text-accent-foreground`}>January 2026</p>
              <p className={`${latonormal.className} text-accent-foreground`}>Anonymous platform for UW students to share hot takes and engage with others.</p>
            </div>
          </a>

          <a href='https://github.com/Johannestampere/bloom.ai' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>bloom.ai</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>December 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>AI-powered real-time collaborative mindmapping platform.</p>
              </div>
            </a>
          
          <a href='https://github.com/Johannestampere/order_book_simulator' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>Order Book Simulator</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>December 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>High-performance, cache-optimized C++ order matching engine.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/softmax' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>C++ Softmax Regression</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>November 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>High-performance Softmax Regression in C++ with a custom matrix library, AVX2/FMA SIMD acceleration, and mini-batch gradient descent.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/Donor3' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>Donor3</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>June 2025 — Present</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Charity platform that revolutionizes donating using AI.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/Portfolio' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>johannestampere.com</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>July 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Minimalistic portfolio website.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/GuardiaAI' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>GuardiaAI</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>June 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Chrome extension that protects the elderly from online fraud.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/ArduinoEmotionDetector' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>LED Emotion Mapper</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>April 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Real-time emotion detection with Arduino.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/CMalloc' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>Manual Memory Management</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>March 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Manual implementations of C malloc() and free() functions.</p>
              </div>
            </a>

            <a href='https://github.com/Johannestampere/136Notes' 
              className='block relative w-full rounded-lg p-5 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#f7fff7] to-[#f0fff0] opacity-0 group-hover:opacity-75 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-lg'></div>
              <div className='relative flex flex-col items-start justify-start gap-2 text-md'>
                <h2 className={`${latobold.className} text-accent-foreground font-bold`}>136Notes</h2>
                <p className={`${latonormal.className} text-accent-foreground`}>February 2025</p>
                <p className={`${latonormal.className} text-accent-foreground`}>Lightweight note-taking platform for linear algebra students.</p>
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
