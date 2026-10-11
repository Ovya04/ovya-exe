// src/components/projects/TechTags.tsx
import { cx } from "../../utils/cx";
import styles from "./TechTags.module.css";

interface TechTagsProps {
  tags: string[];
  /** Show at most this many, then a "+N" chip */
  max?: number;
  className?: string;
}

export default function TechTags({ tags, max, className }: TechTagsProps) {
  if (tags.length === 0) return null; // e.g. Healthcare Chatbot until you fill it in

  const visible = max ? tags.slice(0, max) : tags;
  const hidden = tags.length - visible.length;

  return (
    <ul className={cx(styles.list, className)} aria-label="Technologies">
      {visible.map((tag) => (
        <li key={tag} className={styles.tag}>{tag}</li>
      ))}
      {hidden > 0 && (
        <li className={cx(styles.tag, styles.more)}>
          +{hidden}
          <span className="sr-only"> more technologies</span>
        </li>
      )}
    </ul>
  );
}