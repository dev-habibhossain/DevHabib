import { TechCategory } from "@/lib/data";
import { Layout, Server, Database, Wrench } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  Wrench,
};

interface TechCategoryCardProps {
  category: TechCategory;
}

export function TechCategoryCard({ category }: TechCategoryCardProps) {
  const IconComp = iconMap[category.iconName] || Layout;
  const isMint = category.accent === "mint";

  return (
    <div
      className={`gcard glass p-6 rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm flex flex-col justify-between space-y-4 transition duration-300 ${
        isMint ? "hover:border-brand-mint/50" : "hover:border-brand-coral/50"
      }`}
    >
      <div className="space-y-3.5">
        <div className="flex items-center space-x-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              isMint
                ? "bg-brand-mint-light text-brand-mint"
                : "bg-brand-coral-light text-brand-coral"
            }`}
          >
            <IconComp className="w-4.5 h-4.5" />
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            {category.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-100 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-500 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
