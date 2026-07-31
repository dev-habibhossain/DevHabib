import Link from "next/link";
import { navLinks, contactInfoData } from "@/lib/data";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-[#1f2937] bg-white dark:bg-[#0b0f17] py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <Link
            href="#"
            className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Habib.<span className="text-[#3EB489]">dev</span>
          </Link>
          <p className="text-xs text-[#9ca3af] mt-1">
            © {new Date().getFullYear()} Habib Hossain. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-600 dark:text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#3EB489] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <a
            href={contactInfoData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-[#111827] text-gray-700 dark:text-gray-300 flex items-center justify-center hover:text-[#3EB489] transition"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={contactInfoData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-[#111827] text-gray-700 dark:text-gray-300 flex items-center justify-center hover:text-[#FF7070] transition"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${contactInfoData.email}`}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-[#111827] text-gray-700 dark:text-gray-300 flex items-center justify-center hover:text-[#3EB489] transition"
            title="Email"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
