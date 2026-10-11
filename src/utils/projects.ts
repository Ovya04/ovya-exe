// src/utils/projects.ts
import { categoryMeta, projects } from "../data/projects";
import type { Project, ProjectCategory } from "../types/project";

export type ProjectFilter = "all" | ProjectCategory;

const categories = Object.keys(categoryMeta) as ProjectCategory[];

export const projectFilters: Array<{ value: ProjectFilter; label: string }> = [
  { value: "all", label: "All" },
  ...categories.map((category) => ({ value: category, label: categoryMeta[category].label })),
];

export const getProjectBySlug = (slug: string | undefined): Project | undefined =>
  projects.find((project) => project.id === slug);

export const filterProjects = (filter: ProjectFilter): Project[] =>
  filter === "all" ? projects : projects.filter((project) => project.category === filter);

export const getFeaturedProjects = (): Project[] =>
  projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));

export const groupProjectsByCategory = () =>
  categories.map((category) => ({
    category,
    label: categoryMeta[category].label,
    projects: filterProjects(category),
  }));

// Dev-only guard: ids double as URL slugs, so duplicates would break routing
if (import.meta.env.DEV) {
  const seen = new Set<string>();
  for (const { id } of projects) {
    if (seen.has(id)) console.warn(`[projects] Duplicate project id: "${id}"`);
    seen.add(id);
  }
}