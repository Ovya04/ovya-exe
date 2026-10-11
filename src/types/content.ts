// src/types/content.ts


export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}
export interface Skill {
  id: string;
  name: string;
  /** Other spellings used in project techStack arrays */
  aliases?: string[];
  /** Free-text usage notes that don't map to a project */
  extraUsedIn?: string[];
  /** Course ids from coursework.ts */
  courseIds?: string[];
  /** Override the 2-letter slot glyph */
  glyph?: string;
}
export interface Course {
  id: string;
  name: string;
  /** e.g. "Foundation", "Diploma · Programming" */
  level: string;
  /** Academic projects done in this course (ids from projects.ts) */
  projectIds?: string[];
}

export type AchievementIcon = "trophy" | "patent" | "graduation" | "paper" | "medal";

export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: AchievementIcon;
}

export type JourneyKind = "education" | "milestone";

export interface JourneyEntry {
  id: string;
  kind: JourneyKind;
  title: string;
  organization?: string;
  period?: string;
  summary?: string;
  details?: string[];
}

export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  summary?: string;
}

export interface SocialLink {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string;
  /** Short pixel-font badge text */
  short: string;
  /** Shown as a quick link in the taskbar */
  quick?: boolean;
}

export interface ResumeOption {
  id: string;
  title: string;
  description: string;
  iconKey: "laptop" | "bot";
  /** File in /public. Replace the PDF, no code changes needed. */
  viewUrl: string;
  downloadUrl: string;
  
}