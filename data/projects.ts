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

export const projectItems: ProjectItem[] = projectsData;
