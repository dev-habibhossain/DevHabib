import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AosProvider } from "@/components/AosProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Habib Hossain | Full Stack Developer Portfolio",
  description:
    "Portfolio of Habib Hossain, a passionate Full Stack Developer specializing in MERN Stack and PHP Laravel. Open to remote and on-site opportunities.",
  keywords: [
    "Habib Hossain",
    "Full Stack Developer",
    "MERN Stack",
    "PHP",
    "Laravel",
    "React",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Web Developer Lakshmipur",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Habib Hossain" }],
  openGraph: {
    title: "Habib Hossain | Full Stack Developer Portfolio",
    description:
      "Building modern, scalable, and user-focused web applications with MERN Stack & PHP Laravel.",
    type: "website",
    url: "https://habibhossain.dev",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Habib Hossain Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} font-sans relative bg-white dark:bg-[#0b0f17] text-gray-900 dark:text-gray-100 transition-colors duration-300 antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AosProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
