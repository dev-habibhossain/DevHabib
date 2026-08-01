"use client";

import CountUp from "react-countup";
import { statsData } from "@/lib/data";

export function StatsCounter() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-10" data-aos="fade-up">
      <div className="gcard glass p-8 rounded-3xl border border-gray-100 dark:border-brand-darkBorder shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat, idx) => (
          <div
            key={stat.label}
            className={`space-y-1 ${
              idx < statsData.length - 1
                ? "border-r border-gray-100 dark:border-brand-darkBorder"
                : ""
            }`}
          >
            <h3
              className={`text-3xl font-extrabold ${
                stat.color === "mint" ? "text-brand-mint" : "text-brand-coral"
              }`}
            >
              <CountUp end={stat.count} duration={2} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </h3>
            <p className="text-xs text-brand-muted font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
