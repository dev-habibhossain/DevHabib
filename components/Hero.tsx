'use client';

import { contactInfoData, personalInfo } from '@/data';
import heroImage from '@/public/no-bg-habib.png';
import { Download, Play } from 'lucide-react';
import Image from 'next/image';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

export function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-8 pt-10 pb-20 lg:grid-cols-12"
      >
        {/* Hero Text (Left) */}
        <div
          className="relative z-10 space-y-6 lg:col-span-5"
          data-aos="fade-right"
        >
          <div className="bg-grid-dots absolute -top-8 -left-6 -z-10 h-12 w-16" />

          <span className="bg-brand-mint-light text-brand-mint border-brand-mint/20 inline-block rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase">
            {personalInfo.badgeLabel}
          </span>

          <h1 className="text-4xl leading-[1.12] font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-[54px] dark:text-white">
            {personalInfo.name}
            <br />
            <span className="text-brand-mint">{personalInfo.title}</span>
          </h1>

          <p className="text-brand-muted max-w-md text-sm leading-relaxed sm:text-base">
            {personalInfo.shortBio}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 pt-3">
            <a
              href="#contact"
              className="bg-brand-mint hover:bg-brand-mint-dark rounded-md px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-emerald-950/20 transition"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="bg-brand-coral-light text-brand-coral border-brand-coral/20 hover:bg-brand-coral/20 rounded-md border px-8 py-3.5 text-sm font-semibold transition"
            >
              My Projects
            </a>
          </div>
        </div>

        {/* Hero Graphic Stack (Right) */}
        <div
          className="relative flex justify-center lg:col-span-7"
          data-aos="fade-left"
        >
          {/* Animated Vector Spiral SVG Shape */}
          <svg
            className="text-brand-mint/20 animate-float pointer-events-none absolute -top-10 left-10 -z-10 h-[380px] w-[380px] sm:h-[460px] sm:w-[460px]"
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

          <div className="relative flex h-[360px] w-[310px] items-center justify-center sm:h-[430px] sm:w-[380px]">
            {/* Animated Floating Coral Card Background */}
            <div
              className="bg-brand-coral/80 animate-float absolute inset-0 -rotate-3 transform rounded-[50px]"
              style={{ animationDelay: '-1s' }}
            />
            {/* Animated Floating Mint Accent Box */}
            <div
              className="bg-brand-mint animate-float absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-[35px]"
              style={{ animationDelay: '-3s' }}
            />

            {/* HERO PORTRAIT IMAGE */}
            <div className="relative z-10 h-[112%] w-full -translate-y-3 transform overflow-hidden rounded-b-[50px]">
              <Image
                src={heroImage}
                alt="Habib Hossain Hero"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                className="object-cover object-top"
              />
            </div>

            {/* FLOATING SOCIAL BADGES */}
            <a
              href={contactInfoData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass animate-float hover:text-brand-mint absolute top-6 left-4 z-20 hidden items-center gap-2 rounded-2xl px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-lg transition sm:flex dark:text-white"
            >
              <GitHubIcon className="text-brand-mint h-4 w-4" /> GitHub
            </a>
            <a
              href={contactInfoData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass animate-float hover:text-brand-coral absolute top-20 right-4 z-20 hidden items-center gap-2 rounded-2xl px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-lg transition sm:flex dark:text-white"
              style={{ animationDelay: '-2s' }}
            >
              <LinkedInIcon className="text-brand-coral h-4 w-4" /> LinkedIn
            </a>

            {/* HERO BUTTON WITH MANGA/THOUGHT SPEECH BUBBLE */}
            <div className="absolute -bottom-10 -left-6 z-20 flex flex-col items-center">
              {/* Speech Bubble */}
              <div className="bg-brand-coral animate-bounceSlow relative mb-1 flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-[10px] font-bold text-white shadow-lg">
                <span>Get My Resume!</span>
                <div className="bg-brand-coral absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45" />
              </div>

              {/* Interactive Play + Download Button */}
              <div className="dark:bg-brand-darkCard rounded-[28px] border border-gray-200 bg-white p-2 shadow-xl backdrop-blur-md dark:border-gray-700">
                <a
                  href={personalInfo.laravelResumeUrl}
                  download="Habib_Hossain_Laravel_Developer_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download Habib Hossain Resume"
                  aria-label="Download Habib Hossain Resume"
                  className="bg-brand-mint relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-[22px] text-white shadow-lg transition hover:scale-105"
                >
                  <Play className="ml-1 h-6 w-6 fill-current" />
                  {/* Small Download Overlay Icon */}
                  <span className="bg-brand-coral dark:border-brand-darkCard absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-white shadow-md">
                    <Download className="h-3 w-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-grid-dots absolute right-4 bottom-0 -z-10 h-24 w-24 sm:right-12" />
        </div>
      </section>
    </>
  );
}
