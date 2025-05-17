"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { JSX } from "react";

export default function Terminal(): JSX.Element {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/home");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[length:300%_300%] animate-gradient rounded-sm bg-gray-50" />

      <div className="relative z-10 w-[90%] max-w-3xl h-[500px] bg-gray-700 text-gray-300 font-mono rounded-lg shadow-lg p-10 text-xl flex flex-col justify-end border border-gray-600">
        <div className="mb-4">
          Welcome! Type anything and hit enter to see some cool stuff about me
        </div>

        <div className="inline-flex items-center">
          <div className="mr-3 text-gray-400">visitor@johannestampere:~$</div>
          <input
            ref={inputRef}
            className="bg-transparent outline-none text-gray-200 placeholder-gray-400 w-full max-w-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type here..."
          />
        </div>
      </div>
    </div>
  );
}
