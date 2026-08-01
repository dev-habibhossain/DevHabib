"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-7xl mx-auto px-8 py-7 flex items-center justify-between relative z-30">
      <Link
        href="#"
        className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
      >
        dev.<span className="text-brand-mint">Habib</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={
              link.name === "Home"
                ? "text-brand-mint font-semibold"
                : "hover:text-brand-mint transition"
            }
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        {/* LIGHT / DARK MODE TOGGLE BUTTON */}
        <ThemeToggle />

        <a
          href="#contact"
          className="bg-brand-mint text-white font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-brand-mint-dark transition shadow-sm"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-gray-100 dark:bg-brand-darkCard border border-gray-200 dark:border-brand-darkBorder text-gray-700 dark:text-gray-200 flex items-center justify-center"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[85px] z-40 bg-white/95 dark:bg-brand-darkBg/95 backdrop-blur-lg md:hidden flex flex-col p-8 space-y-6 animate-fadeIn border-b border-gray-200 dark:border-gray-800">
          <nav className="flex flex-col space-y-4 text-base font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-800 dark:text-gray-200 hover:text-brand-mint transition py-2 border-b border-gray-100 dark:border-gray-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-brand-mint text-white font-semibold text-sm py-3 rounded-md hover:bg-brand-mint-dark transition shadow-md"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
