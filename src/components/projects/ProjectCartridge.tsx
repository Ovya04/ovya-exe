import { useId } from "react";
import { categoryMeta } from "../../data/projects";
import type { Project } from "../../types/project";
import { cx } from "../../utils/cx";
import { getProjectLinks } from "../../utils/projectLinks";
import { hasText } from "../../utils/text";
import styles from "./ProjectCartridge.module.css";
import ProjectLinkButtons from "./ProjectLinkButtons";

export default function ProjectCartridge({ project }: { project: Project }) {
  const titleId = useId();
  const { title, shortTitle, category, typeLabel, year, status } = project;

  const specs: Array<[string, string]> = [["TYPE", typeLabel ?? categoryMeta[category].label]];
  if (hasText(year)) specs.push(["YEAR", year]);
  if (hasText(status)) specs.push(["STATUS", status]);

  return (
    <section className={cx(styles.cartridge, category === "ai-ml" && styles.ai)} aria-labelledby={titleId}>
      <div className={styles.grip} aria-hidden="true"><i /><i /><i /></div>

      <div className={styles.label}>
        <p className={styles.kicker}>OVYA.exe · CASE STUDY</p>
        <h1 id={titleId} className={styles.title}>{title}</h1>
        {hasText(shortTitle) && <p className={styles.subtitle}>{shortTitle}</p>}

        <dl className={styles.specs}>
          {specs.map(([term, value]) => (
            <div key={term} className={styles.row}>
              <dt>{term}:</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {getProjectLinks(project).length > 0 && (
        <div className={styles.actions}>
          <ProjectLinkButtons project={project} />
        </div>
      )}

      <div className={styles.pins} aria-hidden="true" />
    </section>
  );
}