"use client";

import { useState } from "react";
import { projectsData } from "@/lib/data";
import { ProjectFilterTabs } from "./ProjectFilterTabs";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "All") return true;
    if (activeTab === "Laravel") return project.category === "Laravel";
    if (activeTab === "MERN / Next") return project.category === "MERN / Next";
    return true;
  });

  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12" data-aos="fade-up">
        <div>
          <span className="text-[#3EB489] font-bold text-xs uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            Featured Projects
          </h2>
          <p className="text-[#9ca3af] text-xs sm:text-sm mt-2">
            Real web applications engineered with modern technologies.
          </p>
        </div>

        {/* Filter Tabs */}
        <ProjectFilterTabs
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="100">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
