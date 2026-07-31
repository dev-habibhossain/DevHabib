import { techCategories } from "@/lib/data";
import { Marquee } from "./Marquee";
import { TechCategoryCard } from "./TechCategoryCard";

export function TechStack() {
  return (
    <section id="tech-stack" className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-[#3EB489] font-bold text-xs uppercase tracking-wider">
          Skillset
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          Categorized Tech Stack
        </h2>
        <p className="text-[#9ca3af] text-xs sm:text-sm mt-2">
          Tools, languages, and frameworks I use every day.
        </p>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Categorized Tech Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techCategories.map((category) => (
          <TechCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
