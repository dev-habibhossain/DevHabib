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
