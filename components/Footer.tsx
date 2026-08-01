import Link from "next/link";
import { navLinks, socialLinksData } from "@/lib/data";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

const iconMap: Record<string, React.ElementType> = {
  GitHubIcon,
  LinkedInIcon,
};

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-brand-darkBorder py-10 mt-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-brand-muted">
        {/* Brand Logo & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link
            href="#"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            Habib.<span className="text-brand-mint">dev</span>
          </Link>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">|</span>
          <p>© {new Date().getFullYear()} Habib Hossain. All Rights Reserved.</p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center items-center space-x-6 text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-brand-mint transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          {socialLinksData.map((social) => {
            const IconComp = iconMap[social.iconName];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:text-brand-mint hover:border-brand-mint transition"
                title={social.name}
                aria-label={social.name}
              >
                {IconComp ? (
                  <IconComp className="w-4 h-4" />
                ) : (
                  <span className="text-[10px] font-bold">
                    {social.name.slice(0, 2)}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
