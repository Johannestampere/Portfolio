import React, { JSX } from 'react';

export default function About(): JSX.Element {
  return (
    <section id="about" className="snap-start h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-6">About Me</h1>
        <div className="text-xl leading-relaxed">
          About
        </div>
      </div>
    </section>
  );
}