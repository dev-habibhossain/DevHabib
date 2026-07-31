"use client";

interface ProjectFilterTabsProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export function ProjectFilterTabs({
  activeTab,
  onSelectTab,
}: ProjectFilterTabsProps) {
  const tabs = ["All", "Laravel", "MERN / Next"];

  return (
    <div className="flex items-center space-x-2 mt-6 md:mt-0">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onSelectTab(tab)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition ${
              isActive
                ? "bg-[#3EB489] text-white shadow-sm"
                : "bg-white dark:bg-[#111827] text-gray-600 dark:text-gray-300 hover:text-[#3EB489] border border-gray-200 dark:border-[#1f2937]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
