import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsCounter } from "@/components/StatsCounter";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { EducationExperience } from "@/components/EducationExperience";
import { ProfessionalStatus } from "@/components/ProfessionalStatus";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Preloader />
      
      {/* Background Vector Accents */}
      <svg
        className="absolute top-10 left-4 w-36 h-36 text-[#3EB489]/10 pointer-events-none -z-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20,10 Q80,10 50,90 Z" />
      </svg>
      <svg
        className="absolute top-96 right-4 w-48 h-48 text-[#FF7070]/10 pointer-events-none -z-10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M10,30 Q90,10 70,80 Z" />
      </svg>

      <Navbar />

      <main className="flex-1 space-y-8">
        <Hero />
        <StatsCounter />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <EducationExperience />
        <ProfessionalStatus />
        <FAQAccordion />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
