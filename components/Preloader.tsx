"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            setLoading(false);
          }, 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 14) + 7;
        return Math.min(prev + step, 100);
      });
    }, 85);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="neoleaf-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-[#0b0f17] text-white flex flex-col items-center justify-center overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-mint/10 rounded-full blur-[150px] pointer-events-none" />

          {/* Centered DevHabib Logo with Liquid Rise & Exit Scale */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center px-4"
            animate={
              isComplete
                ? {
                    scale: 1.85,
                    opacity: 0,
                  }
                : {
                    scale: 1,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.55,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* Giant DevHabib Logo Typography */}
            <div className="relative font-black tracking-tighter text-6xl sm:text-8xl md:text-9xl uppercase font-sans">
              {/* Dimmed Base Layer */}
              <span className="text-[#252a36]">Dev.Habib</span>

              {/* Rising Liquid Wave Fill Layer */}
              <span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2e8f0] to-brand-mint transition-all duration-150 ease-out"
                style={{
                  clipPath: `inset(${100 - progress}% 0 0 0)`,
                }}
              >
                Dev.Habib
              </span>
            </div>
          </motion.div>

          {/* Bottom-Right Counter (Matching NeoLeaf Layout & Font) */}
          <AnimatePresence>
            {!isComplete && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex items-center gap-2 text-[14px] font-mono text-[#c9c9c9] tracking-wide"
              >
                <span>loading...</span>
                <span className="font-bold text-brand-mint">[{progress}%]</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
