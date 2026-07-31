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
    <section id="faq" className="max-w-4xl mx-auto px-8 py-16">
      <div className="text-center mb-10" data-aos="fade-up">
        <span className="text-[#3EB489] font-bold text-xs uppercase tracking-wider">
          Got Questions?
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
        {faqData.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="gcard glass rounded-2xl border border-gray-100 dark:border-[#1f2937] shadow-sm p-5 transition"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between font-bold text-sm text-left text-gray-900 dark:text-white focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className={`text-[#3EB489] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <p className="text-xs text-[#9ca3af] leading-relaxed mt-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
