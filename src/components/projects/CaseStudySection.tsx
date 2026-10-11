// src/components/projects/CaseStudySection.tsx
import { useId, type ReactNode } from "react";
import styles from "./CaseStudySection.module.css";

interface CaseStudySectionProps {
  index: number;
  title: string;
  children: ReactNode;
}

export default function CaseStudySection({ index, title, children }: CaseStudySectionProps) {
  const headingId = useId();

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.heading}>
        <span className={styles.num}>{String(index).padStart(2, "0")}</span> — {title}
      </h2>
      <div className={styles.body}>{children}</div>
    </section>
  );
}