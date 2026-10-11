// src/components/projects/ProjectGrid.tsx
import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
  featured?: boolean;
}

export default function ProjectGrid({ projects, featured = false }: ProjectGridProps) {
  return (
    <ul className={styles.grid}>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} featured={featured} />
        </li>
      ))}
    </ul>
  );
}