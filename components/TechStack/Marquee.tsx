"use client";

import { marqueeTechs } from "@/lib/data";
import {
  Code,
  Palette,
  FileCode,
  Code2,
  Atom,
  Globe,
  Wind,
  Layout,
  Server,
  Cpu,
  Layers,
  Box,
  Database,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Palette,
  FileCode,
  Code2,
  Atom,
  Globe,
  Wind,
  Layout,
  Server,
  Cpu,
  Layers,
  Box,
  Database,
};

export function Marquee() {
  const items = [...marqueeTechs, ...marqueeTechs];

  return (
    <div className="overflow-hidden w-full mb-12 py-2 relative">
      <div className="animate-marquee space-x-3 items-center">
        {items.map((tech, idx) => {
          const IconComp = iconMap[tech.icon] || Code;
          const isMint = tech.accent === "mint";

          return (
            <span
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-[#111827] text-gray-700 dark:text-gray-200 text-xs font-semibold rounded-full border border-gray-100 dark:border-[#1f2937] shrink-0"
            >
              <IconComp
                className={`w-3.5 h-3.5 ${
                  isMint ? "text-[#3EB489]" : "text-[#FF7070]"
                }`}
              />
              {tech.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
