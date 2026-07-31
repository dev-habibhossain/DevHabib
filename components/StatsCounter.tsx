"use client";

import CountUp from "react-countup";
import { statsData } from "@/lib/data";

export function StatsCounter() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10" data-aos="fade-up">
      <div className="gcard glass p-8 rounded-3xl border border-gray-100 dark:border-[#1f2937] shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat, idx) => (
          <div
            key={stat.label}
            className={`space-y-1 ${
              idx < statsData.length - 1
                ? "border-r border-gray-100 dark:border-[#1f2937]"
                : ""
            }`}
          >
            <h3
              className={`text-3xl font-extrabold ${
                stat.color === "mint" ? "text-[#3EB489]" : "text-[#FF7070]"
              }`}
            >
              <CountUp end={stat.count} duration={2} enableScrollSpy scrollSpyOnce />
              {stat.suffix}
            </h3>
            <p className="text-xs text-[#9ca3af] font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
