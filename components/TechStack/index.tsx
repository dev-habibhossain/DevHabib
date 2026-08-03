import { TechCategoryCard } from "./TechCategoryCard";
import { Marquee } from "./Marquee";
import { techCategories } from "@/lib/data";

export function TechStack() {
  return (
    <section id="tech-stack" className="relative w-full max-w-7xl mx-auto px-8 py-20" data-aos="fade-up">
      {/* Hero Background Accents */}
      <div className="w-32 h-32 bg-grid-dots absolute top-4 left-6 -z-10" />
      <div className="w-32 h-32 bg-grid-dots absolute bottom-4 right-6 -z-10" />
      <svg
        className="absolute -top-10 right-10 w-72 h-72 text-brand-mint/20 pointer-events-none -z-10 animate-float"
        style={{ animationDelay: "-2s" }}
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

      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Tech Stack & Skills
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm mt-2">
          Modern tools, frameworks, and databases powering my full-stack applications.
        </p>
      </div>

      {/* Marquee Ticker FIRST (matching static design layout) */}
      <Marquee />

      {/* Tech Category Cards SECOND - 2x2 layout gives cards wider width for skills to flow horizontally */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((cat) => (
          <TechCategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
