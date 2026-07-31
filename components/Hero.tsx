"use client";

import { useState } from "react";
import Image from "next/image";
import { Atom, Server, Play, Download } from "lucide-react";
import { ResumeModal } from "./ResumeModal";

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative max-w-7xl mx-auto px-8 pt-10 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* Hero Text (Left) */}
        <div className="lg:col-span-5 space-y-6 relative z-10" data-aos="fade-right">
          <div className="w-16 h-12 bg-grid-dots absolute -top-8 -left-6 -z-10" />

          <span className="inline-block px-3 py-1 bg-[#3EB489]/10 text-[#3EB489] font-bold text-xs rounded-full uppercase tracking-wider border border-[#3EB489]/20">
            Full Stack Developer
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-900 dark:text-white leading-[1.12] tracking-tight">
            Habib Hossain
            <br />
            <span className="text-[#3EB489]">Full Stack Developer</span>
          </h1>

          <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed max-w-md">
            Building modern, scalable, and user-focused web applications with MERN Stack & PHP Laravel.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pt-3">
            <a
              href="#contact"
              className="bg-[#3EB489] text-white font-semibold text-sm px-8 py-3.5 rounded-md hover:bg-[#2E946F] transition shadow-md shadow-emerald-950/20"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="bg-[#FF7070]/10 text-[#FF7070] border border-[#FF7070]/20 font-semibold text-sm px-8 py-3.5 rounded-md hover:bg-[#FF7070]/20 transition"
            >
              My Projects
            </a>
          </div>
        </div>

        {/* Hero Graphic Stack (Right) */}
        <div className="lg:col-span-7 flex justify-center relative" data-aos="fade-left">
          <svg
            className="absolute -top-10 left-10 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] text-[#3EB489]/20 pointer-events-none -z-10"
            viewBox="0 0 200 200"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              d="M45,-62C57,-52,65,-38,68,-23C71,-8,69,8,63,22C57,36,47,48,34,56C21,64,5,68,-12,66C-29,64,-47,56,-58,43C-69,30,-73,12,-70,-4C-67,-20,-57,-34,-45,-44C-33,-54,-19,-60,-2,-57C15,-54,33,-72,45,-62Z"
              transform="translate(100 100)"
            />
          </svg>

          <div className="relative w-[310px] h-[360px] sm:w-[380px] sm:h-[430px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#FF7070]/80 rounded-[50px] transform -rotate-3" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3EB489] rounded-[35px] -z-10" />

            {/* HERO PORTRAIT IMAGE */}
            <div className="relative z-10 w-full h-[112%] overflow-hidden rounded-b-[50px] transform -translate-y-3">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Habib Hossain Hero"
                fill
                priority
                sizes="(max-width: 768px) 310px, 380px"
                className="object-cover object-top"
              />
            </div>

            {/* FLOATING TECH BADGES */}
            <div className="glass absolute left-4 top-6 hidden sm:flex animate-float items-center gap-2 rounded-2xl px-3 py-1.5 text-xs font-semibold shadow-lg z-20">
              <Atom className="h-4 w-4 text-[#3EB489]" /> React
            </div>
            <div
              className="glass absolute right-4 top-20 hidden sm:flex animate-float items-center gap-2 rounded-2xl px-3 py-1.5 text-xs font-semibold shadow-lg z-20"
              style={{ animationDelay: "-2s" }}
            >
              <Server className="h-4 w-4 text-[#FF7070]" /> Node.js
            </div>

            {/* HERO BUTTON WITH MANGA/THOUGHT SPEECH BUBBLE */}
            <div className="absolute -bottom-10 -left-6 z-20 flex flex-col items-center">
              {/* Speech Bubble */}
              <div className="bg-[#FF7070] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 animate-bounce-slow mb-1 flex items-center gap-1 relative">
                <span>Get My Resume!</span>
                <div className="w-1.5 h-1.5 bg-[#FF7070] rotate-45 absolute -bottom-0.5 left-1/2 -translate-x-1/2" />
              </div>

              {/* Interactive Play + Download Button */}
              <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 backdrop-blur-md p-2 rounded-[28px] shadow-xl">
                <button
                  onClick={() => setIsResumeModalOpen(true)}
                  title="Download Resume Options"
                  aria-label="Open Resume Options Modal"
                  className="relative w-16 h-16 bg-[#3EB489] text-white rounded-[22px] flex items-center justify-center shadow-lg hover:scale-105 transition"
                >
                  <Play className="w-6 h-6 fill-current ml-1" />
                  {/* Small Download Overlay Icon */}
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FF7070] text-white rounded-full flex items-center justify-center border-2 border-white dark:border-[#111827] shadow-md">
                    <Download className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-24 h-24 bg-grid-dots absolute bottom-0 right-4 sm:right-12 -z-10" />
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
