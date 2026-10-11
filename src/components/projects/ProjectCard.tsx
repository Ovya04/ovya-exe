import { ArrowRight, Star } from "lucide-react";
import { categoryMeta } from "../../data/projects";
import type { Project } from "../../types/project";
import { cx } from "../../utils/cx";
import { hasText } from "../../utils/text";
import { PixelButton } from "../pixel-ui";
import styles from "./ProjectCard.module.css";
import ProjectLinkButtons from "./ProjectLinkButtons";
import ProjectThumb from "./ProjectThumb";
import TechTags from "./TechTags";

interface ProjectCardProps {
  project: Project;
  /** Adds a "Featured" badge */
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { id, title, category, year, status, summary, techStack } = project;

  return (
    <article className={styles.card}>
      <ProjectThumb project={project} />

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={cx(styles.chip, category === "ai-ml" ? styles.ai : styles.dev)}>
            {categoryMeta[category].label}
          </span>
          {featured && (
            <span className={styles.featured}>
              <Star size={12} aria-hidden="true" /> Featured
            </span>
          )}
          {hasText(year) && <span className={styles.year}>{year}</span>}
          {hasText(status) && <span className={styles.status}>{status}</span>}
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
        <TechTags tags={techStack} max={4} />

        <div className={styles.actions}>
  <ProjectLinkButtons project={project} />
  <PixelButton
    to={`/projects/${id}`}
    size="sm"
    icon={<ArrowRight size={16} />}
    aria-label={`View Case Study: ${title}`}
  >
    View Case Study
  </PixelButton>
</div>
      </div>
    </article>
  );
}