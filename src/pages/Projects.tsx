// src/pages/Projects.tsx

import { Folder, Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { PixelWindow } from "../components/pixel-ui";
import ProjectFilterBar, { type FilterOption } from "../components/projects/ProjectFilterBar";
import PoseBanner from "../components/avatar/PoseBanner";
import ProjectGrid from "../components/projects/ProjectGrid";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import {
  filterProjects,
  getFeaturedProjects,
  groupProjectsByCategory,
  projectFilters,
  type ProjectFilter,
} from "../utils/projects";
import styles from "./Projects.module.css";

const featured = getFeaturedProjects();
const groups = groupProjectsByCategory();
const filterOptions: FilterOption[] = projectFilters.map((option) => ({
  ...option,
  count: filterProjects(option.value).length,
}));

const isProjectFilter = (value: string | null): value is ProjectFilter =>
  projectFilters.some((option) => option.value === value);

export default function Projects() {
  useDocumentTitle("Projects");

  const [params, setParams] = useSearchParams();
  const rawFilter = params.get("category");
  const filter: ProjectFilter = isProjectFilter(rawFilter) ? rawFilter : "all";

  const visibleGroups = groups.filter(
    (group) => group.projects.length > 0 && (filter === "all" || group.category === filter),
  );
  const count = filterProjects(filter).length;
  const path = `C:\\OVYA\\projects${filter === "all" ? "" : `\\${filter}`}`;

  const handleFilter = (next: ProjectFilter) =>
    setParams(next === "all" ? {} : { category: next }, { replace: true });

  return (
    <>
    <PoseBanner pose="laptop" message="Pick a project to inspect." />
    <PixelWindow title="PROJECTS.EXE" titleAs="h1" tone="blue" icon={<Folder size={16} />}>
      <div className={styles.toolbar}>
        <p className={styles.address}>
          <span className="sr-only">Current folder: </span>
          <code>{path}</code>
        </p>
        <ProjectFilterBar value={filter} options={filterOptions} onChange={handleFilter} />
      </div>

      <div key={filter} className={styles.panel}>
  {filter === "all" && featured.length > 0 && (
    <section className={styles.featured} aria-labelledby="featured-heading">
      <h2 id="featured-heading" className={styles.folderTitle}>
        <Star size={18} aria-hidden="true" /> Featured
      </h2>
      <ProjectGrid projects={featured} featured />
    </section>
  )}

  {visibleGroups.map((group) => (
    <section key={group.category} className={styles.folder} aria-labelledby={`folder-${group.category}`}>
      <h2 id={`folder-${group.category}`} className={styles.folderTitle}>
        <Folder size={18} aria-hidden="true" /> {group.label}
        <span className={styles.itemCount}>{group.projects.length} items</span>
      </h2>
      <ProjectGrid projects={group.projects} />
    </section>
  ))}
</div>

      <p className={styles.status} role="status">
        {count} object(s)
      </p>
    </PixelWindow>
    </>
  );
}