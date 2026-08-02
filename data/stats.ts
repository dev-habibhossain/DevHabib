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
  { count: 6, suffix: '+', label: 'Real Projects Built', color: 'mint' },
  { count: 12, suffix: '+', label: 'Tech Skills Mastered', color: 'coral' },
  { count: 2, suffix: '', label: 'Full Stacks (MERN + Laravel)', color: 'mint' },
  { count: 100, suffix: '%', label: 'Remote/On-site Ready', color: 'coral' },
];
