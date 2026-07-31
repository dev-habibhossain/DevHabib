"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#070a0f] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="loader-ring absolute inset-0 w-full h-full"></div>
        <div className="w-10 h-10 bg-[#3EB489] text-white font-extrabold text-sm rounded-xl flex items-center justify-center shadow-lg shadow-emerald-950/50">
          H.D
        </div>
      </div>
      <p className="mt-5 text-xs font-bold tracking-widest text-[#3EB489] uppercase animate-pulse">
        Loading Habib's Portfolio...
      </p>
    </div>
  );
}
