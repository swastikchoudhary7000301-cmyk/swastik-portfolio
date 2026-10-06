export interface GitHubUser {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
  payload?: {
    commits?: Array<{ message: string }>;
  };
}

export interface LeetCodeSubmission {
  title: string;
  titleSlug: string;
  statusDisplay: string;
  lang: string;
  timestamp: string;
}

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions?: number;
  totalSubmissions?: number;
  ranking?: number | null;
  acceptanceRate?: number | null;
  contributionPoints?: number;
  reputation?: number;
  recentSubmissions?: LeetCodeSubmission[];
  submissionCalendar?: Record<string, number>;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  keyFeatures: string[];
  technologies: string[];
  architecture: string;
  imageSrc: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'active' | 'in-progress' | 'completed';
}

export interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    level: string;
    focus: string;
  }>;
}

export interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
}
