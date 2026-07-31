"use client";

import { useEffect } from "react";
import { X, FileText, Download } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1f2937] rounded-3xl p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="inline-block px-3 py-1 bg-[#3EB489]/10 text-[#3EB489] font-bold text-xs rounded-full uppercase tracking-wider mb-2">
            Resume Downloads
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Select Resume Version
          </h3>
          <p className="text-sm text-gray-500 dark:text-[#9ca3af] mt-1">
            Choose the stack-focused resume that best matches your opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* MERN Stack Resume */}
          <div className="gcard glass p-6 rounded-2xl border border-gray-100 dark:border-[#1f2937] flex flex-col justify-between space-y-4 hover:border-[#3EB489] transition">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#3EB489]/10 text-[#3EB489] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                MERN Stack Resume
              </h4>
              <p className="text-xs text-gray-500 dark:text-[#9ca3af]">
                Focused on React, Next.js, Node.js, Express & MongoDB development.
              </p>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("MERN Resume PDF download started.");
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#3EB489] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#2E946F] transition shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>

          {/* PHP Laravel Resume */}
          <div className="gcard glass p-6 rounded-2xl border border-gray-100 dark:border-[#1f2937] flex flex-col justify-between space-y-4 hover:border-[#FF7070] transition">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#FF7070]/10 text-[#FF7070] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                PHP Laravel Resume
              </h4>
              <p className="text-xs text-gray-500 dark:text-[#9ca3af]">
                Focused on PHP, Laravel, MVC Architecture, REST APIs & MySQL.
              </p>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Laravel Resume PDF download started.");
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#FF7070] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#e05858] transition shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
