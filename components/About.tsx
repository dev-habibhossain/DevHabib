import Image from "next/image";
import aboutImage from "@/public/no-bg-habib.png";
import { personalInfo } from "@/data";

export function About() {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      {/* Left Cutout Card */}
      <div className="lg:col-span-5 flex justify-center relative" data-aos="fade-right">
        <div className="relative w-72 h-80 sm:w-80 sm:h-96 bg-brand-coral/80 rounded-[40px] flex items-end justify-center">
          {/* ABOUT PORTRAIT IMAGE */}
          <div className="relative w-full h-full overflow-hidden rounded-[40px] bg-gradient-to-b from-brand-mint/20 to-brand-coral/10">
            <Image
              src={aboutImage}
              alt={`${personalInfo.name} About`}
              fill
              priority
              quality={100}
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
              className="object-cover object-top"
            />
          </div>

          <div className="absolute -top-6 -left-6 w-20 h-20 bg-brand-mint rounded-[25px] -z-10" />
        </div>
      </div>

      {/* Right Narrative */}
      <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-brand-muted text-sm sm:text-base leading-relaxed max-w-xl">
          {personalInfo.aboutBio}
        </p>

        <p className="text-brand-muted text-sm sm:text-base leading-relaxed max-w-xl">
          Based in {personalInfo.location}, I am open to Remote & On-site opportunities worldwide.
        </p>

        <div>
          <a
            href="#services"
            className="inline-block bg-brand-mint text-white text-sm font-semibold px-7 py-3 rounded-md hover:bg-brand-mint-dark transition shadow-sm"
          >
            My Services
          </a>
        </div>
      </div>
    </section>
  );
}
