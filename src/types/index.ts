export interface Project {
  id: string;
  title: string;
  category: 'thesis' | 'academic' | 'portfolio' | 'internship';
  categoryLabel: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Completed' | 'Ongoing' | 'Thesis Project' | 'Repository Available';
  statusNote?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  status: 'Ongoing' | 'Completed';
  type: 'internship' | 'mentorship';
  description: string;
  highlights: string[];
  tools: string[];
  verificationDocument?: {
    title: string;
    type: 'image' | 'pdf';
    url: string;
  };
}

export interface CertificationItem {
  id: string;
  title: string;
  recipientName: string;
  issuer: string;
  issueDate: string;
  credentialNote?: string;
  description: string;
  projectsIncluded?: string[];
  documentUrl: string;
  documentType: 'image' | 'pdf';
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    verifiedContext?: string;
  }[];
}

export interface RemoteService {
  id: string;
  title: string;
  category: 'data' | 'admin' | 'dev';
  description: string;
  deliverables: string[];
  toolsUsed: string[];
}
