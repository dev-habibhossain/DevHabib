import { ProjectCategory } from "@/lib/data";

interface ProjectFilterTabsProps {
  categories: ProjectCategory[];
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export function ProjectFilterTabs({
  categories,
  activeCategory,
  onSelectCategory,
}: ProjectFilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.name;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.name)}
            className={
              isActive
                ? "px-4 py-2 bg-brand-mint text-white text-xs font-semibold rounded-lg shadow-sm"
                : "px-4 py-2 bg-white dark:bg-brand-darkCard text-gray-600 dark:text-gray-300 hover:text-brand-mint text-xs font-semibold rounded-lg border border-gray-200 dark:border-brand-darkBorder transition"
            }
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
