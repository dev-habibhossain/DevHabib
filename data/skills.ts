/**
 * Skills & Technologies Data
 * Includes scrolling marquee tech items and categorized skill groups.
 */
export interface TechCategory {
  id: string;
  title: string;
  iconName: string;
  accent: 'mint' | 'coral';
  skills: string[];
}

export const marqueeTechs = [
  { name: 'HTML5', icon: 'Code', accent: 'mint' },
  { name: 'CSS3', icon: 'Palette', accent: 'coral' },
  { name: 'JavaScript', icon: 'FileCode', accent: 'mint' },
  { name: 'TypeScript', icon: 'Code2', accent: 'coral' },
  { name: 'React', icon: 'Atom', accent: 'mint' },
  { name: 'Next.js', icon: 'Globe', accent: 'coral' },
  { name: 'Tailwind CSS', icon: 'Wind', accent: 'mint' },
  { name: 'Bootstrap', icon: 'Layout', accent: 'coral' },
  { name: 'Node.js', icon: 'Server', accent: 'mint' },
  { name: 'Express.js', icon: 'Cpu', accent: 'coral' },
  { name: 'PHP', icon: 'Layers', accent: 'mint' },
  { name: 'Laravel', icon: 'Box', accent: 'coral' },
  { name: 'MongoDB', icon: 'Database', accent: 'mint' },
  { name: 'MySQL', icon: 'Database', accent: 'coral' },
];

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    iconName: 'Layout',
    accent: 'mint',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Bootstrap'],
  },
  {
    id: 'backend',
    title: 'Backend',
    iconName: 'Server',
    accent: 'coral',
    skills: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST APIs'],
  },
  {
    id: 'database',
    title: 'Database',
    iconName: 'Database',
    accent: 'mint',
    skills: ['MongoDB', 'MySQL', 'Mongoose', 'Eloquent ORM'],
  },
  {
    id: 'tools',
    title: 'Tools',
    iconName: 'Wrench',
    accent: 'coral',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vercel'],
  },
];
