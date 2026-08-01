import { techCategories } from "@/lib/data";
import { Marquee } from "./Marquee";
import { TechCategoryCard } from "./TechCategoryCard";

export function TechStack() {
  return (
    <section id="tech-stack" className="w-full max-w-7xl mx-auto px-8 py-16">
      <div className="text-center max-w-xl mx-auto mb-10" data-aos="fade-up">
        <span className="text-brand-coral font-bold text-xs uppercase tracking-wider">
          Skills & Tools
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          Tech Stack & Expertise
        </h2>
        <p className="text-brand-muted text-xs sm:text-sm mt-2">
          Technologies and tools I use to build powerful web applications.
        </p>
      </div>

      <Marquee />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {techCategories.map((category) => (
          <TechCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
