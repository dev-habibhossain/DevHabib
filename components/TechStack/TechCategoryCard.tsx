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
      className={`gcard glass p-6 rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm space-y-4 transition ${
        isMint ? "hover:border-brand-mint" : "hover:border-brand-coral"
      }`}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          isMint
            ? "bg-brand-mint-light text-brand-mint"
            : "bg-brand-coral-light text-brand-coral"
        }`}
      >
        <IconComp className="w-5 h-5" />
      </div>

      <h3 className="text-base font-bold text-gray-900 dark:text-white">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md border border-gray-100 dark:border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
