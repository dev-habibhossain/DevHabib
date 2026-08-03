/**
 * Services Data
 * Services offered by the developer.
 */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accent: 'mint' | 'coral';
}

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'Frontend Development',
    description:
      'Build modern, responsive, and interactive user interfaces using React, Next.js, TypeScript, Tailwind CSS, and Bootstrap.',
    iconName: 'Monitor',
    accent: 'mint',
  },
  {
    id: 's2',
    title: 'MERN Stack Development',
    description:
      'Develop full-stack web applications using MongoDB, Express.js, React, Next.js, and Node.js with clean and scalable code.',
    iconName: 'Layers',
    accent: 'coral',
  },
  {
    id: 's3',
    title: 'Laravel Development',
    description:
      'Create secure and maintainable web applications with PHP Laravel, MySQL, Blade, and RESTful APIs.',
    iconName: 'Server',
    accent: 'mint',
  },
  {
    id: 's4',
    title: 'API Integration & Authentication',
    description:
      'Integrate REST APIs, implement JWT and NextAuth authentication, and connect third-party services like Stripe and Firebase.',
    iconName: 'ShieldCheck',
    accent: 'coral',
  },
  {
    id: 's5',
    title: 'Responsive UI & Dashboards',
    description:
      'Design mobile-first websites, admin dashboards, and reusable UI components with a clean, modern user experience.',
    iconName: 'LayoutDashboard',
    accent: 'mint',
  },
  {
    id: 's6',
    title: 'Deployment & Maintenance',
    description:
      'Deploy applications on Vercel, manage Git/GitHub workflows, fix bugs, and improve application performance.',
    iconName: 'Rocket',
    accent: 'coral',
  },
];