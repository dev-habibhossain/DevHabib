/**
 * ====================================================================
 * CENTRALIZED DATA DIRECTORY
 * ====================================================================
 */

export * from "./personal";
export * from "./stats";
export * from "./skills";
export * from "./services";
export * from "./projects";
export * from "./experience";
export * from "./faqs";
export * from "./navigation";

import { personalInfo } from "./personal";

export const contactInfoData = {
  phone: personalInfo?.phone ?? "",
  email: personalInfo?.email ?? "",
  location: personalInfo?.location ?? "",
  github: personalInfo?.github ?? "",
  linkedin: personalInfo?.linkedin ?? "",
};

export const contactInfoDataList = [
  {
    label: "Phone / WhatsApp",
    value: personalInfo?.phone ?? "",
    href: personalInfo?.phone ? `tel:${personalInfo.phone}` : null,
    iconName: "Phone",
    accent: "mint" as const,
  },
  {
    label: "Email",
    value: personalInfo?.email ?? "",
    href: personalInfo?.email ? `mailto:${personalInfo.email}` : null,
    iconName: "Mail",
    accent: "coral" as const,
  },
  {
    label: "Location",
    value: personalInfo?.location ?? "",
    href: null,
    iconName: "MapPin",
    accent: "mint" as const,
  },
];

export const socialLinksData = [
  {
    name: "GitHub",
    href: personalInfo?.github ?? "",
    iconName: "GitHubIcon",
  },
  {
    name: "LinkedIn",
    href: personalInfo?.linkedin ?? "",
    iconName: "LinkedInIcon",
  },
];