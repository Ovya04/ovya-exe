import { Bot, Download, Eye, Laptop } from "lucide-react";
import type { ResumeOption } from "../../types/content";
import { PixelButton } from "../pixel-ui";
import styles from "./ResumeCard.module.css";

const icons = { laptop: Laptop, bot: Bot } as const;

export default function ResumeCard({ resume }: { resume: ResumeOption }) {
  const Icon = icons[resume.iconKey];

  return (
    <li className={styles.card}>
      <span className={styles.icon} aria-hidden="true"><Icon size={28} /></span>

      <div className={styles.text}>
        <h2 className={styles.title}>{resume.title}</h2>
        <p className={styles.desc}>{resume.description}</p>
      </div>

      <div className={styles.actions}>
        <PixelButton
          href={resume.viewUrl}
          external
          size="sm"
          icon={<Eye size={16} />}
          aria-label={`View ${resume.title} (opens in new tab)`}
        >
          View
        </PixelButton>
        <PixelButton
          href={resume.downloadUrl}
          external
          size="sm"
          variant="accent"
          icon={<Download size={16} />}
          aria-label={`Download ${resume.title}`}
        >
          Download
        </PixelButton>
      </div>
    </li>
  );
}