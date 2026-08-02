"use client";

import { useState } from "react";
import { faqData } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full max-w-4xl mx-auto px-8 py-16">
      {/* Hero Background Accents */}
      <div className="w-32 h-32 bg-grid-dots absolute top-4 left-4 -z-10" />
      <div className="w-32 h-32 bg-grid-dots absolute bottom-4 right-4 -z-10" />
      <svg
        className="absolute -top-6 right-6 w-64 h-64 text-brand-coral/15 pointer-events-none -z-10 animate-float"
        style={{ animationDelay: "-1.5s" }}
        viewBox="0 0 200 200"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          d="M45,-62C57,-52,65,-38,68,-23C71,-8,69,8,63,22C57,36,47,48,34,56C21,64,5,68,-12,66C-29,64,-47,56,-58,43C-69,30,-73,12,-70,-4C-67,-20,-57,-34,-45,-44C-33,-54,-19,-60,-2,-57C15,-54,33,-72,45,-62Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="text-center mb-10" data-aos="fade-up">
        <span className="text-brand-mint font-bold text-xs uppercase tracking-wider">
          Got Questions?
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4 relative z-10" data-aos="fade-up" data-aos-delay="100">
        {faqData.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              onClick={() => toggleFAQ(idx)}
              className="gcard glass rounded-2xl border border-gray-100 dark:border-brand-darkBorder shadow-sm p-5 transition-all duration-300 cursor-pointer select-none hover:border-brand-mint/50"
            >
              <div className="w-full flex items-center justify-between font-bold text-sm text-left text-gray-900 dark:text-white">
                <span>{faq.question}</span>
                <span
                  className={`text-brand-mint transition-transform duration-300 shrink-0 ml-4 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </div>

              {/* Smooth Grid Expand/Collapse Container */}
              <div
                className={`grid transition-[grid-template-rows,opacity,margin,padding] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mt-3 pt-2 border-t border-gray-100 dark:border-gray-800/80"
                    : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0 border-transparent"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
