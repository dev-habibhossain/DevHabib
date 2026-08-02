/**
 * Frequently Asked Questions (FAQ) Data
 */
export interface FAQItem {
  question: string;
  answer: string;
}

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
    question: 'How quickly can you start?',
    answer: 'I am available immediately and ready to contribute to projects right away.',
  },
];
