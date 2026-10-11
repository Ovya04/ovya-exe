// src/components/projects/ProjectThumb.tsx
import { useState } from "react";
import type { Project } from "../../types/project";
import { cx } from "../../utils/cx";
import { hasText } from "../../utils/text";
import { PixelSprite } from "../pixel-ui";
import { categorySprites } from "./categorySprites";
import styles from "./ProjectThumb.module.css";

export default function ProjectThumb({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const showImage = hasText(project.image) && !failed;

  return (
    <div className={cx(styles.thumb, project.category === "ai-ml" ? styles.ai : styles.dev)}>
      {showImage ? (
        <img
          className={styles.img}
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <PixelSprite {...categorySprites[project.category]} className={styles.sprite} />
      )}
    </div>
  );
}