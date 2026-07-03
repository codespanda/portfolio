import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  /** Section id used for in-page anchor scrolling (without the leading #). */
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  /** Short professional headline, e.g. "Senior Full-Stack Engineer". */
  title: string;
  /** One or two sentence intro shown in the hero. */
  intro: string;
  /** Longer biography shown in the About section (supports multiple paragraphs). */
  bio: string[];
  location: string;
  email: string;
  yearsOfExperience: number;
  /** Path or URL to the resume file (e.g. "/resume.pdf"). */
  resumeUrl: string;
  /** Path or URL to the profile image. */
  avatarUrl: string;
  availableForWork: boolean;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: { name: string; icon?: LucideIcon }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  /** Human-readable duration, e.g. "2021 — Present". */
  duration: string;
  location?: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  /** Absolute canonical URL of the deployed site. */
  siteUrl: string;
  /** Path or URL to the Open Graph / Twitter card image. */
  ogImage: string;
  twitterHandle?: string;
  keywords?: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  nav: NavLink[];
  socials: SocialLink[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
  certifications: Certification[];
  testimonials: Testimonial[];
  seo: SeoConfig;
}
