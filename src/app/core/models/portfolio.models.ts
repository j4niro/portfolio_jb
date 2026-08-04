export interface EducationItem {
  period: string;
  degree: string;
  school: string;
  location: string;
  details?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  context: string;
  action: string;
  result: string;
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  period: string;
  context: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface ProjectVideo {
  title: string;
  description: string;
  technologies: string[];
  videoUrl?: string;
  thumbnailPlaceholder: string;
  projectLink?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  domain: string;
  skills: string[];
  result: string;
}

export interface Achievement {
  title: string;
  event: string;
  period: string;
  description: string;
  result: string;
}
