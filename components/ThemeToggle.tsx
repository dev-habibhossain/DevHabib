"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isMounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-brand-darkCard border border-gray-200 dark:border-brand-darkBorder" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-brand-darkCard border border-gray-200 dark:border-brand-darkBorder text-gray-700 dark:text-amber-400 flex items-center justify-center hover:scale-105 transition shadow-sm"
      title="Toggle Light / Dark Mode"
      aria-label="Toggle Light or Dark Mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
