/**
 * Projects Portfolio Data
 * Easily add, remove, or modify your real portfolio projects here!
 */
export interface ProjectCategory {
  id: string;
  name: string;
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

export const projectCategories: ProjectCategory[] = [
  { id: 'all', name: 'All' },
  { id: 'laravel', name: 'Laravel' },
  { id: 'mern', name: 'MERN / Next' },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'metoffice',
    title: 'MetOffice',
    subtitle: 'Employee Management System',
    category: 'MERN / Next',
    badgeLabel: 'Featured',
    description:
      'A full-stack employee management platform with role-based dashboards, authentication, payroll, and employee workflow management.',
    features:
      'Role-Based Dashboard • JWT Auth • Stripe Payments • Employee Management',
    techTags: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Stripe',
      'Tailwind CSS',
    ],
    techSummary:
      'React • Node.js • Express • MongoDB • JWT • Stripe',
    githubUrl: 'https://github.com/dev-habibhossain/tourasia',
    liveUrl: '#',
    image: '',
  },

  {
    id: 'suitetrack',
    title: 'SuiteTrack',
    subtitle: 'Hotel Management Platform',
    category: 'MERN / Next',
    badgeLabel: 'Next.js',
    description:
      'A hotel booking and management platform with room reservations, authentication, and an intuitive admin dashboard.',
    features:
      'Room Booking • Admin Dashboard • Authentication • Responsive UI',
    techTags: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Tailwind CSS',
      'NextAuth',
    ],
    techSummary:
      'Next.js • TypeScript • MongoDB • NextAuth',
    githubUrl: 'https://github.com/DevHabib',
    liveUrl: '#',
    image: '',
  },

  {
    id: 'shopease',
    title: 'ShopEase',
    subtitle: 'Multi-Vendor E-Commerce',
    category: 'Laravel',
    badgeLabel: 'Laravel',
    description:
      'A modern multi-vendor e-commerce application featuring merchant management, product catalog, shopping cart, and secure online payments.',
    features:
      'Merchant Dashboard • Product Management • Shopping Cart • Stripe',
    techTags: [
      'PHP',
      'Laravel',
      'Vue.js',
      'MySQL',
      'Stripe',
    ],
    techSummary:
      'Laravel • Vue.js • MySQL • Stripe',
    githubUrl: 'https://github.com/DevHabib',
    liveUrl: '#',
    image: '/shopEase.png',
  },

  {
    id: 'tour-asia',
    title: 'Tour Asia',
    subtitle: 'Tourism Booking Platform',
    category: 'MERN / Next',
    badgeLabel: 'MERN',
    description:
      'A tourism platform where users can browse destinations, book tour packages, and manage travel experiences.',
    features:
      'Tour Packages • Booking • Authentication • User Dashboard',
    techTags: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
    ],
    techSummary:
      'React • Express • MongoDB • Firebase',
    githubUrl: 'https://github.com/DevHabib',
    liveUrl: '#',
    image: '/TourAsia.png',
  },

  {
    id: 'supreme-gadgets',
    title: 'Supreme Gadgets',
    subtitle: 'E-Commerce Store',
    category: 'MERN / Next',
    badgeLabel: 'React',
    description:
      'An online gadget store with product browsing, filtering, shopping cart, and responsive shopping experience.',
    features:
      'Product Search • Categories • Shopping Cart • Responsive Design',
    techTags: [
      'React',
      'Tailwind CSS',
      'Firebase',
      'REST API',
    ],
    techSummary:
      'React • Tailwind CSS • Firebase',
    githubUrl: 'https://github.com/DevHabib',
    liveUrl: '#',
    image: '',
  },

  {
    id: 'greenguide',
    title: 'GreenGuide',
    subtitle: 'Sustainability Platform',
    category: 'MERN / Next',
    badgeLabel: 'Community',
    description:
      'A community-driven platform promoting sustainable living through eco-friendly resources, tips, and educational content.',
    features:
      'Community Resources • Articles • Responsive Design',
    techTags: [
      'React',
      'Tailwind CSS',
      'Firebase',
    ],
    techSummary:
      'React • Tailwind CSS • Firebase',
    githubUrl: 'https://github.com/DevHabib',
    liveUrl: '#',
    image: '',
  },
];

