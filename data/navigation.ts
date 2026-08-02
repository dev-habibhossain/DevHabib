/**
 * Navigation Bar Links Data
 */
export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education & Exp', href: '#education' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];
