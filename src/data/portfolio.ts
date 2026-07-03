import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Terminal,
} from 'lucide-react';
import type { PortfolioData } from '@/types';

/**
 * ────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Edit this file to customize the entire portfolio. The UI renders
 *  automatically from the values below — no component edits required.
 * ────────────────────────────────────────────────────────────────
 */
export const portfolio: PortfolioData = {
  personal: {
    name: 'Alex Doe',
    title: 'Senior Full-Stack Engineer',
    intro:
      'I design and build fast, accessible, and delightful web experiences — from pixel-perfect interfaces to resilient backend systems.',
    bio: [
      "I'm a full-stack engineer with a passion for crafting products that feel effortless to use. Over the past decade I've led teams, shipped products used by millions, and mentored engineers at every level.",
      'When I\'m not writing code, you\'ll find me contributing to open source, writing about web performance, or exploring the outdoors with a camera in hand.',
    ],
    location: 'San Francisco, CA',
    email: 'hello@alexdoe.dev',
    yearsOfExperience: 10,
    resumeUrl: '/resume.pdf',
    avatarUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=640&q=80&auto=format&fit=crop',
    availableForWork: true,
  },

  nav: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ],

  socials: [
    { label: 'GitHub', href: 'https://github.com/alexdoe', icon: Github },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/alexdoe', icon: Linkedin },
    { label: 'Twitter / X', href: 'https://twitter.com/alexdoe', icon: Twitter },
    { label: 'Email', href: 'mailto:hello@alexdoe.dev', icon: Mail },
  ],

  skills: [
    {
      category: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' },
        { name: 'Vue' },
        { name: 'Framer Motion' },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js' },
        { name: 'NestJS' },
        { name: 'GraphQL' },
        { name: 'Python' },
        { name: 'Go' },
        { name: 'REST' },
      ],
    },
    {
      category: 'Database',
      icon: Database,
      skills: [
        { name: 'PostgreSQL' },
        { name: 'DynamoDB' },
        { name: 'Redis' },
        { name: 'MongoDB' },
        { name: 'Prisma' },
      ],
    },
    {
      category: 'Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS' },
        { name: 'Vercel' },
        { name: 'Cloudflare' },
        { name: 'GCP' },
        { name: 'Serverless' },
      ],
    },
    {
      category: 'DevOps',
      icon: Terminal,
      skills: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'GitHub Actions' },
        { name: 'Terraform' },
      ],
    },
    {
      category: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git' },
        { name: 'Figma' },
        { name: 'Vite' },
        { name: 'Playwright' },
        { name: 'Storybook' },
      ],
    },
  ],

  experience: [
    {
      company: 'Nebula Labs',
      role: 'Staff Software Engineer',
      duration: '2021 — Present',
      location: 'Remote',
      description:
        'Lead the frontend platform team, driving architecture for a design system used across 12 product squads. Cut bundle size by 38% and improved LCP from 3.1s to 1.4s.',
      technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'AWS'],
    },
    {
      company: 'Orbit Financial',
      role: 'Senior Frontend Engineer',
      duration: '2018 — 2021',
      location: 'San Francisco, CA',
      description:
        'Built the customer-facing trading dashboard handling real-time market data for 500k+ users. Established the testing culture and component library.',
      technologies: ['React', 'Redux', 'WebSockets', 'D3.js', 'Jest'],
    },
    {
      company: 'Pixel Foundry',
      role: 'Full-Stack Engineer',
      duration: '2015 — 2018',
      location: 'Austin, TX',
      description:
        'Shipped end-to-end features for e-commerce clients — from Stripe-powered checkout flows to Node.js APIs and CI/CD pipelines.',
      technologies: ['Node.js', 'Vue', 'PostgreSQL', 'Docker', 'Stripe'],
    },
  ],

  education: [
    {
      institution: 'University of California, Berkeley',
      degree: 'B.S. in Computer Science',
      duration: '2011 — 2015',
      description: 'Focus on distributed systems and human-computer interaction.',
    },
  ],

  projects: [
    {
      title: 'Aurora Analytics',
      description:
        'A real-time product analytics dashboard with sub-second query performance over billions of events. Built with a columnar store and a virtualized React UI.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop',
      tech: ['React', 'TypeScript', 'ClickHouse', 'Go'],
      githubUrl: 'https://github.com/alexdoe/aurora',
      liveUrl: 'https://aurora.example.com',
      featured: true,
    },
    {
      title: 'Drift Design System',
      description:
        'An open-source, accessible React component library with 60+ components, full theming, and zero-runtime CSS. 4k+ GitHub stars.',
      image:
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80&auto=format&fit=crop',
      tech: ['React', 'Radix', 'Tailwind', 'Storybook'],
      githubUrl: 'https://github.com/alexdoe/drift',
      liveUrl: 'https://drift.example.com',
      featured: true,
    },
    {
      title: 'Ferry',
      description:
        'A type-safe, end-to-end job queue for TypeScript with retries, scheduling, and a live web inspector.',
      image:
        'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800&q=80&auto=format&fit=crop',
      tech: ['Node.js', 'Redis', 'TypeScript'],
      githubUrl: 'https://github.com/alexdoe/ferry',
    },
    {
      title: 'Snapshot',
      description:
        'A privacy-first, self-hosted screenshot and screen-recording tool with instant shareable links.',
      image:
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80&auto=format&fit=crop',
      tech: ['Next.js', 'WebRTC', 'S3'],
      liveUrl: 'https://snapshot.example.com',
    },
  ],

  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialUrl: 'https://www.credly.com/',
    },
    {
      name: 'Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2022',
      credentialUrl: 'https://www.credential.net/',
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'The Linux Foundation',
      date: '2021',
      credentialUrl: 'https://www.credly.com/',
    },
    {
      name: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: '2020',
      credentialUrl: 'https://www.coursera.org/',
    },
  ],

  testimonials: [
    {
      name: 'Priya Nair',
      role: 'VP of Engineering',
      company: 'Nebula Labs',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80&auto=format&fit=crop',
      quote:
        'Alex is the rare engineer who elevates everyone around them. Their work on our design system fundamentally changed how fast we ship.',
    },
    {
      name: 'Marcus Chen',
      role: 'Product Lead',
      company: 'Orbit Financial',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop',
      quote:
        'The trading dashboard Alex built handled our busiest days without a hiccup. Meticulous, thoughtful, and genuinely a joy to work with.',
    },
    {
      name: 'Sofia Ramirez',
      role: 'Founder',
      company: 'Pixel Foundry',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
      quote:
        'Give Alex an ambiguous problem and you get back a polished, production-ready solution. I would hire them again in a heartbeat.',
    },
  ],

  seo: {
    title: 'Alex Doe — Senior Full-Stack Engineer',
    description:
      'Portfolio of Alex Doe, a senior full-stack engineer building fast, accessible, and delightful web experiences.',
    siteUrl: 'https://alexdoe.dev',
    ogImage: '/og-image.svg',
    twitterHandle: '@alexdoe',
    keywords: ['software engineer', 'full-stack', 'react', 'typescript', 'portfolio'],
  },
};
