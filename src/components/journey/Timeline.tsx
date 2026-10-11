// src/components/journey/Timeline.tsx
import { Flag, GraduationCap } from "lucide-react";
import type { JourneyEntry, JourneyKind } from "../../types/content";
import { cx } from "../../utils/cx";
import { hasText } from "../../utils/text";
import styles from "./Timeline.module.css";

const kindLabel: Record<JourneyKind, string> = {
  education: "Education",
  milestone: "Milestone",
};

export default function Timeline({ entries }: { entries: JourneyEntry[] }) {
  return (
    <ol className={styles.list}>
      {entries.map((entry) => {
        const isEducation = entry.kind === "education";
        const Icon = isEducation ? GraduationCap : Flag;
        return (
          <li key={entry.id} className={cx(styles.item, isEducation && styles.edu)}>
            <span className={styles.marker} aria-hidden="true">
              <Icon size={20} />
            </span>
            <div className={styles.card}>
              <p className={styles.kind}>{kindLabel[entry.kind]}</p>
              <h3 className={styles.title}>{entry.title}</h3>
              {hasText(entry.organization) && <p className={styles.org}>{entry.organization}</p>}
              {hasText(entry.period) && <p className={styles.period}>{entry.period}</p>}
              {hasText(entry.summary) && <p className={styles.summary}>{entry.summary}</p>}
              {entry.details && entry.details.length > 0 && (
                <ul className={styles.details}>
                  {entry.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}