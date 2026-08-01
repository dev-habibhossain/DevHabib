"use client";

import { projectCategories, projectItems } from "@/lib/data";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilterTabs } from "./ProjectFilterTabs";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectItems
      : projectItems.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
        <div>
          <span className="text-brand-coral font-bold text-xs uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Featured Projects
          </h2>
        </div>

        <ProjectFilterTabs
          categories={projectCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
