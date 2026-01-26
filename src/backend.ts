// Backend type definitions
export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits?: string;
  postedDate: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  email?: string;
  phone?: string;
  businessHours?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    youtube?: string;
  };
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  position: string;
  bio: string;
  image?: string;
  photoUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface WhitePaper {
  id: bigint;
  title: string;
  description: string;
  shortDescription?: string;
  longDescription?: string;
  author: string;
  publishedDate: bigint;
  downloadUrl: string;
  downloadCount: number;
  tags: string[];
  thumbnail?: string;
  fileSize?: number;
  file?: string;
}
