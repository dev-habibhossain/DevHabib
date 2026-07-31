import Link from "next/link";
import { navLinks, contactInfoData } from "@/lib/data";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-[#1f2937] py-10 mt-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#9ca3af]">
        <div>
          <Link
            href="#"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Habib.<span className="text-[#3EB489]">dev</span>
          </Link>
          <p className="mt-1">
            © {new Date().getFullYear()} Habib Hossain. All Rights Reserved.
          </p>
        </div>

        <div className="flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#3EB489] transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex space-x-3 text-gray-600 dark:text-gray-400">
          <a
            href={contactInfoData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:text-[#3EB489] hover:border-[#3EB489] transition"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={contactInfoData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:text-[#3EB489] hover:border-[#3EB489] transition"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${contactInfoData.email}`}
            className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:text-[#3EB489] hover:border-[#3EB489] transition"
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
