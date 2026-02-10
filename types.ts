
export interface Service {
  id: number;
  title: string;
  role: string; // New: e.g., "Customer Success"
  description: string;
  features: string[];
  icon: string;
  gradient: string; // New: CSS gradient value
  accent: string;   // New: Hex color for glow
}

export interface CaseStudy {
  id: number;
  title: string;
  industry: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  featuresList?: { title: string; description: string }[];
  processSteps?: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export enum Language {
  RU = 'RU',
  EN = 'EN'
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  telegram: string;
  message: string;
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
}

export interface AboutData {
  name: string;
  role: string;
  bio: string[];
  stats: { label: string; value: string }[];
  skills: string[];
}
