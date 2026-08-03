/**
 * Quick Counter Statistics
 * Displayed on the Hero counter bar.
 */
export interface StatItem {
  count: number;
  suffix: string;
  label: string;
  color: 'mint' | 'coral';
}

export const statsData: StatItem[] = [
  {
    count: 6,
    suffix: '+',
    label: 'Projects Completed',
    color: 'mint',
  },
  {
    count: 20,
    suffix: '+',
    label: 'Technologies Used',
    color: 'coral',
  },
  {
    count: 2,
    suffix: '',
    label: 'Tech Stacks (MERN & Laravel)',
    color: 'mint',
  },
  {
    count: 100,
    suffix: '%',
    label: 'Commitment to Learning',
    color: 'coral',
  },
];