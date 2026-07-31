export interface NavLink {
  name: string;
  href: string;
}

export interface StatItem {
  count: number;
  suffix: string;
  label: string;
  color: 'mint' | 'coral';
}

export interface TechCategory {
  id: string;
  title: string;
  iconName: string;
  accent: 'mint' | 'coral';
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accent: 'mint' | 'coral';
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Laravel' | 'MERN / Next';
  badgeLabel: string;
  description: string;
  features: string;
  techTags: string[];
  techSummary: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export interface TimelineItem {
  type: 'Experience' | 'Education';
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accent: 'mint' | 'coral';
}

export interface FAQItem {
  question: string;
  answer: string;
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

export const statsData: StatItem[] = [
  { count: 6, suffix: '+', label: 'Real Projects Built', color: 'mint' },
  { count: 12, suffix: '+', label: 'Tech Skills Mastered', color: 'coral' },
  { count: 2, suffix: '', label: 'Full Stacks (MERN + Laravel)', color: 'mint' },
  { count: 100, suffix: '%', label: 'Remote/On-site Ready', color: 'coral' },
];

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

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'Full Stack Web Development',
    description: 'End-to-end modern web applications built using MERN Stack or PHP Laravel architecture.',
    iconName: 'Code2',
    accent: 'mint',
  },
  {
    id: 's2',
    title: 'MERN Stack Development',
    description: 'Fast, scalable SPAs with MongoDB, Express.js, React, Next.js, and Node.js.',
    iconName: 'Layers',
    accent: 'coral',
  },
  {
    id: 's3',
    title: 'PHP Laravel Development',
    description: 'Robust web solutions, MVC backends, and relational database integrations with PHP & Laravel.',
    iconName: 'Server',
    accent: 'mint',
  },
  {
    id: 's4',
    title: 'REST API & Auth Systems',
    description: 'Secure REST API development, JWT authentication mechanisms, and seamless middleware integration.',
    iconName: 'Cpu',
    accent: 'coral',
  },
  {
    id: 's5',
    title: 'Responsive Website & Dashboards',
    description: 'Mobile-first responsive frontend design and custom admin dashboard development using Tailwind CSS & Bootstrap.',
    iconName: 'Layout',
    accent: 'mint',
  },
  {
    id: 's6',
    title: 'Database Design & Optimization',
    description: 'Database schema modeling with MongoDB & MySQL, bug fixing, and web performance optimization.',
    iconName: 'Database',
    accent: 'coral',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'shopease',
    title: 'ShopEase',
    subtitle: 'E-Commerce Platform',
    category: 'Laravel',
    badgeLabel: 'Laravel / Vue',
    description: 'Full-featured e-commerce system with merchant portal, product catalog, cart, and Stripe payment processing.',
    features: 'Merchant Dashboard, Cart, Stripe',
    techTags: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Stripe'],
    techSummary: 'PHP, Laravel, Vue.js, MySQL, Stripe',
    githubUrl: 'https://github.com/habibhossain',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'metoffice',
    title: 'MetOffice',
    subtitle: 'Employee & HR Platform',
    category: 'MERN / Next',
    badgeLabel: 'MERN Stack',
    description: 'Comprehensive HR management platform for tracking employee records, payroll, attendance, and internal updates.',
    features: 'JWT Auth, HR Analytics, Payroll Stripe',
    techTags: ['React', 'Node.js', 'Express', 'MongoDB'],
    techSummary: 'React, Node.js, Express, MongoDB',
    githubUrl: 'https://github.com/habibhossain',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'suitetrack',
    title: 'Suitetrack',
    subtitle: 'Hotel Management Platform',
    category: 'MERN / Next',
    badgeLabel: 'Next.js / TS',
    description: 'Modern hotel suite management system for booking suites, managing reservations, and guest workflows.',
    features: 'Suite Booking, Real-time Status',
    techTags: ['Next.js', 'TypeScript', 'MongoDB'],
    techSummary: 'Next.js, TypeScript, MongoDB',
    githubUrl: 'https://github.com/habibhossain',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'greenguide',
    title: 'GreenGuide',
    subtitle: 'Sustainability Platform',
    category: 'MERN / Next',
    badgeLabel: 'Web App',
    description: 'Web application helping users discover eco-friendly practices, sustainability guides, and community tips.',
    features: 'Resource Library, Guides',
    techTags: ['React', 'JavaScript', 'Tailwind CSS'],
    techSummary: 'React, JavaScript, Tailwind CSS',
    githubUrl: 'https://github.com/habibhossain',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'tour-asia',
    title: 'Tour Asia',
    subtitle: 'Tourism Booking Platform',
    category: 'MERN / Next',
    badgeLabel: 'Travel Web',
    description: 'Travel booking platform showcasing Asian tour packages, custom itineraries, and travel bookings.',
    features: 'Tour Packages, Booking System',
    techTags: ['Full Stack', 'Web Tech'],
    techSummary: 'Full Stack Web Technologies',
    githubUrl: 'https://github.com/habibhossain',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'supreme-gadgets',
    title: 'Supreme Gadgets',
    subtitle: 'Tech Gadgets Store',
    category: 'MERN / Next',
    badgeLabel: 'E-Commerce',
    description: 'E-commerce platform for tech gadgets, electronics filtering, interactive search, and shopping cart.',
    features: 'Product Filtering, Cart & Checkout',
    techTags: ['React', 'Tailwind CSS', 'Web API'],
    techSummary: 'React, Tailwind CSS, Web API',
    githubUrl: 'https://github.com/habibhossain',
    liveUrl: '#',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
  },
];

export const timelineData: TimelineItem[] = [
  {
    type: 'Experience',
    badge: 'Fresher',
    title: 'Full Stack Developer',
    subtitle: 'MERN & Laravel Projects',
    description: 'Building projects in MERN Stack & PHP Laravel with a focus on clean, scalable web development.',
    iconName: 'Briefcase',
    accent: 'coral',
  },
  {
    type: 'Education',
    badge: 'Graduation: 2026',
    title: 'BA (Honours) in Economics',
    subtitle: 'Lakshmipur Government College',
    description: 'Lakshmipur Government College',
    iconName: 'GraduationCap',
    accent: 'mint',
  },
];

export const faqData: FAQItem[] = [
  {
    question: 'What is your primary tech stack preference?',
    answer: 'I am equally proficient in both the MERN Stack (MongoDB, Express, React, Node) and PHP Laravel. I select the stack best suited for the specific project requirements.',
  },
  {
    question: 'Are you open to full-time remote or on-site roles?',
    answer: "Yes, I am actively seeking full-time remote or on-site developer positions. I am based in Lakshmipur, Bangladesh, and ready to adapt to your team's workflow and timezone.",
  },
  {
    question: 'How do you handle project timeline and communication?',
    answer: 'I maintain active communication via WhatsApp, Slack, GitHub, or Email with regular updates, clear documentation, and clean code version control.',
  },
];

export const contactInfoData = {
  phone: '+880 1800-000000',
  email: 'habibhossain.dev@gmail.com',
  location: 'Lakshmipur, Chittagong, Bangladesh',
  github: 'https://github.com/habibhossain',
  linkedin: 'https://linkedin.com/in/habibhossain',
};
