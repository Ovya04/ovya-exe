// src/types/project.ts
export type ProjectCategory = "development" | "ai-ml";

export interface LabelValue {
  label: string;
  value: string;
}

export interface ProjectSections {
  problem?: string;
  approach?: string;
  architecture?: string;
  challenges?: string;
  results?: string;
  learnings?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  /** "download" gets a download icon and a yellow button */
  kind?: "download" | "external";
}

export interface Project {
  /** Also the URL slug: /projects/:id */
  id: string;
  title: string;
  shortTitle?: string;
  category: ProjectCategory;
  /** Cartridge "TYPE:" line, e.g. "AI / HCI". Falls back to the category label. */
  typeLabel?: string;
  featured?: boolean;
  /** Lower comes first in the featured list */
  featuredOrder?: number;
  year?: string;
  status?: string;
  /** 1–2 sentences, shown on cards */
  summary: string;
  /** "01 — Overview" */
  description?: string;
  techStack: string[];
  features?: string[];
  /** Only real, supplied numbers */
  metrics?: LabelValue[];
  /** At-a-glance details (data range, bands, ...) */
  facts?: LabelValue[];
  /** Falls back to a pixel icon when missing */
  image?: string;
  /** Empty/undefined means the button is not rendered */
  github?: string;
  demo?: string;
  /** Extra buttons: Download, Kaggle, Paper, Report... */
  links?: ProjectLink[];
  /** Shows a visible "TODO" notice on the case study */
  todo?: string;
  /** Empty sections are not rendered */
  sections?: ProjectSections;
}