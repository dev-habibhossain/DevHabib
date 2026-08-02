/**
 * ====================================================================
 * DEVHABIB PORTFOLIO - CENTRALIZED DATA DIRECTORY
 * ====================================================================
 * Update dummy data to your real data here!
 *
 * Folder Structure:
 * 📄 data/personal.ts    -> Name, Bio, Phone, Email, Location, Socials & Resumes
 * 📄 data/projects.ts    -> Portfolio Projects (Title, Links, Descriptions, Tech)
 * 📄 data/skills.ts      -> Tech Categories & Marquee Technologies
 * 📄 data/services.ts    -> Services Offered
 * 📄 data/experience.ts  -> Timeline Items (Education & Experience)
 * 📄 data/faqs.ts        -> FAQ Questions & Answers
 * 📄 data/stats.ts       -> Hero Counter Statistics
 * 📄 data/navigation.ts  -> Navbar Section Links
 * ====================================================================
 */

export * from './personal';
export * from './stats';
export * from './skills';
export * from './services';
export * from './projects';
export * from './experience';
export * from './faqs';
export * from './navigation';

import { personalInfo } from './personal';

export const contactInfoData = {
  phone: personalInfo.phone,
  email: personalInfo.email,
  location: personalInfo.location,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
};

export const contactInfoDataList = [
  {
    label: 'Phone / WhatsApp',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    iconName: 'Phone',
    accent: 'mint' as const,
  },
  {
    label: 'E-mail',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    iconName: 'Mail',
    accent: 'coral' as const,
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: null,
    iconName: 'MapPin',
    accent: 'mint' as const,
  },
];

export const socialLinksData = [
  { name: 'GitHub', href: personalInfo.github, iconName: 'GitHubIcon' },
  { name: 'LinkedIn', href: personalInfo.linkedin, iconName: 'LinkedInIcon' },
];
