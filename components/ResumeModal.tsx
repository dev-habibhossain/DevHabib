'use client';

import { personalInfo } from '@/data';
import { Download, FileText, X } from 'lucide-react';
import { useEffect, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        className="animate-modal-pop relative z-[100000] w-full max-w-xl space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl dark:border-[#1f2937] dark:bg-[#111827]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:text-gray-900 dark:bg-gray-800 dark:hover:text-white"
          aria-label="Close Modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div>
          <div className="bg-brand-mint/10 text-brand-mint mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase">
            Resume Downloads
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Select Resume Version
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Choose the stack-focused resume that best matches your opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* MERN Stack Resume */}
          <div className="gcard glass hover:border-brand-mint flex flex-col justify-between space-y-4 rounded-2xl border border-gray-100 p-6 transition dark:border-[#1f2937]">
            <div className="space-y-2">
              <div className="bg-brand-mint/10 text-brand-mint flex h-10 w-10 items-center justify-center rounded-xl">
                <FileText className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">
                MERN Stack Resume
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Focused on React, Next.js, Node.js, Express & MongoDB
                development.
              </p>
            </div>
            <a
              href={personalInfo.mernResumeUrl || personalInfo.laravelResumeUrl}
              download="Habib_Hossain_Laravel_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-mint hover:bg-brand-mint-dark inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>

          {/* PHP Laravel Resume */}
          <div className="gcard glass hover:border-brand-coral flex flex-col justify-between space-y-4 rounded-2xl border border-gray-100 p-6 transition dark:border-[#1f2937]">
            <div className="space-y-2">
              <div className="bg-brand-coral/10 text-brand-coral flex h-10 w-10 items-center justify-center rounded-xl">
                <FileText className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white">
                PHP Laravel Resume
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Focused on PHP, Laravel, MVC Architecture, REST APIs & MySQL.
              </p>
            </div>
            <a
              href={personalInfo.laravelResumeUrl}
              download="Habib_Hossain_Laravel_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-coral inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-red-500"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
