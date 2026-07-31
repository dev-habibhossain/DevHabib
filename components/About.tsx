import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      {/* Left Cutout Card */}
      <div className="lg:col-span-5 flex justify-center relative" data-aos="fade-right">
        <div className="relative w-72 h-80 sm:w-80 sm:h-96 bg-[#FF7070]/80 rounded-[40px] flex items-end justify-center">
          {/* ABOUT PORTRAIT IMAGE */}
          <div className="relative w-full h-full overflow-hidden rounded-[40px]">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Habib Hossain About"
              fill
              sizes="(max-width: 640px) 288px, 320px"
              className="object-cover"
            />
          </div>

          <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#3EB489] rounded-[25px] -z-10" />
        </div>
      </div>

      {/* Right Narrative */}
      <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed max-w-xl">
          I am a passionate Full Stack Developer specializing in both the MERN Stack and PHP Laravel. I enjoy building clean, scalable, responsive, and user-friendly web applications.
        </p>

        <p className="text-[#9ca3af] text-sm sm:text-base leading-relaxed max-w-xl">
          I continuously learn modern technologies and best practices to improve my skills and create high-quality digital products. Based in Lakshmipur, Bangladesh, I am open to Remote & On-site opportunities.
        </p>

        <div>
          <a
            href="#services"
            className="inline-block bg-[#3EB489] text-white text-sm font-semibold px-7 py-3 rounded-md hover:bg-[#2E946F] transition shadow-sm"
          >
            My Services
          </a>
        </div>
      </div>
    </section>
  );
}
