/**
 * Education & Experience Data
 * Timeline items for Education and Work Experience.
 */
export interface TimelineItem {
  type: 'Experience' | 'Education';
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accent: 'mint' | 'coral';
}

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
