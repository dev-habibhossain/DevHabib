import Image from "next/image";
import { ProjectItem } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isLaravel = project.category === "Laravel";

  return (
    <div
      className={`gcard glass rounded-3xl overflow-hidden border border-gray-100 dark:border-[#1f2937] shadow-sm group hover:shadow-lg transition duration-300 ${
        isLaravel ? "hover:border-[#3EB489]/50" : "hover:border-[#FF7070]/50"
      }`}
    >
      <div
        className={`relative h-48 overflow-hidden ${
          isLaravel ? "bg-[#3EB489]/10" : "bg-[#FF7070]/10"
        } dark:bg-gray-900`}
      >
        <Image
          src={project.image}
          alt={`${project.title} Screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        <span
          className={`absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-md ${
            isLaravel ? "bg-[#3EB489]" : "bg-[#FF7070]"
          }`}
        >
          {project.badgeLabel}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <h3
          className={`text-base font-bold text-gray-900 dark:text-white transition ${
            isLaravel ? "group-hover:text-[#3EB489]" : "group-hover:text-[#FF7070]"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-xs font-semibold ${
            isLaravel ? "text-[#3EB489]" : "text-[#FF7070]"
          }`}
        >
          {project.subtitle}
        </p>

        <p className="text-[#9ca3af] text-xs leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
          <strong>Features:</strong> {project.features}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-[#1f2937]">
          <span className="text-[10px] font-medium text-gray-400 truncate max-w-[170px]">
            {project.techSummary}
          </span>
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center justify-center transition ${
                isLaravel ? "hover:bg-[#3EB489]" : "hover:bg-[#FF7070]"
              } hover:text-white`}
              title="GitHub Repository"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
                isLaravel
                  ? "bg-[#3EB489]/10 text-[#3EB489] hover:bg-[#3EB489]"
                  : "bg-[#FF7070]/10 text-[#FF7070] hover:bg-[#FF7070]"
              } hover:text-white`}
              title="Live Demo"
              aria-label={`Live Demo for ${project.title}`}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
