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
  { name: 'MongoDB', icon: 'Database', accent: 'mint' },
  { name: 'Firebase', icon: 'Flame', accent: 'coral' },
  { name: 'PHP', icon: 'Layers', accent: 'mint' },
  { name: 'Laravel', icon: 'Box', accent: 'coral' },
  { name: 'MySQL', icon: 'Database', accent: 'mint' },
  { name: 'Git', icon: 'GitBranch', accent: 'coral' },
  { name: 'GitHub', icon: 'Github', accent: 'mint' },
  { name: 'Docker', icon: 'Container', accent: 'coral' },
  { name: 'Postman', icon: 'Send', accent: 'mint' },
  { name: 'Vercel', icon: 'Cloud', accent: 'coral' },
];

export const techCategories: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    iconName: 'Layout',
    accent: 'mint',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Bootstrap',
      'Sass',
      'Material UI',
      'DaisyUI',
      'Styled Components',
      'Framer Motion',
      'Responsive Design',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    iconName: 'Server',
    accent: 'coral',
    skills: [
      'Node.js',
      'Express.js',
      'PHP',
      'Laravel',
      'REST APIs',
      'JWT Authentication',
      'NextAuth.js',
      'Stripe',
      'SSLCommerz',
    ],
  },
  {
    id: 'database',
    title: 'Database',
    iconName: 'Database',
    accent: 'mint',
    skills: [
      'MongoDB',
      'Mongoose',
      'MySQL',
      'Eloquent ORM',
      'Firebase Firestore',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    iconName: 'Wrench',
    accent: 'coral',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Cursor',
      'Docker',
      'Postman',
      'Figma',
      'Vercel',
      'Netlify',
      'NPM',
      'Linux',
    ],
  },
];