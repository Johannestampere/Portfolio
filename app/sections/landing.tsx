import { JSX } from "react";

export default function Landing(): JSX.Element {
    return (
      <section id="landing" className="snap-start h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl font-bold mb-6">Hello, I'm Johannes!</h1>
          <div className="text-xl leading-relaxed">
            I'm a second-year Honours Computer Science student at the University of Waterloo.
            I have experience in full-stack development, data analysis, and machine learning.
          </div>
        </div>
      </section>
    )
  }
  