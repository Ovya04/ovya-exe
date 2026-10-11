// src/components/home/FeaturedStrip.tsx
import { Link } from "react-router-dom";
import { categoryMeta } from "../../data/projects";
import { getFeaturedProjects } from "../../utils/projects";
import { PixelButton, PixelWindow } from "../pixel-ui";
import styles from "./FeaturedStrip.module.css";

const featured = getFeaturedProjects();

export default function FeaturedStrip() {
  return (
    <PixelWindow title="FEATURED.exe" titleAs="h2" tone="yellow">
      <ul className={styles.grid}>
        {featured.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`} className={styles.card}>
              <span className={styles.title}>{project.title}</span>
              <span className={styles.sub}>{project.shortTitle ?? categoryMeta[project.category].label}</span>
              {project.status && <span className={styles.chip}>{project.status}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        <PixelButton to="/projects" size="sm" variant="secondary">Browse all projects</PixelButton>
      </div>
    </PixelWindow>
  );
}